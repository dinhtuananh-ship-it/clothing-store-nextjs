"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
export default function CartPage() {

  const cart = useCartStore(
    (state) => state.cart
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const increaseQuantity =
    useCartStore(
      (state) => state.increaseQuantity
    );

  const decreaseQuantity =
    useCartStore(
      (state) => state.decreaseQuantity
    );

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <main className="max-w-7xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-10">
        Giỏ hàng
      </h1>

      {cart.length === 0 && (
        <p>Chưa có sản phẩm nào</p>
      )}

      {cart.map((item) => (

        <div
          key={`${item.id}-${item.size}`}
          className="
          bg-white
          p-5
          rounded-lg
          mb-4
          shadow
          "
        >

          <h3 className="font-bold">
            {item.name}
          </h3>

          <p>
            Size: {item.size}
          </p>

          <p>
            Giá:
            {" "}
            {item.price.toLocaleString()}đ
          </p>

          <div className="flex gap-3 items-center mt-3">

            <button
              onClick={() =>
                decreaseQuantity(
  item.id,
  item.size
)
              }
              className="
              border
              px-3
              py-1
              "
            >
              -
            </button>

            <span>
              {item.quantity}
            </span>

            <button
              onClick={() =>
                increaseQuantity(
  item.id,
  item.size
)
              }
              className="
              border
              px-3
              py-1
              "
            >
              +
            </button>

          </div>

          <button
            onClick={() =>
  removeFromCart(
    item.id,
    item.size
  )
}
            className="
            mt-4
            bg-red-500
            text-white
            px-4
            py-2
            rounded
            "
          >
            Xóa sản phẩm
          </button>

        </div>

      ))}

      <div className="text-2xl font-bold mt-10">
        Tổng tiền:
        {" "}
        {total.toLocaleString()}đ
      </div>
<div className="mt-8">

  <Link
    href="/checkout"
    className="
    inline-block
    bg-green-600
    text-white
    px-8
    py-3
    rounded-lg
    hover:bg-green-700
    "
  >
    Thanh toán
  </Link>

</div>
    </main>
  );
}