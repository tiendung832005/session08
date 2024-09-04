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

export async function GET(req: any) {
    const { searchParams } = new URL(req.url);
    const queryName = searchParams.get('name');

    if (queryName) {
        const findName = users.filter((user) =>
            user.user_name.includes(queryName)
        );

        if (findName.length > 0) {
            return NextResponse.json({
                data: findName,
            });
        } else {
            return NextResponse.json({
                message: `Không tìm thấy người dùng có name = "${queryName}"`,
            });
        }
    } 
}
