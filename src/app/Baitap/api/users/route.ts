import { NextResponse } from 'next/server'

let users = [
    {
        id: 1,
        user_name: 'David',
        age: 20
    },
    {
        id: 2,
        name: 'Linda',
        age: 22
    }
]

export async function GET() {
  return NextResponse.json({
    data: users,
  })
}
