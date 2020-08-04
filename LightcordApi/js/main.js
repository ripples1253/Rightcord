module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/alias/react-dom.ts":
/*!********************************!*\
  !*** ./src/alias/react-dom.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// bait typescript into thinking this is not reactDOM so no circular dependency.
window.ReactDOM = (window["Reac" + "tDOM"] || // If in Lightcord
    (() => {
        try {
            return window.BdApi.ReactDOM;
        }
        catch (e) {
            return null;
        }
    })() ||
    (() => {
        try {
            const webpack = __webpack_require__(/*! powercord/webpack */ "powercord/webpack");
            return webpack.ReactDOM;
        }
        catch (e) {
            return null;
        }
    })() ||
    (() => {
        try {
            return window.EDApi.ReactDOM;
        }
        catch (e) {
            return null;
        }
    })());
module.exports = window.ReactDOM;


/***/ }),

/***/ "./src/alias/react.ts":
/*!****************************!*\
  !*** ./src/alias/react.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

window.React = (window.React || // If in Lightcord
    (() => {
        try {
            return window.BdApi.React;
        }
        catch (e) {
            return null;
        }
    })() ||
    (() => {
        try {
            const webpack = __webpack_require__(/*! powercord/webpack */ "powercord/webpack");
            return webpack.React;
        }
        catch (e) {
            return null;
        }
    })() ||
    (() => {
        try {
            return window.EDApi.React;
        }
        catch (e) {
            return null;
        }
    })());
module.exports = window.React;


/***/ }),

/***/ "./src/components/components.ts":
/*!**************************************!*\
  !*** ./src/components/components.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __webpack_require__(/*! ./inputs/Button */ "./src/components/inputs/Button.tsx");
const Switch_1 = __webpack_require__(/*! ./inputs/Switch */ "./src/components/inputs/Switch.tsx");
const RadioGroup_1 = __webpack_require__(/*! ./inputs/RadioGroup */ "./src/components/inputs/RadioGroup.tsx");
const TextArea_1 = __webpack_require__(/*! ./inputs/TextArea */ "./src/components/inputs/TextArea.tsx");
const TextInput_1 = __webpack_require__(/*! ./inputs/TextInput */ "./src/components/inputs/TextInput.tsx");
const Dropdown_1 = __webpack_require__(/*! ./inputs/Dropdown */ "./src/components/inputs/Dropdown.tsx");
const Title_1 = __webpack_require__(/*! ./general/Title */ "./src/components/general/Title.tsx");
const SettingsTitle_1 = __webpack_require__(/*! ./general/SettingsTitle */ "./src/components/general/SettingsTitle.tsx");
const Tabs_1 = __webpack_require__(/*! ./general/Tabs */ "./src/components/general/Tabs.tsx");
const SettingSubTitle_1 = __webpack_require__(/*! ./general/SettingSubTitle */ "./src/components/general/SettingSubTitle.tsx");
const CodeBlock_1 = __webpack_require__(/*! ./general/CodeBlock */ "./src/components/general/CodeBlock.tsx");
const cloneNullProto_1 = __webpack_require__(/*! ../modules/cloneNullProto */ "./src/modules/cloneNullProto.ts");
const Tooltip_1 = __webpack_require__(/*! ./general/Tooltip */ "./src/components/general/Tooltip.ts");
const ColorPicker_1 = __webpack_require__(/*! ./inputs/ColorPicker */ "./src/components/inputs/ColorPicker.tsx");
const AlertBox_1 = __webpack_require__(/*! ./general/AlertBox */ "./src/components/general/AlertBox.tsx");
const ErrorCatcher_1 = __webpack_require__(/*! ./general/ErrorCatcher */ "./src/components/general/ErrorCatcher.tsx");
const Flex_1 = __webpack_require__(/*! ./general/Flex */ "./src/components/general/Flex.tsx");
const Text_1 = __webpack_require__(/*! ./general/Text */ "./src/components/general/Text.ts");
const RadioGroupProxied = ErrorCatcher_1.createProxyErrorCatcherClass(RadioGroup_1.default);
exports.default = cloneNullProto_1.default({
    inputs: cloneNullProto_1.default({
        Button: ErrorCatcher_1.createProxyErrorCatcherClass(Button_1.default),
        Switch: ErrorCatcher_1.createProxyErrorCatcherClass(Switch_1.default),
        Choices: RadioGroupProxied,
        RadioGroup: RadioGroupProxied,
        TextArea: ErrorCatcher_1.createProxyErrorCatcherClass(TextArea_1.default),
        TextInput: ErrorCatcher_1.createProxyErrorCatcherClass(TextInput_1.default),
        Dropdown: ErrorCatcher_1.createProxyErrorCatcherClass(Dropdown_1.default),
        ColorPicker: ErrorCatcher_1.createProxyErrorCatcherClass(ColorPicker_1.default),
    }),
    general: cloneNullProto_1.default({
        Title: ErrorCatcher_1.createProxyErrorCatcherClass(Title_1.default),
        SettingsTitle: ErrorCatcher_1.createProxyErrorCatcherClass(SettingsTitle_1.default),
        SettingSubTitle: ErrorCatcher_1.createProxyErrorCatcherClass(SettingSubTitle_1.default),
        Tabs: ErrorCatcher_1.createProxyErrorCatcherClass(Tabs_1.default),
        CodeBlock: ErrorCatcher_1.createProxyErrorCatcherClass(CodeBlock_1.default),
        Tooltip: ErrorCatcher_1.createProxyErrorCatcherClass(Tooltip_1.default),
        AlertBox: ErrorCatcher_1.createProxyErrorCatcherClass(AlertBox_1.default),
        Flex: ErrorCatcher_1.createProxyErrorCatcherClass(Flex_1.default),
        FlexChild: ErrorCatcher_1.createProxyErrorCatcherClass(Flex_1.FlexChild),
        ErrorCatcher: ErrorCatcher_1.default,
        Text: Text_1.default
    })
});


/***/ }),

/***/ "./src/components/general/AlertBox.tsx":
/*!*********************************************!*\
  !*** ./src/components/general/AlertBox.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let AlertBoxModules;
class AlertBox extends React.Component {
    get modules() {
        return AlertBoxModules || (AlertBoxModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "Markdown" && e.default.defaultProps.parser).default
        ]);
    }
    render() {
        const [Markdown] = this.modules;
        let wrap;
        let children;
        if (typeof this.props.children === "string") {
            wrap = Markdown.prototype.render.call({
                props: Object.assign({
                    className: "",
                    children: this.props.children
                }, Markdown.defaultProps)
            });
            children = wrap.props.children;
        }
        else {
            wrap = Markdown.prototype.render.call({
                props: Object.assign({
                    className: "",
                    children: ""
                }, Markdown.defaultProps)
            });
            children = this.props.children;
        }
        wrap.props.children = React.createElement("div", { className: "lc-alert-box lc-alert-box-" + this.props.type },
            React.createElement("blockquote", { className: "lc-blockquote" }, children));
        return wrap;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: "***Discord's*** **Markdown** _is_ [supported](https://google.com) or you can just insert your own react childs."
                }
            ], [
                {
                    type: "info"
                },
                {
                    type: "success"
                },
                {
                    type: "warn"
                },
                {
                    type: "error"
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = AlertBox;
AlertBox.defaultProps = {
    type: "info",
    children: null
};
AlertBox.help = {
    info: "You can insert markdown (as string) or normal react childs",
    warn: "All string will be interpreted as markdown. If you want raw string, pass an array with the string inside."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/CodeBlock.tsx":
/*!**********************************************!*\
  !*** ./src/components/general/CodeBlock.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let CodeBlockModules;
class CodeBlock extends React.Component {
    get modules() {
        return CodeBlockModules || (CodeBlockModules = [
            WebpackLoader_1.default.find(e => e.markup),
            WebpackLoader_1.default.find(e => e.messageContent),
            WebpackLoader_1.default.find(e => e.scrollbarGhostHairline),
            WebpackLoader_1.default.find(e => e.highlight),
            WebpackLoader_1.default.find(e => e.marginBottom8)
        ]);
    }
    render() {
        let [messageModule1, messageModule2, scrollbarModule1, hightlightJS, marginModule1] = this.modules;
        const code = this.props.language === "plaintext" ? React.createElement("code", { className: `${scrollbarModule1.scrollbarGhostHairline} hljs` }, this.props.content) : React.createElement("code", { className: `${scrollbarModule1.scrollbarGhostHairline} hljs`, dangerouslySetInnerHTML: { __html: hightlightJS.highlight(this.props.language, this.props.content).value } });
        return (React.createElement("div", { className: `${messageModule1.markup} ${messageModule2.messageContent}` },
            React.createElement("pre", null, code),
            React.createElement("div", { className: marginModule1.marginBottom8 })));
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    content: "console.log(\"Exemple code\")"
                }
            ]);
            AllPreviews.push([
                {
                    language: "js"
                },
                {
                    language: "plaintext"
                },
                ...CodeBlock.prototype.modules[3].listLanguages().filter(e => e !== "js").map(e => ({ language: e }))
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = CodeBlock;
CodeBlock.defaultProps = {
    language: "plaintext",
    content: ""
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/ErrorCatcher.tsx":
/*!*************************************************!*\
  !*** ./src/components/general/ErrorCatcher.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createProxyErrorCatcherClass = void 0;
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const DiscordTools_1 = __webpack_require__(/*! ../../modules/DiscordTools */ "./src/modules/DiscordTools.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const uuid_1 = __webpack_require__(/*! ../../modules/uuid */ "./src/modules/uuid.ts");
const AlertBox_1 = __webpack_require__(/*! ./AlertBox */ "./src/components/general/AlertBox.tsx");
let ErrorCatcherModules;
class ErrorCatcher extends React.Component {
    constructor(props) {
        super(props);
        this.defaultProps = {
            children: null
        };
        this.state = {
            error: false,
            hasSentNotification: false
        };
    }
    static get original() {
        return ErrorCatcher;
    }
    get modules() {
        return ErrorCatcherModules || (ErrorCatcherModules = [
            WebpackLoader_1.default.find(e => e.emptyStateImage && e.emptyState)
        ]);
    }
    render() {
        if (!this.state.error) {
            return this.props.children;
        }
        else { // try to render a user-friendly interface.
            const [emptyClasses] = this.modules;
            if (!emptyClasses) { // If we can't, render nothing and show a notification.
                if (this.state.hasSentNotification)
                    return null; // If the notification was already sent, don't send one.
                const notification = DiscordTools_1.default.showNotification({
                    body: "An error occured. Please check the console for more informations.",
                    icon: "https://github.com/lightcord.png",
                    onClick: noop_1.default,
                    onClose: noop_1.default,
                    onShow: noop_1.default,
                    title: "Lightcord Informations"
                });
                this.setState({
                    hasSentNotification: true
                });
                setTimeout(() => {
                    notification.close();
                }, 2000);
                return null;
            }
            return React.createElement("div", { className: emptyClasses.emptyState },
                React.createElement("div", { className: emptyClasses.emptyStateImage, style: {
                        marginTop: "20px"
                    } }),
                React.createElement("div", { className: emptyClasses.emptyStateHeader }, "An error occured"),
                React.createElement("p", { className: emptyClasses.emptyStateSubtext }, "Please check the console for more informations. Join our \u00ADsupport server for more help."));
        }
    }
    componentDidCatch(error, errorInfo) {
        console.error(errorInfo.componentStack);
        this.setState({
            error: true
        });
    }
    static get AllPreviews() {
        return AllPreviews || (AllPreviews = [
            [
                {
                    children: React.createElement(AlertBox_1.default, { type: "info" }, "This AlertBox is protected by an ErrorCatcher.")
                }
            ]
        ]);
    }
}
exports.default = ErrorCatcher;
let AllPreviews;
function createProxyErrorCatcherClass(Class) {
    var _a;
    const ClassCopy = (_a = class Proxied extends React.Component {
            render() {
                return React.createElement(ErrorCatcher, { key: uuid_1.default() }, React.createElement(Class, Object.assign(Object.assign({ ref: "original" }, this.props), { key: uuid_1.default() })));
            }
            static get original() {
                return Class;
            }
        },
        _a.displayName = Class["displayName"] || Class["name"],
        _a);
    Object.entries(Object.getOwnPropertyDescriptors(Class)).forEach(value => {
        if (value[0] in ClassCopy)
            return;
        Object.defineProperty(ClassCopy, value[0], value[1]);
    });
    return ClassCopy;
}
exports.createProxyErrorCatcherClass = createProxyErrorCatcherClass;


/***/ }),

/***/ "./src/components/general/Flex.tsx":
/*!*****************************************!*\
  !*** ./src/components/general/Flex.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexChild = void 0;
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
function getModules() {
    return FlexModules || (FlexModules = [
        (() => {
            let Flex = WebpackLoader_1.default.find(e => e.default && e.default.displayName === "Flex");
            if (Flex)
                Flex = Flex.default;
            return Flex;
        })()
    ]);
}
let FlexModules;
class Flex extends React.Component {
    constructor(props) {
        super(props);
    }
    get modules() {
        return getModules();
    }
    render() {
        let [FlexComponent] = this.modules;
        return React.createElement(FlexComponent, Object.assign({}, this.props));
    }
    static get Direction() {
        return getModules()[0].Direction;
    }
    static get Align() {
        return getModules()[0].Align;
    }
    static get Justify() {
        return getModules()[0].Justify;
    }
    static get Wrap() {
        return getModules()[0].Justify;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    children: "Your components here."
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = Flex;
let AllPreviews;
class FlexChild extends React.Component {
    get modules() {
        return getModules();
    }
    render() {
        const [FlexComponent] = this.modules;
        return React.createElement(FlexComponent.Child, Object.assign({}, this.props));
    }
}
exports.FlexChild = FlexChild;


/***/ }),

/***/ "./src/components/general/SettingSubTitle.tsx":
/*!****************************************************!*\
  !*** ./src/components/general/SettingSubTitle.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let TitleModules;
class SettingSubTitle extends React.Component {
    get modules() {
        return TitleModules || (TitleModules = [
            WebpackLoader_1.default.find(e => typeof e.marginTop60 === "string"),
            WebpackLoader_1.default.findByUniqueProperties(["h5"]),
            window.Lightcord.Api.WebpackLoader.findByUniqueProperties(["size14"]),
            window.Lightcord.Api.WebpackLoader.findByUniqueProperties(["colorStandard"])
        ]);
    }
    render() {
        let [marginModule, titleModule, sizeModule, colorModule] = this.modules;
        let props = this.props;
        let className = `${colorModule.colorStandard} ${sizeModule.size14} ${titleModule.h5} ${marginModule.marginBottom4}`;
        if (props.className)
            className = +" " + props.className;
        return React.createElement("h5", { className }, props.children);
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: "Exemple title"
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = SettingSubTitle;
SettingSubTitle.defaultProps = {
    children: [],
    className: ""
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/SettingsTitle.tsx":
/*!**************************************************!*\
  !*** ./src/components/general/SettingsTitle.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const Title_1 = __webpack_require__(/*! ./Title */ "./src/components/general/Title.tsx");
let TitleModules;
class SettingsTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    get modules() {
        return TitleModules || (TitleModules = [
            WebpackLoader_1.default.find(e => typeof e.marginTop60 === "string")
        ]);
    }
    render() {
        let [marginModule] = this.modules;
        let props = this.props;
        let className = `${marginModule.marginTop60} ${marginModule.marginBottom20}`;
        if (props.className)
            className = +" " + props.className;
        return React.createElement(Title_1.default, { className }, props.children);
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: "Exemple title"
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = SettingsTitle;
SettingsTitle.defaultProps = {
    children: [""],
    className: ""
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/Tabs.tsx":
/*!*****************************************!*\
  !*** ./src/components/general/Tabs.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const Title_1 = __webpack_require__(/*! ./Title */ "./src/components/general/Title.tsx");
class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.tabsElements = [];
        this.state = {
            active: this.props.active || null
        };
    }
    get tabs() {
        return this.props.tabs || [];
    }
    changeTab(tab) {
        if (tab === this.state.active)
            return;
        if (this.props.onChange)
            this.props.onChange(tab);
        this.setState({
            active: tab
        });
        this.tabsElements.forEach(e => e.setActive(tab === e.props.id));
    }
    render() {
        return (React.createElement("div", { className: "lc-tabWrapper", style: this.props.style },
            React.createElement("div", { className: "lc-tabnav", style: { flex: "0 1 auto" } }, this.tabs.map(tab => {
                return React.createElement(Tab, { TabContainer: this, title: tab.label, id: tab.id, key: btoa(tab.label + ":" + tab.id) });
            })),
            React.createElement("div", { className: "lc-tab" }, this.props.children)));
    }
    isActive(tab) {
        return this.state.active === tab;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: (React.createElement("div", { style: { marginTop: "20px", marginBottom: "20px" } },
                        React.createElement("div", { style: {
                                backgroundColor: "var(--background-primary)",
                                padding: "30px 30px",
                                borderRadius: "8px"
                            }, className: "lc-tab-box-shadow" },
                            React.createElement(Title_1.default, null, "Preview tabs"))))
                }
            ], [
                {
                    tabs: [
                        {
                            label: "Active tab",
                            id: "1"
                        },
                        {
                            label: "Unactive tab",
                            id: "2"
                        }
                    ]
                }
            ], [
                {
                    active: "1"
                }
            ], [
                {
                    onChange: (tabId) => { }
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = Tabs;
Tabs.defaultProps = {
    children: null,
    tabs: [{ label: "No tabs was passed to <Tabs>.", id: "none" }],
    active: null,
    onChange: noop_1.default,
    style: {}
};
let AllPreviews;
class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.TabContainer.isActive(props.id)
        };
        this.props.TabContainer.tabsElements.push(this);
    }
    setActive(isActive) {
        this.setState({
            active: !!isActive
        });
    }
    render() {
        let className = `lc-navItem`;
        if (this.state.active) {
            className += ` lc-navItemActive`;
        }
        else {
            className += ` lc-navItemInactive`;
        }
        return (React.createElement("div", { className: className, onClick: () => {
                this.props.TabContainer.changeTab(this.props.id);
            } }, this.props.title));
    }
}
exports.Tab = Tab;


/***/ }),

/***/ "./src/components/general/Text.ts":
/*!****************************************!*\
  !*** ./src/components/general/Text.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
const React = __webpack_require__(/*! react */ "./src/alias/react.ts");
const Utils_1 = __webpack_require__(/*! ../../modules/Utils */ "./src/modules/Utils.ts");
class Text extends React.Component {
    render() {
        let classList = this.props.className ? this.props.className.split(" ") : [];
        let style = this.props.style ? Object.assign({}, this.props.style) : {};
        style.flexGrow = 0;
        if (this.props.weight) {
            classList.push(`lc-text-weight${Utils_1.default.firstLetterUppercase(this.props.weight)}`);
        }
        if (this.props.color) {
            style.color = Utils_1.default.getColor(this.props.color) || this.props.color;
        }
        if (this.props.textCase) {
            classList.push(`lc-text-cases${Utils_1.default.firstLetterUppercase(this.props.textCase)}`);
        }
        if (this.props.size) {
            classList.push(...exports.Constants.sizes[this.props.size]);
        }
        if (this.props.family) {
            classList.push(`lc-text-${this.props.family}`);
        }
        if (this.props.selectable) {
            classList.push("lc-text-selectable");
        }
        return React.createElement(this.props.tag, {
            style,
            className: classList.join(" ")
        }, this.props.children);
    }
    static get AllPreviews() {
        return AllPreviews || (AllPreviews = [
            this.weights.map(e => ({ weight: e })),
            this.colors.map(e => ({ color: e })),
            this.textCases.map(e => ({ textCase: e })),
            this.sizes.map(e => ({ size: e })),
            this.familys.map(e => ({ family: e })),
            [
                {
                    children: "Test Text"
                }
            ],
            ["div", "p", ...Utils_1.default.executeXTimes((index) => {
                    return "h" + (index + 1);
                }, 6)].map(e => ({ tag: e })),
            [true, false].map(e => ({ selectable: e }))
        ]);
    }
    static get colors() {
        return Object.keys(Lightcord.DiscordModules.constants.Colors).map(e => e.toLowerCase());
    }
}
exports.default = Text;
Text.defaultProps = {
    tag: "div",
    children: null
};
Text.weights = ["light", "normal", "medium", "semibold", "bold"];
Text.textCases = ["lowercase", "uppercase"];
Text.sizes = ["small", "medium", "medium_small", "medium_large", "large"];
Text.familys = ["primary", "code"];
let AllPreviews;
exports.Constants = {
    sizes: {
        small: ["lc-text-size12", "lc-text-height16"],
        medium_small: ["lc-text-size14", "lc-text-height16"],
        medium: ["lc-text-size16", "lc-text-height20"],
        medium_large: ["lc-text-size20", "lc-text-height26"],
        large: ["lc-text-size28", "lc-text-height34"]
    }
};


/***/ }),

/***/ "./src/components/general/Title.tsx":
/*!******************************************!*\
  !*** ./src/components/general/Title.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let TitleModules;
class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    get modules() {
        return TitleModules || (TitleModules = [
            WebpackLoader_1.default.find(e => typeof e.colorStandard === "string"),
            WebpackLoader_1.default.find(e => typeof e.size32 === "string"),
            WebpackLoader_1.default.find(e => typeof e.h2 === "string")
        ]);
    }
    render() {
        let [colorModule, sizeModule, titleModule] = this.modules;
        let props = this.props;
        let className = `${colorModule.colorStandard} ${sizeModule.size14} ${titleModule.h2} ${titleModule.defaultColor} ${titleModule.defaultMarginh2}`;
        if (props.className)
            className += " " + props.className;
        return React.createElement("h2", { className }, props.children);
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: "Exemple title"
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = Title;
Title.defaultProps = {
    children: null,
    className: null
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/Tooltip.ts":
/*!*******************************************!*\
  !*** ./src/components/general/Tooltip.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const excludeProperties_1 = __webpack_require__(/*! ../../modules/excludeProperties */ "./src/modules/excludeProperties.ts");
let TooltipModules;
class Tooltip extends React.Component {
    constructor(props) {
        super(props);
    }
    get modules() {
        return TooltipModules || (TooltipModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "Tooltip")
        ]);
    }
    render() {
        let [Tooltip] = this.modules;
        let props = excludeProperties_1.default(this.props, ["children"]);
        return React.createElement(Tooltip.default, props, (data) => {
            return React.createElement("div", Object.assign(Object.assign({}, data), { style: {
                    width: "fit-content",
                    height: "fit-content"
                } }), this.props.children);
        });
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: React.createElement(window.Lightcord.Api.Components.inputs.Button, {
                        color: "green",
                        look: "ghost",
                        size: "small",
                        hoverColor: "yellow",
                        onClick: () => { },
                        wrapper: false
                    }, "Hover this button to see the tooltip")
                }
            ]);
            AllPreviews.push([
                {
                    text: "Example Tooltip Text"
                }
            ]);
            let colors = [];
            Tooltip.Colors.forEach(color => {
                colors.push({
                    color: color
                });
            });
            AllPreviews.push(colors);
            let positions = [];
            Tooltip.Positions.forEach(p => {
                positions.push({
                    position: p
                });
            });
            AllPreviews.push(positions);
            return AllPreviews;
        })();
    }
}
exports.default = Tooltip;
Tooltip.defaultProps = {
    children: null,
    text: "No text was passed to Tooltip",
    position: "top",
    color: "brand"
};
Tooltip.Positions = ["top", "left", "right", "bottom"];
Tooltip.Colors = ["black", "grey", "brand", "green", "yellow", "red"];
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/inputs/Button.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let ButtonModules;
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }
    get modules() {
        return ButtonModules || (ButtonModules = [
            WebpackLoader_1.default.findByUniqueProperties(["_horizontal"]),
            WebpackLoader_1.default.findByUniqueProperties(["colorTransparent"]),
            WebpackLoader_1.default.findByUniqueProperties(["buttonWrapper"]),
            WebpackLoader_1.default.findByUniqueProperties(["ButtonColors"]),
        ]);
    }
    render() {
        let [flexModule, euhModule1, buttonModule, colorsModule,] = this.modules;
        let props = {};
        if (this.props) {
            if ("color" in this.props) {
                props.color = this.props.color;
            }
            if ("children" in this.props) {
                props.children = this.props.children;
            }
            if ("onClick" in this.props) {
                props.onClick = this.props.onClick;
            }
            if ("wrapper" in this.props) {
                props.wrapper = !!this.props.wrapper;
            }
            if ("look" in this.props) {
                props.look = this.props.look;
            }
            if ("size" in this.props) {
                props.size = this.props.size;
            }
            if ("hoverColor" in this.props) {
                props.hoverColor = this.props.hoverColor;
            }
            if ("disabled" in this.props) {
                props.disabled = this.props.disabled;
            }
            else {
                props.disabled = false;
            }
            if ("style" in this.props) {
                props.style = this.props.style;
            }
            else {
                props.style = {};
            }
            if ("onRightClick" in this.props) {
                props.onRightClick = this.props.onRightClick;
            }
            else {
                props.onRightClick = noop_1.default;
            }
        }
        if (props.color) {
            props.color = props.color.toLowerCase();
            if (!Button.Colors.includes(props.color)) {
                props.color = Button.Colors[0];
            }
        }
        else {
            props.color = Button.Colors[0];
        }
        if (props.look) {
            props.look = props.look.toLowerCase();
            if (!Button.Looks.includes(props.look)) {
                props.look = Button.Looks[0];
            }
        }
        else {
            props.look = Button.Looks[0];
        }
        if (props.size) {
            props.size = props.size.toLowerCase();
            if (!Button.Sizes.includes(props.size)) {
                props.size = Button.Sizes[0];
            }
        }
        else {
            props.size = Button.Sizes[0];
        }
        if (props.hoverColor) {
            props.hoverColor = props.hoverColor.toLowerCase();
            if (!Button.HoverColors.includes(props.hoverColor)) {
                props.hoverColor = Button.HoverColors[0];
            }
        }
        else {
            props.hoverColor = Button.HoverColors[0];
        }
        let buttonSize = props.size ? colorsModule.ButtonSizes[props.size.toUpperCase()] || "" : "";
        if (buttonSize)
            buttonSize = " " + buttonSize;
        let hoverColor = props.hoverColor ? colorsModule.ButtonHovers[props.hoverColor.toUpperCase()] || "" : "";
        if (hoverColor)
            hoverColor = " " + hoverColor;
        props.onClick = typeof props.onClick === "function" ? props.onClick : () => { };
        if (typeof props.wrapper !== "boolean")
            props.wrapper = true;
        let hover = this.state.hover ? euhModule1.hasHover : "";
        if (hover)
            hover = " " + hover;
        let button = React.createElement("button", { type: "button", ref: "button", className: `${flexModule.flexChild} ${euhModule1.button} ${colorsModule.ButtonLooks[props.look.toUpperCase()]} ${colorsModule.ButtonColors[props.color.toUpperCase()]}${buttonSize}${hoverColor}${hover} ${euhModule1.grow}`, style: Object.assign({ flex: "0 1 auto" }, props.style), onClick: () => props.onClick(), onMouseEnter: (ev) => {
                if (!hoverColor)
                    return;
                this.setState({ hover: true });
            }, onMouseLeave: (ev) => {
                if (!hoverColor)
                    return;
                this.setState({ hover: false });
            }, disabled: props.disabled, onContextMenu: () => props.onRightClick() },
            React.createElement("div", { className: euhModule1.contents }, props.children));
        if (props.wrapper) {
            return React.createElement("div", { ref: "wrapper", className: buttonModule.buttonWrapper }, button);
        }
        return button;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            let colors = [];
            for (let color of Button.Colors) {
                colors.push({
                    color: color
                });
            }
            AllPreviews.push(colors);
            let looks = [];
            for (let look of Button.Looks) {
                looks.push({
                    look: look
                });
            }
            AllPreviews.push(looks);
            let sizes = [];
            for (let size of Button.Sizes) {
                sizes.push({
                    size: size
                });
            }
            AllPreviews.push(sizes);
            let hovers = [];
            for (let hover of Button.HoverColors) {
                hovers.push({
                    hoverColor: hover
                });
            }
            AllPreviews.push(hovers);
            AllPreviews.push([{ children: "Test Button" }]);
            AllPreviews.push([{ onClick: () => { } }]);
            AllPreviews.push([{ wrapper: false }]);
            AllPreviews.push([{ disabled: false }, { disabled: true }]);
            return AllPreviews;
        })();
    }
}
exports.default = Button;
Button.Colors = ["brand", "grey", "red", "green", "yellow", "primary", "link", "white", "black", "transparent"];
Button.Looks = ["filled", "inverted", "outlined", "ghost", "link", "blank"];
Button.Sizes = ["small", "medium", "large", "xlarge", "min", "max", "icon", "none"];
Button.HoverColors = ["default", ...Button.Colors];
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/ColorPicker.tsx":
/*!***********************************************!*\
  !*** ./src/components/inputs/ColorPicker.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const Utils_1 = __webpack_require__(/*! ../../modules/Utils */ "./src/modules/Utils.ts");
const Constants = {
    defaultColor: 10070709,
    baseColors: [
        1752220,
        3066993,
        3447003,
        10181046,
        15277667,
        15844367,
        15105570,
        15158332,
        9807270,
        6323595,
        1146986,
        2067276,
        2123412,
        7419530,
        11342935,
        12745742,
        11027200,
        10038562,
        9936031,
        5533306
    ]
};
let ColorPickerModules;
let isFetching = null;
/**
 * This componennt needs to be loaded. As a result, you may experience 100-300ms loading the first time.
 * Render will return `null` before loaded.
 */
