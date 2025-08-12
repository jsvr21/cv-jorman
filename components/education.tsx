import { GraduationCap, Award, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Educación</h2>
          <p className="text-xl text-gray-600">Mi formación académica y certificaciones profesionales</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Tecnólogo en Análisis y Desarrollo de Software
                </h3>
                <div className="flex items-center gap-2 text-green-600 font-semibold mb-3">
                  <Award size={18} />
                  <span>SENA (Servicio Nacional de Aprendizaje)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar size={18} />
                  <span>Graduado</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Formación integral en desarrollo de software con énfasis en análisis de sistemas, programación, bases
                  de datos y metodologías de desarrollo. Programa técnico reconocido por su calidad y enfoque práctico
                  en el desarrollo de competencias laborales del sector tecnológico.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Análisis de Sistemas
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Programación
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Bases de Datos
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Metodologías Ágiles
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Learning */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Aprendizaje Continuo</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Desarrollo Backend Avanzado</h4>
                <p className="text-gray-600 text-sm">
                  Especialización en APIs REST, microservicios y arquitecturas escalables
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Automatización y RPA</h4>
                <p className="text-gray-600 text-sm">Desarrollo de robots de automatización y procesos inteligentes</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Inteligencia Artificial</h4>
                <p className="text-gray-600 text-sm">Implementación de IA, chatbots y manejo avanzado de prompts</p>
              </div>
              <div className="p-4 bg-teal-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cloud Computing</h4>
                <p className="text-gray-600 text-sm">Despliegue y gestión en Azure, AWS y plataformas cloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
