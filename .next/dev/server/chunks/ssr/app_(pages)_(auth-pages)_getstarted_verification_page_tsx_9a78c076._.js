module.exports = [
"[project]/app/(pages)/(auth-pages)/getstarted/verification/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnterVerificationCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function EnterVerificationCode({ phone, otp = [], handleOtpChange, onResendOtp, onVerify }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        },
        transition: {
            duration: 0.5
        },
        className: "w-full max-w-lg py-8 px-12 rounded-2xl shadow-sm flex flex-col justify-center bg-[var(--color-bg-neutral-50)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-[var(--color-text-primary)] mb-3 text-left",
                children: "Enter verification code"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/(auth-pages)/getstarted/verification/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[var(--color-text-secondary)] mb-8 text-left",
                children: [
                    "We’ve sent a 4-digit code to +1 (",
                    phone || "635 612 300",
                    ")."
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/(auth-pages)/getstarted/verification/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-start space-x-4 mb-6",
                children: (Array.isArray(otp) ? otp : [
                    "",
                    "",
                    "",
                    ""
                ]).map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        maxLength: 1,
                        value: digit,
                        onChange: (e)=>handleOtpChange(index, e.target.value),
                        className: "w-12 h-12 text-center border border-[var(--color-btn-teritary-200)] rounded-lg    text-base font-medium text-[var(--color-text-primary)]    focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]    bg-[var(--color-bg-neutral-50)] hover:cursor-pointer"
                    }, index, false, {
                        fileName: "[project]/app/(pages)/(auth-pages)/getstarted/verification/page.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(pages)/(auth-pages)/getstarted/verification/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onResendOtp,
                className: "text-[var(--color-primary)] font-medium text-sm mb-6 text-left hover:underline cursor-pointer",
                children: "Resend OTP"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/(auth-pages)/getstarted/verification/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[var(--color-text-secondary)] mb-6 text-left",
                children: "Make sure you enter the correct code. You have 3 attempts remaining."
            }, void 0, false, {
                fileName: "[project]/app/(pages)/(auth-pages)/getstarted/verification/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onVerify,
                className: "w-full bg-[var(--color-btn-primary-500)] hover:bg-[var(--color-btn-primary-600)]    text-[var(--color-secondary)] py-3 rounded-lg font-semibold transition hover:cursor-pointer",
                children: "Verify & Continue"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/(auth-pages)/getstarted/verification/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, "otp", true, {
        fileName: "[project]/app/(pages)/(auth-pages)/getstarted/verification/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_%28pages%29_%28auth-pages%29_getstarted_verification_page_tsx_9a78c076._.js.map