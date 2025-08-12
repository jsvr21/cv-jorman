"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Calendar, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [profileImage, setProfileImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }


  return (
    <section id="hero" className="pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image Section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <img
                      src={profileImage || "/foto-perfil.jpeg"}
                      alt="Jorman Viafara"
                      className="w-full h-full object-cover"
                    />
                </div>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Jorman Stiv
              <span className="block text-blue-600">Viafara Rentería</span>
            </h1>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Tecnólogo en Análisis y Desarrollo de Software especializado en desarrollo backend con experiencia en
              automatizaciones, APIs REST, microservicios e integración de sistemas.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>21 años</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Jamundí, Valle del Cauca</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>322 569 7798</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contactar
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Experiencia
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
