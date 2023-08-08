exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 9639:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "Modal_modal__FRyxj",
	"header": "Modal_header__2jTSN",
	"header_content": "Modal_header_content__j4I_h",
	"body": "Modal_body__oIvbL",
	"overlay": "Modal_overlay__54hP_"
};


/***/ }),

/***/ 6006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Popup)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/layout/ModalOverlay.jsx


const ModalOverlay = ({ closeModal })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        onClick: closeModal,
        className: "fixed top-0 right-0 left-0 bottom-0 z-50 cursor-default"
    });
};
/* harmony default export */ const layout_ModalOverlay = (ModalOverlay);

;// CONCATENATED MODULE: ./components/Popup.jsx



const Popup = ({ children, closePopup, popup, styles })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            popup && /*#__PURE__*/ jsx_runtime.jsx(layout_ModalOverlay, {
                closeModal: closePopup
            }),
            popup && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `absolute z-50 cursor-default ${styles}`,
                children: children
            })
        ]
    });
};
/* harmony default export */ const components_Popup = (Popup);


/***/ }),

/***/ 2514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2767);



const ProtectedComponent = ({ children })=>{
    const { authUser } = (0,_context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .aC)();
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(authUser ? true : false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!authUser) {
            setShow(false);
        } else {
            setShow(true);
        }
    }, [
        authUser
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: show ? children : null
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedComponent);


/***/ }),

/***/ 4735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AddButton = ({ height, width, bgHeight, bgWidth, padding })=>{
    if (!height && !width) {
        height = "6";
        width = "6";
    }
    if (!padding) {
        padding = "2";
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `p-${padding} h-${bgHeight && bgHeight} w-${bgWidth && bgWidth} flex justify-center items-center rounded-full bg-gray-600 cursor-pointer`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: `w-${width} h-${height} text-white`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 4.5v15m7.5-7.5h-15"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddButton);


/***/ }),

/***/ 8120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CollapseButton = ({ height, width })=>{
    let h = 6;
    let w = 6;
    if (height) {
        h = height;
    }
    if (width) {
        w = width;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: `w-${w} h-${h} text-white`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4.5 15.75l7.5-7.5 7.5 7.5"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapseButton);


/***/ }),

/***/ 6748:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ExpandButton = ({ height, width })=>{
    let h = 6;
    let w = 6;
    if (height) {
        h = height;
    }
    if (width) {
        w = width;
    }
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: `w-${w} h-${h} text-white`,
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ExpandButton)));


/***/ }),

/***/ 5865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const GroupButton = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-24 h-24 text-gray-400",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupButton);


/***/ }),

/***/ 4055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TrashButton = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4 text-red-500",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrashButton);


/***/ }),

/***/ 6854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2767);
/* harmony import */ var _hooks_useCreateTeam2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9842);
/* harmony import */ var _buttons_AddButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4735);





const CreateTeamForm = ()=>{
    const { authUser } = (0,_context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .aC)();
    // const {
    //   form,
    //   suggestedUsers,
    //   inviteList,
    //   searchedUserError,
    //   searchInput,
    //   handleInputChange,
    //   handleCreateTeam,
    //   fetchUsersByPosition,
    //   handleSearchInput,
    //   searchUser,
    //   removeUserFromInviteList,
    // } = useCreateTeam();
    const { form, suggestedUsers, inviteList, searchedUserError, searchInput, handleInputChange, handleCreateTeam, fetchUsersByPosition, handleSearchInput, searchUser, removeUserFromInviteList } = (0,_hooks_useCreateTeam2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchUsersByPosition(authUser.position);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "py-5 bg-gray-800 w-[500px]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    className: "bg-gray-800 rounded mx-auto mb-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex space-x-3 px-5 mb-4 border-b border-b-gray-700 pb-4 shadow",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-300 font-semibold text-sm mb-2",
                                            children: "Team Name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            name: "name",
                                            value: form.name,
                                            onChange: handleInputChange,
                                            className: " appearance-none rounded w-full bg-gray-700 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline",
                                            id: "username",
                                            type: "text",
                                            placeholder: ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-300 text-sm font-semibold mb-2",
                                            children: "Team Role"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            onChange: handleInputChange,
                                            value: form.role,
                                            className: " rounded w-full font-semibold py-2 px-3 text-gray-300 bg-gray-700 cursor-pointer leading-tight focus:outline-none focus:shadow-outline ",
                                            name: "Role",
                                            id: "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Project Manager",
                                                    children: "Project Manger"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Senior Front End Developer",
                                                    children: "Senior Front End Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Senior Back End Develope",
                                                    children: "Senior Back End Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Senior Full Stack Developer",
                                                    children: "Senior Full Stack Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Junior Front End Developer",
                                                    children: "Junior Front End Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Junior Back End Developer",
                                                    children: "Junior Back End Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Junior Full Stack Developer",
                                                    children: "Junior Full Stack Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Create Role",
                                                    children: "Create Role"
                                                })
                                            ]
                                        }),
                                        form.role === "Create Role" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "custom",
                                                value: form.custom,
                                                onChange: handleInputChange,
                                                className: "shadow rounded w-full py-2 px-3 text-gray-300 bg-gray-700 font-semibold outline-none",
                                                type: "text",
                                                placeholder: "What role would you like?"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-8 px-5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            value: searchInput,
                                            onChange: handleSearchInput,
                                            className: "bg-gray-700 rounded py-1 px-3 w-full outline-none",
                                            type: "text",
                                            placeholder: "Find User By Email"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>searchUser(searchInput),
                                            className: "absolute right-0 top-0 bg-green-500 text-white font-semibold h-full flex items-center justify-center px-3 cursor-pointer",
                                            children: "Find"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-red-500 mt-2",
                                    children: [
                                        " ",
                                        searchedUserError
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-4 pb-3 border-b",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-gray-400  ",
                                            children: "Invite List"
                                        }),
                                        inviteList.map((user)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center justify-between rounded  p-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-1 text-gray-400",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "h-6 w-6 rounded-full",
                                                                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "group-hover:text-blue-400 font-semibold",
                                                                children: user.name
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "group-hover:text-blue-400",
                                                                children: [
                                                                    "@",
                                                                    user.username
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        onClick: ()=>removeUserFromInviteList(user),
                                                        className: "w-7 h-7 flex items-center justify-center group hover:bg-red-100 rounded-full transition ease-in-out cursor-pointer duration-200",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            strokeWidth: 1.5,
                                                            stroke: "currentColor",
                                                            className: "w-4 h-4 text-red-500",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }))
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-2 text-gray-400 font-semibold",
                                            children: [
                                                "Suggested - Position - ",
                                                authUser.position
                                            ]
                                        }),
                                        suggestedUsers.map((user)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex items-center justify-between rounded group p-2 hover:bg-gray-700 transition ease-in-out cursor-pointer duration-200",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center space-x-1 text-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "h-6 w-6 rounded-full",
                                                            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "font-semibold",
                                                            children: user.name
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "",
                                                            children: [
                                                                "@",
                                                                user.username
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }))
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col space-y-4 px-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: handleCreateTeam,
                                className: "bg-green-500 text-white rounded font-bold py-2 px-4 p-2 hover:bg-green-600 transition ease-in-out cursor-pointer duration-200",
                                type: "button",
                                children: inviteList.length > 0 ? "Create Team & Send Invites" : "Create Team"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-center text-gray-500 text-xs",
                    children: "\xa92020 Acme Corp. All rights reserved."
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateTeamForm);


/***/ }),

/***/ 8673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _utils_api_teams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6123);
/* harmony import */ var _buttons_AddButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4735);
/* harmony import */ var _hooks_useCreateGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5173);








const CreateGroupForm = ({ team })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { authUser, getTeamGroups } = (0,_context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .aC)();
    const { getGroups } = (0,_context_TeamsContext__WEBPACK_IMPORTED_MODULE_4__/* .useTeams */ .y2)();
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { form, handleInputChange, handleCreateGroup, fetchUsersByPosition, suggestedUsers, removeUserFromInviteList, inviteList, searchInput, searchUser, handleSearchInput, searchedUser, searchedUserError, groups, setGroups, createGroupPopup, setCreateGroupPopup } = (0,_hooks_useCreateGroup__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    // const [form, setForm] = useState({
    //   role: "",
    //   custom: "",
    //   name: "",
    // });
    // const handleInputChange = (e) => {
    //   setForm({
    //     ...form,
    //     [e.currentTarget.name.toLowerCase()]: e.currentTarget.value,
    //   });
    // };
    // const validateForm = () => {
    //   if (form.name.length === 0) {
    //     return false;
    //   } else {
    //     if (form.role === "Create Role" && form.custom.length === 0) {
    //       return false;
    //     }
    //   }
    //   return true;
    // };
    // console.log("Form role: ", form.role);
    // const handleCreateGroup = async () => {
    //   if (validateForm()) {
    //     const role = form.role === "Create Role" ? form.custom : form.role;
    //     await createGroup(authUser, form.name, role, team);
    //     router.push(`/teams/${team.id}`)
    //     getGroups(team);
    //     router.reload(window.location.pathname)
    //   } else {
    //     console.log("Error");
    //   }
    // };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{}, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "py-5 w-[500px]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    className: "bg-white rounded mx-auto mb-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex space-x-3 px-5 mb-4 border-b pb-4 shadow",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-400 font-semibold text-sm mb-2",
                                            children: "Team Name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            name: "name",
                                            value: form.name,
                                            onChange: handleInputChange,
                                            className: " appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                            id: "username",
                                            type: "text",
                                            placeholder: ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-400 text-sm font-semibold mb-2",
                                            children: "Team Role"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            onChange: handleInputChange,
                                            value: form.role,
                                            className: "  border rounded w-full font-semibold py-2 px-3 text-gray-400 cursor-pointer leading-tight focus:outline-none focus:shadow-outline ",
                                            name: "Role",
                                            id: "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Project Manager",
                                                    children: "Project Manger"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Senior Front End Developer",
                                                    children: "Senior Front End Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Senior Back End Develope",
                                                    children: "Senior Back End Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Senior Full Stack Developer",
                                                    children: "Senior Full Stack Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Junior Front End Developer",
                                                    children: "Junior Front End Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Junior Back End Developer",
                                                    children: "Junior Back End Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Junior Full Stack Developer",
                                                    children: "Junior Full Stack Developer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Create Role",
                                                    children: "Create Role"
                                                })
                                            ]
                                        }),
                                        form.role === "Create Role" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "custom",
                                                value: form.custom,
                                                onChange: handleInputChange,
                                                className: "shadow  border rounded w-full py-2 px-3 text-gray-400 font-semibold outline-none",
                                                type: "text",
                                                placeholder: "What role would you like?"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-8 px-5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            value: searchInput,
                                            onChange: handleSearchInput,
                                            className: "border rounded py-1 px-3 w-full outline-none",
                                            type: "text",
                                            placeholder: "Find User By Email"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>searchUser(searchInput),
                                            className: "absolute right-0 top-0 bg-blue-400 text-white font-semibold h-full flex items-center justify-center px-3 cursor-pointer",
                                            children: "Find"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-red-500 mt-2",
                                    children: [
                                        " ",
                                        searchedUserError
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-4 pb-3 border-b",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-gray-400  ",
                                            children: "Invite List"
                                        }),
                                        inviteList.map((user)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center justify-between rounded  p-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-1 text-gray-400",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "h-6 w-6 rounded-full",
                                                                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "group-hover:text-blue-400 font-semibold",
                                                                children: user.name
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "group-hover:text-blue-400",
                                                                children: [
                                                                    "@",
                                                                    user.username
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        onClick: ()=>removeUserFromInviteList(user),
                                                        className: "w-7 h-7 flex items-center justify-center group hover:bg-red-100 rounded-full transition ease-in-out cursor-pointer duration-200",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            strokeWidth: 1.5,
                                                            stroke: "currentColor",
                                                            className: "w-4 h-4 text-red-500",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }))
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-2 text-gray-400 font-semibold",
                                            children: [
                                                "Suggested - Position - ",
                                                authUser.position
                                            ]
                                        }),
                                        suggestedUsers.map((user)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex items-center justify-between rounded group p-2 hover:bg-blue-100 transition ease-in-out cursor-pointer duration-200",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center space-x-1 text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "h-6 w-6 rounded-full",
                                                            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "group-hover:text-blue-400 font-semibold",
                                                            children: user.name
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "group-hover:text-blue-400",
                                                            children: [
                                                                "@",
                                                                user.username
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }))
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col space-y-4 px-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>handleCreateGroup(team),
                                className: "bg-blue-400 text-white rounded font-bold py-2 px-4 hover:text-blue-400 p-2 hover:bg-blue-100 transition ease-in-out cursor-pointer duration-200",
                                type: "button",
                                children: inviteList.length > 0 ? "Create Team & Send Invites" : "Create Team"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-center text-gray-500 text-xs",
                    children: "\xa92020 Acme Corp. All rights reserved."
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateGroupForm);


/***/ }),

/***/ 1366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttons_GroupButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5865);
/* harmony import */ var _buttons_AddButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4735);




const CreateGroupMessage = ({ openPopup })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col justify-center items-center p-5 ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex items-center mb-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_GroupButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute bottom-0 right-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_AddButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: openPopup,
                    className: "text-blue-400 font-semibold mb-2 px-5 py-2 shadow rounded hover:bg-blue-100   transition ease-in-out cursor-pointer duration-200",
                    children: "Create Group"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center text-gray-500 xl:w-1/2",
                    children: "Create a team to view each other's daily tasks, and collaborate in groups and meetings."
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateGroupMessage);


/***/ }),

/***/ 8578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9639);
/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _buttons_CollapseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8120);





const Modal = ({ show, onClose, children })=>{
    const [isBrowser, setIsBrowser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsBrowser(true);
    }, []);
    const handleClose = (e)=>{
        e.preventDefault();
        onClose();
    };
    const modalContent = show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().overlay),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().modal),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        onClick: handleClose,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_CollapseButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().body),
                    children: children
                })
            ]
        })
    }) : null;
    if (isBrowser) {
        return /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(modalContent, document.getElementById("modal-root"));
    } else {
        return null;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ 7546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_TeamsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5008);



const MobileSidebar = ()=>{
    const handleSelectTeam = ()=>{};
    const { teamLoading, team, teams, setTeamsLoading } = (0,_context_TeamsContext__WEBPACK_IMPORTED_MODULE_2__/* .useTeams */ .y2)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-gray-800 pr-3",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex bg-gray-800 h-screen ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex bg-gray-800 flex-col p-3 ",
                    children: [
                        " ",
                        teams?.map((team)=>// <Tooltip
                            //   placement="right"
                            //   content={team.name}
                            //   animate={{
                            //     mount: { scale: 1, y: 0 },
                            //     unmount: { scale: 0, y: 1 },
                            //   }}
                            //   className="hidden sm:flex px-3 py-2  rounded-md text-xs text-blue-400 font-bold bg-white z-50"
                            // >
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full mb-3",
                                children: team.avatar ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-10 w-10 rounded-full",
                                    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                    alt: ""
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-blue-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-white font-bold text-lg",
                                        children: team.name.split("")[0].toUpperCase()
                                    })
                                })
                            }, team.id))
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " bg-gray-700 w-full relative flex flex-col h-screen rounded-xl text-gray-200 font-semibold p-3",
                    children: team?.name
                })
            ]
        })
    });
};
const PlusIcon = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 4.5v15m7.5-7.5h-15"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileSidebar);


/***/ }),

/***/ 2732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Sidebar_Sidebar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/auth/AuthContext.js
var AuthContext = __webpack_require__(2767);
// EXTERNAL MODULE: ./components/buttons/AddButton.tsx
var AddButton = __webpack_require__(4735);
// EXTERNAL MODULE: ./components/forms/CreateTeamForm.jsx
var CreateTeamForm = __webpack_require__(6854);
// EXTERNAL MODULE: ./context/TeamsContext.js
var TeamsContext = __webpack_require__(5008);
// EXTERNAL MODULE: external "react-loading-skeleton"
var external_react_loading_skeleton_ = __webpack_require__(9012);
var external_react_loading_skeleton_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_skeleton_);
// EXTERNAL MODULE: ./node_modules/react-loading-skeleton/dist/skeleton.css
var skeleton = __webpack_require__(6593);
// EXTERNAL MODULE: ./components/Popup.jsx + 1 modules
var Popup = __webpack_require__(6006);
// EXTERNAL MODULE: ./components/groups/CreateGroupMessage.jsx
var CreateGroupMessage = __webpack_require__(1366);
;// CONCATENATED MODULE: ./components/layout/Sidebar/Groups.jsx








const Groups = ({ groupsLoading, groups, openPopup, team })=>{
    // const { groupsLoading, groups } = useTeams();
    const [popup, setPopup] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "border-b border-b-gray-600 pb-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center relative justify-between pl-3 pr-2 mb-2 py-1 text-white text-sm",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "font-bold",
                        children: "Groups"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        onClick: openPopup,
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: "w-4 h-4 text-gray-500",
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M12 4.5v15m7.5-7.5h-15"
                            })
                        })
                    })
                ]
            }),
            groupsLoading ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mx-5",
                children: /*#__PURE__*/ jsx_runtime.jsx((external_react_loading_skeleton_default()), {
                    className: "mb-3",
                    baseColor: "rgb(55 65 81)",
                    highlightColor: "rgb(55 65 81)",
                    count: 10,
                    enableAnimation: true,
                    direction: "rtl",
                    duration: 1
                })
            }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "px-3",
                children: groups.length === 0 ? /*#__PURE__*/ jsx_runtime.jsx(CreateGroupMessage/* default */.Z, {
                    openPopup: openPopup
                }) : groups.map((group)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        onClick: ()=>router.push(`/teams/${team.id}/groups/${group.id}`),
                        className: `flex items-center justify-between  text-sm ${group.id === router.query.groupId ? "bg-gray-900 text-gray-200" : "text-gray-200"} hover:bg-gray-700  px-3 py-2 transition ease-in-out cursor-pointer duration-200`,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "font-semibold",
                                children: group.name
                            }),
                            group.id === router.query.groupId && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "h-2 w-2 bg-green-500 rounded-full"
                            })
                        ]
                    }, group.id))
            })
        ]
    });
};
/* harmony default export */ const Sidebar_Groups = (Groups);

;// CONCATENATED MODULE: ./components/buttons/Button.tsx


const Button = ({ text, theme })=>{
    let bgColor = "";
    let textColor = "";
    let hoverBgColor = "";
    let hoverTextColor = "";
    if (theme === "blue") {
        bgColor = "bg-gray-700";
        textColor = "text-gray-200";
        hoverBgColor = "bg-gray-900";
        hoverTextColor = "";
    }
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `${bgColor} ${textColor} hover:${hoverBgColor}  px-3 py-2 mb-3 transition ease-in-out cursor-pointer duration-200 font-semibold`,
        children: text
    });
};
/* harmony default export */ const buttons_Button = (Button);

;// CONCATENATED MODULE: ./components/icons/AddUserIcon.jsx


const AddUserIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
        })
    });
};
/* harmony default export */ const icons_AddUserIcon = (AddUserIcon);

