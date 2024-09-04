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

export async function GET(req: any, res: any) {

    let findItem = users.find((item) => {
        return item.id == +res.params.idUsers
    })

    if (findItem) {
        return NextResponse.json({
            data: findItem,
        })
    } else {
        return NextResponse.json({
            message: `Không tìm thấy người dùng có id = ${res.params.idUsers}`,
        })
    }
}
