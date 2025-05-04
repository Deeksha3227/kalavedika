import "./globals.css"
// import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kalavedika - AJIET Cultural Committee",
  description: "Cultural events and activities at AJ Institute of Engineering & Technology"
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
      // className={inter.className}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
