import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainSection = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [data]);
  console.log(data);
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

      <section className="py-20 bg-gradient-to-b from-white to-[#0A0F48]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F48] mb-4">
              Why Choose AptiStep?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the most comprehensive aptitude learning platform designed to accelerate your growth and boost your confidence
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl border border-[#3BA97F]/20 shadow-lg bg-white hover:shadow-2xl hover:border-[#3BA97F]/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3BA97F] to-[#3BA97F]/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A0F48] mb-3">
                Timed Quizzes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Simulate real exam pressure with customizable time limits. Build accuracy and speed simultaneously for competitive exams.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl border border-[#3BA97F]/20 shadow-lg bg-white hover:shadow-2xl hover:border-[#3BA97F]/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3BA97F] to-[#3BA97F]/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A0F48] mb-3">
                Smart Learning Path
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered recommendations identify your weak areas and create personalized practice sessions for maximum improvement.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl border border-[#3BA97F]/20 shadow-lg bg-white hover:shadow-2xl hover:border-[#3BA97F]/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3BA97F] to-[#3BA97F]/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A0F48] mb-3">
                Step-by-Step Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Understand concepts deeply with detailed explanations, multiple solving approaches, and concept reinforcement.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0A0F48] to-[#3BA97F] text-white px-8 py-4 rounded-full shadow-lg">
              <span className="text-lg font-semibold">Ready to Transform Your Aptitude Skills?</span>
              <Link to="/login" className="bg-white text-[#0A0F48] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
