import React from 'react'
import fs from 'fs'
import path from 'path'
export default function page() {
  const filePath = path.join(process.cwd(), "src/app/products/product.txt")
  const data = fs.writeFileSync(filePath,"hello world1", "utf8");
  console.log("file dc đọc với nội dung", data);
  
  return (
    <div>page</div>
  )
}
