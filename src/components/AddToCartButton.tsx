"use client";

import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/products";

interface Props {
  product: Product;
  selectedSize: string;
}

export default function AddToCartButton({
  product,
  selectedSize,
}: Props) {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Vui lòng chọn size");
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: selectedSize,
    });

    alert("Đã thêm vào giỏ hàng");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="
      bg-black
      text-white
      px-6
      py-3
      rounded-lg
      mt-8
      hover:bg-gray-800
      active:scale-95
      transition
      "
    >
      Thêm vào giỏ hàng
    </button>
  );
}