class ColorPicker extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || null,
            lastColor: this.props.value
        };
        this.onChange = this.onChange.bind(this);
    }
    /** Preload the component. */
    static preload() {
        if (ColorPicker.prototype.modules[0])
            return; // already loaded
        if (isFetching)
            return; // is fetching so don't double preload.
        try { // If we caught an error
            new ColorPicker({}).render();
        }
        catch (e) {
            console.error(e);
        }
    }
    onChange(val) {
        this.props.onChange(val);
        this.setState({
            value: val
        });
        this.forceUpdate();
    }
    get modules() {
        return ColorPickerModules || (ColorPickerModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "ColorPicker")
        ]);
    }
    renderColorPicker() {
        let [ColorPickerComponent] = this.modules;
        if (!ColorPickerComponent) {
            if (isFetching) { // support for multiple color picker
                isFetching.then(() => this.forceUpdate());
                return null;
            }
            ColorPickerModules = null;
            let resolve;
            isFetching = new Promise(res => (resolve = res));
            const GuildSettingsRoles = new (WebpackLoader_1.default.find(e => e.default && e.default.displayName && e.default.displayName.includes("GuildSettingsRoles")).default)().render().type;
            const settings = GuildSettingsRoles.prototype.renderRoleSettings.call({
                props: {
                    guild: {
                        roles: [],
                        id: null,
                        isOwner: () => false
                    },
                    currentUser: {
                        id: null
                    }
                },
                getSelectedRole() {
                    return {
                        id: null
                    };
                },
                renderHeader: GuildSettingsRoles.prototype.renderHeader
            });
            const GuildRoleSettings = settings.props.children[1].type;
            let children = GuildRoleSettings.prototype.renderColorPicker.call({
                props: {
                    role: {
                        id: null,
                        color: 0
                    },
                    locked: false,
                    everyone: false
                }
            }).props.children;
            children.type(children.props).props.children.type._ctor().then(c => {
                ColorPickerModules = null;
                this.forceUpdate();
                resolve();
            });
            return null;
        }
        return React.createElement(ColorPickerComponent.default, { colors: this.props.baseColors, defaultColor: this.props.defaultColor, value: this.state.value, disabled: this.props.disabled, onChange: this.onChange, customColor: this.props.customColor });
    }
    render() {
        if (this.state.lastColor !== this.props.value) {
            this.state = {
                value: this.props.value,
                lastColor: this.props.value
            };
        }
        return this.renderColorPicker();
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    disabled: false
                },
                {
                    disabled: true
                }
            ], [
                {
                    value: Utils_1.default.HexColorToDecimal("#7289DA")
                }, {
                    value: null
                }
            ], [
                {
                    onChange: (color) => { }
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = ColorPicker;
ColorPicker.defaultProps = {
    defaultColor: Constants.defaultColor,
    customColor: null,
    baseColors: Constants.baseColors,
    value: null,
    disabled: false,
    onChange: noop_1.default
};
ColorPicker.help = {
    info: "To convert hex colors to decimal, you can do `Lightcord.Api.Utils.HexColorToDecimal('#7289DA')` and go back with `Lightcord.Api.Utils.DecimalColorToHex(7506394)`",
    warn: "The component may not appear instantly. The component needs to be loaded, so you could experience 50-300ms loading time depending on your internet connection."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/Dropdown.tsx":
/*!********************************************!*\
  !*** ./src/components/inputs/Dropdown.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let DropdownModules;
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: props.value || null
        };
    }
    onChange(value) {
        this.props.onChange(value);
        this.setState({
            value: value
        });
    }
    get modules() {
        return DropdownModules || (DropdownModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "SelectTempWrapper").default
        ]);
    }
    render() {
        let [DropdownComponent] = this.modules;
        let props = this.props;
        let returnValue = React.createElement(DropdownComponent, Object.assign({}, props, { onChange: this.onChange, value: this.state.value }));
        return returnValue;
    }
    get value() {
        return this.state.value;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    error: null
                }, {
                    error: "An error occured"
                }], [{
                    options: [
                        {
                            value: "option1",
                            label: "Option 1"
                        },
                        {
                            value: "option2",
                            label: "Option 2"
                        },
                        {
                            value: "option3",
                            label: "Option 3"
                        }
                    ]
                }], [{
                    value: "option1"
                }], [{
                    disabled: false
                }, {
                    disabled: true
                }], [{
                    searchable: true
                }, {
                    searchable: false
                }], [{
                    clearable: true
                }, {
                    clearable: false
                }], [{
                    isMulti: false
                }, {
                    isMulti: true
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = Dropdown;
Dropdown.defaultProps = {
    className: null,
    error: null,
    options: [{
            value: "none",
            "label": "No options - No options was passed to Dropdown. If you meant to put an empty dropdown, input an empty array."
        }],
    valueRenderer: null,
    multiValueRenderer: null,
    optionRenderer: null,
    onChange: noop_1.default,
    value: null,
    disabled: false,
    searchable: false,
    clearable: false,
    styleOverrides: null,
    lightThemeColorOverrides: null,
    darkThemeColorOverrides: null,
    isMulti: false
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/RadioGroup.tsx":
/*!**********************************************!*\
  !*** ./src/components/inputs/RadioGroup.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let RadioGroupModule;
class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: props.value
        };
    }
    onChange(ev) {
        this.props.onChange(ev.value);
        this.setState({
            value: ev.value
        });
    }
    get modules() {
        return RadioGroupModule || (RadioGroupModule = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "RadioGroup").default
        ]);
    }
    render() {
        let [RadioGroupComponent] = this.modules;
        let props = this.props;
        return React.createElement(RadioGroupComponent, { options: props.options, onChange: this.onChange, value: this.state.value, disabled: props.disabled, size: RadioGroupComponent.Sizes[props.size.toUpperCase()], itemType: RadioGroupComponent.ItemTypes[props.itemType.toUpperCase()], infoClassName: props.infoClassName });
    }
    get value() {
        return this.state.value;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    options: [
                        {
                            value: "option1",
                            name: "Option 1",
                            desc: "description 1"
                        },
                        {
                            value: "option2",
                            name: "Option 2",
                            desc: "description 2"
                        },
                        {
                            value: "option3",
                            name: "Option 3",
                            desc: "description 3"
                        }
                    ]
                }], [{
                    value: "option1"
                }], [{
                    disabled: false
                }, {
                    disabled: true
                }], [{
                    size: "medium"
                }, {
                    size: "small"
                }], [{
                    itemType: "bar"
                }, {
                    itemType: "panel"
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = RadioGroup;
RadioGroup.defaultProps = {
    options: [{
            value: "none",
            name: "No options",
            desc: "No options was passed to Choices. If you meant to display no options at all, please pass an empty array.",
            color: "#f04747"
        }],
    value: null,
    disabled: false,
    size: "medium",
    itemType: "bar",
    infoClassName: null,
    onChange: noop_1.default
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/Switch.tsx":
/*!******************************************!*\
  !*** ./src/components/inputs/Switch.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let SwitchModules;
class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || false
        };
        this.onChange = this.onChange.bind(this);
    }
    get modules() {
        return SwitchModules || (SwitchModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "Switch").default
        ]);
    }
    render() {
        let [SwitchComponent] = this.modules;
        let props = this.props;
        return (React.createElement(SwitchComponent, { id: props.id, onChange: this.onChange, value: this.state.value || false, fill: props.fill, theme: SwitchComponent.Themes[props.theme.toUpperCase()], disabled: props.disabled, className: props.className, size: SwitchComponent.Sizes[props.size.toUpperCase()], style: props.style }));
    }
    onChange(value) {
        this.props.onChange(!this.state.value);
        this.setState({
            value: !this.state.value
        });
    }
    get value() {
        return this.state.value;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{ onChange: (value) => { } }]);
            AllPreviews.push([{
                    value: false
                }], [{
                    theme: "default"
                }, {
                    theme: "clear"
                }], [{
                    disabled: false
                }, {
                    disabled: true
                }], [{
                    id: "api-preview-switch"
                }], [{
                    fill: null
                }], [{
                    size: "default"
                }, {
                    size: "mini"
                }], [{
                    style: {}
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = Switch;
Switch.defaultProps = {
    id: null,
    onChange: noop_1.default,
    value: false,
    fill: null,
    theme: "default",
    disabled: false,
    className: null,
    size: "default",
    style: {}
};
Switch.help = {
    error: "The `clear` option doesn't work well on light theme."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/TextArea.tsx":
/*!********************************************!*\
  !*** ./src/components/inputs/TextArea.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let TextAreaModules;
class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.state = {
            value: props.value || ""
        };
    }
    get modules() {
        return TextAreaModules || (TextAreaModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "TextArea").default
        ]);
    }
    onChange(value, name) {
        this.props.onChange(value, name);
        this.setState({
            value
        });
    }
    onFocus(ev, name) {
        this.props.onFocus(ev, name);
    }
    onBlur(ev, name) {
        this.props.onBlur(ev, name);
    }
    onKeyDown(ev) {
        this.props.onKeyDown(ev);
    }
    render() {
        let [TextAreaComponent] = this.modules;
        let props = this.props;
        return React.createElement(TextAreaComponent, Object.assign({}, props, { onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown, value: this.state.value }));
    }
    get value() {
        return this.state.value || "";
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    name: "api-preview-textarea"
                }]);
            AllPreviews.push([{
                    disabled: false
                }, {
                    disabled: true
                }]);
            AllPreviews.push([{
                    placeholder: null
                }]);
            AllPreviews.push([{
                    autoFocus: false
                }, {
                    autoFocus: true
                }]);
            AllPreviews.push([{
                    resizeable: false
                }, {
                    resizeable: true
                }]);
            AllPreviews.push([{
                    flex: false
                }, {
                    flex: true
                }]);
            AllPreviews.push([{
                    autosize: false
                }, {
                    autosize: true
                }]);
            AllPreviews.push([{
                    rows: 3
                }, {
                    rows: 2
                }, {
                    rows: 1
                }]);
            AllPreviews.push([{
                    value: ""
                }]);
            AllPreviews.push([{
                    error: null
                }, {
                    error: "Example error"
                }]);
            AllPreviews.push([{
                    maxLength: 100
                }]);
            AllPreviews.push([{
                    className: ""
                }]);
            AllPreviews.push([{
                    inputClassName: ""
                }]);
            AllPreviews.push([{
                    id: "api-preview-textarea"
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = TextArea;
TextArea.defaultProps = {
    name: null,
    disabled: false,
    placeholder: null,
    autoFocus: false,
    resizeable: false,
    flex: false,
    autosize: false,
    rows: 3,
    value: "",
    error: null,
    maxLength: null,
    className: null,
    id: null,
    onChange: noop_1.default,
    onFocus: noop_1.default,
    onBlur: noop_1.default,
    onKeyDown: noop_1.default
};
TextArea.help = {
    warn: "This should be used for multi line inputs."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/TextInput.tsx":
/*!*********************************************!*\
  !*** ./src/components/inputs/TextInput.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let TextInputModules;
class TextInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.state = {
            value: props.value || ""
        };
    }
    get modules() {
        return TextInputModules || (TextInputModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "TextInput").default
        ]);
    }
    onChange(value, name) {
        this.hasSet = false;
        this.props.onChange(value, name, this);
        if (this.hasSet)
            return; // prevent event if the onChange has changed the value.
        this.setState({
            value
        });
        this.forceUpdate();
    }
    onFocus(ev, name) {
        this.props.onFocus(ev, name, this);
    }
    onBlur(ev, name) {
        this.props.onBlur(ev, name, this);
    }
    render() {
        let [TextAreaComponent] = this.modules;
        let props = this.props;
        return React.createElement(TextAreaComponent, Object.assign({}, props, { onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, value: this.state.value }));
    }
    get value() {
        return this.state.value || "";
    }
    setValue(value) {
        this.setState({
            value: value
        });
        this.forceUpdate();
        this.hasSet = true;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    name: "api-preview-textinput"
                }], [{
                    size: "default"
                }, {
                    size: "mini"
                }], [{
                    disabled: false
                }, {
                    disabled: true
                }], [{
                    placeholder: ""
                }], [{
                    value: ""
                }], [{
                    error: null
                }, {
                    error: "Example error"
                }], [{
                    maxLength: 999
                }], [{
                    className: ""
                }], [{
                    inputClassName: ""
                }], [{
                    id: "api-preview-textinput"
                }], [{
                    onChange: (value, name) => { }
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = TextInput;
TextInput.defaultProps = {
    name: "",
    size: "default",
    disabled: false,
    placeholder: "",
    value: "",
    error: null,
    maxLength: 999,
    className: "",
    inputClassName: "",
    id: null,
    onChange: noop_1.default,
    onFocus: noop_1.default,
    onBlur: noop_1.default
};
TextInput.help = {
    warn: "This should be used for single line inputs."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/private/Notice.tsx":
/*!*******************************************!*\
  !*** ./src/components/private/Notice.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultNotice = void 0;
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const Notices_1 = __webpack_require__(/*! ./Notices */ "./src/components/private/Notices.tsx");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let NoticeModules;
exports.defaultNotice = {
    text: "",
    id: "unknown id",
    onClick: noop_1.default,
    buttonText: null,
    type: "default"
};
class Notice extends React.Component {
    get modules() {
        return NoticeModules || (NoticeModules = [
            WebpackLoader_1.default.find(e => e.noticeInfo)
        ]);
    }
    render() {
        const [noticeClasses] = this.modules;
        const className = noticeClasses["notice" + this.props.type.slice(0, 1).toUpperCase() + this.props.type.slice(1)];
        if (!className) {
            Notices_1.notices.pop();
            setImmediate(() => {
                Notices_1.events.emit("noticeUpdate");
            });
            return null;
        }
        const button = this.props.buttonText ? React.createElement("button", { className: noticeClasses.button, onClick: () => {
                Notices_1.notices.pop();
                this.props.onClick();
                Notices_1.events.emit("noticeUpdate");
            } }, this.props.buttonText) : null;
        return React.createElement("div", { className: className },
            React.createElement("div", { className: noticeClasses.dismiss, role: "button", tabIndex: 0, onClick: () => {
                    Notices_1.notices.pop();
                    Notices_1.events.emit("noticeUpdate");
                } }),
            this.props.text,
            button);
    }
}
exports.default = Notice;
Notice.displayName = "LightcordNotice";
Notice.defaultProps = exports.defaultNotice;


/***/ }),

/***/ "./src/components/private/Notices.tsx":
/*!********************************************!*\
  !*** ./src/components/private/Notices.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.notices = exports.events = void 0;
const Notice_1 = __webpack_require__(/*! ./Notice */ "./src/components/private/Notice.tsx");
const events_1 = __webpack_require__(/*! events */ "events");
exports.events = new events_1.EventEmitter();
class Notices extends React.Component {
    constructor(props) {
        super(props);
        this.noticeHandler = this.noticeHandler.bind(this);
    }
    noticeHandler() {
        this.forceUpdate();
    }
    componentWillMount() {
        exports.events.on("noticeUpdate", this.noticeHandler);
    }
    componentWillUnmount() {
        exports.events.off("noticeUpdate", this.noticeHandler);
    }
    render() {
        if (!this.hasNotice)
            return null;
        const notice = exports.notices[0];
        return React.createElement(Notice_1.default, Object.assign({}, notice));
    }
    get hasNotice() {
        return exports.notices.length > 0;
    }
}
exports.default = Notices;
Notices.displayName = "LightcordNotices";
Notices.defaultProps = {};
exports.notices = [];


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ./modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const components_1 = __webpack_require__(/*! ./components/components */ "./src/components/components.ts");
const uuid_1 = __webpack_require__(/*! ./modules/uuid */ "./src/modules/uuid.ts");
const Utils_1 = __webpack_require__(/*! ./modules/Utils */ "./src/modules/Utils.ts");
const DiscordTools_1 = __webpack_require__(/*! ./modules/DiscordTools */ "./src/modules/DiscordTools.ts");
const patchers = __webpack_require__(/*! ./modules/patchers */ "./src/modules/patchers.ts");
const excludeProperties_1 = __webpack_require__(/*! ./modules/excludeProperties */ "./src/modules/excludeProperties.ts");
const cloneNullProto_1 = __webpack_require__(/*! ./modules/cloneNullProto */ "./src/modules/cloneNullProto.ts");
const noop_1 = __webpack_require__(/*! ./modules/noop */ "./src/modules/noop.ts");
const Unfreeze_1 = __webpack_require__(/*! ./modules/Unfreeze */ "./src/modules/Unfreeze.ts");
const environnement_1 = __webpack_require__(/*! ./modules/environnement */ "./src/modules/environnement.ts");
patchers.patch();
const LightcordApi = {
    WebpackLoader: WebpackLoader_1.default,
    Components: components_1.default,
    uuid: uuid_1.default,
    Utils: Utils_1.default,
    DiscordTools: DiscordTools_1.default,
    _: {
        excludeProperties: excludeProperties_1.default,
        cloneNullProto: cloneNullProto_1.default,
        NOOP: noop_1.default,
        unfreeze: Unfreeze_1.default
    },
    get isNative() { return environnement_1.isNative; },
    get isImported() { return environnement_1.isImported; }
};
exports.default = LightcordApi;
Object.assign(window.Lightcord.Api, LightcordApi);


/***/ }),

/***/ "./src/modules/BDModules.ts":
/*!**********************************!*\
  !*** ./src/modules/BDModules.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let req;
setReq();
function filterDangerous(mods) {
    return mods.map(e => {
        return protect(e);
    });
}
function protect(exports) {
    let theModule = exports.exports;
    let mod = theModule.default;
    if (!mod)
        return exports;
    if (mod.remove && mod.set && mod.clear && mod.get && !mod.sort)
        return null;
    if (!mod.getToken && !mod.getEmail && !mod.showToken)
        return exports;
    const proxy = new Proxy(mod, {
        getOwnPropertyDescriptor: function (obj, prop) {
            if (prop === "getToken" || prop === "getEmail" || prop === "showToken")
                return undefined;
            return Object.getOwnPropertyDescriptor(obj, prop);
        },
        get: function (obj, func) {
            if (func == "getToken" && obj.getToken)
                return () => "mfa.XCnbKzo0CLIqdJzBnL0D8PfDruqkJNHjwHXtr39UU3F8hHx43jojISyi5jdjO52e9_e9MjmafZFFpc-seOMa";
            if (func == "getEmail" && obj.getEmail)
                return () => "puppet11112@gmail.com";
            if (func == "showToken" && obj.showToken)
                return () => true;
            if (func == "__proto__" && obj.__proto__)
                return proxy;
            return obj[func];
        }
    });
    return Object.assign({}, exports, { exports: Object.assign({}, theModule, { default: proxy }) });
}
class Webpackloader {
    get modules() {
        if (req) {
            return filterDangerous(Object.values(req.c).filter((e) => e && e.exports));
        }
        else {
            setReq();
            if (req) {
                return filterDangerous(Object.values(req.c).filter((e) => e && e.exports));
            }
            else {
                return [];
            }
        }
    }
    get(ids, modules) {
        if (typeof ids === "function") {
            return (modules || this.modules).map((mdl) => {
                if (mdl && typeof mdl.exports !== "undefined") {
                    return mdl.exports;
                }
                else {
                    return null;
                }
            }).filter(e => e).filter(ids);
        }
        else if (Array.isArray(ids)) {
            modules = modules || this.modules;
            return ids.map(id => this.get(id, modules));
        }
        else {
            modules = modules || this.modules;
            let module = modules.filter(e => !!e).find(e => e.i === ids);
            if (!module)
                return undefined;
            return module.exports;
        }
    }
    get default() {
        return this;
    }
}
exports.default = new Webpackloader();
function setReq() {
    try {
        req = window["webpackJsonp"].push([[], { __extra_id__: (mdl, exports, req) => mdl.exports = req }, [["__extra_id__"]]]);
        if (req) {
            delete req.m.__extra_id__;
            delete req.c.__extra_id__;
        }
    }
    catch (e) {
        req = undefined;
    }
}


/***/ }),

/***/ "./src/modules/DiscordTools.ts":
/*!*************************************!*\
  !*** ./src/modules/DiscordTools.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Notice = void 0;
const Notices_1 = __webpack_require__(/*! ../components/private/Notices */ "./src/components/private/Notices.tsx");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/modules/Utils.ts");
const uuid_1 = __webpack_require__(/*! ./uuid */ "./src/modules/uuid.ts");
const cloneNullProto_1 = __webpack_require__(/*! ./cloneNullProto */ "./src/modules/cloneNullProto.ts");
const events_1 = __webpack_require__(/*! events */ "events");
const Notice_1 = __webpack_require__(/*! ../components/private/Notice */ "./src/components/private/Notice.tsx");
const excludeProperties_1 = __webpack_require__(/*! ./excludeProperties */ "./src/modules/excludeProperties.ts");
const noop_1 = __webpack_require__(/*! ./noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ./WebpackLoader */ "./src/modules/WebpackLoader.ts");
let soundModule;
exports.default = new class DiscordTools {
    showNotice(data) {
        if (typeof data !== "object" || typeof data.text !== "string")
            throw new Error(`This notice is not valid. Given: ${Utils_1.default.formatJSObject(data)}`);
        let newData = cloneNullProto_1.default(Object.assign({}, Notice_1.defaultNotice, data));
        newData.id = uuid_1.default();
        Notices_1.notices.push(newData);
        Notices_1.events.emit("noticeUpdate");
        const notice = new Notice(newData);
        return notice;
    }
    get notices() {
        return Notices_1.notices.map(data => new Notice(data));
    }
    /**
     * Quickly send notification (Even when no focused.)
     * @param data The notification. Be sure to include all properties except functions cause they're optional.
     * Notifications have a timeout of 3-5 seconds.
     * They look like this: https://i.imgur.com/jzuxKKu.png
     */
    showNotification(data) {
        const notification = new window.Notification(data.title, excludeProperties_1.default(data, [
            "title",
            "onClick",
            "onClose",
            "onShow"
        ]));
        notification.onclick = data.onClick || noop_1.default;
        notification.onshow = data.onShow || noop_1.default;
        notification.onclose = data.onClose || noop_1.default;
        return notification;
    }
    createSound(sound) {
        soundModule = soundModule || WebpackLoader_1.default.findByUniqueProperties(["createSound"]);
        if (!soundModule)
            throw new WebpackLoader_1.WebpackLoaderError("Couldn't find soundModule here.");
        const created = soundModule.createSound(sound);
        return created;
    }
    playSound(sound) {
        const created = this.createSound(sound);
        created.play();
        return created;
    }
};
const EventHandler = function () {
    if (this.removed !== this.state.removed) {
        if (this.removed) {
            this.emit("removed");
        }
    }
    if (this.showing !== this.state.showing) {
        if (this.showing) {
            this.emit("showing", true);
        }
        else {
            this.emit("showing", false);
        }
    }
    if (this.index !== this.state.index) {
        this.emit("index", this.index);
    }
};
/** A notice interface for modifying it and subscribing to events. */
class Notice extends events_1.EventEmitter {
    constructor(data) {
        super();
        this.nextTickRefresh = false;
        this.data = data;
        this.state = {
            removed: this.removed,
            showing: this.showing,
            index: this.index
        };
        let eventFunc = EventHandler.bind(this);
        Notices_1.events.on("noticeUpdate", eventFunc);
        this.on("removed", () => {
            Notices_1.events.off("noticeUpdate", eventFunc);
        });
    }
    on(event, listener) {
        return super.on(event, listener);
    }
    once(event, listener) {
        return super.once(event, listener);
    }
    off(event, listener) {
        return super.off(event, listener);
    }
    get removed() {
        return !Notices_1.notices.find(e => e.id === this.id);
    }
    get showing() {
        return this.index === 0;
    }
    get index() {
        return Notices_1.notices.findIndex(e => e.id === this.id);
    }
    get id() {
        return this.data.id;
    }
    update(data) {
        for (let key in data) {
            if (key === "id")
                continue;
            this.data[key] = data[key];
        }
        if (!this.nextTickRefresh) {
            this.nextTickRefresh = true;
            process.nextTick(() => {
                this.nextTickRefresh = false;
                Notices_1.events.emit("noticeUpdate");
            });
        }
    }
    get text() {
        return this.data.text;
    }
    set text(text) {
        this.update({
            text
        });
    }
    get type() {
        return this.data.type;
    }
    set type(type) {
        this.update({
            type
        });
    }
    get buttonText() {
        return this.data.buttonText;
    }
    set buttonText(buttonText) {
        this.update({
            buttonText
        });
    }
    get onClick() {
        return this.data.onClick;
    }
    set onClick(onClick) {
        this.update({
            onClick
        });
    }
    remove() {
        if (this.removed)
            return;
        Notices_1.notices.splice(this.index, 1);
        Notices_1.events.emit("noticeUpdate");
    }
}
exports.Notice = Notice;


/***/ }),

/***/ "./src/modules/PluginUtilities.ts":
/*!****************************************!*\
  !*** ./src/modules/PluginUtilities.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = __webpack_require__(/*! ../components/components */ "./src/components/components.ts");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/modules/Utils.ts");
const uuid_1 = __webpack_require__(/*! ./uuid */ "./src/modules/uuid.ts");
const TextInput_1 = __webpack_require__(/*! ../components/inputs/TextInput */ "./src/components/inputs/TextInput.tsx");
exports.default = new class PluginUtilities {
    constructor() { }
    renderSettings(settings) {
        let items = this.renderSettingsToReact(settings);
        let elem = React.createElement("div", { key: uuid_1.default() }, items);
        return Utils_1.default.ReactToHTMLElement(elem);
    }
    renderSettingsToReact(settings) {
        let items = [];
        settings.forEach(item => {
            if (typeof item !== "object")
                return items.push(item);
            if (item.props && "children" in item.props) {
                if (!Array.isArray(item.props.children))
                    item.props.children = [item.props.children];
                item.props.children = this.renderSettingsToReact(item.props.children);
            }
            if (!item.props)
                item.props = {};
            item.props.key = uuid_1.default();
            let component = Utils_1.default.getNestedProps(components_1.default, item.component);
            if (!component) {
                let warning = new TextInput_1.default({
                    value: `Warning: No component was found for: "${item.component}". Please correct your code.`,
                    disabled: true,
                    error: `Warning: No component was found for: "${item.component}". Please correct your code.`
                }).render();
                items.push(warning);
                return;
            }
            items.push(React.createElement(component, Object.create(item.props)));
        });
        return items;
    }
};


/***/ }),

/***/ "./src/modules/Unfreeze.ts":
/*!*********************************!*\
  !*** ./src/modules/Unfreeze.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function unfreeze(o) {
    var oo = undefined;
    if (o instanceof Array) {
        oo = [];
        var clone = function (v) {
            oo.push(v);
        };
        o.forEach(clone);
    }
    else if (o instanceof String) {
        oo = new String(o).toString();
    }
    else if (typeof o == 'object') {
        oo = {};
        for (var property in o) {
            oo[property] = o[property];
        }
    }
    return oo;
}
exports.default = unfreeze;
Object.unfreeze = unfreeze;


/***/ }),

/***/ "./src/modules/Utils.ts":
/*!******************************!*\
  !*** ./src/modules/Utils.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LightcordApiError = void 0;
const ReactDOM = __webpack_require__(/*! react-dom */ "./src/alias/react-dom.ts");
const PluginUtilities_1 = __webpack_require__(/*! ./PluginUtilities */ "./src/modules/PluginUtilities.ts");
exports.default = new class Utils {
    constructor() { }
    ReactToHTMLElement(ReactElement) {
        const element = document.createElement("div");
        ReactDOM.render(ReactElement, element);
        return element;
    }
    get PluginUtils() { return PluginUtilities_1.default; }
    getNestedProps(obj, path) {
        let segments = path.split(".");
        for (let seg of segments) {
            obj = obj && (seg in obj) ? obj[seg] : undefined;
        }
        return obj;
    }
    DecimalColorToHex(color) {
        return "#" + color.toString(16).toUpperCase();
    }
    HexColorToDecimal(color) {
        color = color.replace(/[#;]/g, "");
        let res = parseInt(color, 16);
        if (isNaN(res))
            throw new Error(`Invalid color: ${color}`);
        return res;
    }
    removeDa(className) {
        if (!className)
            return className;
        return className.split(" ").filter(e => !e.startsWith("da-")).join(" ");
    }
    FindReact(dom, traverseUp = 0) {
        // taken from https://stackoverflow.com/questions/29321742/react-getting-a-component-from-a-dom-element-for-debugging#39165137
        const key = Object.keys(dom).find(key => key.startsWith("__reactInternalInstance$"));
        const domFiber = dom[key];
        if (domFiber == null)
            return null;
        // react <16
        if (domFiber._currentElement) {
            let compFiber = domFiber._currentElement._owner;
            for (let i = 0; i < traverseUp; i++) {
                compFiber = compFiber._currentElement._owner;
            }
            return compFiber._instance;
        }
        // react 16+
        const GetCompFiber = fiber => {
            //return fiber._debugOwner; // this also works, but is __DEV__ only
            let parentFiber = fiber.return;
            while (typeof parentFiber.type == "string") {
                parentFiber = parentFiber.return;
            }
            return parentFiber;
        };
        let compFiber = GetCompFiber(domFiber);
        for (let i = 0; i < traverseUp; i++) {
            compFiber = GetCompFiber(compFiber);
        }
        return compFiber.stateNode;
    }
    hasClass(classNames, className) {
        if (!classNames || !className)
            return false;
        const classnames = classNames.split(" ");
        for (let classname of this.removeDa(className).split(" ")) {
            if (!classnames.includes(classname))
                return false;
        }
        return true;
    }
    formatJSObject(obj) {
        if (["string", "number", "boolean", "bigint", "undefined"].includes(typeof obj))
            return JSON.stringify(obj);
        if (obj === null)
            return "null";
        if (typeof obj === "function")
            return String(obj);
        if (typeof obj === "symbol")
            return String(obj);
        if (Array.isArray(obj)) {
            if (!obj.length)
                return "[]";
            return `[\n    ${obj.map(e => this.formatJSObject(e)).join(",\n    ")}\n]`;
        }
        else {
            const keys = Object.keys(obj);
            if (keys.length === 0)
                return "{}";
            return `{\n    ${keys.map(key => {
                let original = key;
                if (typeof key === "symbol")
                    key = "[" + String(key) + "]";
                else {
                    if (typeof key === "number")
                        key = String(key);
                    else {
                        console.log(key);
                        if (isNaN(parseInt(key[0]))) {
                            key = this.formatJSObject(key);
                        }
                        else if (/[^\w\d_$]/g.test(key)) {
                            key = this.formatJSObject(key);
                        }
                    }
                }
                return `${key}: ${this.formatJSObject(obj[original])}`;
            })}\n}`;
        }
    }
    getColor(color_name) {
        return Lightcord.DiscordModules.constants.Colors[color_name.toUpperCase()];
    }
    firstLetterUppercase(str) {
        if (!str)
            return "";
        return str[0].toUpperCase() + str.slice(1);
    }
    executeXTimes(func, times) {
        let results = [];
        for (let i = 0; times > i; i++) {
            results.push(func(i));
        }
        return results;
    }
};
class LightcordApiError extends Error {
    constructor() {
        super(...arguments);
        this.name = "LightcordApiError";
    }
}
exports.LightcordApiError = LightcordApiError;


/***/ }),

