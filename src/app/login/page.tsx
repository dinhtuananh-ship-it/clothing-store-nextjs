export default function LoginPage() {
  return (
    <main className="max-w-md mx-auto py-20">

      <div className="bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Đăng nhập
        </h1>

        <form className="space-y-4">

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
            Đăng nhập
          </button>

        </form>

      </div>

    </main>
  );
}