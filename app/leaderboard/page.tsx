import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data - In a real app, this would come from your API
const leaderboardData = [
  {
    rank: 1,
    user: {
      name: "Sarah Johnson",
      username: "sarahj",
      avatar: "/placeholder.svg",
    },
    points: 2500,
    challengesCompleted: 45,
    level: "Expert",
  },
  {
    rank: 2,
    user: {
      name: "Michael Chen",
      username: "mikechen",
      avatar: "/placeholder.svg",
    },
    points: 2350,
    challengesCompleted: 42,
    level: "Expert",
  },
  {
    rank: 3,
    user: {
      name: "Emily Davis",
      username: "emilyd",
      avatar: "/placeholder.svg",
    },
    points: 2100,
    challengesCompleted: 38,
    level: "Advanced",
  },
  // Add more users as needed
]

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
        <p className="text-muted-foreground">Top performers in our coding challenges</p>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Level</TableHead>
              <TableHead className="text-right">Challenges</TableHead>
              <TableHead className="text-right">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((entry) => (
              <TableRow key={entry.rank}>
                <TableCell className="font-medium">#{entry.rank}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={entry.user.avatar} />
                      <AvatarFallback>
                        {entry.user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{entry.user.name}</div>
                      <div className="text-sm text-muted-foreground">@{entry.user.username}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={entry.level === "Expert" ? "default" : "secondary"}>{entry.level}</Badge>
                </TableCell>
                <TableCell className="text-right">{entry.challengesCompleted}</TableCell>
                <TableCell className="text-right font-medium">{entry.points.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

