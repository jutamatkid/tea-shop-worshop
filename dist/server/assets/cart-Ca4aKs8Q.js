import { t as useCartStore } from "./cartStore-DY1bEMo-.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/cart.tsx?tsr-split=component
function RouteComponent() {
	const items = useCartStore((state) => state.items);
	const getTotal = useCartStore((state) => state.getTotal);
	const removeItem = useCartStore((state) => state.removeItem);
	const clearCart = useCartStore((state) => state.clearCart);
	const total = getTotal();
	const handleCheckout = () => {
		if (items.length === 0) return;
		alert(`Checkout successful! Total: ฿${total.toLocaleString()}`);
		clearCart();
	};
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center min-h-screen bg-zinc-900",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-md p-8 text-white font-mono",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "space-y-4 mb-6 text-lg",
					children: items.length === 0 ? /* @__PURE__ */ jsx("p", {
						className: "text-gray-400 text-center",
						children: "Your cart is empty"
					}) : items.map((item) => /* @__PURE__ */ jsxs("div", {
						className: "flex justify-between items-center",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: item.name }), /* @__PURE__ */ jsxs("span", {
							className: "text-gray-400 ml-2",
							children: ["x", item.quantity]
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsxs("span", { children: ["฿", (item.price * item.quantity).toLocaleString()] }), /* @__PURE__ */ jsx("button", {
								onClick: () => removeItem(item.id),
								className: "text-red-400 hover:text-red-300 text-sm",
								children: "Remove"
							})]
						})]
					}, item.id))
				}),
				/* @__PURE__ */ jsx("hr", { className: "border-gray-500 mb-6" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex justify-between text-xl font-semibold mb-10",
					children: [/* @__PURE__ */ jsx("span", { children: "Total" }), /* @__PURE__ */ jsxs("span", { children: ["฿", total.toLocaleString()] })]
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: handleCheckout,
					disabled: items.length === 0,
					className: "w-full py-4 border-2 border-white rounded-2xl text-xl hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
					children: "Checkout"
				})
			]
		})
	});
}
//#endregion
export { RouteComponent as component };
