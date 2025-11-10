import React from "react";
import { FileText, Clock, Zap, BookOpen, ClipboardList } from "lucide-react";
import { UserContext } from "../context/userContext";
import axios from "axios";

const SubTest = (props) => {
  console.log(props.topic);
  return (
    <div className="min-h-screen bg-gray-100 py-4 md:py-8">
      <div className="max-w-3xl mx-auto animate-fade-in px-4 md:px-6">
        <div className="text-center mb-4">
          <span className="text-3xl md:text-4xl bg-blue-500 border-10 border-blue-500 rounded-xl animate-bounce inline-block">
            {props.topic.icon}
          </span>
          <div className="text-2xl md:text-4xl mt-3 md:mt-5 font-bold text-gray-900">
            {props.topic.topic}
          </div>
          <div className="text-base md:text-xl mt-1 font-bold text-gray-500 px-2 ">
            {props.topic.Desc}
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl md:w-200 h-fit mb-5 shadow-2xs bg-white mx-auto mt-6 md:mt-10 animate-fade-in rounded-xl">
        <div className="m-0 w-full h-auto md:h-20 bg-blue-600 flex flex-col md:flex-row items-center justify-around rounded-t-xl py-6 md:py-0 gap-6 md:gap-0">
          <div className="flex items-center justify-center w-full md:w-auto">
            <div className="h-12 w-12 md:h-10 md:w-10 flex items-center justify-center bg-blue-400 rounded-md">
              <FileText className="h-6 w-6 md:h-5 md:w-5 text-white" />
            </div>
            <div className="ml-3">
              <div className="text-white text-xl md:text-xl font-bold text-center">
                {props.topic.questions}
              </div>
              <div className="text-white text-center text-sm md:text-sm">
                Questions
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full md:w-auto">
            <div className="h-12 w-12 md:h-10 md:w-10 flex items-center justify-center bg-blue-400 rounded-md">
              <Clock className="h-6 w-6 md:h-5 md:w-5 text-white" />
            </div>
            <div className="ml-3">
              <div className="text-white text-xl md:text-xl font-bold text-center">
                {props.topic.duration}
              </div>
              <div className="text-white text-center text-sm md:text-sm">
                Duration
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full md:w-auto">
            <div className="h-12 w-12 md:h-10 md:w-10 flex items-center justify-center bg-blue-400 rounded-md">
              <Zap className="h-6 w-6 md:h-5 md:w-5 text-white" />
            </div>
            <div className="ml-3">
              <div className="text-white text-xl md:text-xl font-bold text-center">
                {props.topic.difficulty}
              </div>
              <div className="text-white text-center text-sm md:text-sm">
                Difficulty
              </div>
            </div>
          </div>
        </div>

        <div className="m-4 md:m-5 mt-6 md:mt-10 flex items-center gap-4">
          <div className="h-10 w-10 bg-gray-300 flex items-center justify-center rounded-md text-gray-700 shadow-2xl">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xl md:text-2xl font-bold text-gray-800">
              Topics Covered
            </div>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4 flex-wrap mx-4 md:mx-10">
          {props.topic.subtopics.map((t, index) => (
            <div
              key={index}
              className="min-h-12 p-3 w-full sm:w-auto sm:min-w-32 md:w-55 bg-gray-200 font-semibold flex items-center justify-center text-center text-base md:text-xl text-gray-700 rounded-md break-words"
            >
              {t}
            </div>
          ))}
        </div>

        <div>
          <div className="m-4 md:m-5 mt-6 md:mt-10 flex items-center gap-4">
            <div className="h-10 w-10 bg-gray-300 flex items-center justify-center rounded-md text-gray-700 shadow-2xl">
              <ClipboardList className="h-5 w-5" />{" "}
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-gray-800">
                Test Instructions
              </div>
            </div>
          </div>
          <div className="mx-4 md:mx-10 mb-6 md:mb-10 text-gray-700 font-semibold text-base md:text-lg leading-6 md:leading-7">
            {props.topic.instructions.map((inst, index) => (
              <div key={index} className="mb-3">
                {index + 1}. {inst}
              </div>
            ))}
          </div>
        </div>

        <div className="m-4 md:m-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="mb-4 md:mb-10 flex flex-col md:flex-row gap-2">
            <div className="font-semibold text-lg md:text-xl">
              Ready to begin?
            </div>
            <p className="text-sm md:text-base mt-0 md:mt-1">
              Make sure you have a stable internet connection.
            </p>
          </div>
          <button className="h-12 w-full md:w-50 bg-blue-700 text-white font-semibold rounded-md text-base md:text-lg">
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubTest;
