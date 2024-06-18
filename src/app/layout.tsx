import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CS Motors - Sua oficina especializada",
  description: "Oficina de carros em Minas Gerais",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
