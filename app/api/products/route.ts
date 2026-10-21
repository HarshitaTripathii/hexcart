import { NextRequest } from "next/server";
import data from "@/lib/data/products.json";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const limit = Number(searchParams.get("limit")) || 8;
  const skip = Number(searchParams.get("skip")) || 0;
  const products = data.products.slice(skip, skip + limit);

  return Response.json({
    data: products,
    total: data.products.length,
    limit,
    skip,
  });
}
