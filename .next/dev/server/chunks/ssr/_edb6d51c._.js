module.exports = [
"[project]/app/(pages)/(auth-pages)/getstarted/details/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorklyStepper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$multi$2d$progress$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-multi-progress/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
function WorklyStepper({ currentStep, totalSteps = 6, title }) {
    // ✅ Create equal segments using global color tokens
    const segments = Array.from({
        length: totalSteps
    }, (_, i)=>({
            value: 100 / totalSteps,
            color: i < currentStep ? "var(--color-btn-primary-500)" // active segment
             : "var(--color-btn-teritary-200)"
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col mb-4",
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-base font-semibold text-[var(--color-text-primary)] mb-2",
                children: [
                    "Step ",
                    currentStep,
                    " : ",
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/(auth-pages)/getstarted/details/page.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$multi$2d$progress$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            height: 8,
                            elements: segments,
                            background: "var(--color-btn-teritary-200)",
                            transitionTime: 0.3,
                            ...{
                                borderRadius: 50
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/(auth-pages)/getstarted/details/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/(auth-pages)/getstarted/details/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-[var(--color-text-secondary)] ml-2",
                        children: [
                            currentStep,
                            "/",
                            totalSteps
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/(auth-pages)/getstarted/details/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/(auth-pages)/getstarted/details/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Example placeholder text",
                className: "mt-3 text-sm px-3 py-2 border border-[var(--color-btn-teritary-200)]    rounded-lg text-[var(--color-text-primary)]    placeholder-[var(--color-text-muted)]    bg-[var(--color-bg-neutral-50)] focus:ring-2    focus:ring-[var(--color-primary)] focus:outline-none"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/(auth-pages)/getstarted/details/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/(auth-pages)/getstarted/details/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/object-assign/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++){
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
}),
"[project]/node_modules/glamor/lib/sheet.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyleSheet = StyleSheet;
var _objectAssign = __turbopack_context__.r("[project]/node_modules/object-assign/index.js [app-ssr] (ecmascript)");
var _objectAssign2 = _interopRequireDefault(_objectAssign);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}
/* 

high performance StyleSheet for css-in-js systems 

- uses multiple style tags behind the scenes for millions of rules 
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side 


// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject() 
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }') 
- appends a css rule into the stylesheet 

styleSheet.flush() 
- empties the stylesheet of all its contents


*/ function last(arr) {
    return arr[arr.length - 1];
}
function sheetForTag(tag) {
    if (tag.sheet) {
        return tag.sheet;
    }
    // this weirdness brought to you by firefox 
    for(var i = 0; i < document.styleSheets.length; i++){
        if (document.styleSheets[i].ownerNode === tag) {
            return document.styleSheets[i];
        }
    }
}
var isBrowser = ("TURBOPACK compile-time value", "undefined") !== 'undefined';
var isDev = ("TURBOPACK compile-time value", "development") === 'development' || !("TURBOPACK compile-time value", "development"); //(x => (x === 'development') || !x)(process.env.NODE_ENV)
var isTest = ("TURBOPACK compile-time value", "development") === 'test';
var oldIE = function() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    {
        var div;
    /*TURBOPACK member replacement*/ }
}();
function makeStyleTag() {
    var tag = document.createElement('style');
    tag.type = 'text/css';
    tag.setAttribute('data-glamor', '');
    tag.appendChild(document.createTextNode(''));
    (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
    return tag;
}
function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$speedy = _ref.speedy, speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy, _ref$maxLength = _ref.maxLength, maxLength = _ref$maxLength === undefined ? ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 65000 : _ref$maxLength;
    this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
    this.sheet = undefined;
    this.tags = [];
    this.maxLength = maxLength;
    this.ctr = 0;
}
(0, _objectAssign2.default)(StyleSheet.prototype, {
    getSheet: function getSheet() {
        return sheetForTag(last(this.tags));
    },
    inject: function inject() {
        var _this = this;
        if (this.injected) {
            throw new Error('already injected stylesheet!');
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // server side 'polyfill'. just enough behavior to be useful.
            this.sheet = {
                cssRules: [],
                insertRule: function insertRule(rule) {
                    // enough 'spec compliance' to be able to extract the rules later  
                    // in other words, just the cssText field 
                    _this.sheet.cssRules.push({
                        cssText: rule
                    });
                }
            };
        }
        this.injected = true;
    },
    speedy: function speedy(bool) {
        if (this.ctr !== 0) {
            throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
        }
        this.isSpeedy = !!bool;
    },
    _insert: function _insert(rule) {
        // this weirdness for perf, and chrome's weird bug 
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
            var sheet = this.getSheet();
            sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : sheet.cssRules.length);
        } catch (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                // might need beter dx for this 
                console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
            }
        }
    },
    insert: function insert(rule) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        {
            var tag;
        } else {
            // server side is pretty simple         
            this.sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : this.sheet.cssRules.length);
        }
        this.ctr++;
        if (isBrowser && this.ctr % this.maxLength === 0) //TURBOPACK unreachable
        ;
        return this.ctr - 1;
    },
    // commenting this out till we decide on v3's decision 
    // _replace(index, rule) {
    //   // this weirdness for perf, and chrome's weird bug 
    //   // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
    //   try {  
    //     let sheet = this.getSheet()        
    //     sheet.deleteRule(index) // todo - correct index here     
    //     sheet.insertRule(rule, index)
    //   }
    //   catch(e) {
    //     if(isDev) {
    //       // might need beter dx for this 
    //       console.warn('whoops, problem replacing rule', rule) //eslint-disable-line no-console
    //     }          
    //   }          
    // }
    // replace(index, rule) {
    //   if(isBrowser) {
    //     if(this.isSpeedy && this.getSheet().insertRule) {
    //       this._replace(index, rule)
    //     }
    //     else {
    //       let _slot = Math.floor((index  + this.maxLength) / this.maxLength) - 1        
    //       let _index = (index % this.maxLength) + 1
    //       let tag = this.tags[_slot]
    //       tag.replaceChild(document.createTextNode(rule), tag.childNodes[_index])
    //     }
    //   }
    //   else {
    //     let rules = this.sheet.cssRules
    //     this.sheet.cssRules = [ ...rules.slice(0, index), { cssText: rule }, ...rules.slice(index + 1) ]
    //   }
    // }
    delete: function _delete(index) {
        // we insert a blank rule when 'deleting' so previously returned indexes remain stable
        return this.replace(index, '');
    },
    flush: function flush() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // simpler on server 
            this.sheet.cssRules = [];
        }
        this.injected = false;
    },
    rules: function rules() {
        if ("TURBOPACK compile-time truthy", 1) {
            return this.sheet.cssRules;
        }
        //TURBOPACK unreachable
        ;
        var arr;
    }
});
}),
"[project]/node_modules/fbjs/lib/camelize.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */ var _hyphenPattern = /-(.)/g;
/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */ function camelize(string) {
    return string.replace(_hyphenPattern, function(_, character) {
        return character.toUpperCase();
    });
}
module.exports = camelize;
}),
"[project]/node_modules/fbjs/lib/camelizeStyleName.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */ var camelize = __turbopack_context__.r("[project]/node_modules/fbjs/lib/camelize.js [app-ssr] (ecmascript)");
var msPattern = /^-ms-/;
/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */ function camelizeStyleName(string) {
    return camelize(string.replace(msPattern, 'ms-'));
}
module.exports = camelizeStyleName;
}),
"[project]/node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */ /**
 * CSS properties which accept numbers but are not in units of "px".
 */ var isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridRowStart: true,
    gridRowEnd: true,
    gridColumn: true,
    gridColumnStart: true,
    gridColumnEnd: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    // SVG-related properties
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
};
function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */ var prefixes = [
    'Webkit',
    'ms',
    'Moz',
    'O'
];
// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function(prop) {
    prefixes.forEach(function(prefix) {
        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
});
/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */ var shorthandPropertyExpansions = {
    background: {
        backgroundAttachment: true,
        backgroundColor: true,
        backgroundImage: true,
        backgroundPositionX: true,
        backgroundPositionY: true,
        backgroundRepeat: true
    },
    backgroundPosition: {
        backgroundPositionX: true,
        backgroundPositionY: true
    },
    border: {
        borderWidth: true,
        borderStyle: true,
        borderColor: true
    },
    borderBottom: {
        borderBottomWidth: true,
        borderBottomStyle: true,
        borderBottomColor: true
    },
    borderLeft: {
        borderLeftWidth: true,
        borderLeftStyle: true,
        borderLeftColor: true
    },
    borderRight: {
        borderRightWidth: true,
        borderRightStyle: true,
        borderRightColor: true
    },
    borderTop: {
        borderTopWidth: true,
        borderTopStyle: true,
        borderTopColor: true
    },
    font: {
        fontStyle: true,
        fontVariant: true,
        fontWeight: true,
        fontSize: true,
        lineHeight: true,
        fontFamily: true
    },
    outline: {
        outlineWidth: true,
        outlineStyle: true,
        outlineColor: true
    }
};
var CSSProperty = {
    isUnitlessNumber: isUnitlessNumber,
    shorthandPropertyExpansions: shorthandPropertyExpansions
};
exports.default = CSSProperty;
}),
"[project]/node_modules/fbjs/lib/emptyFunction.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */ function makeEmptyFunction(arg) {
    return function() {
        return arg;
    };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */ var emptyFunction = function emptyFunction() {};
emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function() {
    return this;
};
emptyFunction.thatReturnsArgument = function(arg) {
    return arg;
};
module.exports = emptyFunction;
}),
"[project]/node_modules/fbjs/lib/warning.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var emptyFunction = __turbopack_context__.r("[project]/node_modules/fbjs/lib/emptyFunction.js [app-ssr] (ecmascript)");
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var warning = emptyFunction;
if ("TURBOPACK compile-time truthy", 1) {
    var printWarning = function printWarning(format) {
        for(var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    warning = function warning(condition, format) {
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (format.indexOf('Failed Composite propType: ') === 0) {
            return; // Ignore CompositeComponent proptype check.
        }
        if (!condition) {
            for(var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++){
                args[_key2 - 2] = arguments[_key2];
            }
            printWarning.apply(undefined, [
                format
            ].concat(args));
        }
    };
}
module.exports = warning;
}),
"[project]/node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _CSSProperty = __turbopack_context__.r("[project]/node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js [app-ssr] (ecmascript)");
var _CSSProperty2 = _interopRequireDefault(_CSSProperty);
var _warning = __turbopack_context__.r("[project]/node_modules/fbjs/lib/warning.js [app-ssr] (ecmascript)");
var _warning2 = _interopRequireDefault(_warning);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */ var isUnitlessNumber = _CSSProperty2.default.isUnitlessNumber;
var styleWarnings = {};
/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */ function dangerousStyleValue(name, value, component) {
    // Note that we've removed escapeTextForBrowser() calls here since the
    // whole string will be escaped when the attribute is injected into
    // the markup. If you provide unsafe user data here they can inject
    // arbitrary CSS which may be problematic (I couldn't repro this):
    // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
    // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
    // This is not an XSS hole but instead a potential CSS injection issue
    // which has lead to a greater discussion about how we're going to
    // trust URLs moving forward. See #2115901
    var isEmpty = value == null || typeof value === 'boolean' || value === '';
    if (isEmpty) {
        return '';
    }
    var isNonNumeric = isNaN(value);
    if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
        return '' + value; // cast to string
    }
    if (typeof value === 'string') {
        if ("TURBOPACK compile-time truthy", 1) {
            // Allow '0' to pass through without warning. 0 is already special and
            // doesn't require units, so we don't need to warn about it.
            if (component && value !== '0') {
                var owner = component._currentElement._owner;
                var ownerName = owner ? owner.getName() : null;
                if (ownerName && !styleWarnings[ownerName]) {
                    styleWarnings[ownerName] = {};
                }
                var warned = false;
                if (ownerName) {
                    var warnings = styleWarnings[ownerName];
                    warned = warnings[name];
                    if (!warned) {
                        warnings[name] = true;
                    }
                }
                if (!warned) {
                    ("TURBOPACK compile-time truthy", 1) ? (0, _warning2.default)(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : "TURBOPACK unreachable";
                }
            }
        }
        value = value.trim();
    }
    return value + 'px';
}
exports.default = dangerousStyleValue;
}),
"[project]/node_modules/fbjs/lib/hyphenate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */ var _uppercasePattern = /([A-Z])/g;
/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */ function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase();
}
module.exports = hyphenate;
}),
"[project]/node_modules/fbjs/lib/hyphenateStyleName.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */ var hyphenate = __turbopack_context__.r("[project]/node_modules/fbjs/lib/hyphenate.js [app-ssr] (ecmascript)");
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */ function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
}
module.exports = hyphenateStyleName;
}),
"[project]/node_modules/fbjs/lib/memoizeStringOnly.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks static-only
 */ /**
 * Memoizes the return value of a function that accepts one string argument.
 */ function memoizeStringOnly(callback) {
    var cache = {};
    return function(string) {
        if (!cache.hasOwnProperty(string)) {
            cache[string] = callback.call(this, string);
        }
        return cache[string];
    };
}
module.exports = memoizeStringOnly;
}),
"[project]/node_modules/glamor/lib/CSSPropertyOperations/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.processStyleName = undefined;
exports.createMarkupForStyles = createMarkupForStyles;
var _camelizeStyleName = __turbopack_context__.r("[project]/node_modules/fbjs/lib/camelizeStyleName.js [app-ssr] (ecmascript)");
var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);
var _dangerousStyleValue = __turbopack_context__.r("[project]/node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js [app-ssr] (ecmascript)");
var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);
var _hyphenateStyleName = __turbopack_context__.r("[project]/node_modules/fbjs/lib/hyphenateStyleName.js [app-ssr] (ecmascript)");
var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
var _memoizeStringOnly = __turbopack_context__.r("[project]/node_modules/fbjs/lib/memoizeStringOnly.js [app-ssr] (ecmascript)");
var _memoizeStringOnly2 = _interopRequireDefault(_memoizeStringOnly);
var _warning = __turbopack_context__.r("[project]/node_modules/fbjs/lib/warning.js [app-ssr] (ecmascript)");
var _warning2 = _interopRequireDefault(_warning);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var processStyleName = exports.processStyleName = (0, _memoizeStringOnly2.default)(_hyphenateStyleName2.default); /**
                                                                                                                   * Copyright 2013-present, Facebook, Inc.
                                                                                                                   * All rights reserved.
                                                                                                                   *
                                                                                                                   * This source code is licensed under the BSD-style license found in the
                                                                                                                   * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                   * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                   *
                                                                                                                   * @providesModule CSSPropertyOperations
                                                                                                                   */ 
