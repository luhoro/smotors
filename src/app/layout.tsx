import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "S Motors - Sua oficina especializada",
  description: "Oficina de carros em Minas Gerais",
  keywords: [
    "oficina",
    "carros",
    "oficina carros",
    "manutenção carros",
    "mecânico",
    "conserto carros",
  ],
  openGraph: {
    title: "S Motors - Sua oficina especializada",
    images: [`${process.env.NEXT_PUBLIC_URL}/preview.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
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
        <Footer />
      </body>
    </html>
  )
}
