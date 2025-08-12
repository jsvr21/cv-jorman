"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Jorman Viafara</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Inicio", "Sobre mí", "Experiencia", "Habilidades", "Educación", "Contacto"].map((item, index) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(["hero", "about", "experience", "skills", "education", "contact"][index])
                }
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {["Inicio", "Sobre mí", "Experiencia", "Habilidades", "Educación", "Contacto"].map((item, index) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(["hero", "about", "experience", "skills", "education", "contact"][index])
                }
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