if ("TURBOPACK compile-time truthy", 1) {
    // 'msTransform' is correct, but the other prefixes should be capitalized
    var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
    // style values shouldn't contain a semicolon
    var badStyleValueWithSemicolonPattern = /;\s*$/;
    var warnedStyleNames = {};
    var warnedStyleValues = {};
    var warnedForNaNValue = false;
    var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
        }
        warnedStyleNames[name] = true;
        ("TURBOPACK compile-time truthy", 1) ? (0, _warning2.default)(false, 'Unsupported style property %s. Did you mean %s?%s', name, (0, _camelizeStyleName2.default)(name), checkRenderMessage(owner)) : "TURBOPACK unreachable";
    };
    var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
        }
        warnedStyleNames[name] = true;
        ("TURBOPACK compile-time truthy", 1) ? (0, _warning2.default)(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : "TURBOPACK unreachable";
    };
    var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
        if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
            return;
        }
        warnedStyleValues[value] = true;
        ("TURBOPACK compile-time truthy", 1) ? (0, _warning2.default)(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : "TURBOPACK unreachable";
    };
    var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
        if (warnedForNaNValue) {
            return;
        }
        warnedForNaNValue = true;
        ("TURBOPACK compile-time truthy", 1) ? (0, _warning2.default)(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : "TURBOPACK unreachable";
    };
    var checkRenderMessage = function checkRenderMessage(owner) {
        if (owner) {
            var name = owner.getName();
            if (name) {
                return ' Check the render method of `' + name + '`.';
            }
        }
        return '';
    };
    /**
   * @param {string} name
   * @param {*} value
   * @param {ReactDOMComponent} component
   */ var warnValidStyle = function warnValidStyle(name, value, component) {
        //eslint-disable-line no-var
        var owner = void 0;
        if (component) {
            owner = component._currentElement._owner;
        }
        if (name.indexOf('-') > -1) {
            warnHyphenatedStyleName(name, owner);
        } else if (badVendoredStyleNamePattern.test(name)) {
            warnBadVendoredStyleName(name, owner);
        } else if (badStyleValueWithSemicolonPattern.test(value)) {
            warnStyleValueWithSemicolon(name, value, owner);
        }
        if (typeof value === 'number' && isNaN(value)) {
            warnStyleValueIsNaN(name, value, owner);
        }
    };
}
/**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */ function createMarkupForStyles(styles, component) {
    var serialized = '';
    for(var styleName in styles){
        var isCustomProp = styleName.indexOf('--') === 0;
        if (!styles.hasOwnProperty(styleName)) {
            continue;
        }
        if (styleName === 'label') {
            continue;
        }
        var styleValue = styles[styleName];
        if (("TURBOPACK compile-time value", "development") !== 'production' && !isCustomProp) {
            warnValidStyle(styleName, styleValue, component);
        }
        if (styleValue != null) {
            if (isCustomProp) {
                serialized += styleName + ':' + styleValue + ';';
            } else {
                serialized += processStyleName(styleName) + ':';
                serialized += (0, _dangerousStyleValue2.default)(styleName, styleValue, component) + ';';
            }
        }
    }
    return serialized || null;
}
}),
"[project]/node_modules/glamor/lib/clean.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
exports.default = clean;
// Returns true for null, false, undefined and {}
function isFalsy(value) {
    return value === null || value === undefined || value === false || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0;
}
function cleanObject(object) {
    if (isFalsy(object)) return null;
    if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return object;
    var acc = {}, keys = Object.keys(object), hasFalsy = false;
    for(var i = 0; i < keys.length; i++){
        var value = object[keys[i]];
        var filteredValue = clean(value);
        if (filteredValue === null || filteredValue !== value) {
            hasFalsy = true;
        }
        if (filteredValue !== null) {
            acc[keys[i]] = filteredValue;
        }
    }
    return Object.keys(acc).length === 0 ? null : hasFalsy ? acc : object;
}
function cleanArray(rules) {
    var hasFalsy = false;
    var filtered = [];
    rules.forEach(function(rule) {
        var filteredRule = clean(rule);
        if (filteredRule === null || filteredRule !== rule) {
            hasFalsy = true;
        }
        if (filteredRule !== null) {
            filtered.push(filteredRule);
        }
    });
    return filtered.length == 0 ? null : hasFalsy ? filtered : rules;
}
// Takes style array or object provided by user and clears all the falsy data 
// If there is no styles left after filtration returns null
function clean(input) {
    return Array.isArray(input) ? cleanArray(input) : cleanObject(input);
}
}),
"[project]/node_modules/inline-style-prefixer/static/staticData.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var w = [
    "Webkit"
];
var m = [
    "Moz"
];
var ms = [
    "ms"
];
var wm = [
    "Webkit",
    "Moz"
];
var wms = [
    "Webkit",
    "ms"
];
var wmms = [
    "Webkit",
    "Moz",
    "ms"
];
exports.default = {
    plugins: [],
    prefixMap: {
        "appearance": wm,
        "userSelect": wmms,
        "textEmphasisPosition": w,
        "textEmphasis": w,
        "textEmphasisStyle": w,
        "textEmphasisColor": w,
        "boxDecorationBreak": w,
        "clipPath": w,
        "maskImage": w,
        "maskMode": w,
        "maskRepeat": w,
        "maskPosition": w,
        "maskClip": w,
        "maskOrigin": w,
        "maskSize": w,
        "maskComposite": w,
        "mask": w,
        "maskBorderSource": w,
        "maskBorderMode": w,
        "maskBorderSlice": w,
        "maskBorderWidth": w,
        "maskBorderOutset": w,
        "maskBorderRepeat": w,
        "maskBorder": w,
        "maskType": w,
        "textDecorationStyle": w,
        "textDecorationSkip": w,
        "textDecorationLine": w,
        "textDecorationColor": w,
        "filter": w,
        "fontFeatureSettings": w,
        "breakAfter": wmms,
        "breakBefore": wmms,
        "breakInside": wmms,
        "columnCount": wm,
        "columnFill": wm,
        "columnGap": wm,
        "columnRule": wm,
        "columnRuleColor": wm,
        "columnRuleStyle": wm,
        "columnRuleWidth": wm,
        "columns": wm,
        "columnSpan": wm,
        "columnWidth": wm,
        "writingMode": wms,
        "flex": w,
        "flexBasis": w,
        "flexDirection": w,
        "flexGrow": w,
        "flexFlow": w,
        "flexShrink": w,
        "flexWrap": w,
        "alignContent": w,
        "alignItems": w,
        "alignSelf": w,
        "justifyContent": w,
        "order": w,
        "transform": w,
        "transformOrigin": w,
        "transformOriginX": w,
        "transformOriginY": w,
        "backfaceVisibility": w,
        "perspective": w,
        "perspectiveOrigin": w,
        "transformStyle": w,
        "transformOriginZ": w,
        "animation": w,
        "animationDelay": w,
        "animationDirection": w,
        "animationFillMode": w,
        "animationDuration": w,
        "animationIterationCount": w,
        "animationName": w,
        "animationPlayState": w,
        "animationTimingFunction": w,
        "backdropFilter": w,
        "fontKerning": w,
        "scrollSnapType": wms,
        "scrollSnapPointsX": wms,
        "scrollSnapPointsY": wms,
        "scrollSnapDestination": wms,
        "scrollSnapCoordinate": wms,
        "shapeImageThreshold": w,
        "shapeImageMargin": w,
        "shapeImageOutside": w,
        "hyphens": wmms,
        "flowInto": wms,
        "flowFrom": wms,
        "regionFragment": wms,
        "textAlignLast": m,
        "tabSize": m,
        "wrapFlow": ms,
        "wrapThrough": ms,
        "wrapMargin": ms,
        "gridTemplateColumns": ms,
        "gridTemplateRows": ms,
        "gridTemplateAreas": ms,
        "gridTemplate": ms,
        "gridAutoColumns": ms,
        "gridAutoRows": ms,
        "gridAutoFlow": ms,
        "grid": ms,
        "gridRowStart": ms,
        "gridColumnStart": ms,
        "gridRowEnd": ms,
        "gridRow": ms,
        "gridColumn": ms,
        "gridColumnEnd": ms,
        "gridColumnGap": ms,
        "gridRowGap": ms,
        "gridArea": ms,
        "gridGap": ms,
        "textSizeAdjust": wms,
        "borderImage": w,
        "borderImageOutset": w,
        "borderImageRepeat": w,
        "borderImageSlice": w,
        "borderImageSource": w,
        "borderImageWidth": w,
        "transitionDelay": w,
        "transitionDuration": w,
        "transitionProperty": w,
        "transitionTimingFunction": w
    }
};
module.exports = exports["default"];
}),
"[project]/node_modules/inline-style-prefixer/utils/capitalizeString.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];
}),
"[project]/node_modules/inline-style-prefixer/utils/prefixProperty.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = prefixProperty;
var _capitalizeString = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/utils/capitalizeString.js [app-ssr] (ecmascript)");
var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function prefixProperty(prefixProperties, property, style) {
    if (prefixProperties.hasOwnProperty(property)) {
        var requiredPrefixes = prefixProperties[property];
        for(var i = 0, len = requiredPrefixes.length; i < len; ++i){
            style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
        }
    }
}
module.exports = exports['default'];
}),
"[project]/node_modules/inline-style-prefixer/utils/prefixValue.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
    for(var i = 0, len = plugins.length; i < len; ++i){
        var processedValue = plugins[i](property, value, style, metaData);
        // we can stop processing if a value is returned
        // as all plugin criteria are unique
        if (processedValue) {
            return processedValue;
        }
    }
}
module.exports = exports["default"];
}),
"[project]/node_modules/inline-style-prefixer/static/plugins/cursor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = cursor;
var prefixes = [
    '-webkit-',
    '-moz-',
    ''
];
var values = {
    'zoom-in': true,
    'zoom-out': true,
    grab: true,
    grabbing: true
};
function cursor(property, value) {
    if (property === 'cursor' && values.hasOwnProperty(value)) {
        return prefixes.map(function(prefix) {
            return prefix + value;
        });
    }
}
module.exports = exports['default'];
}),
"[project]/node_modules/css-in-js-utils/lib/isPrefixedValue.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;
function isPrefixedValue(value) {
    return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];
}),
"[project]/node_modules/inline-style-prefixer/static/plugins/crossFade.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = crossFade;
var _isPrefixedValue = __turbopack_context__.r("[project]/node_modules/css-in-js-utils/lib/isPrefixedValue.js [app-ssr] (ecmascript)");
var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// http://caniuse.com/#search=cross-fade
var prefixes = [
    '-webkit-',
    ''
];
function crossFade(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
        return prefixes.map(function(prefix) {
            return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
        });
    }
}
module.exports = exports['default'];
}),
"[project]/node_modules/inline-style-prefixer/static/plugins/filter.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = filter;
var _isPrefixedValue = __turbopack_context__.r("[project]/node_modules/css-in-js-utils/lib/isPrefixedValue.js [app-ssr] (ecmascript)");
var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// http://caniuse.com/#feat=css-filter-function
var prefixes = [
    '-webkit-',
    ''
];
function filter(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
        return prefixes.map(function(prefix) {
            return value.replace(/filter\(/g, prefix + 'filter(');
        });
    }
}
module.exports = exports['default'];
}),
"[project]/node_modules/inline-style-prefixer/static/plugins/flex.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = flex;
var values = {
    flex: [
        '-webkit-box',
        '-moz-box',
        '-ms-flexbox',
        '-webkit-flex',
        'flex'
    ],
    'inline-flex': [
        '-webkit-inline-box',
        '-moz-inline-box',
        '-ms-inline-flexbox',
        '-webkit-inline-flex',
        'inline-flex'
    ]
};
function flex(property, value) {
    if (property === 'display' && values.hasOwnProperty(value)) {
        return values[value];
    }
}
module.exports = exports['default'];
}),
"[project]/node_modules/inline-style-prefixer/static/plugins/flexboxOld.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = flexboxOld;
var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple'
};
var alternativeProps = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines'
};
function flexboxOld(property, value, style) {
    if (property === 'flexDirection' && typeof value === 'string') {
        if (value.indexOf('column') > -1) {
            style.WebkitBoxOrient = 'vertical';
        } else {
            style.WebkitBoxOrient = 'horizontal';
        }
        if (value.indexOf('reverse') > -1) {
            style.WebkitBoxDirection = 'reverse';
        } else {
            style.WebkitBoxDirection = 'normal';
        }
    }
    if (alternativeProps.hasOwnProperty(property)) {
        style[alternativeProps[property]] = alternativeValues[value] || value;
    }
}
module.exports = exports['default'];
}),
"[project]/node_modules/inline-style-prefixer/static/plugins/gradient.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = gradient;
var _isPrefixedValue = __turbopack_context__.r("[project]/node_modules/css-in-js-utils/lib/isPrefixedValue.js [app-ssr] (ecmascript)");
var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var prefixes = [
    '-webkit-',
    '-moz-',
    ''
];
var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
function gradient(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
        return prefixes.map(function(prefix) {
            return prefix + value;
        });
    }
}
module.exports = exports['default'];
}),
"[project]/node_modules/inline-style-prefixer/static/plugins/imageSet.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = imageSet;
var _isPrefixedValue = __turbopack_context__.r("[project]/node_modules/css-in-js-utils/lib/isPrefixedValue.js [app-ssr] (ecmascript)");
var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// http://caniuse.com/#feat=css-image-set
var prefixes = [
    '-webkit-',
    ''
];
function imageSet(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
        return prefixes.map(function(prefix) {
            return value.replace(/image-set\(/g, prefix + 'image-set(');
        });
    }
}
module.exports = exports['default'];
}),
"[project]/node_modules/inline-style-prefixer/static/plugins/position.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = position;
function position(property, value) {
    if (property === 'position' && value === 'sticky') {
        return [
            '-webkit-sticky',
            'sticky'
        ];
    }
}
module.exports = exports['default'];
}),
"[project]/node_modules/inline-style-prefixer/static/plugins/sizing.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sizing;
var prefixes = [
    '-webkit-',
    '-moz-',
    ''
];
var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
};
var values = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true
};
function sizing(property, value) {
    if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
        return prefixes.map(function(prefix) {
            return prefix + value;
        });
    }
}
module.exports = exports['default'];
}),
"[project]/node_modules/hyphenate-style-name/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-var, prefer-template */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function toHyphenLower(match) {
    return '-' + match.toLowerCase();
}
function hyphenateStyleName(name) {
    if (cache.hasOwnProperty(name)) {
        return cache[name];
    }
    var hName = name.replace(uppercasePattern, toHyphenLower);
    return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
}
const __TURBOPACK__default__export__ = hyphenateStyleName;
}),
"[project]/node_modules/css-in-js-utils/lib/hyphenateProperty.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hyphenateProperty;
var _hyphenateStyleName = __turbopack_context__.r("[project]/node_modules/hyphenate-style-name/index.js [app-ssr] (ecmascript)");
var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function hyphenateProperty(property) {
    return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];
}),
"[project]/node_modules/inline-style-prefixer/static/plugins/transition.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = transition;
var _hyphenateProperty = __turbopack_context__.r("[project]/node_modules/css-in-js-utils/lib/hyphenateProperty.js [app-ssr] (ecmascript)");
var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);
var _isPrefixedValue = __turbopack_context__.r("[project]/node_modules/css-in-js-utils/lib/isPrefixedValue.js [app-ssr] (ecmascript)");
var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
var _capitalizeString = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/utils/capitalizeString.js [app-ssr] (ecmascript)");
var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
};
var prefixMapping = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    ms: '-ms-'
};
function prefixValue(value, propertyPrefixMap) {
    if ((0, _isPrefixedValue2.default)(value)) {
        return value;
    }
    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
    for(var i = 0, len = multipleValues.length; i < len; ++i){
        var singleValue = multipleValues[i];
        var values = [
            singleValue
        ];
        for(var property in propertyPrefixMap){
            var dashCaseProperty = (0, _hyphenateProperty2.default)(property);
            if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
                var prefixes = propertyPrefixMap[property];
                for(var j = 0, pLen = prefixes.length; j < pLen; ++j){
                    // join all prefixes and create a new value
                    values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
                }
            }
        }
        multipleValues[i] = values.join(',');
    }
    return multipleValues.join(',');
}
function transition(property, value, style, propertyPrefixMap) {
    // also check for already prefixed transitions
    if (typeof value === 'string' && properties.hasOwnProperty(property)) {
        var outputValue = prefixValue(value, propertyPrefixMap);
        // if the property is already prefixed
        var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
            return !/-moz-|-ms-/.test(val);
        }).join(',');
        if (property.indexOf('Webkit') > -1) {
            return webkitOutput;
        }
        var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
            return !/-webkit-|-ms-/.test(val);
        }).join(',');
        if (property.indexOf('Moz') > -1) {
            return mozOutput;
        }
        style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
        style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
        return outputValue;
    }
}
module.exports = exports['default'];
}),
"[project]/node_modules/glamor/lib/prefixer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = prefixer;
var _staticData = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/static/staticData.js [app-ssr] (ecmascript)");
var _staticData2 = _interopRequireDefault(_staticData);
var _prefixProperty = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/utils/prefixProperty.js [app-ssr] (ecmascript)");
var _prefixProperty2 = _interopRequireDefault(_prefixProperty);
var _prefixValue = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/utils/prefixValue.js [app-ssr] (ecmascript)");
var _prefixValue2 = _interopRequireDefault(_prefixValue);
var _cursor = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/static/plugins/cursor.js [app-ssr] (ecmascript)");
var _cursor2 = _interopRequireDefault(_cursor);
var _crossFade = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/static/plugins/crossFade.js [app-ssr] (ecmascript)");
var _crossFade2 = _interopRequireDefault(_crossFade);
var _filter = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/static/plugins/filter.js [app-ssr] (ecmascript)");
var _filter2 = _interopRequireDefault(_filter);
var _flex = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/static/plugins/flex.js [app-ssr] (ecmascript)");
var _flex2 = _interopRequireDefault(_flex);
var _flexboxOld = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/static/plugins/flexboxOld.js [app-ssr] (ecmascript)");
var _flexboxOld2 = _interopRequireDefault(_flexboxOld);
var _gradient = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/static/plugins/gradient.js [app-ssr] (ecmascript)");
var _gradient2 = _interopRequireDefault(_gradient);
var _imageSet = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/static/plugins/imageSet.js [app-ssr] (ecmascript)");
var _imageSet2 = _interopRequireDefault(_imageSet);
var _position = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/static/plugins/position.js [app-ssr] (ecmascript)");
var _position2 = _interopRequireDefault(_position);
var _sizing = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/static/plugins/sizing.js [app-ssr] (ecmascript)");
var _sizing2 = _interopRequireDefault(_sizing);
var _transition = __turbopack_context__.r("[project]/node_modules/inline-style-prefixer/static/plugins/transition.js [app-ssr] (ecmascript)");
var _transition2 = _interopRequireDefault(_transition);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var plugins = [
    _crossFade2.default,
    _cursor2.default,
    _filter2.default,
    _flexboxOld2.default,
    _gradient2.default,
    _imageSet2.default,
    _position2.default,
    _sizing2.default,
    _transition2.default,
    _flex2.default
]; // custom facade for inline-style-prefixer
var prefixMap = _staticData2.default.prefixMap;
function prefixer(style) {
    for(var property in style){
        var value = style[property];
        var processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);
        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (processedValue) {
            style[property] = processedValue;
        }
        (0, _prefixProperty2.default)(prefixMap, property, style);
    }
    return style;
}
}),
"[project]/node_modules/glamor/lib/plugins.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
exports.PluginSet = PluginSet;
exports.fallbacks = fallbacks;
exports.contentWrap = contentWrap;
exports.prefixes = prefixes;
var _objectAssign = __turbopack_context__.r("[project]/node_modules/object-assign/index.js [app-ssr] (ecmascript)");
var _objectAssign2 = _interopRequireDefault(_objectAssign);
var _CSSPropertyOperations = __turbopack_context__.r("[project]/node_modules/glamor/lib/CSSPropertyOperations/index.js [app-ssr] (ecmascript)");
var _prefixer = __turbopack_context__.r("[project]/node_modules/glamor/lib/prefixer.js [app-ssr] (ecmascript)");
var _prefixer2 = _interopRequireDefault(_prefixer);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isDev = function(x) {
    return x === 'development' || !x;
}(("TURBOPACK compile-time value", "development"));
function PluginSet(initial) {
    this.fns = initial || [];
}
(0, _objectAssign2.default)(PluginSet.prototype, {
    add: function add() {
        var _this = this;
        for(var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++){
            fns[_key] = arguments[_key];
        }
        fns.forEach(function(fn) {
            if (_this.fns.indexOf(fn) >= 0) {
                if (isDev) {
                    console.warn('adding the same plugin again, ignoring'); //eslint-disable-line no-console
                }
            } else {
                _this.fns = [
                    fn
                ].concat(_this.fns);
            }
        });
    },
    remove: function remove(fn) {
        this.fns = this.fns.filter(function(x) {
            return x !== fn;
        });
    },
    clear: function clear() {
        this.fns = [];
    },
    transform: function transform(o) {
        return this.fns.reduce(function(o, fn) {
            return fn(o);
        }, o);
    }
});
function fallbacks(node) {
    var hasArray = Object.keys(node.style).map(function(x) {
        return Array.isArray(node.style[x]);
    }).indexOf(true) >= 0;
    if (hasArray) {
        var style = node.style;
        var flattened = Object.keys(style).reduce(function(o, key) {
            o[key] = Array.isArray(style[key]) ? style[key].join('; ' + (0, _CSSPropertyOperations.processStyleName)(key) + ': ') : style[key];
            return o;
        }, {});
        // todo - 
        // flatten arrays which haven't been flattened yet 
        return (0, _objectAssign2.default)({}, node, {
            style: flattened
        });
    }
    return node;
}
var contentValues = [
    'normal',
    'none',
    'counter',
    'open-quote',
    'close-quote',
    'no-open-quote',
    'no-close-quote',
    'initial',
    'inherit'
];
function contentWrap(node) {
    if (node.style.content) {
        var cont = node.style.content;
        if (contentValues.indexOf(cont) >= 0) {
            return node;
        }
        if (/^(attr|calc|counters?|url)\(/.test(cont)) {
            return node;
        }
        if (cont.charAt(0) === cont.charAt(cont.length - 1) && (cont.charAt(0) === '"' || cont.charAt(0) === "'")) {
            return node;
        }
        return _extends({}, node, {
            style: _extends({}, node.style, {
                content: '"' + cont + '"'
            })
        });
    }
    return node;
}
function prefixes(node) {
    return (0, _objectAssign2.default)({}, node, {
        style: (0, _prefixer2.default)(_extends({}, node.style))
    });
}
}),
"[project]/node_modules/glamor/lib/hash.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doHash;
// murmurhash2 via https://gist.github.com/raycmorgan/588423
function doHash(str, seed) {
    var m = 0x5bd1e995;
    var r = 24;
    var h = seed ^ str.length;
    var length = str.length;
    var currentIndex = 0;
    while(length >= 4){
        var k = UInt32(str, currentIndex);
        k = Umul32(k, m);
        k ^= k >>> r;
        k = Umul32(k, m);
        h = Umul32(h, m);
        h ^= k;
        currentIndex += 4;
        length -= 4;
    }
    switch(length){
        case 3:
            h ^= UInt16(str, currentIndex);
            h ^= str.charCodeAt(currentIndex + 2) << 16;
            h = Umul32(h, m);
            break;
        case 2:
            h ^= UInt16(str, currentIndex);
            h = Umul32(h, m);
            break;
        case 1:
            h ^= str.charCodeAt(currentIndex);
            h = Umul32(h, m);
            break;
    }
    h ^= h >>> 13;
    h = Umul32(h, m);
    h ^= h >>> 15;
    return h >>> 0;
}
function UInt32(str, pos) {
    return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}
