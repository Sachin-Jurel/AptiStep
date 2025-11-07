import { Link } from "react-router-dom";
import {
  BookOpen,
  Clock,
  BarChart3,
  Brain,
  FileText,
  Download,
  History,
  User,
  Smartphone,
  Shield,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Topic-Wise Practice Tests",
      description: "Focused quizzes by topic with instant feedback to help you master specific areas.",
      color: "bg-blue-500",
    },
    {
      icon: Clock,
      title: "Full-Length Mock Tests",
      description: "Time-bound tests with auto submission and detailed results to simulate real exam conditions.",
      color: "bg-indigo-500",
    },
    {
      icon: BarChart3,
      title: "Smart Performance Analytics",
      description: "Graphs, charts, and personalized insights to track your progress and identify strengths.",
      color: "bg-purple-500",
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Difficulty adjusts automatically based on your performance for optimal learning experience.",
      color: "bg-blue-600",
    },
    {
      icon: FileText,
      title: "Detailed Solutions & Explanations",
      description: "Step-by-step answers and comprehensive notes to understand concepts thoroughly.",
      color: "bg-indigo-600",
    },
    {
      icon: Download,
      title: "Study Materials & Notes",
      description: "Quick revision materials and downloadable PDFs for offline learning and reference.",
      color: "bg-purple-600",
    },
    {
      icon: History,
      title: "Test History & Reports",
      description: "View past attempts and track your progress over time with detailed analytics.",
      color: "bg-blue-500",
    },
    {
      icon: User,
      title: "User Profiles & Achievements",
      description: "Personalized dashboard with ranks, badges, and achievements to motivate learning.",
      color: "bg-indigo-500",
    },
    {
      icon: Smartphone,
      title: "Clean, Responsive UI",
      description: "Works seamlessly on desktop and mobile devices with an intuitive interface.",
      color: "bg-purple-500",
    },
    {
      icon: Shield,
      title: "Secure Login & Data Privacy",
      description: "JWT-based authentication and data protection to keep your information safe.",
      color: "bg-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Animation */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            <span className="inline-block animate-bounce">🌟</span> AptiStep — Key Features
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover powerful tools designed to enhance your aptitude learning journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className={`${feature.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Get Started Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of learners improving their aptitude skills with AptiStep
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/test"
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Tests
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

