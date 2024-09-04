import fs from 'fs';
import path from 'path';

export async function GET(req: any, res: any) {
  const filePath = path.join(process.cwd(), 'data', 'products.json');


  const products = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req: any, res:any) {
  const productData = await req.json();
  const filePath = path.join(process.cwd(), 'data', 'products.json');

  
  const existingProducts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

 
  existingProducts.push(productData);

  fs.writeFileSync(filePath, JSON.stringify(existingProducts, null, 2));

  return new Response(JSON.stringify({ message: 'Thêm mới sản phẩm thành công' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
