"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <main className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-6">
        Tất cả sản phẩm
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="grid md:grid-cols-4 gap-6 mt-8">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </main>
  );
}