/***/ "./src/modules/WebpackLoader.ts":
/*!**************************************!*\
  !*** ./src/modules/WebpackLoader.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebpackLoaderError = void 0;
const BDModules = window.BDModules || __webpack_require__(/*! ./BDModules */ "./src/modules/BDModules.ts");
exports.default = new class WebpackLoader {
    constructor() { }
    get(id) {
        return BDModules.get(id);
    }
    find(filter) {
        let result = BDModules.get(filter)[0];
        if (!result) {
            console.warn(filter, "couldn't find the module.");
        }
        return result;
    }
    findByUniqueProperties(props) {
        return BDModules.get((mod) => {
            if (mod.__esModule && ("default" in mod)) {
                let doesMatch = true;
                for (let prop of props) {
                    if (!Object.prototype.hasOwnProperty.call(mod.default, prop))
                        doesMatch = false;
                }
                if (doesMatch)
                    return true;
            }
            for (let prop of props) {
                if (!Object.prototype.hasOwnProperty.call(mod, prop))
                    return false;
            }
            return true;
        })[0];
    }
    filter(filter) {
        return BDModules.get(filter);
    }
    filterByUniqueProperties(props) {
        return BDModules.get((mod) => {
            if (mod.__esModule && ("default" in mod)) {
                let doesMatch = true;
                for (let prop of props) {
                    if (!Object.prototype.hasOwnProperty.call(mod.default, prop))
                        doesMatch = false;
                }
                if (doesMatch)
                    return true;
            }
            for (let prop of props) {
                if (!Object.prototype.hasOwnProperty.call(mod, prop))
                    return false;
            }
            return true;
        });
    }
};
class WebpackLoaderError extends Error {
    constructor(message = "") {
        message += "\n\tThis error is related to Lightcord not being able to find a WebpackModule. \n\tPlease show this error and a few lines of logs above this error to the devs. \n\tOpen an issue on https://github.com/Lightcord/Lightcord or in our discord server.";
        super(message);
        this.name = "WebpackLoaderError";
    }
}
exports.WebpackLoaderError = WebpackLoaderError;


/***/ }),

/***/ "./src/modules/cloneNullProto.ts":
/*!***************************************!*\
  !*** ./src/modules/cloneNullProto.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Recreate the given object without the __proto__. Useful for better formatting when output in console.
 * @param obj The object to recreate
 */
function cloneNullProto(obj) {
    let o = Object.create(null);
    Object.keys(obj).forEach(k => {
        o[k] = obj[k];
    });
    return o;
}
exports.default = cloneNullProto;


/***/ }),

/***/ "./src/modules/environnement.ts":
/*!**************************************!*\
  !*** ./src/modules/environnement.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isImported = exports.isNative = void 0;
exports.isNative = typeof window.BDModules === "undefined";
exports.isImported = typeof window.BDModules !== "undefined";


/***/ }),

/***/ "./src/modules/excludeProperties.ts":
/*!******************************************!*\
  !*** ./src/modules/excludeProperties.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function excludeProperties(obj, props) {
    let newObj = {};
    Object.keys(obj).forEach((k) => {
        if (props.includes(k))
            return;
        newObj[k] = obj[k];
    });
    return newObj;
}
exports.default = excludeProperties;


/***/ }),

/***/ "./src/modules/noop.ts":
/*!*****************************!*\
  !*** ./src/modules/noop.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function NOOP() { }
exports.default = NOOP;


/***/ }),

/***/ "./src/modules/patchers.ts":
/*!*********************************!*\
  !*** ./src/modules/patchers.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = void 0;
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/modules/Utils.ts");
const Notices_1 = __webpack_require__(/*! ../components/private/Notices */ "./src/components/private/Notices.tsx");
const environnement_1 = __webpack_require__(/*! ./environnement */ "./src/modules/environnement.ts");
function patch() {
    /** START NOTICE */
    getModule(e => e.default && e.default.displayName === "ConnectedAppView")
        .then(async (mod) => {
        const appClasses = await getModule(e => e.hasNotice);
        const buildRender = original => {
            return function render() {
                const returnValue = original.call(this, ...arguments);
                const newchildren = [];
                let children = returnValue.props.children[1].props.children;
                if (!Array.isArray(children))
                    children = [children];
                newchildren.push(children[0]);
                newchildren.push(React.createElement(Notices_1.default, { container: this }));
                newchildren.push(children[1]);
                returnValue.props.children[1].props.children = newchildren;
                returnValue.props.children[1].props.children[2].props.children[0].props.render = buildRenderChannelSidebar(returnValue.props.children[1].props.children[2].props.children[0].props.render);
                return returnValue;
            };
        };
        const buildRenderChannelSidebar = original => {
            return function renderChannelSidebar() {
                const returnValue = original.call(this, ...arguments);
                const hasNotice = Notices_1.notices.length > 0;
                if (!hasNotice)
                    return returnValue;
                if (!Utils_1.default.hasClass(returnValue.props.className, appClasses.hasNotice)) {
                    returnValue.props.className += " " + Utils_1.default.removeDa(appClasses.hasNotice);
                }
                return returnValue;
            };
        };
        mod.default.prototype.render = buildRender(mod.default.prototype.render);
        (async function () {
            const base = document.querySelector("." + Utils_1.default.removeDa(appClasses.base));
            if (!base)
                throw new Error(`Could not find base here`);
            const elem = Utils_1.default.FindReact(base);
            elem.render = buildRender(elem.render);
            elem.forceUpdate();
        })();
    });
    /** END NOTICE */
    if (environnement_1.isNative) {
        /** START USERPOPOUT PATCH */
        awaitLogin()
            .then(async () => {
            let UserPopout = await getModule(e => e.default && e.default.displayName === "FluxContainer(ForwardRef(SubscribeGuildMembersContainer(UserPopout)))");
            const userModule = await getModule(e => e.default && e.default.getCurrentUser);
            const render1 = new UserPopout.default({ userId: userModule.default.getCurrentUser().id, guildId: null, channelId: null, disableUserProfileLink: true }).render();
            const PopoutProps = render1.props;
            const render2 = render1.type.render(PopoutProps, null);
            const render3 = new render2.type(render2.props).render();
            const UserPopoutComponent = render3.type;
            if (!UserPopoutComponent)
                throw new Error(`Couldn't find the UserPopoutComponent component.`);
            const render = UserPopoutComponent.prototype.render;
            UserPopoutComponent.prototype.render = function () {
                const returnValue = render.call(this, ...arguments);
                try {
                    returnValue.props.children.props["data-user-id"] = this.props.user.id;
                }
                catch (e) {
                    console.error(e);
                }
                return returnValue;
            };
        });
        /** END USERPOPOUT PATCH*/
        /** START USERPROFILE PATCH */
        awaitLogin()
            .then(async () => {
            let UserProfile = await getModule(e => e.default && e.default.displayName === "UserProfile");
            const userModule = await getModule(e => e.default && e.default.getCurrentUser);
            const render1 = new UserProfile.default({
                user: userModule.default.getCurrentUser()
            }).render();
            const render2 = new render1.type(render1.props).render();
            const render3 = render2.type.render(render2.props, null);
            const render4 = new render3.type(render3.props).render();
            const UserProfileComponent = render4.type;
            if (!UserProfileComponent)
                throw new Error(`Couldn't find the UserProfileComponent component.`);
            const render = UserProfileComponent.prototype.render;
            UserProfileComponent.prototype.render = function () {
                const returnValue = render.call(this, ...arguments);
                console.log(returnValue);
                try {
                    returnValue.props.children.props["data-user-id"] = this.props.user.id;
                }
                catch (e) {
                    console.error(e);
                }
                return returnValue;
            };
        });
        /** END USERPROFILE PATCH */
        /** START WEBHOOK PATCH */
        /*
                let usedWebhooks = {}
        
                getModule(e => e && e.Request && e.Request.prototype && e.Request.prototype.end)
                .then(RequestModule => {
                    const end = RequestModule.Request.prototype.end
                    RequestModule.Request.prototype.end = function(){
                        if(this.url.endsWith("/messages") && /\/channels\/\d+\/messages/g.test(this.url) && this.method === "POST"){ // sending message
                            let channelId = this.url.split("/channels/")[1].split("/messages")[0]
                            
                            if(usedWebhooks[channelId]){ // webhook is availlable
                                let webhook = usedWebhooks[channelId]
                                let url = `/webhooks/${webhook.id}/${webhook.token}?wait=true`
                                this.url = url
                            }
                        }
        
                        return end.call(this, ...arguments)
                    }
                })
                getModule(e => e.default && e.default.displayName === "Webhook")
                .then(webhookComponent => {
                    const renderEdit = webhookComponent.default.prototype.renderEdit
                    webhookComponent.default.prototype.renderEdit = function(){
                        const webhook = this.props.webhook
                        let returnValue = renderEdit.call(this, ...arguments)
                        returnValue.props.children = [returnValue.props.children]
                        let message = usedWebhooks[webhook.channel_id] && usedWebhooks[webhook.channel_id].id === webhook.id ? "Stop talking with this webhook" : "Talk with this webhook"
        
                        returnValue.props.children.push(React.createElement(window.Lightcord.Api.Components.inputs.Button, {color: "green", wrapper: false, onClick(){
                            if(usedWebhooks[webhook.channel_id] && usedWebhooks[webhook.channel_id].id === webhook.id){
                                delete usedWebhooks[webhook.channel_id]
                            }else{
                                usedWebhooks[webhook.channel_id] = {
                                    id: webhook.id,
                                    token: webhook.token
                                }
                            }
                            webhookPanels.forEach(e => e())
                        }}, message))
        
                        return returnValue
                    }
                })
        
                let webhookPanels = []
                let getComp = (comp) => {
                    class SettingsWebhooks extends React.PureComponent {
                        constructor(props){
                            super(props)
                        }
        
                        componentWillMount(){
                            this.id = uuid()
                            this.component = new comp(this.props)
                            let func = () => {
                                this.component.forceUpdate()
                            }
                            func.id = this.id
                            webhookPanels.push(func)
                        }
        
                        componentWillUnmount(){
                            this.component = null
                            webhookPanels = webhookPanels.filter(e => e.id !== this.id)
                        }
        
                        render(){
                            return this.component.render()
                        }
        
                        static displayName = "SettingsWebhooks"
                    }
        
                    return SettingsWebhooks
                }
                getModule(e => e.default && e.default.displayName === "FluxContainer(SettingsWebhooks)")
                .then(webhooksComponents => {
                    let comp = webhooksComponents.default
        
                    webhooksComponents.default = getComp(comp)
        
                    WebpackLoader.find(e => e.default && e.default.displayName === "FluxContainer(FluxContainer(SettingsWebhooks))")
                    .forEach(mod => {
                        mod.default = getComp(mod.default)
                    })
                })*/
        /** END WEBHOOK PATCH */
    }
    // TODO: Add in app-notifications / confirmations.
    /** START IN-APP NOTIFICATIONS */
    //getModule(e => true)
    /** END IN-APP NOTIFICATIONS */
}
exports.patch = patch;
function getModule(filter) {
    return new Promise((resolve) => {
        window.Lightcord.Api.ensureExported(filter)
            .then(resolve)
            .catch(err => {
            console.error("[LIGHTCORD]", err, filter);
        });
    });
}
let hasCompletedLogin = false;
let loginPromise;
function awaitLogin() {
    if (hasCompletedLogin)
        return Promise.resolve();
    if (loginPromise)
        return loginPromise;
    return loginPromise = new Promise((resolve) => {
        let isResolved = false;
        window.Lightcord.DiscordModules.dispatcher.subscribe("CONNECTION_OPEN", (ev) => {
            if (isResolved)
                return;
            hasCompletedLogin = true;
            resolve();
            isResolved = true;
        });
    });
}
window.Lightcord.DiscordModules.dispatcher.subscribe("LOGOUT", (ev) => {
    hasCompletedLogin = false;
    loginPromise = undefined;
});


/***/ }),

