import { t as useCartStore } from "./cartStore-DY1bEMo-.js";
import { HeadContent, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ShoppingCart } from "lucide-react";
//#region src/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "mt-20 border-t border-[var(--line)] px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left",
			children: [/* @__PURE__ */ jsxs("p", {
				className: "m-0 text-sm",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Your name here. All rights reserved."
				]
			}), /* @__PURE__ */ jsx("p", {
				className: "island-kicker m-0",
				children: "Built with TanStack Start"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-4 flex justify-center gap-4",
			children: [/* @__PURE__ */ jsxs("a", {
				href: "https://x.com/tan_stack",
				target: "_blank",
				rel: "noreferrer",
				className: "rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]",
				children: [/* @__PURE__ */ jsx("span", {
					className: "sr-only",
					children: "Follow TanStack on X"
				}), /* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 16 16",
					"aria-hidden": "true",
					width: "32",
					height: "32",
					children: /* @__PURE__ */ jsx("path", {
						fill: "currentColor",
						d: "M12.6 1h2.2L10 6.48 15.64 15h-4.41L7.78 9.82 3.23 15H1l5.14-5.84L.72 1h4.52l3.12 4.73L12.6 1zm-.77 12.67h1.22L4.57 2.26H3.26l8.57 11.41z"
					})
				})]
			}), /* @__PURE__ */ jsxs("a", {
				href: "https://github.com/TanStack",
				target: "_blank",
				rel: "noreferrer",
				className: "rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]",
				children: [/* @__PURE__ */ jsx("span", {
					className: "sr-only",
					children: "Go to TanStack GitHub"
				}), /* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 16 16",
					"aria-hidden": "true",
					width: "32",
					height: "32",
					children: /* @__PURE__ */ jsx("path", {
						fill: "currentColor",
						d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
					})
				})]
			})]
		})]
	});
}
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-C33SfrTw.css";
//#endregion
//#region src/components/Navbar.tsx
function Navbar() {
	const navigate = useNavigate();
	const cartCount = useCartStore((state) => state.items).reduce((sum, item) => sum + item.quantity, 0);
	return /* @__PURE__ */ jsxs("div", {
		className: "p-4 bg-amber-300 text-black flex justify-between",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-2xl font-bold cursor-pointer",
			onClick: () => {
				navigate({ to: "/" });
			},
			children: "Tea shop"
		}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("button", {
			className: "relative p-2",
			onClick: () => {
				navigate({ to: "/cart" });
			},
			children: [/* @__PURE__ */ jsx(ShoppingCart, { className: "h-6 w-6" }), cartCount > 0 && /* @__PURE__ */ jsx("span", {
				className: "absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white transform translate-x-1 -translate-y-1",
				children: cartCount
			})]
		}) })]
	});
}
//#endregion
//#region src/routes/__root.tsx
var THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;
var Route$3 = createRootRoute({
	head: () => ({
		links: [{
			rel: "stylesheet",
			href: styles_default
		}],
		scripts: [{ children: THEME_INIT_SCRIPT }]
	}),
	component: RootLayout
});
function RootLayout() {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("div", {
				className: "max-w-5xl mx-auto",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(Scripts, {}),
			/* @__PURE__ */ jsx(TanStackRouterDevtools, { position: "bottom-right" })
		] })]
	});
}
//#endregion
//#region src/routes/cart.tsx
var $$splitComponentImporter$2 = () => import("./cart-Ca4aKs8Q.js");
var Route$2 = createFileRoute("/cart")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-vzPY2NgV.js");
var Route$1 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-B5oQRMCK.js");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region src/routeTree.gen.ts
var CartRoute = Route$2.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$3
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$3
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	AboutRoute,
	CartRoute
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { getRouter };