function UInt16(str, pos) {
    return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}
function Umul32(n, m) {
    n = n | 0;
    m = m | 0;
    var nlo = n & 0xffff;
    var nhi = n >>> 16;
    var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
    return res;
}
}),
"[project]/node_modules/glamor/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compose = exports.merge = exports.$ = exports.style = exports.presets = exports.keyframes = exports.fontFace = exports.insertGlobal = exports.insertRule = exports.plugins = exports.styleSheet = undefined;
exports.speedy = speedy;
exports.simulations = simulations;
exports.simulate = simulate;
exports.cssLabels = cssLabels;
exports.isLikeRule = isLikeRule;
exports.idFor = idFor;
exports.css = css;
exports.rehydrate = rehydrate;
exports.flush = flush;
exports.select = select;
exports.parent = parent;
exports.media = media;
exports.pseudo = pseudo;
exports.active = active;
exports.any = any;
exports.checked = checked;
exports.disabled = disabled;
exports.empty = empty;
exports.enabled = enabled;
exports._default = _default;
exports.first = first;
exports.firstChild = firstChild;
exports.firstOfType = firstOfType;
exports.fullscreen = fullscreen;
exports.focus = focus;
exports.hover = hover;
exports.indeterminate = indeterminate;
exports.inRange = inRange;
exports.invalid = invalid;
exports.lastChild = lastChild;
exports.lastOfType = lastOfType;
exports.left = left;
exports.link = link;
exports.onlyChild = onlyChild;
exports.onlyOfType = onlyOfType;
exports.optional = optional;
exports.outOfRange = outOfRange;
exports.readOnly = readOnly;
exports.readWrite = readWrite;
exports.required = required;
exports.right = right;
exports.root = root;
exports.scope = scope;
exports.target = target;
exports.valid = valid;
exports.visited = visited;
exports.dir = dir;
exports.lang = lang;
exports.not = not;
exports.nthChild = nthChild;
exports.nthLastChild = nthLastChild;
exports.nthLastOfType = nthLastOfType;
exports.nthOfType = nthOfType;
exports.after = after;
exports.before = before;
exports.firstLetter = firstLetter;
exports.firstLine = firstLine;
exports.selection = selection;
exports.backdrop = backdrop;
exports.placeholder = placeholder;
exports.cssFor = cssFor;
exports.attribsFor = attribsFor;
var _objectAssign = __turbopack_context__.r("[project]/node_modules/object-assign/index.js [app-ssr] (ecmascript)");
var _objectAssign2 = _interopRequireDefault(_objectAssign);
var _sheet = __turbopack_context__.r("[project]/node_modules/glamor/lib/sheet.js [app-ssr] (ecmascript)");
var _CSSPropertyOperations = __turbopack_context__.r("[project]/node_modules/glamor/lib/CSSPropertyOperations/index.js [app-ssr] (ecmascript)");
var _clean = __turbopack_context__.r("[project]/node_modules/glamor/lib/clean.js [app-ssr] (ecmascript)");
var _clean2 = _interopRequireDefault(_clean);
var _plugins = __turbopack_context__.r("[project]/node_modules/glamor/lib/plugins.js [app-ssr] (ecmascript)");
var _hash = __turbopack_context__.r("[project]/node_modules/glamor/lib/hash.js [app-ssr] (ecmascript)");
var _hash2 = _interopRequireDefault(_hash);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
/* stylesheet */ var styleSheet = exports.styleSheet = new _sheet.StyleSheet();
// an isomorphic StyleSheet shim. hides all the nitty gritty.
// /**************** LIFTOFF IN 3... 2... 1... ****************/
styleSheet.inject(); //eslint-disable-line indent
// /****************      TO THE MOOOOOOON     ****************/
// convenience function to toggle speedy
function speedy(bool) {
    return styleSheet.speedy(bool);
}
// plugins
// we include these by default
var plugins = exports.plugins = styleSheet.plugins = new _plugins.PluginSet([
    _plugins.prefixes,
    _plugins.contentWrap,
    _plugins.fallbacks
]);
plugins.media = new _plugins.PluginSet(); // neat! media, font-face, keyframes
plugins.fontFace = new _plugins.PluginSet();
plugins.keyframes = new _plugins.PluginSet([
    _plugins.prefixes,
    _plugins.fallbacks
]);
// define some constants
var isDev = ("TURBOPACK compile-time value", "development") === 'development' || !("TURBOPACK compile-time value", "development");
var isTest = ("TURBOPACK compile-time value", "development") === 'test';
var isBrowser = ("TURBOPACK compile-time value", "undefined") !== 'undefined';
/**** simulations  ****/ // a flag to enable simulation meta tags on dom nodes
// defaults to true in dev mode. recommend *not* to
// toggle often.
var canSimulate = isDev;
// we use these flags for issuing warnings when simulate is called
// in prod / in incorrect order
var warned1 = false, warned2 = false;
// toggles simulation activity. shouldn't be needed in most cases
function simulations() {
    var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    canSimulate = !!bool;
}
// use this on dom nodes to 'simulate' pseudoclasses
// <div {...hover({ color: 'red' })} {...simulate('hover', 'visited')}>...</div>
// you can even send in some weird ones, as long as it's in simple format
// and matches an existing rule on the element
// eg simulate('nthChild2', ':hover:active') etc
function simulate() {
    for(var _len = arguments.length, pseudos = Array(_len), _key = 0; _key < _len; _key++){
        pseudos[_key] = arguments[_key];
    }
    pseudos = (0, _clean2.default)(pseudos);
    if (!pseudos) return {};
    if (!canSimulate) {
        if (!warned1) {
            console.warn('can\'t simulate without once calling simulations(true)'); //eslint-disable-line no-console
            warned1 = true;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return {};
    }
    return pseudos.reduce(function(o, p) {
        return o['data-simulate-' + simple(p)] = '', o;
    }, {});
}
/**** labels ****/ // toggle for debug labels.
// *shouldn't* have to mess with this manually
var hasLabels = isDev;
function cssLabels(bool) {
    hasLabels = !!bool;
}
// takes a string, converts to lowercase, strips out nonalphanumeric.
function simple(str) {
    var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return str.toLowerCase().replace(/[^a-z0-9]/g, char);
}
// hashes a string to something 'unique'
// we use this to generate ids for styles
function hashify(obj) {
    var str = JSON.stringify(obj);
    var toRet = (0, _hash2.default)(str).toString(36);
    if (obj.label && obj.label.length > 0 && isDev) {
        return simple(obj.label.join('.'), '-') + '-' + toRet;
    }
    return toRet;
}
// of shape { 'data-css-<id>': '' }
function isLikeRule(rule) {
    var keys = Object.keys(rule).filter(function(x) {
        return x !== 'toString';
    });
    if (keys.length !== 1) {
        return false;
    }
    return !!/data\-css\-([a-zA-Z0-9\-_]+)/.exec(keys[0]);
}
// extracts id from a { 'data-css-<id>': ''} like object
function idFor(rule) {
    var keys = Object.keys(rule).filter(function(x) {
        return x !== 'toString';
    });
    if (keys.length !== 1) throw new Error('not a rule');
    var regex = /data\-css\-([a-zA-Z0-9\-_]+)/;
    var match = regex.exec(keys[0]);
    if (!match) throw new Error('not a rule');
    return match[1];
}
// from https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61
// "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;
/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */ function splitSelector(selector) {
    if (selector.indexOf(',') === -1) {
        return [
            selector
        ];
    }
    var indices = [], res = [], inParen = 0, o;
    /*eslint-disable no-cond-assign*/ while(o = selectorTokenizer.exec(selector)){
        /*eslint-enable no-cond-assign*/ switch(o[0]){
            case '(':
                inParen++;
                break;
            case ')':
                inParen--;
                break;
            case ',':
                if (inParen) break;
                indices.push(o.index);
        }
    }
    for(o = indices.length; o--;){
        res.unshift(selector.slice(indices[o] + 1));
        selector = selector.slice(0, indices[o]);
    }
    res.unshift(selector);
    return res;
}
function selector(id, path) {
    if (!id) {
        return path.replace(/\&/g, '');
    }
    if (!path) return '.css-' + id + ',[data-css-' + id + ']';
    var x = splitSelector(path).map(function(x) {
        return x.indexOf('&') >= 0 ? [
            x.replace(/\&/mg, '.css-' + id),
            x.replace(/\&/mg, '[data-css-' + id + ']')
        ].join(',') // todo - make sure each sub selector has an &
         : '.css-' + id + x + ',[data-css-' + id + ']' + x;
    }).join(',');
    if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
        x += ',.css-' + id + '[data-simulate-' + simple(path) + '],[data-css-' + id + '][data-simulate-' + simple(path) + ']';
    }
    return x;
}
// end https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61
function toCSS(_ref) {
    var selector = _ref.selector, style = _ref.style;
    var result = plugins.transform({
        selector: selector,
        style: style
    });
    return result.selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
}
function deconstruct(style) {
    // we can be sure it's not infinitely nested here
    var plain = void 0, selects = void 0, medias = void 0, supports = void 0;
    Object.keys(style).forEach(function(key) {
        if (key.indexOf('&') >= 0) {
            selects = selects || {};
            selects[key] = style[key];
        } else if (key.indexOf('@media') === 0) {
            medias = medias || {};
            medias[key] = deconstruct(style[key]);
        } else if (key.indexOf('@supports') === 0) {
            supports = supports || {};
            supports[key] = deconstruct(style[key]);
        } else if (key === 'label') {
            if (style.label.length > 0) {
                plain = plain || {};
                plain.label = hasLabels ? style.label.join('.') : '';
            }
        } else {
            plain = plain || {};
            plain[key] = style[key];
        }
    });
    return {
        plain: plain,
        selects: selects,
        medias: medias,
        supports: supports
    };
}
function deconstructedStyleToCSS(id, style) {
    var css = [];
    // plugins here
    var plain = style.plain, selects = style.selects, medias = style.medias, supports = style.supports;
    if (plain) {
        css.push(toCSS({
            style: plain,
            selector: selector(id)
        }));
    }
    if (selects) {
        Object.keys(selects).forEach(function(key) {
            return css.push(toCSS({
                style: selects[key],
                selector: selector(id, key)
            }));
        });
    }
    if (medias) {
        Object.keys(medias).forEach(function(key) {
            return css.push(key + '{' + deconstructedStyleToCSS(id, medias[key]).join('') + '}');
        });
    }
    if (supports) {
        Object.keys(supports).forEach(function(key) {
            return css.push(key + '{' + deconstructedStyleToCSS(id, supports[key]).join('') + '}');
        });
    }
    return css;
}
// this cache to track which rules have
// been inserted into the stylesheet
var inserted = styleSheet.inserted = {};
// and helpers to insert rules into said styleSheet
function insert(spec) {
    if (!inserted[spec.id]) {
        inserted[spec.id] = true;
        var deconstructed = deconstruct(spec.style);
        var rules = deconstructedStyleToCSS(spec.id, deconstructed);
        inserted[spec.id] = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : rules;
        rules.forEach(function(cssRule) {
            return styleSheet.insert(cssRule);
        });
    }
}
// a simple cache to store generated rules
var registered = styleSheet.registered = {};
function register(spec) {
    if (!registered[spec.id]) {
        registered[spec.id] = spec;
    }
}
function _getRegistered(rule) {
    if (isLikeRule(rule)) {
        var ret = registered[idFor(rule)];
        if (ret == null) {
            throw new Error('[glamor] an unexpected rule cache miss occurred. This is probably a sign of multiple glamor instances in your app. See https://github.com/threepointone/glamor/issues/79');
        }
        return ret;
    }
    return rule;
}
// todo - perf
var ruleCache = {};
function toRule(spec) {
    register(spec);
    insert(spec);
    if (ruleCache[spec.id]) {
        return ruleCache[spec.id];
    }
    var ret = _defineProperty({}, 'data-css-' + spec.id, hasLabels ? spec.label || '' : '');
    Object.defineProperty(ret, 'toString', {
        enumerable: false,
        value: function value() {
            return 'css-' + spec.id;
        }
    });
    ruleCache[spec.id] = ret;
    return ret;
}
function log() {
    //eslint-disable-line no-unused-vars
    console.log(this); //eslint-disable-line no-console
    return this;
}
function isSelector(key) {
    var possibles = [
        ':',
        '.',
        '[',
        '>',
        ' '
    ], found = false, ch = key.charAt(0);
    for(var i = 0; i < possibles.length; i++){
        if (ch === possibles[i]) {
            found = true;
            break;
        }
    }
    return found || key.indexOf('&') >= 0;
}
function joinSelectors(a, b) {
    var as = splitSelector(a).map(function(a) {
        return !(a.indexOf('&') >= 0) ? '&' + a : a;
    });
    var bs = splitSelector(b).map(function(b) {
        return !(b.indexOf('&') >= 0) ? '&' + b : b;
    });
    return bs.reduce(function(arr, b) {
        return arr.concat(as.map(function(a) {
            return b.replace(/\&/g, a);
        }));
    }, []).join(',');
}
function joinMediaQueries(a, b) {
    return a ? '@media ' + a.substring(6) + ' and ' + b.substring(6) : b;
}
function isMediaQuery(key) {
    return key.indexOf('@media') === 0;
}
function isSupports(key) {
    return key.indexOf('@supports') === 0;
}
function joinSupports(a, b) {
    return a ? '@supports ' + a.substring(9) + ' and ' + b.substring(9) : b;
}
// flatten a nested array
function flatten(inArr) {
    var arr = [];
    for(var i = 0; i < inArr.length; i++){
        if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));
        else arr = arr.concat(inArr[i]);
    }
    return arr;
}
var prefixedPseudoSelectors = {
    '::placeholder': [
        '::-webkit-input-placeholder',
        '::-moz-placeholder',
        '::-ms-input-placeholder'
    ],
    ':fullscreen': [
        ':-webkit-full-screen',
        ':-moz-full-screen',
        ':-ms-fullscreen'
    ]
};
function build(dest, _ref2) {
    var _ref2$selector = _ref2.selector, selector = _ref2$selector === undefined ? '' : _ref2$selector, _ref2$mq = _ref2.mq, mq = _ref2$mq === undefined ? '' : _ref2$mq, _ref2$supp = _ref2.supp, supp = _ref2$supp === undefined ? '' : _ref2$supp, _ref2$src = _ref2.src, src = _ref2$src === undefined ? {} : _ref2$src;
    if (!Array.isArray(src)) {
        src = [
            src
        ];
    }
    src = flatten(src);
    src.forEach(function(_src) {
        if (isLikeRule(_src)) {
            var reg = _getRegistered(_src);
            if (reg.type !== 'css') {
                throw new Error('cannot merge this rule');
            }
            _src = reg.style;
        }
        _src = (0, _clean2.default)(_src);
        if (_src && _src.composes) {
            build(dest, {
                selector: selector,
                mq: mq,
                supp: supp,
                src: _src.composes
            });
        }
        Object.keys(_src || {}).forEach(function(key) {
            if (isSelector(key)) {
                if (prefixedPseudoSelectors[key]) {
                    prefixedPseudoSelectors[key].forEach(function(p) {
                        return build(dest, {
                            selector: joinSelectors(selector, p),
                            mq: mq,
                            supp: supp,
                            src: _src[key]
                        });
                    });
                }
                build(dest, {
                    selector: joinSelectors(selector, key),
                    mq: mq,
                    supp: supp,
                    src: _src[key]
                });
            } else if (isMediaQuery(key)) {
                build(dest, {
                    selector: selector,
                    mq: joinMediaQueries(mq, key),
                    supp: supp,
                    src: _src[key]
                });
            } else if (isSupports(key)) {
                build(dest, {
                    selector: selector,
                    mq: mq,
                    supp: joinSupports(supp, key),
                    src: _src[key]
                });
            } else if (key === 'composes') {
            // ignore, we already dealth with it
            } else {
                var _dest = dest;
                if (supp) {
                    _dest[supp] = _dest[supp] || {};
                    _dest = _dest[supp];
                }
                if (mq) {
                    _dest[mq] = _dest[mq] || {};
                    _dest = _dest[mq];
                }
                if (selector) {
                    _dest[selector] = _dest[selector] || {};
                    _dest = _dest[selector];
                }
                if (key === 'label') {
                    if (hasLabels) {
                        dest.label = dest.label.concat(_src.label);
                    }
                } else {
                    _dest[key] = _src[key];
                }
            }
        });
    });
}
function _css(rules) {
    var style = {
        label: []
    };
    build(style, {
        src: rules
    }); // mutative! but worth it.
    var spec = {
        id: hashify(style),
        style: style,
        label: hasLabels ? style.label.join('.') : '',
        type: 'css'
    };
    return toRule(spec);
}
var nullrule = {
};
Object.defineProperty(nullrule, 'toString', {
    enumerable: false,
    value: function value() {
        return 'css-nil';
    }
});
var inputCaches = typeof WeakMap !== 'undefined' ? [
    nullrule,
    new WeakMap(),
    new WeakMap(),
    new WeakMap()
] : [
    nullrule
];
var warnedWeakMapError = false;
function multiIndexCache(fn) {
    return function(args) {
        if (inputCaches[args.length]) {
            var coi = inputCaches[args.length];
            var ctr = 0;
            while(ctr < args.length - 1){
                if (!coi.has(args[ctr])) {
                    coi.set(args[ctr], new WeakMap());
                }
                coi = coi.get(args[ctr]);
                ctr++;
            }
            if (coi.has(args[args.length - 1])) {
                var ret = coi.get(args[ctr]);
                if (registered[ret.toString().substring(4)]) {
                    // make sure it hasn't been flushed
                    return ret;
                }
            }
        }
        var value = fn(args);
        if (inputCaches[args.length]) {
            var _ctr = 0, _coi = inputCaches[args.length];
            while(_ctr < args.length - 1){
                _coi = _coi.get(args[_ctr]);
                _ctr++;
            }
            try {
                _coi.set(args[_ctr], value);
            } catch (err) {
                if (isDev && !warnedWeakMapError) {
                    var _console;
                    warnedWeakMapError = true;
                    (_console = console).warn.apply(_console, [
                        'failed setting the WeakMap cache for args:'
                    ].concat(_toConsumableArray(args))); // eslint-disable-line no-console
                    console.warn('this should NOT happen, please file a bug on the github repo.'); // eslint-disable-line no-console
                }
            }
        }
        return value;
    };
}
var cachedCss = typeof WeakMap !== 'undefined' ? multiIndexCache(_css) : _css;
function css() {
    for(var _len2 = arguments.length, rules = Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
        rules[_key2] = arguments[_key2];
    }
    if (rules[0] && rules[0].length && rules[0].raw) {
        throw new Error('you forgot to include glamor/babel in your babel plugins.');
    }
    rules = (0, _clean2.default)(rules);
    if (!rules) {
        return nullrule;
    }
    return cachedCss(rules);
}
css.insert = function(css) {
    var spec = {
        id: hashify(css),
        css: css,
        type: 'raw'
    };
    register(spec);
    if (!inserted[spec.id]) {
        styleSheet.insert(spec.css);
        inserted[spec.id] = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : [
            spec.css
        ];
    }
};
var insertRule = exports.insertRule = css.insert;
css.global = function(selector, style) {
    style = (0, _clean2.default)(style);
    if (style) {
        return css.insert(toCSS({
            selector: selector,
            style: style
        }));
    }
};
var insertGlobal = exports.insertGlobal = css.global;
function insertKeyframe(spec) {
    if (!inserted[spec.id]) {
        var inner = Object.keys(spec.keyframes).map(function(kf) {
            var result = plugins.keyframes.transform({
                id: spec.id,
                name: kf,
                style: spec.keyframes[kf]
            });
            return result.name + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
        }).join('');
        var rules = [
            '-webkit-',
            '-moz-',
            '-o-',
            ''
        ].map(function(prefix) {
            return '@' + prefix + 'keyframes ' + (spec.name + '_' + spec.id) + '{' + inner + '}';
        });
        rules.forEach(function(rule) {
            return styleSheet.insert(rule);
        });
        inserted[spec.id] = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : rules;
    }
}
css.keyframes = function(name, kfs) {
    if (!kfs) {
        kfs = name, name = 'animation';
    }
    // do not ignore empty keyframe definitions for now.
    kfs = (0, _clean2.default)(kfs) || {};
    var spec = {
        id: hashify({
            name: name,
            kfs: kfs
        }),
        type: 'keyframes',
        name: name,
        keyframes: kfs
    };
    register(spec);
    insertKeyframe(spec);
    return name + '_' + spec.id;
};
// we don't go all out for fonts as much, giving a simple font loading strategy
// use a fancier lib if you need moar power
css.fontFace = function(font) {
    font = (0, _clean2.default)(font);
    var spec = {
        id: hashify(font),
        type: 'font-face',
        font: font
    };
    register(spec);
    insertFontFace(spec);
    return font.fontFamily;
};
var fontFace = exports.fontFace = css.fontFace;
var keyframes = exports.keyframes = css.keyframes;
function insertFontFace(spec) {
    if (!inserted[spec.id]) {
        var rule = '@font-face{' + (0, _CSSPropertyOperations.createMarkupForStyles)(spec.font) + '}';
        styleSheet.insert(rule);
        inserted[spec.id] = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : [
            rule
        ];
    }
}
// rehydrate the insertion cache with ids sent from
// renderStatic / renderStaticOptimized
function rehydrate(ids) {
    // load up ids
    (0, _objectAssign2.default)(inserted, ids.reduce(function(o, i) {
        return o[i] = true, o;
    }, {}));
// assume css loaded separately
}
// clears out the cache and empties the stylesheet
// best for tests, though there might be some value for SSR.
function flush() {
    inserted = styleSheet.inserted = {};
    registered = styleSheet.registered = {};
    ruleCache = {};
    styleSheet.flush();
    styleSheet.inject();
}
var presets = exports.presets = {
    mobile: '(min-width: 400px)',
    Mobile: '@media (min-width: 400px)',
    phablet: '(min-width: 550px)',
    Phablet: '@media (min-width: 550px)',
    tablet: '(min-width: 750px)',
    Tablet: '@media (min-width: 750px)',
    desktop: '(min-width: 1000px)',
    Desktop: '@media (min-width: 1000px)',
    hd: '(min-width: 1200px)',
    Hd: '@media (min-width: 1200px)'
};
var style = exports.style = css;
function select(selector) {
    for(var _len3 = arguments.length, styles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++){
        styles[_key3 - 1] = arguments[_key3];
    }
    if (!selector) {
        return style(styles);
    }
    return css(_defineProperty({}, selector, styles));
}
var $ = exports.$ = select;
function parent(selector) {
    for(var _len4 = arguments.length, styles = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++){
        styles[_key4 - 1] = arguments[_key4];
    }
    return css(_defineProperty({}, selector + ' &', styles));
}
var merge = exports.merge = css;
var compose = exports.compose = css;
function media(query) {
    for(var _len5 = arguments.length, rules = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++){
        rules[_key5 - 1] = arguments[_key5];
    }
    return css(_defineProperty({}, '@media ' + query, rules));
}
function pseudo(selector) {
    for(var _len6 = arguments.length, styles = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++){
        styles[_key6 - 1] = arguments[_key6];
    }
    return css(_defineProperty({}, selector, styles));
}
// allllll the pseudoclasses
function active(x) {
    return pseudo(':active', x);
}
function any(x) {
    return pseudo(':any', x);
}
function checked(x) {
    return pseudo(':checked', x);
}
function disabled(x) {
    return pseudo(':disabled', x);
}
function empty(x) {
    return pseudo(':empty', x);
}
function enabled(x) {
    return pseudo(':enabled', x);
}
function _default(x) {
    return pseudo(':default', x); // note '_default' name
}
function first(x) {
    return pseudo(':first', x);
}
function firstChild(x) {
    return pseudo(':first-child', x);
}
function firstOfType(x) {
    return pseudo(':first-of-type', x);
}
function fullscreen(x) {
    return pseudo(':fullscreen', x);
}
function focus(x) {
    return pseudo(':focus', x);
}
function hover(x) {
    return pseudo(':hover', x);
}
function indeterminate(x) {
    return pseudo(':indeterminate', x);
}
function inRange(x) {
    return pseudo(':in-range', x);
}
function invalid(x) {
    return pseudo(':invalid', x);
}
function lastChild(x) {
    return pseudo(':last-child', x);
}
function lastOfType(x) {
    return pseudo(':last-of-type', x);
}
function left(x) {
    return pseudo(':left', x);
}
function link(x) {
    return pseudo(':link', x);
}
function onlyChild(x) {
    return pseudo(':only-child', x);
}
function onlyOfType(x) {
    return pseudo(':only-of-type', x);
}
function optional(x) {
    return pseudo(':optional', x);
}
function outOfRange(x) {
    return pseudo(':out-of-range', x);
}
function readOnly(x) {
    return pseudo(':read-only', x);
}
function readWrite(x) {
    return pseudo(':read-write', x);
}
function required(x) {
    return pseudo(':required', x);
}
function right(x) {
    return pseudo(':right', x);
}
function root(x) {
    return pseudo(':root', x);
}
function scope(x) {
    return pseudo(':scope', x);
}
function target(x) {
    return pseudo(':target', x);
}
function valid(x) {
    return pseudo(':valid', x);
}
function visited(x) {
    return pseudo(':visited', x);
}
// parameterized pseudoclasses
function dir(p, x) {
    return pseudo(':dir(' + p + ')', x);
}
function lang(p, x) {
    return pseudo(':lang(' + p + ')', x);
}
function not(p, x) {
    // should this be a plugin?
    var selector = p.split(',').map(function(x) {
        return x.trim();
    }).map(function(x) {
        return ':not(' + x + ')';
    });
    if (selector.length === 1) {
        return pseudo(':not(' + p + ')', x);
    }
    return select(selector.join(''), x);
}
function nthChild(p, x) {
    return pseudo(':nth-child(' + p + ')', x);
}
function nthLastChild(p, x) {
    return pseudo(':nth-last-child(' + p + ')', x);
}
function nthLastOfType(p, x) {
    return pseudo(':nth-last-of-type(' + p + ')', x);
}
function nthOfType(p, x) {
    return pseudo(':nth-of-type(' + p + ')', x);
}
// pseudoelements
function after(x) {
    return pseudo('::after', x);
}
function before(x) {
    return pseudo('::before', x);
}
function firstLetter(x) {
    return pseudo('::first-letter', x);
}
function firstLine(x) {
    return pseudo('::first-line', x);
}
function selection(x) {
    return pseudo('::selection', x);
}
function backdrop(x) {
    return pseudo('::backdrop', x);
}
function placeholder(x) {
    // https://github.com/threepointone/glamor/issues/14
    return css({
        '::placeholder': x
    });
}
/*** helpers for web components ***/ // https://github.com/threepointone/glamor/issues/16
function cssFor() {
    for(var _len7 = arguments.length, rules = Array(_len7), _key7 = 0; _key7 < _len7; _key7++){
        rules[_key7] = arguments[_key7];
    }
    rules = (0, _clean2.default)(rules);
    return rules ? rules.map(function(r) {
        var style = {
            label: []
        };
        build(style, {
            src: r
        }); // mutative! but worth it.
        return deconstructedStyleToCSS(hashify(style), deconstruct(style)).join('');
    }).join('') : '';
}
function attribsFor() {
    for(var _len8 = arguments.length, rules = Array(_len8), _key8 = 0; _key8 < _len8; _key8++){
        rules[_key8] = arguments[_key8];
    }
    rules = (0, _clean2.default)(rules);
    var htmlAttributes = rules ? rules.map(function(rule) {
        idFor(rule); // throwaway check for rule
        var key = Object.keys(rule)[0], value = rule[key];
        return key + '="' + (value || '') + '"';
    }).join(' ') : '';
    return htmlAttributes;
}
}),
"[project]/node_modules/react-multi-progress/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var glamor = __turbopack_context__.r("[project]/node_modules/glamor/lib/index.js [app-ssr] (ecmascript)");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var styles = {
    progressContainer: function(round, height, border) {
        var convertedHeight = typeof height === "string" ? height : height + "px";
        return glamor.css({
            width: "100%",
            height: convertedHeight,
            position: "relative",
            border: border,
            borderRadius: round ? "400px" : "0",
            overflow: "hidden"
        });
    },
    progressBackground: function(backgroundColor) {
        return glamor.css({
            backgroundColor: backgroundColor,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0
        });
    },
    progressElement: function(backgroundColor, offset, value, transitionTime, roundRight, textColor, fontSize) {
        var roundRightString = roundRight ? "40px 40px" : "0 0";
        return glamor.css({
            backgroundColor: backgroundColor,
            width: value + "%",
            zIndex: 8,
            height: "100%",
            top: 0,
            left: offset + "%",
            position: "absolute",
            transition: "width " + transitionTime + "s ease-in-out, left " + transitionTime + "s ease-in-out",
            borderRadius: "0 " + roundRightString + " 0",
            color: textColor,
            textAlign: "center",
            fontSize: fontSize ? fontSize : 8
        });
    }
};
function createElementArray(elements, transitionTime, roundLastElement, component) {
    var currentOffset = 0;
    var newElements = [];
    var Element = component !== null && component !== void 0 ? component : "div";
    elements.forEach(function(element, i) {
        newElements.push(React.createElement(Element, __assign({}, styles.progressElement(element.color, currentOffset, element.value, transitionTime, i === elements.length - 1 && roundLastElement, element.textColor, element.fontSize), {
            key: i,
            className: element.className,
            element: element
        }), element.showPercentage && element.value + "%"));
        currentOffset += element.value;
    });
    return newElements;
}
function MultiProgress(_a) {
    var _b = _a.backgroundColor, backgroundColor = _b === void 0 ? "#ffffff" : _b, _c = _a.border, border = _c === void 0 ? "" : _c, elements = _a.elements, _d = _a.height, height = _d === void 0 ? 10 : _d, _e = _a.round, round = _e === void 0 ? true : _e, _f = _a.roundLastElement, roundLastElement = _f === void 0 ? true : _f, _g = _a.transitionTime, transitionTime = _g === void 0 ? 0.6 : _g, className = _a.className, component = _a.component;
    return React.createElement("div", __assign({}, styles.progressContainer(round, height, border), {
        className: className
    }), React.createElement("div", __assign({}, styles.progressBackground(backgroundColor))), createElementArray(elements, transitionTime, roundLastElement, component).map(function(element, i) {
        return React.createElement("div", {
            key: i
        }, element);
    }));
}
exports.default = MultiProgress; //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=_edb6d51c._.js.map