"use client";

import { useState } from "react";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import { Product } from "@/types/products";

export default function ProductDetailClient({
  product,
}: {
  product: Product;
}) {
  const [selectedSize, setSelectedSize] =
    useState("");

  return (
    <main className="max-w-7xl mx-auto p-8">

      <div className="grid md:grid-cols-2 gap-10">

        <div className="relative h-[600px]">

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="50vw"
            className="object-cover rounded-xl"
          />

        </div>

        <div>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl text-red-500 mt-4">
            {product.price.toLocaleString("vi-VN")}đ
          </p>

          <div className="mt-8">

            <h3 className="font-semibold mb-3">
              Chọn size
            </h3>

            <div className="flex gap-2">

              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    setSelectedSize(size)
                  }
                  className={`
                    px-4 py-2 border rounded
                    ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : ""
                    }
                  `}
                >
                  {size}
                </button>
              ))}

            </div>

          </div>
<div className="mt-8">

  <h3 className="font-semibold text-lg mb-3">
    Mô tả sản phẩm
  </h3>

  <p className="text-gray-600 leading-7">
    {product.description}
  </p>

</div>
          <AddToCartButton
            product={product}
            selectedSize={selectedSize}
          />

        </div>

      </div>

    </main>
  );
}