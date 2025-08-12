import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Teléfono",
      value: "322 569 7798",
      href: "tel:+573225697798",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "jorman.viafara@email.com",
      href: "mailto:jorman.viafara@email.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Ubicación",
      value: "Jamundí, Valle del Cauca, Colombia",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-xl text-blue-100">¿Interesado en trabajar juntos? ¡Hablemos!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="text-blue-300">{item.icon}</div>
                  <div>
                    <p className="text-blue-200 text-sm">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Redes Profesionales</h4>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-6">¿Listo para crear algo increíble juntos?</h3>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Estoy disponible para nuevos proyectos y oportunidades laborales. Con mi experiencia en desarrollo
              backend, automatizaciones y sistemas de integración, puedo aportar valor significativo a tu equipo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white/30 text-white hover:bg-white/10"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar CV
              </Button>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-lg">
              <h4 className="font-semibold mb-2">Estado Actual</h4>
              <p className="text-blue-100">🟢 Disponible para nuevas oportunidades</p>
              <p className="text-blue-200 text-sm mt-1">
                Actualmente trabajando en Bluelink BPO - Abierto a nuevos desafíos
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-blue-200">
            © 2024 Jorman Stiv Viafara Rentería. Desarrollador de Software especializado en Backend y Automatización.
          </p>
        </div>
      </div>
    </section>
  )
}
