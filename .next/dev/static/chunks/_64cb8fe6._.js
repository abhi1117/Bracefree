(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/helper.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommonButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/helper.ts [app-client] (ecmascript)");
"use client";
;
;
function CommonButton({ variant = "primary", icon, children, className, ...props }) {
    const baseStyles = "flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all cursor-pointer";
    const variants = {
        primary: "bg-(--color-primary) text-(--color-secondary) hover:opacity-60",
        secondary: "bg-transparent text-[--color-primary] border border-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-secondary)",
        outline: "border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-secondary)",
        danger: "bg-red-600 text-white hover:bg-red-700"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseStyles, variants[variant], className),
        ...props,
        children: [
            icon && icon,
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/Button.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = CommonButton;
var _c;
__turbopack_context__.k.register(_c, "CommonButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_64cb8fe6._.js.map