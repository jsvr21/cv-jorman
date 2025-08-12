"use client"

import { useState } from "react"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("backend")

  const skillCategories = {
    backend: {
      title: "Backend & APIs",
      skills: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        {
          name: "C# .NET",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        {
          name: "APIs REST",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        },
      ],
    },
    frontend: {
      title: "Frontend & UI",
      skills: [
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        {
          name: "WPF C#",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        },
      ],
    },
    database: {
      title: "Bases de Datos",
      skills: [
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        { name: "JSON", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
        { name: "XML", logo: "/placeholder.svg?height=40&width=40" },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      skills: [
        {
          name: "Azure",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
        {
          name: "AWS EC2",
          logo: "https://icongr.am/devicon/amazonwebservices-original-wordmark.svg?size=128&color=currentColor", 
        },
        {
          name: "Vercel",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        },
        {
          name: "Ubuntu Server",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
        },
        {
          name: "Windows Server",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
        },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ],
    },
    automation: {
      title: "Automatización & IA",
      skills: [
        { name: "RPA", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Scrapy", logo: "/placeholder.svg?height=40&width=40" },
        { name: "IA & Prompts", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Chatbots", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Power Automate", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Power Apps", logo: "/placeholder.svg?height=40&width=40" },
      ],
    },
  }

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Habilidades Técnicas</h2>
          <p className="text-xl text-gray-600">Tecnologías y herramientas que domino en mi desarrollo profesional</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <img
                  src={skill.logo || "/placeholder.svg"}
                  alt={`${skill.name} logo`}
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Competencias Adicionales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Metodologías Ágiles</h4>
                <p className="text-gray-600 text-sm">Scrum, documentación, casos de uso</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Microservicios</h4>
                <p className="text-gray-600 text-sm">Arquitectura distribuida y escalable</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Sistemas de Omnicanalidad</h4>
                <p className="text-gray-600 text-sm">Meta Business, Wolkvox, Ikono, PHP</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Automatizaciones RPA</h4>
                <p className="text-gray-600 text-sm">Scrapy, Python, Node.js</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Chatbots Inteligentes</h4>
                <p className="text-gray-600 text-sm">IA, IVR, automatizaciones, PHP</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Plataformas Microsoft</h4>
                <p className="text-gray-600 text-sm">Power Apps, Power Automate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
