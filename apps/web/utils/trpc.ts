"use client";

import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../packages/trpc/src/server/server";

export const trpc = createTRPCReact<AppRouter>();