// EXTERNAL MODULE: ./components/buttons/CollapseButton.tsx
var CollapseButton = __webpack_require__(8120);
// EXTERNAL MODULE: ./components/buttons/ExpandButton.tsx
var ExpandButton = __webpack_require__(6748);
// EXTERNAL MODULE: ./components/ProtectedComponent.jsx
var ProtectedComponent = __webpack_require__(2514);
// EXTERNAL MODULE: ./utils/api/teams.js
var api_teams = __webpack_require__(6123);
// EXTERNAL MODULE: ./utils/api/group.js
var group = __webpack_require__(8540);
// EXTERNAL MODULE: ./hooks/useCreateTeam2.js
var useCreateTeam2 = __webpack_require__(9842);
// EXTERNAL MODULE: ./hooks/useCreateGroup.js
var useCreateGroup = __webpack_require__(5173);
;// CONCATENATED MODULE: ./components/forms/CreateGroupForm.jsx






const CreateGroupForm = ({ team })=>{
    const { authUser } = (0,AuthContext/* useAuth */.aC)();
    const { form, handleInputChange, handleCreateGroup, fetchUsersByPosition, suggestedUsers, removeUserFromInviteList, inviteList, searchInput, searchUser, handleSearchInput, searchedUser, searchedUserError, groups, setGroups, createGroupPopup, setCreateGroupPopup } = (0,useCreateGroup/* default */.Z)();
    const [teamMembers, setTeamMembers] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            const users = await (0,api_teams/* getTeamMembers */.YY)(team.id, authUser.id);
            setTeamMembers(users);
        };
        fetchData();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "py-5 w-[500px]",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                    className: "bg-white rounded mx-auto mb-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex space-x-3 px-5 mb-4 border-b pb-4 shadow",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                            className: "block text-gray-400 font-semibold text-sm mb-2",
                                            children: "Group Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            name: "name",
                                            value: form.name,
                                            onChange: handleInputChange,
                                            className: " appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                            id: "username",
                                            type: "text",
                                            placeholder: ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                            className: "block text-gray-400 text-sm font-semibold mb-2",
                                            children: "Group Role"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                            onChange: handleInputChange,
                                            value: form.role,
                                            className: "  border rounded w-full font-semibold py-2 px-3 text-gray-400 cursor-pointer leading-tight focus:outline-none focus:shadow-outline ",
                                            name: "Role",
                                            id: "",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Project Manager",
                                                    children: "Project Manger"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Senior Front End Developer",
                                                    children: "Senior Front End Developer"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Senior Back End Develope",
                                                    children: "Senior Back End Developer"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Senior Full Stack Developer",
                                                    children: "Senior Full Stack Developer"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Junior Front End Developer",
                                                    children: "Junior Front End Developer"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Junior Back End Developer",
                                                    children: "Junior Back End Developer"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Junior Full Stack Developer",
                                                    children: "Junior Full Stack Developer"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                    className: "font-semibold",
                                                    name: "role",
                                                    value: "Create Role",
                                                    children: "Create Role"
                                                })
                                            ]
                                        }),
                                        form.role === "Create Role" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                name: "custom",
                                                value: form.custom,
                                                onChange: handleInputChange,
                                                className: "shadow  border rounded w-full py-2 px-3 text-gray-400 font-semibold outline-none",
                                                type: "text",
                                                placeholder: "What role would you like?"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mb-8 px-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            value: searchInput,
                                            onChange: handleSearchInput,
                                            className: "border rounded py-1 px-3 w-full outline-none",
                                            type: "text",
                                            placeholder: "Find User By Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            onClick: ()=>searchUser(searchInput),
                                            className: "absolute right-0 top-0 bg-blue-400 text-white font-semibold h-full flex items-center justify-center px-3 cursor-pointer",
                                            children: "Find"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-red-500 mt-2",
                                    children: [
                                        " ",
                                        searchedUserError
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mt-4 pb-3 border-b",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-gray-400  ",
                                            children: "Team Members"
                                        }),
                                        teamMembers.map((user)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center justify-between rounded  p-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-1 text-gray-400",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                className: "h-6 w-6 rounded-full",
                                                                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "group-hover:text-blue-400 font-semibold",
                                                                children: user.name
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "group-hover:text-blue-400",
                                                                children: [
                                                                    "@",
                                                                    user.username
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        onClick: ()=>removeUserFromInviteList(user),
                                                        className: "w-7 h-7 flex items-center justify-center group hover:bg-red-100 rounded-full transition ease-in-out cursor-pointer duration-200",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            strokeWidth: 1.5,
                                                            stroke: "currentColor",
                                                            className: "w-4 h-4 text-red-500",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }))
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mb-2 text-gray-400 font-semibold",
                                            children: [
                                                "Suggested - Position - ",
                                                authUser.position
                                            ]
                                        }),
                                        suggestedUsers.map((user)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "flex items-center justify-between rounded group p-2 hover:bg-blue-100 transition ease-in-out cursor-pointer duration-200",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center space-x-1 text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            className: "h-6 w-6 rounded-full",
                                                            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "group-hover:text-blue-400 font-semibold",
                                                            children: user.name
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "group-hover:text-blue-400",
                                                            children: [
                                                                "@",
                                                                user.username
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }))
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex flex-col space-y-4 px-5",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: ()=>handleCreateGroup(team),
                                className: "bg-blue-400 text-white rounded font-bold py-2 px-4 hover:text-blue-400 p-2 hover:bg-blue-100 transition ease-in-out cursor-pointer duration-200",
                                type: "button",
                                children: inviteList.length > 0 ? "Create Group & Send Invites" : "Create Group"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "text-center text-gray-500 text-xs",
                    children: "\xa92020 Acme Corp. All rights reserved."
                })
            ]
        })
    });
};
/* harmony default export */ const forms_CreateGroupForm = (CreateGroupForm);

// EXTERNAL MODULE: ./components/users/Members.jsx + 1 modules
var Members = __webpack_require__(6264);
// EXTERNAL MODULE: ./components/buttons/TrashButton.jsx
var TrashButton = __webpack_require__(4055);
// EXTERNAL MODULE: ./utils/api/users.js
var api_users = __webpack_require__(2548);
// EXTERNAL MODULE: ./utils/api/invites.js
var invites = __webpack_require__(7157);
;// CONCATENATED MODULE: ./components/features/Invite/TeamInvitePopup.jsx









const TeamInvitePopup = ({ team, openPopup, closePopup, popup })=>{
    const [members, setMembers] = (0,external_react_.useState)([]);
    const [usersWorkedWith, setUsersWorkedWith] = (0,external_react_.useState)([]);
    const [inviteList, setInviteList] = (0,external_react_.useState)([]);
    const { authUser } = (0,AuthContext/* useAuth */.aC)();
    const [sentInvites, setSentInvites] = (0,external_react_.useState)([]);
    const [searchedUser, setSearchedUser] = (0,external_react_.useState)(null);
    const [searchedUserError, setSearchedUserError] = (0,external_react_.useState)(null);
    const [searchInput, setSearchInput] = (0,external_react_.useState)("");
    const getUsersWorkedWith = async ()=>{
        const users = await (0,api_users/* fetchUsersWorkedWith */.ft)(team.id, authUser.id);
        setUsersWorkedWith(users);
    };
    const handleAddUser = (user)=>{
        setInviteList([
            ...inviteList,
            user
        ]);
    };
    const handleInputChange = (e)=>{
        setForm({
            ...form,
            [e.currentTarget.name.toLowerCase()]: e.currentTarget.value
        });
    };
    const validateForm = ()=>{
        if (form.name.length === 0) {
            return false;
        } else {
            if (form.role === "Create Role" && form.custom.length === 0) {
                return false;
            }
        }
        return true;
    };
    const searchUser = async (email)=>{
        const inInviteList = inviteList.find((user)=>user.email === email);
        const isAuthEmail = email === authUser.email;
        if (inInviteList) {
            setSearchedUserError("User already in invite list.");
            return;
        }
        if (isAuthEmail) {
            setSearchedUserError("Cannot search your own email.");
            return;
        }
        const response = await (0,api_users/* getUserByEmail */.CX)(email);
        if (response.error === true && response.errorCode === 1001) {
            setSearchedUserError(response.payload);
        }
        if (response.error === false) {
            const isTeamMember = team.members.find((member)=>member.id === response.payload.id);
            if (isTeamMember) {
                setSearchedUserError("User is already a member of this Team.");
                return;
            }
            setInviteList([
                response.payload,
                ...inviteList
            ]);
            setSearchInput("");
            setSearchedUserError(null);
        }
    };
    const removeUserFromInviteList = (user)=>{
        setInviteList(inviteList.filter((u)=>u.id !== user.id));
    };
    // const fetchUsersByPosition = async (position) => {
    //   const users = await getUsersByPosition(position);
    //   setSuggestedUsers(users);
    //   return users;
    // };
    const handleSearchInput = (e)=>{
        setSearchInput(e.target.value);
    // const searchResults = allUsers.filter(
    //   (user) =>
    //     user.username.toLowerCase().match(e.target.value.toLowerCase()) ||
    //     user.username.toUpperCase().match(e.target.value.toUpperCase()) ||
    //     user.name.toUpperCase().match(e.target.value.toUpperCase()) ||
    //     user.name.toUpperCase().match(e.target.value.toUpperCase())
    // );
    // setSearchedUsers(searchResults);
    };
    const sendInvites = async ()=>{
        if (inviteList.length === 0) {
            alert("No users in invite list");
            return;
        }
        await (0,invites/* sendTeamInvites */.IG)(inviteList, team, authUser.id);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        sendInvites();
    };
    (0,external_react_.useEffect)(()=>{
        getUsersWorkedWith();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                onClick: closePopup,
                className: "fixed top-0 right-0 left-0 bottom-0 opacity-0 z-50 bg-black cursor-default"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute w-[500px] z-50 shadow-lg p-3 bg-gray-800 left-[425px]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-center mb-6 space-x-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-7 h-7 text-white bg-gray-900 flex items-center justify-center rounded-full ",
                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_AddUserIcon, {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-gray-200  text-lg ",
                                children: "Add Team Members"
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        value: searchInput,
                                        onChange: handleSearchInput,
                                        className: "bg-gray-700 rounded py-1 px-3 w-full outline-none",
                                        type: "text",
                                        placeholder: "Find User By Email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        onClick: ()=>searchUser(searchInput),
                                        className: "absolute right-0 top-0 bg-green-500 text-white font-semibold h-full flex items-center justify-center px-3 cursor-pointer",
                                        children: "Find"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-red-500 mt-2",
                                children: [
                                    " ",
                                    searchedUserError
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-gray-200 mt-5 mb-2",
                                children: "People previously worked with"
                            }),
                            usersWorkedWith.map((member)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    onClick: ()=>handleAddUser(member),
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex items-center justify-between rounded group p-2 hover:bg-gray-700 transition ease-in-out cursor-pointer duration-200",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center space-x-1 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    className: "h-6 w-6 rounded-full",
                                                    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "font-semibold",
                                                    children: member.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "",
                                                    children: [
                                                        "@",
                                                        member.username
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }, member.id))
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mt-4 p-3 bg-gray-700 pb-3 mb-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-gray-200  ",
                                children: "Invite List"
                            }),
                            inviteList.map((user)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between rounded  p-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center space-x-1 text-gray-400",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    className: "h-6 w-6 rounded-full",
                                                    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "group-hover:text-blue-400 font-semibold",
                                                    children: user.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "group-hover:text-blue-400",
                                                    children: [
                                                        "@",
                                                        user.username
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            onClick: ()=>removeUserFromInviteList(user),
                                            className: "w-8 h-8 flex items-center justify-center group bg-gray-800 rounded-full transition ease-in-out cursor-pointer duration-200",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 1.5,
                                                stroke: "currentColor",
                                                className: "w-4 h-4 text-red-500",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                })
                                            })
                                        })
                                    ]
                                })),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex flex-col space-y-4 mt-10 mb-2",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    onClick: handleSubmit,
                                    className: "bg-green-500 text-white rounded font-bold py-2 px-4 p-2 hover:bg-green-600 transition ease-in-out cursor-pointer duration-200",
                                    type: "button",
                                    children: inviteList.length === 0 ? "Send Invite" : "Send Invites"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Invite_TeamInvitePopup = (TeamInvitePopup);

;// CONCATENATED MODULE: ./components/layout/Sidebar/Sidebar.jsx






















const Sidebar = ({ teams })=>{
    // const {
    //   teams,
    //   team,
    //   groups,
    //   getTeams,
    //   getGroups,
    //   teamsLoading,
    //   groupsLoading,
    // } = useTeams();
    const router = (0,router_.useRouter)();
    const { authUser } = (0,AuthContext/* useAuth */.aC)();
    const [teamHeader, setTeamHeader] = (0,external_react_.useState)(null);
    const [popup, setPopup] = (0,external_react_.useState)(false);
    const [teamsPopup, setTeamsPopup] = (0,external_react_.useState)(false);
    const [inviteMembersPopup, setInviteMembersPopup] = (0,external_react_.useState)(false);
    const closeInviteMembersPopup = ()=>setInviteMembersPopup(false);
    const openInviteMemebersPopup = ()=>setInviteMembersPopup(true);
    const { createTeamPopup, setCreateTeamPopup } = (0,useCreateTeam2/* default */.Z)();
    const { groups, setGroups, createGroupPopup, setCreateGroupPopup } = (0,useCreateGroup/* default */.Z)();
    const [team, setTeam] = (0,external_react_.useState)({});
    const [teamTabs, setTeamTabs] = (0,external_react_.useState)([
        {
            id: 1,
            name: "Tasks",
            active: true,
            route: `/teams/${team?.id}/tasks`,
            IconComponent: TaskIcon
        },
        {
            id: 2,
            name: "Chat",
            active: false,
            route: `/teams/${team?.id}/chat`,
            IconComponent: ChatIcon
        }
    ]);
    const [teamLoading, setTeamLoading] = (0,external_react_.useState)(true);
    const [groupsLoading, setGroupsLoading] = (0,external_react_.useState)(true);
    const getTeam = async ()=>{
        setCreateGroupPopup(false);
        const payload = await (0,api_teams/* getTeamById */.mW)(router.query.teamId, authUser.id);
        console.log("Team uhhh: ", payload);
        if (payload === false) {
            setGroupsLoading(false);
            setTeam(null);
            setTeamHeader("Select Team");
            setTeamLoading(false);
            return;
        }
        getGroups();
        setTeam(payload);
        setTeamHeader(payload.name);
        setTeamLoading(false);
    };
    const getGroups = async ()=>{
        const groups = await (0,group/* getTeamGroups */.JB)(router.query.teamId);
        setGroups(groups);
        setGroupsLoading(false);
    };
    const routeTeam = (teamId)=>{
        router.push(`/teams/${teamId}/tasks`);
        setTeamsPopup(false);
    };
    const toggleTeamsDropdown = ()=>{
        if (teamsPopup) setTeamsPopup(false);
        else setTeamsPopup(true);
    };
    const handleTabClick = (tabClicked)=>{
        const activeTab = teamTabs.find((tab)=>tab.active);
        const updatedTabs = teamTabs.map((tab)=>{
            if (tab.id === activeTab?.id) {
                tab.active = false;
            }
            if (tab.id === tabClicked.id) {
                tab.active = true;
                if (tab.route) {
                    router.push(`/teams/${team?.id}/${tabClicked.name === "Tasks" ? "tasks" : "chat"}`);
                }
            }
            return tab;
        });
        setTeamTabs(updatedTabs);
    };
    console.log("Router: ", router.route.split("/"));
    (0,external_react_.useEffect)(()=>{
        const activeTab = teamTabs.find((tab)=>tab.active);
        const updatedTabs = teamTabs.map((tab)=>{
            if (tab.id === activeTab?.id) {
                tab.active = false;
            }
            if (router.route.split("/")[3] === "tasks") {
                if (tab.id === 1) {
                    tab.active = true;
                }
            }
            if (router.route.split("/")[3] === "chat") {
                if (tab.id === 2) {
                    tab.active = true;
                }
            }
            return tab;
        });
        setTeamTabs(updatedTabs);
    }, [
        router.query
    ]);
    // Intended Functionality working but severly needs code rework to not keep refeching everytime the team & group Ids change
    // especially when creating a new team or group routes to the new created Id (refetches because of dependencies in useEffect)
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            getTeam();
            setCreateTeamPopup(false);
            setTeamsPopup(false);
        };
        fetchData();
    }, [
        router.query.teamId,
        router.query.groupId
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(ProtectedComponent/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            //  style={{backgroundColor: "#23272a"}}
            className: "relative bg-gray-800 flex flex-col w-full h-screen  ",
            children: [
                groupsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mx-5",
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime.jsx((external_react_loading_skeleton_default()), {
                            className: " mt-3 h-6",
                            baseColor: "rgb(55 65 81)",
                            highlightColor: "rgb(55 65 81)",
                            count: 1,
                            // height="16px"
                            enableAnimation: true,
                            direction: "rtl",
                            duration: 1
                        })
                    ]
                }) : // <div
                //   onClick={toggleTeamsDropdown}
                //   className="relative text-white font-semibold h-12 px-3 bg-gray-800 py-1 mb-3 shadow-md hover:bg-gray-900 flex items-center justify-between transition ease-in-out cursor-pointer duration-200"
                // >
                //   {teamHeader}
                //   <div className="w-7 h-7 bg-gray-700 flex items-center justify-center rounded-full ">
                //     <AddUserIcon />
                //   </div>
                //   {/* {teamsPopup ? (
                //       <CollapseButton height="4" width="4" />
                //     ) : (
                //       <ExpandButton height="4" width="4" />
                //     )} */}
                // </div>
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "shadow-lg h-12 mb-3 flex items-center justify-between cursor-pointer pr-4 relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                onClick: toggleTeamsDropdown,
                                className: " group h-full w-full",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "font-semibold text-gray-100 flex items-center pl-3  group-hover:bg-gray-900 transition ease-in-out cursor-pointer duration-200 h-full",
                                    children: teamHeader
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "z-40  rounded-l-full bg-gray-800 group-hover:bg-gray-900 px-3 absolute right-0 h-full flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        onClick: openInviteMemebersPopup,
                                        className: "w-7 h-7 text-white bg-gray-900 flex items-center justify-center rounded-full ",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(icons_AddUserIcon, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: " h-full     flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "h-8 w-8 rounded-full bg-gray-900 flex justify-center items-center cursor-pointer",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(TrashButton/* default */.Z, {})
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                inviteMembersPopup && /*#__PURE__*/ jsx_runtime.jsx(Invite_TeamInvitePopup, {
                    team: team,
                    openPopup: openInviteMemebersPopup,
                    closePopup: closeInviteMembersPopup,
                    popup: inviteMembersPopup
                }),
                teamsPopup && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-sm border-b border-b-gray-600  ",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "w-full flex flex-col  px-3 pb-5",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex flex-col  group",
                                children: teams.map((team)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                        onClick: ()=>routeTeam(team.id),
                                        children: /*#__PURE__*/ jsx_runtime.jsx(buttons_Button, {
                                            text: team.name,
                                            theme: "blue"
                                        })
                                    }, team.id))
                            })
                        }),
                        createTeamPopup && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            onClick: ()=>setCreateTeamPopup(false),
                            className: "fixed top-0 right-0 left-0 bottom-0 opacity-0 z-40 bg-black cursor-default"
                        }),
                        createTeamPopup && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "absolute z-50 shadow-lg  bg-white left-[425px]",
                            children: /*#__PURE__*/ jsx_runtime.jsx(CreateTeamForm/* default */.Z, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            onClick: ()=>setCreateTeamPopup(true),
                            // onClick={handleCreateTeam}
                            className: "px-3 relative flex items-center group mx-3  py-2 mb-3 space-x-3  hover:bg-green-400 text-white   transition ease-in-out cursor-pointer duration-200",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(AddButton/* default */.Z, {
                                    height: "4",
                                    width: "4"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-white font-semibold w-3/4 flex justify-between items-center transition ease-in-out cursor-pointer duration-200",
                                    children: "Create Team"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "p-3 flex flex-col space-y-3  mb-3 text-white rounded-sm",
                    children: teamTabs.map((tab)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            onClick: ()=>handleTabClick(tab),
                            className: "py-2 px-4 flex items-center justify-between bg-gray-900 rounded-sm hover:bg-black transition ease-in-out cursor-pointer duration-200",
                            children: [
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(tab.IconComponent, {}),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: tab.name
                                        }),
                                        " "
                                    ]
                                }),
                                tab.active && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "h-2 w-2 bg-green-500 rounded-full"
                                })
                            ]
                        }))
                }),
                team !== null && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        " ",
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx(Sidebar_Groups, {
                                    groups: groups,
                                    groupsLoading: groupsLoading,
                                    openPopup: ()=>setCreateGroupPopup(true),
                                    team: team
                                }),
                                createGroupPopup && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    onClick: ()=>setCreateGroupPopup(false),
                                    className: "fixed top-0 right-0 left-0 bottom-0 z-40"
                                }),
                                createGroupPopup && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "absolute -right-[500px] bg-white z-50 shadow w-[500px]",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(forms_CreateGroupForm, {
                                        team: team
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center relative justify-between pl-3 pr-2 mb-2 py-1 text-white text-sm",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "font-bold",
                                            children: "Direct Messages"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "cursor-pointer",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 1.5,
                                                stroke: "currentColor",
                                                className: "w-4 h-4 text-gray-500",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M12 4.5v15m7.5-7.5h-15"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "px-3",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(Members/* default */.Z, {
                                            team: team,
                                            type: "chat"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Sidebar_Sidebar = (Sidebar);
const TaskIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4 ",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
        })
    });
};
const ChatIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        })
    });
};


