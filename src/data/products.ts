import { Product } from "@/types/products";

export const products: Product[] = [
  {
    id: 1,
    name: "Áo Thun Basic",
    price: 299000,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    category: "Áo",

    sizes: ["S", "M", "L", "XL"],
    colors: ["Đen", "Trắng"],
  },

  {
    id: 2,
    name: "Áo Hoodie",
    price: 599000,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
    category: "Hoodie",

    sizes: ["M", "L", "XL"],
    colors: ["Đen", "Xám"],
  },

  {
    id: 3,
    name: "Quần Jean",
    price: 499000,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
    category: "Quần",

    sizes: ["28", "30", "32", "34"],
    colors: ["Xanh"],
  },

  {
    id: 4,
    name: "Áo Khoác",
    price: 799000,
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800",
    category: "Jacket",

    sizes: ["M", "L", "XL"],
    colors: ["Đen"],
  },
];