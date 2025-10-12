import React from "react";

const Test = () => {
  const testTopics = [
    {
      id: 1,
      title: "Quantitative Aptitude",
      description: "Test your mathematical and numerical reasoning skills",
      questions: 25,
      duration: "45 minutes",
      difficulty: "Medium",
      icon: "🔢",
      color: "blue",
      topics: ["Arithmetic", "Algebra", "Geometry", "Statistics", "Probability"]
    },
    {
      id: 2,
      title: "Logical Reasoning",
      description: "Evaluate your analytical and logical thinking abilities",
      questions: 20,
      duration: "35 minutes",
      difficulty: "Medium",
      icon: "🧠",
      color: "green",
      topics: ["Pattern Recognition", "Analytical Reasoning", "Syllogism", "Blood Relations", "Direction Sense"]
    },
    {
      id: 3,
      title: "Verbal Ability",
      description: "Assess your English language and communication skills",
      questions: 30,
      duration: "40 minutes",
      difficulty: "Easy",
      icon: "📝",
      color: "purple",
      topics: ["Grammar", "Vocabulary", "Reading Comprehension", "Synonyms", "Antonyms"]
    },
    {
      id: 4,
      title: "Data Interpretation",
      description: "Test your ability to analyze and interpret data",
      questions: 15,
      duration: "25 minutes",
      difficulty: "Hard",
      icon: "📊",
      color: "orange",
      topics: ["Charts", "Graphs", "Tables", "Pie Charts", "Bar Graphs"]
    },
    {
      id: 5,
      title: "General Knowledge",
      description: "Check your awareness of current affairs and general knowledge",
      questions: 20,
      duration: "30 minutes",
      difficulty: "Easy",
      icon: "🌍",
      color: "teal",
      topics: ["Current Affairs", "History", "Geography", "Science", "Sports"]
    },
    {
      id: 6,
      title: "Computer Awareness",
      description: "Evaluate your knowledge of computer fundamentals",
      questions: 25,
      duration: "35 minutes",
      difficulty: "Medium",
      icon: "💻",
      color: "indigo",
      topics: ["Hardware", "Software", "Networking", "Programming", "Database"]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      teal: "from-teal-500 to-teal-600",
      indigo: "from-indigo-500 to-indigo-600"
    };
    return colorMap[color] || "from-gray-500 to-gray-600";
  };

  const getDifficultyColor = (difficulty) => {
    const difficultyMap = {
      Easy: "bg-green-100 text-green-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Hard: "bg-red-100 text-red-800"
    };
    return difficultyMap[difficulty] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Test Your Aptitude Skills
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Choose from various topics and track your progress!
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Interactive Tests
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Instant Results
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Progress Tracking
                </span>
              </div>
              <button
                  onClick={() => {
                    // Navigate to specific test or show test instructions
                    alert(`Starting ${topic.title} test!`);
                  }}
                  className={`w-50 m-5 bg-gradient-to-r bg-blue-950 hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300`}
                >
                  Start Test
                </button>
            </div>
          </div>
        </div>

        {/* Test Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Topic Header */}
              <div className={`bg-gradient-to-r ${getColorClasses(topic.color)} p-6 rounded-t-2xl text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{topic.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(topic.difficulty)} bg-white`}>
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
                    <div className="text-lg font-bold text-gray-800">{topic.questions}</div>
                    <div className="text-xs text-gray-600">Questions</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-800">{topic.duration}</div>
                    <div className="text-xs text-gray-600">Duration</div>
                  </div>
                </div>

                {/* Topics Covered */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Topics Covered:</h4>
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
                  className={`w-full bg-gradient-to-r ${getColorClasses(topic.color)} hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300`}
                >
                  Let's Go
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Test Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Tests Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">0%</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Total Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Time Spent</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg opacity-90 mb-6">
              Take comprehensive tests and improve your aptitude skills step by step
            </p>
            <button
              onClick={() => {
                // Navigate to first test or show all tests
                alert("Let's start with Quantitative Aptitude!");
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Begin Testing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;

// https://www.figma.com/make/UUTJfU18AoIPlImFmSwab1/Hero-Section-Design?node-id=0-4&t=WHHz3dmH4DzLFgEf-0
