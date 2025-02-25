"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Code, Users, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
// import { motion } from "framer-motion"
import Image from "next/image"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* <Image
          src="/hero-bg.jpg" // You'll need to add this image to your public folder
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" /> */}

        <div
          className="relative z-10 text-center px-4"
         
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Welcome to Createathon
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master coding challenges, compete with others, and track your progress in our interactive learning platform.
          </p>
          <div className="flex gap-4 justify-center" >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80"
            >
              <Link href="/challenges" className="gap-2">
                Start Learning <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/leaderboard">View Leaderboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid with Animation */}
      <section className="container mx-auto px-4 py-24">
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        
        >
          {[
            {
              icon: Code,
              title: "Coding Challenges",
              description: "Practice with real-world coding challenges across different difficulty levels",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: Trophy,
              title: "Earn Points",
              description: "Complete challenges to earn points and climb the leaderboard",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: Users,
              title: "Community",
              description: "Connect with other learners and share your solutions",
              gradient: "from-orange-500 to-red-500",
            },
            {
              icon: BookOpen,
              title: "Track Progress",
              description: "Monitor your learning journey with detailed progress tracking",
              gradient: "from-green-500 to-emerald-500",
            },
          ].map((feature, index) => (
            <div key={feature.title} >
              <Card className="relative overflow-hidden group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <CardHeader>
                  <feature.icon className="w-8 h-8 mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Challenges with Parallax */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            >
            Featured Challenges
          </h2>
          <div
            className="grid md:grid-cols-3 gap-6"
          
          >
            {[
              {
                title: "JavaScript Basics",
                description: "Learn the fundamentals of JavaScript programming",
                difficulty: "Beginner",
                points: 100,
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                title: "React Components",
                description: "Master React component patterns and best practices",
                difficulty: "Intermediate",
                points: 200,
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                title: "Algorithm Design",
                description: "Solve complex algorithmic challenges",
                difficulty: "Advanced",
                points: 300,
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((challenge) => (
              <div key={challenge.title} >
                <Card className="group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                  <div className={`h-2 bg-gradient-to-r ${challenge.gradient}`} />
                  <CardHeader>
                    <CardTitle>{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{challenge.difficulty}</span>
                      <span className="text-sm font-medium">{challenge.points} points</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

