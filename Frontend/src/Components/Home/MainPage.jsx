import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <>
      <section className="pt-24 pb-16 bg-gradient-to-b from-white to-[#3BA97F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A0F48] leading-tight">
                Master Aptitude with Confidence
              </h1>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                Practice logical reasoning, quantitative aptitude, and verbal
                ability with interactive questions, step-by-step solutions, and
                instant feedback. Track progress and improve speed and accuracy
                for exams, placements, and personal growth.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/login" className="bg-[#3BA97F] text-1xl  hover:bg-[#3BA97F]/80 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-colors duration-200">
                  Start Practicing
                </Link>
                <button className="bg-white hover:bg-gray-50 text-[#0A0F48] border border-[#3BA97F] px-6 py-3 rounded-lg font-semibold shadow-sm transition-colors duration-200">
                  View Features
                </button>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                Timed quizzes • Topic-wise exercises • Detailed solutions
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-white shadow-xl border border-[#3BA97F]/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl">📈</div>
                  <h3 className="mt-4 text-xl font-bold text-[#0A0F48]">
                    Track. Practice. Improve.
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Your journey to aptitude excellence starts here.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute -bottom-6 -left-6 w-24 h-24 rounded-xl bg-[#3BA97F]/20" />
              <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 rounded-xl bg-[#3BA97F]/30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0F48] text-center">
            Why AptiStep?
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm bg-white">
              <div className="text-2xl">⏱️</div>
              <h3 className="mt-3 font-semibold text-[#0A0F48]">
                Timed Quizzes
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Simulate real exam pressure and build accuracy over time.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm bg-white">
              <div className="text-2xl">📚</div>
              <h3 className="mt-3 font-semibold text-[#0A0F48]">
                Topic-wise Practice
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Focus on weak areas with curated exercises and solutions.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm bg-white">
              <div className="text-2xl">📊</div>
              <h3 className="mt-3 font-semibold text-[#0A0F48]">
                Progress Tracking
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Visualize your improvement with insightful analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
