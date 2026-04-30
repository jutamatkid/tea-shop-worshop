import { t as useCartStore } from "./cartStore-DY1bEMo-.js";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/Item.tsx
var Item = ({ id, image, name, price }) => {
	const addItem = useCartStore((state) => state.addItem);
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-sm overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg",
		children: [/* @__PURE__ */ jsx("div", {
			className: "relative h-48 w-full",
			children: /* @__PURE__ */ jsx("img", {
				src: image,
				alt: name,
				className: "h-full w-full object-cover"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "mb-2 text-lg font-bold text-gray-800 line-clamp-1",
					children: name
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mb-4 text-xl font-semibold text-blue-600",
					children: ["฿", price.toLocaleString()]
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => addItem({
						id,
						name,
						price,
						image
					}),
					className: "w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 active:bg-blue-800",
					children: "Add to Cart"
				})
			]
		})]
	});
};
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var items = [
	{
		id: 1,
		name: "Wireless Noise Cancelling Headphones",
		price: 8900,
		image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500"
	},
	{
		id: 2,
		name: "Mechanical Gaming Keyboard RGB",
		price: 3500,
		image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=500"
	},
	{
		id: 3,
		name: "Smart Watch Series 9",
		price: 12500,
		image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500"
	},
	{
		id: 4,
		name: "Professional Mirrorless Camera",
		price: 45900,
		image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500"
	},
	{
		id: 5,
		name: "Minimalist Leather Backpack",
		price: 2200,
		image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500"
	},
	{
		id: 6,
		name: "Portable Bluetooth Speaker",
		price: 1850,
		image: "https://images.unsplash.com/photo-1608156639585-34a0a562559a?q=80&w=500"
	},
	{
		id: 7,
		name: "Ultra-wide Curved Monitor",
		price: 15900,
		image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500"
	},
	{
		id: 8,
		name: "Ergonomic Office Chair",
		price: 6400,
		image: "https://images.unsplash.com/photo-1505797149-43b007662976?q=80&w=500"
	}
];
function App() {
	return /* @__PURE__ */ jsx("div", {
		className: "mt-20 grid grid-cols-4 gap-4",
		children: items.map((item) => /* @__PURE__ */ jsx(Item, {
			name: item.name,
			image: item.image,
			price: item.price,
			id: item.id
		}, item.id))
	});
}
//#endregion
export { App as component };
