import { NextResponse } from 'next/server'
/*
    Các phương thức làm việc với Api theo chuẩn:
        1. GET: lấy về
        2. POST: tạo mới
        3. PUT: cập nhật
        4. DELETE: xóa
        5. PATCH: cập nhật một phần tử hoặc một phần tử đã tồn tại

*/
let products = [
    {
        id: 1,
        name: 'iphone 12',
        price: 10000000
    },
    {
        id: 2,
        name: 'mèn mén',
        price: 5000
    },
    {
        id: 3,
        name: 'iphone 15',
        price: 10000
    },
]

export async function GET() {
  return NextResponse.json({message:"lấy danh sách sản phẩm thành công",
    data: products,
  })
}
