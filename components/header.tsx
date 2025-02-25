// "use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Code, User } from "lucide-react"
import LoginPage from "@/app/login/page"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Code className="h-6 w-6" />
            <span>Createathon</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/challenges" className="text-sm font-medium hover:text-primary transition-colors">
              Challenges
            </Link>
            <Link href="/leaderboard" className="text-sm font-medium hover:text-primary transition-colors">
              Leaderboard
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-primary transition-colors">
              Community
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
                    <LoginPage/>
        
        </div>
      </div>
    </header>
  )
}

