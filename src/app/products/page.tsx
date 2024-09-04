"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [products, setProducts] = useState<any>()
    // GỌI API LẤY DATA ĐỂ ĐI RENDER RA MÀN HÌNH TRÌNH DUYỆT\

    // fetch
    // axios
    useEffect(()=>{
        axios.get("http://localhost:3000/api/products")
        .then((response)=>(
            setProducts(response.data.data)
        ))
        .catch((err)=>{

        })
    },[])
    const handleClick=(id:number)=>{
        console.log("giá trị id", id);
        axios.get(`http://localhost:3000/api/products/${id}`)
        .then((response)=>(
         
            setProducts(response.data.data)
        ))
        .catch((err)=>{

            
        })
    }
  return (
    <div>
        Danh sách sản phẩm
        {products?.map((item:any)=>{
            return (
                <div key={item.id}>
                    <p>tên: {item.name}</p>
                    <p>giá: {item.price}</p>
                    <button onClick={()=>handleClick(item.id)}>Chi tiết sản phẩm</button>
                    <p>*************</p>
                </div>
            )
        })}
    </div>
  )
}
