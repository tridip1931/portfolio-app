import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testConnection() {
  try {
    console.log('🔍 Testing database connection...')
    
    // Test basic connection
    await prisma.$connect()
    console.log('✅ Database connection successful!')
    
    // Test a simple query
    const result = await prisma.$queryRaw`SELECT 1 as test`
    console.log('✅ Database query successful:', result)
    
    console.log('🎉 All database tests passed!')
    
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    console.log('\n📝 Setup Instructions:')
    console.log('1. Make sure PostgreSQL is installed and running')
    console.log('2. Create a database for the portfolio')
    console.log('3. Update your .env file with the correct DATABASE_URL')
    console.log('   Example: DATABASE_URL="postgresql://username:password@localhost:5432/portfolio_db"')
    console.log('4. Run: npm run db:migrate')
    console.log('5. Run: npm run db:seed')
    
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection() 