/***/ }),

/***/ 5619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2767);
/* harmony import */ var _hooks_useCreateTeam2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9842);
/* harmony import */ var _utils_api_teams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6123);
/* harmony import */ var _MobileSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7546);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2732);
/* harmony import */ var _context_TeamsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5008);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);









const SidebarContainer = ({ mobileSidebar })=>{
    const { authUser, authLayout } = (0,_context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .aC)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { sidebarTeams, setSidebarTeams } = (0,_hooks_useCreateTeam2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { teams, team, groups, getTeams, getTeam } = (0,_context_TeamsContext__WEBPACK_IMPORTED_MODULE_7__/* .useTeams */ .y2)();
    // const getTeams = async () => {
    //   const teams = await getAuthsTeams(authUser.id);
    //   setSidebarTeams(teams);
    //   console.log("SIDEBAR - Auths Teams: ", teams);
    // };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getTeams();
    }, [
        teams.length
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getTeam();
    }, [
        team.name,
        groups.length
    ]);
    if (authUser && authLayout) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden sm:block sm:col-span-3 2xl:col-span-2 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    teams: teams
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `z-50 absolute top-[7.5vh] w-[90%] bottom-0  sm:hidden ${!mobileSidebar ? "-translate-x-[100%] left-0" : "left-0 "}   z-40 border-l-gray-600 h-screen transition ease-in-out cursor-pointer duration-500`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileSidebar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarContainer);


/***/ }),

/***/ 1993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _groups_CreateGroupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8673);
/* harmony import */ var _layout_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8578);
/* harmony import */ var _context_TeamsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5008);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9012);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__);







const TeamsHeader = ({ tabs, tabClick })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { teamLoading, team } = (0,_context_TeamsContext__WEBPACK_IMPORTED_MODULE_5__/* .useTeams */ .y2)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: teamLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default()), {
            className: "h-6",
            baseColor: "rgb(31 41 55)",
            count: 1,
            width: "200px",
            highlightColor: "rgb(55 65 81)",
            enableAnimation: true,
            direction: "rtl",
            duration: 1
        }) : router.query.teamId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: " inline-flex w-full h-12 items-center bg-gray-700 shadow-md font-semibold ",
            children: tabs?.map((tab)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>tabClick(tab),
                    className: `${tab?.active ? " text-gray-200 bg-gray-900 border-b border-b-green-400" : " text-gray-300"} hover:bg-gray-900 h-full  px-7 flex items-center justify-center  transition ease-in-out cursor-pointer duration-200`,
                    children: tab?.name
                }, tab?.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamsHeader);


/***/ }),

/***/ 6264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ users_Members)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./hooks/usePopupList.js

const usePopupList = ()=>{
    const [popup, setPopup] = (0,external_react_.useState)(false);
    const [inputEl, setInputEl] = (0,external_react_.useState)(-1);
    const openPopup = (id)=>{
        setInputEl(id);
        setPopup(true);
    };
    const closePopup = ()=>{
        setInputEl(-1);
        setPopup(false);
    };
    return {
        popup,
        closePopup,
        openPopup,
        inputEl
    };
};
/* harmony default export */ const hooks_usePopupList = (usePopupList);

// EXTERNAL MODULE: ./components/Popup.jsx + 1 modules
var Popup = __webpack_require__(6006);
// EXTERNAL MODULE: ./context/auth/AuthContext.js
var AuthContext = __webpack_require__(2767);
// EXTERNAL MODULE: external "@material-tailwind/react"
var react_ = __webpack_require__(4715);
;// CONCATENATED MODULE: ./components/users/Members.jsx







const Members = ({ team, type, removeMember, hideMembers })=>{
    const router = (0,router_.useRouter)();
    const { authUser } = (0,AuthContext/* useAuth */.aC)();
    const { popup, openPopup, closePopup, inputEl } = hooks_usePopupList();
    // const [inputEl, setInputEl] = useState(-1);
    console.log("Team: ", team);
    const handleChat = (username)=>{
        if (type && type === "chat") {
            router.push(`/teams/${router.query.teamId}/chat/${username}`);
            return;
        }
        router.push(`/teams/${router.query.teamId}/members/${username}`);
    };
    const produceDate = (member)=>{
        if (member === null) {
            return "";
        } else {
            return new Date(member?.joined?.seconds * 1000).toString().split(" ").filter((item, idx)=>idx < 4 && idx > 0).map((item, idx)=>idx === 0 ? item + " " : item + ", ").join("").split(",").map((item, idx)=>idx === 0 ? item + "," : item).join("");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "h-full rounded-tl-xl bg-gray-700 py-7",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between  px-4 ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center text-xs text-gray-300  space-x-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: "MEMBERS"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: "-"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: team.members?.length
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            onClick: hideMembers,
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: "w-5 h-5 text-white",
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M6 18L18 6M6 6l12 12"
                            })
                        })
                    })
                ]
            }),
            team.members?.map((member)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    // onClick={() => handleChat(member.username)}
                    className: "relative flex items-center justify-between py-2 text-sm px-4 hover:bg-gray-700 transition ease-in-out cursor-pointer duration-200",
                    children: [
                        member.id === inputEl && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Popup/* default */.Z, {
                            closePopup: closePopup,
                            popup: popup,
                            styles: "-left-96 bg-gray-800 rounded-lg w-96 shadow-lg",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "absolute right-5 -bottom-11 flex items-center space-x-3",
                                            children: [
                                                authUser.id !== member.id && /*#__PURE__*/ jsx_runtime.jsx(react_.Tooltip, {
                                                    placement: "top",
                                                    content: "Direct Message",
                                                    animate: {
                                                        mount: {
                                                            scale: 1,
                                                            y: 0
                                                        },
                                                        unmount: {
                                                            scale: 0,
                                                            y: 1
                                                        }
                                                    },
                                                    className: "hidden sm:flex bg-gray-900 rounded  px-2 py-1 text-xs text-white  z-50",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: " p-2 rounded-full bg-gray-900 cursor-pointer",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "text-gray-300",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(ChatIcon, {})
                                                        })
                                                    })
                                                }),
                                                authUser.id === team.creatorId && /*#__PURE__*/ jsx_runtime.jsx(react_.Tooltip, {
                                                    placement: "top",
                                                    content: authUser.id === member.id ? "Leave Team" : `Remove ${member.name} from Team`,
                                                    animate: {
                                                        mount: {
                                                            scale: 1,
                                                            y: 0
                                                        },
                                                        unmount: {
                                                            scale: 0,
                                                            y: 1
                                                        }
                                                    },
                                                    className: "hidden sm:flex bg-gray-900 rounded  px-2 py-1 text-xs text-white  z-50",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        onClick: ()=>removeMember(member.id),
                                                        className: "p-2 rounded-full bg-gray-900 cursor-pointer",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "text-red-500",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(RemoveUserIcon, {})
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "h-14 bg-blue-400 rounded-tl-lg rounded-tr-lg"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "w-24 h-24 flex items-center justify-center rounded-full bg-gray-800 absolute left-3 top-3",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                className: "h-20 w-20 rounded-full ",
                                                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                alt: ""
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-gray-800 mt-16 px-5 pb-5  rounded-bl-lg rounded-br-lg",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-gray-900 rounded-lg p-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "border-b border-b-gray-700 pb-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-white text-lg font-bold",
                                                        children: member.name
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "text-white font-semibold",
                                                        children: [
                                                            "@",
                                                            member.username
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-white uppercase text-xs py-3 font-bold",
                                                        children: "Member Since"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-white",
                                                        children: "-"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-white",
                                                        children: produceDate(member)
                                                    })
                                                ]
                                            }),
                                            authUser.id !== member.id && /*#__PURE__*/ jsx_runtime.jsx("form", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    className: "bg-gray-900 text-white border border-gray-700 rounded w-full p-2 mt-8 outline-none",
                                                    type: "text",
                                                    placeholder: `Message @${member.username}`
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center w-full hover:bg-gray-600  text-gray-400",
                            onClick: ()=>openPopup(member.id),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    className: "h-8 w-8 rounded-full mr-3",
                                    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                    alt: ""
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "group-hover:text-blue-400 font-bold mr-1",
                                            children: member.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "group-hover:text-blue-400",
                                            children: [
                                                "@",
                                                member.username
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, member.id))
        ]
    });
};
const MoreIcon = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-6 h-6  text-gray-400",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        })
    });
};
const ChatIcon = ()=>/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        })
    });
const RemoveUserIcon = ()=>/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
        })
    });
/* harmony default export */ const users_Members = (Members);


/***/ }),

/***/ 5008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b9: () => (/* binding */ TeamsProvider),
/* harmony export */   y2: () => (/* binding */ useTeams)
/* harmony export */ });
/* unused harmony export TeamsContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_api_teams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6123);
/* harmony import */ var _utils_api_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8540);
/* harmony import */ var _auth_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2767);
/* harmony import */ var _utils_api_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6417);
/* harmony import */ var _utils_api_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5017);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);


// import { clockIn, clockOut, getUserById } from '../../utils/api/users';







const TeamsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function useTeams() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TeamsContext);
}
function TeamsProvider({ children }) {
    const { authUser } = (0,_auth_AuthContext__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .aC)();
    const [team, setTeam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [teamMembers, setTeamMembers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [teamsLoading, setTeamsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [teamLoading, setTeamLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [teamChat, setTeamChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [chatLoading, setChatLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [groups, setGroups] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [group, setGroup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [groupMembers, setGroupMembers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [groupsLoading, setGroupsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [groupLoading, setGroupLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [groupChat, setGroupChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [directChat, setDirectChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [directMessagesLoading, setDirectChatLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [builder, setBuilder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [teamsHistory, setTeamsHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [groupsHistory, setGroupsHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [directMessagesHistory, setDirectChatHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [chatId, setChatId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const chatEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const chatStartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const clearTeamsState = ()=>{
        setTeam({});
        setTeamMembers([]);
        setTeams([]);
        setTeamChat(null);
        setGroups([]);
        setGroup(null);
        setGroupMembers([]);
        setGroupChat(null);
        setDirectChat(null);
        setBuilder([]);
        setTeamsHistory([]);
        setGroupsHistory([]);
        setDirectChatHistory([]);
        setError(null);
    };
    const getTeams = async ()=>{
        const teams = await (0,_utils_api_teams__WEBPACK_IMPORTED_MODULE_3__/* .getAuthsTeams */ .xt)(authUser?.id);
        if (teams === false) {
            setTeams([]);
            setTeamsLoading(false);
            return;
        }
        setTeams(teams);
        setTeamsLoading(false);
        return teams;
    };
    const teamFoundInHistory = ()=>{
        return teamsHistory.find((team)=>team?.id === router.query.teamId);
    };
    const groupFoundInHistory = ()=>{
        return groupsHistory.find((group)=>group?.id === router.query.groupId);
    };
    const directMessageUserFoundInHistory = ()=>{
        return directMessagesHistory.find((user)=>user.username === router.query.username);
    };
    const getTeamChat = async ()=>{
        const teamId = router.query.teamId;
        const team = teamFoundInHistory();
        if (team) {
            setTeamChat(team.chat);
        } else {
            const chat = await (0,_utils_api_chat__WEBPACK_IMPORTED_MODULE_6__/* .fetchTeamChat */ .Mf)(teamId);
            console.log("Chat: ", chat);
            const updateHistory = teamsHistory.map((team)=>{
                if (team.id === teamId) {
                    team.chat = chat;
                }
                return team;
            });
            // setTeamChat(chat);
            // setTeamsHistory(updateHistory);
            return chat;
        }
    };
    const getGroupChat = async ()=>{
        const groupId = router.query.groupId;
        const group = groupFoundInHistory();
        if (group) {
            setGroupChat(group.chat);
        } else {
            const chat = await (0,_utils_api_chat__WEBPACK_IMPORTED_MODULE_6__/* .fetchGroupChat */ .Ab)(groupId);
            const updateHistory = groupsHistory.map((group)=>{
                if (group.id === groupId) {
                    group.chat = chat;
                }
                return group;
            });
            setGroupChat(chat);
            setGroupsHistory(updateHistory);
            setChatLoading(false);
        }
    };
    const getDirectChat = async ()=>{
        const { username, teamId } = router.query;
        const userFound = directMessageUserFoundInHistory();
        if (userFound) {
            setDirectChat(userFound);
        } else {
            const chat = await (0,_utils_api_chat__WEBPACK_IMPORTED_MODULE_6__/* .fetchDirectChat */ .N2)(username, teamId, authUser.id);
            const updatedMessages = chat.messages.map((message)=>{
                if (message.replyTo) {
                    const match = chat.messages.find((m)=>m.id === message.replyTo.id);
                    if (match.text !== message.replyToText) {
                        message.replyTo.isEdited = true;
                    } else {
                        message.replyTo.isEdited = false;
                    }
                }
                return message;
            });
            setDirectChat(updatedMessages);
            // setTeamMembers(members);
            setChatLoading(false);
            setChatId(chat.id);
            setDirectChatHistory([
                ...directMessagesHistory,
                {
                    ...chat,
                    messages: updatedMessages
                }
            ]);
            return updatedMessages;
        }
    };
    const getTeam = async ()=>{
        const teamFound = teamFoundInHistory();
        console.log("Team Found: ", teamFound);
        if (teamFound) {
            setError(null);
            getGroups(teamFound.id);
            setTeam(teamFound);
            setTeamChat(teamFound.chat);
            setTeamLoading(false);
            setChatLoading(false);
        } else {
            setTeamLoading(true);
            setChatLoading(true);
            let team = await (0,_utils_api_teams__WEBPACK_IMPORTED_MODULE_3__/* .getTeamById */ .mW)(router.query.teamId, authUser.id);
            if (team === false) {
                // console.log("Error: ", response.error);
                setError("Team Not Found");
                if (teams.length > 0) {
                    router.push(`/teams/${teams[0].id}/tasks`);
                    return;
                } else {
                    router.push("/createteam");
                    return;
                }
            }
            // if (!team) {
            //   setError("Team Not Found");
            //   return;
            // }
            // if (team === false) {
            //   setError(404);
            //   return;
            // }
            getGroups(team.id);
            const chat = await (0,_utils_api_chat__WEBPACK_IMPORTED_MODULE_6__/* .fetchTeamChat */ .Mf)(team.id);
            team = {
                ...team,
                chat
            };
            setError(null);
            setTeam(team);
            setTeamChat(chat);
            setTeamLoading(false);
            setChatLoading(false);
            setBuilder([
                ...builder,
                team
            ]);
            setTeamsHistory([
                ...teamsHistory,
                team
            ]);
        }
    };
    const getGroup = async ()=>{
        const groupFound = groupFoundInHistory();
        if (groupFound) {
            setGroupChat(groupFound.chat);
            setGroup(group);
            setGroupLoading(false);
        } else {
            setGroupLoading(true);
            setChatLoading(true);
            const group = await (0,_utils_api_group__WEBPACK_IMPORTED_MODULE_4__/* .getGroupById */ .VL)(router.query.groupId, authUser.id);
            if (!group) {
                setError("Group Not Found");
                return;
            }
            getGroupChat();
            const chat = await (0,_utils_api_chat__WEBPACK_IMPORTED_MODULE_6__/* .fetchGroupChat */ .Ab)(group.id);
            setGroup(group);
            setGroupChat(chat);
            setGroupLoading(false);
            setChatLoading(false);
            setError(null);
            setGroupsHistory([
                ...groupsHistory,
                {
                    ...group,
                    chat
                }
            ]);
        }
    };
    const addTeamMessage = async (type, text)=>{
        const message = await (0,_utils_api_messages__WEBPACK_IMPORTED_MODULE_7__/* .createTeamMessage */ .dA)(authUser, team.id, text, type, teamChat.id);
        const chat = {
            ...teamChat,
            messages: [
                ...teamChat.messages,
                message
            ]
        };
        const updateHistory = teamsHistory.map((team)=>{
            if (team.id === router.query.teamId) {
                team.chat.messages = [
                    ...team.chat.messages,
                    message
                ];
            }
            return team;
        });
        setTeamChat(chat);
        setTeamsHistory(updateHistory);
    };
    const addGroupMessage = async (type, text)=>{
        const message = await (0,_utils_api_messages__WEBPACK_IMPORTED_MODULE_7__/* .createGroupMessage */ .yf)(authUser, group.id, text, type, group.chat.id);
        const updateChat = {
            ...groupChat,
            messages: [
                ...groupChat.messages,
                message
            ]
        };
        const updateHistory = groupsHistory.map((group)=>{
            if (group.id === router.query.groupId) {
                group.chat.messages = [
                    ...group.chat.messages,
                    message
                ];
            }
            return group;
        });
        setGroupChat(updateChat);
        setGroupsHistory(updateHistory);
    };
    const addDirectMessage = async (type, text)=>{
        const message = await (0,_utils_api_messages__WEBPACK_IMPORTED_MODULE_7__/* .createDirectMessage */ .WT)(authUser, team.id, text, type);
        const updateChat = {
            ...directChat,
            messages: [
                ...directChat.messages,
                message
            ]
        };
        const updateHistory = directMessagesHistory.map((user)=>{
            if (user.username === router.query.username) {
                user.messages = [
                    ...user.messages,
                    message
                ];
            }
            return user;
        });
        setDirectChat(updateChat);
        setDirectChatHistory(updateHistory);
    };
    const addTeamReply = async (replyTo, text)=>{
        const message = await (0,_utils_api_messages__WEBPACK_IMPORTED_MODULE_7__/* .createTeamReply */ .oB)(authUser, team.id, text, "reply", replyTo, teamChat.id);
        const updateChat = {
            ...teamChat,
            messages: [
                ...teamChat.messages,
                message
            ]
        };
        const updateHistory = teamsHistory.map((team)=>{
            if (team.id === router.query.teamId) {
                team.chat.messages = [
                    ...team.chat.messages,
                    message
                ];
            }
            return team;
        });
        setTeamChat(updateChat);
        setTeamsHistory(updateHistory);
    };
    const addGroupReply = async (replyTo, text)=>{
        const message = await (0,_utils_api_messages__WEBPACK_IMPORTED_MODULE_7__/* .createGroupReply */ .Dk)(authUser, group.id, text, "reply", replyTo, group.chat.id);
        const updateChat = {
            ...groupChat,
            messages: [
                ...groupChat.messages,
                message
            ]
        };
        const updateHistory = groupsHistory.map((group)=>{
            if (group.id === router.query.groupId) {
                group.chat.messages = [
                    ...group.chat.messages,
                    message
                ];
            }
            return group;
        });
        setGroupChat(updateChat);
        setGroupsHistory(updateHistory);
    };
    const addDirectMessageReply = async (replyTo, text)=>{
        const message = await (0,_utils_api_messages__WEBPACK_IMPORTED_MODULE_7__/* .createTeamReply */ .oB)(authUser, team.id, text, "reply", replyTo);
        const updateChat = {
            ...directChat,
            messages: [
                ...directChat.messages,
                message
            ]
        };
        const updateHistory = directMessagesHistory.map((user)=>{
            if (user.username === router.query.username) {
                user.messages = [
                    ...user.messages,
                    message
                ];
            }
            return user;
        });
        setDirectChat(updateChat);
        setDirectChatHistory(updateHistory);
    };
    const editTeamMessage = async (message, text)=>{
        await (0,_utils_api_messages__WEBPACK_IMPORTED_MODULE_7__/* .editMessage */ .Hd)(message.id, text);
        const updateChat = {
            ...teamChat,
            messages: teamChat.messages.map((item)=>{
                if (item.id === message.id) {
                    item.text = text;
                    item.edited = true;
                }
                if (item.replyToMessage?.id === message.id) {
                    item.replyToMessage.text = message.text;
                    item.replyToMessage.isEdited = true;
                }
                return item;
            })
        };
        setTeamChat(updateChat);
    };
    const editGroupMessage = async (message, text)=>{
        await (0,_utils_api_messages__WEBPACK_IMPORTED_MODULE_7__/* .editMessage */ .Hd)(message.id, text);
        const updateChat = {
            ...groupChat,
            messages: groupChat.messages.map((item)=>{
                if (item.id === message.id) {
                    item.text = text;
                    item.edited = true;
                }
                if (item.replyToMessage?.id === message.id) {
                    item.replyToMessage.text = message.text;
                    item.replyToMessage.isEdited = true;
                }
                return item;
            })
        };
        setGroupChat(updateChat);
    };
    const editDirectMessage = async (message, text)=>{
        await (0,_utils_api_messages__WEBPACK_IMPORTED_MODULE_7__/* .editMessage */ .Hd)(message.id, text);
        const updatedMessages = directChat.messages.map((item)=>{
            if (item.id === message.id) {
                item.text = text;
                item.edited = true;
            }
            if (item.replyToMessage?.id === message.id) {
                item.replyToMessage.text = message.text;
                item.replyToMessage.isEdited = true;
            }
            return item;
        });
        setDirectChat(updatedMessages);
    };
    const deleteTeamMessage = async (messageId)=>{
        await (0,_utils_api_messages__WEBPACK_IMPORTED_MODULE_7__/* .deleteMessage */ .$Z)(messageId);
        const updateChat = {
            ...teamChat,
            messages: teamChat.messages.filter((message)=>message.id !== messageId).map((message)=>{
                if (message.replyToMessage?.id === messageId) {
                    message.replyToMessage = null;
                }
                return message;
            })
        };
        const updateHistory = teamsHistory.map((team)=>{
            if (team.id === router.query.teamId) {
                team.chat.messages = team.chat.messages.filter((item)=>item.id !== messageId);
            }
            return team;
        });
        setTeamChat(updateChat);
        setTeamsHistory(updateHistory);
    };
    const deleteGroupMessage = async (messageId)=>{
        await (0,_utils_api_messages__WEBPACK_IMPORTED_MODULE_7__/* .deleteMessage */ .$Z)(messageId);
        const updateChat = {
            ...groupChat,
            messages: groupChat.messages.filter((message)=>message.id !== messageId).map((message)=>{
                if (message.replyToMessage?.id === messageId) {
                    message.replyToMessage = null;
                }
                return message;
            })
        };
        const updateHistory = groupsHistory.map((group)=>{
            if (group.id === router.query.groupId) {
                group.chat.messages = group.chat.messages.filter((message)=>message.id !== messageId);
            }
            return group;
        });
        setGroupChat(updateChat);
        setGroupsHistory(updateHistory);
    };
    const deleteDirectMessage = async (messageId)=>{
        await (0,_utils_api_messages__WEBPACK_IMPORTED_MODULE_7__/* .deleteMessage */ .$Z)(messageId);
        setDirectChat(directMessages.filter((message)=>message.id !== messageId));
        const updateHistory = directMessagesHistory.map((user)=>{
            if (user.username === router.query.username) {
                user.messages = user.messages.filter((item)=>item.id !== messageId);
            }
            return team;
        });
        setTeamsHistory(updateHistory);
    };
    const getGroups = async (teamId)=>{
        const groups = await (0,_utils_api_group__WEBPACK_IMPORTED_MODULE_4__/* .getUserGroups */ .no)(teamId, authUser.id);
        setGroups(groups);
        setGroupsLoading(false);
    };
    const joinGroup = async ()=>{};
    const addUserToGroup = async ()=>{};
    const removeUserFromTeam = ()=>{};
    const removeUserFromGroup = ()=>{};
    const deleteTeam = async (authId, teamId)=>{};
    const deleteGroup = async (authId, teamId)=>{};
    const addTeam = (team)=>{
        setTeams([
            ...teams,
            team
        ]);
    };
    const convertMessages = (messages)=>{
        const extractedDates = messages?.map((message)=>{
            const seconds = message?.createdAt?.seconds;
            const postedDate = moment__WEBPACK_IMPORTED_MODULE_8___default().unix(seconds).format("M D YY");
            message = postedDate;
            return message;
        });
        const dates = extractedDates.filter((message, index)=>{
            return extractedDates.indexOf(message) === index;
        });
        const messagesByDate = dates.map((date)=>{
            const filter = messages.filter((message)=>{
                const seconds = message?.createdAt?.seconds;
                const postedDate = moment__WEBPACK_IMPORTED_MODULE_8___default().unix(seconds).format("M D YY");
                if (date === postedDate) {
                    return message;
                }
            });
            return [
                date,
                filter
            ];
        });
        return messagesByDate;
    };
    const removeTeam = (teamId)=>{
        let updatedTeams = teams.filter((team)=>team.id !== teamId);
        setTeamsHistory(teamsHistory.filter((team)=>team.id !== teamId));
        if (updatedTeams.length > 0) {
            router.push(`/teams/${updatedTeams[0].id}/tasks`);
        } else {
            router.push("/createteam");
        }
        setTeams(updatedTeams);
    };
    const removeMemberFromState = (memberId)=>{
        const updatedTeam = {
            ...team,
            members: team.members.filter((user)=>user.id !== memberId)
        };
        setTeam(updatedTeam);
    };
    const scrollToBottom = ()=>{
        chatEndRef.current?.scrollIntoView();
    };
    const scrollToTop = ()=>{
        chatStartRef.current?.scrollIntoView();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getTeams(authUser?.id);
    }, []);
    const value = {
        loading,
        teamsLoading,
        teamLoading,
        groupsLoading,
        groupLoading,
        teams,
        team,
        teamChat,
        teamMembers,
        groupMembers,
        groups,
        group,
        groupChat,
        error,
        chatEndRef,
        chatStartRef,
        chatLoading,
        builder,
        directMessagesHistory,
        addTeam,
        setError,
        setTeam,
        setTeams,
        getTeams,
        getTeam,
        getGroups,
        getGroup,
        getDirectChat,
        setGroups,
        addGroupMessage,
        addDirectMessage,
        addTeamMessage,
        addTeamReply,
        addGroupReply,
        addDirectMessageReply,
        editTeamMessage,
        editGroupMessage,
        editDirectMessage,
        deleteTeamMessage,
        deleteGroupMessage,
        deleteDirectMessage,
        convertMessages,
        scrollToBottom,
        scrollToTop,
        clearTeamsState,
        removeTeam,
        removeMemberFromState
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TeamsContext.Provider, {
        value: value,
        children: children
    });
}


/***/ }),

/***/ 2767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ho: () => (/* binding */ AuthProvider),
/* harmony export */   aC: () => (/* binding */ useAuth)
/* harmony export */ });
/* unused harmony export AuthContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2606);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4610);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6058);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_api_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2548);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_api_teams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6123);
/* harmony import */ var _utils_api_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8540);









const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function useAuth() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
}
function AuthProvider({ children }) {
    const [authTeams, setAuthTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [authUser, setAuthUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [groupsLoading, setGroupsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [groups, setGroups] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [notifications, setNotifications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [sentInvites, setSentInvites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [authLayout, setAuthLayout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const userInfo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const getAuthTeams = async ()=>{
        const teams = await (0,_utils_api_teams__WEBPACK_IMPORTED_MODULE_7__/* .getAuthsTeams */ .xt)();
        if (teams === false) {
            setAuthTeams([]);
            setLoading(false);
            return;
        }
        setAuthTeams(teams);
        setLoading(false);
        return teams;
    };
    const getTeamGroups = async (team)=>{
        setGroupsLoading(true);
        const groups = await (0,_utils_api_group__WEBPACK_IMPORTED_MODULE_8__/* .getUserGroups */ .no)(team.id, authUser.id);
        setGroups(groups);
        setGroupsLoading(false);
    };
    const register = async (form)=>{
        const userCredentials = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8, form.email, form.password);
        if (userCredentials) {
            const data = {
                id: userCredentials.user.uid,
                email: form.email,
                name: form.displayname,
                username: form.username,
                position: form.position === "Create Position" ? form.customposition : form.position
            };
            await (0,_utils_api_users__WEBPACK_IMPORTED_MODULE_5__/* .createUser */ .r4)(data);
            const user = await (0,_utils_api_users__WEBPACK_IMPORTED_MODULE_5__/* .getUserById */ .GA)(userCredentials.user.uid);
            if (user.id) {
                setAuthUser(user);
            }
        }
    };
    const login = async (email, password)=>{
        const userCredentials = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8, email, password);
        if (userCredentials) {
            const user = await (0,_utils_api_users__WEBPACK_IMPORTED_MODULE_5__/* .getUserById */ .GA)(userCredentials.user.uid);
            const teams = await (0,_utils_api_teams__WEBPACK_IMPORTED_MODULE_7__/* .getAuthsTeams */ .xt)(user.id);
            if (user.id) {
                setAuthLayout(true);
                setAuthUser(user);
                router.push(`/teams/${teams[0]?.id}/tasks`);
            }
        }
    };
    const logout = ()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8);
        setAuthUser(null);
        setAuthLayout(false);
        router.push("/");
    };
    const updateUserState = (data)=>{
        setAuthUser({
            ...authUser,
            ...data
        });
    };
    const goOnline = async ()=>{
        const time = await (0,_utils_api_users__WEBPACK_IMPORTED_MODULE_5__/* .clockIn */ .yX)(authUser.id);
        setAuthUser({
            ...authUser,
            onlineStatus: "online",
            onlineHistory: [
                ...authUser.onlineHistory,
                time
            ]
        });
    };
    const goOffline = async ()=>{
        const time = await (0,_utils_api_users__WEBPACK_IMPORTED_MODULE_5__/* .clockOut */ .xH)(authUser.id);
        setAuthUser({
            ...authUser,
            onlineStatus: "offline",
            onlineHistory: [
                ...authUser.onlineHistory,
                time
            ]
        });
    };
    const handleTheme = (authTheme)=>{
        const themes = {
            red: {
                primary: "red-400",
                secondary: "red-300",
                light: "red-100"
            },
            blue: {
                primary: "blue-500",
                secondary: "blue-400",
                light: "blue-100"
            },
            green: {
                primary: "green-500",
                secondary: "green-400",
                light: "green-100"
            }
        };
        if (authTheme === "blue") {
            setTheme(themes.blue);
        }
        if (authTheme === "green") {
            setTheme(themes.green);
        }
        if (authTheme === "red") {
            setTheme(themes.red);
        }
        if (!authTheme || authTheme === "") {
            setTheme(themes.blue);
        }
    };
    console.log("Auth C: ", AuthContext.Provider);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8, async (userCredentials)=>{
            if (userCredentials) {
                const user = await (0,_utils_api_users__WEBPACK_IMPORTED_MODULE_5__/* .getUserById */ .GA)(userCredentials.uid);
                setAuthUser(user);
                setAuthLayout(true);
                // onSnapshot(
                //   collection(db, `users/${userCredentials.uid}/invites`),
                //   (snapshot) => {
                //     const notifications = [];
                //     snapshot.forEach((doc) => {
                //       notifications.push({ id: doc.id, ...doc.data(), type: "invite" });
                //     });
                //     setNotifications(notifications);
                //   }
                // );
                // onSnapshot(collection(db, "users"), (snapshot) => {
                //   const users = [];
                //   snapshot.forEach((doc) => {
                //     users.push({ id: doc.id, ...doc.data() });
                //   });
                // });
                setLoading(false);
            } else {
                logout();
                // setAuthUser(null)
                setLoading(false);
            }
        });
        return unsubscribe;
    }, []);
    const value = {
        authUser,
        notifications,
        register,
        login,
        logout,
        userInfo,
        updateUserState,
        goOnline,
        goOffline,
        getAuthTeams,
        setAuthTeams,
        authTeams,
        theme,
        getTeamGroups,
        groupsLoading,
        groups,
        notifications,
        setGroups,
        setSentInvites,
        sentInvites,
        setAuthLayout,
        authLayout
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: value,
        children: !loading && children
    });
}


/***/ }),

/***/ 2606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I8: () => (/* binding */ auth),
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* unused harmony exports app, storage */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4324);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4610);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1668);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6058);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_3__);
// Import the functions you need from the SDKs you need




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKKj46ubmWAmaywD7bpjyMIRN3sCtu1SM",
    authDomain: "teamtree-768fa.firebaseapp.com",
    projectId: "teamtree-768fa",
    storageBucket: "teamtree-768fa.appspot.com",
    messagingSenderId: "891469149306",
    appId: "1:891469149306:web:d2d91ae34dadd354aaf7c3",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
let app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length === 0 ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)()[0];
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)(app);
(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.enableNetwork)(db);



/***/ }),

/***/ 5173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2767);
/* harmony import */ var _utils_api_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2548);
/* harmony import */ var _utils_api_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8540);





const useCreateGroup = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { authUser, setAuthLayout } = (0,_context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .aC)();
    const [sentInvites, setSentInvites] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [groups, setGroups] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    //   const {setGroups, teams} = useTeams()
    const [inviteList, setInviteList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [searchedUser, setSearchedUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [searchedUserError, setSearchedUserError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [suggestedUsers, setSuggestedUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        role: "",
        custom: "",
        name: ""
    });
    const [createGroupPopup, setCreateGroupPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleInputChange = (e)=>{
        setForm({
            ...form,
            [e.currentTarget.name.toLowerCase()]: e.currentTarget.value
        });
    };
    const validateForm = ()=>{
        if (form.name.length === 0) {
            return false;
        } else {
            if (form.role === "Create Role" && form.custom.length === 0) {
                return false;
            }
        }
        return true;
    };
    const searchUser = async (email)=>{
        const inInviteList = inviteList.find((user)=>user.email === email);
        const isAuthEmail = email === authUser.email;
        if (inInviteList) {
            setSearchedUserError("User already in invite list");
            return;
        }
        if (isAuthEmail) {
            setSearchedUserError("Cannot search your own email");
            return;
        }
        const response = await (0,_utils_api_users__WEBPACK_IMPORTED_MODULE_3__/* .getUserByEmail */ .CX)(email);
        if (response.error === true && response.errorCode === 1001) {
            setSearchedUserError(response.payload);
        }
        if (response.error === false) {
            setInviteList([
                response.payload,
                ...inviteList
            ]);
            setSearchInput("");
            setSearchedUserError(null);
        }
    };
    const removeUserFromInviteList = (user)=>{
        setInviteList(inviteList.filter((u)=>u.id !== user.id));
    };
    const handleCreateGroup = async (team)=>{
        if (validateForm()) {
            const role = form.role === "Create Role" ? form.custom : form.role;
            const createdGroup = await (0,_utils_api_group__WEBPACK_IMPORTED_MODULE_4__/* .createGroup */ .sS)(authUser, form.name, role, team, inviteList);
            setSentInvites([
                ...inviteList,
                ...sentInvites
            ]);
            setGroups([
                ...groups,
                createdGroup
            ]);
            setAuthLayout(true);
            router.push(`/teams/${team.id}/groups/${createdGroup.id}/chat`);
        } else {
            console.log("Error");
        }
    };
    const fetchUsersByPosition = async (position)=>{
        const users = await (0,_utils_api_users__WEBPACK_IMPORTED_MODULE_3__/* .getUsersByPosition */ .Jy)(position);
        setSuggestedUsers(users);
        return users;
    };
    const handleSearchInput = (e)=>{
        setSearchInput(e.target.value);
    // const searchResults = allUsers.filter(
    //   (user) =>
    //     user.username.toLowerCase().match(e.target.value.toLowerCase()) ||
    //     user.username.toUpperCase().match(e.target.value.toUpperCase()) ||
    //     user.name.toUpperCase().match(e.target.value.toUpperCase()) ||
    //     user.name.toUpperCase().match(e.target.value.toUpperCase())
    // );
    // setSearchedUsers(searchResults);
    };
    return {
        form,
        handleInputChange,
        handleCreateGroup,
        fetchUsersByPosition,
        suggestedUsers,
        removeUserFromInviteList,
        inviteList,
        searchInput,
        searchUser,
        handleSearchInput,
        searchedUser,
        searchedUserError,
        groups,
        setGroups,
        createGroupPopup,
        setCreateGroupPopup
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCreateGroup);


/***/ }),

/***/ 9842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2767);
/* harmony import */ var _utils_api_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2548);
/* harmony import */ var _utils_api_teams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6123);
/* harmony import */ var _context_TeamsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5008);






