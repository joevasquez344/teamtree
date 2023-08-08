"use strict";
exports.id = 196;
exports.ids = [196];
exports.modules = {

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Chat_Chat)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/users/AvatarDefault.jsx


const AvatarDefault = ({ color })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center bg-${color}-500`,
        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "white",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-6 h-6 text-white",
            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            })
        })
    });
};
/* harmony default export */ const users_AvatarDefault = (AvatarDefault);

// EXTERNAL MODULE: ./context/TeamsContext.js
var TeamsContext = __webpack_require__(5008);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/features/Chat/ChatError.jsx


const ChatError = ({ chatName })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "text-white h-screen w-full relative p-5",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "absolute bottom-64",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "text-3xl font-bold mb-4",
                    children: chatName
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center space-x-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: "This is the beginning of chat history with"
                        }),
                        " ",
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "font-semibold text-green-500",
                            children: chatName
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Chat_ChatError = (ChatError);

// EXTERNAL MODULE: external "react-loading-skeleton"
var external_react_loading_skeleton_ = __webpack_require__(9012);
var external_react_loading_skeleton_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_skeleton_);
;// CONCATENATED MODULE: ./components/features/Chat/ChatSkeleton.jsx



const skeletons = [
    1,
    2,
    3,
    4,
    5,
    6
];
const ChatSkeleton = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "px-7 pt-3",
        children: skeletons.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex space-x-3 mb-7",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "w-10 h-10 rounded-full",
                        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_loading_skeleton_default()), {
                            className: "w-full h-full rounded-full",
                            baseColor: "rgb(31 41 55)",
                            count: 1,
                            width: "100%",
                            height: "100%",
                            borderRadius: "500px",
                            highlightColor: "rgb(55 65 81)",
                            enableAnimation: true,
                            direction: "rtl",
                            duration: 1
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "w-1/2",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((external_react_loading_skeleton_default()), {
                                className: "mb-3",
                                baseColor: "rgb(31 41 55)",
                                count: 1,
                                width: "100px",
                                height: "20px",
                                highlightColor: "rgb(55 65 81)",
                                enableAnimation: true,
                                direction: "rtl",
                                duration: 1
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((external_react_loading_skeleton_default()), {
                                baseColor: "rgb(31 41 55)",
                                count: 1,
                                height: "150px",
                                highlightColor: "rgb(55 65 81)",
                                enableAnimation: true,
                                direction: "rtl",
                                duration: 1
                            })
                        ]
                    })
                ]
            }, item))
    });
};
/* harmony default export */ const Chat_ChatSkeleton = (ChatSkeleton);

;// CONCATENATED MODULE: ./components/Message/ReplyToBubbles.jsx


const ReplyToBubbles = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "absolute w-12 top-3 pr-2 flex flex-col items-end  mb-3",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "h-2.5 w-2.5 bg-green-500 mb-1 rounded-full"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "h-1.5 w-1.5 bg-green-400 mb-2 mr-4 rounded-full"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "h-1 w-1 bg-green-300 mx-auto rounded-full"
            })
        ]
    });
};
/* harmony default export */ const Message_ReplyToBubbles = (ReplyToBubbles);

;// CONCATENATED MODULE: ./components/Message/ReplyToEdited.jsx


const ReplyToEdited = ({ message })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `inline-flex ml-12 mb-3   bg-gray-700 group-hover:bg-gray-900  transition ease-in-out duration-200 rounded-md px-1 py-2`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `rounded-full w-4 h-4 flex-shrink-0 flex items-center justify-center bg-red-500 mr-2`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "white",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: "w-3 h-3 text-white",
                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: " text-sm mr-2 text-gray-400",
                    children: [
                        "@",
                        message.replyToMessage.user.username
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "",
                    children: message.replyToMessage.isEdited && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-yellow-500 text-sm mr-1",
                        children: "Edited"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: " text-sm text-gray-200  w-5/6",
                    children: message.replyToText
                })
            ]
        })
    });
};
/* harmony default export */ const Message_ReplyToEdited = (ReplyToEdited);

;// CONCATENATED MODULE: ./components/Message/ReplyToDeleted.jsx


const ReplyToDeleted = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `inline-flex ml-12 mb-3  px-1 py-2`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex items-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `rounded-full w-4 h-4 flex-shrink-0 flex items-center justify-center bg-red-500 mr-2`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "white",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: "w-3 h-3 text-white",
                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "text-red-500 text-sm mr-1",
                    children: "Message Deleted"
                })
            ]
        })
    });
};
/* harmony default export */ const Message_ReplyToDeleted = (ReplyToDeleted);

;// CONCATENATED MODULE: ./components/Message/MessageReplyTo.jsx


const MessageReplyTo = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "flex items-center relative",
        children: children
    });
};
/* harmony default export */ const Message_MessageReplyTo = (MessageReplyTo);

;// CONCATENATED MODULE: ./components/icons/TaskIcon.jsx

const TaskIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4 text-green-600",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
        })
    });
};
/* harmony default export */ const icons_TaskIcon = (TaskIcon);

;// CONCATENATED MODULE: ./components/Message/EditMessage.jsx





const EditMessage = ({ message, input, inputRef, handleInputChange, handleRemoveInputFocus })=>{
    const router = (0,router_.useRouter)();
    const { editTeamMessage, editGroupMessage, editDirectMessage } = (0,TeamsContext/* useTeams */.y2)();
    const teamId = router.query.teamId;
    const groupId = router.query.groupId;
    const username = router.query.username;
    const editMessage = async (e, message, text)=>{
        e.preventDefault();
        if (teamId && !groupId && !username) await editTeamMessage(message, text);
        else if (teamId && groupId && !username) editGroupMessage(message, text);
        else editDirectMessage(message, text);
        handleRemoveInputFocus();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col w-full",
        children: [
            " ",
            message?.type === "task" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: " relative flex justify-between bg-gray-800   my-2 w-full text-gray-300 p-3 rounded-md",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        ref: ref,
                        onChange: handleInputChange,
                        placeholder: message.text,
                        value: input,
                        className: "text-gray-300 outline-none bg-transparent w-full"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "h-7 w-7 absolute -right-3 top-2.5  flex items-center justify-center rounded-full  bg-gray-700 group-hover:bg-gray-800 border-gray-500 transition ease-in-out duration-200",
                        children: /*#__PURE__*/ jsx_runtime.jsx(icons_TaskIcon, {})
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: " relative flex justify-between bg-gray-800  my-2 w-full text-gray-300 p-3 rounded-md ",
                children: /*#__PURE__*/ jsx_runtime.jsx("form", {
                    onSubmit: (e)=>editMessage(e, message, input),
                    className: "w-full",
                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                        value: input,
                        ref: inputRef,
                        onChange: handleInputChange,
                        placeholder: message.text,
                        className: "text-gray-300 outline-none bg-transparent w-full"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                onClick: handleRemoveInputFocus,
                className: "text-green-500 text-xs cursor-pointer",
                children: "Cancel"
            })
        ]
    });
};
/* harmony default export */ const Message_EditMessage = (EditMessage);

// EXTERNAL MODULE: ./context/auth/AuthContext.js
var AuthContext = __webpack_require__(2767);
;// CONCATENATED MODULE: ./components/Message/MessagePopup.jsx



const MessagePopup = ({ message, hover, reply, handleFocusInput, handleOpenDeletePrompt })=>{
    const { authUser } = (0,AuthContext/* useAuth */.aC)();
    if (message.user.id === authUser.id) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: `${hover !== message.id && "hidden"} flex items-center  rounded-md  absolute -right-3 -top-6  border border-black border-opacity-30 bg-gray-800 shadow-md   transition ease-in-out duration-200`,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    onClick: ()=>reply(message),
                    className: "hover:bg-gray-700 h-6 flex items-center justify-center rounded-tl-md rounded-bl-md px-2 py-4 transition ease-in-out duration-200 cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime.jsx(ReplyIcon, {})
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    onClick: ()=>handleFocusInput(message.id, message),
                    className: "hover:bg-gray-700 h-6 flex items-center justify-center  px-2 py-4 transition ease-in-out duration-200 cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime.jsx(EditIcon, {})
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    onClick: ()=>handleOpenDeletePrompt(message),
                    className: "hover:bg-gray-700 transition ease-in-out px-1 py-2 duration-200 cursor-pointer rounded-tr-md rounded-br-md",
                    children: /*#__PURE__*/ jsx_runtime.jsx(TrashIcon, {})
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: `${hover !== message.id && "hidden"} flex items-center  rounded-md  absolute -right-3 -top-6  border border-black border-opacity-30 bg-gray-800 shadow-md   transition ease-in-out duration-200`,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    onClick: ()=>reply(message),
                    className: "hover:bg-gray-700 h-6 flex items-center justify-center rounded-tl-md rounded-bl-md px-2 py-5 transition ease-in-out duration-200 cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime.jsx(ReplyIcon, {})
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    // onClick={() => handleOpenDeletePrompt(message.id)}
                    className: "hover:bg-gray-700 transition ease-in-out px-1 py-2 duration-200 cursor-pointer rounded-tr-md rounded-br-md",
                    children: /*#__PURE__*/ jsx_runtime.jsx(MoreIcon, {})
                })
            ]
        });
    }
};
const MoreIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-6 h-6  text-gray-400",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        })
    });
};
const ReplyIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4 text-gray-400",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        })
    });
};
const EditIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4  text-gray-400",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        })
    });
};
const TrashIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-4 h-4  text-gray-400",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        })
    });
};
/* harmony default export */ const Message_MessagePopup = (MessagePopup);

;// CONCATENATED MODULE: ./components/Message/MessageDeletePrompt.jsx




const MessageDeletePrompt = ({ deletePrompt, setDeletePrompt, messageToDelete })=>{
    const router = (0,router_.useRouter)();
    const { deleteTeamMessage, deleteGroupMessage, deleteDirectMessage } = (0,TeamsContext/* useTeams */.y2)();
    const teamId = router.query.teamId;
    const groupId = router.query.groupId;
    const username = router.query.username;
    const deleteMessage = ()=>{
        if (teamId && !groupId && !username) {
            deleteTeamMessage(messageToDelete.id);
        } else if (teamId && groupId && !username) {
            deleteGroupMessage(messageToDelete.id);
        } else {
            deleteDirectMessage(messageToDelete.id);
        }
        setDeletePrompt(false);
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: deletePrompt && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "fixed top-0 right-0 bottom-0 left-0 flex z-40 items-center justify-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: " absolute top-0 right-0 bottom-0 left-0 bg-black opacity-70"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "z-50 w-[450px] bg-gray-800 shadow-xl rounded-xl py-5 px-7 flex flex-col items-center ",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-white mb-5 h-12 overflow-hidden",
                                children: messageToDelete.text
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-white mb-7",
                                children: "Are you sure you want to delete this message?"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-evenly w-full",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        onClick: deleteMessage,
                                        className: "bg-red-500 text-white font-semibold py-1 px-7 cursor-pointer rounded",
                                        children: "Delete"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        onClick: ()=>setDeletePrompt(false),
                                        className: "bg-gray-400 text-white font-semibold py-1 px-7 cursor-pointer rounded",
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Message_MessageDeletePrompt = (MessageDeletePrompt);

;// CONCATENATED MODULE: ./components/Message/Message.jsx











const Message = ({ message, inputEl, setInputEl, reply, handleOpenDeletePrompt, inputRef })=>{
    const router = (0,router_.useRouter)();
    const ref = (0,external_react_.useRef)(null);
    const [hover, setHover] = (0,external_react_.useState)(-1);
    const [input, setInput] = (0,external_react_.useState)("");
    const handleFocusInput = (i, message)=>{
        setInputEl(i);
        setInput(message.text);
    };
    const handleInputChange = (e)=>setInput(e.target.value);
    const handleRemoveInputFocus = ()=>{
        setInputEl(-1);
    // setInput("");
    };
    const showMore = (id)=>{
        if (inputEl === id) return;
        setHover(id);
    };
    const hideMore = (id)=>{
        if (inputEl === id) return;
        setHover(-1);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        onMouseOver: ()=>showMore(message.id),
        onMouseLeave: hideMore,
        className: `group hover:bg-gray-900 ${message?.type === "task" && " "}  ${inputEl === message.id && "bg-gray-900"} transition ease-in-out duration-200 px-5 py-3`,
        children: [
            message.replyToMessage?.id && message.replyToText ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Message_MessageReplyTo, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Message_ReplyToBubbles, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(Message_ReplyToEdited, {
                        message: message
                    })
                ]
            }) : message.replyToRef && message.replyToMessage === null && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Message_MessageReplyTo, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Message_ReplyToBubbles, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(Message_ReplyToDeleted, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex justify-between relative ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex space-x-3 w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "cursor-pointer",
                                onClick: ()=>router.push(`/teams/${router.query.teamId}/chat/${message.user.username}`),
                                children: /*#__PURE__*/ jsx_runtime.jsx(users_AvatarDefault, {
                                    color: "blue"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center  space-x-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "font-semibold text-gray-300",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    children: message?.user?.name
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-sm text-gray-300",
                                                children: [
                                                    "@",
                                                    message?.user?.username
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex space-x-3 cursor-default",
                                        children: inputEl === message.id ? /*#__PURE__*/ jsx_runtime.jsx(Message_EditMessage, {
                                            message: message,
                                            input: input,
                                            inputRef: inputRef,
                                            handleRemoveInputFocus: handleRemoveInputFocus,
                                            handleInputChange: handleInputChange
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                " ",
                                                message?.type === "task" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "border relative  flex justify-between border-gray-600 group-hover:border group-hover:border-gray-700 my-2 w-full  p-3 rounded-md transition ease-in-out duration-200",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: message.text
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "h-7 w-7 absolute -right-3 top-2.5  flex items-center justify-center rounded-full border bg-gray-700 group-hover:bg-gray-800 border-gray-500 transition ease-in-out duration-200",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(icons_TaskIcon, {})
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: " text-gray-300",
                                                    children: input.length > 0 ? input : message.text
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Message_MessagePopup, {
                        message: message,
                        hover: hover,
                        reply: reply,
                        handleFocusInput: handleFocusInput,
                        handleOpenDeletePrompt: handleOpenDeletePrompt
                    })
                ]
            })
        ]
    }, message.id);
};
/* harmony default export */ const Message_Message = (Message);

;// CONCATENATED MODULE: ./components/features/Chat/Chat.jsx

















// Todos
//  1. Capture live updates to reflect on clients for a user editing their message
const Chat = ({ messages, reply })=>{
    // const [hover, setHover] = useState(-1);
    const [inputEl, setInputEl] = (0,external_react_.useState)(-1);
    // const [input, setInput] = useState("");
    const [deletePrompt, setDeletePrompt] = (0,external_react_.useState)(false);
    const [messageToDelete, setMessageToDelete] = (0,external_react_.useState)(null);
    const { team, chatEndRef, chatStartRef, chatLoading, editTeamMessage, editGroupMessage, editDirectMessage, deleteTeamMessage, deleteGroupMessage, deleteDirectMessage, convertMessages, scrollToBottom } = (0,TeamsContext/* useTeams */.y2)();
    const ref = (0,external_react_.useRef)(null);
    // const editMessage = async (e, message, text) => {
    //   e.preventDefault();
    //   if (
    //     router.query.teamId &&
    //     !router.query.groupId &&
    //     !router.query.username
    //   ) {
    //     await editTeamMessage(message, text);
    //   } else if (
    //     router.query.teamId &&
    //     router.query.groupId &&
    //     !router.query.username
    //   ) {
    //     editGroupMessage(message, text);
    //   } else {
    //     editDirectMessage(message, text);
    //   }
    //   handleRemoveInputFocus();
    // };
    // const handleFocusInput = (i, message) => {
    //   setInputEl(i);
    //   setInput(message.text);
    // };
    // const handleInputChange = (e) => setInput(e.target.value);
    // const handleRemoveInputFocus = () => {
    //   setInputEl(-1);
    //   setInput("");
    // };
    // const showMore = (id) => {
    //   if (inputEl === id) return;
    //   setHover(id);
    // };
    // const hideMore = (id) => {
    //   if (inputEl === id) return;
    //   setHover(-1);
    // };
    const handleDateDisplay = (date)=>{
        const today = external_moment_default()(new Date()).format("M D YY");
        if (date === today) {
            return "Today";
        }
        return date.split(" ").map((item)=>item + "/").join("").slice(0, -1);
    };
    const handleOpenDeletePrompt = (message)=>{
        setDeletePrompt(true);
        setMessageToDelete(message);
    };
    const isReply = (message)=>message.replyTo.path.split("/")[1] === null ? false : true;
    (0,external_react_.useEffect)(()=>{
        if (inputEl !== -1) {
            ref.current.focus();
        }
    }, [
        inputEl
    ]);
    (0,external_react_.useEffect)(()=>{
        scrollToBottom();
    }, [
        messages?.length
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: messages?.length === 0 && !chatLoading ? /*#__PURE__*/ jsx_runtime.jsx(Chat_ChatError, {
            chatName: "Name"
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "relative flex flex-col space-y-3 pt-2  h-screen overflow-y-scroll no-scrollbar pb-64",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    ref: chatStartRef
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Message_MessageDeletePrompt, {
                    deletePrompt: deletePrompt,
                    setDeletePrompt: setDeletePrompt,
                    messageToDelete: messageToDelete
                }),
                chatLoading ? /*#__PURE__*/ jsx_runtime.jsx(Chat_ChatSkeleton, {}) : convertMessages(messages ? messages : []).map((item)=>/*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                        children: item[1].map((message)=>/*#__PURE__*/ jsx_runtime.jsx(Message_Message, {
                                message: message,
                                inputEl: inputEl,
                                setInputEl: setInputEl,
                                inputRef: ref,
                                reply: reply,
                                handleOpenDeletePrompt: handleOpenDeletePrompt
                            }))
                    })),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    ref: chatEndRef
                })
            ]
        })
    });
};
/* harmony default export */ const Chat_Chat = (Chat);


/***/ })

};
;