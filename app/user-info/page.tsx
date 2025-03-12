import { auth } from "@/auth";
import Image from "next/image";

export default async function UserInfo() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
          <div className="flex flex-col items-center space-y-6">
            {session.user.image && (
              <div className="relative w-32 h-32">
                <Image
                  src={session.user.image}
                  fill
                  alt="User Profile"
                  className="rounded-full object-cover border-4 border-gray-200"
                />
              </div>
            )}
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-bold text-gray-900">
                {session.user.name}
              </h1>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span>{" "}
                  {session.user.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
