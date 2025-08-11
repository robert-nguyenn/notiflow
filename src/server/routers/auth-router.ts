import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { HTTPException } from "hono/http-exception"
import { router } from "../__internals/router"
import { publicProcedure } from "../procedures"

export const dynamic = "force-dynamic"

export const authRouter = router({
  getDatabaseSyncStatus: publicProcedure.query(async ({ c, ctx }) => {
    try {
      const auth = await currentUser()

      if (!auth) {
        return c.json({ isSynced: false })
      }

      const user = await db.user.findFirst({
        where: { externalId: auth.id },
      })

      console.log('USER IN DB:', user);
      console.log('AUTH ID:', auth.id);
      console.log('AUTH EMAIL:', auth.emailAddresses[0]?.emailAddress);

      if (!user) {
        console.log('Creating new user...');
        const newUser = await db.user.create({
          data: {
            quotaLimit: 100,
            externalId: auth.id,
            email: auth.emailAddresses[0]?.emailAddress || '',
          },
        })
        console.log('Created user:', newUser);
      }

      return c.json({ isSynced: true })
    } catch (error) {
      console.error('Database sync error:', error);
      return c.json({ 
        isSynced: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }, 500)
    }
  }),
})

// route.ts