const useCreateTeam = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { authUser, setAuthLayout } = (0,_context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .aC)();
    const [sentInvites, setSentInvites] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [sidebarTeams, setSidebarTeams] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    //   const {setSidebarTeams, teams} = useTeams()
    const [inviteList, setInviteList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [searchedUser, setSearchedUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [searchedUserError, setSearchedUserError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [suggestedUsers, setSuggestedUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        role: "",
        custom: "",
        name: ""
    });
    const [createTeamPopup, setCreateTeamPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleInputChange = (e)=>{
        setForm({
            ...form,
            [e.currentTarget.name.toLowerCase()]: e.currentTarget.value
        });
    };
    const validateForm = ()=>{
        if (form.name.length === 0) {
            return false;
        } else {
            if (form.role === "Create Role" && form.custom.length === 0) {
                return false;
            }
        }
        return true;
    };
    const searchUser = async (email)=>{
        const inInviteList = inviteList.find((user)=>user.email === email);
        const isAuthEmail = email === authUser.email;
        if (inInviteList) {
            setSearchedUserError("User already in invite list");
            return;
        }
        if (isAuthEmail) {
            setSearchedUserError("Cannot search your own email");
            return;
        }
        const response = await (0,_utils_api_users__WEBPACK_IMPORTED_MODULE_3__/* .getUserByEmail */ .CX)(email);
        if (response.error === true && response.errorCode === 1001) {
            setSearchedUserError(response.payload);
        }
        if (response.error === false) {
            setInviteList([
                response.payload,
                ...inviteList
            ]);
            setSearchInput("");
            setSearchedUserError(null);
        }
    };
    const removeUserFromInviteList = (user)=>{
        setInviteList(inviteList.filter((u)=>u.id !== user.id));
    };
    const handleCreateTeam = async ()=>{
        if (validateForm()) {
            const role = form.role === "Create Role" ? form.custom : form.role;
            const createdTeam = await (0,_utils_api_teams__WEBPACK_IMPORTED_MODULE_4__/* .createTeam */ .Cm)(authUser, form.name, role, inviteList);
            setSentInvites([
                ...inviteList,
                ...sentInvites
            ]);
            setSidebarTeams([
                ...sidebarTeams,
                createdTeam
            ]);
            setAuthLayout(true);
            setCreateTeamPopup(false);
            router.push(`/teams/${createdTeam.id}/chat`);
        } else {
            console.log("Error");
        }
    };
    const fetchUsersByPosition = async (position)=>{
        const users = await (0,_utils_api_users__WEBPACK_IMPORTED_MODULE_3__/* .getUsersByPosition */ .Jy)(position);
        setSuggestedUsers(users);
        return users;
    };
    const handleSearchInput = (e)=>{
        setSearchInput(e.target.value);
    // const searchResults = allUsers.filter(
    //   (user) =>
    //     user.username.toLowerCase().match(e.target.value.toLowerCase()) ||
    //     user.username.toUpperCase().match(e.target.value.toUpperCase()) ||
    //     user.name.toUpperCase().match(e.target.value.toUpperCase()) ||
    //     user.name.toUpperCase().match(e.target.value.toUpperCase())
    // );
    // setSearchedUsers(searchResults);
    };
    return {
        form,
        handleInputChange,
        handleCreateTeam,
        fetchUsersByPosition,
        suggestedUsers,
        removeUserFromInviteList,
        inviteList,
        searchInput,
        searchUser,
        handleSearchInput,
        searchedUser,
        searchedUserError,
        sidebarTeams,
        setSidebarTeams,
        createTeamPopup,
        setCreateTeamPopup
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCreateTeam);


/***/ }),

/***/ 8016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./components/TextEditor/TextEditor.css
var TextEditor = __webpack_require__(8137);
// EXTERNAL MODULE: ./context/auth/AuthContext.js
var AuthContext = __webpack_require__(2767);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./context/TeamsContext.js
var TeamsContext = __webpack_require__(5008);
;// CONCATENATED MODULE: ./components/layout/Navbar/useNavbar.js




const useNavbar = ()=>{
    const router = (0,router_.useRouter)();
    const { getTeams } = (0,TeamsContext/* useTeams */.y2)();
    const { notifications } = (0,AuthContext/* useAuth */.aC)();
    const [avatarPopup, setAvatarPopup] = (0,external_react_.useState)(false);
    const [notificationPopup, setNotificationPopup] = (0,external_react_.useState)(false);
    const [teamsPopup, setTeamsPopup] = (0,external_react_.useState)(false);
    const [teamHeader, setTeamHeader] = (0,external_react_.useState)(null);
    const openAvatarPopup = ()=>setAvatarPopup(true);
    const closeAvatarPopup = ()=>setAvatarPopup(false);
    const openNotificationPopup = ()=>setNotificationPopup(true);
    const closeNotificationPopup = ()=>setNotificationPopup(false);
    const openTeamsPopup = ()=>setTeamsPopup(true);
    const closeTeamsPopup = ()=>setTeamsPopup(false);
    const onMount = async ()=>{
        const teams = await getTeams();
        const match = teams?.find((team)=>team.id === router.query.teamId);
        if (match) setTeamHeader(match.name);
        else setTeamHeader("Teams");
    };
    const routeTeam = (team)=>{
        router.push(`/teams/${team.id}`);
        setTeamsPopup(false);
        setTeamHeader(team.name);
    };
    const routeTeams = ()=>{
        router.push("/teams");
        setTeamsPopup(false);
    };
    return {
        avatarPopup,
        notificationPopup,
        teamsPopup,
        teamHeader,
        notifications,
        setAvatarPopup,
        setTeamsPopup,
        setTeamHeader,
        openAvatarPopup,
        closeAvatarPopup,
        openNotificationPopup,
        closeNotificationPopup,
        openTeamsPopup,
        closeTeamsPopup,
        onMount,
        routeTeam,
        routeTeams
    };
};
/* harmony default export */ const Navbar_useNavbar = (useNavbar);

// EXTERNAL MODULE: ./utils/api/tasks.js
var api_tasks = __webpack_require__(7909);
// EXTERNAL MODULE: ./utils/api/teams.js
var api_teams = __webpack_require__(6123);
// EXTERNAL MODULE: ./utils/api/group.js
var api_group = __webpack_require__(8540);
;// CONCATENATED MODULE: ./components/tasks/CreateTasksForm.jsx







const CreateTasksForm = ({ closeModal, setSubmitted, setInput, input, submitted, task })=>{
    const { authUser } = (0,AuthContext/* useAuth */.aC)();
    const [teams, setTeams] = (0,external_react_.useState)([]);
    const [team, setTeam] = (0,external_react_.useState)(null);
    const [groups, setGroups] = (0,external_react_.useState)([]);
    const [group, setGroup] = (0,external_react_.useState)(null);
    const router = (0,router_.useRouter)();
    const [header, setHeader] = (0,external_react_.useState)("");
    const [selected, setSelected] = (0,external_react_.useState)("");
    const route = router.pathname;
    const submitTasks = (e)=>{
        e.preventDefault();
        if (input.length === 0) return;
        if (team !== null && group === null) {
            (0,api_tasks/* createTask */.vr)(authUser, team, input);
            setSubmitted(true);
            closeModal();
        }
        if (team !== null && group !== null) {
            (0,api_tasks/* createTask */.vr)(authUser, team, group, input);
            setSubmitted(true);
            closeModal();
        }
    };
    const selectTeam = async (teamId)=>{
        const groups = await (0,api_group/* fetchGroups */.bt)(teamId, authUser.id);
        const team = teams.find((team)=>team.id === teamId);
        setTeam(team);
        if (groups.length === 0) {
            setHeader(`Create your task for team - ${team.name}`);
            return;
        }
        setGroups(groups);
        setHeader("Groups");
    };
    const selectGroup = async (groupId)=>{
        const group = groups.find((group)=>group.id === groupId);
        setGroup(group);
        setHeader(`Create your task for group - ${group.name}`);
    };
    console.log("router: ", router);
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            const teams = await (0,api_teams/* getAuthsTeams */.xt)();
            setTeams(teams);
            setHeader("Teams");
        };
        fetchData();
    // if (router.query.teamId) {
    //   setHeader(team.name);
    // }
    // if (router.query.groupId) {
    //   const group = groups.find((group) => group.id === router.query.groupId);
    //   setHeader(group.name);
    // }
    }, []);
    console.log("TassssK; ", task);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mb-5",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex items-center justify-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "bg-blue-100 mb-5 rounded-lg inline-block px-5 py-1 font-bold absolute top-7 text-blue-400",
                            children: header
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "grid gap-4 grid-cols-12 ",
                        children: header === "Teams" && !submitted ? teams.map((team)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                onClick: ()=>selectTeam(team.id),
                                className: " flex flex-col items-center justify-center col-span-3 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-400 font-bold rounded-full",
                                        children: "T"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-gray-400 text-sm",
                                        children: team.name
                                    })
                                ]
                            }, team.id)) : header === "Groups" && !submitted ? groups.map((group)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                onClick: ()=>selectGroup(group.id),
                                className: " flex flex-col items-center justify-center col-span-3 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-400 font-bold rounded-full",
                                        children: "T"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-gray-400 text-sm text-center",
                                        children: group.name
                                    })
                                ]
                            }, group.id)) : null
                    })
                ]
            }),
            header !== "Groups" && header !== "Teams" && header !== "" || submitted && /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "px-4 py-2 bg-white  dark:bg-gray-800",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    for: "editor",
                                    className: "sr-only",
                                    children: "Publish post"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    id: "editor",
                                    rows: "8",
                                    className: "block w-full px-0 text-sm text-gray-800 focus:outline-none bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400",
                                    placeholder: "What are you working on today?",
                                    required: true
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        onClick: submitTasks,
                        type: "submit",
                        className: "inline-flex items-center px-10 py-2.5 text-sm font-medium text-center text-white bg-blue-400 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-600 transition ease-in-out duration-200",
                        children: "Post"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const tasks_CreateTasksForm = (CreateTasksForm);

// EXTERNAL MODULE: ./components/layout/Modal.jsx
var Modal = __webpack_require__(8578);
;// CONCATENATED MODULE: ./components/buttons/CheckButton.tsx


const CheckButtons = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4.5 12.75l6 6 9-13.5"
        })
    });
};
/* harmony default export */ const CheckButton = (CheckButtons);

;// CONCATENATED MODULE: ./components/buttons/SubmitTasksButton.jsx





const SubmitTasksButton = (submitted, setSubmitted, task, setTask)=>{
    const [showModal, setShowModal] = (0,external_react_.useState)(false);
    const [hover, setHover] = (0,external_react_.useState)(false);
    const [input, setInput] = (0,external_react_.useState)("");
    const openModal = ()=>{
        setShowModal(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "w-full",
        children: [
            submitted ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                onClick: openModal,
                onMouseOver: ()=>setHover(true),
                onMouseOut: ()=>setHover(false),
                className: "flex py-1 items-center pl-6 space-x-2 bg-blue-400 hover:bg-yellow-400 text-white cursor-pointer transition ease-in-out duration-200",
                children: [
                    " ",
                    hover ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: " flex items-center space-x-8 transition ease-in-out cursor-pointer duration-200",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: "Edit Tasks"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: " flex items-center space-x-8 transition ease-in-out cursor-pointer duration-200",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: "w-6 h-6",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: "Tasks Submitted "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(CheckButton, {})
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "py-1 pl-6 flex items-center space-x-8 text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white transition ease-in-out cursor-pointer duration-200",
                onClick: openModal,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: "w-6 h-6",
                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        })
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: "Submit Today's Tasks"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Modal/* default */.Z, {
                show: showModal,
                onClose: ()=>setShowModal(false),
                children: /*#__PURE__*/ jsx_runtime.jsx(tasks_CreateTasksForm, {
                    setInput: setInput,
                    setSubmitted: setSubmitted,
                    submitted: submitted,
                    task: task,
                    input: input,
                    closeModal: ()=>setShowModal(false)
                })
            })
        ]
    });
};
/* harmony default export */ const buttons_SubmitTasksButton = (SubmitTasksButton);

;// CONCATENATED MODULE: ./components/buttons/ClockButton.tsx




const ClockButton = ()=>{
    const [hover, setHover] = (0,external_react_.useState)(false);
    const { authUser, goOffline, goOnline } = (0,AuthContext/* useAuth */.aC)();
    console.log("Auth: ", authUser);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "w-full text-sm",
        children: authUser.onlineStatus === "online" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            onMouseOver: ()=>setHover(true),
            onMouseOut: ()=>setHover(false),
            onClick: goOffline,
            className: `py-1 flex space-x-8 items-center pl-6  bg-green-400 hover:bg-red-500 text-white transition ease-in-out cursor-pointer duration-200`,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                }),
                hover ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                    children: "Clock Out"
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: "Clocked In"
                        }),
                        " ",
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime.jsx(CheckButton, {})
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            onClick: goOnline,
            className: `py-1 hover:bg-green-400 flex pl-6 items-center border border-green-400 text-green-400 hover:text-white transition ease-in-out cursor-pointer duration-200`,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6 mr-8",
                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                }),
                "Clock In "
            ]
        })
    });
};
/* harmony default export */ const buttons_ClockButton = (ClockButton);

;// CONCATENATED MODULE: ./components/Clock.tsx




const Clock = ()=>{
    const { authUser } = (0,AuthContext/* useAuth */.aC)();
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: " w-full  ",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "",
            children: /*#__PURE__*/ jsx_runtime.jsx(buttons_ClockButton, {})
        })
    });
};
/* harmony default export */ const components_Clock = (Clock);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./components/users/AvatarPopup.jsx








const AvatarPopup = ()=>{
    const { logout, authUser } = (0,AuthContext/* useAuth */.aC)();
    const router = (0,router_.useRouter)();
    const [taskSubmitted, setTaskSubmitted] = (0,external_react_.useState)(false);
    const [task, setTask] = (0,external_react_.useState)(null);
    const handleLogout = ()=>{
        logout();
        router.push("/");
    };
    const taskCreatedAt = (task)=>{
        return external_moment_default().utc(task.createdAt.seconds * 1000).format("MM DD YY");
    };
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            let now = external_moment_default()().format("MM DD YY");
            let tasks = await (0,api_tasks/* getUsersTask */.Bk)(authUser.id);
            const taskPosted = tasks.find((task)=>taskCreatedAt(task) === now);
            console.log("Task Posted: ", taskPosted);
            if (taskPosted) {
                setTaskSubmitted(true);
                setTask(taskPosted);
            } else {
                setTaskSubmitted(false);
                setTask(null);
            }
        };
        fetchData();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "w-full flex flex-col text-sm shadow rounded bg-white p-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex  space-x-4 ",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            onClick: ()=>router.push(`/profile/${authUser.username}`),
                            className: "h-16 w-16 rounded-full cursor-pointer",
                            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "font-bold",
                                children: authUser.name
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-gray-500",
                                children: authUser.email
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex flex-col space-x-4",
                                children: authUser?.onlineHistory?.length === 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-red-500 font-bold",
                                    children: "Offline"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "text-gray-500",
                                            children: authUser.onlineStatus === "online" ? "Online at" : "Offline at"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: `text-${authUser.onlineStatus === "online" ? "green" : "red"}-500 font-bold`,
                                            children: authUser.onlineHistory.slice(-1).pop() !== undefined && authUser.onlineHistory.slice(-1).pop()
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex mt-4 group items-center  w-full",
                children: /*#__PURE__*/ jsx_runtime.jsx(components_Clock, {})
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mt-4",
                children: /*#__PURE__*/ jsx_runtime.jsx(buttons_SubmitTasksButton, {
                    submitted: taskSubmitted,
                    setSubmitted: setTaskSubmitted,
                    task: task,
                    setTask: setTask
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                onClick: handleLogout,
                className: `flex mt-4 group items-center pl-6 space-x-8 bg-gray-100 hover:bg-blue-100 py-1 transition ease-in-out cursor-pointer duration-200`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: `w-6 h-6 cursor-pointer text-gray-400 group-hover:text-blue-400 transition ease-in-out duration-200`,
                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-gray-500 group-hover:text-blue-400 transition ease-in-out cursor-pointer duration-200",
                        children: "Sign out"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const users_AvatarPopup = (AvatarPopup);

// EXTERNAL MODULE: ./components/Popup.jsx + 1 modules
var Popup = __webpack_require__(6006);
// EXTERNAL MODULE: ./utils/api/invites.js
var invites = __webpack_require__(7157);
;// CONCATENATED MODULE: ./components/notifications/InviteNotification.jsx





const InviteNotification = ({ notification, decrementCount })=>{
    const { authUser } = (0,AuthContext/* useAuth */.aC)();
    const { addTeam } = (0,TeamsContext/* useTeams */.y2)();
    const handleAcceptInvite = async ()=>{
        await (0,invites/* acceptTeamInvite */.pr)(notification.id, authUser, notification.team.id);
        addTeam(notification.team);
        decrementCount(1);
    };
    if (notification.target === "team") {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-between px-5 py-2 hover:bg-gray-800 transition ease-in-out cursor-pointer duration-200 ",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "text-gray-400 flex items-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center space-x-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-white",
                                children: notification?.team.name
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: " sent you an invite to their team."
                            })
                        ]
                    })
                }),
                notification.status === "pending" ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                    onClick: handleAcceptInvite,
                    className: "bg-green-500 font-semibold px-3 rounded-sm text-sm text-white cursor-pointer hover:bg-green-700",
                    children: "Join"
                }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "text-gray-400",
                    children: "Joined"
                })
            ]
        });
    }
    if (notification.target === "group") {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-between px-5 py-2 hover:bg-gray-100 transition ease-in-out cursor-pointer duration-200 border-b",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        "Team ",
                        notification.team.name,
                        " sent you an Invite to Group",
                        " ",
                        notification.group.name,
                        "."
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "border border-green-500 font-semibold px-3 py-1 text-sm text-white cursor-pointer rounded-md",
                    children: "Join"
                })
            ]
        });
    }
//   return (
//     <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 transition ease-in-out cursor-pointer duration-200 border-b">
//       {/* <div className="text-gray-400 flex items-center space-x-3">
//       <div>{teamName}</div> {groupName && <div>-</div>}{" "}
//       {groupName && <div>{groupName}</div>}
//     </div> */}
//       <div className="text-gray-400 flex items-center space-x-3">
//         <div>{teamName}</div> {groupName && <div>-</div>}{" "}
//         {groupName && <div>{groupName}</div>}
//       </div>
//       <div className="bg-green-500 font-semibold px-3 py-1 text-sm text-white cursor-pointer rounded-md">
//         Join
//       </div>
//     </div>
//   );
};
/* harmony default export */ const notifications_InviteNotification = (InviteNotification);

;// CONCATENATED MODULE: ./components/notifications/TaskNotification.jsx




const TaskNotification = ({ notification })=>{
    const { authUser } = (0,AuthContext/* useAuth */.aC)();
    if (notification.target === "team") {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "flex items-center justify-between px-5 py-2 hover:bg-gray-800 transition ease-in-out cursor-pointer duration-200 ",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "text-gray-400 flex items-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center space-x-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-white",
                            children: notification?.teamName
                        }),
                        " ",
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                " assigned you to task: ",
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "text-white",
                                    children: notification.taskName
                                })
                            ]
                        })
                    ]
                })
            })
        });
    }
    if (notification.target === "group") {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "flex items-center justify-between px-5 py-2 hover:bg-gray-100 transition ease-in-out cursor-pointer duration-200 border-b",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    "Group ",
                    notification.groupName,
                    " from ",
                    notification.teamName,
                    " assigned you task: ",
                    notification.taskName,
                    ".",
                    " "
                ]
            })
        });
    }
