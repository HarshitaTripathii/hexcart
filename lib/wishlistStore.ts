import { create } from "zustand";
interface WishlistProducts {
  w_id: number;
}
// WishlistProducts is array of ids

interface WishListState {
  wproducts: number[];
  toggleWishlist: (id: number) => void;
  clearWishlist: () => void;
}

export const useWishStore = create<WishListState>()((set) => ({
  wproducts: [],

  toggleWishlist: (id) =>
    set((state) => {
      const isWishlisted = state.wproducts.includes(id);

      if (isWishlisted) {
        return {
          wproducts: state.wproducts.filter((i) => i != id),
        };
      }
      return {
        wproducts: [...state.wproducts, id],
      };
    }),
  clearWishlist: () => set({ wproducts: [] }),
}));
