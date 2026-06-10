import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "../[id]/ProductDetailClient";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) return notFound();

  return (
    <ProductDetailClient
      product={product}
    />
  );
}