//   return (
//     <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 transition ease-in-out cursor-pointer duration-200 border-b">
//       {/* <div className="text-gray-400 flex items-center space-x-3">
//       <div>{teamName}</div> {groupName && <div>-</div>}{" "}
//       {groupName && <div>{groupName}</div>}
//     </div> */}
//       <div className="text-gray-400 flex items-center space-x-3">
//         <div>{teamName}</div> {groupName && <div>-</div>}{" "}
//         {groupName && <div>{groupName}</div>}
//       </div>
//       <div className="bg-green-500 font-semibold px-3 py-1 text-sm text-white cursor-pointer rounded-md">
//         Join
//       </div>
//     </div>
//   );
};
/* harmony default export */ const notifications_TaskNotification = (TaskNotification);

;// CONCATENATED MODULE: ./components/notifications/NotificationItem.jsx




const NotificationItem = ({ notification, decrementCount })=>{
    if (notification.type === "invite") {
        return /*#__PURE__*/ jsx_runtime.jsx(notifications_InviteNotification, {
            notification: notification,
            decrementCount: decrementCount
        });
    }
    if (notification.type === "task") {
        return /*#__PURE__*/ jsx_runtime.jsx(notifications_TaskNotification, {
            notification: notification
        });
    }
// return (
//   <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 transition ease-in-out cursor-pointer duration-200 border-b">
//     {/* <div className="text-gray-400 flex items-center space-x-3">
//       <div>{teamName}</div> {groupName && <div>-</div>}{" "}
//       {groupName && <div>{groupName}</div>}
//     </div> */}
//     <div className="bg-green-500 font-semibold px-3 py-1 text-sm text-white cursor-pointer rounded-md">
//       Join
//     </div>
//   </div>
// );
};
/* harmony default export */ const notifications_NotificationItem = (NotificationItem);

;// CONCATENATED MODULE: ./components/notifications/NotificationList.jsx




const NotificationList = ({ notifications, decrementCount })=>{
    const teamInvites = [
        {
            id: 1,
            to: "3w43tt33",
            from: "34355w",
            type: "invite",
            status: "pending",
            target: "team",
            teamName: "Team 1"
        },
        {
            id: 2,
            to: "3w43tt33",
            from: "34355w",
            type: "invite",
            status: "pending",
            target: "team",
            teamName: "Team 1"
        },
        {
            id: 3,
            to: "3w43tt33",
            from: "34355w",
            type: "invite",
            status: "pending",
            target: "team",
            teamName: "Team 1"
        },
        {
            id: 4,
            to: "3w43tt33",
            from: "34355w",
            type: "invite",
            status: "pending",
            target: "team",
            teamName: "Team 1"
        }
    ];
    const groupInvites = [
        {
            id: 1,
            to: "3w43tt33",
            from: "34355w",
            type: "invite",
            status: "pending",
            target: "group",
            teamName: "Team 1",
            groupName: "Group 1"
        },
        {
            id: 2,
            to: "3w43tt33",
            from: "34355w",
            type: "invite",
            status: "pending",
            target: "group",
            teamName: "Team 1",
            groupName: "Group 1"
        },
        {
            id: 3,
            to: "3w43tt33",
            from: "34355w",
            type: "invite",
            status: "pending",
            target: "group",
            teamName: "Team 1",
            groupName: "Group 1"
        },
        {
            id: 4,
            to: "3w43tt33",
            from: "34355w",
            type: "invite",
            status: "pending",
            target: "group",
            teamName: "Team 1",
            groupName: "Group 1"
        }
    ];
    (0,external_react_.useEffect)(()=>{
        const taskAssignments = notifications.filter((notification)=>notification.type === "task" && notification.new);
        decrementCount(taskAssignments.length);
        (0,api_tasks/* markNotificationsAsOld */.QC)(taskAssignments);
        console.log("Task Assignments: ", taskAssignments);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "bg-gray-900 h-96 z-50 overflow-scroll",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "font-semibold text-gray-200 px-3 py-2",
                    children: "Notifications"
                }),
                notifications.map((notification)=>/*#__PURE__*/ jsx_runtime.jsx(notifications_NotificationItem, {
                        notification: notification,
                        decrementCount: decrementCount
                    }))
            ]
        })
    });
};
/* harmony default export */ const notifications_NotificationList = (NotificationList);

;// CONCATENATED MODULE: ./components/layout/Navbar/NotificationIcon.jsx


const NotificationIcon = ({ openPopup })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        onClick: openPopup,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "white",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-6 h-6 md:w-8 h-8 cursor-pointer ",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        })
    });
};
/* harmony default export */ const Navbar_NotificationIcon = (NotificationIcon);

// EXTERNAL MODULE: ./components/ProtectedComponent.jsx
var ProtectedComponent = __webpack_require__(2514);
// EXTERNAL MODULE: ./utils/api/users.js
var users = __webpack_require__(2548);
// EXTERNAL MODULE: ./firebase/config.js
var config = __webpack_require__(2606);
// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__(6058);
// EXTERNAL MODULE: external "antd/lib/notification"
var notification_ = __webpack_require__(3528);
;// CONCATENATED MODULE: ./components/layout/Navbar/Navbar.jsx















const user = {
    id: 1,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "joevasquez344@gmail.com",
    name: "Joe",
    username: "Zook_sc",
    status: "Clocked In"
};
const Navbar = ({ mobileSidebar, openMobileSidebar, closeMobileSidebar })=>{
    const { avatarPopup, notificationPopup, teamHeader, teamsPopup, // notifications,
    onMount, routeTeam, routeTeams, openAvatarPopup, closeAvatarPopup, openNotificationPopup, closeNotificationPopup, openTeamsPopup, closeTeamsPopup } = Navbar_useNavbar();
    const { teams } = (0,TeamsContext/* useTeams */.y2)();
    const { authUser, authLayout, loading } = (0,AuthContext/* useAuth */.aC)();
    const [invites, setInvites] = (0,external_react_.useState)([]);
    const [notifications, setNotifications] = (0,external_react_.useState)([]);
    const [notificationCount, setNotificationCount] = (0,external_react_.useState)(null);
    const router = (0,router_.useRouter)();
    // const getInvites = async () => {
    //   // const user = await getUserById(authUser.id);
    //   onSnapshot(collection(db, `users/${authUser.id}/invites`), (snapshot) => {
    //     const arr = [];
    //     snapshot.forEach((doc) => {
    //       arr.push({ id: doc.id, ...doc.data(), type: "invite" });
    //     });
    //     setInvites(arr);
    //   });
    // };
    const notificationsListener = async ()=>{
        (0,firestore_.onSnapshot)((0,firestore_.collection)(config.db, `users/${authUser.id}/notifications`), async (snapshot)=>{
            let ids = [];
            snapshot.docs.forEach((d)=>ids.push(d.id));
            let notifications = await Promise.all(ids.map(async (id)=>await (0,firestore_.getDoc)((0,firestore_.doc)(config.db, `notifications/${id}`))));
            notifications = notifications.map((notification)=>({
                    id: notification.id,
                    ...notification.data()
                }));
            setNotifications(notifications);
            setNotificationCount(notifications.length);
        });
    };
    const getNotifications = async ()=>{
        const ref = (0,firestore_.collection)(config.db, `users/${authUser.id}/notifications`);
        const snapshot = await (0,firestore_.getDocs)(ref);
        const ids = snapshot.docs.map((d)=>d.id);
        const notifications = await Promise.all(ids.map(async (id)=>await (0,firestore_.getDoc)((0,firestore_.doc)(config.db, `notifications/${id}`))));
        return notifications.map((d)=>({
                id: d.id,
                ...d.data()
            }));
    };
    const decrementCount = (amount)=>{
        setNotificationCount(notificationCount - amount);
    };
    (0,external_react_.useEffect)(()=>{
        const getData = async ()=>{
            if (authUser && authLayout) {
                await notificationsListener();
                const notifications = await getNotifications();
                console.log("Notifi: ", notifications);
                const match = notifications.find((notification)=>notification.new);
                if (match) {
                    const newNotifications = notifications?.filter((notification)=>notification.new);
                    setNotificationCount(newNotifications.length);
                } else {
                    setNotificationCount(0);
                }
            }
        };
        getData();
    }, []);
    const isTeamRoute = router.pathname.split("/")[1];
    console.log("Routeee: ", isTeamRoute);
    console.log("Notifications: ", notifications);
    if (authUser && authLayout) {
        return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `relative flex items-center justify-end bg-gray-800   h-16`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "md:hidden absolute left-5",
                        children: mobileSidebar ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                            onClick: closeMobileSidebar,
                            children: /*#__PURE__*/ jsx_runtime.jsx(MenuIcon, {})
                        }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                            onClick: openMobileSidebar,
                            children: /*#__PURE__*/ jsx_runtime.jsx(MenuIcon, {})
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute left-1/2 -ml-20 flex items-center space-x-3 text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-lg md:text-xl font-bold font-mono",
                                children: "Team Tree"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-5 h-5 md:w-6 md:h-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(ProtectedComponent/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center space-x-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(Popup/* default */.Z, {
                                            closePopup: closeNotificationPopup,
                                            popup: notificationPopup,
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute -left-[550px] top-8 z-50 shadow-lg rounded bg-white w-[550px]",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(notifications_NotificationList, {
                                                    decrementCount: decrementCount,
                                                    notifications: notifications
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute md:bg-gray-900 px-1 text-sm md:text-base rounded-full text-red-500 -right-1 -top-2 md:-top-3 md:right-0",
                                                    children: notificationCount
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(Navbar_NotificationIcon, {
                                                    openPopup: openNotificationPopup
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative ml-auto pr-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            onClick: openAvatarPopup,
                                            className: "h-6 w-6 md:h-10 md:w-10 rounded-full cursor-pointer",
                                            src: user.avatar,
                                            alt: ""
                                        }),
                                        avatarPopup && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            onClick: closeAvatarPopup,
                                            className: "fixed top-0 right-0 left-0 bottom-0 opacity-0 z-40"
                                        }),
                                        avatarPopup && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute -left-72 -bottom-34 z-50 w-80",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(users_AvatarPopup, {})
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
};
const MenuIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-5 h-5 text-white",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        })
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

// EXTERNAL MODULE: ./components/layout/Sidebar/Sidebar.jsx + 5 modules
var Sidebar = __webpack_require__(2732);
// EXTERNAL MODULE: ./components/layout/Sidebar/SidebarContainer.jsx
var SidebarContainer = __webpack_require__(5619);
// EXTERNAL MODULE: ./components/layout/Sidebar/MobileSidebar.jsx
var MobileSidebar = __webpack_require__(7546);
;// CONCATENATED MODULE: ./components/layout/Navbar/MobileNavbar.jsx


const MobileNavbar = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex text-gray-300 items-center justify-evenly",
        children: [
            /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsx(HomeIcon, {})
            }),
            /*#__PURE__*/ _jsx("div", {
                children: "Home"
            }),
            /*#__PURE__*/ _jsx("div", {
                children: "Home"
            }),
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    "   ",
                    /*#__PURE__*/ _jsx(ProfileIcon, {})
                ]
            })
        ]
    });
};
const HomeIcon = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-6 h-6",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        })
    });
};
const ProfileIcon = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-6 h-6",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        })
    });
};
/* harmony default export */ const Navbar_MobileNavbar = ((/* unused pure expression or super */ null && (MobileNavbar)));

// EXTERNAL MODULE: ./components/teams/TeamsHeader.jsx
var TeamsHeader = __webpack_require__(1993);
// EXTERNAL MODULE: external "react-loading-skeleton"
var external_react_loading_skeleton_ = __webpack_require__(9012);
;// CONCATENATED MODULE: ./components/layout/Header.jsx







const Header = ()=>{
    const { teamLoading, groupLoading, group, team } = useTeams();
    const router = useRouter();
    const teamId = router.query.teamId;
    const groupId = router.query.groupId;
    const isTeamScreen = teamId && !groupId ? true : false;
    const isGroupScreen = teamId && groupId ? true : false;
    console.log("Team Id: ", teamId);
    const handleTeamChatRoute = ()=>{
        router.push(`/teams/${teamId}/chat`);
    };
    const handleTeamNotesRoute = ()=>{
        router.push(`/teams/${teamId}/notes`);
    };
    const handleTeamDashboardRoute = ()=>{
        router.push(`/teams/${teamId}`);
    };
    const handleGroupChatRoute = ()=>{};
    const handleGroupNotesRoute = ()=>{};
    const handleGroupDashboardRoute = ()=>{};
    const [tabs, setTabs] = useState([
        {
            id: 1,
            name: "Dashboard",
            teamRoute: (teamId)=>router.push(`/teams/${teamId}`),
            groupRoute: (teamId, groupId)=>router.push(`/teams/${teamId}/groups/${groupId}`),
            active: true
        },
        {
            id: 2,
            name: "Chat",
            teamRoute: (teamId)=>router.push(`/teams/${teamId}/chat`),
            groupRoute: (teamId, groupId)=>router.push(`/teams/${teamId}/groups/${groupId}/chat`),
            active: false
        },
        {
            id: 3,
            name: "Notes",
            teamRoute: (teamId)=>router.push(`/teams/${teamId}/notes`),
            groupRoute: (teamId, groupId)=>router.push(`/teams/${teamId}/groups/${groupId}/notes`),
            active: false
        }
    ]);
    const handleTabClick = (tabClicked)=>{
        const teamId = router.query.teamId;
        const groupId = router.query.groupId;
        const isTeamScreen = teamId && !groupId ? true : false;
        const activeTab = tabs.find((tab)=>tab.active === true);
        const updatedTabs = tabs.map((tab)=>{
            if (tab.id === activeTab.id) {
                tab.active = false;
            }
            if (tab.id === tabClicked.id) {
                tab.active = true;
            }
            return tab;
        });
        const updatedActiveTab = updatedTabs.find((tab)=>tab.active);
        isTeamScreen ? updatedActiveTab.teamRoute(teamId) : updatedActiveTab.groupRoute(teamId, groupId);
        setTabs(updatedTabs);
    };
    useEffect(()=>{
        const chatRoute = router.route.split("/").pop() === "chat" ? true : false;
        const notesRoute = router.route.split("/").pop() === "notes" ? true : false;
        const activeTab = tabs.find((tab)=>tab.active === true);
        if (chatRoute) {
            const updatedTabs = tabs.map((tab)=>{
                if (tab.id === activeTab.id) {
                    tab.active = false;
                }
                if (tab.id === 2) {
                    tab.active = true;
                }
                return tab;
            });
            setTabs(updatedTabs);
        }
        if (notesRoute) {
            const updatedTabs = tabs.map((tab)=>{
                if (tab.id === activeTab.id) {
                    tab.active = false;
                }
                if (tab.id === 3) {
                    tab.active = true;
                }
                return tab;
            });
            setTabs(updatedTabs);
        }
        if (!chatRoute && !notesRoute) {
            const updatedTabs = tabs.map((tab)=>{
                if (tab.id === activeTab.id) {
                    tab.active = false;
                }
                if (tab.id === 1) {
                    tab.active = true;
                }
                return tab;
            });
            setTabs(updatedTabs);
        }
    }, [
        teamId
    ]);
    return /*#__PURE__*/ _jsxs("div", {
        className: " inline-flex w-full h-12 items-center bg-gray-700 shadow-md font-semibold ",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "px-6 mx-6 font-bold text-gray-200 text-lg border-r border-r-gray-400",
                children: [
                    /*#__PURE__*/ _jsx(Loader, {}),
                    isTeamScreen ? team?.name : group?.name
                ]
            }),
            tabs?.map((tab)=>/*#__PURE__*/ _jsx("div", {
                    onClick: ()=>handleTabClick(tab),
                    className: `${tab?.active ? " text-gray-200 bg-gray-900 border-b border-b-green-400" : " text-gray-300"} hover:bg-gray-900 h-full  px-7 flex items-center justify-center  transition ease-in-out cursor-pointer duration-200`,
                    children: tab?.name
                }, tab?.id))
        ]
    });
};
/* harmony default export */ const layout_Header = ((/* unused pure expression or super */ null && (Header)));
const Loader = ()=>{
    const { teamLoading, groupLoading, group, team } = useTeams();
    const router = useRouter();
    const teamId = router.query.teamId;
    const groupId = router.query.groupId;
    const isTeamScreen = teamId && !groupId ? true : false;
    const isGroupScreen = teamId && groupId ? true : false;
    if (isTeamScreen) {
        teamLoading && /*#__PURE__*/ _jsx(Skeleton, {
            className: "h-6",
            baseColor: "rgb(31 41 55)",
            count: 1,
            width: "200px",
            highlightColor: "rgb(55 65 81)",
            enableAnimation: true,
            direction: "rtl",
            duration: 1
        });
    }
    if (isGroupScreen) {
        groupLoading && /*#__PURE__*/ _jsx(Skeleton, {
            className: "h-6",
            baseColor: "rgb(31 41 55)",
            count: 1,
            width: "200px",
            highlightColor: "rgb(55 65 81)",
            enableAnimation: true,
            direction: "rtl",
            duration: 1
        });
    }
};

;// CONCATENATED MODULE: ./pages/_app.jsx




// import type { AppProps } from 'next/app'











