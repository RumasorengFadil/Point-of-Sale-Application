import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
    persist(
      (set, get) => ({
        cart: [],
  
        handleAddToCart: (product) => {
          const { cart } = get();
          const existingProduct = cart.find((item) => item.id === product.id);
  
          if (existingProduct) {
            set({
              cart: cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            });
          } else {
            set({
              cart: [
                ...cart,
                {
                  id: product.id,
                  quantity: 1,
                },
              ],
            });
          }
        },
  
        handleIncreaseQty: (id) => {
          set({
            cart: get().cart.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        },
  
        handleDecreaseQty: (id) => {
          set({
            cart: get().cart.map((item) =>
              item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          });
        },
  
        handleDestroyFromCart: (id) => {
          set({
            cart: get().cart.filter((item) => item.id !== id),
          });
        },
  
        handleClearCart: () => set({ cart: [] }),
      }),
      {
        name: "cart-store", // Key untuk localStorage/sessionStorage
        storage: {
          getItem: (key) => {
            const value = sessionStorage.getItem(key);
            return value ? JSON.parse(value) : null; // Parsing data JSON saat mengambil
          },
          setItem: (key, value) => {
            sessionStorage.setItem(key, JSON.stringify(value)); // Serialize data JSON saat menyimpan
          },
          removeItem: (key) => sessionStorage.removeItem(key),
        },
      }
    )
  );
  
  export default useCartStore;