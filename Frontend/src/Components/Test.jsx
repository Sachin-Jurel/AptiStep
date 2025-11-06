import React, { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { FileText, Clock, Zap, BookOpen, ClipboardList } from "lucide-react";

const Test = (props) => {
  const [activeTab, setActiveTab] = useState("full");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-4xl bg-blue-500 border-10 border-blue-500 rounded-xl">
            {props.topic.icon}
          </span>
          <div className="text-4xl mt-5 font-bold text-gray-900">
            {props.topic.topic}
          </div>
          <div className="text-xl mt-1 font-bold text-gray-500">
            {props.topic.Desc}
          </div>
        </div>
      </div>

      <div className="text-center shadow-2xl font-bold p-2 w-60 h-12 bg-white mx-auto rounded-xl flex justify-center gap-4">
        <span
          onClick={() => setActiveTab("full")}
          className={`cursor-pointer h-8 w-25 flex items-center justify-center rounded-lg transition-all duration-300 ${
            activeTab === "full"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Full Test
        </span>

        <span
          onClick={() => setActiveTab("topic")}
          className={`cursor-pointer flex items-center justify-center h-8 w-30 rounded-lg transition-all duration-300 ${
            activeTab === "topic"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Topic-wise
        </span>
      </div>

      {activeTab === "full" ? (
        <div className="w-200 h-fit mb-5 shadow-2xs bg-white mx-auto mt-10 rounded-xl">
          <div className="m-0 w-full h-20 bg-blue-600 flex items-center justify-around rounded-t-xl">
            <div className="flex">
              <div className="h-10 w-10 flex items-center justify-center bg-blue-400 rounded-md">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-white text-xl ml-3 font-bold text-center">
                  {props.topic.questions}
                </div>
                <div className="text-white text-center ml-3 text-sm">
                  Questions
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="h-10 w-10 flex items-center justify-center bg-blue-400 rounded-md">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-white ml-3 text-xl font-bold text-center">
                  {props.topic.duration}
                </div>
                <div className="text-white text-center text-sm">Duration</div>
              </div>
            </div>
            <div className="flex">
              <div className="h-10 w-10 flex items-center justify-center bg-blue-400 rounded-md">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-white ml-3 text-xl font-bold text-center">
                  {props.topic.difficulty}
                </div>
                <div className="text-white text-center text-sm">Difficulty</div>
              </div>
            </div>
          </div>

          <div className="m-5 mt-10 flex items-center gap-4">
            <div className="h-10 w-10 bg-gray-300 flex items-center justify-center rounded-md text-gray-700 shadow-2xl">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">
                Topics Covered
              </div>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap mx-10">
            {props.topic.topics.map((t) => (
              <div className="h-15 p-2 w-55 bg-gray-200 font-semibold flex items-center justify-center text-xl text-gray-700 rounded-md">
                {t}
              </div>
            ))}
          </div>

          <div>
            <div className="m-5 mt-10 flex items-center gap-4">
              <div className="h-10 w-10 bg-gray-300 flex items-center justify-center rounded-md text-gray-700 shadow-2xl">
                <ClipboardList className="h-5 w-5" />{" "}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  Test Instructions
                </div>
              </div>
            </div>
            <div className="mx-10 mb-10 text-gray-700 font-semibold text-lg leading-7">
              {props.topic.instructions.map((inst, index) => (
                <div key={index} className="mb-3">
                  {index + 1}. {inst}
                </div>
              ))}
            </div>
          </div>

          <div className="m-5 flex justify-between items-center">
            <div className="mb-10 flex gap-2">
              <div className="font-semibold text-xl">Ready to begin?</div>
              <p className="mt-1">
                Make sure you have a stable internet connection.
              </p>
            </div>
            <button className="h-12 w-50 bg-blue-700 text-white font-semibold rounded-md" onClick={()=> navigate("/test/123")}>
              Start Test
            </button>
          </div>
        </div>
      ) : (
        <div className="w-200 h-fit mb-5 shadow-2xs bg-white rounded-xl mt-10 mx-auto p-5">
          <div className="flex gap-4">
            <div className="h-10 w-10 bg-gray-300 rounded-md flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-gray-700" />
            </div>
            <div className="text-2xl text-gray-800 font-bold">
              Select a Topic
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {props.Subtopic.map((sub) => (
            <div className="w-90 bg-white mt-5 rounded-md p-5 shadow-2xs border-2 border-gray-200 flex gap-4 cursor-pointer hover:border-blue-300 hover:bg-gray-200 transition">
              <div className="h-10 w-20 bg-emerald-50 rounded-md flex items-center justify-center">
                {sub.icon}
              </div>
              <div>
                <div className="font-bold text-2xl text-gray-600">
                  {sub.topic}
                </div>
                <div className="text-md text-gray-500 font-semibold">
                  {sub.Desc}
                </div>
                <button className="h-10 w-25 bg-blue-700 font-semibold rounded-md mt-3 text-white text-xl hover:bg-emerald-300 hover:text-gray-600 " onClick={()=>{
                  navigate(`${sub.go}`)
                }} >
                  Let's go
                </button>
              </div>
            </div>

          ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
