export default function RegisterPage() {
  return (
    <main className="max-w-md mx-auto py-20">

      <div className="bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Đăng ký
        </h1>

        <form className="space-y-4">

          <input
            placeholder="Họ tên"
            className="border p-3 w-full"
          />

          <input
            placeholder="Email"
            className="border p-3 w-full"
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            className="border p-3 w-full"
          />

          <button
            className="
            bg-black
            text-white
            w-full
            py-3
            "
          >
            Đăng ký
          </button>

        </form>

      </div>

    </main>
  );
}