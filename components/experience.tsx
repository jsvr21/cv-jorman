import { Calendar, MapPin, Building } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "Bluelink BPO",
      position: "Desarrollador de Software",
      period: "2024 - Presente",
      location: "Colombia",
      description: [
        "Desarrollo de soluciones backend robustas y escalables",
        "Implementación de automatizaciones y RPAs para optimización de procesos",
        "Integración con servicios de omnicanalidad (Wolkvox, Ikono)",
        "Desarrollo de chatbots y sistemas IVR",
        "Integración con Meta Business para soluciones empresariales",
        "Trabajo en equipo usando metodologías ágiles (Scrum)",
        "Documentación técnica y levantamiento de requerimientos",
      ],
      technologies: ["Java", "JavaScript", "Python", "Node.js", "APIs REST", "Microservicios"],
    },
  ]

  const projects = [
    {
      title: "Sistemas de Omnicanalidad",
      description:
        "Integración completa con plataformas como Wolkvox e Ikono para centralizar comunicaciones empresariales.",
      technologies: ["APIs REST", "JavaScript", "Python", "JSON/XML", "PHP"],
    },
    {
      title: "Automatizaciones RPA",
      description:
        "Desarrollo de robots de automatización de procesos para optimizar tareas repetitivas y mejorar la eficiencia operacional.",
      technologies: ["Python", "Scrapy", "Automatización", "Node.js"],
    },
    {
      title: "Chatbots Inteligentes",
      description: "Creación de chatbots con IA para atención al cliente y automatización de consultas frecuentes.",
      technologies: ["IA", "Prompts", "Meta Business", "Node.js", "PHP"],
    },
    {
      title: "Sistemas IVR",
      description:
        "Implementación de sistemas de respuesta de voz interactiva para mejorar la experiencia del cliente.",
      technologies: ["IVR", "APIs", "Integración de Sistemas"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiencia Profesional</h2>
          <p className="text-xl text-gray-600">
            Mi trayectoria en el desarrollo de software y automatización de procesos
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Experiencia Laboral</h3>
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h4>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                    <Building size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col lg:items-end gap-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 mb-3">Responsabilidades:</h5>
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-3">Tecnologías utilizadas:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Proyectos Destacados</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
