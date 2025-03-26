import { jsx, jsxs } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
function LoadingSpinner() {
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-zinc-950 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("div", { className: "h-24 w-24 rounded-full border-t-4 border-white animate-spin" }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 text-white text-center font-display", children: "Loading..." })
  ] }) });
}
function render(url) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(LoadingSpinner, {})
  );
}
export {
  render
};
