import React from "react";
import { useNavigate } from "react-router-dom";

const TestCards = (props) => {

  const { topics } = props;
  const navigate = useNavigate();

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      teal: "from-teal-500 to-teal-600",
      indigo: "from-indigo-500 to-indigo-600",
    };
    return colorMap[color] || "from-gray-500 to-gray-600";
  };

  const getDifficultyColor = (difficulty) => {
    const difficultyMap = {
      Easy: "bg-green-100 text-green-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Hard: "bg-red-100 text-red-800",
    };
    return difficultyMap[difficulty] || "bg-gray-100 text-gray-800";
  };

  const submit = (topicId) => {
    switch (topicId) {
      case 1:
        navigate("/test/quant");
        break;
      case 2:
        navigate("/test/logical");
        break;
      case 3:
        navigate("/test/verbal");
        break;
      case 4:
        navigate("/test/data");
        break;
      case 5:
        navigate("/test/gk");
        break;
      case 6:
        navigate("/test/computer");
        break;
      default:
        console.warn("Unknown topic ID");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Topic Header */}
          <div
            className={`bg-gradient-to-r ${getColorClasses(
              topic.color
            )} p-6 rounded-t-2xl text-white`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{topic.icon}</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
                  topic.difficulty
                )} bg-white`}
              >
                {topic.difficulty}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
            <p className="text-sm opacity-90">{topic.description}</p>
          </div>

          {/* Topic Details */}
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-gray-800">
                  {topic.questions}
                </div>
                <div className="text-xs text-gray-600">Questions</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-gray-800">
                  {topic.duration}
                </div>
                <div className="text-xs text-gray-600">Duration</div>
              </div>
            </div>

            {/* Topics Covered */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Topics Covered:
              </h4>
              <div className="flex flex-wrap gap-1">
                {topic.topics.map((subtopic, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {subtopic}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => submit(topic.id)}
              className={`w-full bg-gradient-to-r ${getColorClasses(
                topic.color
              )} hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300`}
            >
              Let's Go
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestCards;
