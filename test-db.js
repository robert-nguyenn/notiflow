const { PrismaClient } = require('@prisma/client')

async function testDatabase() {
  const prisma = new PrismaClient()
  
  try {
    console.log('Testing database connection...')
    
    // Test basic connection
    await prisma.$connect()
    console.log('✅ Database connected successfully')
    
    // Test if tables exist by counting users
    const userCount = await prisma.user.count()
    console.log('✅ User table exists, count:', userCount)
    
    // Test if other tables exist
    const categoryCount = await prisma.eventCategory.count()
    console.log('✅ EventCategory table exists, count:', categoryCount)
    
    console.log('🎉 All database tables are working!')
    
  } catch (error) {
    console.error('❌ Database error:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

testDatabase()