function MyApp({ Component, pageProps }) {
    const router = (0,router_.useRouter)();
    const [mobileSidebar, setMobileSidebar] = (0,external_react_.useState)(false);
    const openMobileSidebar = ()=>setMobileSidebar(true);
    const closeMobileSidebar = ()=>setMobileSidebar(false);
    return /*#__PURE__*/ jsx_runtime.jsx(AuthContext/* AuthProvider */.Ho, {
        children: /*#__PURE__*/ jsx_runtime.jsx(TeamsContext/* TeamsProvider */.b9, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                //  style={{backgroundColor: "#2c2f33"}}
                className: "h-screen fixed bg-gray-900 w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime.jsx(Navbar_Navbar, {
                            mobileSidebar: mobileSidebar,
                            openMobileSidebar: openMobileSidebar,
                            closeMobileSidebar: closeMobileSidebar
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: " grid grid-cols-12",
                        children: [
                            router.query.teamId && /*#__PURE__*/ jsx_runtime.jsx(SidebarContainer/* default */.Z, {
                                mobileSidebar: mobileSidebar
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "relative col-span-12 sm:col-span-9 2xl:col-span-10 ",
                                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                                    ...pageProps,
                                    mobileSidebarState: mobileSidebar
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "modal-root"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ab: () => (/* binding */ fetchGroupChat),
/* harmony export */   Mf: () => (/* binding */ fetchTeamChat),
/* harmony export */   N2: () => (/* binding */ fetchDirectChat),
/* harmony export */   cm: () => (/* binding */ createGroupChat),
/* harmony export */   kQ: () => (/* binding */ createTeamChat)
/* harmony export */ });
/* unused harmony exports getChatMessages, createChat, createDirectChat */
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6058);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2606);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4386);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5017);




const fetchDirectChat = async (username, teamId, authId)=>{
    const usersRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "users");
    const teamRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}`);
    const isMember = await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .isTeamMember */ .U)(teamId, authId);
    if (!isMember) return;
    const usersQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(usersRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("username", "==", username));
    const usersSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(usersQuery);
    const user = usersSnapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }))[0];
    if (user) {
        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${user.id}`);
        const authRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authId}`);
        const chatsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "chats");
        const chatsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(chatsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("creatorRef", "==", authRef), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("userRef", "==", userRef), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("teamRef", "==", teamRef));
        const chatsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(chatsQuery);
        if (chatsSnapshot.empty) {
            await createDirectChat(user.id, authId);
            const chat = await getChat("dm", user.id, teamId);
            return chat;
        } else {
            const chat = await getChat("dm", user.id, teamId);
            return chat;
        }
    }
};
const fetchTeamChat = async (teamId)=>{
    const teamRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}`);
    const chatsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "chats");
    const chatsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(chatsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("teamRef", "==", teamRef));
    const chatsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(chatsQuery);
    console.log("Team Id: ", teamId);
    const chat = chatsSnapshot.docs.map((chat)=>({
            id: chat.id,
            ...chat.data()
        }))[0];
    const messages = await getChatMessages(chat?.id);
    return {
        ...chat,
        messages
    };
};
const fetchGroupChat = async (groupId)=>{
    const groupRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${groupId}`);
    const chatsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "chats");
    const chatsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(chatsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("groupRef", "==", groupRef));
    const chatsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(chatsQuery);
    const chat = chatsSnapshot.docs.map((chat)=>({
            id: chat.id,
            ...chat.data()
        }))[0];
    const messages = await getChatMessages(chat?.id);
    return {
        ...chat,
        messages
    };
};
const getChatMessages = async (chatId)=>{
    const messagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "messages");
    const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `chats/${chatId}`);
    const messagesQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(messagesRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("chatRef", "==", chatRef), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.orderBy)("createdAt", "asc"));
    const messagesSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(messagesQuery);
    if (messagesSnapshot.empty) return [];
    let messages = await Promise.all(messagesSnapshot.docs.map(async (d)=>{
        return {
            id: d.id,
            ...d.data(),
            user: await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${d.data().userRef.id}`)),
            replyToMessage: await (0,_messages__WEBPACK_IMPORTED_MODULE_3__/* .getReply */ .HU)(d)
        };
    }));
    messages = messages.map((message)=>({
            ...message,
            user: {
                id: message.user.id,
                ...message.user.data()
            }
        }));
    messages = messages.map((message)=>{
        if (message.replyToMessage?.id) {
            const match = messages.find((m)=>m.id === message.replyToMessage.id);
            if (match) {
                if (match.text !== message.replyToText) {
                    message.replyToMessage.isEdited = true;
                } else {
                    message.replyToMessage.isEdited = false;
                }
            }
        }
        return message;
    });
    return messages;
};
const createTeamChat = async (teamId, authId)=>{
    const chatsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "chats");
    const authRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authId}`);
    const teamRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}`);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(chatsRef, {
        teamRef,
        creatorRef: authRef,
        creatorId: authRef.id
    });
};
const createGroupChat = async (groupId, authId)=>{
    const groupRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${groupId}`);
    const chatsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "chats");
    const authRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authId}`);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(chatsRef, {
        groupRef,
        creatorRef: authRef,
        creatorId: authRef.id
    });
};
const createDirectChat = async (userId, authId, teamId)=>{
    const authRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authId}`);
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${userId}`);
    const teamRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}`);
    const chatsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "chats");
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(chatsRef, {
        userRef,
        creatorRef: authRef,
        creatorId: authRef.id,
        teamRef
    });
};
const createChat = async (type, id, teamId, authId)=>{
    const chatRef = collection(db, "chats");
    const authRef = doc(db, `users/${authId}`);
    if (type === "team") {
        const teamRef = doc(db, `teams/${id}`);
    }
    if (type === "group") {
        const groupRef = doc(db, `groups/${id}`);
        await addDoc(chatRef, {
            groupRef,
            creatorRef: authRef,
            creatorId: authRef.id
        });
    }
    if (type === "dm") {
        const userRef = doc(db, `users/${id}`);
        if (teamId) {
            const teamRef = doc(db, `teams/${teamId}`);
            const { id } = await addDoc(chatRef, {
                userRef,
                creatorRef: authRef,
                creatorId: authRef.id,
                teamRef
            });
        }
        return id;
    }
};



/***/ }),

/***/ 8540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JB: () => (/* binding */ getTeamGroups),
/* harmony export */   VL: () => (/* binding */ getGroupById),
/* harmony export */   bt: () => (/* binding */ fetchGroups),
/* harmony export */   no: () => (/* binding */ getUserGroups),
/* harmony export */   rm: () => (/* binding */ getGroupUsers),
/* harmony export */   sS: () => (/* binding */ createGroup)
/* harmony export */ });
/* unused harmony exports addGroupMember, removeGroupMember */
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6058);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2606);
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6417);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4386);




const createGroup = async (authUser, groupName, role, team, inviteList)=>{
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}`);
    const createdGroup = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "groups"), {
        creator: userRef,
        creatorId: authUser.id,
        team: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${team.id}`),
        name: groupName
    });
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${team.id}/groups/${createdGroup.id}`), {});
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${createdGroup.id}/users/${authUser.id}`), {
        role
    });
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}/groups/${createdGroup.id}`), {});
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}/teams/${team.id}/groups/${createdGroup.id}`), {});
    await (0,_chat__WEBPACK_IMPORTED_MODULE_2__/* .createGroupChat */ .cm)(createdGroup.id, authUser.id);
    return {
        id: createdGroup.id,
        name: groupName
    };
};
const getTeamGroups = async (teamId)=>{
    const groupsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}/groups`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(groupsRef);
    const groupIds = snapshot.docs.map((d)=>d.id);
    let groups = await Promise.all(groupIds.map(async (id)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${id}`))));
    return groups.map((group)=>({
            id: group.id,
            ...group.data()
        }));
};
const fetchGroups = async (teamId, authId)=>{
    const groupsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authId}/teams/${teamId}/groups`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(groupsRef);
    const groupIds = snapshot.docs.map((d)=>d.id);
    let groups = await Promise.all(groupIds.map(async (id)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${id}`))));
    return groups.map((group)=>({
            id: group.id,
            ...group.data()
        }));
};
const getGroupById = async (groupId, authId)=>{
    const isMember = await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__/* .isGroupMember */ ._)(groupId, authId);
    if (!isMember) return;
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${groupId}`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(ref);
    if (snapshot.exists()) {
        return {
            id: snapshot.id,
            ...snapshot.data(),
            members: await getGroupUsers(groupId),
            chat: await (0,_chat__WEBPACK_IMPORTED_MODULE_2__/* .fetchGroupChat */ .Ab)(groupId)
        };
    }
};
const addGroupMember = async (userId, teamId, groupId, authId)=>{
    const batch = writeBatch(db);
    const userRef = doc(db, `users/${userId}`);
    const teamRef = doc(db, `teams/${teamId}`);
    const groupRef = doc(db, `groups/${groupId}`);
    const teamUserRef = doc(db, `teams/${teamId}/users/${userId}`);
    const groupUserRef = doc(db, `groups/${groupId}/users/${userId}`);
    const userGroupRef = doc(db, `users/${userId}/groups/${groupId}`);
    const userTeamGroupRef = doc(db, `users/${userId}/teams/${teamId}/groups/${groupId}`);
    const userDoc = await getDoc(userRef);
    const teamDoc = await getDoc(teamRef);
    const groupDoc = await getDoc(groupRef);
    const teamUserDoc = await getDoc(teamUserRef);
    const teamSnapshot = teamDoc.data();
    const teamCreatorId = teamSnapshot.creatorId;
    const groupSnapshot = groupDoc.data();
    const groupCreatorId = groupSnapshot.creatorId;
    const userIsTeamMember = teamUserDoc.exists();
    if (userDoc.exists() && teamDoc.exists() && groupDoc.exists() && (teamCreatorId === authId || groupCreatorId === authId)) {
        if (userIsTeamMember) {
            batch.set(userGroupRef);
            batch.set(userTeamGroupRef);
            batch.set(groupUserRef);
        } else {
            return alert("User does not belong to this team");
        }
    } else {
        return alert("Team, Group, or User does not exist");
    }
};
const removeGroupMember = async (userId, teamId, groupId, authId)=>{
    const batch = writeBatch(db);
    const userRef = doc(db, `users/${userId}`);
    const teamRef = doc(db, `teams/${teamId}`);
    const groupRef = doc(db, `groups/${groupId}`);
    const teamUserRef = doc(db, `teams/${teamId}/users/${userId}`);
    const groupUserRef = doc(db, `groups/${groupId}/users/${userId}`);
    const userGroupRef = doc(db, `users/${userId}/groups/${groupId}`);
    const userTeamGroupRef = doc(db, `users/${userId}/teams/${teamId}/groups/${groupId}`);
    const userDoc = await getDoc(userRef);
    const teamDoc = await getDoc(teamRef);
    const groupDoc = await getDoc(groupRef);
    const teamUserDoc = await getDoc(teamUserRef);
    const teamSnapshot = teamDoc.data();
    const teamCreatorId = teamSnapshot.creatorId;
    const groupSnapshot = groupDoc.data();
    const groupCreatorId = groupSnapshot.creatorId;
    const userIsTeamMember = teamUserDoc.exists();
    if (userDoc.exists() && teamDoc.exists() && groupDoc.exists() && (teamCreatorId === authId || groupCreatorId === authId)) {
        if (userIsTeamMember) {
            batch.delete(userGroupRef);
            batch.delete(userTeamGroupRef);
            batch.delete(groupUserRef);
        } else {
            return alert("User does not belong to this team");
        }
    } else {
        return alert("Team, Group, or User does not exist");
    }
};
const getGroupUsers = async (groupId)=>{
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${groupId}/users`);
    const userSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(userRef);
    let users = userSnapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
    users = await Promise.all(users.map(async (user)=>({
            userInfo: await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${user.id}`)),
            role: user.role
        })));
    users = users.map((user)=>({
            id: user.id,
            ...user.userInfo.data(),
            role: user.role
        }));
    return users;
};
const getUserGroups = async (teamId, authId)=>{
    const groupsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authId}/teams/${teamId}/groups`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(groupsRef);
    const groupIds = snapshot.docs.map((d)=>d.id);
    let groups = await Promise.all(groupIds.map(async (id)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${id}`))));
    groups = await Promise.all(groups.map(async (group)=>({
            id: group.id,
            ...group.data(),
            users: await getGroupUsers(group.id)
        })));
    return groups;
};


/***/ }),

/***/ 4386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ isTeamMember),
/* harmony export */   _: () => (/* binding */ isGroupMember)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6058);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2606);


const isTeamMember = async (teamId, authId)=>{
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}/users/${authId}`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(ref);
    console.log("Snapshot Id: ", snapshot);
    if (snapshot._document !== null) return true;
    else return false;
};
const isGroupMember = async (groupId, authId)=>{
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${groupId}/users/${authId}`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(ref);
    if (snapshot.exists()) return true;
    else return false;
};


/***/ }),

/***/ 7157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IG: () => (/* binding */ sendTeamInvites),
/* harmony export */   pr: () => (/* binding */ acceptTeamInvite)
/* harmony export */ });
/* unused harmony export declineTeamInvite */
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6058);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2606);


const sendTeamInvites = async (inviteList, team, authId)=>{
    // await Promise.all(
    //   inviteList.map(
    //     async (user) =>
    //       await addDoc(collection(db, "invites"), {
    //         from: authId,
    //         to: user.id,
    //         status: "pending",
    //         target: "team",
    //         team,
    //       })
    //   )
    // );
    // await Promise.all(
    //   inviteList.map(
    //     async (user) =>
    //       await addDoc(collection(db, `users/${user.id}/invites`), {
    //         from: authId,
    //         to: user.id,
    //         status: "pending",
    //         target: "team",
    //         team,
    //       })
    //   )
    // );
    const sentInvites = await Promise.all(inviteList.map(async (user)=>{
        const { id } = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "notifications"), {
            type: "invite",
            from: authId,
            to: user.id,
            status: "pending",
            target: "team",
            team,
            new: true
        });
        return {
            inviteId: id,
            to: user.id
        };
    }));
    console.log("Sent Invite: ", sentInvites);
    await Promise.all(sentInvites.map(async (invite)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${invite.to}/notifications/${invite.inviteId}`), {
        })));
};
const acceptTeamInvite = async (notificationId, authUser, teamId)=>{
    // await updateDoc(doc(db, `invites/${inviteId}`), {
    //   status: "accepted",
    // });
    // await updateDoc(doc(db, `users/${authId}/invites/${inviteId}`), {
    //   status: "accepted",
    // });
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `notifications/${notificationId}`), {
        status: "accepted",
        new: false
    });
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}/notifications/${notificationId}`), {
        status: "accepted",
        new: false
    });
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}/teams/${teamId}`), {});
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}/users/${authUser.id}`), {
        role: null,
        username: authUser.username,
        joined: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
    });
};
const declineTeamInvite = async (inviteId, authId)=>{
    await updateDoc(doc(db, `invites/${inviteId}`), {
        status: "declined"
    });
    await updateDoc(doc(db, `users/${authId}/invites/${inviteId}`), {
        status: "declined"
    });
};


/***/ }),

/***/ 5017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Z: () => (/* binding */ deleteMessage),
/* harmony export */   Dk: () => (/* binding */ createGroupReply),
/* harmony export */   HU: () => (/* binding */ getReply),
/* harmony export */   Hd: () => (/* binding */ editMessage),
/* harmony export */   WT: () => (/* binding */ createDirectMessage),
/* harmony export */   dA: () => (/* binding */ createTeamMessage),
/* harmony export */   oB: () => (/* binding */ createTeamReply),
/* harmony export */   yf: () => (/* binding */ createGroupMessage)
/* harmony export */ });
/* unused harmony export getMessageById */
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6058);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2606);


