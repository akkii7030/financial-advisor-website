import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Javi Finanz Advisors Pvt. Ltd. | Financial Advisory Services",
  description:
    "Secure your future with trusted financial expertise. We provide financial planning, investment advisory, tax consulting, and more.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} cz-shortcut-listen="true">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
