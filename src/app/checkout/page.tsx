"use client";

import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
const router = useRouter();

  const cart = useCartStore(
    (state) => state.cart
  );

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <main className="max-w-4xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Thanh toán
      </h1>

      <div className="bg-white p-6 rounded-lg shadow">

        {cart.map((item) => (

          <div
            key={`${item.id}-${item.size}`}
            className="
            border-b
            py-4
            "
          >

            <h3 className="font-bold">
              {item.name}
            </h3>

            <p>
              Size: {item.size}
            </p>

            <p>
              SL: {item.quantity}
            </p>

            <p>
              Giá:
              {" "}
              {item.price.toLocaleString("vi-VN")}đ
            </p>

          </div>

        ))}

        <div className="mt-6 text-2xl font-bold">

          Tổng cộng:
          {" "}
          {total.toLocaleString("vi-VN")}đ

        </div>

      </div>

      <form className="mt-10 space-y-4">

        <input
          placeholder="Họ tên"
          className="
          w-full
          border
          p-3
          rounded
          "
        />

        <input
          placeholder="Số điện thoại"
          className="
          w-full
          border
          p-3
          rounded
          "
        />

        <input
          placeholder="Địa chỉ"
          className="
          w-full
          border
          p-3
          rounded
          "
        />

        <button
        type="button"
  onClick={() => {
    alert("Đặt hàng thành công");
    router.push("/");
  }}
          className="
          bg-black
          text-white
          px-8
          py-3
          rounded
          "
        >
          Xác nhận đặt hàng
        </button>

      </form>

    </main>
  );
}