"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            id: listaDeMensagens.length,\n            texto: novaMensagem,\n            de: \"elian-beep\"\n        };\n        setListaDeMensagens(_toConsumableArray(listaDeMensagens).concat([\n            mensagem\n        ]));\n        setMensagem(\"\");\n    };\n    _s();\n    /* Usuário\r\n    Digitar no campo text area\r\n    Apertar enter para enviar\r\n    Adicionar o texto na listagem\r\n    */ /* Dev\r\n    [x] Criar campo\r\n    [x] Usar onChange e UseState (if caso enter seja para limpar o campo)\r\n    [ ] Lista de mensagens\r\n    */ // Sua lógica vai aqui\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\"), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagem: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(event) {\n                                    setMensagem(event.target.value);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === \"Enter\") {\n                                        event.preventDefault(); //Vai retirar o comportamente padrão (quebrar a linha)\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: \"100%\",\n                                    border: \"0\",\n                                    resize: \"none\",\n                                    borderRadius: \"5px\",\n                                    padding: \"6px 8px\",\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: \"12px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 86,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n};\n_s(ChatPage, \"TUh7UAFFqtouUCHTmXqiZHKdgTs=\");\n_c = ChatPage;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 121,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 124,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 120,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(\"MessageList\", props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: props.mensagem.map(function() {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/vanessametonini.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 169,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 179,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 182,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n                        lineNumber: 164,\n                        columnNumber: 25\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n                lineNumber: 152,\n                columnNumber: 21\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\elian\\\\Documents\\\\Segurador\\\\Documentos\\\\Projetos\\\\ReactJS\\\\Aluracord\\\\pages\\\\chat.js\",\n        lineNumber: 138,\n        columnNumber: 9\n    }, this);\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUNUO0NBQ0o7QUFoRVFnQyxNQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQuanM/NGNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcclxuICAgIC8qIFVzdcOhcmlvXHJcbiAgICBEaWdpdGFyIG5vIGNhbXBvIHRleHQgYXJlYVxyXG4gICAgQXBlcnRhciBlbnRlciBwYXJhIGVudmlhclxyXG4gICAgQWRpY2lvbmFyIG8gdGV4dG8gbmEgbGlzdGFnZW1cclxuICAgICovXHJcblxyXG4gICAgLyogRGV2XHJcbiAgICBbeF0gQ3JpYXIgY2FtcG9cclxuICAgIFt4XSBVc2FyIG9uQ2hhbmdlIGUgVXNlU3RhdGUgKGlmIGNhc28gZW50ZXIgc2VqYSBwYXJhIGxpbXBhciBvIGNhbXBvKVxyXG4gICAgWyBdIExpc3RhIGRlIG1lbnNhZ2Vuc1xyXG4gICAgKi9cclxuXHJcbiAgICAvLyBTdWEgbMOzZ2ljYSB2YWkgYXF1aVxyXG4gICAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbGlzdGFEZU1lbnNhZ2Vucywgc2V0TGlzdGFEZU1lbnNhZ2Vuc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTm92YU1lbnNhZ2VtKG5vdmFNZW5zYWdlbSkge1xyXG4gICAgICAgIGNvbnN0IG1lbnNhZ2VtID0ge1xyXG4gICAgICAgICAgICBpZDogbGlzdGFEZU1lbnNhZ2Vucy5sZW5ndGgsXHJcbiAgICAgICAgICAgIHRleHRvOiBub3ZhTWVuc2FnZW0sXHJcbiAgICAgICAgICAgIGRlOiAnZWxpYW4tYmVlcCcsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRMaXN0YURlTWVuc2FnZW5zKFsuLi5saXN0YURlTWVuc2FnZW5zLCBtZW5zYWdlbV0pO1xyXG4gICAgICAgIHNldE1lbnNhZ2VtKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylgLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc5NSUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzk1dmgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczMnB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VMaXN0IG1lbnNhZ2VtPXtsaXN0YURlTWVuc2FnZW5zfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiB7bGlzdGFEZU1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtQXR1YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e21lbnNhZ2VtQXR1YWwuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbUF0dWFsLmRlfToge21lbnNhZ2VtQXR1YWwudGV4dG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lbnNhZ2VtKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvL1ZhaSByZXRpcmFyIG8gY29tcG9ydGFtZW50ZSBwYWRyw6NvIChxdWVicmFyIGEgbGluaGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5vdmFNZW5zYWdlbShtZW5zYWdlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggc3R5bGVTaGVldD17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICcxNnB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fSA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PSdoZWFkaW5nNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhdFxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yVmFyaWFudD0nbmV1dHJhbCdcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTG9nb3V0J1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTGlzdChwcm9wcykge1xyXG4gICAgY29uc29sZS5sb2coJ01lc3NhZ2VMaXN0JywgcHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHRhZz1cInVsXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIHtwcm9wcy5tZW5zYWdlbS5tYXAoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21lbnNhZ2VtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJsaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS92YW5lc3NhbWV0b25pbmkucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJzdHJvbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVuc2FnZW0uZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtLnRleHRvfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsIlJlYWN0IiwiYXBwQ29uZmlnIiwiQ2hhdFBhZ2UiLCJoYW5kbGVOb3ZhTWVuc2FnZW0iLCJub3ZhTWVuc2FnZW0iLCJtZW5zYWdlbSIsImlkIiwibGlzdGFEZU1lbnNhZ2VucyIsImxlbmd0aCIsInRleHRvIiwiZGUiLCJzZXRMaXN0YURlTWVuc2FnZW5zIiwic2V0TWVuc2FnZW0iLCJ1c2VTdGF0ZSIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiTWVzc2FnZUxpc3QiLCJhcyIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidGFnIiwib3ZlcmZsb3ciLCJtYXAiLCJob3ZlciIsInNyYyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});