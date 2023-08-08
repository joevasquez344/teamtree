"use strict";
exports.id = 452;
exports.ids = [452];
exports.modules = {

/***/ 2971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1223);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);



const Loader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full h-screen flex justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__.ThreeCircles, {
            height: "50",
            width: "50",
            color: "dodgerblue",
            wrapperStyle: {},
            wrapperClass: "",
            visible: true,
            ariaLabel: "three-circles-rotating",
            outerCircleColor: "",
            innerCircleColor: "",
            middleCircleColor: ""
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 5100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2767);
/* harmony import */ var _context_TeamsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5008);





const ProtectedRoute = ({ children })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { authUser, authLayout, setAuthLayout } = (0,_context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .aC)();
    const { teams } = (0,_context_TeamsContext__WEBPACK_IMPORTED_MODULE_4__/* .useTeams */ .y2)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const route = router.pathname;
        if (!authUser) {
            router.push("/");
        }
        if (authUser && (route === "/" || route === "/login" || route === "/register")) {
            if (teams.length > 0) {
                router.push(`/teams/${teams[0].id}`);
                return;
            }
            router.push(`/profile/${authUser.username}`);
        }
    }, [
        authUser
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: authUser ? children : null
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedRoute);


/***/ })

};
;