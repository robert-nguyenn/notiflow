import { httpHandler } from "@/server"

// Changed from "edge" to "nodejs" to avoid 1MB bundle size limit
export const runtime = "nodejs"

export { httpHandler as GET, httpHandler as POST }
