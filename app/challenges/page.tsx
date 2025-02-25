import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

// Mock data - In a real app, this would come from your API
const challenges = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Learn the basics of JavaScript programming language",
    difficulty: "Beginner",
    points: 100,
    completionRate: 75,
    category: "JavaScript",
  },
  {
    id: 2,
    title: "React Components",
    description: "Master React component patterns and lifecycle methods",
    difficulty: "Intermediate",
    points: 200,
    completionRate: 45,
    category: "React",
  },
  {
    id: 3,
    title: "Advanced Algorithms",
    description: "Solve complex algorithmic challenges and optimize solutions",
    difficulty: "Advanced",
    points: 300,
    completionRate: 20,
    category: "Algorithms",
  },
  // Add more challenges as needed
]

export default function ChallengesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Coding Challenges</h1>
          <p className="text-muted-foreground">Choose a challenge and start coding!</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Filter</Button>
          <Button>New Challenge</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <Card key={challenge.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </div>
                <Badge
                  variant={
                    challenge.difficulty === "Beginner"
                      ? "default"
                      : challenge.difficulty === "Intermediate"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {challenge.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Completion Rate</span>
                    <span>{challenge.completionRate}%</span>
                  </div>
                  <Progress value={challenge.completionRate} />
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{challenge.category}</Badge>
                  <span className="text-sm text-muted-foreground">{challenge.points} points</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href={`/challenges/${challenge.id}`}>Start Challenge</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

