import { NextResponse } from 'next/server'

let users = [
    {
        id: 1,
        user_name: 'David',
        age: 20
    },
    {
        id: 2,
        user_name: 'Linda',
        age: 22
    }
]


export async function POST(req: any) {
    const { user_name, age } = await req.json();

    const newUser = {
        id: users.length + 1,
        user_name,
        age
    };
    users.push(newUser);

    return NextResponse.json({
        message: 'Thêm mới thông tin người dùng thành công',
        data: newUser,
    });
}

export async function GET(req: any) {
    return NextResponse.json({
        data: users,
    });
}
