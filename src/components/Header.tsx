"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function Header() {

  const cart = useCartStore(
    state => state.cart
  );

  return (
    <header className="bg-white shadow">

      <div className="max-w-7xl mx-auto px-5 h-16 flex justify-between items-center">

        <Link href="/">
          FASHION STORE
        </Link>

        <div className="flex gap-5">

          <Link href="/products">
            Products
          </Link>

          <Link href="/cart">
            Cart ({cart.length})
          </Link>
<Link href="/admin">
  Admin
</Link>
        </div>

      </div>

    </header>
  );
}