const createTeamMessage = async (authUser, teamId, text, type, chatId)=>{
    const messagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "messages");
    const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `chats/${chatId}`);
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}`);
    const teamRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}`);
    const { id } = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(messagesRef, {
        userRef,
        teamRef,
        chatRef,
        text,
        type,
        replyToMessage: null,
        replyToRef: null,
        replyToText: null,
        createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
        edited: false
    });
    const createdAt = await getMessageTimestamp(id);
    return {
        id,
        user: authUser,
        userRef,
        teamRef,
        chatRef,
        replyToMessage: null,
        replyToRef: null,
        replyToText: null,
        text,
        type,
        replies: [],
        createdAt
    };
};
const createTeamReply = async (authUser, teamId, text, type, replyTo, chatId)=>{
    const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db);
    const messagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "messages");
    const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `chats/${chatId}`);
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}`);
    const teamRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}`);
    const { id } = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(messagesRef, {
        userRef,
        teamRef,
        chatRef,
        text,
        type,
        replyToRef: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `messages/${replyTo.id}`),
        replyToMessage: replyTo,
        replyToText: replyTo.text,
        createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
        edited: false
    });
    const replyToRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `messages/${replyTo.id}/replies/${id}`);
    batch.set(replyToRef, {});
    await batch.commit();
    const createdAt = await getMessageTimestamp(id);
    return {
        id,
        user: authUser,
        userRef,
        teamRef,
        chatRef,
        text,
        type,
        replyToMessage: replyTo,
        replyToText: replyTo.text,
        replyToRef,
        edited: false,
        createdAt
    };
};
const createGroupMessage = async (authUser, groupId, text, type, chatId)=>{
    const messagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "messages");
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}`);
    const groupRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${groupId}`);
    const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `chats/${chatId}`);
    const { id } = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(messagesRef, {
        userRef,
        groupRef,
        chatRef,
        text,
        type,
        replyToRef: null,
        replyToMessage: null,
        replyToText: null,
        createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
        edited: false
    });
    const createdAt = await getMessageTimestamp(id);
    return {
        id,
        user: authUser,
        userRef,
        groupRef,
        chatRef,
        replyToRef: null,
        replyToMessage: null,
        replyToText: null,
        text,
        type,
        replies: [],
        createdAt,
        edited: false
    };
};
const createGroupReply = async (authUser, groupId, text, type, replyTo, chatId)=>{
    const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db);
    const messagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "messages");
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}`);
    const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `chats/${chatId}`);
    const groupRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${groupId}`);
    const { id } = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(messagesRef, {
        userRef,
        groupRef,
        chatRef,
        text,
        type,
        replyToRef: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `messages/${replyTo.id}`),
        replyToMessage: replyTo,
        replyToText: replyTo.text,
        createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
        edited: false
    });
    const replyToRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `messages/${replyTo.id}/replies/${id}`);
    batch.set(replyToRef, {});
    await batch.commit();
    const createdAt = await getMessageTimestamp(id);
    return {
        id,
        user: authUser,
        userRef,
        groupRef,
        chatRef,
        text,
        type,
        replyToRef,
        replyToMessage: replyTo,
        replyToText: replyTo.text,
        edited: false,
        createdAt
    };
};
const createDirectMessage = async (authUser, teamId, text, type, chatId)=>{
    const messagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "messages");
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}`);
    const teamRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}`);
    const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `chats/${chatId}`);
    const { id } = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(messagesRef, {
        userRef,
        teamRef,
        chatRef,
        text,
        type,
        replyToRef: null,
        replyToMessage: null,
        replyToText: null,
        createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
        edited: false
    });
    const createdAt = await getMessageTimestamp(id);
    return {
        id,
        user: authUser,
        userRef,
        teamRef,
        chatRef,
        text,
        type,
        replyToRef: null,
        replyToMessage: null,
        replyToText: null,
        replies: [],
        createdAt,
        edited: false
    };
};
const getMessageById = async (id)=>{
    const ref = doc(db, `messages/${id}`);
    const snapshot = await getDoc(ref);
    const message = {
        id: snapshot.id,
        ...snapshot.data(),
        user: await getDoc(doc(db, `users/${snapshot.data().userRef.id}`)),
        replyTo: await getReply(snapshot)
    };
    return message;
};
const deleteMessage = async (messageId)=>{
    const messageRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `messages/${messageId}`);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)(messageRef);
};
const getMessageTimestamp = async (id)=>{
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `messages/${id}`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(ref);
    const data = snapshot.data();
    const createdAt = data.createdAt;
    return createdAt;
};
const getReply = async (document)=>{
    const data = document.data();
    const replyToRef = data.replyToRef;
    if (replyToRef === null) {
        return null;
    }
    let message = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, replyToRef.path));
    if (message?.exists()) {
        message = {
            id: message.id,
            ...message.data(),
            user: await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${message.data().userRef.id}`))
        };
        message = {
            ...message,
            user: {
                id: message.user.id,
                ...message.user.data()
            }
        };
        return message;
    } else {
        return null;
    }
};
const editMessage = async (messageId, text)=>{
    const messageRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `messages/${messageId}`);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(messageRef, {
        text,
        edited: true
    });
};
// const fetchGroupMessages = async (groupId) => {
//   const messagesRef = collection(db, "messages");
//   const groupRef = doc(db, `groups/${groupId}`);
//   const messagesQuery = query(
//     messagesRef,
//     where("groupRef", "==", groupRef),
//     orderBy("createdAt", "asc")
//   );
//   const messagesSnapshot = await getDocs(messagesQuery);
//   let messages = await Promise.all(
//     messagesSnapshot.docs.map(async (d) => ({
//       id: d.id,
//       ...d.data(),
//       user: await getDoc(doc(db, `users/${d.data().userRef.id}`)),
//       replyTo: await getReply(d),
//     }))
//   );
//   messages = messages.map((message) => ({
//     ...message,
//     user: { id: message.user.id, ...message.user.data() },
//   }));
//   return messages;
// };



/***/ }),

/***/ 7909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bk: () => (/* binding */ getUsersTask),
/* harmony export */   M0: () => (/* binding */ fetchTasksByTeam),
/* harmony export */   QC: () => (/* binding */ markNotificationsAsOld),
/* harmony export */   _5: () => (/* binding */ deleteTask),
/* harmony export */   eT: () => (/* binding */ editTask),
/* harmony export */   vr: () => (/* binding */ createTask)
/* harmony export */ });
/* unused harmony exports getUsersTasks, fetchTasksByGroup, getTaskDetails */
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6058);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2606);
/* harmony import */ var _teams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6123);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2548);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3528);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_4__);





const getTaskDetails = async (taskId, userId)=>{
    const taskRef = doc(db, `tasks/${taskId}`);
    const taskSnapshot = await getDoc(taskRef);
    return {
        id: taskSnapshot.id,
        ...taskSnapshot.data()
    };
};
const getUsersTask = async (userId)=>{
    try {
        const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${userId}/tasks`);
        const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(ref);
        let tasks = await Promise.all(snapshot.docs.map(async (task)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `tasks/${task.id}`))));
        tasks = tasks.map((task)=>({
                id: task.id,
                ...task.data()
            }));
        // const tasksRef = collection(db, "tasks");
        // const tasksQuery = query(tasksRef, where("user" == userRef));
        // const tasksSnapshot = await getDocs(tasksQuery);
        // let tasks = tasksSnapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }));
        console.log("Tasks: ", tasks);
        return tasks;
    } catch (error) {
        console.log("Error: ", error);
    }
};
const getUsersTasks = async (userId)=>{
    const taskIds = collection(db, `users/${userId}/tasks`);
    const tasks = await Promise.all(taskIds.map(async (d)=>await getDoc(doc(db, `tasks/${d.id}`))));
    return tasks.map((task)=>({
            id: task.id,
            ...task.data()
        }));
};
const fetchTaskedUsers = async (task)=>{
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `tasks/${task.id}/users`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(ref);
    let users = await Promise.all(snapshot.docs.map(async (user)=>await (0,_users__WEBPACK_IMPORTED_MODULE_3__/* .getUserById */ .GA)(user.id)));
    return users;
};
const fetchTasksByTeam = async (teamId, authId)=>{
    const team = await (0,_teams__WEBPACK_IMPORTED_MODULE_2__/* .getTeamById */ .mW)(teamId, authId);
    console.log("Team is: ", team);
    if (!team) {
        return {
            error: true
        };
    }
    const teamRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}`);
    const tasksRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "tasks");
    const tasksQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(tasksRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("teamRef", "==", teamRef));
    if (team) {
        let tasks = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(tasksQuery);
        tasks = await Promise.all(tasks.docs.map(async (task)=>({
                id: task.id,
                ...task.data(),
                user: await (0,_users__WEBPACK_IMPORTED_MODULE_3__/* .getUserById */ .GA)(task.data().userRef.id),
                assigned: (await fetchTaskedUsers(task)).filter((user)=>user.username)
            })));
        return {
            team,
            tasks
        };
    }
};
const fetchTasksByGroup = async (groupId)=>{
    const taskIds = collection(db, `groups/${groupId}/tasks`);
    const tasks = await Promise.all(taskIds.map(async (d)=>await getDoc(doc(db, `tasks/${d.id}`))));
    return tasks.map((task)=>({
            id: task.id,
            ...task.data()
        }));
};
const createTask = async (authUser, team, group, taskText, taskName, users)=>{
    const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db);
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}`);
    const teamRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${team.id}`);
    const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "tasks"), {
        userRef,
        teamRef,
        taskText,
        taskName,
        edited: false,
        status: "tasked",
        createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
    });
    const taskRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `tasks/${docRef.id}`);
    let task = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(taskRef);
    let user = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(userRef);
    user = {
        id: user.id,
        ...user.data()
    };
    task = {
        id: task.id,
        ...task.data(),
        user
    };
    // Assigning task to selected users
    await Promise.all(users.map(async (user)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${user.id}/tasks/${task.id}`), {})));
    await Promise.all(users.map(async (user)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `tasks/${task.id}/users/${user.id}`), {})));
    task = {
        ...task,
        assigned: users
    };
    // Assigning task to team
    batch.set((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${team.id}/tasks/${docRef.id}`), {});
    // batch.set(doc(db, `users/${authUser.id}/tasks/${docRef.id}`), {});
    if (group) {
        // Attach task to group
        batch.set((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${group.id}/tasks/${docRef.id}`), {});
        await batch.commit();
    }
    await batch.commit();
    // Notifying selected users of task
    // Note Below
    const sentNotifications = await Promise.all(users.filter((user)=>user.id !== authUser.id).map(async (user)=>{
        console.log("Team Num", team);
        const { id } = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "notifications"), {
            type: "task",
            from: authUser.id,
            to: user.id,
            status: "accepted",
            target: "team",
            teamName: team.name,
            taskName: task.taskName,
            new: true
        });
        console.log("Notification ID: ", id);
        return {
            notificationId: id,
            to: user.id
        };
    }));
    // ==> Note: Whenever a document is added into the Users subcollection: Notifications (users/:userId/notifications), as shown down below, the Navbar
    //       is equipped with a snapshot listener that will listen to this subcollection live and update the Navbar Bell state accordingly
    await Promise.all(sentNotifications.filter((notification)=>notification.to !== authUser.id).map(async (notification)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${notification.to}/notifications/${notification.notificationId}`), {})));
    return task;
};
const markNotificationsAsOld = async (notificationList)=>{
    await Promise.all(notificationList.map(async (notification)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `notifications/${notification.id}`), {
            new: false
        })));
};
const deleteTask = async (team, group, task)=>{
    const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db);
    batch.delete((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `tasks/${task.id}`));
    if (team && !group) {
        batch.delete((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${team.id}/tasks/${task.id}`));
        removeTaskFromUsers(task, task.assigned);
    }
    if (team && group) {
        // Attach task to group
        batch.delete((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `groups/${team.id}/tasks/${task.id}`));
        removeTaskFromUsers(task, task.assigned);
    }
    await batch.commit();
};
// Create & Send notification to users that get unassigned??
const editTask = async (taskName, taskText, task, assignedUsers)=>{
    const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db);
    batch.update((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `tasks/${task.id}`), {
        taskText,
        taskName,
        edited: true,
        status: "tasked"
    });
    await batch.commit();
    const oldAssigned = task.assigned;
    const unchangedUsers = assignedUsers.filter((user)=>{
        const match = oldAssigned.find((u)=>u.id === user.id);
        if (match) {
            return user;
        }
    });
    const addedUsers = assignedUsers.filter((user)=>{
        const match = oldAssigned.find((u)=>u.id === user.id);
        if (!match) {
            return user;
        }
    });
    const removedUsers = oldAssigned.filter((user)=>{
        const match = assignedUsers.find((u)=>u.id === user.id);
        if (!match) {
            return user;
        }
    });
    addTaskToUsers(task, addedUsers);
    removeTaskFromUsers(task, removedUsers);
    return {
        id: task.id,
        userRef: task.userRef,
        teamRef: task.teamRef,
        taskText,
        taskName,
        edited: true,
        status: "tasked",
        assigned: [
            ...addedUsers,
            ...unchangedUsers
        ]
    };
};
const addTaskToUsers = async (task, users)=>{
    await Promise.all(users.map(async (user)=>{
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `tasks/${task.id}/users/${user.id}`), {});
        return user;
    }));
    await Promise.all(users.map(async (user)=>{
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${user.id}/tasks/${task.id}`), {});
        return user;
    }));
};
const removeTaskFromUsers = async (task, users)=>{
    if (users.length > 0) {
        await Promise.all(users.map(async (user)=>{
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `tasks/${task.id}/users/${user.id}`), {});
            return user;
        }));
        await Promise.all(users.map(async (user)=>{
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${user.id}/tasks/${task.id}`), {});
            return user;
        }));
    }
};



/***/ }),

/***/ 6123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cm: () => (/* binding */ createTeam),
/* harmony export */   YY: () => (/* binding */ getTeamMembers),
/* harmony export */   mW: () => (/* binding */ getTeamById),
/* harmony export */   xt: () => (/* binding */ getAuthsTeams),
/* harmony export */   zT: () => (/* binding */ removeTeamMember)
/* harmony export */ });
/* unused harmony exports getGroupQuantity, getTeamMembersQuantity, addTeamMember, teamExists */
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6058);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2606);
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6417);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4386);
/* harmony import */ var _invites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7157);





const createTeam = async (authUser, teamName, authRole, inviteList)=>{
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}`);
    const createdTeam = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "teams"), {
        creator: userRef,
        creatorId: authUser.id,
        name: teamName
    });
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${createdTeam.id}/users/${authUser.id}`), {
        role: authRole,
        username: authUser.username,
        joined: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
    });
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authUser.id}/teams/${createdTeam.id}`), {
        role: authRole
    });
    await (0,_chat__WEBPACK_IMPORTED_MODULE_2__/* .createTeamChat */ .kQ)(createdTeam.id, authUser.id);
    await (0,_invites__WEBPACK_IMPORTED_MODULE_4__/* .sendTeamInvites */ .IG)(inviteList, {
        id: createdTeam.id,
        name: teamName
    }, authUser.id);
    return {
        id: createdTeam.id,
        name: teamName
    };
// batch.set(doc(db, `teams/${createdTeam.id}/users/${authUser.id}`), {
//   role: authRole,
// });
// batch.set(doc(db, `users/${authUser.id}/teams/${createdTeam.id}`));
};
const teamExists = async (teamId)=>{
    const ref = doc(db, `teams/${teamId}`);
    const snapshot = await getDoc(ref);
    if (snapshot.exists() && snapshot._document !== null) {
        return true;
    } else {
        return false;
    }
};
// getTeamMessages is not longer in use, same with getGroupMessages, instead look down below
const getTeamById = async (id, authId)=>{
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${id}`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(ref);
    console.log("Snapyyy: ", snapshot.exists());
    if (snapshot.exists()) {
        const isMember = await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__/* .isTeamMember */ .U)(id, authId);
        if (!isMember) return false;
        let arr = [
            1
        ];
        let team = {
            id: snapshot.id,
            ...snapshot.data()
        };
        team = await Promise.all(arr.map(async (item)=>({
                id: snapshot.id,
                ...snapshot.data(),
                members: await getTeamMembers(snapshot.id, authId)
            })));
        return team[0];
    } else {
        return false;
    }
};
const getAuthsTeams = async (authId)=>{
    const teamDocs = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authId}/teams`);
    const teamSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(teamDocs);
    const teamIds = teamSnapshot.docs.map((d)=>d.id);
    console.log("Ids: ", teamIds);
    // if (teamIds.length === 0) {
    //   return false;
    // }
    let teams = await Promise.all(teamIds.map(async (id)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${id}`))));
    console.log("Teams Before spread: ", teams);
    teams = teams?.map((team)=>({
            id: team.id,
            ...team.data()
        }));
    console.log("Teams After spread: ", teams);
    return teams;
};
const addTeamMember = async (userId, teamId, authId)=>{
    const batch = writeBatch(db);
    const userRef = doc(db, `users/${userId}`);
    const teamRef = doc(db, `teams/${teamId}`);
    const teamUserRef = doc(db, `teams/${teamId}/users/${userId}`);
    const userTeamRef = doc(db, `users/${userId}/teams/${teamId}`);
    const userDoc = await getDoc(userRef);
    const teamDoc = await getDoc(teamRef);
    const teamSnapshot = teamDoc.data();
    const creatorId = teamSnapshot.creatorId;
    if (userDoc.exists() && teamDoc.exists() && creatorId === authId) {
        batch.set(teamUserRef);
        batch.set(userTeamRef);
    } else {
        return alert("Team or User does not exist");
    }
};
const removeTeamMember = async (userId, teamId, authId)=>{
    const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db);
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${userId}`);
    const teamRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}`);
    const teamUserRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}/users/${userId}`);
    const userTeamRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${userId}/teams/${teamId}`);
    const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(userRef);
    const teamDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(teamRef);
    const teamSnapshot = teamDoc.data();
    const creatorId = teamSnapshot.creatorId;
    if (userDoc.exists() && teamDoc.exists() && creatorId === authId) {
        batch.delete(teamUserRef);
        batch.delete(userTeamRef);
        await batch.commit();
        removeUsersTasks(userId, teamId);
    } else {
        return alert("Team or User does not exist");
    }
};
const removeUsersTasks = async (userId, teamId)=>{
    const tasksRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "tasks");
    const teamRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}`);
    const tasksQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(tasksRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("teamRef", "==", teamRef));
    const tasksSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(tasksQuery);
    const taskIds = tasksSnapshot.docs.map((d)=>d.id);
    await Promise.all(taskIds.map(async (id)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${userId}/tasks/${id}`))));
    await Promise.all(taskIds.map(async (id)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `tasks/${id}/users/${userId}`))));
};
const getGroupQuantity = async (teamId)=>{
    const ref = collection(db, `groups`);
    const filter = query(ref, where("team", "==", teamId));
    const snapshot = await getDocs(filter);
    const groups = snapshot.docs.map((group)=>group.id);
    return groups.length;
};
const getTeamMembersQuantity = async (teamId)=>{
    const ref = collection(db, `teams/${teamId}/users`);
    const snapshot = await getDocs(ref);
    const users = snapshot.docs.map((user)=>user.id);
    return users.length;
};
const getTeamMembers = async (teamId)=>{
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${teamId}/users`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(ref);
    const members = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
    let users = await Promise.all(members.map(async (member)=>({
            joined: member.joined,
            role: member.role,
            info: await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${member.id}`))
        })));
    users = users.map((user)=>({
            id: user.info.id,
            ...user.info.data(),
            joined: user.joined
        }));
    console.log("Users: ", users);
    return users;
};



/***/ }),

/***/ 2548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CX: () => (/* binding */ getUserByEmail),
/* harmony export */   GA: () => (/* binding */ getUserById),
/* harmony export */   Jy: () => (/* binding */ getUsersByPosition),
/* harmony export */   dQ: () => (/* binding */ getUserByUsername),
/* harmony export */   ft: () => (/* binding */ fetchUsersWorkedWith),
/* harmony export */   r4: () => (/* binding */ createUser),
/* harmony export */   xH: () => (/* binding */ clockOut),
/* harmony export */   yX: () => (/* binding */ clockIn)
/* harmony export */ });
/* unused harmony export getAppUsers */
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6058);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2606);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _teams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6123);




const getAppUsers = async ()=>{
    const ref = collection(db, "users");
    const snapshot = await getDocs(ref);
    const users = snapshot.docs.map((user)=>({
            id: user.id,
            ...user.data()
        }));
    return users;
};
const fetchUsersWorkedWith = async (teamId, authId)=>{
    const teamsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "teams");
    const teamsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(teamsRef, "");
    const usersTeamsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authId}/teams`);
    const usersTeamsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(usersTeamsRef);
    const usersTeamsIds = usersTeamsSnapshot.docs.map((doc)=>doc.id);
    const members = await (0,_teams__WEBPACK_IMPORTED_MODULE_3__/* .getTeamMembers */ .YY)(teamId);
    const userDocs = await Promise.all(usersTeamsIds.map(async (id)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `teams/${id}/users`))));
    const userIds = [];
    userDocs.forEach((arr)=>{
        arr.docs.forEach((user)=>{
            userIds.push(user.id);
        });
    });
    let users = await Promise.all(userIds.map(async (id)=>await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${id}`))));
    users = users.map((user)=>({
            id: user.id,
            ...user.data()
        }));
    // let usersArr = [];
    // userDocs.forEach((arr) => {
    //   arr.docs.forEach((user) => {
    //     usersArr.push({ id: user.id, ...user.data() });
    //   });
    // });
    users = users.filter((user)=>{
        const isAlreadyMember = members.find((member)=>member.id === user.id);
        if (!isAlreadyMember) {
            return user;
        }
    });
    // usersArr = usersArr.filter((user) => user.id !== authId);
    users = users.filter((user)=>user.id !== authId);
    console.log("USERS: ", users);
    return users;
};
const getUserById = async (userId)=>{
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${userId}`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(ref);
    const user = {
        id: snapshot.id,
        ...snapshot.data()
    };
    return user;
};
const getUserByEmail = async (email)=>{
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "users");
    const filter = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(ref, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("email", "==", email));
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(filter);
    if (snapshot.empty) {
        return {
            error: true,
            errorCode: 1001,
            payload: "User does not exist"
        };
    }
    const user = {
        id: snapshot.docs[0],
        ...snapshot.docs[0].data()
    };
    return {
        error: false,
        payload: user
    };
};
const getUserByUsername = async (username)=>{
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "users");
    const filter = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(ref, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("username", "==", username));
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(filter);
    const user = {
        id: snapshot.docs[0].id,
        ...snapshot.docs[0].data(),
        createdAt: snapshot?.docs[0].data()?.createdAt?.toString()
    };
    return user;
};
const getUsersByPosition = async (position)=>{
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "users");
    const filter = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(ref, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("position", "==", position));
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(filter);
    const users = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
    return users;
};
const createUser = async (user)=>{
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "users", user.id), {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: null,
        username: user.username,
        position: user.position,
        clockedIn: false,
        onlineStatus: "offline",
        onlineHistory: [],
        createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
    });
};
const clockIn = async (authId)=>{
    const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db);
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authId}`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authId}`));
    const data = snapshot.data();
    console.log("Data: ", data);
    const onlineHistory = data?.onlineHistory;
    let time = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("MMMM Do YYYY, h:mm:ss a").split(",")[1];
    const timeOfDay = time.split(" ")[2];
    const hour = time.split(":")[0];
    const minute = time.split(":")[1];
    time = `${hour}:${minute} ${timeOfDay}`;
    console.log("Time: ", time);
    batch.update(userRef, {
        onlineStatus: "online",
        onlineHistory: [
            ...onlineHistory,
            time
        ]
    });
    await batch.commit();
    return time;
};
const clockOut = async (authId)=>{
    const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db);
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authId}`);
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `users/${authId}`));
    const data = snapshot.data();
    console.log("Data: ", data);
    const onlineHistory = data?.onlineHistory;
    let time = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("MMMM Do YYYY, h:mm:ss a").split(",")[1];
    const timeOfDay = time.split(" ")[2];
    const hour = time.split(":")[0];
    const minute = time.split(":")[1];
    time = `${hour}:${minute} ${timeOfDay}`;
    batch.update(userRef, {
        onlineStatus: "offline",
        onlineHistory: [
            ...onlineHistory,
            time
        ]
    });
    await batch.commit();
    return time;
};



/***/ }),

/***/ 8137:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;