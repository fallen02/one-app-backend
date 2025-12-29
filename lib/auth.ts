import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { PrismaLibSql } from "@prisma/adapter-libsql";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins"
import {PrismaClient} from "@/prisma/generated/user/client";


const adapter = new PrismaLibSql({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const prisma = new PrismaClient({ adapter });

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite", // or "mysql", "postgresql", ...etc
  }),

  emailAndPassword: { 
    enabled: true, 
  },
  plugins: [nextCookies(), admin()]
});
