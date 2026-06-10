import { create } from "zustand";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
}

interface CartStore {
  cart: CartItem[];

  addToCart: (item: CartItem) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const exist = state.cart.find(
        (p) =>
          p.id === item.id &&
          p.size === item.size
      );

      if (exist) {
        return {
          cart: state.cart.map((p) =>
            p.id === item.id &&
            p.size === item.size
              ? {
                  ...p,
                  quantity: p.quantity + 1,
                }
              : p
          ),
        };
      }

      return {
        cart: [...state.cart, item],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.id !== id
      ),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        ),
    })),
}));