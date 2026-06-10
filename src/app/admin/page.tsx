import { products } from "@/data/products";

export default function AdminPage() {
  return (
    <main className="max-w-7xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Quản lý sản phẩm
      </h1>

      <table className="w-full bg-white shadow">

        <thead>

          <tr className="border-b">

            <th className="p-4">
              ID
            </th>

            <th>
              Tên
            </th>

            <th>
              Giá
            </th>

            <th>
              Danh mục
            </th>

            <th>
              Thao tác
            </th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr
              key={product.id}
              className="border-b"
            >

              <td className="p-4">
                {product.id}
              </td>

              <td>
                {product.name}
              </td>

              <td>
                {product.price.toLocaleString("vi-VN")}đ
              </td>

              <td>
                {product.category}
              </td>

              <td>

                <button
                  className="
                  bg-blue-500
                  text-white
                  px-4
                  py-2
                  mr-2
                  "
                >
                  Sửa
                </button>

                <button
                  className="
                  bg-red-500
                  text-white
                  px-4
                  py-2
                  "
                >
                  Xóa
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>
  );
}