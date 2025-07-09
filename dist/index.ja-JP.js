var _globalThis$process, _globalThis$process$e, _globalThis$process$e2, _globalThis$process$e3, _r2, _r3, _r4, _f, _t, _e, _o, _f_brand, _n, _r7, _t3, _r8, _r9, _t4;
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n3 = 0, F = function F() {}; return { s: F, n: function n() { return _n3 >= r.length ? { done: !0 } : { done: !1, value: r[_n3++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var K = Object.defineProperty;
var h = function h(r, e) {
  return K(r, "name", {
    value: e,
    configurable: !0
  });
};
var b = "*",
  T = "...",
  V = "\u21C4",
  L = "##INNER_TYPE##",
  I = "@@INNER_TYPE@@",
  B = "##INNER_THROW_FN##",
  z = "##INNER_TYPE_FN##";
function D(r, e) {
  var _e$z, _r;
  if (Array.isArray(e)) {
    for (var t = 0; t < e.length; t++) if (D(r, e[t])) return !0;
    return !1;
  }
  if (e !== null && e !== void 0 && (_e$z = e[z]) !== null && _e$z !== void 0 && _e$z.call(e, r)) return !0;
  if (typeof e != "function") return e === b && r !== null || e === T || e === null && r === null || e === _typeof(r);
  switch (_typeof(r)) {
    case "function":
    case "object":
      break;
    case "string":
      r = String;
      break;
    case "number":
      r = Number;
      break;
    case "boolean":
      r = Boolean;
      break;
    case "symbol":
      r = Symbol;
      break;
    case "bigint":
      r = BigInt;
      break;
    default:
      r = Object(r);
      break;
  }
  return r === e || r instanceof e ? !0 : (_r = r) !== null && _r !== void 0 && _r[I] ? r[I] === (e === null || e === void 0 ? void 0 : e[L]) : !1;
}
h(D, "matchType");
function v(r) {
  var _r$constructor;
  if (r === null) return "null";
  if (r === b) return "(\u4EFB\u610F)";
  var e = _typeof(r);
  if (!["function", "object"].includes(e)) return e[0].toUpperCase() + e.slice(1);
  var t = ((r === null || r === void 0 ? void 0 : r.name) || (r === null || r === void 0 || (_r$constructor = r.constructor) === null || _r$constructor === void 0 ? void 0 : _r$constructor.name) || "(\u672A\u77E5)").split(" ").pop();
  return [L, I].forEach(function (n) {
    (r === null || r === void 0 ? void 0 : r[n]) && (t += "<".concat(v(r === null || r === void 0 ? void 0 : r[n]), ">"));
  }), e === "function" && t === "anonymous" ? "(\u533F\u540D)" : t;
}
h(v, "getTypeName");
function Q(r, e, t) {
  var n = r.stack.split("\n").splice(3),
    o = "",
    c = "\n",
    i = "";
  n.forEach(function (s, a, y) {
    var d = s.trim().split(" "),
      N = d.length === 3 ? d[1] : "(\u533F\u540D)",
      w = N.split(".").pop();
    y[a] = {
      fullMethodName: N,
      methodName: w,
      link: d.length === 3 ? d[2] : d[1]
    }, a ? c += "".concat(w, "\t").concat(y[a].link, "\n") : i = w;
  });
  var E = e.find(function (s) {
    return s.length === t.length;
  });
  if (!E) throw o += "\u65B9\u6CD5 ".concat(i, " \u4E0D\u5B58\u5728 ").concat(t.length, " \u4E2A\u53C2\u6570\u7684\u91CD\u8F7D\u3002"), o += c, new Error(o);
  var u = !1;
  if (E.forEach(function (s, a) {
    if (!D(t[a], s)) {
      var _s$B;
      var y = Array.isArray(s) ? s.map(v).join("\u3001") : v(s);
      o += "".concat(u ? "\n" : "", "\u53C2\u6570").concat(a + 1, "\uFF1A\u9884\u671F ").concat(y, " \u4F46\u5F97\u5230 ").concat(v(t[a]), "\u3002"), Array.isArray(s) ? s.forEach(function (d, N) {
        var _d$B;
        typeof (d === null || d === void 0 ? void 0 : d[B]) == "function" && (o += "".concat(N === 0 ? "\n\u9644\u52A0\u4FE1\u606F\uFF1A\n" : "", "\u5C1D\u8BD5\u65B9\u6848").concat(a + 1, " - ").concat((_d$B = d[B]) === null || _d$B === void 0 ? void 0 : _d$B.call(d, t[a])));
      }) : typeof (s === null || s === void 0 ? void 0 : s[B]) == "function" && (o += "\n\u9644\u52A0\u4FE1\u606F\uFF1A\n\u5C1D\u8BD5\u65B9\u6848".concat(a + 1, " - ").concat((_s$B = s[B]) === null || _s$B === void 0 ? void 0 : _s$B.call(s, t[a]))), u = !0;
    }
  }), u) throw o = "\u65B9\u6CD5 ".concat(i, " \u8C03\u7528\u9519\u8BEF\n").concat(o), o += c, new Error(o);
}
h(Q, "throwStackInfo");
function U() {
  var r = [],
    e = [],
    t = [],
    n = null;
  function o() {
    for (var _len = arguments.length, i = new Array(_len), _key = 0; _key < _len; _key++) {
      i[_key] = arguments[_key];
    }
    if (n) return n.apply(this, i);
    Q(new Error(), r, i);
  }
  h(o, "runAny");
  function c() {
    for (var _len2 = arguments.length, i = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      i[_key2] = arguments[_key2];
    }
    if (!r.length) return o.apply(this, i);
    var E = i.length;
    t: for (var u = 0; u < r.length; u++) {
      var s = r[u],
        a = t[u],
        y = s.length;
      if (!(a.length !== E && !a.rest || E === 0 && y && s[0] !== T)) {
        for (var d = 0; d < E; d++) {
          var N = s[d] || s[y - 1];
          if (!D(i[d], N)) {
            try {
              var _N$V;
              var w = N === null || N === void 0 || (_N$V = N[V]) === null || _N$V === void 0 ? void 0 : _N$V.call(N, i[d]);
              if (D(w, N)) {
                i[d] = w;
                continue;
              }
            } catch (_unused) {}
            continue t;
          }
        }
        return e[u].apply(this, i);
      }
    }
    return o.apply(this, i);
  }
  return h(c, "overload"), c.add = function (i, E) {
    if (!Array.isArray(r)) throw new TypeError("types \u5FC5\u987B\u662F\u6570\u7EC4\u3002");
    if (typeof E != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
    for (var u = 0; u < i.length; u++) if (i[u] === T && u !== i.length - 1) throw new SyntaxError("".concat(T, " \u5FC5\u987B\u662F\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002"));
    return r.forEach(function (u) {
      if (u.length === i.length) {
        for (var s = 0; s < u.length; s++) if (u[s] !== i[s]) return;
        throw new Error("\u5DF2\u5B58\u5728\u6B64\u7B7E\u540D\u7684\u91CD\u8F7D\u3002");
      }
    }), r.forEach(function (u) {
      var s = Array.isArray(u);
      if (typeof u != "function" && !s && u !== b && u !== T) throw new TypeError("\u671F\u671B\u7C7B\u578B\u4E3A Class\u3001Array\u3001".concat(b, " \u6216\u672B\u5C3E\u53C2\u6570\u4E5F\u53EF\u4EE5\u662F ").concat(T, "\u3002"));
      if (s) for (var a = 0; a < u.length; a++) {
        var _u$a;
        var y = _typeof(u[a]);
        if (y !== "function" && !(y === "object" && typeof ((_u$a = u[a]) === null || _u$a === void 0 ? void 0 : _u$a.constructor) == "function") && u[a] !== null && u[a] !== b) throw new TypeError("\u7C7B\u578B\u5FC5\u987B\u4E3A Class\u3001null \u6216 ".concat(b, "\u3002"));
      }
    }), r.push(i), e.push(E), t.push({
      length: i.length,
      rest: i[i.length - 1] === T
    }), c;
  }, c.any = function (i) {
    if (n) throw new Error("any \u51FD\u6570\u5DF2\u5B58\u5728\u3002");
    if (typeof i != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
    return n = i, c;
  }, c;
}
h(U, "createOverload");
var m = U().add([], function () {
  return U();
}).add([Array, Function], function (r, e) {
  var t = U();
  return t.add(r, e), t;
});
var l = Symbol("constructor");
var M = m([String, "..."], function (r) {
    for (var _len3 = arguments.length, e = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      e[_key3 - 1] = arguments[_key3];
    }
    return r.replace(/\{(\d+)\}/g, function (t, n) {
      var o = e[n];
      return _typeof(o) > "u" ? t : o;
    });
  }),
  W = m([Object, Function], function (r, e) {
    return r instanceof e ? r : null;
  });
var G = {
  Exception_WasThrown: "\u578B '{0}' \u306E\u4F8B\u5916\u304C\u30B9\u30ED\u30FC\u3055\u308C\u307E\u3057\u305F\u3002",
  Arg_SystemException: "\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC\u3067\u3059\u3002",
  Arg_AccessViolationException: "\u4FDD\u8B77\u3055\u308C\u3066\u3044\u308B\u30E1\u30E2\u30EA\u306B\u5BFE\u3059\u308B\u8AAD\u307F\u53D6\u308A\u307E\u305F\u306F\u66F8\u304D\u8FBC\u307F\u304C\u8A66\u884C\u3055\u308C\u307E\u3057\u305F\u3002\u4ED6\u306E\u30E1\u30E2\u30EA\u304C\u7834\u640D\u3057\u3066\u3044\u308B\u3053\u3068\u304C\u3088\u304F\u3042\u308A\u307E\u3059\u3002",
  AggregateException_ctor_DefaultMessage: "1\u3064\u4EE5\u4E0A\u306E\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002",
  Exception_EndOfInnerExceptionStack: "--- \u5185\u90E8\u4F8B\u5916\u30B9\u30BF\u30C3\u30AF \u30C8\u30EC\u30FC\u30B9\u306E\u7D42\u308F\u308A ---",
  AggregateException_ToString: "{0}{1}---> (\u5185\u90E8\u4F8B\u5916 #{2}) {3}{4}{5}",
  AggregateException_ctor_InnerExceptionNull: "causes \u306E\u8981\u7D20\u306E1\u3064\u304C null \u3067\u3059\u3002",
  Arg_ArgumentException: "\u5024\u304C\u4E88\u671F\u3055\u308C\u308B\u7BC4\u56F2\u5185\u306B\u3042\u308A\u307E\u305B\u3093\u3002",
  Arg_ParamName_Name: "\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u540D: {0}",
  ArgumentNull_Generic: "\u5024\u3092 null \u306B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"
};
(typeof process === "undefined" ? "undefined" : _typeof(process)) > "u" && (globalThis.process = {}, (_globalThis$process$e = (_globalThis$process = globalThis.process).env) !== null && _globalThis$process$e !== void 0 ? _globalThis$process$e : _globalThis$process.env = {}, (_globalThis$process$e3 = (_globalThis$process$e2 = globalThis.process.env).lang) !== null && _globalThis$process$e3 !== void 0 ? _globalThis$process$e3 : _globalThis$process$e2.lang = "zh-CN");
var O = {};
O = G;
O = new Map(Object.entries(O));
var S = m([String, "..."], function (r) {
    var _O$get;
    var t = (_O$get = O.get(r)) !== null && _O$get !== void 0 ? _O$get : r;
    for (var _len4 = arguments.length, e = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      e[_key4 - 1] = arguments[_key4];
    }
    return M.apply(void 0, [t].concat(e));
  }),
  ft = m([String, String], function (r, e) {
    O.set(r, e);
  }),
  ht = m([Object], function (r) {
    Object.entries(r).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        e = _ref2[0],
        t = _ref2[1];
      O.set(e, t);
    });
  });
var g = (_r2 = /*#__PURE__*/function (_Error) {
  function r() {
    var _this;
    _classCallCheck(this, r);
    for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      e[_key5] = arguments[_key5];
    }
    _this = _callSuper(this, r, [].concat(e)), _this.name = _this.constructor.name, r[l].apply(_assertThisInitialized(_this), e);
    return _this;
  }
  _inherits(r, _Error);
  return _createClass(r, [{
    key: "toJSON",
    value: function toJSON() {
      var _this2 = this;
      var e = {};
      return Object.getOwnPropertyNames(this).forEach(function (t) {
        var n = _this2[t];
        t === "cause" && _typeof(n) == "object" && n instanceof Error && !(n instanceof r) ? e[t] = _this2.toJSON.call(n) : e[t] = n;
      }), e;
    }
  }, {
    key: "toString",
    value: function toString() {
      for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        e[_key6] = arguments[_key6];
      }
      return r.prototype.toString = m([], function () {
        var t = this.message,
          n;
        return t === null || t.length <= 0 ? n = this.constructor.name : n = "".concat(this.constructor.name, ": ").concat(t), this.cause && (n = "".concat(n, " ---> ").concat(this.cause.toString(), "\r\n   ").concat(S("Exception_EndOfInnerExceptionStack"))), n;
      }), r.prototype.toString.apply(this, e);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(Error)), h(_r2, "Exception"), _defineProperty(_r2, l, function () {
  for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    e[_key7] = arguments[_key7];
  }
  return _r2[l] = m().add([], function () {
    this.message = S("Exception_WasThrown", this.name);
  }).add([String], function (t) {
    this.message = t;
  }).add([String, [Error, _r2, null]], function (t, n) {
    this.message = t, this.cause = n;
  }), _r2[l].apply(this, e);
}), _r2);
var A = (_r3 = /*#__PURE__*/function (_g) {
  function r() {
    var _this3;
    _classCallCheck(this, r);
    for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      e[_key8] = arguments[_key8];
    }
    _this3 = _callSuper(this, r), r[l].apply(_assertThisInitialized(_this3), e);
    return _this3;
  }
  _inherits(r, _g);
  return _createClass(r);
}(g), h(_r3, "SystemException"), _defineProperty(_r3, l, function () {
  for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    e[_key9] = arguments[_key9];
  }
  return _r3[l] = m().add([], function () {
    this.message = S("Arg_SystemException");
  }).add([String], function (t) {
    g[l].call(this, t);
  }).add([String, [Error, g, null]], function (t, n) {
    g[l].call(this, t, n);
  }), _r3[l].apply(this, e);
}), _r3);
var k = (_r4 = /*#__PURE__*/function (_A) {
  function r() {
    var _this4;
    _classCallCheck(this, r);
    for (var _len0 = arguments.length, e = new Array(_len0), _key0 = 0; _key0 < _len0; _key0++) {
      e[_key0] = arguments[_key0];
    }
    _this4 = _callSuper(this, r), r[l].apply(_assertThisInitialized(_this4), e);
    return _this4;
  }
  _inherits(r, _A);
  return _createClass(r);
}(A), h(_r4, "AccessViolationException"), _defineProperty(_r4, l, function () {
  for (var _len1 = arguments.length, e = new Array(_len1), _key1 = 0; _key1 < _len1; _key1++) {
    e[_key1] = arguments[_key1];
  }
  return _r4[l] = m().add([], function () {
    this.message = S("Arg_AccessViolationException");
  }).add([String], function (t) {
    A[l].call(this, t);
  }).add([String, [Error, g, null]], function (t, n) {
    A[l].call(this, t, n);
  }), _r4[l].apply(this, e);
}), _r4);
var C = "*",
  R = "...",
  q = "##INNER_TYPE##",
  J = "@@INNER_TYPE@@";
function Y(r, e) {
  var _r5;
  if (Array.isArray(e)) {
    for (var t = 0; t < e.length; t++) if (Y(r, e[t])) return !0;
    return !1;
  }
  if (typeof e != "function") return e === C && r !== null || e === R || e === null && r === null || e === _typeof(r);
  switch (_typeof(r)) {
    case "function":
    case "object":
      break;
    case "string":
      r = String;
      break;
    case "number":
      r = Number;
      break;
    case "boolean":
      r = Boolean;
      break;
    case "symbol":
      r = Symbol;
      break;
    case "bigint":
      r = BigInt;
      break;
    default:
      r = Object(r);
      break;
  }
  return r === e || r instanceof e ? !0 : (_r5 = r) !== null && _r5 !== void 0 && _r5[J] ? r[J] === (e === null || e === void 0 ? void 0 : e[q]) : !1;
}
h(Y, "b");
function P(r) {
  var _r$constructor2;
  if (r === null) return "null";
  if (r === C) return "(\u4EFB\u610F)";
  var e = _typeof(r);
  if (!["function", "object"].includes(e)) return e[0].toUpperCase() + e.slice(1);
  var t = ((r === null || r === void 0 ? void 0 : r.name) || (r === null || r === void 0 || (_r$constructor2 = r.constructor) === null || _r$constructor2 === void 0 ? void 0 : _r$constructor2.name) || "(\u672A\u77E5)").split(" ").pop();
  return [q, J].forEach(function (n) {
    (r === null || r === void 0 ? void 0 : r[n]) && (t += "<".concat(P(r === null || r === void 0 ? void 0 : r[n]), ">"));
  }), e === "function" && t === "anonymous" ? "(\u533F\u540D)" : t;
}
h(P, "m");
function Z(r, e, t) {
  var n = r.stack.split("\n").splice(3),
    o = "",
    c = "\n",
    i = "";
  n.forEach(function (s, a, y) {
    var d = s.trim().split(" "),
      N = d.length === 3 ? d[1] : "(\u533F\u540D)",
      w = N.split(".").pop();
    y[a] = {
      fullMethodName: N,
      methodName: w,
      link: d.length === 3 ? d[2] : d[1]
    }, a ? c += "".concat(w, "\t").concat(y[a].link, "\n") : i = w;
  });
  var E = e.find(function (s) {
    return s.length === t.length;
  });
  if (!E) throw o += "\u65B9\u6CD5 ".concat(i, " \u4E0D\u5B58\u5728 ").concat(t.length, " \u4E2A\u53C2\u6570\u7684\u91CD\u8F7D\u3002"), o += c, new Error(o);
  var u = !1;
  if (E.forEach(function (s, a) {
    if (!Y(t[a], s)) {
      var y = Array.isArray(s) ? s.map(P).join("\u3001") : P(s);
      o += "".concat(u ? "\n" : "", "\u53C2\u6570").concat(a + 1, "\uFF1A\u9884\u671F ").concat(y, " \u4F46\u5F97\u5230 ").concat(P(t[a]), "\u3002"), u = !0;
    }
  }), u) throw o = "\u65B9\u6CD5 ".concat(i, " \u8C03\u7528\u9519\u8BEF\n").concat(o), o += c, new Error(o);
}
h(Z, "R");
function H() {
  var r = [],
    e = [],
    t = [],
    n = null;
  function o() {
    for (var _len10 = arguments.length, i = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      i[_key10] = arguments[_key10];
    }
    if (n) return n.apply(this, i);
    Z(new Error(), r, i);
  }
  h(o, "r");
  function c() {
    for (var _len11 = arguments.length, i = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      i[_key11] = arguments[_key11];
    }
    if (!r.length) return o.apply(this, i);
    var E = i.length;
    t: for (var u = 0; u < r.length; u++) {
      var s = r[u],
        a = t[u],
        y = s.length;
      if (!(a.length !== E && !a.rest || E === 0 && y && s[0] !== R)) {
        for (var d = 0; d < E; d++) {
          var N = s[d] || s[y - 1];
          if (!Y(i[d], N)) {
            try {
              var _N$;
              var w = N === null || N === void 0 || (_N$ = N["\u21C4"]) === null || _N$ === void 0 ? void 0 : _N$.call(N, i[d]);
              if (Y(w, N)) {
                i[d] = w;
                continue;
              }
            } catch (_unused2) {}
            continue t;
          }
        }
        return e[u].apply(this, i);
      }
    }
    return o.apply(this, i);
  }
  return h(c, "f"), c.add = function (i, E) {
    if (!Array.isArray(r)) throw new TypeError("types \u5FC5\u987B\u662F\u6570\u7EC4\u3002");
    if (typeof E != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
    for (var u = 0; u < i.length; u++) if (i[u] === R && u !== i.length - 1) throw new SyntaxError("".concat(R, " \u5FC5\u987B\u662F\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002"));
    return r.forEach(function (u) {
      if (u.length === i.length) {
        for (var s = 0; s < u.length; s++) if (u[s] !== i[s]) return;
        throw new Error("\u5DF2\u5B58\u5728\u6B64\u7B7E\u540D\u7684\u91CD\u8F7D\u3002");
      }
    }), r.forEach(function (u) {
      var s = Array.isArray(u);
      if (typeof u != "function" && !s && u !== C && u !== R) throw new TypeError("\u671F\u671B\u7C7B\u578B\u4E3A Class\u3001Array\u3001".concat(C, " \u6216\u672B\u5C3E\u53C2\u6570\u4E5F\u53EF\u4EE5\u662F ").concat(R, "\u3002"));
      if (s) for (var a = 0; a < u.length; a++) {
        var _u$a2;
        var y = _typeof(u[a]);
        if (y !== "function" && !(y === "object" && typeof ((_u$a2 = u[a]) === null || _u$a2 === void 0 ? void 0 : _u$a2.constructor) == "function") && u[a] !== null && u[a] !== C) throw new TypeError("\u7C7B\u578B\u5FC5\u987B\u4E3A Class\u3001null \u6216 ".concat(C, "\u3002"));
      }
    }), r.push(i), e.push(E), t.push({
      length: i.length,
      rest: i[i.length - 1] === R
    }), c;
  }, c.any = function (i) {
    if (n) throw new Error("any \u51FD\u6570\u5DF2\u5B58\u5728\u3002");
    if (typeof i != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
    return n = i, c;
  }, c;
}
h(H, "N");
var p = H().add([], function () {
    return H();
  }).add([Array, Function], function (r, e) {
    var t = H();
    return t.add(r, e), t;
  }),
  F = (_t = /*#__PURE__*/new WeakMap(), _e = /*#__PURE__*/new WeakMap(), _o = /*#__PURE__*/new WeakMap(), _f_brand = /*#__PURE__*/new WeakSet(), _f = /*#__PURE__*/function () {
    function f() {
      _classCallCheck(this, f);
      _classPrivateMethodInitSpec(this, _f_brand);
      _classPrivateFieldInitSpec(this, _t, []);
      _classPrivateFieldInitSpec(this, _e, null);
      _classPrivateFieldInitSpec(this, _o, null);
      _defineProperty(this, Symbol.iterator, /*#__PURE__*/_regenerator().m(function _callee() {
        var e;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              e = 0;
            case 1:
              if (!(e < _classPrivateFieldGet(_t, this).length)) {
                _context.n = 3;
                break;
              }
              _context.n = 2;
              return _classPrivateFieldGet(_t, this)[e];
            case 2:
              e++;
              _context.n = 1;
              break;
            case 3:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      for (var _len12 = arguments.length, _e2 = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        _e2[_key12] = arguments[_key12];
      }
      return _assertClassBrand(_f, f, _n)._.apply(this, _e2), _assertClassBrand(_f_brand, this, _i).call(this);
    }
    return _createClass(f, [{
      key: "length",
      get: function get() {
        return _classPrivateFieldGet(_t, this).length;
      }
    }, {
      key: Symbol.isConcatSpreadable,
      get: function get() {
        return !0;
      }
    }, {
      key: Symbol.toStringTag,
      get: function get() {
        return "List<".concat(_classPrivateFieldGet(_e, this).name, ">");
      }
    }, {
      key: "add",
      value: function add() {
        return this.add = p([[_classPrivateFieldGet(_e, this), null]], function (t) {
          _classPrivateFieldGet(_t, this).push(t);
        }), this.add.apply(this, arguments);
      }
    }, {
      key: "addRange",
      value: function addRange() {
        return f.prototype.addRange = p([[Array, f]], function (t) {
          var _iterator = _createForOfIteratorHelper(t),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var n = _step.value;
              this.add(n);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }).any(function () {
          for (var _len13 = arguments.length, t = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
            t[_key13] = arguments[_key13];
          }
          for (var _i2 = 0, _t2 = t; _i2 < _t2.length; _i2++) {
            var n = _t2[_i2];
            this.add(n);
          }
        }), this.addRange.apply(this, arguments);
      }
    }, {
      key: "asReadOnly",
      value: function asReadOnly() {
        var t = ["add", "addRange", "insert", "insertRange", "remove", "removeAt", "removeAll", "removeRange", "clear", "reverse", "sort", "asReadOnly"];
        return f.prototype.asReadOnly = p([], function () {
          var _this5 = this;
          return new Proxy(this, {
            get: h(function (n, o, c) {
              if (t.includes(o)) throw new Error("\u65E0\u6CD5\u8BBF\u95EE\u53EA\u8BFB\u5217\u8868\u4E0A\u7684\u65B9\u6CD5 ".concat(o, "\u3002"));
              return _classPrivateFieldGet(_o, _this5)[o];
            }, "get"),
            set: h(function (n, o, c, i) {
              throw new Error("\u65E0\u6CD5\u5728\u53EA\u8BFB\u5217\u8868\u4E0A\u8BBE\u7F6E\u5C5E\u6027 ".concat(o, "\u3002"));
            }, "set")
          });
        }), this.asReadOnly.apply(this, arguments);
      }
    }, {
      key: "concat",
      value: function concat() {
        return f.prototype.concat = p([[Array, f]], function (t) {
          var n = new f(_classPrivateFieldGet(_e, this));
          var _iterator2 = _createForOfIteratorHelper(this),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var o = _step2.value;
              n.add(o);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          var _iterator3 = _createForOfIteratorHelper(t),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _o2 = _step3.value;
              n.add(_o2);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return n;
        }), this.concat.apply(this, arguments);
      }
    }, {
      key: "clear",
      value: function clear() {
        return f.prototype.clear = p([], function () {
          _classPrivateFieldSet(_t, this, []);
        }), this.clear.apply(this, arguments);
      }
    }, {
      key: "clone",
      value: function clone() {
        return f.prototype.clone = p([], function () {
          return new f(_classPrivateFieldGet(_e, this), this);
        }), this.clone.apply(this, arguments);
      }
    }, {
      key: "contains",
      value: function contains() {
        return this.contains = p([_classPrivateFieldGet(_e, this)], function (t) {
          return _classPrivateFieldGet(_t, this).includes(t);
        }), this.contains.apply(this, arguments);
      }
    }, {
      key: "copyTo",
      value: function copyTo() {
        return f.prototype.copyTo = p().add([Array], function (t) {
          _classPrivateFieldGet(_t, this).forEach(function (n, o) {
            t[o] = n;
          });
        }).add([Array, Number], function (t, n) {
          _classPrivateFieldGet(_t, this).forEach(function (o, c) {
            t[n + c] = o;
          });
        }).add([Array, Number, Number], function (t, n, o) {
          for (var c = 0; c < o; c++) t[n + c] = _classPrivateFieldGet(_t, this)[c];
        }), this.copyTo.apply(this, arguments);
      }
    }, {
      key: "exists",
      value: function exists() {
        return f.prototype.exists = p([Function], function (t) {
          return _classPrivateFieldGet(_t, this).some(t);
        }), this.exists.apply(this, arguments);
      }
    }, {
      key: "forEach",
      value: function forEach() {
        return f.prototype.forEach = p([Function], function (t) {
          _classPrivateFieldGet(_t, this).forEach(t);
        }), this.forEach.apply(this, arguments);
      }
    }, {
      key: "find",
      value: function find() {
        return f.prototype.find = p([Function], function (t) {
          return _classPrivateFieldGet(_t, this).find(t);
        }), this.find.apply(this, arguments);
      }
    }, {
      key: "findIndex",
      value: function findIndex() {
        return f.prototype.findIndex = p([Function], function (t) {
          return _classPrivateFieldGet(_t, this).findIndex(t);
        }), this.findIndex.apply(this, arguments);
      }
    }, {
      key: "findLast",
      value: function findLast() {
        return f.prototype.findLast = p([Function], function (t) {
          _classPrivateFieldGet(_t, this).reverse();
          var n = _classPrivateFieldGet(_t, this).find(t);
          return _classPrivateFieldGet(_t, this).reverse(), n;
        }), this.findLast.apply(this, arguments);
      }
    }, {
      key: "findLastIndex",
      value: function findLastIndex() {
        return f.prototype.findLastIndex = p([Function], function (t) {
          _classPrivateFieldGet(_t, this).reverse();
          var n = _classPrivateFieldGet(_t, this).findIndex(t);
          return _classPrivateFieldGet(_t, this).reverse(), n;
        }), this.findLastIndex.apply(this, arguments);
      }
    }, {
      key: "getInnerType",
      value: function getInnerType() {
        return f.prototype.getInnerType = p([], function () {
          return _classPrivateFieldGet(_e, this);
        }), this.getInnerType.apply(this, arguments);
      }
    }, {
      key: "insert",
      value: function insert() {
        return this.insert = p([Number, [_classPrivateFieldGet(_e, this), null]], function (t, n) {
          _assertClassBrand(_f_brand, this, _r6).call(this, t), _classPrivateFieldGet(_t, this).splice(t, 0, n);
        }), this.insert.apply(this, arguments);
      }
    }, {
      key: "insertRange",
      value: function insertRange() {
        return f.prototype.insertRange = p([Number, [Array, f]], function (t, n) {
          _assertClassBrand(_f_brand, this, _r6).call(this, t);
          var _iterator4 = _createForOfIteratorHelper(n),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var o = _step4.value;
              this.insert(t++, o);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }).add([Number, "..."], function (t) {
          _assertClassBrand(_f_brand, this, _r6).call(this, t);
          for (var _len14 = arguments.length, n = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
            n[_key14 - 1] = arguments[_key14];
          }
          for (var _i3 = 0, _n2 = n; _i3 < _n2.length; _i3++) {
            var o = _n2[_i3];
            this.insert(t++, o);
          }
        }), this.insertRange.apply(this, arguments);
      }
    }, {
      key: "indexOf",
      value: function indexOf() {
        return this.indexOf = p([_classPrivateFieldGet(_e, this)], function (t) {
          return _classPrivateFieldGet(_t, this).indexOf(t);
        }), this.indexOf.apply(this, arguments);
      }
    }, {
      key: "lastIndexOf",
      value: function lastIndexOf() {
        return this.lastIndexOf = p([_classPrivateFieldGet(_e, this)], function (t) {
          return _classPrivateFieldGet(_t, this).lastIndexOf(t);
        }), this.lastIndexOf.apply(this, arguments);
      }
    }, {
      key: "remove",
      value: function remove() {
        return this.remove = p([_classPrivateFieldGet(_e, this)], function (t) {
          var n = _classPrivateFieldGet(_t, this).indexOf(t);
          return n !== -1 ? (_classPrivateFieldGet(_t, this).splice(n, 1), !0) : !1;
        }), this.remove.apply(this, arguments);
      }
    }, {
      key: "removeAt",
      value: function removeAt() {
        return f.prototype.removeAt = p([Number], function (t) {
          _assertClassBrand(_f_brand, this, _r6).call(this, t), _classPrivateFieldGet(_t, this).splice(t, 1);
        }), this.removeAt.apply(this, arguments);
      }
    }, {
      key: "removeAll",
      value: function removeAll() {
        return f.prototype.removeAll = p([Function], function (t) {
          var n = 0;
          for (var o = _classPrivateFieldGet(_t, this).length - 1; o >= 0; o--) t(_classPrivateFieldGet(_t, this)[o]) && (_classPrivateFieldGet(_t, this).splice(o, 1), n++);
          return n;
        }), this.removeAll.apply(this, arguments);
      }
    }, {
      key: "removeRange",
      value: function removeRange() {
        return f.prototype.removeRange = p([Number, Number], function (t, n) {
          _assertClassBrand(_f_brand, this, _r6).call(this, t), _assertClassBrand(_f_brand, this, _r6).call(this, t + n - 1), _classPrivateFieldGet(_t, this).splice(t, n);
        }), this.removeRange.apply(this, arguments);
      }
    }, {
      key: "reverse",
      value: function reverse() {
        return f.prototype.reverse = p([], function () {
          _classPrivateFieldGet(_t, this).reverse();
        }).add([Number, Number], function (t, n) {
          var _classPrivateFieldGet2;
          _assertClassBrand(_f_brand, this, _r6).call(this, t), _assertClassBrand(_f_brand, this, _r6).call(this, t + n - 1);
          var o = _classPrivateFieldGet(_t, this).splice(t, n);
          o.reverse(), (_classPrivateFieldGet2 = _classPrivateFieldGet(_t, this)).splice.apply(_classPrivateFieldGet2, [t, 0].concat(_toConsumableArray(o)));
        }), this.reverse.apply(this, arguments);
      }
    }, {
      key: "slice",
      value: function slice() {
        return f.prototype.slice = p().add([Number, Number], function (t, n) {
          return new f(_classPrivateFieldGet(_e, this), _classPrivateFieldGet(_t, this).slice(t, n));
        }), this.slice.apply(this, arguments);
      }
    }, {
      key: "sort",
      value: function sort() {
        return f.prototype.sort = p().add([], function () {
          _classPrivateFieldGet(_t, this).sort();
        }).add([Function], function (t) {
          _classPrivateFieldGet(_t, this).sort(t);
        }), this.sort.apply(this, arguments);
      }
    }, {
      key: "toArray",
      value: function toArray() {
        return f.prototype.toArray = p([], function () {
          return _classPrivateFieldGet(_t, this).slice();
        }), this.toArray.apply(this, arguments);
      }
    }, {
      key: "trueForAll",
      value: function trueForAll() {
        return f.prototype.trueForAll = p([Function], function (t) {
          return _classPrivateFieldGet(_t, this).every(t);
        }), this.trueForAll.apply(this, arguments);
      }
    }, {
      key: "toString",
      value: function toString() {
        return f.prototype.toString = p().any(function () {
          var _classPrivateFieldGet3;
          return (_classPrivateFieldGet3 = _classPrivateFieldGet(_t, this)).toString.apply(_classPrivateFieldGet3, arguments);
        }), this.toString.apply(this, arguments);
      }
    }], [{
      key: "T",
      value: function T() {
        var t = new WeakMap();
        return f.T = p([Function], function (n) {
          var o = t.get(n);
          return !o && t.set(n, o = new Proxy(f, {
            get: h(function (c, i, E) {
              return i === "##INNER_TYPE##" ? n : c[i];
            }, "get")
          })), o;
        }), f.T.apply(f, arguments);
      }
    }]);
  }(), h(_f, "n"), _n = {
    _: h(function () {
      var _assertClassBrand$_;
      for (var _len15 = arguments.length, e = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        e[_key15] = arguments[_key15];
      }
      return _n._ = _assertClassBrand(_f, _f, p().add([Function], function (t) {
        _classPrivateFieldSet(_e, this, t);
      }).add([Function, [Array, _f.T(typeof (e === null || e === void 0 ? void 0 : e[0]) == "function" ? e[0] : /*#__PURE__*/_createClass(function _class() {
        _classCallCheck(this, _class);
      }))]], function (t, n) {
        _classPrivateFieldSet(_e, this, t);
        var _iterator5 = _createForOfIteratorHelper(n),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var o = _step5.value;
            this.add(o);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }).add([Function, Number], function (t, n) {
        _classPrivateFieldSet(_e, this, t);
        var o;
        t === Number ? o = 0 : t === String ? o = "" : t === Boolean ? o = !1 : t === BigInt ? o = BigInt(0) : t === Symbol ? o = Symbol() : o = null;
        for (var c = 0; c < n; c++) {
          var _t$STRUCT_CONSTURCT;
          this.add((t === null || t === void 0 || (_t$STRUCT_CONSTURCT = t["##STRUCT_CONSTURCTOR##"]) === null || _t$STRUCT_CONSTURCT === void 0 ? void 0 : _t$STRUCT_CONSTURCT.call(t)) || o);
        }
      })), (_assertClassBrand$_ = _assertClassBrand(_f, _f, _n)._).call.apply(_assertClassBrand$_, [this].concat(e));
    }, "#r")
  }, _f);
function _i() {
  var _this9 = this;
  return _classPrivateFieldSet(_o, this, new Proxy(this, {
    get: h(function (e, t, n) {
      if (t === "@@INNER_TYPE@@") return _classPrivateFieldGet(_e, _this9);
      var o = null;
      return _typeof(t) == "symbol" ? o = _this9[t] : typeof t == "string" && (/^\d+$/.test(t) ? o = _classPrivateFieldGet(_t, _this9)[t] : o = _this9[t]), typeof o == "function" ? o.bind(_this9) : o;
    }, "get"),
    set: h(function (e, t, n, o) {
      if (typeof t == "string" && /^\d+$/.test(t)) {
        if (t >= _classPrivateFieldGet(_t, _this9).length) throw new Error("\u7D22\u5F15 ".concat(t, " \u8D85\u51FA\u8303\u56F4\uFF0C\u5217\u8868\u957F\u5EA6\u4E3A ").concat(_classPrivateFieldGet(_t, _this9).length, "\u3002"));
        return p([_classPrivateFieldGet(_e, _this9)], function (c) {
          _classPrivateFieldGet(_t, _this9)[t] = c;
        }).call(_this9, n), !0;
      }
      throw new Error("\u65E0\u6CD5\u5728\u6B64\u5217\u8868\u4E0A\u8BBE\u7F6E\u5C5E\u6027 ".concat(t, "\u3002"));
    }, "set")
  }));
}
function _r6(e) {
  if (e < 0) throw new Error("\u7D22\u5F15 ".concat(e, " \u8D85\u51FA\u8303\u56F4\uFF0C\u7D22\u5F15\u5FC5\u987B\u5927\u4E8E\u6216\u7B49\u4E8E 0\u3002"));
  if (e >= _classPrivateFieldGet(_t, this).length) throw new Error("\u7D22\u5F15 ".concat(e, " \u8D85\u51FA\u8303\u56F4\uFF0C\u5217\u8868\u957F\u5EA6\u4E3A ").concat(_classPrivateFieldGet(_t, this).length, "\u3002"));
}
var x = (_t3 = /*#__PURE__*/new WeakMap(), _r7 = /*#__PURE__*/function (_A2) {
  function r() {
    var _this6;
    _classCallCheck(this, r);
    for (var _len16 = arguments.length, e = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
      e[_key16] = arguments[_key16];
    }
    _this6 = _callSuper(this, r), _classPrivateFieldInitSpec(_assertThisInitialized(_this6), _t3, ""), _assertThisInitialized(_this6), r[l].apply(_assertThisInitialized(_this6), e), _this6.message = _this6.processMsg();
    return _this6;
  }
  _inherits(r, _A2);
  return _createClass(r, [{
    key: "paramName",
    get: function get() {
      return _classPrivateFieldGet(_t3, this);
    }
  }, {
    key: "processMsg",
    value: function processMsg() {
      var e = this.message;
      if (_classPrivateFieldGet(_t3, this)) {
        var t = S("Arg_ParamName_Name", _classPrivateFieldGet(_t3, this));
        return "".concat(e, "\r\n").concat(t);
      } else return e;
    }
  }]);
}(A), h(_r7, "ArgumentException"), _defineProperty(_r7, l, function () {
  for (var _len17 = arguments.length, e = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    e[_key17] = arguments[_key17];
  }
  return _r7[l] = m().add([], function () {
    this.message = S("Arg_ArgumentException");
  }).add([String], function (t) {
    A[l].call(this, t);
  }).add([String, [Error, g, null]], function (t, n) {
    A[l].call(this, t, n);
  }).add([String, String, [Error, g, null]], function (t, n, o) {
    A[l].call(this, t, o), _classPrivateFieldSet(_t3, this, n);
  }).add([String, String], function (t, n) {
    A[l].call(this, t), _classPrivateFieldSet(_t3, this, n);
  }), _r7[l].apply(this, e);
}), _r7);
var $ = (_r8 = /*#__PURE__*/function (_x) {
  function r() {
    var _this7;
    _classCallCheck(this, r);
    for (var _len18 = arguments.length, e = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
      e[_key18] = arguments[_key18];
    }
    _this7 = _callSuper(this, r), r[l].apply(_assertThisInitialized(_this7), e), _this7.message = _this7.processMsg();
    return _this7;
  }
  _inherits(r, _x);
  return _createClass(r);
}(x), h(_r8, "ArgumentNullException"), _defineProperty(_r8, l, function () {
  for (var _len19 = arguments.length, e = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    e[_key19] = arguments[_key19];
  }
  return _r8[l] = m().add([], function () {
    this.message = S("ArgumentNull_Generic");
  }).add([String], function (t) {
    x[l].call(this, S("ArgumentNull_Generic"), t);
  }).add([String, [Error, g, null]], function (t, n) {
    x[l].call(this, t, n);
  }).add([String, String], function (t, n) {
    x[l].call(this, n, t);
  }), _r8[l].apply(this, e);
}), _r8);
var j = (_t4 = /*#__PURE__*/new WeakMap(), _r9 = /*#__PURE__*/function (_g2) {
  function r() {
    var _this8;
    _classCallCheck(this, r);
    for (var _len20 = arguments.length, e = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
      e[_key20] = arguments[_key20];
    }
    _this8 = _callSuper(this, r), _classPrivateFieldInitSpec(_assertThisInitialized(_this8), _t4, null), _assertThisInitialized(_this8), r[l].apply(_assertThisInitialized(_this8), e);
    return _this8;
  }
  _inherits(r, _g2);
  return _createClass(r, [{
    key: "causes",
    get: function get() {
      return _classPrivateFieldGet(_t4, this);
    }
  }, {
    key: "causeCount",
    get: function get() {
      var _classPrivateFieldGet4;
      return ((_classPrivateFieldGet4 = _classPrivateFieldGet(_t4, this)) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.length) || 0;
    }
  }, {
    key: "getBaseException",
    value: function getBaseException() {
      for (var _len21 = arguments.length, e = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
        e[_key21] = arguments[_key21];
      }
      return r.prototype.getBaseException = m([], function () {
        var t = this,
          n = this;
        for (; n && ((_n$cause = n.cause) === null || _n$cause === void 0 ? void 0 : _n$cause.length) === 1;) {
          var _n$cause;
          t = t.cause[0], n = W(t, r);
        }
        return t;
      }), r.prototype.getBaseException.apply(this, e);
    }
  }, {
    key: "handle",
    value: function handle() {
      for (var _len22 = arguments.length, e = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
        e[_key22] = arguments[_key22];
      }
      return r.prototype.handle = m([Function], function (t) {
        var n = null;
        for (var o = 0; o < ((_this$cause = this.cause) === null || _this$cause === void 0 ? void 0 : _this$cause.length); o++) {
          var _this$cause;
          t(this.cause[o]) || (n === null && (n = new F(g)), n.add(this.cause[o]));
        }
        if (n !== null) throw new r(this.message, n);
      }), r.prototype.handle.apply(this, e);
    }
  }, {
    key: "flatten",
    value: function flatten() {
      for (var _len23 = arguments.length, e = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
        e[_key23] = arguments[_key23];
      }
      return r.prototype.flatten = m([], function () {
        var t = new F(g),
          n = new F(r);
        n.add(this);
        var o = 0;
        for (; (n === null || n === void 0 ? void 0 : n.length) > o;) {
          var c = n[o++].cause;
          for (var i = 0; i < (c === null || c === void 0 ? void 0 : c.length); i++) {
            var E = c[i];
            if (!E) continue;
            var u = W(E, r);
            u ? n.add(u) : t.add(E);
          }
        }
        return new r(this.message, t);
      }), r.prototype.flatten.apply(this, e);
    }
  }, {
    key: "toString",
    value: function toString() {
      var t = _superPropGet(r, "toString", this, 1);
      for (var _len24 = arguments.length, e = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
        e[_key24] = arguments[_key24];
      }
      return r.prototype.toString = m([], function () {
        var n = t.call(this);
        for (var o = 0; o < ((_classPrivateFieldGet5 = _classPrivateFieldGet(_t4, this)) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.length); o++) {
          var _classPrivateFieldGet5;
          n = M(S("AggregateException_ToString"), n, "\r\n", o, _classPrivateFieldGet(_t4, this)[o].toString(), "<---", "\r\n");
        }
        return n;
      }), r.prototype.toString.apply(this, e);
    }
  }]);
}(g), h(_r9, "AggregateException"), _defineProperty(_r9, l, function () {
  for (var _len25 = arguments.length, e = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
    e[_key25] = arguments[_key25];
  }
  return _r9[l] = m().add([], function () {
    this.message = S("AggregateException_ctor_DefaultMessage"), _classPrivateFieldSet(_t4, this, new F(g).asReadOnly()), this.cause = _classPrivateFieldGet(_t4, this)[0] || null;
  }).add([String], function (t) {
    g[l].call(this, t), _classPrivateFieldSet(_t4, this, new F(g).asReadOnly()), this.cause = _classPrivateFieldGet(_t4, this)[0] || null;
  }).add([String, [Error, g, null]], function (t, n) {
    if (g[l].call(this, t, n), n === null) throw new $("innerException");
    _classPrivateFieldSet(_t4, this, new F(g, [n]).asReadOnly()), this.cause = _classPrivateFieldGet(_t4, this)[0] || null;
  }).add([F.T(g)], function (t) {
    _r9[l].call(this, S("AggregateException_ctor_DefaultMessage"), t);
  }).add([String, F.T(g)], function (t, n) {
    g[l].call(this, t, n[0] || null);
    var o = new F(g, n.length);
    for (var c = 0; c < o.length; c++) if (o[c] = n[c], !o[c]) throw new x(S("AggregateException_ctor_InnerExceptionNull"));
    _classPrivateFieldSet(_t4, this, o.asReadOnly()), this.cause = _classPrivateFieldGet(_t4, this)[0] || null;
  }), _r9[l].apply(this, e);
}), _r9);
export { k as AccessViolationException, j as AggregateException, x as ArgumentException, $ as ArgumentNullException, g as Exception, A as SystemException };
