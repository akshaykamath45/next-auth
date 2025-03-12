"use server";

import { auth } from "@/auth";
import { SignInButton } from "@/components/sign-in-button";
import { SignOutButton } from "@/components/sign-out-button";
import Link from "next/link";
export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome, {session.user.name}!</h1>
        <div className="flex flex-col gap-4">
          <Link 
            href="/user-info" 
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View Profile Info
          </Link>
          <SignOutButton />
        </div>
      </div>
    );
  }
  return (
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-bold mb-6">Next.js Authentication</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Please sign in to continue</p>
      <SignInButton />
    </div>
  );
}
