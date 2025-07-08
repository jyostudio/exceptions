var _t2;
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var C = Object.defineProperty;
var E = function E(t, n) {
  return C(t, "name", {
    value: n,
    configurable: !0
  });
};
var g = "*",
  T = "...",
  I = "\u21C4",
  d = "##INNER_TYPE##",
  w = "@@INNER_TYPE@@",
  _ = "##INNER_THROW_FN##",
  Y = "##INNER_TYPE_FN##";
function $(t, n) {
  var _n$Y, _t;
  if (Array.isArray(n)) {
    for (var r = 0; r < n.length; r++) if ($(t, n[r])) return !0;
    return !1;
  }
  if (n !== null && n !== void 0 && (_n$Y = n[Y]) !== null && _n$Y !== void 0 && _n$Y.call(n, t)) return !0;
  if (typeof n != "function") return n === g && t !== null || n === T || n === null && t === null || n === _typeof(t);
  switch (_typeof(t)) {
    case "function":
    case "object":
      break;
    case "string":
      t = String;
      break;
    case "number":
      t = Number;
      break;
    case "boolean":
      t = Boolean;
      break;
    case "symbol":
      t = Symbol;
      break;
    case "bigint":
      t = BigInt;
      break;
    default:
      t = Object(t);
      break;
  }
  return t === n || t instanceof n ? !0 : (_t = t) !== null && _t !== void 0 && _t[w] ? t[w] === (n === null || n === void 0 ? void 0 : n[d]) : !1;
}
E($, "matchType");
function S(t) {
  var _t$constructor;
  if (t === null) return "null";
  if (t === g) return "(\u4EFB\u610F)";
  var n = _typeof(t);
  if (!["function", "object"].includes(n)) return n[0].toUpperCase() + n.slice(1);
  var r = ((t === null || t === void 0 ? void 0 : t.name) || (t === null || t === void 0 || (_t$constructor = t.constructor) === null || _t$constructor === void 0 ? void 0 : _t$constructor.name) || "(\u672A\u77E5)").split(" ").pop();
  return [d, w].forEach(function (l) {
    (t === null || t === void 0 ? void 0 : t[l]) && (r += "<".concat(S(t === null || t === void 0 ? void 0 : t[l]), ">"));
  }), n === "function" && r === "anonymous" ? "(\u533F\u540D)" : r;
}
E(S, "getTypeName");
function m(t, n, r) {
  var l = t.stack.split("\n").splice(3),
    f = "",
    u = "\n",
    o = "";
  l.forEach(function (i, c, h) {
    var s = i.trim().split(" "),
      N = s.length === 3 ? s[1] : "(\u533F\u540D)",
      R = N.split(".").pop();
    h[c] = {
      fullMethodName: N,
      methodName: R,
      link: s.length === 3 ? s[2] : s[1]
    }, c ? u += "".concat(R, "\t").concat(h[c].link, "\n") : o = R;
  });
  var a = n.find(function (i) {
    return i.length === r.length;
  });
  if (!a) throw f += "\u65B9\u6CD5 ".concat(o, " \u4E0D\u5B58\u5728 ").concat(r.length, " \u4E2A\u53C2\u6570\u7684\u91CD\u8F7D\u3002"), f += u, new Error(f);
  var e = !1;
  if (a.forEach(function (i, c) {
    if (!$(r[c], i)) {
      var _i$_;
      var h = Array.isArray(i) ? i.map(S).join("\u3001") : S(i);
      f += "".concat(e ? "\n" : "", "\u53C2\u6570").concat(c + 1, "\uFF1A\u9884\u671F ").concat(h, " \u4F46\u5F97\u5230 ").concat(S(r[c]), "\u3002"), Array.isArray(i) ? i.forEach(function (s, N) {
        var _s$_;
        typeof (s === null || s === void 0 ? void 0 : s[_]) == "function" && (f += "".concat(N === 0 ? "\n\u9644\u52A0\u4FE1\u606F\uFF1A\n" : "", "\u5C1D\u8BD5\u65B9\u6848").concat(c + 1, " - ").concat((_s$_ = s[_]) === null || _s$_ === void 0 ? void 0 : _s$_.call(s, r[c])));
      }) : typeof (i === null || i === void 0 ? void 0 : i[_]) == "function" && (f += "\n\u9644\u52A0\u4FE1\u606F\uFF1A\n\u5C1D\u8BD5\u65B9\u6848".concat(c + 1, " - ").concat((_i$_ = i[_]) === null || _i$_ === void 0 ? void 0 : _i$_.call(i, r[c]))), e = !0;
    }
  }), e) throw f = "\u65B9\u6CD5 ".concat(o, " \u8C03\u7528\u9519\u8BEF\n").concat(f), f += u, new Error(f);
}
E(m, "throwStackInfo");
function A() {
  var t = [],
    n = [],
    r = [],
    l = null;
  function f() {
    for (var _len = arguments.length, o = new Array(_len), _key = 0; _key < _len; _key++) {
      o[_key] = arguments[_key];
    }
    if (l) return l.apply(this, o);
    m(new Error(), t, o);
  }
  E(f, "runAny");
  function u() {
    for (var _len2 = arguments.length, o = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      o[_key2] = arguments[_key2];
    }
    if (!t.length) return f.apply(this, o);
    var a = o.length;
    t: for (var e = 0; e < t.length; e++) {
      var i = t[e],
        c = r[e],
        h = i.length;
      if (!(c.length !== a && !c.rest || a === 0 && h && i[0] !== T)) {
        for (var s = 0; s < a; s++) {
          var N = i[s] || i[h - 1];
          if (!$(o[s], N)) {
            try {
              var _N$I;
              var R = N === null || N === void 0 || (_N$I = N[I]) === null || _N$I === void 0 ? void 0 : _N$I.call(N, o[s]);
              if ($(R, N)) {
                o[s] = R;
                continue;
              }
            } catch (_unused) {}
            continue t;
          }
        }
        return n[e].apply(this, o);
      }
    }
    return f.apply(this, o);
  }
  return E(u, "overload"), u.add = function (o, a) {
    if (!Array.isArray(t)) throw new TypeError("types \u5FC5\u987B\u662F\u6570\u7EC4\u3002");
    if (typeof a != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
    for (var e = 0; e < o.length; e++) if (o[e] === T && e !== o.length - 1) throw new SyntaxError("".concat(T, " \u5FC5\u987B\u662F\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002"));
    return t.forEach(function (e) {
      if (e.length === o.length) {
        for (var i = 0; i < e.length; i++) if (e[i] !== o[i]) return;
        throw new Error("\u5DF2\u5B58\u5728\u6B64\u7B7E\u540D\u7684\u91CD\u8F7D\u3002");
      }
    }), t.forEach(function (e) {
      var i = Array.isArray(e);
      if (typeof e != "function" && !i && e !== g && e !== T) throw new TypeError("\u671F\u671B\u7C7B\u578B\u4E3A Class\u3001Array\u3001".concat(g, " \u6216\u672B\u5C3E\u53C2\u6570\u4E5F\u53EF\u4EE5\u662F ").concat(T, "\u3002"));
      if (i) for (var c = 0; c < e.length; c++) {
        var _e$c;
        var h = _typeof(e[c]);
        if (h !== "function" && !(h === "object" && typeof ((_e$c = e[c]) === null || _e$c === void 0 ? void 0 : _e$c.constructor) == "function") && e[c] !== null && e[c] !== g) throw new TypeError("\u7C7B\u578B\u5FC5\u987B\u4E3A Class\u3001null \u6216 ".concat(g, "\u3002"));
      }
    }), t.push(o), n.push(a), r.push({
      length: o.length,
      rest: o[o.length - 1] === T
    }), u;
  }, u.any = function (o) {
    if (l) throw new Error("any \u51FD\u6570\u5DF2\u5B58\u5728\u3002");
    if (typeof o != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
    return l = o, u;
  }, u;
}
E(A, "createOverload");
var O = A().add([], function () {
  return A();
}).add([Array, Function], function (t, n) {
  var r = A();
  return r.add(t, n), r;
});
var P = {
  test: "\u6D4B\u8BD5"
};
var F = null;
F = P;
var k = F;
var b = Symbol("constructor"),
  y = (_t2 = /*#__PURE__*/function (_Error) {
    function t() {
      var _this;
      _classCallCheck(this, t);
      for (var _len3 = arguments.length, n = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        n[_key3] = arguments[_key3];
      }
      _this = _callSuper(this, t, [].concat(n)), _this.name = _this.constructor.name, t[b].apply(_assertThisInitialized(_this), n);
      var r = "";
      _this.stack.split("\n").forEach(function (l, f) {
        r += "".concat(f ? "\n" : "").concat(l);
      }), _this.stack = r;
      return _this;
    }
    _inherits(t, _Error);
    return _createClass(t);
  }(/*#__PURE__*/_wrapNativeSuper(Error)), E(_t2, "Exception"), _defineProperty(_t2, b, function () {
    for (var _len4 = arguments.length, n = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      n[_key4] = arguments[_key4];
    }
    return _t2[b] = O().add([String], function (r) {
      var _k$r;
      this.message = (_k$r = k[r]) !== null && _k$r !== void 0 ? _k$r : r;
    }).any(function (r) {
      var _k$r2;
      for (var _len5 = arguments.length, l = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        l[_key5 - 1] = arguments[_key5];
      }
      var f = (_k$r2 = k[r]) !== null && _k$r2 !== void 0 ? _k$r2 : r;
      this.message = f.replace(/\{(\d+)\}/g, function (u, o) {
        return l[o];
      });
    }), _t2[b].apply(this, n);
  }), _t2);
export { y as Exception };
