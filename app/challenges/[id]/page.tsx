"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CodeEditor from "@/components/CodeEditor";

// Define types for challenge details
interface Challenge {
  title: string;
  question: string;
  example: string;
}

// Dummy data: Replace this with API call or database fetch in production
const questions: Record<number, Challenge> = {
  1: {
    title: "JavaScript Fundamentals",
    question: "Write a function to check if a number is even or odd.",
    example: "Input: 4 → Output: Even",
  },
  2: {
    title: "React Components",
    question: "Create a React functional component that displays a counter with increment and decrement buttons.",
    example: "<Counter /> → Shows a counter with + and - buttons.",
  },
  3: {
    title: "Advanced Algorithms",
    question: "Implement a function to find the longest palindrome substring in a given string.",
    example: "Input: 'racecar' → Output: 'racecar'",
  },
};

export default async function ChallengeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Ensure id is a number
  const challengeId = typeof id === "string" ? parseInt(id, 10) : NaN;
  const challenge = questions[challengeId];

  if (!challenge) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Challenge Not Found</h1>
        <p className="text-center text-muted-foreground mb-4">
          Please check the challenge ID.
        </p>
        <Link href="/challenges">
          <Button>Back to Challenges</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card className="w-full">
          <CardHeader className="px-6 py-4">
            <CardTitle className="text-2xl font-bold">
              {challenge.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 py-4 space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Problem Statement:</h2>
              <p className="text-base text-muted-foreground">
                {challenge.question}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600">Example:</h3>
              <p className="text-sm italic text-gray-500">
                {challenge.example}
              </p>
            </div>
          </CardContent>
          <CardFooter className="px-6 py-4">
            {/* You can add additional footer content here if needed */}
          </CardFooter>
          <CodeEditor />
        </Card>
      </div>
    </div>
  );
}
