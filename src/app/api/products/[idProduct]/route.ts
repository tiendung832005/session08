import { NextResponse } from 'next/server'
import React from 'react'
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
export async function GET(req:any, res:any) {
    console.log(":req", req);
    console.log(":res", res);
    let findItem = products.find((item)=>{
        return item.id ==+res.params.idProduct 
    })
    
    return NextResponse.json({
        message:"lấy danh sách sản phẩm thành công",
      data: findItem,
    })
  }
