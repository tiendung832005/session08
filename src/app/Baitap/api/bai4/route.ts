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

export async function DELETE(req: any, res: any) {
    const { idUsers } = res.params; 
    const userIndex = users.findIndex((user) => user.id == +idUsers);

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        return NextResponse.json({
            message: 'Xóa thông tin người dùng thành công',
        });
    } else {
        return NextResponse.json({
            message: `Không tìm thấy người dùng có id = ${idUsers}`,
        });
    }
}

export async function GET(req: any) {
    return NextResponse.json({
        data: users,
    });
}
