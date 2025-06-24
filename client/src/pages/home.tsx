import { Card } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  const links = [
    {
      name: "View GitHub",
      url: "https://github.com/keelnu",
      icon: Github,
      className: "bg-gray-800 hover:bg-gray-900 text-white",
    },
    {
      name: "Connect on LinkedIn",
      url: "https://linkedin.com/in/kristiina-eelnurme",
      icon: Linkedin,
      className: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <Card className="bg-white rounded-3xl shadow-xl p-8 text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <img
              src="https://keelnu.github.io/images/headshot_800x800.jpg"
              alt="Profile picture"
              className="w-30 h-30 rounded-full object-cover border-4 border-blue-100 shadow-lg hover:border-blue-200 transition-colors duration-300"
            />
          </div>

          {/* Profile Info */}
          <div className="mb-8 animate-slide-up">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Kristiina Eelnurme
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
            Software Engineer 💻 JavaScript, React, NextJS, Node 👾 Cat Mama 🐈
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3 animate-slide-up">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3 group ${link.className}`}
                >
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 animate-fade-in">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
