export default function CheckoutPage() {
  return (

    <main className="max-w-4xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-10">
        Thanh toán
      </h1>

      <form className="space-y-5">

        <input
          placeholder="Họ tên"
          className="w-full border p-3"
        />

        <input
          placeholder="Số điện thoại"
          className="w-full border p-3"
        />

        <input
          placeholder="Địa chỉ"
          className="w-full border p-3"
        />

        <button
          className="
          bg-black
          text-white
          px-8
          py-3
          "
        >
          Đặt hàng
        </button>

      </form>

    </main>
  );
}