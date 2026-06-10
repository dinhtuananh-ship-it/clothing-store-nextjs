import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main>

      <section className="h-[500px] bg-black text-white flex items-center justify-center">

        <div className="text-center">

          <h1 className="text-6xl font-bold">
            NEW COLLECTION
          </h1>

          <p className="mt-5">
            Summer 2026
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto py-16 px-5">

        <h2 className="text-3xl font-bold mb-10">
          Sản phẩm nổi bật
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {products.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}

        </div>

      </section>

    </main>
  );
}