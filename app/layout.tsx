import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Jorman Viafara - Desarrollador de Software Backend",
  description:
    "Tecnólogo en Análisis y Desarrollo de Software especializado en backend, automatizaciones, APIs REST y microservicios. Experiencia en Java, Python, Node.js, C# .NET y más.",
  keywords: "desarrollador backend, java, python, nodejs, apis rest, microservicios, automatización, rpa, chatbots",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} antialiased scroll-smooth`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
