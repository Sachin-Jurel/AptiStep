import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import userModel from "./models/user.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import upload from "./config/multerConfig.js";
import { GoogleGenAI } from "@google/genai";

import prompt from "./Prompts/TestPrompt.js";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));
app.use("/uploads", express.static("uploads"));

await mongoose.connect("mongodb://127.0.0.1:27017/AptiStep");

app.get("/", (req, res) => {
  console.log("home page");
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = await userModel.create({ username, email, password });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    });

    const { password: _, ...userData } = newUser.toObject();
    res.json(userData);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const existUser = await userModel.findOne({ email });
  if (!existUser)
    return res.status(400).json({ message: "Invalid user or password" });
  const isPassword = await existUser.comparePass(password);
  if (!isPassword) {
    return res.status(400).json({ message: "Invalid user or password" });
  }
  console.log("login successful");
  const token = jwt.sign({ id: existUser._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 1000,
  });
  res.status(200).json({ message: "Login successful", user: existUser });
});

app.get("/user", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "No token, unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const user = await userModel.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("Get /user error:", err);
    res.status(403).json({ error: "Invalid or expired token" });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false,
  });
  return res.json({ message: "Logged out successfully" });
});

app.put("/user/edit", upload.single("avatar"), async (req, res) => {
  try {
    const { username, college, bio } = req.body;
    const token = req.cookies.token;
    if (!token)
      return res.status(401).json({ error: "No token, unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const existingUser = await userModel.findById(userId);
    if (!existingUser) return res.status(404).json({ error: "User not found" });

    let updateData = {
      username: username || existingUser.username,
      college: college || existingUser.college,
      bio: bio || existingUser.bio,
      profilePic: existingUser.profilePic,
    };

    if (req.file) {
      updateData.profilePic = req.file.path;
    }

    const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    res.status(200).json({ message: "Profile updated", updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/user/test", upload.single("avatar"), async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const updatedUser = await userModel
      .findById(decoded.id)
      .select("-password");

    res.json({ message: "Profile updated", updatedUser });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/user/test/start", upload.single("avatar"), async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const updatedUser = await userModel.findById(decoded.id).select("-password");

    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const text = response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    const cleanText = text.replace(/```json|```/g, "").trim();

    let questions = [];
    if (cleanText) {
      try {
        questions = JSON.parse(cleanText);
      } catch {
        console.error("Invalid JSON from Gemini:", cleanText);
      }
    }

    res.json({ updatedUser, questions });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: err.message });
  }
});


app.listen("8080", () => {
  console.log("server is running on port 8080");
});
