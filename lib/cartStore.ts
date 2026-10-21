import { create } from "zustand";

interface CartProduct {
  id: number;
  qty: number;
}

interface CartState {
  products: CartProduct[];
  addtoCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  inc: (id: number) => void;
  dec: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()((set) => ({
  // initial state
  products: [],

  // Action 1: Add a product or increase its quantity
  addtoCart: (id) =>
    set((state) => {
      const existingProd = state.products.find((p) => p.id === id);
      if (existingProd) {
        return {
          products: state.products.map((p) =>
            p.id === id ? { ...p, qty: p.qty + 1 } : p,
          ),
        };
      }
      return {
        products: [...state.products, { id, qty: 1 }],
      };
    }),
  inc: (id) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, qty: p.qty + 1 } : p,
      ),
    })),
  dec: (id) =>
    set((state) => ({
      products: state.products
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0),
    })),
  removeFromCart: (id) =>
    set((state) => {
      return {
        products: state.products.filter((p) => p.id !== id),
      };
    }),
  clearCart: () => set({ products: [] }),
}));
