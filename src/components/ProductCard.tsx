import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/products";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <Link href={`/products/${product.id}`}>

      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition">

        <div className="relative h-72">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />

        </div>

        <div className="p-4">

          <h3 className="font-semibold">
            {product.name}
          </h3>

          <p className="text-red-500 font-bold mt-2">
            {product.price.toLocaleString()}đ
          </p>

        </div>

      </div>

    </Link>
  );
}