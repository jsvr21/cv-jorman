import { Code, Users, Lightbulb, Target } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Desarrollo Full-Stack",
      description: "Especializado en backend con conocimientos sólidos en frontend y tecnologías modernas.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Trabajo en Equipo",
      description: "Experiencia en metodologías ágiles como Scrum, documentación y levantamiento de requerimientos.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: "Automatización e IA",
      description: "Desarrollo de RPAs, chatbots, automatizaciones y manejo avanzado de prompts de IA.",
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "Integración de Sistemas",
      description: "Experiencia en omnicanalidad, Meta Business, IVR y plataformas Microsoft.",
    },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mí</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soy un desarrollador apasionado por la tecnología con experiencia en el desarrollo de soluciones backend
            robustas, automatizaciones inteligentes y la integración de sistemas complejos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Mi Enfoque</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Me especializo en crear soluciones tecnológicas eficientes y escalables, con un enfoque particular en el
            desarrollo backend, automatizaciones y la integración de sistemas. Mi experiencia abarca desde el desarrollo
            de APIs REST y microservicios hasta la implementación de chatbots y sistemas de omnicanalidad. Siempre busco
            aplicar las mejores prácticas de desarrollo y mantenerme actualizado con las últimas tecnologías del
            mercado.
          </p>
        </div>
      </div>
    </section>
  )
}
