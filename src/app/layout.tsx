import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
