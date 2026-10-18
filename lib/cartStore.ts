
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Product {
  id: string,
  qty: number
}

interface CartState {
  product: Product[],
  addToCart: (id: string) => void,
  inc: (id: string) => void,
  dec:  (id: string) => void,
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      product: [],
      addToCart: (id) => set((state) => {
        const exists = state.product.find((p) => p.id === id)
        if (exists) {
          return { product: state.product.map((p) => p.id === id ? { ...p, qty: p.qty + 1 } : p) }
        }
        return { product: [...state.product, { id, qty: 1 }] }
      }),
      inc: (id) => set((state) => ({
        product: state.product.map((p) => p.id === id ? { ...p, qty: p.qty + 1 } : p),
      })),
      dec: (id) => set((state) => {
        const product = state.product.map((p) => p.id === id ? { ...p, qty: p.qty - 1 } : p)
        return { product: product.filter((p) => p.qty > 0) }
      }),
    }),
    { name: 'hexcart-cart' }
  )
)
