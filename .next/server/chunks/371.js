exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 6527:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./profile.js
var profile = __webpack_require__(2895);
;// CONCATENATED MODULE: ./components/Navbar.js





const Navbar = () => /*#__PURE__*/jsx_runtime_.jsx("nav", {
  className: "navbar navbar-expand-lg navbar-dark",
  style: {
    background: '#252E3C'
  },
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [profile/* publics.map */.vC.map(({
      nav
    }, i) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: nav,
        alt: "VA",
        height: "45px"
      })
    }, i)), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNav",
      "aria-controls": "navbarNav",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "navbar-toggler-icon"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "collapse navbar-collapse",
      id: "navbarNav",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "navbar-nav ms-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "nav-item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link",
              children: "Blog"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "nav-item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/github",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link",
              children: "Github"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "nav-item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/contact",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link",
              children: "Contactar"
            })
          })
        })]
      })
    })]
  })
});

/* harmony default export */ var components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Layout.js





const Layout = ({
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
    className: "p-0",
    children: children
  })]
});

/* harmony default export */ var components_Layout = (Layout);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;