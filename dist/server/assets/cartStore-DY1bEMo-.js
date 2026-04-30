import { create } from "zustand";
//#region src/strore/cartStore.tsx
var useCartStore = create((set, get) => ({
	items: [],
	addItem: (item) => {
		set((state) => {
			if (state.items.find((i) => i.id === item.id)) return { items: state.items.map((i) => i.id === item.id ? {
				...i,
				quantity: i.quantity + 1
			} : i) };
			return { items: [...state.items, {
				...item,
				quantity: 1
			}] };
		});
	},
	removeItem: (id) => {
		set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
	},
	clearCart: () => set({ items: [] }),
	getTotal: () => {
		const { items } = get();
		return items.reduce((total, item) => total + item.price * item.quantity, 0);
	}
}));
//#endregion
export { useCartStore as t };
