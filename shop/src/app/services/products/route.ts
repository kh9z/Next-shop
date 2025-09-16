import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all products
export async function GET() {
  const products = await prisma.product.findMany({
    include: { category: true },
  });
  return NextResponse.json(products);
}

// CREATE product
export async function POST(req: NextRequest) {
    console.log("POST /products");
  const body = await req.json();
  const { name, description, price, categoryId, imageUrl } = body;

  const product = await prisma.product.create({
    data: {
      name,
      description,
      price,
      categoryId,
      imageUrl,
    },
  });

  return Response.json(product);
}
