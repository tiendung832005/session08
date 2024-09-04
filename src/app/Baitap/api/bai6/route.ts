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


export async function PUT(req: any, res: any) {
    const { idUsers } = res.params; 
    const { user_name, age } = await req.json(); 

    const userIndex = users.findIndex((user) => user.id == +idUsers);

    if (userIndex !== -1) {
        
        users[userIndex] = {
            ...users[userIndex],
            user_name: user_name || users[userIndex].user_name,
            age: age || users[userIndex].age,
        };

        return NextResponse.json({
            message: 'Cập nhật thông tin người dùng thành công',
            data: users[userIndex],
        });
    } else {
        return NextResponse.json({
            message: `Không tìm thấy người dùng có id = ${idUsers}`,
        });
    }
}

export async function GET(req: any, res: any) {
    const { idUsers } = res.params; 
    const user = users.find((user) => user.id == +idUsers);

    if (user) {
        return NextResponse.json({
            data: user,
        });
    } else {
        return NextResponse.json({
            message: `Không tìm thấy người dùng có id = ${idUsers}`,
        });
    }
}
