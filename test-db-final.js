const { PrismaClient } = require('@prisma/client')

async function testDatabaseFinal() {
  const prisma = new PrismaClient()
  
  try {
    console.log('🔄 Testing database connection...')
    
    // Test basic connection
    await prisma.$connect()
    console.log('✅ Database connected successfully')
    
    // Test if all tables exist
    const userCount = await prisma.user.count()
    console.log('✅ User table exists, count:', userCount)
    
    const categoryCount = await prisma.eventCategory.count()
    console.log('✅ EventCategory table exists, count:', categoryCount)
    
    const eventCount = await prisma.event.count()
    console.log('✅ Event table exists, count:', eventCount)
    
    const channelCount = await prisma.notificationChannel.count()
    console.log('✅ NotificationChannel table exists, count:', channelCount)
    
    // Test creating a user (which is what the auth router does)
    console.log('🔄 Testing user creation...')
    const testUser = await prisma.user.create({
      data: {
        externalId: 'test-user-12345',
        email: 'test@example.com',
        quotaLimit: 100
      }
    })
    console.log('✅ User created successfully:', testUser.id)
    
    // Clean up test user
    await prisma.user.delete({
      where: { id: testUser.id }
    })
    console.log('✅ Test user cleaned up')
    
    console.log('🎉 ALL DATABASE OPERATIONS WORKING PERFECTLY!')
    
  } catch (error) {
    console.error('❌ Database error:', error.message)
    console.error('Full error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testDatabaseFinal()
