import connectDB from "@/lib/mongodb";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define a type for your user
interface User {
  id: string;
  name: string;
  email: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<string, string> | undefined, req) {
        await connectDB();

        const username = credentials?.username;
        const password = credentials?.password;

        // Replace this with your actual user validation logic
        if (username === "test" && password === "test") {
          const user: User = {
            id: "1",
            name: "Test User",
            email: "test@example.com",
          };
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