/***/ "./src/modules/uuid.ts":
/*!*****************************!*\
  !*** ./src/modules/uuid.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const uuidv1 = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
const uuidv4 = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
let uuid = Object.assign(function () {
    return uuidv4();
}, { v1: () => uuidv1(), v4: () => uuidv4() });
exports.default = uuid;


/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "powercord/webpack":
/*!************************************!*\
  !*** external "powercord/webpack" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("powercord/webpack");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2FsaWFzL3JlYWN0LWRvbS50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvYWxpYXMvcmVhY3QudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL0FsZXJ0Qm94LnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL0NvZGVCbG9jay50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9FcnJvckNhdGNoZXIudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvRmxleC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9TZXR0aW5nU3ViVGl0bGUudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvU2V0dGluZ3NUaXRsZS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9UYWJzLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL1RleHQudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9UaXRsZS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9Ub29sdGlwLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9CdXR0b24udHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9Db2xvclBpY2tlci50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0Ryb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvUmFkaW9Hcm91cC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1N3aXRjaC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1RleHRBcmVhLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvVGV4dElucHV0LnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9wcml2YXRlL05vdGljZS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvcHJpdmF0ZS9Ob3RpY2VzLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvQkRNb2R1bGVzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL0Rpc2NvcmRUb29scy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9QbHVnaW5VdGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvVW5mcmVlemUudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvV2VicGFja0xvYWRlci50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9jbG9uZU51bGxQcm90by50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9lbnZpcm9ubmVtZW50LnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL2V4Y2x1ZGVQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL25vb3AudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvcGF0Y2hlcnMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvdXVpZC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvZXh0ZXJuYWwgXCJwb3dlcmNvcmQvd2VicGFja1wiIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS9leHRlcm5hbCBcInV1aWQvdjFcIiIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvZXh0ZXJuYWwgXCJ1dWlkL3Y0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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QUU7SUFDN0MsSUFBRyxZQUFZO1FBQUMsT0FBTyxZQUFZO0lBRW5DLE9BQU8sWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDMUMsSUFBSSxVQUFVLEdBQUcsS0FBSztRQUN0QixNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDM0UsSUFBRyxVQUFVO2dCQUFDLE9BQU07WUFDcEIsaUJBQWlCLEdBQUcsSUFBSTtZQUN4QixPQUFPLEVBQUU7WUFDVCxVQUFVLEdBQUcsSUFBSTtRQUNyQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7QUFDTixDQUFDO0FBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUNsRSxpQkFBaUIsR0FBRyxLQUFLO0lBQ3pCLFlBQVksR0FBRyxTQUFTO0FBQzVCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdk9GLDZEQUFpQztBQUNqQyw2REFBaUM7QUFHakMsSUFBSSxJQUFJLEdBQTJDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0QsT0FBTyxNQUFNLEVBQUU7QUFDbkIsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDO0FBRTVDLGtCQUFlLElBQUk7Ozs7Ozs7Ozs7OztBQ1JuQixtQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBSZWFjdERPTVNlbGVjdG9yIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCJcclxuXHJcbi8vIGJhaXQgdHlwZXNjcmlwdCBpbnRvIHRoaW5raW5nIHRoaXMgaXMgbm90IHJlYWN0RE9NIHNvIG5vIGNpcmN1bGFyIGRlcGVuZGVuY3kuXHJcbndpbmRvdy5SZWFjdERPTSA9ICh3aW5kb3dbXCJSZWFjXCIrXCJ0RE9NXCJdIHx8IC8vIElmIGluIExpZ2h0Y29yZFxyXG4gICAgKCgpPT57IC8vIElmIGluIFN0YW5kYXJkIEJldHRlckRpc2NvcmRcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuQmRBcGkuUmVhY3RET01cclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSkoKSB8fFxyXG4gICAgKCgpPT57IC8vIElmIGluIFBvd2VyY29yZFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3Qgd2VicGFjayA9IHJlcXVpcmUoXCJwb3dlcmNvcmQvd2VicGFja1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gd2VicGFjay5SZWFjdERPTVxyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9KSgpIHx8IFxyXG4gICAgKCgpPT57IC8vIElmIGluIEVuaGFuY2VkRGlzY29yZFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5FREFwaS5SZWFjdERPTVxyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9KSgpKSBhcyB0eXBlb2YgaW1wb3J0KFwicmVhY3QtZG9tXCIpXHJcblxyXG5leHBvcnQgPSAod2luZG93LlJlYWN0RE9NIGFzIGFueSkiLCJpbXBvcnQgeyBSZWFjdFNlbGVjdG9yIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XHJcblxyXG53aW5kb3cuUmVhY3QgPSAod2luZG93LlJlYWN0IHx8IC8vIElmIGluIExpZ2h0Y29yZFxyXG4gICAgKCgpPT57IC8vIElmIGluIFN0YW5kYXJkIEJldHRlckRpc2NvcmRcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuQmRBcGkuUmVhY3RcclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSkoKSB8fFxyXG4gICAgKCgpPT57IC8vIElmIGluIFBvd2VyY29yZFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3Qgd2VicGFjayA9IHJlcXVpcmUoXCJwb3dlcmNvcmQvd2VicGFja1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gd2VicGFjay5SZWFjdFxyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9KSgpIHx8IFxyXG4gICAgKCgpPT57IC8vIElmIGluIEVuaGFuY2VkRGlzY29yZFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5FREFwaS5SZWFjdFxyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9KSgpKSBhcyB0eXBlb2YgaW1wb3J0KFwicmVhY3RcIilcclxuXHJcbmV4cG9ydCA9IHdpbmRvdy5SZWFjdCIsImltcG9ydCBEaXNjb3JkQnV0dG9uIGZyb20gXCIuL2lucHV0cy9CdXR0b25cIlxyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCIuL2lucHV0cy9Td2l0Y2hcIlxyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tIFwiLi9pbnB1dHMvUmFkaW9Hcm91cFwiXHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi9pbnB1dHMvVGV4dEFyZWFcIlxyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gXCIuL2lucHV0cy9UZXh0SW5wdXRcIlxyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vaW5wdXRzL0Ryb3Bkb3duXCJcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL2dlbmVyYWwvVGl0bGVcIlxyXG5pbXBvcnQgU2V0dGluZ3NUaXRsZSBmcm9tIFwiLi9nZW5lcmFsL1NldHRpbmdzVGl0bGVcIlxyXG5pbXBvcnQgVGFicywgeyBUYWIgfSBmcm9tIFwiLi9nZW5lcmFsL1RhYnNcIlxyXG5pbXBvcnQgU2V0dGluZ1N1YlRpdGxlIGZyb20gXCIuL2dlbmVyYWwvU2V0dGluZ1N1YlRpdGxlXCJcclxuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi9nZW5lcmFsL0NvZGVCbG9ja1wiXHJcbmltcG9ydCBjbG9uZU51bGxQcm90byBmcm9tIFwiLi4vbW9kdWxlcy9jbG9uZU51bGxQcm90b1wiXHJcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuL2dlbmVyYWwvVG9vbHRpcFwiXHJcbmltcG9ydCBDb2xvclBpY2tlciBmcm9tIFwiLi9pbnB1dHMvQ29sb3JQaWNrZXJcIlxyXG5pbXBvcnQgQWxlcnRCb3ggZnJvbSBcIi4vZ2VuZXJhbC9BbGVydEJveFwiXHJcbmltcG9ydCBFcnJvckNhdGNoZXIsIHsgY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyB9IGZyb20gXCIuL2dlbmVyYWwvRXJyb3JDYXRjaGVyXCJcclxuaW1wb3J0IEZsZXgsIHsgRmxleENoaWxkIH0gZnJvbSBcIi4vZ2VuZXJhbC9GbGV4XCJcclxuaW1wb3J0IFRleHQgZnJvbSBcIi4vZ2VuZXJhbC9UZXh0XCJcclxuaW1wb3J0IERhdGVSYW5nZSBmcm9tIFwiLi9pbnB1dHMvRGF0ZVJhbmdlXCJcclxuaW1wb3J0IERhdGVJbnB1dCBmcm9tIFwiLi9pbnB1dHMvRGF0ZUlucHV0XCJcclxuXHJcbmNvbnN0IFJhZGlvR3JvdXBQcm94aWVkID0gY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhSYWRpb0dyb3VwKVxyXG5leHBvcnQgZGVmYXVsdCBjbG9uZU51bGxQcm90byh7XHJcbiAgICBpbnB1dHM6IGNsb25lTnVsbFByb3RvKHtcclxuICAgICAgICBCdXR0b246IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoRGlzY29yZEJ1dHRvbiksXHJcbiAgICAgICAgU3dpdGNoOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKFN3aXRjaCksXHJcbiAgICAgICAgQ2hvaWNlczogUmFkaW9Hcm91cFByb3hpZWQsXHJcbiAgICAgICAgUmFkaW9Hcm91cDogUmFkaW9Hcm91cFByb3hpZWQsXHJcbiAgICAgICAgVGV4dEFyZWE6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoVGV4dEFyZWEpLFxyXG4gICAgICAgIFRleHRJbnB1dDogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhUZXh0SW5wdXQpLFxyXG4gICAgICAgIERyb3Bkb3duOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKERyb3Bkb3duKSxcclxuICAgICAgICBDb2xvclBpY2tlcjogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhDb2xvclBpY2tlciksXHJcbiAgICAgICAgLy9EYXRlUmFuZ2U6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoRGF0ZVJhbmdlKSxcclxuICAgICAgICAvL0RhdGVJbnB1dDogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhEYXRlSW5wdXQpXHJcbiAgICB9KSxcclxuICAgIGdlbmVyYWw6IGNsb25lTnVsbFByb3RvKHtcclxuICAgICAgICBUaXRsZTogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhUaXRsZSksXHJcbiAgICAgICAgU2V0dGluZ3NUaXRsZTogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhTZXR0aW5nc1RpdGxlKSxcclxuICAgICAgICBTZXR0aW5nU3ViVGl0bGU6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoU2V0dGluZ1N1YlRpdGxlKSxcclxuICAgICAgICBUYWJzOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKFRhYnMpLFxyXG4gICAgICAgIENvZGVCbG9jazogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhDb2RlQmxvY2spLFxyXG4gICAgICAgIFRvb2x0aXA6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoVG9vbHRpcCksXHJcbiAgICAgICAgQWxlcnRCb3g6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoQWxlcnRCb3gpLFxyXG4gICAgICAgIEZsZXg6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoRmxleCksXHJcbiAgICAgICAgRmxleENoaWxkOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKEZsZXhDaGlsZCksXHJcbiAgICAgICAgRXJyb3JDYXRjaGVyOiBFcnJvckNhdGNoZXIsXHJcbiAgICAgICAgVGV4dDogVGV4dFxyXG4gICAgfSlcclxufSkiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbnR5cGUgQWxlcnRCb3hQcm9wcyA9IHtcclxuICAgIHR5cGU6IFwid2FyblwifFwiaW5mb1wifFwiZGFuZ2VyXCJ8XCJlcnJvclwifFwic3VjY2Vzc1wiLFxyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZXxzdHJpbmdcclxufVxyXG5cclxubGV0IEFsZXJ0Qm94TW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBbGVydEJveFByb3BzPiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOkFsZXJ0Qm94UHJvcHMgPSB7XHJcbiAgICAgICAgdHlwZTogXCJpbmZvXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBBbGVydEJveE1vZHVsZXMgfHwgKEFsZXJ0Qm94TW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJNYXJrZG93blwiICYmIGUuZGVmYXVsdC5kZWZhdWx0UHJvcHMucGFyc2VyKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBbXHJcbiAgICAgICAgICAgIE1hcmtkb3duXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgd3JhcFxyXG4gICAgICAgIGxldCBjaGlsZHJlblxyXG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuID09PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgd3JhcCA9IE1hcmtkb3duLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh7XHJcbiAgICAgICAgICAgICAgICBwcm9wczogT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICB9LCBNYXJrZG93bi5kZWZhdWx0UHJvcHMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNoaWxkcmVuID0gd3JhcC5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB3cmFwID0gTWFya2Rvd24ucHJvdG90eXBlLnJlbmRlci5jYWxsKHtcclxuICAgICAgICAgICAgICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiXCJcclxuICAgICAgICAgICAgICAgIH0sIE1hcmtkb3duLmRlZmF1bHRQcm9wcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdyYXAucHJvcHMuY2hpbGRyZW4gPSA8ZGl2IGNsYXNzTmFtZT17XCJsYy1hbGVydC1ib3ggbGMtYWxlcnQtYm94LVwiK3RoaXMucHJvcHMudHlwZX0+XHJcbiAgICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cImxjLWJsb2NrcXVvdGVcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHJldHVybiB3cmFwXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIioqKkRpc2NvcmQncyoqKiAqKk1hcmtkb3duKiogX2lzXyBbc3VwcG9ydGVkXShodHRwczovL2dvb2dsZS5jb20pIG9yIHlvdSBjYW4ganVzdCBpbnNlcnQgeW91ciBvd24gcmVhY3QgY2hpbGRzLlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImluZm9cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwID0ge1xyXG4gICAgICAgIGluZm86IFwiWW91IGNhbiBpbnNlcnQgbWFya2Rvd24gKGFzIHN0cmluZykgb3Igbm9ybWFsIHJlYWN0IGNoaWxkc1wiLFxyXG4gICAgICAgIHdhcm46IFwiQWxsIHN0cmluZyB3aWxsIGJlIGludGVycHJldGVkIGFzIG1hcmtkb3duLiBJZiB5b3Ugd2FudCByYXcgc3RyaW5nLCBwYXNzIGFuIGFycmF5IHdpdGggdGhlIHN0cmluZyBpbnNpZGUuXCJcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuXHJcbnR5cGUgQ29kZUJsb2NrUHJvcHMgPSB7XHJcbiAgICBsYW5ndWFnZT86IHN0cmluZyxcclxuICAgIGNvbnRlbnQ6IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgQ29kZUJsb2NrTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlQmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q29kZUJsb2NrUHJvcHM+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6Q29kZUJsb2NrUHJvcHMgPSB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwicGxhaW50ZXh0XCIsXHJcbiAgICAgICAgY29udGVudDogXCJcIlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBDb2RlQmxvY2tNb2R1bGVzIHx8IChDb2RlQmxvY2tNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLm1hcmt1cCksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUubWVzc2FnZUNvbnRlbnQpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLnNjcm9sbGJhckdob3N0SGFpcmxpbmUpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmhpZ2hsaWdodCksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUubWFyZ2luQm90dG9tOClcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIG1lc3NhZ2VNb2R1bGUxLFxyXG4gICAgICAgICAgICBtZXNzYWdlTW9kdWxlMixcclxuICAgICAgICAgICAgc2Nyb2xsYmFyTW9kdWxlMSxcclxuICAgICAgICAgICAgaGlnaHRsaWdodEpTLFxyXG4gICAgICAgICAgICBtYXJnaW5Nb2R1bGUxXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBjb25zdCBjb2RlID0gdGhpcy5wcm9wcy5sYW5ndWFnZSA9PT0gXCJwbGFpbnRleHRcIiA/IDxjb2RlIGNsYXNzTmFtZT17YCR7c2Nyb2xsYmFyTW9kdWxlMS5zY3JvbGxiYXJHaG9zdEhhaXJsaW5lfSBobGpzYH0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRlbnR9XHJcbiAgICAgICAgPC9jb2RlPiA6IDxjb2RlIGNsYXNzTmFtZT17YCR7c2Nyb2xsYmFyTW9kdWxlMS5zY3JvbGxiYXJHaG9zdEhhaXJsaW5lfSBobGpzYH0gXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBoaWdodGxpZ2h0SlMuaGlnaGxpZ2h0KHRoaXMucHJvcHMubGFuZ3VhZ2UsIHRoaXMucHJvcHMuY29udGVudCkudmFsdWV9fSAvPlxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Ake21lc3NhZ2VNb2R1bGUxLm1hcmt1cH0gJHttZXNzYWdlTW9kdWxlMi5tZXNzYWdlQ29udGVudH1gfT5cclxuICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgIHtjb2RlfVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21hcmdpbk1vZHVsZTEubWFyZ2luQm90dG9tOH0+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcImNvbnNvbGUubG9nKFxcXCJFeGVtcGxlIGNvZGVcXFwiKVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcImpzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IFwicGxhaW50ZXh0XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAuLi5Db2RlQmxvY2sucHJvdG90eXBlLm1vZHVsZXNbM10ubGlzdExhbmd1YWdlcygpLmZpbHRlcihlID0+IGUgIT09IFwianNcIikubWFwKGUgPT4gKHtsYW5ndWFnZTogZX0pKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIjtcclxuaW1wb3J0IERpc2NvcmRUb29scyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9EaXNjb3JkVG9vbHNcIjtcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiO1xyXG5pbXBvcnQgdXVpZCBmcm9tIFwiLi4vLi4vbW9kdWxlcy91dWlkXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiO1xyXG5pbXBvcnQgQWxlcnRCb3ggZnJvbSBcIi4vQWxlcnRCb3hcIjtcclxuXHJcblxyXG50eXBlIEVycm9yQ2F0Y2hlclByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG59XHJcbmxldCBFcnJvckNhdGNoZXJNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQ2F0Y2hlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFcnJvckNhdGNoZXJQcm9wcywge2Vycm9yOiBib29sZWFuLCBoYXNTZW50Tm90aWZpY2F0aW9uOiBib29sZWFufT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6RXJyb3JDYXRjaGVyUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgaGFzU2VudE5vdGlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBvcmlnaW5hbCgpe1xyXG4gICAgICAgIHJldHVybiBFcnJvckNhdGNoZXJcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpOmFueVtde1xyXG4gICAgICAgIHJldHVybiBFcnJvckNhdGNoZXJNb2R1bGVzIHx8IChFcnJvckNhdGNoZXJNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmVtcHR5U3RhdGVJbWFnZSAmJiBlLmVtcHR5U3RhdGUpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICBkZWZhdWx0UHJvcHM6RXJyb3JDYXRjaGVyUHJvcHMgPSB7XHJcbiAgICAgICAgY2hpbGRyZW46IG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5lcnJvcil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgfWVsc2V7IC8vIHRyeSB0byByZW5kZXIgYSB1c2VyLWZyaWVuZGx5IGludGVyZmFjZS5cclxuICAgICAgICAgICAgY29uc3QgW1xyXG4gICAgICAgICAgICAgICAgZW1wdHlDbGFzc2VzXHJcbiAgICAgICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuICAgICAgICAgICAgaWYoIWVtcHR5Q2xhc3Nlcyl7IC8vIElmIHdlIGNhbid0LCByZW5kZXIgbm90aGluZyBhbmQgc2hvdyBhIG5vdGlmaWNhdGlvbi5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuaGFzU2VudE5vdGlmaWNhdGlvbilyZXR1cm4gbnVsbCAvLyBJZiB0aGUgbm90aWZpY2F0aW9uIHdhcyBhbHJlYWR5IHNlbnQsIGRvbid0IHNlbmQgb25lLlxyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gRGlzY29yZFRvb2xzLnNob3dOb3RpZmljYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFwiQW4gZXJyb3Igb2NjdXJlZC4gUGxlYXNlIGNoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlIGluZm9ybWF0aW9ucy5cIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9saWdodGNvcmQucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogTk9PUCxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlOiBOT09QLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2hvdzogTk9PUCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJMaWdodGNvcmQgSW5mb3JtYXRpb25zXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNTZW50Tm90aWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmNsb3NlKClcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17ZW1wdHlDbGFzc2VzLmVtcHR5U3RhdGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2VtcHR5Q2xhc3Nlcy5lbXB0eVN0YXRlSW1hZ2V9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZW1wdHlDbGFzc2VzLmVtcHR5U3RhdGVIZWFkZXJ9PkFuIGVycm9yIG9jY3VyZWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZW1wdHlDbGFzc2VzLmVtcHR5U3RhdGVTdWJ0ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgY2hlY2sgdGhlIGNvbnNvbGUgZm9yIG1vcmUgaW5mb3JtYXRpb25zLiBKb2luIG91ciDCrXN1cHBvcnQgc2VydmVyIGZvciBtb3JlIGhlbHAuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9ySW5mby5jb21wb25lbnRTdGFjaylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZXJyb3I6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKEFsbFByZXZpZXdzID0gW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IDxBbGVydEJveCB0eXBlPVwiaW5mb1wiPlRoaXMgQWxlcnRCb3ggaXMgcHJvdGVjdGVkIGJ5IGFuIEVycm9yQ2F0Y2hlci48L0FsZXJ0Qm94PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxufVxyXG5cclxubGV0IEFsbFByZXZpZXdzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzczxiYXNlID0gRnVuY3Rpb24+KENsYXNzOmJhc2UpOmJhc2UgJiB7XHJcbiAgICByZWFkb25seSBvcmlnaW5hbDogYmFzZVxyXG59e1xyXG4gICAgY29uc3QgQ2xhc3NDb3B5ID0gKGNsYXNzIFByb3hpZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgICAgICByZXR1cm4gPEVycm9yQ2F0Y2hlciBrZXk9e3V1aWQoKX0+XHJcbiAgICAgICAgICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChDbGFzcyBhcyBhbnksIHtyZWY6IFwib3JpZ2luYWxcIiwgLi4udGhpcy5wcm9wcywga2V5OiB1dWlkKCl9KX1cclxuICAgICAgICAgICAgPC9FcnJvckNhdGNoZXI+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBDbGFzc1tcImRpc3BsYXlOYW1lXCJdIHx8IENsYXNzW1wibmFtZVwiXVxyXG5cclxuICAgICAgICBzdGF0aWMgZ2V0IG9yaWdpbmFsKCl7XHJcbiAgICAgICAgICAgIHJldHVybiBDbGFzc1xyXG4gICAgICAgIH1cclxuICAgIH0pIGFzIGFueVxyXG4gICAgT2JqZWN0LmVudHJpZXMoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoQ2xhc3MpKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICBpZih2YWx1ZVswXSBpbiBDbGFzc0NvcHkpcmV0dXJuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENsYXNzQ29weSwgdmFsdWVbMF0sIHZhbHVlWzFdKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBDbGFzc0NvcHlcclxufSIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUsIENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuXHJcbnR5cGUgRmxleFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgYWxpZ24/OiBzdHJpbmcsXHJcbiAgICBqdXN0aWZ5Pzogc3RyaW5nLFxyXG4gICAgZGlyZWN0aW9uPzogc3RyaW5nLFxyXG4gICAgc2hyaW5rPzogbnVtYmVyLFxyXG4gICAgZ3Jvdz86IG51bWJlcixcclxuICAgIGJhc2lzPzogXCJhdXRvXCJ8c3RyaW5nLFxyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZSxcclxuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllc1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNb2R1bGVzKCl7XHJcbiAgICByZXR1cm4gRmxleE1vZHVsZXMgfHwgKEZsZXhNb2R1bGVzID0gW1xyXG4gICAgICAgICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBGbGV4ID0gV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJGbGV4XCIpXHJcbiAgICAgICAgICAgIGlmKEZsZXgpRmxleCA9IEZsZXguZGVmYXVsdFxyXG4gICAgICAgICAgICByZXR1cm4gRmxleFxyXG4gICAgICAgIH0pKClcclxuICAgIF0pXHJcbn1cclxuXHJcbmxldCBGbGV4TW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEZsZXhQcm9wcz4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6RmxleFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBnZXRNb2R1bGVzKClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBGbGV4Q29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICByZXR1cm4gPEZsZXhDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBEaXJlY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gZ2V0TW9kdWxlcygpWzBdLkRpcmVjdGlvbiBhcyB7XHJcbiAgICAgICAgICAgIFZFUlRJQ0FMOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIEhPUklaT05UQUw6IHN0cmluZyxcclxuICAgICAgICAgICAgSE9SSVpPTlRBTF9SRVZFUlNFOiBzdHJpbmdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGlnbigpe1xyXG4gICAgICAgIHJldHVybiBnZXRNb2R1bGVzKClbMF0uQWxpZ24gYXMge1xyXG4gICAgICAgICAgICBTVEFSVDogc3RyaW5nLFxyXG4gICAgICAgICAgICBFTkQ6IHN0cmluZyxcclxuICAgICAgICAgICAgQ0VOVEVSOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIFNUUkVUQ0g6IHN0cmluZyxcclxuICAgICAgICAgICAgQkFTRUxJTkU6IHN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEp1c3RpZnkoKXtcclxuICAgICAgICByZXR1cm4gZ2V0TW9kdWxlcygpWzBdLkp1c3RpZnkgYXMge1xyXG4gICAgICAgICAgICBTVEFSVDogc3RyaW5nLFxyXG4gICAgICAgICAgICBFTkQ6IHN0cmluZyxcclxuICAgICAgICAgICAgQ0VOVEVSOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIEJFVFdFRU46IHN0cmluZyxcclxuICAgICAgICAgICAgQVJPVU5EOiBzdHJpbmdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBXcmFwKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldE1vZHVsZXMoKVswXS5KdXN0aWZ5IGFzIHtcclxuICAgICAgICAgICAgTk9fV1JBUDogc3RyaW5nLFxyXG4gICAgICAgICAgICBXUkFQOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIFdSQVBfUkVWRVJTRTogc3RyaW5nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJZb3VyIGNvbXBvbmVudHMgaGVyZS5cIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3c1xyXG5cclxuZXhwb3J0IHR5cGUgRmxleENoaWxkUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgZ3Jvdz86IG51bWJlcixcclxuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllcyxcclxuICAgIHdyYXA/OiBib29sZWFuXHJcbn1cclxuZXhwb3J0IGNsYXNzIEZsZXhDaGlsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxGbGV4Q2hpbGRQcm9wcz4ge1xyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gZ2V0TW9kdWxlcygpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgW1xyXG4gICAgICAgICAgICBGbGV4Q29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICByZXR1cm4gPEZsZXhDb21wb25lbnQuQ2hpbGQgey4uLnRoaXMucHJvcHN9IC8+XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgU2V0dGluZ1N1YlRpdGxlUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxubGV0IFRpdGxlTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nU3ViVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2V0dGluZ1N1YlRpdGxlUHJvcHM+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6U2V0dGluZ1N1YlRpdGxlUHJvcHMgPSB7XHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRpdGxlTW9kdWxlcyB8fCAoVGl0bGVNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiB0eXBlb2YgZS5tYXJnaW5Ub3A2MCA9PT0gXCJzdHJpbmdcIiksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJoNVwiXSksXHJcbiAgICAgICAgICAgIHdpbmRvdy5MaWdodGNvcmQuQXBpLldlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJzaXplMTRcIl0pLFxyXG4gICAgICAgICAgICB3aW5kb3cuTGlnaHRjb3JkLkFwaS5XZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiY29sb3JTdGFuZGFyZFwiXSlcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIG1hcmdpbk1vZHVsZSxcclxuICAgICAgICAgICAgdGl0bGVNb2R1bGUsXHJcbiAgICAgICAgICAgIHNpemVNb2R1bGUsXHJcbiAgICAgICAgICAgIGNvbG9yTW9kdWxlXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBgJHtjb2xvck1vZHVsZS5jb2xvclN0YW5kYXJkfSAke3NpemVNb2R1bGUuc2l6ZTE0fSAke3RpdGxlTW9kdWxlLmg1fSAke21hcmdpbk1vZHVsZS5tYXJnaW5Cb3R0b200fWBcclxuICAgICAgICBpZihwcm9wcy5jbGFzc05hbWUpY2xhc3NOYW1lID0rIFwiIFwiK3Byb3BzLmNsYXNzTmFtZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDVcIiwge2NsYXNzTmFtZX0sIHByb3BzLmNoaWxkcmVuKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJFeGVtcGxlIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGVcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxudHlwZSBTZXR0aW5nc1RpdGxlUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxubGV0IFRpdGxlTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nc1RpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFNldHRpbmdzVGl0bGVQcm9wcz4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFNldHRpbmdzVGl0bGVQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGl0bGVNb2R1bGVzIHx8IChUaXRsZU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLm1hcmdpblRvcDYwID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgbWFyZ2luTW9kdWxlXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBgJHttYXJnaW5Nb2R1bGUubWFyZ2luVG9wNjB9ICR7bWFyZ2luTW9kdWxlLm1hcmdpbkJvdHRvbTIwfWBcclxuICAgICAgICBpZihwcm9wcy5jbGFzc05hbWUpY2xhc3NOYW1lID0rIFwiIFwiK3Byb3BzLmNsYXNzTmFtZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRpdGxlLCB7Y2xhc3NOYW1lfSwgcHJvcHMuY2hpbGRyZW4pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpTZXR0aW5nc1RpdGxlUHJvcHMgPSB7XHJcbiAgICAgICAgY2hpbGRyZW46IFtcIlwiXSxcclxuICAgICAgICBjbGFzc05hbWU6IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiRXhlbXBsZSB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgeyBSZWFjdE5vZGUsIENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCJcclxuXHJcbnR5cGUgVGFic1Byb3BzID0ge1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdE5vZGUsXHJcbiAgICB0YWJzOiB7bGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZ31bXSxcclxuICAgIGFjdGl2ZT86IHN0cmluZ1xyXG4gICAgb25DaGFuZ2U/OiAodGFiOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBzdHlsZT86IENTU1Byb3BlcnRpZXNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUYWJzUHJvcHMsIHtcclxuICAgIGFjdGl2ZTogc3RyaW5nXHJcbn0+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6VGFic1Byb3BzID0ge1xyXG4gICAgICAgIGNoaWxkcmVuOiBudWxsLFxyXG4gICAgICAgIHRhYnM6IFt7bGFiZWw6IFwiTm8gdGFicyB3YXMgcGFzc2VkIHRvIDxUYWJzPi5cIiwgaWQ6IFwibm9uZVwifV0sXHJcbiAgICAgICAgYWN0aXZlOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIHN0eWxlOiB7fVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpUYWJzUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmUgfHwgbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0YWJzRWxlbWVudHM6VGFiW10gPSBbXVxyXG4gICAgXHJcbiAgICBnZXQgdGFicygpOlRhYnNbXCJwcm9wc1wiXVtcInRhYnNcIl17XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudGFicyB8fCBbXVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRhYih0YWI6c3RyaW5nKXtcclxuICAgICAgICBpZih0YWIgPT09IHRoaXMuc3RhdGUuYWN0aXZlKXJldHVyblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMub25DaGFuZ2UpdGhpcy5wcm9wcy5vbkNoYW5nZSh0YWIpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogdGFiXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnRhYnNFbGVtZW50cy5mb3JFYWNoKGUgPT4gZS5zZXRBY3RpdmUodGFiID09PSBlLnByb3BzLmlkKSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibGMtdGFiV3JhcHBlclwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYy10YWJuYXZcIiBzdHlsZT17e2ZsZXg6IFwiMCAxIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAge3RoaXMudGFicy5tYXAodGFiID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUYWIsIHtUYWJDb250YWluZXI6IHRoaXMsIHRpdGxlOiB0YWIubGFiZWwsIGlkOiB0YWIuaWQsIGtleTogYnRvYSh0YWIubGFiZWwrXCI6XCIrdGFiLmlkKX0pXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGMtdGFiXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfSAgIFxyXG5cclxuICAgIGlzQWN0aXZlKHRhYil7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWN0aXZlID09PSB0YWJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46ICg8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjIwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KVwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMzBweCAzMHB4XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImxjLXRhYi1ib3gtc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGU+UHJldmlldyB0YWJzPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJBY3RpdmUgdGFiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVW5hY3RpdmUgdGFiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogXCIxXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAodGFiSWQpID0+IHt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3NcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e1xyXG4gICAgVGFiQ29udGFpbmVyOiBUYWJzLCBcclxuICAgIHRpdGxlOiBzdHJpbmcsIFxyXG4gICAgaWQ6IHN0cmluZ1xyXG59LCB7XHJcbiAgICBhY3RpdmU6IGJvb2xlYW5cclxufT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3RpdmU6IHByb3BzLlRhYkNvbnRhaW5lci5pc0FjdGl2ZShwcm9wcy5pZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuVGFiQ29udGFpbmVyLnRhYnNFbGVtZW50cy5wdXNoKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlKGlzQWN0aXZlOmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmU6ICEhaXNBY3RpdmVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBgbGMtbmF2SXRlbWBcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBgIGxjLW5hdkl0ZW1BY3RpdmVgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBgIGxjLW5hdkl0ZW1JbmFjdGl2ZWBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLlRhYkNvbnRhaW5lci5jaGFuZ2VUYWIodGhpcy5wcm9wcy5pZClcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFV0aWxzLCB7IENvbG9yTmFtZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcblxyXG5leHBvcnQgdHlwZSBUZXh0UHJvcHMgPSB7XHJcbiAgICB3ZWlnaHQ/OiBUZXh0V2VpZ2h0LFxyXG4gICAgY29sb3I/OiBUZXh0Q29sb3J8c3RyaW5nLFxyXG4gICAgdGV4dENhc2U/OiBUZXh0Q2FzZSxcclxuICAgIHNpemU/OiBUZXh0U2l6ZSxcclxuICAgIHNlbGVjdGFibGU/OiBib29sZWFuLFxyXG4gICAgZmFtaWx5PzogVGV4dEZhbWlseSxcclxuICAgIGNoaWxkcmVuOiBzdHJpbmcsXHJcbiAgICB0YWc/OiBzdHJpbmcsXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRleHRQcm9wcz4ge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IGNsYXNzTGlzdCA9IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUuc3BsaXQoXCIgXCIpIDogW11cclxuICAgICAgICBsZXQgc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlID8gey4uLnRoaXMucHJvcHMuc3R5bGV9IDoge31cclxuICAgICAgICBzdHlsZS5mbGV4R3JvdyA9IDBcclxuICAgICAgICBpZih0aGlzLnByb3BzLndlaWdodCl7XHJcbiAgICAgICAgICAgIGNsYXNzTGlzdC5wdXNoKGBsYy10ZXh0LXdlaWdodCR7VXRpbHMuZmlyc3RMZXR0ZXJVcHBlcmNhc2UodGhpcy5wcm9wcy53ZWlnaHQpfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29sb3Ipe1xyXG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9IFV0aWxzLmdldENvbG9yKHRoaXMucHJvcHMuY29sb3IgYXMgVGV4dENvbG9yKSB8fCB0aGlzLnByb3BzLmNvbG9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMudGV4dENhc2Upe1xyXG4gICAgICAgICAgICBjbGFzc0xpc3QucHVzaChgbGMtdGV4dC1jYXNlcyR7VXRpbHMuZmlyc3RMZXR0ZXJVcHBlcmNhc2UodGhpcy5wcm9wcy50ZXh0Q2FzZSl9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zaXplKXtcclxuICAgICAgICAgICAgY2xhc3NMaXN0LnB1c2goLi4uQ29uc3RhbnRzLnNpemVzW3RoaXMucHJvcHMuc2l6ZV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuZmFtaWx5KXtcclxuICAgICAgICAgICAgY2xhc3NMaXN0LnB1c2goYGxjLXRleHQtJHt0aGlzLnByb3BzLmZhbWlseX1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnByb3BzLnNlbGVjdGFibGUpe1xyXG4gICAgICAgICAgICBjbGFzc0xpc3QucHVzaChcImxjLXRleHQtc2VsZWN0YWJsZVwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy50YWcsIHtcclxuICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NMaXN0LmpvaW4oXCIgXCIpXHJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRleHRQcm9wcyA9IHtcclxuICAgICAgICB0YWc6IFwiZGl2XCIsXHJcbiAgICAgICAgY2hpbGRyZW46IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8IChBbGxQcmV2aWV3cyA9IFtcclxuICAgICAgICAgICAgdGhpcy53ZWlnaHRzLm1hcChlID0+ICh7d2VpZ2h0OiBlfSkpLFxyXG4gICAgICAgICAgICB0aGlzLmNvbG9ycy5tYXAoZSA9PiAoe2NvbG9yOiBlfSkpLFxyXG4gICAgICAgICAgICB0aGlzLnRleHRDYXNlcy5tYXAoZSA9PiAoe3RleHRDYXNlOiBlfSkpLFxyXG4gICAgICAgICAgICB0aGlzLnNpemVzLm1hcChlID0+ICh7c2l6ZTogZX0pKSxcclxuICAgICAgICAgICAgdGhpcy5mYW1pbHlzLm1hcChlID0+ICh7ZmFtaWx5OiBlfSkpLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiVGVzdCBUZXh0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1wiZGl2XCIsXCJwXCIsLi4uVXRpbHMuZXhlY3V0ZVhUaW1lcygoaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImhcIisoaW5kZXgrMSlcclxuICAgICAgICAgICAgfSwgNildLm1hcChlID0+ICh7dGFnOiBlfSkpLFxyXG4gICAgICAgICAgICBbdHJ1ZSwgZmFsc2VdLm1hcChlID0+ICh7c2VsZWN0YWJsZTogZX0pKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHdlaWdodHM6VGV4dFdlaWdodFtdID0gW1wibGlnaHRcIiwgXCJub3JtYWxcIiwgXCJtZWRpdW1cIiwgXCJzZW1pYm9sZFwiLCBcImJvbGRcIl1cclxuICAgIHN0YXRpYyBnZXQgY29sb3JzKCk6VGV4dENvbG9yW117XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKExpZ2h0Y29yZC5EaXNjb3JkTW9kdWxlcy5jb25zdGFudHMuQ29sb3JzKS5tYXAoZSA9PiBlLnRvTG93ZXJDYXNlKCkpIGFzIFRleHRDb2xvcltdXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdGV4dENhc2VzOlRleHRDYXNlW10gPSBbXCJsb3dlcmNhc2VcIiwgXCJ1cHBlcmNhc2VcIl1cclxuICAgIHN0YXRpYyBzaXplczpUZXh0U2l6ZVtdID0gW1wic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJtZWRpdW1fc21hbGxcIiwgXCJtZWRpdW1fbGFyZ2VcIiwgXCJsYXJnZVwiXVxyXG4gICAgc3RhdGljIGZhbWlseXM6VGV4dEZhbWlseVtdID0gW1wicHJpbWFyeVwiLCBcImNvZGVcIl1cclxufVxyXG5sZXQgQWxsUHJldmlld3NcclxuXHJcbmV4cG9ydCB0eXBlIFRleHRXZWlnaHQgPSBcImxpZ2h0XCJ8XCJub3JtYWxcInxcIm1lZGl1bVwifFwic2VtaWJvbGRcInxcImJvbGRcIlxyXG5leHBvcnQgdHlwZSBUZXh0Q29sb3IgPSBDb2xvck5hbWVcclxuZXhwb3J0IHR5cGUgVGV4dENhc2UgPSBcImxvd2VyY2FzZVwifFwidXBwZXJjYXNlXCJcclxuZXhwb3J0IHR5cGUgVGV4dFNpemUgPSBcInNtYWxsXCJ8XCJtZWRpdW1cInxcIm1lZGl1bV9zbWFsbFwifFwibWVkaXVtX2xhcmdlXCJ8XCJsYXJnZVwiXHJcbmV4cG9ydCB0eXBlIFRleHRGYW1pbHkgPSBcInByaW1hcnlcInxcImNvZGVcIlxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnN0YW50cyA9IHtcclxuICAgIHNpemVzOiB7XHJcbiAgICAgICAgc21hbGw6IFtcImxjLXRleHQtc2l6ZTEyXCIsIFwibGMtdGV4dC1oZWlnaHQxNlwiXSxcclxuICAgICAgICBtZWRpdW1fc21hbGw6IFtcImxjLXRleHQtc2l6ZTE0XCIsIFwibGMtdGV4dC1oZWlnaHQxNlwiXSxcclxuICAgICAgICBtZWRpdW06IFtcImxjLXRleHQtc2l6ZTE2XCIsIFwibGMtdGV4dC1oZWlnaHQyMFwiXSxcclxuICAgICAgICBtZWRpdW1fbGFyZ2U6IFtcImxjLXRleHQtc2l6ZTIwXCIsIFwibGMtdGV4dC1oZWlnaHQyNlwiXSxcclxuICAgICAgICBsYXJnZTogW1wibGMtdGV4dC1zaXplMjhcIiwgXCJsYy10ZXh0LWhlaWdodDM0XCJdXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbnR5cGUgVGl0bGVQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBUaXRsZU1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGl0bGVQcm9wcz4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRpdGxlUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRpdGxlTW9kdWxlcyB8fCAoVGl0bGVNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiB0eXBlb2YgZS5jb2xvclN0YW5kYXJkID09PSBcInN0cmluZ1wiKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUuc2l6ZTMyID09PSBcInN0cmluZ1wiKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUuaDIgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBjb2xvck1vZHVsZSxcclxuICAgICAgICAgICAgc2l6ZU1vZHVsZSxcclxuICAgICAgICAgICAgdGl0bGVNb2R1bGVcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGAke2NvbG9yTW9kdWxlLmNvbG9yU3RhbmRhcmR9ICR7c2l6ZU1vZHVsZS5zaXplMTR9ICR7dGl0bGVNb2R1bGUuaDJ9ICR7dGl0bGVNb2R1bGUuZGVmYXVsdENvbG9yfSAke3RpdGxlTW9kdWxlLmRlZmF1bHRNYXJnaW5oMn1gXHJcbiAgICAgICAgaWYocHJvcHMuY2xhc3NOYW1lKWNsYXNzTmFtZSArPSBcIiBcIitwcm9wcy5jbGFzc05hbWVcclxuXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7Y2xhc3NOYW1lfSwgcHJvcHMuY2hpbGRyZW4pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6VGl0bGVQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcclxuICAgICAgICBjbGFzc05hbWU6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiRXhlbXBsZSB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGV4Y2x1ZGVQcm9wZXJ0aWVzIGZyb20gXCIuLi8uLi9tb2R1bGVzL2V4Y2x1ZGVQcm9wZXJ0aWVzXCJcclxuXHJcbnR5cGUgVG9vbHRpcERhdGEgPSB7XHJcbiAgICBvbkNsaWNrKCk6dm9pZFxyXG4gICAgb25Nb3VzZUVudGVyKCk6dm9pZFxyXG4gICAgb25Nb3VzZUxlYXZlKCk6dm9pZFxyXG4gICAgb25Db250ZXh0TWVudSgpOnZvaWRcclxuICAgIFwiYXJpYS1sYWJlbFwiOiBzdHJpbmdcclxufVxyXG50eXBlIFRvb2x0aXBQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOlJlYWN0Tm9kZSxcclxuICAgIHRleHQ6IHN0cmluZyxcclxuICAgIHBvc2l0aW9uPzogVG9vbHRpcFBvc2l0aW9uLFxyXG4gICAgY29sb3I/OiBUb29sdGlwQ29sb3JcclxufVxyXG5cclxubGV0IFRvb2x0aXBNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VG9vbHRpcFByb3BzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVG9vbHRpcFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUb29sdGlwTW9kdWxlcyB8fCAoVG9vbHRpcE1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiVG9vbHRpcFwiKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgVG9vbHRpcFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gZXhjbHVkZVByb3BlcnRpZXModGhpcy5wcm9wcywgW1wiY2hpbGRyZW5cIl0pXHJcblxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAuZGVmYXVsdCwgcHJvcHMsIChkYXRhOlRvb2x0aXBEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImZpdC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRvb2x0aXBQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcclxuICAgICAgICB0ZXh0OiBcIk5vIHRleHQgd2FzIHBhc3NlZCB0byBUb29sdGlwXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgY29sb3I6IFwiYnJhbmRcIlxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogUmVhY3QuY3JlYXRlRWxlbWVudCh3aW5kb3cuTGlnaHRjb3JkLkFwaS5Db21wb25lbnRzLmlucHV0cy5CdXR0b24sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vazogXCJnaG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6IFwieWVsbG93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9LCBcIkhvdmVyIHRoaXMgYnV0dG9uIHRvIHNlZSB0aGUgdG9vbHRpcFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkV4YW1wbGUgVG9vbHRpcCBUZXh0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgbGV0IGNvbG9ycyA9IFtdXHJcbiAgICAgICAgICAgIFRvb2x0aXAuQ29sb3JzLmZvckVhY2goY29sb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChjb2xvcnMpXHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXVxyXG4gICAgICAgICAgICBUb29sdGlwLlBvc2l0aW9ucy5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKHBvc2l0aW9ucylcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBQb3NpdGlvbnM6VG9vbHRpcFBvc2l0aW9uW10gPSBbXCJ0b3BcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJib3R0b21cIl1cclxuICAgIHN0YXRpYyBDb2xvcnM6VG9vbHRpcENvbG9yW10gPSBbXCJibGFja1wiLCBcImdyZXlcIiwgXCJicmFuZFwiLCBcImdyZWVuXCIsIFwieWVsbG93XCIsIFwicmVkXCJdXHJcbn1cclxubGV0IEFsbFByZXZpZXdzXHJcblxyXG5leHBvcnQgdHlwZSBUb29sdGlwUG9zaXRpb24gPSBcInRvcFwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImJvdHRvbVwiXHJcbmV4cG9ydCB0eXBlIFRvb2x0aXBDb2xvciA9IFwiYmxhY2tcIiB8IFwiZ3JleVwiIHwgXCJicmFuZFwiIHwgXCJncmVlblwiIHwgXCJ5ZWxsb3dcIiB8IFwicmVkXCIiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlLCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcblxyXG5sZXQgQnV0dG9uTW9kdWxlc1xyXG5cclxudHlwZSBCdXR0b25Qcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlLFxyXG4gICAgb25DbGljaz86ICgpID0+IHZvaWQsXHJcbiAgICBjb2xvcj86IEJ1dHRvbkNvbG9yLFxyXG4gICAgd3JhcHBlcj86IGJvb2xlYW4sXHJcbiAgICBsb29rPzogQnV0dG9uTG9vayxcclxuICAgIHNpemU/OiBCdXR0b25TaXplLFxyXG4gICAgaG92ZXJDb2xvcj86IEJ1dHRvbkhvdmVycyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllcyxcclxuICAgIG9uUmlnaHRDbGljaz86ICgpID0+IHZvaWRcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QnV0dG9uUHJvcHMsIHtob3ZlcjogYm9vbGVhbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkJ1dHRvblByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaG92ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDb2xvcnM6QnV0dG9uQ29sb3JbXSA9IFtcImJyYW5kXCIsIFwiZ3JleVwiLCBcInJlZFwiLCBcImdyZWVuXCIsIFwieWVsbG93XCIsIFwicHJpbWFyeVwiLCBcImxpbmtcIiwgXCJ3aGl0ZVwiLCBcImJsYWNrXCIsIFwidHJhbnNwYXJlbnRcIl1cclxuICAgIHN0YXRpYyBMb29rczpCdXR0b25Mb29rW10gPSBbXCJmaWxsZWRcIiwgXCJpbnZlcnRlZFwiLCBcIm91dGxpbmVkXCIsIFwiZ2hvc3RcIiwgXCJsaW5rXCIsIFwiYmxhbmtcIl1cclxuICAgIHN0YXRpYyBTaXplczpCdXR0b25TaXplW10gPSBbXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCIsIFwieGxhcmdlXCIsIFwibWluXCIsIFwibWF4XCIsIFwiaWNvblwiLCBcIm5vbmVcIl1cclxuICAgIHN0YXRpYyBIb3ZlckNvbG9yczogQnV0dG9uSG92ZXJzW10gPSBbXCJkZWZhdWx0XCIsIC4uLkJ1dHRvbi5Db2xvcnNdXHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXsgLy8gY2FjaGluZyBtb2R1bGVzXHJcbiAgICAgICAgcmV0dXJuIEJ1dHRvbk1vZHVsZXMgfHwgKEJ1dHRvbk1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJfaG9yaXpvbnRhbFwiXSksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJjb2xvclRyYW5zcGFyZW50XCJdKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImJ1dHRvbldyYXBwZXJcIl0pLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiQnV0dG9uQ29sb3JzXCJdKSxcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIGZsZXhNb2R1bGUsXHJcbiAgICAgICAgICAgIGV1aE1vZHVsZTEsXHJcbiAgICAgICAgICAgIGJ1dHRvbk1vZHVsZSxcclxuICAgICAgICAgICAgY29sb3JzTW9kdWxlLFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzOkJ1dHRvblByb3BzID0ge31cclxuICAgICAgICBpZih0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgaWYoXCJjb2xvclwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY29sb3IgPSB0aGlzLnByb3BzLmNvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJjaGlsZHJlblwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJvbkNsaWNrXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkNsaWNrID0gdGhpcy5wcm9wcy5vbkNsaWNrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJ3cmFwcGVyXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy53cmFwcGVyID0gISF0aGlzLnByb3BzLndyYXBwZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcImxvb2tcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmxvb2sgPSB0aGlzLnByb3BzLmxvb2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcInNpemVcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNpemUgPSB0aGlzLnByb3BzLnNpemVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcImhvdmVyQ29sb3JcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmhvdmVyQ29sb3IgPSB0aGlzLnByb3BzLmhvdmVyQ29sb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcImRpc2FibGVkXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5kaXNhYmxlZCA9IHRoaXMucHJvcHMuZGlzYWJsZWRcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJzdHlsZVwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc3R5bGUgPSB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwib25SaWdodENsaWNrXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vblJpZ2h0Q2xpY2sgPSB0aGlzLnByb3BzLm9uUmlnaHRDbGlja1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHByb3BzLm9uUmlnaHRDbGljayA9IE5PT1BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvcHMuY29sb3Ipe1xyXG4gICAgICAgICAgICBwcm9wcy5jb2xvciA9IHByb3BzLmNvbG9yLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uQ29sb3JcclxuICAgICAgICAgICAgaWYoIUJ1dHRvbi5Db2xvcnMuaW5jbHVkZXMocHJvcHMuY29sb3IpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNvbG9yID0gQnV0dG9uLkNvbG9yc1swXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb3BzLmNvbG9yID0gQnV0dG9uLkNvbG9yc1swXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvcHMubG9vayl7XHJcbiAgICAgICAgICAgIHByb3BzLmxvb2sgPSBwcm9wcy5sb29rLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uTG9va1xyXG4gICAgICAgICAgICBpZighQnV0dG9uLkxvb2tzLmluY2x1ZGVzKHByb3BzLmxvb2spKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmxvb2sgPSBCdXR0b24uTG9va3NbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5sb29rID0gQnV0dG9uLkxvb2tzWzBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9wcy5zaXplKXtcclxuICAgICAgICAgICAgcHJvcHMuc2l6ZSA9IHByb3BzLnNpemUudG9Mb3dlckNhc2UoKSBhcyBCdXR0b25TaXplXHJcbiAgICAgICAgICAgIGlmKCFCdXR0b24uU2l6ZXMuaW5jbHVkZXMocHJvcHMuc2l6ZSkpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2l6ZSA9IEJ1dHRvbi5TaXplc1swXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb3BzLnNpemUgPSBCdXR0b24uU2l6ZXNbMF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHByb3BzLmhvdmVyQ29sb3Ipe1xyXG4gICAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID0gcHJvcHMuaG92ZXJDb2xvci50b0xvd2VyQ2FzZSgpIGFzIEJ1dHRvbkhvdmVyc1xyXG4gICAgICAgICAgICBpZighQnV0dG9uLkhvdmVyQ29sb3JzLmluY2x1ZGVzKHByb3BzLmhvdmVyQ29sb3IpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmhvdmVyQ29sb3IgPSBCdXR0b24uSG92ZXJDb2xvcnNbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID0gQnV0dG9uLkhvdmVyQ29sb3JzWzBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uU2l6ZSA9IHByb3BzLnNpemUgPyBjb2xvcnNNb2R1bGUuQnV0dG9uU2l6ZXNbcHJvcHMuc2l6ZS50b1VwcGVyQ2FzZSgpXSB8fCBcIlwiIDogXCJcIlxyXG4gICAgICAgIGlmKGJ1dHRvblNpemUpYnV0dG9uU2l6ZSA9IFwiIFwiICsgYnV0dG9uU2l6ZVxyXG5cclxuICAgICAgICBsZXQgaG92ZXJDb2xvciA9IHByb3BzLmhvdmVyQ29sb3IgPyBjb2xvcnNNb2R1bGUuQnV0dG9uSG92ZXJzW3Byb3BzLmhvdmVyQ29sb3IudG9VcHBlckNhc2UoKV0gfHwgXCJcIiA6IFwiXCJcclxuICAgICAgICBpZihob3ZlckNvbG9yKWhvdmVyQ29sb3IgPSBcIiBcIiArIGhvdmVyQ29sb3JcclxuXHJcbiAgICAgICAgcHJvcHMub25DbGljayA9IHR5cGVvZiBwcm9wcy5vbkNsaWNrID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wcy5vbkNsaWNrIDogKCkgPT4ge31cclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMud3JhcHBlciAhPT0gXCJib29sZWFuXCIpcHJvcHMud3JhcHBlciA9IHRydWVcclxuXHJcbiAgICAgICAgbGV0IGhvdmVyID0gdGhpcy5zdGF0ZS5ob3ZlciA/IGV1aE1vZHVsZTEuaGFzSG92ZXIgOiBcIlwiXHJcbiAgICAgICAgaWYoaG92ZXIpaG92ZXIgPSBcIiBcIiArIGhvdmVyXHJcblxyXG4gICAgICAgIGxldCBidXR0b24gPSA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgcmVmPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtgJHtmbGV4TW9kdWxlLmZsZXhDaGlsZH0gJHtldWhNb2R1bGUxLmJ1dHRvbn0gJHtjb2xvcnNNb2R1bGUuQnV0dG9uTG9va3NbcHJvcHMubG9vay50b1VwcGVyQ2FzZSgpXX0gJHtjb2xvcnNNb2R1bGUuQnV0dG9uQ29sb3JzW3Byb3BzLmNvbG9yLnRvVXBwZXJDYXNlKCldfSR7YnV0dG9uU2l6ZX0ke2hvdmVyQ29sb3J9JHtob3Zlcn0gJHtldWhNb2R1bGUxLmdyb3d9YH0gXHJcbiAgICAgICAgICAgIHN0eWxlPXt7ZmxleDogXCIwIDEgYXV0b1wiLCAuLi5wcm9wcy5zdHlsZX19IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2soKX0gb25Nb3VzZUVudGVyPXsoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCFob3ZlckNvbG9yKXJldHVyblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXI6IHRydWV9KVxyXG4gICAgICAgICAgICB9fSBvbk1vdXNlTGVhdmU9eyhldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIWhvdmVyQ29sb3IpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtob3ZlcjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9fSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IG9uQ29udGV4dE1lbnU9eygpID0+IHByb3BzLm9uUmlnaHRDbGljaygpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2V1aE1vZHVsZTEuY29udGVudHN9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgaWYocHJvcHMud3JhcHBlcil7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIndyYXBwZXJcIiBjbGFzc05hbWU9e2J1dHRvbk1vZHVsZS5idXR0b25XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIHtidXR0b259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIGxldCBjb2xvcnMgPSBbXVxyXG4gICAgICAgICAgICBmb3IobGV0IGNvbG9yIG9mIEJ1dHRvbi5Db2xvcnMpe1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKGNvbG9ycylcclxuICAgICAgICAgICAgbGV0IGxvb2tzID0gW11cclxuICAgICAgICAgICAgZm9yKGxldCBsb29rIG9mIEJ1dHRvbi5Mb29rcyl7XHJcbiAgICAgICAgICAgICAgICBsb29rcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBsb29rOiBsb29rXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2gobG9va3MpXHJcbiAgICAgICAgICAgIGxldCBzaXplcyA9IFtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgc2l6ZSBvZiBCdXR0b24uU2l6ZXMpe1xyXG4gICAgICAgICAgICAgICAgc2l6ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogc2l6ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKHNpemVzKVxyXG4gICAgICAgICAgICBsZXQgaG92ZXJzID0gW11cclxuICAgICAgICAgICAgZm9yKGxldCBob3ZlciBvZiBCdXR0b24uSG92ZXJDb2xvcnMpe1xyXG4gICAgICAgICAgICAgICAgaG92ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6IGhvdmVyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goaG92ZXJzKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7Y2hpbGRyZW46IFwiVGVzdCBCdXR0b25cIn1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7b25DbGljazogKCkgPT4ge319XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe3dyYXBwZXI6IGZhbHNlfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tkaXNhYmxlZDogZmFsc2V9LCB7ZGlzYWJsZWQ6IHRydWV9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3c1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvbkNvbG9yID0gXCJicmFuZFwiIHwgXCJncmV5XCIgfCBcInJlZFwiIHwgXCJncmVlblwiIHwgXCJ5ZWxsb3dcIiB8IFwicHJpbWFyeVwiIHwgXCJsaW5rXCIgfCBcIndoaXRlXCIgfCBcImJsYWNrXCIgfCBcInRyYW5zcGFyZW50XCJcclxuZXhwb3J0IHR5cGUgQnV0dG9uTG9vayA9IFwiZmlsbGVkXCIgfCBcImludmVydGVkXCIgfCBcIm91dGxpbmVkXCIgfCBcImdob3N0XCIgfCBcImxpbmtcIiB8IFwiYmxhbmtcIlxyXG5leHBvcnQgdHlwZSBCdXR0b25TaXplID0gXCJub25lXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiIHwgXCJ4bGFyZ2VcIiB8IFwibWluXCIgfCBcIm1heFwiIHwgXCJpY29uXCJcclxuZXhwb3J0IHR5cGUgQnV0dG9uSG92ZXJzID0gXCJkZWZhdWx0XCIgfCBCdXR0b25Db2xvciIsImltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbmNvbnN0IENvbnN0YW50cyA9IHtcclxuICAgIGRlZmF1bHRDb2xvcjogMTAwNzA3MDksXHJcbiAgICBiYXNlQ29sb3JzOiBbXHJcbiAgICAgICAgMTc1MjIyMCwgXHJcbiAgICAgICAgMzA2Njk5MywgXHJcbiAgICAgICAgMzQ0NzAwMywgXHJcbiAgICAgICAgMTAxODEwNDYsIFxyXG4gICAgICAgIDE1Mjc3NjY3LCBcclxuICAgICAgICAxNTg0NDM2NywgXHJcbiAgICAgICAgMTUxMDU1NzAsIFxyXG4gICAgICAgIDE1MTU4MzMyLCBcclxuICAgICAgICA5ODA3MjcwLCBcclxuICAgICAgICA2MzIzNTk1LCBcclxuICAgICAgICAxMTQ2OTg2LCBcclxuICAgICAgICAyMDY3Mjc2LCBcclxuICAgICAgICAyMTIzNDEyLCBcclxuICAgICAgICA3NDE5NTMwLCBcclxuICAgICAgICAxMTM0MjkzNSwgXHJcbiAgICAgICAgMTI3NDU3NDIsIFxyXG4gICAgICAgIDExMDI3MjAwLCBcclxuICAgICAgICAxMDAzODU2MiwgXHJcbiAgICAgICAgOTkzNjAzMSwgXHJcbiAgICAgICAgNTUzMzMwNlxyXG4gICAgXVxyXG59XHJcblxyXG50eXBlIENvbG9yUGlja2VyUHJvcHMgPSB7XHJcbiAgICBkZWZhdWx0Q29sb3I/OiBudW1iZXIsXHJcbiAgICBjdXN0b21Db2xvcj86IG51bWJlcixcclxuICAgIGJhc2VDb2xvcnM/OiBudW1iZXJbXSxcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgb25DaGFuZ2U/OiAoY29sb3I6bnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmxldCBDb2xvclBpY2tlck1vZHVsZXNcclxubGV0IGlzRmV0Y2hpbmcgPSBudWxsXHJcblxyXG4vKipcclxuICogVGhpcyBjb21wb25lbm50IG5lZWRzIHRvIGJlIGxvYWRlZC4gQXMgYSByZXN1bHQsIHlvdSBtYXkgZXhwZXJpZW5jZSAxMDAtMzAwbXMgbG9hZGluZyB0aGUgZmlyc3QgdGltZS5cclxuICogUmVuZGVyIHdpbGwgcmV0dXJuIGBudWxsYCBiZWZvcmUgbG9hZGVkLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JQaWNrZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PENvbG9yUGlja2VyUHJvcHMsIHt2YWx1ZT86c3RyaW5nLGxhc3RDb2xvcjphbnl9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpDb2xvclBpY2tlclByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgbnVsbCxcclxuICAgICAgICAgICAgbGFzdENvbG9yOiB0aGlzLnByb3BzLnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKiogUHJlbG9hZCB0aGUgY29tcG9uZW50LiAqL1xyXG4gICAgc3RhdGljIHByZWxvYWQoKXtcclxuICAgICAgICBpZihDb2xvclBpY2tlci5wcm90b3R5cGUubW9kdWxlc1swXSlyZXR1cm4gLy8gYWxyZWFkeSBsb2FkZWRcclxuICAgICAgICBpZihpc0ZldGNoaW5nKXJldHVybiAvLyBpcyBmZXRjaGluZyBzbyBkb24ndCBkb3VibGUgcHJlbG9hZC5cclxuICAgICAgICB0cnl7IC8vIElmIHdlIGNhdWdodCBhbiBlcnJvclxyXG4gICAgICAgICAgICBuZXcgQ29sb3JQaWNrZXIoe30pLnJlbmRlcigpXHJcbiAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbCl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWwpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6Q29sb3JQaWNrZXJQcm9wcyA9IHtcclxuICAgICAgICBkZWZhdWx0Q29sb3I6IENvbnN0YW50cy5kZWZhdWx0Q29sb3IsXHJcbiAgICAgICAgY3VzdG9tQ29sb3I6IG51bGwsXHJcbiAgICAgICAgYmFzZUNvbG9yczogQ29uc3RhbnRzLmJhc2VDb2xvcnMsXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gQ29sb3JQaWNrZXJNb2R1bGVzIHx8IChDb2xvclBpY2tlck1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiQ29sb3JQaWNrZXJcIilcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvbG9yUGlja2VyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgQ29sb3JQaWNrZXJDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGlmKCFDb2xvclBpY2tlckNvbXBvbmVudCl7XHJcbiAgICAgICAgICAgIGlmKGlzRmV0Y2hpbmcpeyAvLyBzdXBwb3J0IGZvciBtdWx0aXBsZSBjb2xvciBwaWNrZXJcclxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmcudGhlbigoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENvbG9yUGlja2VyTW9kdWxlcyA9IG51bGxcclxuICAgICAgICAgICAgbGV0IHJlc29sdmVcclxuICAgICAgICAgICAgaXNGZXRjaGluZyA9IG5ldyBQcm9taXNlKHJlcyA9PiAocmVzb2x2ZSA9IHJlcykpXHJcbiAgICAgICAgICAgIGNvbnN0IEd1aWxkU2V0dGluZ3NSb2xlcyA9IG5ldyAoV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUuaW5jbHVkZXMoXCJHdWlsZFNldHRpbmdzUm9sZXNcIikpLmRlZmF1bHQpKCkucmVuZGVyKCkudHlwZVxyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IEd1aWxkU2V0dGluZ3NSb2xlcy5wcm90b3R5cGUucmVuZGVyUm9sZVNldHRpbmdzLmNhbGwoe1xyXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBndWlsZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc093bmVyOiAoKSA9PiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0U2VsZWN0ZWRSb2xlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVySGVhZGVyOiBHdWlsZFNldHRpbmdzUm9sZXMucHJvdG90eXBlLnJlbmRlckhlYWRlclxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBHdWlsZFJvbGVTZXR0aW5ncyA9IHNldHRpbmdzLnByb3BzLmNoaWxkcmVuWzFdLnR5cGVcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gR3VpbGRSb2xlU2V0dGluZ3MucHJvdG90eXBlLnJlbmRlckNvbG9yUGlja2VyLmNhbGwoe1xyXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICByb2xlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbG9ja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBldmVyeW9uZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICAgICAgY2hpbGRyZW4udHlwZShjaGlsZHJlbi5wcm9wcykucHJvcHMuY2hpbGRyZW4udHlwZS5fY3RvcigpLnRoZW4oYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBDb2xvclBpY2tlck1vZHVsZXMgPSBudWxsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxDb2xvclBpY2tlckNvbXBvbmVudC5kZWZhdWx0IGNvbG9ycz17dGhpcy5wcm9wcy5iYXNlQ29sb3JzfSBkZWZhdWx0Q29sb3I9e3RoaXMucHJvcHMuZGVmYXVsdENvbG9yfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gY3VzdG9tQ29sb3I9e3RoaXMucHJvcHMuY3VzdG9tQ29sb3J9PlxyXG4gICAgICAgIDwvQ29sb3JQaWNrZXJDb21wb25lbnQuZGVmYXVsdD5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmxhc3RDb2xvciAhPT0gdGhpcy5wcm9wcy52YWx1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGxhc3RDb2xvcjogdGhpcy5wcm9wcy52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbG9yUGlja2VyKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogVXRpbHMuSGV4Q29sb3JUb0RlY2ltYWwoXCIjNzI4OURBXCIpXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoY29sb3IpID0+IHt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVscCA9IHtcclxuICAgICAgICBpbmZvOiBcIlRvIGNvbnZlcnQgaGV4IGNvbG9ycyB0byBkZWNpbWFsLCB5b3UgY2FuIGRvIGBMaWdodGNvcmQuQXBpLlV0aWxzLkhleENvbG9yVG9EZWNpbWFsKCcjNzI4OURBJylgIGFuZCBnbyBiYWNrIHdpdGggYExpZ2h0Y29yZC5BcGkuVXRpbHMuRGVjaW1hbENvbG9yVG9IZXgoNzUwNjM5NClgXCIsXHJcbiAgICAgICAgd2FybjogXCJUaGUgY29tcG9uZW50IG1heSBub3QgYXBwZWFyIGluc3RhbnRseS4gVGhlIGNvbXBvbmVudCBuZWVkcyB0byBiZSBsb2FkZWQsIHNvIHlvdSBjb3VsZCBleHBlcmllbmNlIDUwLTMwMG1zIGxvYWRpbmcgdGltZSBkZXBlbmRpbmcgb24geW91ciBpbnRlcm5ldCBjb25uZWN0aW9uLlwiXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUsIENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxudHlwZSBEcm9wZG93blByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgICAgbGFiZWw6IHN0cmluZ1xyXG4gICAgfVtdLFxyXG4gICAgdmFsdWVSZW5kZXJlcj86IChkYXRhKSA9PiBSZWFjdE5vZGUsXHJcbiAgICBvcHRpb25SZW5kZXJlcj86IChkYXRhKSA9PiBSZWFjdE5vZGUsXHJcbiAgICBtdWx0aVZhbHVlUmVuZGVyZXI/OiAoZGF0YSkgPT4gUmVhY3ROb2RlXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBzZWFyY2hhYmxlPzogYm9vbGVhbixcclxuICAgIGNsZWFyYWJsZT86IGJvb2xlYW4sXHJcbiAgICBzdHlsZU92ZXJyaWRlcz86IENTU1Byb3BlcnRpZXMsXHJcbiAgICBsaWdodFRoZW1lQ29sb3JPdmVycmlkZXM/OiB0aGVtZU92ZXJyaWRlLFxyXG4gICAgZGFya1RoZW1lQ29sb3JPdmVycmlkZXM/OiB0aGVtZU92ZXJyaWRlLFxyXG4gICAgaXNNdWx0aT86IGJvb2xlYW5cclxufVxyXG5cclxudHlwZSB0aGVtZU92ZXJyaWRlID0ge1xyXG4gICAgbmV1dHJhbDA6IHN0cmluZyxcclxuICAgIG5ldXRyYWw1OiBzdHJpbmcsXHJcbiAgICBuZXV0cmFsMTA6IHN0cmluZyxcclxuICAgIG5ldXRyYWwyMDogc3RyaW5nLFxyXG4gICAgbmV1dHJhbDMwOiBzdHJpbmcsXHJcbiAgICBwcmltYXJ5OiBzdHJpbmcsXHJcbiAgICBwcmltYXJ5MjU6IHN0cmluZyxcclxuICAgIHByaW1hcnk1MDogc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWRPcHRpb25CYWNrZ3JvdW5kOiBzdHJpbmcsXHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICBtZW51QmFja2dyb3VuZDogc3RyaW5nLFxyXG4gICAgbWVudUJvcmRlcjogc3RyaW5nLFxyXG4gICAgc2Nyb2xsQmFyVGh1bWI6IHN0cmluZyxcclxuICAgIG11bHRpT3B0aW9uQmFja2dyb3VuZDogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBEcm9wZG93bk1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RHJvcGRvd25Qcm9wcywge3ZhbHVlOiBzdHJpbmd8bnVsbH0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkRyb3Bkb3duUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOkRyb3Bkb3duUHJvcHMgPSB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk5vIG9wdGlvbnMgLSBObyBvcHRpb25zIHdhcyBwYXNzZWQgdG8gRHJvcGRvd24uIElmIHlvdSBtZWFudCB0byBwdXQgYW4gZW1wdHkgZHJvcGRvd24sIGlucHV0IGFuIGVtcHR5IGFycmF5LlwiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgdmFsdWVSZW5kZXJlcjogbnVsbCxcclxuICAgICAgICBtdWx0aVZhbHVlUmVuZGVyZXI6IG51bGwsXHJcbiAgICAgICAgb3B0aW9uUmVuZGVyZXI6IG51bGwsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1AsXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IG51bGwsXHJcbiAgICAgICAgbGlnaHRUaGVtZUNvbG9yT3ZlcnJpZGVzOiBudWxsLFxyXG4gICAgICAgIGRhcmtUaGVtZUNvbG9yT3ZlcnJpZGVzOiBudWxsLFxyXG4gICAgICAgIGlzTXVsdGk6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gRHJvcGRvd25Nb2R1bGVzIHx8IChEcm9wZG93bk1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiU2VsZWN0VGVtcFdyYXBwZXJcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgRHJvcGRvd25Db21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgcmV0dXJuVmFsdWUgPSA8RHJvcGRvd25Db21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9Lz5cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJBbiBlcnJvciBvY2N1cmVkXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9wdGlvbiAxXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPcHRpb24gMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT3B0aW9uIDNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpc011bHRpOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBpc011bHRpOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxuXHJcbnR5cGUgUmFkaW9Hcm91cFByb3BzID0ge1xyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgICBjb2xvcj86IHN0cmluZyxcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAgICBkZXNjPzogc3RyaW5nXHJcbiAgICB9W10sXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBzaXplPzogXCJzbWFsbFwifFwibWVkaXVtXCIsXHJcbiAgICBpdGVtVHlwZT86IFwiYmFyXCJ8XCJwYW5lbFwiLFxyXG4gICAgaW5mb0NsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgUmFkaW9Hcm91cE1vZHVsZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0dyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJhZGlvR3JvdXBQcm9wcywge3ZhbHVlPzogc3RyaW5nfT4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpSYWRpb0dyb3VwUHJvcHMgPSB7XHJcbiAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgdmFsdWU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIk5vIG9wdGlvbnNcIixcclxuICAgICAgICAgICAgZGVzYzogXCJObyBvcHRpb25zIHdhcyBwYXNzZWQgdG8gQ2hvaWNlcy4gSWYgeW91IG1lYW50IHRvIGRpc3BsYXkgbm8gb3B0aW9ucyBhdCBhbGwsIHBsZWFzZSBwYXNzIGFuIGVtcHR5IGFycmF5LlwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjZjA0NzQ3XCJcclxuICAgICAgICB9XSxcclxuICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgc2l6ZTogXCJtZWRpdW1cIixcclxuICAgICAgICBpdGVtVHlwZTogXCJiYXJcIixcclxuICAgICAgICBpbmZvQ2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpSYWRpb0dyb3VwUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoZXYpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXYudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiBldi52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gUmFkaW9Hcm91cE1vZHVsZSB8fCAoUmFkaW9Hcm91cE1vZHVsZSA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJSYWRpb0dyb3VwXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFJhZGlvR3JvdXBDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPFJhZGlvR3JvdXBDb21wb25lbnQgb3B0aW9ucz17cHJvcHMub3B0aW9uc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IFxyXG4gICAgICAgICAgICBzaXplPXtSYWRpb0dyb3VwQ29tcG9uZW50LlNpemVzW3Byb3BzLnNpemUudG9VcHBlckNhc2UoKV19IGl0ZW1UeXBlPXtSYWRpb0dyb3VwQ29tcG9uZW50Lkl0ZW1UeXBlc1twcm9wcy5pdGVtVHlwZS50b1VwcGVyQ2FzZSgpXX0gXHJcbiAgICAgICAgICAgIGluZm9DbGFzc05hbWU9e3Byb3BzLmluZm9DbGFzc05hbWV9Lz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKTpzdHJpbmd8bnVsbHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiT3B0aW9uIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJkZXNjcmlwdGlvbiAxXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk9wdGlvbiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiZGVzY3JpcHRpb24gMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJPcHRpb24gM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiBcImRlc2NyaXB0aW9uIDNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcIm1lZGl1bVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiBcImJhclwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiBcInBhbmVsXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4uLy4uL21vZHVsZXMvdXVpZFwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBTd2l0Y2hQcm9wcyA9IHtcclxuICAgIGlkPzogc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U/OiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCxcclxuICAgIHZhbHVlPzogYm9vbGVhbixcclxuICAgIGZpbGw/OiBzdHJpbmcsXHJcbiAgICB0aGVtZT86IFwiZGVmYXVsdFwifFwiY2xlYXJcIixcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIHNpemU/OiBcImRlZmF1bHRcInxcIm1pbmlcIixcclxuICAgIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xyXG59XHJcblxyXG5sZXQgU3dpdGNoTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3dpdGNoUHJvcHMsIHt2YWx1ZTogYm9vbGVhbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlN3aXRjaFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBTd2l0Y2hNb2R1bGVzIHx8IChTd2l0Y2hNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlN3aXRjaFwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBTd2l0Y2hDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKDxTd2l0Y2hDb21wb25lbnQgaWQ9e3Byb3BzLmlkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWUgfHwgZmFsc2V9IGZpbGw9e3Byb3BzLmZpbGx9IFxyXG4gICAgICAgICAgICB0aGVtZT17U3dpdGNoQ29tcG9uZW50LlRoZW1lc1twcm9wcy50aGVtZS50b1VwcGVyQ2FzZSgpXX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gXHJcbiAgICAgICAgICAgIHNpemU9e1N3aXRjaENvbXBvbmVudC5TaXplc1twcm9wcy5zaXplLnRvVXBwZXJDYXNlKCldfSBzdHlsZT17cHJvcHMuc3R5bGV9Lz4pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoIXRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiAhdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICBmaWxsOiBudWxsLFxyXG4gICAgICAgIHRoZW1lOiBcImRlZmF1bHRcIixcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgIHN0eWxlOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7b25DaGFuZ2U6ICh2YWx1ZSkgPT4ge319XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBcImNsZWFyXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJhcGktcHJldmlldy1zd2l0Y2hcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IG51bGxcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcImRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcIm1pbmlcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7fVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwID0ge1xyXG4gICAgICAgIGVycm9yOiBcIlRoZSBgY2xlYXJgIG9wdGlvbiBkb2Vzbid0IHdvcmsgd2VsbCBvbiBsaWdodCB0aGVtZS5cIlxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgVGV4dEFyZWFQcm9wcyA9IHtcclxuICAgIG5hbWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIGF1dG9Gb2N1cz86IGJvb2xlYW4sXHJcbiAgICByZXNpemVhYmxlPzogYm9vbGVhbixcclxuICAgIGZsZXg/OiBib29sZWFuLFxyXG4gICAgYXV0b3NpemU/OiBmYWxzZSxcclxuICAgIHJvd3M/OiBudW1iZXIsXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nLFxyXG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgaWQ/OiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkZvY3VzPzogKGV2LCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkJsdXI/OiAoZXYsIG5hbWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIG9uS2V5RG93bj86IChldikgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgVGV4dEFyZWFNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRleHRBcmVhUHJvcHMsIHt2YWx1ZTogc3RyaW5nfT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6VGV4dEFyZWFQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUZXh0QXJlYU1vZHVsZXMgfHwgKFRleHRBcmVhTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJUZXh0QXJlYVwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSwgbmFtZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldiwgbmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2LCBuYW1lKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbktleURvd24oZXYpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGV2KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFRleHRBcmVhQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybiA8VGV4dEFyZWFDb21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfSBvbktleURvd249e3RoaXMub25LZXlEb3dufSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0vPlxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlIHx8IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRleHRBcmVhUHJvcHMgPSB7XHJcbiAgICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXHJcbiAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICByZXNpemVhYmxlOiBmYWxzZSxcclxuICAgICAgICBmbGV4OiBmYWxzZSxcclxuICAgICAgICBhdXRvc2l6ZTogZmFsc2UsXHJcbiAgICAgICAgcm93czogMyxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICBtYXhMZW5ndGg6IG51bGwsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIG9uRm9jdXM6IE5PT1AsXHJcbiAgICAgICAgb25CbHVyOiBOT09QLFxyXG4gICAgICAgIG9uS2V5RG93bjogTk9PUFxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYXBpLXByZXZpZXctdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogbnVsbFxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWFibGU6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGZsZXg6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGF1dG9zaXplOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvc2l6ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgcm93czogM1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByb3dzOiAyXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJvd3M6IDFcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJFeGFtcGxlIGVycm9yXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogMTAwXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lOiBcIlwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJhcGktcHJldmlldy10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbHAgPSB7XHJcbiAgICAgICAgd2FybjogXCJUaGlzIHNob3VsZCBiZSB1c2VkIGZvciBtdWx0aSBsaW5lIGlucHV0cy5cIlxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgVGV4dElucHV0UHJvcHMgPSB7XHJcbiAgICBuYW1lPzogc3RyaW5nLFxyXG4gICAgc2l6ZT86IFwiZGVmYXVsdFwifFwibWluaVwiXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmcsXHJcbiAgICBtYXhMZW5ndGg/OiBudW1iZXIsXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgICBpbnB1dENsYXNzTmFtZT86IHN0cmluZ1xyXG4gICAgaWQ/OiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGlucHV0OiBUZXh0SW5wdXQpID0+IHZvaWQsXHJcbiAgICBvbkZvY3VzPzogKGV2LCBuYW1lOiBzdHJpbmcsIGlucHV0OiBUZXh0SW5wdXQpID0+IHZvaWQsXHJcbiAgICBvbkJsdXI/OiAoZXYsIG5hbWU6IHN0cmluZywgaW5wdXQ6IFRleHRJbnB1dCkgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgVGV4dElucHV0TW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFRleHRJbnB1dFByb3BzLCB7dmFsdWU6IHN0cmluZ30+IHtcclxuICAgIGhhc1NldDogYm9vbGVhblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRleHRJbnB1dFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6VGV4dElucHV0UHJvcHMgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBzaXplOiBcImRlZmF1bHRcIixcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgbWF4TGVuZ3RoOiA5OTksXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgIGlucHV0Q2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIG9uRm9jdXM6IE5PT1AsXHJcbiAgICAgICAgb25CbHVyOiBOT09QXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGV4dElucHV0TW9kdWxlcyB8fCAoVGV4dElucHV0TW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJUZXh0SW5wdXRcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuaGFzU2V0ID0gZmFsc2VcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlLCBuYW1lLCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMuaGFzU2V0KXJldHVybiAvLyBwcmV2ZW50IGV2ZW50IGlmIHRoZSBvbkNoYW5nZSBoYXMgY2hhbmdlZCB0aGUgdmFsdWUuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZXYsIG5hbWUsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihldiwgbmFtZSwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBUZXh0QXJlYUNvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8VGV4dEFyZWFDb21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gLz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZSB8fCBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWUodmFsdWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgICAgICB0aGlzLmhhc1NldCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJhcGktcHJldmlldy10ZXh0aW5wdXRcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHNpemU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNpemU6IFwibWluaVwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIkV4YW1wbGUgZXJyb3JcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogOTk5XHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU6IFwiXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJhcGktcHJldmlldy10ZXh0aW5wdXRcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB7fVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwID0ge1xyXG4gICAgICAgIHdhcm46IFwiVGhpcyBzaG91bGQgYmUgdXNlZCBmb3Igc2luZ2xlIGxpbmUgaW5wdXRzLlwiXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IG5vdGljZSwgbm90aWNlcywgZXZlbnRzIH0gZnJvbSBcIi4vTm90aWNlc1wiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5cclxubGV0IE5vdGljZU1vZHVsZXNcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHROb3RpY2U6bm90aWNlID0ge1xyXG4gICAgdGV4dDogXCJcIixcclxuICAgIGlkOiBcInVua25vd24gaWRcIixcclxuICAgIG9uQ2xpY2s6IE5PT1AsXHJcbiAgICBidXR0b25UZXh0OiBudWxsLFxyXG4gICAgdHlwZTogXCJkZWZhdWx0XCJcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8bm90aWNlPiB7XHJcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBcIkxpZ2h0Y29yZE5vdGljZVwiXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOm5vdGljZSA9IGRlZmF1bHROb3RpY2VcclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBOb3RpY2VNb2R1bGVzIHx8IChOb3RpY2VNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLm5vdGljZUluZm8pXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgW1xyXG4gICAgICAgICAgICBub3RpY2VDbGFzc2VzXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBub3RpY2VDbGFzc2VzW1wibm90aWNlXCIrdGhpcy5wcm9wcy50eXBlLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkrdGhpcy5wcm9wcy50eXBlLnNsaWNlKDEpXVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZighY2xhc3NOYW1lKXtcclxuICAgICAgICAgICAgbm90aWNlcy5wb3AoKVxyXG4gICAgICAgICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJub3RpY2VVcGRhdGVcIilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5wcm9wcy5idXR0b25UZXh0ID8gPGJ1dHRvbiBjbGFzc05hbWU9e25vdGljZUNsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGljZXMucG9wKClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKClcclxuICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJub3RpY2VVcGRhdGVcIilcclxuICAgICAgICB9fT57dGhpcy5wcm9wcy5idXR0b25UZXh0fTwvYnV0dG9uPiA6IG51bGxcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtub3RpY2VDbGFzc2VzLmRpc21pc3N9IHJvbGU9XCJidXR0b25cIiB0YWJJbmRleD17MH0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm90aWNlcy5wb3AoKVxyXG4gICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJub3RpY2VVcGRhdGVcIilcclxuICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMudGV4dH1cclxuICAgICAgICAgICAge2J1dHRvbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufSIsImltcG9ydCBOb3RpY2UgZnJvbSBcIi4vTm90aWNlXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4uLy4uL21vZHVsZXMvdXVpZFwiXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJldmVudHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7Y29udGFpbmVyOiBhbnl9PiB7XHJcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBcIkxpZ2h0Y29yZE5vdGljZXNcIlxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUmVhZG9ubHk8eyBjb250YWluZXI6IGFueSB9Pil7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMubm90aWNlSGFuZGxlciA9IHRoaXMubm90aWNlSGFuZGxlci5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgbm90aWNlSGFuZGxlcigpe1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgICAgIGV2ZW50cy5vbihcIm5vdGljZVVwZGF0ZVwiLCB0aGlzLm5vdGljZUhhbmRsZXIpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICBldmVudHMub2ZmKFwibm90aWNlVXBkYXRlXCIsIHRoaXMubm90aWNlSGFuZGxlcilcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5oYXNOb3RpY2UpcmV0dXJuIG51bGxcclxuICAgICAgICBjb25zdCBub3RpY2UgPSBub3RpY2VzWzBdXHJcbiAgICAgICAgcmV0dXJuIDxOb3RpY2Ugey4uLm5vdGljZX0+PC9Ob3RpY2U+XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc05vdGljZSgpe1xyXG4gICAgICAgIHJldHVybiBub3RpY2VzLmxlbmd0aCA+IDBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5vdGljZXM6bm90aWNlW10gPSBbXVxyXG5cclxuZXhwb3J0IHR5cGUgbm90aWNlV2l0aG91dElEID0ge1xyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgYnV0dG9uVGV4dD86IHN0cmluZyxcclxuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkLFxyXG4gICAgdHlwZTogXCJkZWZhdWx0XCJ8XCJpbmZvXCJ8XCJzdWNjZXNzXCJ8XCJkYW5nZXJcInxcInN0cmVhbWVyTW9kZVwifFwiZG93bmxvYWRcInxcIm5vdGlmaWNhdGlvblwifFwicHJlbWl1bVwifFwicmljaFByZXNlbmNlXCJ8XCJwcmVtaXVtVGllcjFcInxcInByZW1pdW1UaWVyMlwifFwiZmFjZWJvb2tcInxcImJyYW5kXCJ8XCJzdXJ2ZXlcInxcInNwb3RpZnlcIlxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBub3RpY2UgPSB7XHJcbiAgICBpZDogc3RyaW5nXHJcbn0gJiBub3RpY2VXaXRob3V0SUQiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwiLi9jb21wb25lbnRzL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgdXVpZCBmcm9tIFwiLi9tb2R1bGVzL3V1aWRcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vbW9kdWxlcy9VdGlsc1wiXHJcbmltcG9ydCBEaXNjb3JkVG9vbHMgZnJvbSBcIi4vbW9kdWxlcy9EaXNjb3JkVG9vbHNcIlxyXG5pbXBvcnQgKiBhcyBwYXRjaGVycyBmcm9tIFwiLi9tb2R1bGVzL3BhdGNoZXJzXCJcclxuaW1wb3J0IGV4Y2x1ZGVQcm9wZXJ0aWVzIGZyb20gXCIuL21vZHVsZXMvZXhjbHVkZVByb3BlcnRpZXNcIlxyXG5pbXBvcnQgY2xvbmVOdWxsUHJvdG8gZnJvbSBcIi4vbW9kdWxlcy9jbG9uZU51bGxQcm90b1wiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCB1bmZyZWV6ZSBmcm9tIFwiLi9tb2R1bGVzL1VuZnJlZXplXCJcclxuaW1wb3J0IHsgaXNOYXRpdmUsIGlzSW1wb3J0ZWQgfSBmcm9tIFwiLi9tb2R1bGVzL2Vudmlyb25uZW1lbnRcIlxyXG5pbXBvcnQgKiBhcyBiYW5kYWdlZGJkQXBpIGZyb20gXCJAYmFuZGFnZWRiZC9iZGFwaVwiXHJcbnBhdGNoZXJzLnBhdGNoKClcclxuXHJcbmNvbnN0IExpZ2h0Y29yZEFwaSA9IHtcclxuICAgIFdlYnBhY2tMb2FkZXI6IFdlYnBhY2tMb2FkZXIsXHJcbiAgICBDb21wb25lbnRzOiBDb21wb25lbnRzLFxyXG4gICAgdXVpZDogdXVpZCxcclxuICAgIFV0aWxzOiBVdGlscyxcclxuICAgIERpc2NvcmRUb29sczogRGlzY29yZFRvb2xzLFxyXG4gICAgXzoge1xyXG4gICAgICAgIGV4Y2x1ZGVQcm9wZXJ0aWVzOiBleGNsdWRlUHJvcGVydGllcyxcclxuICAgICAgICBjbG9uZU51bGxQcm90bzogY2xvbmVOdWxsUHJvdG8sXHJcbiAgICAgICAgTk9PUDogTk9PUCxcclxuICAgICAgICB1bmZyZWV6ZTogdW5mcmVlemVcclxuICAgIH0sXHJcbiAgICBnZXQgaXNOYXRpdmUoKXtyZXR1cm4gaXNOYXRpdmV9LFxyXG4gICAgZ2V0IGlzSW1wb3J0ZWQoKXtyZXR1cm4gaXNJbXBvcnRlZH1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgdmFyIFJlYWN0OnR5cGVvZiBpbXBvcnQoXCJyZWFjdFwiKVxyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTGlnaHRjb3JkIGlzIG9ubHkgYXZhaWxsYWlibGUgaW4gTGlnaHRjb3JkIChuYXRpdmUpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgTGlnaHRjb3JkOiBMaWdodGNvcmRHbG9iYWwsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQkRNb2R1bGVzIGlzIG9ubHkgYXZhaWxsYWlibGUgaW4gTGlnaHRjb3JkIChuYXRpdmUpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQkRNb2R1bGVzOiB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6YW55W10sXHJcbiAgICAgICAgICAgIGdldChmaWx0ZXI6KG1vZDphbnkpPT5ib29sZWFuLCBtb2R1bGVzPzphbnlbXSk6YW55W10sXHJcbiAgICAgICAgICAgIGdldChpZDpudW1iZXIsIG1vZHVsZXM/OmFueVtdKTphbnksXHJcbiAgICAgICAgICAgIGdldChpZHM6IFtudW1iZXJ8KChtb2Q6YW55KT0+Ym9vbGVhbildLCBtb2R1bGVzPzphbnlbXSk6YW55XHJcbiAgICAgICAgfSxcclxuICAgICAgICBCZEFwaTogdHlwZW9mIGJhbmRhZ2VkYmRBcGkuQmRBcGksXHJcbiAgICAgICAgRURBcGk6IHR5cGVvZiBiYW5kYWdlZGJkQXBpLkJkQXBpXHJcbiAgICB9XHJcbiAgICB2YXIgTGlnaHRjb3JkOkxpZ2h0Y29yZEdsb2JhbFxyXG4gICAgdmFyIEJkQXBpOiB0eXBlb2YgYmFuZGFnZWRiZEFwaS5CZEFwaVxyXG4gICAgdmFyIEVEQXBpOiB0eXBlb2YgYmFuZGFnZWRiZEFwaS5CZEFwaVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWdodGNvcmRBcGlcclxuXHJcbk9iamVjdC5hc3NpZ24od2luZG93LkxpZ2h0Y29yZC5BcGksIExpZ2h0Y29yZEFwaSlcclxuXHJcbi8qKlxyXG4gKiBUaGUgbWFpbiBMaWdodGNvcmQgZXhwb3J0cy4gQ2FuIGJlIGFjY2Vzc2VkIHdpdGggYHdpbmRvdy5MaWdodGNvcmRgXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExpZ2h0Y29yZEdsb2JhbCB7XHJcbiAgICBEaXNjb3JkTW9kdWxlczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludGVybmFsIERpc2NvcmQncyBkaXNwYXRjaGVyIC0gY2FuIGJlIHVzZWQgdG8gc3Vic2NyaWJlIHRvIGdhdGV3YXkgZXZlbnRzIC8gY2xpZW50IGV2ZW50cy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkaXNwYXRjaGVyOiBpbXBvcnQoXCIuL3R5cGVzL0Rpc2NvcmREaXNwYXRjaGVyVHlwZXNcIikuZGVmYXVsdCxcclxuICAgICAgICBjb25zdGFudHM6IGltcG9ydChcIi4vdHlwZXMvRGlzY29yZENvbnN0YW50c1R5cGVzXCIpLmRlZmF1bHRcclxuICAgIH0sXHJcbiAgICBTZXR0aW5nczoge1xyXG4gICAgICAgIGRldk1vZGU6IGJvb2xlYW4sXHJcbiAgICAgICAgY2FsbFJpbmdpbmdCZWF0OiBib29sZWFuXHJcbiAgICB9LFxyXG4gICAgQXBpOiBMaWdodGNvcmRBcGlHbG9iYWwsXHJcbiAgICBCZXR0ZXJEaXNjb3JkOiB7XHJcbiAgICAgICAgQmRBcGk6IHR5cGVvZiBiYW5kYWdlZGJkQXBpLkJkQXBpLFxyXG4gICAgICAgIFttb2Q6c3RyaW5nXTphbnlcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIEFwaS4gQ2FuIGJlIGFjY2Vzc2VkIHdpdGggYHdpbmRvdy5MaWdodGNvcmQuQXBpYFxyXG4gKi9cclxudHlwZSBMaWdodGNvcmRBcGlHbG9iYWwgPSBsaWdodGNvcmRBcGlNYWluRXhwb3J0cyAmIHR5cGVvZiBMaWdodGNvcmRBcGlcclxuXHJcbnR5cGUgbGlnaHRjb3JkQXBpTWFpbkV4cG9ydHMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFdhaXRzIHVudGlsIHRoZSBmaXJzdCBtb2R1bGUgdGhhdCBtYXRjaCB0aGUgZmlsdGVyIGdldHMgZXhwb3J0ZWRcclxuICAgICAqIEBwYXJhbSBmaWx0ZXIgVGhlIGZpbHRlciB0aGF0IHNwZWNpZmllcyB0aGUgbW9kdWxlIHRvIG1hdGNoLlxyXG4gICAgICovXHJcbiAgICBlbnN1cmVFeHBvcnRlZChmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTpQcm9taXNlPGFueT4sXHJcbiAgICAvKipcclxuICAgICAqIFJlY3JlYXRlIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgYF9fcHJvdG9fX2AgYW5kIGBwcm90b3R5cGVgIHByb3BlcnRpZXMgLSB1c2VmdWxsIGZvciBiZXR0ZXIgZm9ybWF0dGluZyBpbiBjb25zb2xlLlxyXG4gICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHJlY3JlYXRlXHJcbiAgICAgKi9cclxuICAgIGNsb25lTnVsbFByb3RvPE9iaiA9IGFueT4ob2JqOk9iaik6T2JqXHJcbn0iLCJsZXQgcmVxXHJcbnNldFJlcSgpXHJcbmZ1bmN0aW9uIGZpbHRlckRhbmdlcm91cyhtb2RzKXtcclxuICAgIHJldHVybiBtb2RzLm1hcChlID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvdGVjdChlKVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBwcm90ZWN0KGV4cG9ydHMpe1xyXG4gICAgbGV0IHRoZU1vZHVsZSA9IGV4cG9ydHMuZXhwb3J0c1xyXG4gICAgbGV0IG1vZCA9IHRoZU1vZHVsZS5kZWZhdWx0XHJcbiAgICBpZighbW9kKXJldHVybiBleHBvcnRzXHJcbiAgICBpZiAobW9kLnJlbW92ZSAmJiBtb2Quc2V0ICYmIG1vZC5jbGVhciAmJiBtb2QuZ2V0ICYmICFtb2Quc29ydCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoIW1vZC5nZXRUb2tlbiAmJiAhbW9kLmdldEVtYWlsICYmICFtb2Quc2hvd1Rva2VuKXJldHVybiBleHBvcnRzXHJcblxyXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkobW9kLCB7XHJcbiAgICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbihvYmosIHByb3ApIHtcclxuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiZ2V0VG9rZW5cIiB8fCBwcm9wID09PSBcImdldEVtYWlsXCIgfHwgcHJvcCA9PT0gXCJzaG93VG9rZW5cIikgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldDogZnVuY3Rpb24ob2JqLCBmdW5jKSB7XHJcbiAgICAgICAgICAgIGlmIChmdW5jID09IFwiZ2V0VG9rZW5cIiAmJiBvYmouZ2V0VG9rZW4pIHJldHVybiAoKSA9PiBcIm1mYS5YQ25iS3pvMENMSXFkSnpCbkwwRDhQZkRydXFrSk5IandIWHRyMzlVVTNGOGhIeDQzam9qSVN5aTVqZGpPNTJlOV9lOU1qbWFmWkZGcGMtc2VPTWFcIjtcclxuICAgICAgICAgICAgaWYgKGZ1bmMgPT0gXCJnZXRFbWFpbFwiICYmIG9iai5nZXRFbWFpbCkgcmV0dXJuICgpID0+IFwicHVwcGV0MTExMTJAZ21haWwuY29tXCI7XHJcbiAgICAgICAgICAgIGlmIChmdW5jID09IFwic2hvd1Rva2VuXCIgJiYgb2JqLnNob3dUb2tlbikgcmV0dXJuICgpID0+IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChmdW5jID09IFwiX19wcm90b19fXCIgJiYgb2JqLl9fcHJvdG9fXykgcmV0dXJuIHByb3h5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIG9ialtmdW5jXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZXhwb3J0cywge2V4cG9ydHM6IE9iamVjdC5hc3NpZ24oe30sIHRoZU1vZHVsZSwge2RlZmF1bHQ6IHByb3h5fSl9KVxyXG59XHJcblxyXG5jbGFzcyBXZWJwYWNrbG9hZGVyIHtcclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgaWYocmVxKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlckRhbmdlcm91cyhPYmplY3QudmFsdWVzKHJlcS5jKS5maWx0ZXIoKGU6YW55KSA9PiBlICYmIGUuZXhwb3J0cykpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldFJlcSgpXHJcbiAgICAgICAgICAgIGlmKHJlcSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyRGFuZ2Vyb3VzKE9iamVjdC52YWx1ZXMocmVxLmMpLmZpbHRlcigoZTphbnkpID0+IGUgJiYgZS5leHBvcnRzKSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChpZHMsIG1vZHVsZXMpe1xyXG4gICAgICAgIGlmKHR5cGVvZiBpZHMgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgIHJldHVybiAobW9kdWxlcyB8fCB0aGlzLm1vZHVsZXMpLm1hcCgobWRsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihtZGwgJiYgdHlwZW9mIG1kbC5leHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWRsLmV4cG9ydHNcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmZpbHRlcihlID0+IGUpLmZpbHRlcihpZHMpXHJcbiAgICAgICAgfWVsc2UgaWYoQXJyYXkuaXNBcnJheShpZHMpKXtcclxuICAgICAgICAgICAgbW9kdWxlcyA9IG1vZHVsZXMgfHwgdGhpcy5tb2R1bGVzXHJcbiAgICAgICAgICAgIHJldHVybiBpZHMubWFwKGlkID0+IHRoaXMuZ2V0KGlkLCBtb2R1bGVzKSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbW9kdWxlcyA9IG1vZHVsZXMgfHwgdGhpcy5tb2R1bGVzXHJcbiAgICAgICAgICAgIGxldCBtb2R1bGUgPSBtb2R1bGVzLmZpbHRlcihlID0+ICEhZSkuZmluZChlID0+IGUuaSA9PT0gaWRzKVxyXG4gICAgICAgICAgICBpZighbW9kdWxlKXJldHVybiB1bmRlZmluZWRcclxuICAgICAgICAgICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGRlZmF1bHQoKXtcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgV2VicGFja2xvYWRlcigpXHJcblxyXG5mdW5jdGlvbiBzZXRSZXEoKXtcclxuICAgIHRyeXtcclxuICAgICAgICByZXEgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0ucHVzaChbW10sIHtfX2V4dHJhX2lkX186IChtZGwsIGV4cG9ydHMsIHJlcSkgPT4gbWRsLmV4cG9ydHMgPSByZXF9LCBbW1wiX19leHRyYV9pZF9fXCJdXV0pO1xyXG4gICAgICAgIGlmKHJlcSl7XHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXEubS5fX2V4dHJhX2lkX187XHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXEuYy5fX2V4dHJhX2lkX187XHJcbiAgICAgICAgfVxyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICAgIHJlcSA9IHVuZGVmaW5lZFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgbm90aWNlcywgbm90aWNlV2l0aG91dElELCBub3RpY2UsIGV2ZW50cyBhcyBub3RpY2VFdmVudHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcml2YXRlL05vdGljZXNcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB1dWlkIGZyb20gXCIuL3V1aWRcIjtcclxuaW1wb3J0IGNsb25lTnVsbFByb3RvIGZyb20gXCIuL2Nsb25lTnVsbFByb3RvXCI7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJldmVudHNcIjtcclxuaW1wb3J0IHsgZGVmYXVsdE5vdGljZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3ByaXZhdGUvTm90aWNlXCI7XHJcbmltcG9ydCBleGNsdWRlUHJvcGVydGllcyBmcm9tIFwiLi9leGNsdWRlUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi9ub29wXCI7XHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyLCB7IFdlYnBhY2tMb2FkZXJFcnJvciB9IGZyb20gXCIuL1dlYnBhY2tMb2FkZXJcIjtcclxuXHJcbmxldCBzb3VuZE1vZHVsZVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgRGlzY29yZFRvb2xzIHtcclxuICAgIHNob3dOb3RpY2UoZGF0YTpOb3RpY2VEYXRhKTpOb3RpY2V7XHJcbiAgICAgICAgaWYodHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGRhdGEudGV4dCAhPT0gXCJzdHJpbmdcIil0aHJvdyBuZXcgRXJyb3IoYFRoaXMgbm90aWNlIGlzIG5vdCB2YWxpZC4gR2l2ZW46ICR7VXRpbHMuZm9ybWF0SlNPYmplY3QoZGF0YSl9YClcclxuICAgICAgICBsZXQgbmV3RGF0YSA9IGNsb25lTnVsbFByb3RvKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHROb3RpY2UsIGRhdGEpKSBhcyBub3RpY2VcclxuICAgICAgICBuZXdEYXRhLmlkID0gdXVpZCgpXHJcbiAgICAgICAgbm90aWNlcy5wdXNoKG5ld0RhdGEpXHJcbiAgICAgICAgbm90aWNlRXZlbnRzLmVtaXQoXCJub3RpY2VVcGRhdGVcIilcclxuICAgICAgICBjb25zdCBub3RpY2UgPSBuZXcgTm90aWNlKG5ld0RhdGEpXHJcbiAgICAgICAgcmV0dXJuIG5vdGljZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBub3RpY2VzKCk6Tm90aWNlW117XHJcbiAgICAgICAgcmV0dXJuIG5vdGljZXMubWFwKGRhdGEgPT4gbmV3IE5vdGljZShkYXRhKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFF1aWNrbHkgc2VuZCBub3RpZmljYXRpb24gKEV2ZW4gd2hlbiBubyBmb2N1c2VkLilcclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBub3RpZmljYXRpb24uIEJlIHN1cmUgdG8gaW5jbHVkZSBhbGwgcHJvcGVydGllcyBleGNlcHQgZnVuY3Rpb25zIGNhdXNlIHRoZXkncmUgb3B0aW9uYWwuXHJcbiAgICAgKiBOb3RpZmljYXRpb25zIGhhdmUgYSB0aW1lb3V0IG9mIDMtNSBzZWNvbmRzLlxyXG4gICAgICogVGhleSBsb29rIGxpa2UgdGhpczogaHR0cHM6Ly9pLmltZ3VyLmNvbS9qenV4S0t1LnBuZ1xyXG4gICAgICovXHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKGRhdGE6Tm90aWZpY2F0aW9uRGF0YSk6Tm90aWZpY2F0aW9ue1xyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyB3aW5kb3cuTm90aWZpY2F0aW9uKGRhdGEudGl0bGUsIGV4Y2x1ZGVQcm9wZXJ0aWVzKGRhdGEsIFtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiLFxyXG4gICAgICAgICAgICBcIm9uQ2xpY2tcIixcclxuICAgICAgICAgICAgXCJvbkNsb3NlXCIsXHJcbiAgICAgICAgICAgIFwib25TaG93XCJcclxuICAgICAgICBdKSlcclxuICAgICAgICBub3RpZmljYXRpb24ub25jbGljayA9IGRhdGEub25DbGljayB8fCBOT09QXHJcbiAgICAgICAgbm90aWZpY2F0aW9uLm9uc2hvdyA9IGRhdGEub25TaG93IHx8IE5PT1BcclxuICAgICAgICBub3RpZmljYXRpb24ub25jbG9zZSA9IGRhdGEub25DbG9zZSB8fCBOT09QXHJcbiAgICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNvdW5kKHNvdW5kOlNvdW5kKXtcclxuICAgICAgICBzb3VuZE1vZHVsZSA9IHNvdW5kTW9kdWxlIHx8IFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJjcmVhdGVTb3VuZFwiXSlcclxuICAgICAgICBpZighc291bmRNb2R1bGUpdGhyb3cgbmV3IFdlYnBhY2tMb2FkZXJFcnJvcihcIkNvdWxkbid0IGZpbmQgc291bmRNb2R1bGUgaGVyZS5cIilcclxuICAgICAgICBjb25zdCBjcmVhdGVkID0gc291bmRNb2R1bGUuY3JlYXRlU291bmQoc291bmQpXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZWRcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U291bmQoc291bmQ6U291bmQpe1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmNyZWF0ZVNvdW5kKHNvdW5kKVxyXG4gICAgICAgIGNyZWF0ZWQucGxheSgpXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU291bmQgPSBcImNhbGxfY2FsbGluZ1wifFwiY2FsbF9yaW5naW5nXCJ8XCJjYWxsX3JpbmdpbmdfYmVhdFwifFwiZGRyLWRvd25cInxcImRkci1sZWZ0XCJ8XCJkZHItcmlnaHRcInxcImRkci11cFwifFwiZGVhZmVuXCJ8XCJkaXNjb2RvXCJ8XCJkaXNjb25uZWN0XCJ8XCJodW1hbl9tYW5cInxcIm1lbnRpb24xXCJ8XCJtZW50aW9uMlwifFwibWVudGlvbjNcInxcIm1lc3NhZ2UxXCJ8XCJtZXNzYWdlMlwifFwibWVzc2FnZTNcInxcIm11dGVcInxcIm92ZXJsYXl1bmxvY2tcInxcInB0dF9zdGFydFwifFwicHR0X3N0b3BcInxcInJlY29ubmVjdFwifFwicm9ib3RfbWFuXCJ8XCJzdHJlYW1fZW5kZWRcInxcInN0cmVhbV9zdGFydGVkXCJ8XCJzdHJlYW1fdXNlcl9qb2luZWRcInxcInN0cmVhbV91c2VyX2xlZnRcInxcInVuZGVhZmVuXCJ8XCJ1bm11dGVcInxcInVzZXJfam9pblwifFwidXNlcl9sZWF2ZVwifFwidXNlcl9tb3ZlZFwiXHJcblxyXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25EYXRhID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGJvZHk6IHN0cmluZyxcclxuICAgIGljb246IHN0cmluZyxcclxuICAgIG9uU2hvdz86ICgpID0+IHZvaWQsXHJcbiAgICBvbkNsaWNrPzogKCkgPT4gdm9pZCxcclxuICAgIG9uQ2xvc2U/OiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE5vdGljZURhdGEgPSBub3RpY2VXaXRob3V0SURcclxuXHJcbmNvbnN0IEV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uKCl7XHJcbiAgICBpZih0aGlzLnJlbW92ZWQgIT09IHRoaXMuc3RhdGUucmVtb3ZlZCl7XHJcbiAgICAgICAgaWYodGhpcy5yZW1vdmVkKXtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KFwicmVtb3ZlZFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHRoaXMuc2hvd2luZyAhPT0gdGhpcy5zdGF0ZS5zaG93aW5nKXtcclxuICAgICAgICBpZih0aGlzLnNob3dpbmcpe1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJzaG93aW5nXCIsIHRydWUpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInNob3dpbmdcIiwgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5pbmRleCAhPT0gdGhpcy5zdGF0ZS5pbmRleCl7XHJcbiAgICAgICAgdGhpcy5lbWl0KFwiaW5kZXhcIiwgdGhpcy5pbmRleClcclxuICAgIH1cclxufVxyXG5cclxuLyoqIEEgbm90aWNlIGludGVyZmFjZSBmb3IgbW9kaWZ5aW5nIGl0IGFuZCBzdWJzY3JpYmluZyB0byBldmVudHMuICovXHJcbmV4cG9ydCBjbGFzcyBOb3RpY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVtb3ZlZDogdGhpcy5yZW1vdmVkLFxyXG4gICAgICAgICAgICBzaG93aW5nOiB0aGlzLnNob3dpbmcsXHJcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZXZlbnRGdW5jID0gRXZlbnRIYW5kbGVyLmJpbmQodGhpcylcclxuICAgICAgICBub3RpY2VFdmVudHMub24oXCJub3RpY2VVcGRhdGVcIiwgZXZlbnRGdW5jKVxyXG4gICAgICAgIHRoaXMub24oXCJyZW1vdmVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbm90aWNlRXZlbnRzLm9mZihcIm5vdGljZVVwZGF0ZVwiLCBldmVudEZ1bmMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgYmUgY2FsbGVkIHdoZW0gdGhlIG5vdGljZSBpcyByZW1vdmVkLlxyXG4gICAgICovXHJcbiAgICBvbihldmVudDogXCJyZW1vdmVkXCIsIGxpc3RlbmVyOiAoKSA9PiB2b2lkKTp0aGlzXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIG5vdGljZSBpcyB2aXNpYmxlIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgb24oZXZlbnQ6IFwic2hvd2luZ1wiLCBsaXN0ZW5lcjogKGlzU2hvd2luZzpib29sZWFuKSA9PiB2b2lkKTp0aGlzXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIG5vdGljZSBxdWV1ZSBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBvbihldmVudDogXCJpbmRleFwiLCBsaXN0ZW5lcjogKGluZGV4Om51bWJlcikgPT4gdm9pZCk6dGhpc1xyXG4gICAgb24oZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6ICguLi5hcmdzOmFueVtdKSA9PiB2b2lkKXtcclxuICAgICAgICByZXR1cm4gc3VwZXIub24oZXZlbnQsIGxpc3RlbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbSB0aGUgbm90aWNlIGlzIHJlbW92ZWQuXHJcbiAgICAgKi9cclxuICAgIG9uY2UoZXZlbnQ6IFwicmVtb3ZlZFwiLCBsaXN0ZW5lcjogKCkgPT4gdm9pZCk6dGhpc1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBub3RpY2UgaXMgdmlzaWJsZSBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIG9uY2UoZXZlbnQ6IFwic2hvd2luZ1wiLCBsaXN0ZW5lcjogKGlzU2hvd2luZzpib29sZWFuKSA9PiB2b2lkKTp0aGlzXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIG5vdGljZSBxdWV1ZSBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBvbmNlKGV2ZW50OiBcImluZGV4XCIsIGxpc3RlbmVyOiAoaW5kZXg6bnVtYmVyKSA9PiB2b2lkKTp0aGlzXHJcbiAgICBvbmNlKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoLi4uYXJnczphbnlbXSkgPT4gdm9pZCl7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLm9uY2UoZXZlbnQsIGxpc3RlbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIG9mZihldmVudDogXCJyZW1vdmVkXCIsIGxpc3RlbmVyOiAoKSA9PiB2b2lkKTp0aGlzXHJcbiAgICBvZmYoZXZlbnQ6IFwic2hvd2luZ1wiLCBsaXN0ZW5lcjogKGlzU2hvd2luZzpib29sZWFuKSA9PiB2b2lkKTp0aGlzXHJcbiAgICBvZmYoZXZlbnQ6IFwiaW5kZXhcIiwgbGlzdGVuZXI6IChpbmRleDpudW1iZXIpID0+IHZvaWQpOnRoaXNcclxuICAgIG9mZihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKC4uLmFyZ3M6YW55W10pID0+IHZvaWQpe1xyXG4gICAgICAgIHJldHVybiBzdXBlci5vZmYoZXZlbnQsIGxpc3RlbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlOntcclxuICAgICAgICByZW1vdmVkOmJvb2xlYW4sXHJcbiAgICAgICAgc2hvd2luZzpib29sZWFuLFxyXG4gICAgICAgIGluZGV4Om51bWJlclxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV4dFRpY2tSZWZyZXNoOmJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIGdldCByZW1vdmVkKCk6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gIW5vdGljZXMuZmluZChlID0+IGUuaWQgPT09IHRoaXMuaWQpXHJcbiAgICB9XHJcbiAgICBnZXQgc2hvd2luZygpOmJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPT09IDBcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5kZXgoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIG5vdGljZXMuZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gdGhpcy5pZClcclxuICAgIH1cclxuICAgIGdldCBpZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuaWRcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGF0YTogUGFydGlhbDxub3RpY2U+KXtcclxuICAgICAgICBmb3IobGV0IGtleSBpbiBkYXRhKXtcclxuICAgICAgICAgICAgaWYoa2V5ID09PSBcImlkXCIpY29udGludWVcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2tleV0gPSBkYXRhW2tleV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLm5leHRUaWNrUmVmcmVzaCl7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFRpY2tSZWZyZXNoID0gdHJ1ZVxyXG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRpY2tSZWZyZXNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIG5vdGljZUV2ZW50cy5lbWl0KFwibm90aWNlVXBkYXRlXCIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB0ZXh0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS50ZXh0XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dCh0ZXh0KXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB0eXBlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS50eXBlXHJcbiAgICB9XHJcbiAgICBzZXQgdHlwZSh0eXBlKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBidXR0b25UZXh0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5idXR0b25UZXh0XHJcbiAgICB9XHJcbiAgICBzZXQgYnV0dG9uVGV4dChidXR0b25UZXh0OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoe1xyXG4gICAgICAgICAgICBidXR0b25UZXh0XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb25DbGljaygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEub25DbGlja1xyXG4gICAgfVxyXG4gICAgc2V0IG9uQ2xpY2sob25DbGljayl7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoe1xyXG4gICAgICAgICAgICBvbkNsaWNrXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKXtcclxuICAgICAgICBpZih0aGlzLnJlbW92ZWQpcmV0dXJuXHJcbiAgICAgICAgbm90aWNlcy5zcGxpY2UodGhpcy5pbmRleCwgMSlcclxuICAgICAgICBub3RpY2VFdmVudHMuZW1pdChcIm5vdGljZVVwZGF0ZVwiKVxyXG4gICAgfVxyXG4gICAgZGF0YTpub3RpY2VcclxufSIsImltcG9ydCBjb21wb25lbnRzIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIlxyXG5pbXBvcnQgeyBDb21wb25lbnRQcm9wcyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB1dWlkIGZyb20gXCIuL3V1aWRcIlxyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0cy9UZXh0SW5wdXRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IGNsYXNzIFBsdWdpblV0aWxpdGllcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICByZW5kZXJTZXR0aW5ncyhzZXR0aW5nczpTZXR0aW5nSXRlbVtdKXtcclxuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLnJlbmRlclNldHRpbmdzVG9SZWFjdChzZXR0aW5ncylcclxuICAgICAgICBsZXQgZWxlbSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2tleTogdXVpZCgpfSwgaXRlbXMpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLlJlYWN0VG9IVE1MRWxlbWVudChlbGVtKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclNldHRpbmdzVG9SZWFjdChzZXR0aW5nczpTZXR0aW5nSXRlbVtdKXtcclxuICAgICAgICBsZXQgaXRlbXMgPSBbXVxyXG4gICAgICAgIHNldHRpbmdzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0eXBlb2YgaXRlbSAhPT0gXCJvYmplY3RcIilyZXR1cm4gaXRlbXMucHVzaChpdGVtKVxyXG4gICAgICAgICAgICBpZihpdGVtLnByb3BzICYmIFwiY2hpbGRyZW5cIiBpbiBpdGVtLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KGl0ZW0ucHJvcHMuY2hpbGRyZW4pKWl0ZW0ucHJvcHMuY2hpbGRyZW4gPSBbaXRlbS5wcm9wcy5jaGlsZHJlbl1cclxuICAgICAgICAgICAgICAgIGl0ZW0ucHJvcHMuY2hpbGRyZW4gPSB0aGlzLnJlbmRlclNldHRpbmdzVG9SZWFjdChpdGVtLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFpdGVtLnByb3BzKWl0ZW0ucHJvcHMgPSB7fVxyXG4gICAgICAgICAgICBpdGVtLnByb3BzLmtleSA9IHV1aWQoKVxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gVXRpbHMuZ2V0TmVzdGVkUHJvcHMoY29tcG9uZW50cywgaXRlbS5jb21wb25lbnQpXHJcbiAgICAgICAgICAgIGlmKCFjb21wb25lbnQpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHdhcm5pbmcgPSBuZXcgVGV4dElucHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYFdhcm5pbmc6IE5vIGNvbXBvbmVudCB3YXMgZm91bmQgZm9yOiBcIiR7aXRlbS5jb21wb25lbnR9XCIuIFBsZWFzZSBjb3JyZWN0IHlvdXIgY29kZS5gLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBgV2FybmluZzogTm8gY29tcG9uZW50IHdhcyBmb3VuZCBmb3I6IFwiJHtpdGVtLmNvbXBvbmVudH1cIi4gUGxlYXNlIGNvcnJlY3QgeW91ciBjb2RlLmBcclxuICAgICAgICAgICAgICAgIH0pLnJlbmRlcigpXHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHdhcm5pbmcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBPYmplY3QuY3JlYXRlKGl0ZW0ucHJvcHMpKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBpdGVtc1xyXG4gICAgfVxyXG59XHJcblxyXG50eXBlIFNldHRpbmdJdGVtID0ge1xyXG4gICAgY29tcG9uZW50OiBzdHJpbmcsXHJcbiAgICBwcm9wczogQ29tcG9uZW50UHJvcHM8YW55PlxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5mcmVlemUobykge1xyXG4gICAgdmFyIG9vID0gdW5kZWZpbmVkO1xyXG4gICAgaWYgKG8gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIG9vID0gW107XHJcbiAgICAgICAgdmFyIGNsb25lID0gZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICBvby5wdXNoKHYpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBvLmZvckVhY2goY2xvbmUpO1xyXG4gICAgfSBlbHNlIGlmIChvIGluc3RhbmNlb2YgU3RyaW5nKSB7XHJcbiAgICAgICAgb28gPSBuZXcgU3RyaW5nKG8pLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgb28gPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvKSB7XHJcbiAgICAgICAgICAgIG9vW3Byb3BlcnR5XSA9IG9bcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvbztcclxufVxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgT2JqZWN0Q29uc3RydWN0b3Ige1xyXG4gICAgICAgIHVuZnJlZXplOiA8VCBleHRlbmRzIGFueT4ob2JqOiBSZWFkb25seTxUPikgPT4gVFxyXG4gICAgfVxyXG59XHJcbk9iamVjdC51bmZyZWV6ZSA9IHVuZnJlZXplIiwiaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIilcclxuaW1wb3J0IFBsdWdpblV0aWxpdGllcyBmcm9tIFwiLi9QbHVnaW5VdGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBVdGlscyB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBSZWFjdFRvSFRNTEVsZW1lbnQoUmVhY3RFbGVtZW50OiBSZWFjdEVsZW1lbnQpeyAgICBcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdEVsZW1lbnQsIGVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBnZXQgUGx1Z2luVXRpbHMoKXtyZXR1cm4gUGx1Z2luVXRpbGl0aWVzfVxyXG5cclxuICAgIGdldE5lc3RlZFByb3BzKG9iajphbnksIHBhdGg6IHN0cmluZyl7XHJcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gcGF0aC5zcGxpdChcIi5cIilcclxuICAgICAgICBmb3IobGV0IHNlZyBvZiBzZWdtZW50cyl7XHJcbiAgICAgICAgICAgIG9iaiA9IG9iaiAmJiAoc2VnIGluIG9iaikgPyBvYmpbc2VnXSA6IHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqXHJcbiAgICB9XHJcblxyXG4gICAgRGVjaW1hbENvbG9yVG9IZXgoY29sb3I6bnVtYmVyKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiK2NvbG9yLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXHJcbiAgICB9XHJcblxyXG4gICAgSGV4Q29sb3JUb0RlY2ltYWwoY29sb3I6c3RyaW5nKTpudW1iZXJ7XHJcbiAgICAgICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKC9bIztdL2csIFwiXCIpXHJcbiAgICAgICAgbGV0IHJlcyA9IHBhcnNlSW50KGNvbG9yLCAxNilcclxuICAgICAgICBpZihpc05hTihyZXMpKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjb2xvcjogJHtjb2xvcn1gKVxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVEYShjbGFzc05hbWU6c3RyaW5nKTpzdHJpbmd7XHJcbiAgICAgICAgaWYoIWNsYXNzTmFtZSlyZXR1cm4gY2xhc3NOYW1lXHJcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZS5zcGxpdChcIiBcIikuZmlsdGVyKGUgPT4gIWUuc3RhcnRzV2l0aChcImRhLVwiKSkuam9pbihcIiBcIilcclxuICAgIH1cclxuXHJcbiAgICBGaW5kUmVhY3QoZG9tOkVsZW1lbnQsIHRyYXZlcnNlVXA6bnVtYmVyID0gMCk6UmVhY3QuQ29tcG9uZW50fFJlYWN0LlB1cmVDb21wb25lbnR7XHJcbiAgICAgICAgLy8gdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTMyMTc0Mi9yZWFjdC1nZXR0aW5nLWEtY29tcG9uZW50LWZyb20tYS1kb20tZWxlbWVudC1mb3ItZGVidWdnaW5nIzM5MTY1MTM3XHJcbiAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZG9tKS5maW5kKGtleT0+a2V5LnN0YXJ0c1dpdGgoXCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSRcIikpO1xyXG4gICAgICAgIGNvbnN0IGRvbUZpYmVyID0gZG9tW2tleV07XHJcbiAgICAgICAgaWYgKGRvbUZpYmVyID09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgLy8gcmVhY3QgPDE2XHJcbiAgICAgICAgaWYgKGRvbUZpYmVyLl9jdXJyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgY29tcEZpYmVyID0gZG9tRmliZXIuX2N1cnJlbnRFbGVtZW50Ll9vd25lcjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmF2ZXJzZVVwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbXBGaWJlciA9IGNvbXBGaWJlci5fY3VycmVudEVsZW1lbnQuX293bmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wRmliZXIuX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIHJlYWN0IDE2K1xyXG4gICAgICAgIGNvbnN0IEdldENvbXBGaWJlciA9IGZpYmVyPT57XHJcbiAgICAgICAgICAgIC8vcmV0dXJuIGZpYmVyLl9kZWJ1Z093bmVyOyAvLyB0aGlzIGFsc28gd29ya3MsIGJ1dCBpcyBfX0RFVl9fIG9ubHlcclxuICAgICAgICAgICAgbGV0IHBhcmVudEZpYmVyID0gZmliZXIucmV0dXJuO1xyXG4gICAgICAgICAgICB3aGlsZSAodHlwZW9mIHBhcmVudEZpYmVyLnR5cGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50RmliZXIgPSBwYXJlbnRGaWJlci5yZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEZpYmVyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGNvbXBGaWJlciA9IEdldENvbXBGaWJlcihkb21GaWJlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmF2ZXJzZVVwOyBpKyspIHtcclxuICAgICAgICAgICAgY29tcEZpYmVyID0gR2V0Q29tcEZpYmVyKGNvbXBGaWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21wRmliZXIuc3RhdGVOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NsYXNzKGNsYXNzTmFtZXM6c3RyaW5nLCBjbGFzc05hbWU6c3RyaW5nKTpib29sZWFue1xyXG4gICAgICAgIGlmKCFjbGFzc05hbWVzIHx8ICFjbGFzc05hbWUpcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgY29uc3QgY2xhc3NuYW1lcyA9IGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgZm9yKGxldCBjbGFzc25hbWUgb2YgdGhpcy5yZW1vdmVEYShjbGFzc05hbWUpLnNwbGl0KFwiIFwiKSl7XHJcbiAgICAgICAgICAgIGlmKCFjbGFzc25hbWVzLmluY2x1ZGVzKGNsYXNzbmFtZSkpcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0SlNPYmplY3Qob2JqOmFueSk6c3RyaW5ne1xyXG4gICAgICAgIGlmKFtcInN0cmluZ1wiLCBcIm51bWJlclwiLCBcImJvb2xlYW5cIiwgXCJiaWdpbnRcIiwgXCJ1bmRlZmluZWRcIl0uaW5jbHVkZXModHlwZW9mIG9iaikpcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICBpZihvYmogPT09IG51bGwpcmV0dXJuIFwibnVsbFwiXHJcbiAgICAgICAgaWYodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKXJldHVybiBTdHJpbmcob2JqKVxyXG4gICAgICAgIGlmKHR5cGVvZiBvYmogPT09IFwic3ltYm9sXCIpcmV0dXJuIFN0cmluZyhvYmopXHJcblxyXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkob2JqKSl7XHJcbiAgICAgICAgICAgIGlmKCFvYmoubGVuZ3RoKXJldHVybiBcIltdXCJcclxuICAgICAgICAgICAgcmV0dXJuIGBbXFxuICAgICR7b2JqLm1hcChlID0+IHRoaXMuZm9ybWF0SlNPYmplY3QoZSkpLmpvaW4oXCIsXFxuICAgIFwiKX1cXG5dYFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKVxyXG4gICAgICAgICAgICBpZihrZXlzLmxlbmd0aCA9PT0gMClyZXR1cm4gXCJ7fVwiXHJcbiAgICAgICAgICAgIHJldHVybiBge1xcbiAgICAke2tleXMubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JpZ2luYWwgPSBrZXlcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIpa2V5ID0gXCJbXCIrU3RyaW5nKGtleSkrXCJdXCJcclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGtleSA9PT0gXCJudW1iZXJcIilrZXkgPSBTdHJpbmcoa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNOYU4ocGFyc2VJbnQoa2V5WzBdKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5mb3JtYXRKU09iamVjdChrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKC9bXlxcd1xcZF8kXS9nLnRlc3Qoa2V5KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmZvcm1hdEpTT2JqZWN0KGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtrZXl9OiAke3RoaXMuZm9ybWF0SlNPYmplY3Qob2JqW29yaWdpbmFsXSl9YFxyXG4gICAgICAgICAgICB9KX1cXG59YFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2xvcihjb2xvcl9uYW1lOkNvbG9yTmFtZSk6c3RyaW5neyBcclxuICAgICAgICByZXR1cm4gTGlnaHRjb3JkLkRpc2NvcmRNb2R1bGVzLmNvbnN0YW50cy5Db2xvcnNbY29sb3JfbmFtZS50b1VwcGVyQ2FzZSgpXVxyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0TGV0dGVyVXBwZXJjYXNlKHN0cjpzdHJpbmcpOnN0cmluZ3tcclxuICAgICAgICBpZighc3RyKXJldHVybiBcIlwiXHJcbiAgICAgICAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpK3N0ci5zbGljZSgxKVxyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGVYVGltZXM8cmVzdWx0ID0gYW55PihmdW5jOihpbmRleD86bnVtYmVyKSA9PiByZXN1bHQsIHRpbWVzOm51bWJlcik6cmVzdWx0W117XHJcbiAgICAgICAgbGV0IHJlc3VsdHM6cmVzdWx0W10gPSBbXVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7dGltZXMgPiBpO2krKyl7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChmdW5jKGkpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0c1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDb2xvck5hbWUgPSBcInByaW1hcnlfZGFya18xMDBcInxcInByaW1hcnlfZGFya18xMzBcInxcInByaW1hcnlfZGFya18xNjBcInxcInByaW1hcnlfZGFya18yMDBcInxcInByaW1hcnlfZGFya18yMzBcInxcInByaW1hcnlfZGFya18yNjBcInxcInByaW1hcnlfZGFya18zMDBcInxcInByaW1hcnlfZGFya18zMzBcInxcInByaW1hcnlfZGFya18zNjBcInxcInByaW1hcnlfZGFya180MDBcInxcInByaW1hcnlfZGFya180MzBcInxcInByaW1hcnlfZGFya180NjBcInxcInByaW1hcnlfZGFya181MDBcInxcInByaW1hcnlfZGFya1wifFwicHJpbWFyeV9kYXJrXzUzMFwifFwicHJpbWFyeV9kYXJrXzU2MFwifFwicHJpbWFyeV9kYXJrXzYwMFwifFwicHJpbWFyeV9kYXJrXzYzMFwifFwicHJpbWFyeV9kYXJrXzY2MFwifFwicHJpbWFyeV9kYXJrXzcwMFwifFwicHJpbWFyeV9kYXJrXzczMFwifFwicHJpbWFyeV9kYXJrXzc2MFwifFwicHJpbWFyeV9kYXJrXzgwMFwifFwicHJpbWFyeV9kYXJrXzgzMFwifFwicHJpbWFyeV9kYXJrXzg2MFwifFwicHJpbWFyeV9kYXJrXzkwMFwifFwicHJpbWFyeV9saWdodF8xMDBcInxcInByaW1hcnlfbGlnaHRfMTMwXCJ8XCJwcmltYXJ5X2xpZ2h0XzE2MFwifFwicHJpbWFyeV9saWdodF8yMDBcInxcInByaW1hcnlfbGlnaHRfMjMwXCJ8XCJwcmltYXJ5X2xpZ2h0XzI2MFwifFwicHJpbWFyeV9saWdodF8zMDBcInxcInByaW1hcnlfbGlnaHRfMzMwXCJ8XCJwcmltYXJ5X2xpZ2h0XzM2MFwifFwicHJpbWFyeV9saWdodF80MDBcInxcInByaW1hcnlfbGlnaHRfNDMwXCJ8XCJwcmltYXJ5X2xpZ2h0XzQ2MFwifFwicHJpbWFyeV9saWdodF81MDBcInxcInByaW1hcnlfbGlnaHRcInxcInByaW1hcnlfbGlnaHRfNTMwXCJ8XCJwcmltYXJ5X2xpZ2h0XzU2MFwifFwicHJpbWFyeV9saWdodF82MDBcInxcInByaW1hcnlfbGlnaHRfNjMwXCJ8XCJwcmltYXJ5X2xpZ2h0XzY2MFwifFwicHJpbWFyeV9saWdodF83MDBcInxcInByaW1hcnlfbGlnaHRfNzMwXCJ8XCJwcmltYXJ5X2xpZ2h0Xzc2MFwifFwicHJpbWFyeV9saWdodF84MDBcInxcInByaW1hcnlfbGlnaHRfODMwXCJ8XCJwcmltYXJ5X2xpZ2h0Xzg2MFwifFwicHJpbWFyeV9saWdodF85MDBcInxcImJyYW5kXzEwMFwifFwiYnJhbmRfMTMwXCJ8XCJicmFuZF8xNjBcInxcImJyYW5kXzIwMFwifFwiYnJhbmRfMjMwXCJ8XCJicmFuZF8yNjBcInxcImJyYW5kXzMwMFwifFwiYnJhbmRfMzMwXCJ8XCJicmFuZF8zNjBcInxcImJyYW5kXzQwMFwifFwiYnJhbmRfNDMwXCJ8XCJicmFuZF80NjBcInxcImJyYW5kXzUwMFwifFwiYnJhbmRcInxcImJyYW5kXzUzMFwifFwiYnJhbmRfNTYwXCJ8XCJicmFuZF82MDBcInxcImJyYW5kXzYzMFwifFwiYnJhbmRfNjYwXCJ8XCJicmFuZF83MDBcInxcImJyYW5kXzczMFwifFwiYnJhbmRfNzYwXCJ8XCJicmFuZF84MDBcInxcImJyYW5kXzgzMFwifFwiYnJhbmRfODYwXCJ8XCJicmFuZF85MDBcInxcInN0YXR1c19yZWRfMTAwXCJ8XCJzdGF0dXNfcmVkXzEzMFwifFwic3RhdHVzX3JlZF8xNjBcInxcInN0YXR1c19yZWRfMjAwXCJ8XCJzdGF0dXNfcmVkXzIzMFwifFwic3RhdHVzX3JlZF8yNjBcInxcInN0YXR1c19yZWRfMzAwXCJ8XCJzdGF0dXNfcmVkXzMzMFwifFwic3RhdHVzX3JlZF8zNjBcInxcInN0YXR1c19yZWRfNDAwXCJ8XCJzdGF0dXNfcmVkXzQzMFwifFwic3RhdHVzX3JlZF80NjBcInxcInN0YXR1c19yZWRfNTAwXCJ8XCJzdGF0dXNfcmVkXCJ8XCJzdGF0dXNfcmVkXzUzMFwifFwic3RhdHVzX3JlZF81NjBcInxcInN0YXR1c19yZWRfNjAwXCJ8XCJzdGF0dXNfcmVkXzYzMFwifFwic3RhdHVzX3JlZF82NjBcInxcInN0YXR1c19yZWRfNzAwXCJ8XCJzdGF0dXNfcmVkXzczMFwifFwic3RhdHVzX3JlZF83NjBcInxcInN0YXR1c19yZWRfODAwXCJ8XCJzdGF0dXNfcmVkXzgzMFwifFwic3RhdHVzX3JlZF84NjBcInxcInN0YXR1c19yZWRfOTAwXCJ8XCJzdGF0dXNfeWVsbG93XzEwMFwifFwic3RhdHVzX3llbGxvd18xMzBcInxcInN0YXR1c195ZWxsb3dfMTYwXCJ8XCJzdGF0dXNfeWVsbG93XzIwMFwifFwic3RhdHVzX3llbGxvd18yMzBcInxcInN0YXR1c195ZWxsb3dfMjYwXCJ8XCJzdGF0dXNfeWVsbG93XzMwMFwifFwic3RhdHVzX3llbGxvd18zMzBcInxcInN0YXR1c195ZWxsb3dfMzYwXCJ8XCJzdGF0dXNfeWVsbG93XzQwMFwifFwic3RhdHVzX3llbGxvd180MzBcInxcInN0YXR1c195ZWxsb3dfNDYwXCJ8XCJzdGF0dXNfeWVsbG93XzUwMFwifFwic3RhdHVzX3llbGxvd1wifFwic3RhdHVzX3llbGxvd181MzBcInxcInN0YXR1c195ZWxsb3dfNTYwXCJ8XCJzdGF0dXNfeWVsbG93XzYwMFwifFwic3RhdHVzX3llbGxvd182MzBcInxcInN0YXR1c195ZWxsb3dfNjYwXCJ8XCJzdGF0dXNfeWVsbG93XzcwMFwifFwic3RhdHVzX3llbGxvd183MzBcInxcInN0YXR1c195ZWxsb3dfNzYwXCJ8XCJzdGF0dXNfeWVsbG93XzgwMFwifFwic3RhdHVzX3llbGxvd184MzBcInxcInN0YXR1c195ZWxsb3dfODYwXCJ8XCJzdGF0dXNfeWVsbG93XzkwMFwifFwic3RhdHVzX2dyZWVuXzEwMFwifFwic3RhdHVzX2dyZWVuXzEzMFwifFwic3RhdHVzX2dyZWVuXzE2MFwifFwic3RhdHVzX2dyZWVuXzIwMFwifFwic3RhdHVzX2dyZWVuXzIzMFwifFwic3RhdHVzX2dyZWVuXzI2MFwifFwic3RhdHVzX2dyZWVuXzMwMFwifFwic3RhdHVzX2dyZWVuXzMzMFwifFwic3RhdHVzX2dyZWVuXzM2MFwifFwic3RhdHVzX2dyZWVuXzQwMFwifFwic3RhdHVzX2dyZWVuXzQzMFwifFwic3RhdHVzX2dyZWVuXzQ2MFwifFwic3RhdHVzX2dyZWVuXzUwMFwifFwic3RhdHVzX2dyZWVuXCJ8XCJzdGF0dXNfZ3JlZW5fNTMwXCJ8XCJzdGF0dXNfZ3JlZW5fNTYwXCJ8XCJzdGF0dXNfZ3JlZW5fNjAwXCJ8XCJzdGF0dXNfZ3JlZW5fNjMwXCJ8XCJzdGF0dXNfZ3JlZW5fNjYwXCJ8XCJzdGF0dXNfZ3JlZW5fNzAwXCJ8XCJzdGF0dXNfZ3JlZW5fNzMwXCJ8XCJzdGF0dXNfZ3JlZW5fNzYwXCJ8XCJzdGF0dXNfZ3JlZW5fODAwXCJ8XCJzdGF0dXNfZ3JlZW5fODMwXCJ8XCJzdGF0dXNfZ3JlZW5fODYwXCJ8XCJzdGF0dXNfZ3JlZW5fOTAwXCJ8XCJzdGF0dXNfZ3JleV8xMDBcInxcInN0YXR1c19ncmV5XzEzMFwifFwic3RhdHVzX2dyZXlfMTYwXCJ8XCJzdGF0dXNfZ3JleV8yMDBcInxcInN0YXR1c19ncmV5XzIzMFwifFwic3RhdHVzX2dyZXlfMjYwXCJ8XCJzdGF0dXNfZ3JleV8zMDBcInxcInN0YXR1c19ncmV5XzMzMFwifFwic3RhdHVzX2dyZXlfMzYwXCJ8XCJzdGF0dXNfZ3JleV80MDBcInxcInN0YXR1c19ncmV5XzQzMFwifFwic3RhdHVzX2dyZXlfNDYwXCJ8XCJzdGF0dXNfZ3JleV81MDBcInxcInN0YXR1c19ncmV5XCJ8XCJzdGF0dXNfZ3JleV81MzBcInxcInN0YXR1c19ncmV5XzU2MFwifFwic3RhdHVzX2dyZXlfNjAwXCJ8XCJzdGF0dXNfZ3JleV82MzBcInxcInN0YXR1c19ncmV5XzY2MFwifFwic3RhdHVzX2dyZXlfNzAwXCJ8XCJzdGF0dXNfZ3JleV83MzBcInxcInN0YXR1c19ncmV5Xzc2MFwifFwic3RhdHVzX2dyZXlfODAwXCJ8XCJzdGF0dXNfZ3JleV84MzBcInxcInN0YXR1c19ncmV5Xzg2MFwifFwic3RhdHVzX2dyZXlfOTAwXCJ8XCJsaW5rXzEwMFwifFwibGlua18xMzBcInxcImxpbmtfMTYwXCJ8XCJsaW5rXzIwMFwifFwibGlua18yMzBcInxcImxpbmtfMjYwXCJ8XCJsaW5rXzMwMFwifFwibGlua18zMzBcInxcImxpbmtfMzYwXCJ8XCJsaW5rXzQwMFwifFwibGlua180MzBcInxcImxpbmtfNDYwXCJ8XCJsaW5rXzUwMFwifFwibGlua1wifFwibGlua181MzBcInxcImxpbmtfNTYwXCJ8XCJsaW5rXzYwMFwifFwibGlua182MzBcInxcImxpbmtfNjYwXCJ8XCJsaW5rXzcwMFwifFwibGlua183MzBcInxcImxpbmtfNzYwXCJ8XCJsaW5rXzgwMFwifFwibGlua184MzBcInxcImxpbmtfODYwXCJ8XCJsaW5rXzkwMFwifFwibGlua19saWdodF8xMDBcInxcImxpbmtfbGlnaHRfMTMwXCJ8XCJsaW5rX2xpZ2h0XzE2MFwifFwibGlua19saWdodF8yMDBcInxcImxpbmtfbGlnaHRfMjMwXCJ8XCJsaW5rX2xpZ2h0XzI2MFwifFwibGlua19saWdodF8zMDBcInxcImxpbmtfbGlnaHRfMzMwXCJ8XCJsaW5rX2xpZ2h0XzM2MFwifFwibGlua19saWdodF80MDBcInxcImxpbmtfbGlnaHRfNDMwXCJ8XCJsaW5rX2xpZ2h0XzQ2MFwifFwibGlua19saWdodF81MDBcInxcImxpbmtfbGlnaHRcInxcImxpbmtfbGlnaHRfNTMwXCJ8XCJsaW5rX2xpZ2h0XzU2MFwifFwibGlua19saWdodF82MDBcInxcImxpbmtfbGlnaHRfNjMwXCJ8XCJsaW5rX2xpZ2h0XzY2MFwifFwibGlua19saWdodF83MDBcInxcImxpbmtfbGlnaHRfNzMwXCJ8XCJsaW5rX2xpZ2h0Xzc2MFwifFwibGlua19saWdodF84MDBcInxcImxpbmtfbGlnaHRfODMwXCJ8XCJsaW5rX2xpZ2h0Xzg2MFwifFwibGlua19saWdodF85MDBcInxcIndoaXRlXzEwMFwifFwid2hpdGVfMTMwXCJ8XCJ3aGl0ZV8xNjBcInxcIndoaXRlXzIwMFwifFwid2hpdGVfMjMwXCJ8XCJ3aGl0ZV8yNjBcInxcIndoaXRlXzMwMFwifFwid2hpdGVfMzMwXCJ8XCJ3aGl0ZV8zNjBcInxcIndoaXRlXzQwMFwifFwid2hpdGVfNDMwXCJ8XCJ3aGl0ZV80NjBcInxcIndoaXRlXzUwMFwifFwid2hpdGVcInxcIndoaXRlXzUzMFwifFwid2hpdGVfNTYwXCJ8XCJ3aGl0ZV82MDBcInxcIndoaXRlXzYzMFwifFwid2hpdGVfNjYwXCJ8XCJ3aGl0ZV83MDBcInxcIndoaXRlXzczMFwifFwid2hpdGVfNzYwXCJ8XCJ3aGl0ZV84MDBcInxcIndoaXRlXzgzMFwifFwid2hpdGVfODYwXCJ8XCJ3aGl0ZV85MDBcInxcImJsYWNrXzEwMFwifFwiYmxhY2tfMTMwXCJ8XCJibGFja18xNjBcInxcImJsYWNrXzIwMFwifFwiYmxhY2tfMjMwXCJ8XCJibGFja18yNjBcInxcImJsYWNrXzMwMFwifFwiYmxhY2tfMzMwXCJ8XCJibGFja18zNjBcInxcImJsYWNrXzQwMFwifFwiYmxhY2tfNDMwXCJ8XCJibGFja180NjBcInxcImJsYWNrXzUwMFwifFwiYmxhY2tcInxcImJsYWNrXzUzMFwifFwiYmxhY2tfNTYwXCJ8XCJibGFja182MDBcInxcImJsYWNrXzYzMFwifFwiYmxhY2tfNjYwXCJ8XCJibGFja183MDBcInxcImJsYWNrXzczMFwifFwiYmxhY2tfNzYwXCJ8XCJibGFja184MDBcInxcImJsYWNrXzgzMFwifFwiYmxhY2tfODYwXCJ8XCJibGFja185MDBcInxcInByZW1pdW1fdGllcl8yX3B1cnBsZV81MDBcInxcInByZW1pdW1fdGllcl8yX3B1cnBsZVwifFwicHJlbWl1bV90aWVyXzJfcGlua181MDBcInxcInByZW1pdW1fdGllcl8yX3BpbmtcInxcInByZW1pdW1fdGllcl8xX3B1cnBsZV81MDBcInxcInByZW1pdW1fdGllcl8xX3B1cnBsZVwifFwicHJlbWl1bV90aWVyXzFfYmx1ZV81MDBcInxcInByZW1pdW1fdGllcl8xX2JsdWVcInxcInByZW1pdW1fZ3VpbGRfcGlua181MDBcInxcInByZW1pdW1fZ3VpbGRfcGlua1wifFwicHJlbWl1bV9ndWlsZF9wdXJwbGVfNTAwXCJ8XCJwcmVtaXVtX2d1aWxkX3B1cnBsZVwifFwicHJlbWl1bV9ndWlsZF9ibHVlXzUwMFwifFwicHJlbWl1bV9ndWlsZF9ibHVlXCJ8XCJoeXBlc3F1YWRfaG91c2VfMV81MDBcInxcImh5cGVzcXVhZF9ob3VzZV8xXCJ8XCJoeXBlc3F1YWRfaG91c2VfMl81MDBcInxcImh5cGVzcXVhZF9ob3VzZV8yXCJ8XCJoeXBlc3F1YWRfaG91c2VfM181MDBcInxcImh5cGVzcXVhZF9ob3VzZV8zXCJ8XCJwYXJ0bmVyXzUwMFwifFwicGFydG5lclwifFwic2t5cGVfNTAwXCJ8XCJza3lwZVwifFwiYmF0dGxlbmV0XzUwMFwifFwiYmF0dGxlbmV0XCJ8XCJzdGVhbV81MDBcInxcInN0ZWFtXCJ8XCJsb2xfNTAwXCJ8XCJsb2xcInxcInR3aXRjaF81MDBcInxcInR3aXRjaFwifFwieW91dHViZV81MDBcInxcInlvdXR1YmVcInxcInR3aXR0ZXJfNTAwXCJ8XCJ0d2l0dGVyXCJ8XCJyZWRkaXRfNTAwXCJ8XCJyZWRkaXRcInxcInNwb3RpZnlfNTAwXCJ8XCJzcG90aWZ5XCJ8XCJmYWNlYm9va181MDBcInxcImZhY2Vib29rXCJ8XCJzYW1zdW5nXzUwMFwifFwic2Ftc3VuZ1wifFwieGJveF81MDBcInxcInhib3hcInxcImdpdGh1Yl81MDBcInxcImdpdGh1YlwifFwidHJhbnNwYXJlbnRcIlxyXG5cclxuZXhwb3J0IGNsYXNzIExpZ2h0Y29yZEFwaUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgbmFtZTpzdHJpbmcgPSBcIkxpZ2h0Y29yZEFwaUVycm9yXCJcclxufSIsImNvbnN0IEJETW9kdWxlczp0eXBlb2Ygd2luZG93LkJETW9kdWxlcyA9IHdpbmRvdy5CRE1vZHVsZXMgfHwgcmVxdWlyZShcIi4vQkRNb2R1bGVzXCIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgV2VicGFja0xvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBnZXQoaWQ6IG51bWJlcik6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KGlkKVxyXG4gICAgfVxyXG4gICAgZmluZChmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTphbnl7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IEJETW9kdWxlcy5nZXQoZmlsdGVyKVswXVxyXG4gICAgICAgIGlmKCFyZXN1bHQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZmlsdGVyLCBcImNvdWxkbid0IGZpbmQgdGhlIG1vZHVsZS5cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG4gICAgZmluZEJ5VW5pcXVlUHJvcGVydGllcyhwcm9wczooc3RyaW5nfG51bWJlcilbXSk6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KChtb2QpID0+IHtcclxuICAgICAgICAgICAgaWYobW9kLl9fZXNNb2R1bGUgJiYgKFwiZGVmYXVsdFwiIGluIG1vZCkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvZXNNYXRjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QuZGVmYXVsdCwgcHJvcCkpZG9lc01hdGNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRvZXNNYXRjaClyZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgcHJvcCkpcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVswXVxyXG4gICAgfVxyXG4gICAgZmlsdGVyKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOmFueVtde1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KGZpbHRlcilcclxuICAgIH1cclxuICAgIGZpbHRlckJ5VW5pcXVlUHJvcGVydGllcyhwcm9wczooc3RyaW5nfG51bWJlcilbXSk6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KChtb2QpID0+IHtcclxuICAgICAgICAgICAgaWYobW9kLl9fZXNNb2R1bGUgJiYgKFwiZGVmYXVsdFwiIGluIG1vZCkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvZXNNYXRjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QuZGVmYXVsdCwgcHJvcCkpZG9lc01hdGNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRvZXNNYXRjaClyZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgcHJvcCkpcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2VicGFja0xvYWRlckVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTpzdHJpbmcgPSBcIlwiKXtcclxuICAgICAgICBtZXNzYWdlICs9IFwiXFxuXFx0VGhpcyBlcnJvciBpcyByZWxhdGVkIHRvIExpZ2h0Y29yZCBub3QgYmVpbmcgYWJsZSB0byBmaW5kIGEgV2VicGFja01vZHVsZS4gXFxuXFx0UGxlYXNlIHNob3cgdGhpcyBlcnJvciBhbmQgYSBmZXcgbGluZXMgb2YgbG9ncyBhYm92ZSB0aGlzIGVycm9yIHRvIHRoZSBkZXZzLiBcXG5cXHRPcGVuIGFuIGlzc3VlIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9MaWdodGNvcmQvTGlnaHRjb3JkIG9yIGluIG91ciBkaXNjb3JkIHNlcnZlci5cIlxyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpXHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJXZWJwYWNrTG9hZGVyRXJyb3JcIlxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFJlY3JlYXRlIHRoZSBnaXZlbiBvYmplY3Qgd2l0aG91dCB0aGUgX19wcm90b19fLiBVc2VmdWwgZm9yIGJldHRlciBmb3JtYXR0aW5nIHdoZW4gb3V0cHV0IGluIGNvbnNvbGUuXHJcbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byByZWNyZWF0ZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVOdWxsUHJvdG88T2JqPWFueT4ob2JqOk9iaik6T2Jqe1xyXG4gICAgbGV0IG8gPSBPYmplY3QuY3JlYXRlKG51bGwpXHJcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgb1trXSA9IG9ialtrXVxyXG4gICAgfSlcclxuICAgIHJldHVybiBvXHJcbn0iLCJleHBvcnQgY29uc3QgaXNOYXRpdmU6Ym9vbGVhbiA9IHR5cGVvZiB3aW5kb3cuQkRNb2R1bGVzID09PSBcInVuZGVmaW5lZFwiXHJcbmV4cG9ydCBjb25zdCBpc0ltcG9ydGVkOmJvb2xlYW4gPSB0eXBlb2Ygd2luZG93LkJETW9kdWxlcyAhPT0gXCJ1bmRlZmluZWRcIiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4Y2x1ZGVQcm9wZXJ0aWVzPE9iaiA9IGFueT4ob2JqOk9iaiwgcHJvcHM6KGtleW9mIE9iailbXSk6UGFydGlhbDxPYmo+e1xyXG4gICAgbGV0IG5ld09iaiA9IHt9XHJcblxyXG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgaWYocHJvcHMuaW5jbHVkZXMoayBhcyBrZXlvZiBPYmopKXJldHVyblxyXG4gICAgICAgIG5ld09ialtrXSA9IG9ialtrXVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gbmV3T2JqXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOT09QKCl7fSIsImltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiXHJcbmltcG9ydCBOb3RpY2VzLCB7IG5vdGljZXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcml2YXRlL05vdGljZXNcIlxyXG5pbXBvcnQgeyBpc05hdGl2ZSB9IGZyb20gXCIuL2Vudmlyb25uZW1lbnRcIjtcclxuaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4vV2VicGFja0xvYWRlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKCl7XHJcbiAgICAvKiogU1RBUlQgTk9USUNFICovXHJcbiAgICBnZXRNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIkNvbm5lY3RlZEFwcFZpZXdcIilcclxuICAgIC50aGVuKGFzeW5jIChtb2QpID0+IHtcclxuICAgICAgICBjb25zdCBhcHBDbGFzc2VzID0gYXdhaXQgZ2V0TW9kdWxlKGUgPT4gZS5oYXNOb3RpY2UpO1xyXG4gICAgICAgIGNvbnN0IGJ1aWxkUmVuZGVyID0gb3JpZ2luYWwgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVuZGVyKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IG9yaWdpbmFsLmNhbGwodGhpcywgLi4uYXJndW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Y2hpbGRyZW4gPSBbXVxyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gcmV0dXJuVmFsdWUucHJvcHMuY2hpbGRyZW5bMV0ucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSljaGlsZHJlbiA9IFtjaGlsZHJlbl1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbmV3Y2hpbGRyZW4ucHVzaChjaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgIG5ld2NoaWxkcmVuLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChOb3RpY2VzLCB7Y29udGFpbmVyOiB0aGlzfSkpXHJcbiAgICAgICAgICAgICAgICBuZXdjaGlsZHJlbi5wdXNoKGNoaWxkcmVuWzFdKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUucHJvcHMuY2hpbGRyZW5bMV0ucHJvcHMuY2hpbGRyZW4gPSBuZXdjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZS5wcm9wcy5jaGlsZHJlblsxXS5wcm9wcy5jaGlsZHJlblsyXS5wcm9wcy5jaGlsZHJlblswXS5wcm9wcy5yZW5kZXIgPSBidWlsZFJlbmRlckNoYW5uZWxTaWRlYmFyKHJldHVyblZhbHVlLnByb3BzLmNoaWxkcmVuWzFdLnByb3BzLmNoaWxkcmVuWzJdLnByb3BzLmNoaWxkcmVuWzBdLnByb3BzLnJlbmRlcilcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnVpbGRSZW5kZXJDaGFubmVsU2lkZWJhciA9IG9yaWdpbmFsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlbmRlckNoYW5uZWxTaWRlYmFyKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IG9yaWdpbmFsLmNhbGwodGhpcywgLi4uYXJndW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNOb3RpY2UgPSBub3RpY2VzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgIGlmKCFoYXNOb3RpY2UpcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZighVXRpbHMuaGFzQ2xhc3MocmV0dXJuVmFsdWUucHJvcHMuY2xhc3NOYW1lLCBhcHBDbGFzc2VzLmhhc05vdGljZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlLnByb3BzLmNsYXNzTmFtZSArPSBcIiBcIitVdGlscy5yZW1vdmVEYShhcHBDbGFzc2VzLmhhc05vdGljZSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtb2QuZGVmYXVsdC5wcm90b3R5cGUucmVuZGVyID0gYnVpbGRSZW5kZXIobW9kLmRlZmF1bHQucHJvdG90eXBlLnJlbmRlcik7XHJcbiAgICAgICAgKGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiK1V0aWxzLnJlbW92ZURhKGFwcENsYXNzZXMuYmFzZSkpXHJcbiAgICAgICAgICAgIGlmKCFiYXNlKXRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYmFzZSBoZXJlYClcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IFV0aWxzLkZpbmRSZWFjdChiYXNlKSBhcyBhbnlcclxuICAgICAgICAgICAgZWxlbS5yZW5kZXIgPSBidWlsZFJlbmRlcihlbGVtLnJlbmRlcilcclxuICAgICAgICAgICAgZWxlbS5mb3JjZVVwZGF0ZSgpXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfSlcclxuICAgIC8qKiBFTkQgTk9USUNFICovXHJcblxyXG4gICAgaWYoaXNOYXRpdmUpe1xyXG4gICAgICAgIC8qKiBTVEFSVCBVU0VSUE9QT1VUIFBBVENIICovXHJcbiAgICAgICAgYXdhaXRMb2dpbigpXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgVXNlclBvcG91dCA9IGF3YWl0IGdldE1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiRmx1eENvbnRhaW5lcihGb3J3YXJkUmVmKFN1YnNjcmliZUd1aWxkTWVtYmVyc0NvbnRhaW5lcihVc2VyUG9wb3V0KSkpXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJNb2R1bGUgPSBhd2FpdCBnZXRNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmdldEN1cnJlbnRVc2VyKVxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIxID0gbmV3IFVzZXJQb3BvdXQuZGVmYXVsdCh7dXNlcklkOiB1c2VyTW9kdWxlLmRlZmF1bHQuZ2V0Q3VycmVudFVzZXIoKS5pZCwgZ3VpbGRJZDogbnVsbCwgY2hhbm5lbElkOiBudWxsLCBkaXNhYmxlVXNlclByb2ZpbGVMaW5rOiB0cnVlfSkucmVuZGVyKClcclxuICAgICAgICAgICAgY29uc3QgUG9wb3V0UHJvcHMgPSByZW5kZXIxLnByb3BzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcjIgPSByZW5kZXIxLnR5cGUucmVuZGVyKFBvcG91dFByb3BzLCBudWxsKVxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIzID0gbmV3IHJlbmRlcjIudHlwZShyZW5kZXIyLnByb3BzKS5yZW5kZXIoKVxyXG4gICAgICAgICAgICBjb25zdCBVc2VyUG9wb3V0Q29tcG9uZW50ID0gcmVuZGVyMy50eXBlXHJcbiAgICAgICAgICAgIGlmKCFVc2VyUG9wb3V0Q29tcG9uZW50KXRocm93IG5ldyBFcnJvcihgQ291bGRuJ3QgZmluZCB0aGUgVXNlclBvcG91dENvbXBvbmVudCBjb21wb25lbnQuYClcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIgPSBVc2VyUG9wb3V0Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJcclxuICAgICAgICAgICAgVXNlclBvcG91dENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gcmVuZGVyLmNhbGwodGhpcywgLi4uYXJndW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlLnByb3BzLmNoaWxkcmVuLnByb3BzW1wiZGF0YS11c2VyLWlkXCJdID0gdGhpcy5wcm9wcy51c2VyLmlkXHJcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8qKiBFTkQgVVNFUlBPUE9VVCBQQVRDSCovXHJcbiAgICBcclxuICAgICAgICAvKiogU1RBUlQgVVNFUlBST0ZJTEUgUEFUQ0ggKi9cclxuICAgICAgICBhd2FpdExvZ2luKClcclxuICAgICAgICAudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBVc2VyUHJvZmlsZSA9IGF3YWl0IGdldE1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiVXNlclByb2ZpbGVcIilcclxuICAgICAgICAgICAgY29uc3QgdXNlck1vZHVsZSA9IGF3YWl0IGdldE1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZ2V0Q3VycmVudFVzZXIpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcjEgPSBuZXcgVXNlclByb2ZpbGUuZGVmYXVsdCh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiB1c2VyTW9kdWxlLmRlZmF1bHQuZ2V0Q3VycmVudFVzZXIoKVxyXG4gICAgICAgICAgICB9KS5yZW5kZXIoKVxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIyID0gbmV3IHJlbmRlcjEudHlwZShyZW5kZXIxLnByb3BzKS5yZW5kZXIoKVxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIzID0gcmVuZGVyMi50eXBlLnJlbmRlcihyZW5kZXIyLnByb3BzLCBudWxsKVxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXI0ID0gbmV3IHJlbmRlcjMudHlwZShyZW5kZXIzLnByb3BzKS5yZW5kZXIoKVxyXG4gICAgICAgICAgICBjb25zdCBVc2VyUHJvZmlsZUNvbXBvbmVudCA9IHJlbmRlcjQudHlwZVxyXG4gICAgICAgICAgICBpZighVXNlclByb2ZpbGVDb21wb25lbnQpdGhyb3cgbmV3IEVycm9yKGBDb3VsZG4ndCBmaW5kIHRoZSBVc2VyUHJvZmlsZUNvbXBvbmVudCBjb21wb25lbnQuYClcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIgPSBVc2VyUHJvZmlsZUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyXHJcbiAgICAgICAgICAgIFVzZXJQcm9maWxlQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSByZW5kZXIuY2FsbCh0aGlzLCAuLi5hcmd1bWVudHMpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXR1cm5WYWx1ZSlcclxuICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZS5wcm9wcy5jaGlsZHJlbi5wcm9wc1tcImRhdGEtdXNlci1pZFwiXSA9IHRoaXMucHJvcHMudXNlci5pZFxyXG4gICAgICAgICAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvKiogRU5EIFVTRVJQUk9GSUxFIFBBVENIICovXHJcblxyXG4gICAgICAgIC8qKiBTVEFSVCBXRUJIT09LIFBBVENIICovXHJcbi8qXHJcbiAgICAgICAgbGV0IHVzZWRXZWJob29rcyA9IHt9XHJcblxyXG4gICAgICAgIGdldE1vZHVsZShlID0+IGUgJiYgZS5SZXF1ZXN0ICYmIGUuUmVxdWVzdC5wcm90b3R5cGUgJiYgZS5SZXF1ZXN0LnByb3RvdHlwZS5lbmQpXHJcbiAgICAgICAgLnRoZW4oUmVxdWVzdE1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IFJlcXVlc3RNb2R1bGUuUmVxdWVzdC5wcm90b3R5cGUuZW5kXHJcbiAgICAgICAgICAgIFJlcXVlc3RNb2R1bGUuUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudXJsLmVuZHNXaXRoKFwiL21lc3NhZ2VzXCIpICYmIC9cXC9jaGFubmVsc1xcL1xcZCtcXC9tZXNzYWdlcy9nLnRlc3QodGhpcy51cmwpICYmIHRoaXMubWV0aG9kID09PSBcIlBPU1RcIil7IC8vIHNlbmRpbmcgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFubmVsSWQgPSB0aGlzLnVybC5zcGxpdChcIi9jaGFubmVscy9cIilbMV0uc3BsaXQoXCIvbWVzc2FnZXNcIilbMF1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZih1c2VkV2ViaG9va3NbY2hhbm5lbElkXSl7IC8vIHdlYmhvb2sgaXMgYXZhaWxsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2ViaG9vayA9IHVzZWRXZWJob29rc1tjaGFubmVsSWRdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBgL3dlYmhvb2tzLyR7d2ViaG9vay5pZH0vJHt3ZWJob29rLnRva2VufT93YWl0PXRydWVgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBlbmQuY2FsbCh0aGlzLCAuLi5hcmd1bWVudHMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGdldE1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiV2ViaG9va1wiKVxyXG4gICAgICAgIC50aGVuKHdlYmhvb2tDb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJFZGl0ID0gd2ViaG9va0NvbXBvbmVudC5kZWZhdWx0LnByb3RvdHlwZS5yZW5kZXJFZGl0XHJcbiAgICAgICAgICAgIHdlYmhvb2tDb21wb25lbnQuZGVmYXVsdC5wcm90b3R5cGUucmVuZGVyRWRpdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWJob29rID0gdGhpcy5wcm9wcy53ZWJob29rXHJcbiAgICAgICAgICAgICAgICBsZXQgcmV0dXJuVmFsdWUgPSByZW5kZXJFZGl0LmNhbGwodGhpcywgLi4uYXJndW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUucHJvcHMuY2hpbGRyZW4gPSBbcmV0dXJuVmFsdWUucHJvcHMuY2hpbGRyZW5dXHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHVzZWRXZWJob29rc1t3ZWJob29rLmNoYW5uZWxfaWRdICYmIHVzZWRXZWJob29rc1t3ZWJob29rLmNoYW5uZWxfaWRdLmlkID09PSB3ZWJob29rLmlkID8gXCJTdG9wIHRhbGtpbmcgd2l0aCB0aGlzIHdlYmhvb2tcIiA6IFwiVGFsayB3aXRoIHRoaXMgd2ViaG9va1wiXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUucHJvcHMuY2hpbGRyZW4ucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KHdpbmRvdy5MaWdodGNvcmQuQXBpLkNvbXBvbmVudHMuaW5wdXRzLkJ1dHRvbiwge2NvbG9yOiBcImdyZWVuXCIsIHdyYXBwZXI6IGZhbHNlLCBvbkNsaWNrKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlZFdlYmhvb2tzW3dlYmhvb2suY2hhbm5lbF9pZF0gJiYgdXNlZFdlYmhvb2tzW3dlYmhvb2suY2hhbm5lbF9pZF0uaWQgPT09IHdlYmhvb2suaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdXNlZFdlYmhvb2tzW3dlYmhvb2suY2hhbm5lbF9pZF1cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlZFdlYmhvb2tzW3dlYmhvb2suY2hhbm5lbF9pZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogd2ViaG9vay5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB3ZWJob29rLnRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd2ViaG9va1BhbmVscy5mb3JFYWNoKGUgPT4gZSgpKVxyXG4gICAgICAgICAgICAgICAgfX0sIG1lc3NhZ2UpKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IHdlYmhvb2tQYW5lbHMgPSBbXVxyXG4gICAgICAgIGxldCBnZXRDb21wID0gKGNvbXApID0+IHtcclxuICAgICAgICAgICAgY2xhc3MgU2V0dGluZ3NXZWJob29rcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWQgPSB1dWlkKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBjb21wKHRoaXMucHJvcHMpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmZvcmNlVXBkYXRlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYy5pZCA9IHRoaXMuaWRcclxuICAgICAgICAgICAgICAgICAgICB3ZWJob29rUGFuZWxzLnB1c2goZnVuYylcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIHdlYmhvb2tQYW5lbHMgPSB3ZWJob29rUGFuZWxzLmZpbHRlcihlID0+IGUuaWQgIT09IHRoaXMuaWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnJlbmRlcigpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGljIGRpc3BsYXlOYW1lID0gXCJTZXR0aW5nc1dlYmhvb2tzXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzV2ViaG9va3NcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJGbHV4Q29udGFpbmVyKFNldHRpbmdzV2ViaG9va3MpXCIpXHJcbiAgICAgICAgLnRoZW4od2ViaG9va3NDb21wb25lbnRzID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSB3ZWJob29rc0NvbXBvbmVudHMuZGVmYXVsdFxyXG5cclxuICAgICAgICAgICAgd2ViaG9va3NDb21wb25lbnRzLmRlZmF1bHQgPSBnZXRDb21wKGNvbXApXHJcblxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIkZsdXhDb250YWluZXIoRmx1eENvbnRhaW5lcihTZXR0aW5nc1dlYmhvb2tzKSlcIilcclxuICAgICAgICAgICAgLmZvckVhY2gobW9kID0+IHtcclxuICAgICAgICAgICAgICAgIG1vZC5kZWZhdWx0ID0gZ2V0Q29tcChtb2QuZGVmYXVsdClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KSovXHJcbiAgICAgICAgLyoqIEVORCBXRUJIT09LIFBBVENIICovXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogQWRkIGluIGFwcC1ub3RpZmljYXRpb25zIC8gY29uZmlybWF0aW9ucy5cclxuICAgIC8qKiBTVEFSVCBJTi1BUFAgTk9USUZJQ0FUSU9OUyAqL1xyXG4gICAgLy9nZXRNb2R1bGUoZSA9PiB0cnVlKVxyXG4gICAgLyoqIEVORCBJTi1BUFAgTk9USUZJQ0FUSU9OUyAqL1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNb2R1bGUoZmlsdGVyOiAobW9kOmFueSkgPT4gYm9vbGVhbik6UHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgd2luZG93LkxpZ2h0Y29yZC5BcGkuZW5zdXJlRXhwb3J0ZWQoZmlsdGVyKVxyXG4gICAgICAgIC50aGVuKHJlc29sdmUpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbTElHSFRDT1JEXVwiLCBlcnIsIGZpbHRlcilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxubGV0IGhhc0NvbXBsZXRlZExvZ2luID0gZmFsc2VcclxubGV0IGxvZ2luUHJvbWlzZTpQcm9taXNlPHZvaWQ+XHJcbmZ1bmN0aW9uIGF3YWl0TG9naW4oKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgaWYoaGFzQ29tcGxldGVkTG9naW4pcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICBpZihsb2dpblByb21pc2UpcmV0dXJuIGxvZ2luUHJvbWlzZVxyXG4gICAgIFxyXG4gICAgcmV0dXJuIGxvZ2luUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzUmVzb2x2ZWQgPSBmYWxzZVxyXG4gICAgICAgIHdpbmRvdy5MaWdodGNvcmQuRGlzY29yZE1vZHVsZXMuZGlzcGF0Y2hlci5zdWJzY3JpYmUoXCJDT05ORUNUSU9OX09QRU5cIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzUmVzb2x2ZWQpcmV0dXJuXHJcbiAgICAgICAgICAgIGhhc0NvbXBsZXRlZExvZ2luID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgaXNSZXNvbHZlZCA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG53aW5kb3cuTGlnaHRjb3JkLkRpc2NvcmRNb2R1bGVzLmRpc3BhdGNoZXIuc3Vic2NyaWJlKFwiTE9HT1VUXCIsIChldikgPT4ge1xyXG4gICAgaGFzQ29tcGxldGVkTG9naW4gPSBmYWxzZVxyXG4gICAgbG9naW5Qcm9taXNlID0gdW5kZWZpbmVkXHJcbn0pIiwiaW1wb3J0ICogYXMgdXVpZHYxIGZyb20gXCJ1dWlkL3YxXCJcclxuaW1wb3J0ICogYXMgdXVpZHY0IGZyb20gXCJ1dWlkL3Y0XCJcclxuXHJcbnR5cGUgdXVpZEZ1bmMgPSAoKSA9PiBzdHJpbmdcclxubGV0IHV1aWQ6dXVpZEZ1bmMgJiB7djE6IHV1aWRGdW5jLCB2NDogdXVpZEZ1bmN9ID0gT2JqZWN0LmFzc2lnbihmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHV1aWR2NCgpXHJcbn0sIHt2MTogKCkgPT4gdXVpZHYxKCksIHY0OiAoKSA9PiB1dWlkdjQoKX0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dWlkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBvd2VyY29yZC93ZWJwYWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWQvdjFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZC92NFwiKTsiXSwic291cmNlUm9vdCI6IiJ9