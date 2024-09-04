import React from 'react'
import fs from 'fs';
import path from 'path';
export default function POST(req:any, res: any) {
async function POST(req:any, res: any) {
    const productData = await req.json();
    existingProducts.push(productData);
    
}
    const filePath = path.join(process.cwd(), 'data', 'products.json');
  
    const existingProducts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  

    fs.writeFileSync(filePath, JSON.stringify(existingProducts, null, 2));
    return new Response(JSON.stringify({ message: 'Thêm mới sản phẩm thành công' }), {
        status: 200,
        headers: { 'Nội dung nhập vào': 'application/json' },
      });
}
