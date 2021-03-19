(() => {
  "use strict";
  var t = {
      88: (t, n, e) => {
        e.d(n, { Z: () => o });
        var r = e(645),
          i = e.n(r)()(function (t) {
            return t[1];
          });
        i.push([
          t.id,
          'body {\n  font-family: "Open Sans", "Helvetica", sans-serif;\n}',
          "",
        ]);
        const o = i;
      },
      645: (t) => {
        t.exports = function (t) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var e = t(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(e, "}") : e;
              }).join("");
            }),
            (n.i = function (t, e, r) {
              "string" == typeof t && (t = [[null, t, ""]]);
              var i = {};
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var u = this[o][0];
                  null != u && (i[u] = !0);
                }
              for (var a = 0; a < t.length; a++) {
                var s = [].concat(t[a]);
                (r && i[s[0]]) ||
                  (e &&
                    (s[2]
                      ? (s[2] = "".concat(e, " and ").concat(s[2]))
                      : (s[2] = e)),
                  n.push(s));
              }
            }),
            n
          );
        };
      },
      379: (t, n, e) => {
        var r,
          i = (function () {
            var t = {};
            return function (n) {
              if (void 0 === t[n]) {
                var e = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  e instanceof window.HTMLIFrameElement
                )
                  try {
                    e = e.contentDocument.head;
                  } catch (t) {
                    e = null;
                  }
                t[n] = e;
              }
              return t[n];
            };
          })(),
          o = [];
        function u(t) {
          for (var n = -1, e = 0; e < o.length; e++)
            if (o[e].identifier === t) {
              n = e;
              break;
            }
          return n;
        }
        function a(t, n) {
          for (var e = {}, r = [], i = 0; i < t.length; i++) {
            var a = t[i],
              s = n.base ? a[0] + n.base : a[0],
              c = e[s] || 0,
              l = "".concat(s, " ").concat(c);
            e[s] = c + 1;
            var f = u(l),
              h = { css: a[1], media: a[2], sourceMap: a[3] };
            -1 !== f
              ? (o[f].references++, o[f].updater(h))
              : o.push({ identifier: l, updater: v(h, n), references: 1 }),
              r.push(l);
          }
          return r;
        }
        function s(t) {
          var n = document.createElement("style"),
            r = t.attributes || {};
          if (void 0 === r.nonce) {
            var o = e.nc;
            o && (r.nonce = o);
          }
          if (
            (Object.keys(r).forEach(function (t) {
              n.setAttribute(t, r[t]);
            }),
            "function" == typeof t.insert)
          )
            t.insert(n);
          else {
            var u = i(t.insert || "head");
            if (!u)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            u.appendChild(n);
          }
          return n;
        }
        var c,
          l =
            ((c = []),
            function (t, n) {
              return (c[t] = n), c.filter(Boolean).join("\n");
            });
        function f(t, n, e, r) {
          var i = e
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (t.styleSheet) t.styleSheet.cssText = l(n, i);
          else {
            var o = document.createTextNode(i),
              u = t.childNodes;
            u[n] && t.removeChild(u[n]),
              u.length ? t.insertBefore(o, u[n]) : t.appendChild(o);
          }
        }
        function h(t, n, e) {
          var r = e.css,
            i = e.media,
            o = e.sourceMap;
          if (
            (i ? t.setAttribute("media", i) : t.removeAttribute("media"),
            o &&
              "undefined" != typeof btoa &&
              (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                " */"
              )),
            t.styleSheet)
          )
            t.styleSheet.cssText = r;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(r));
          }
        }
        var p = null,
          d = 0;
        function v(t, n) {
          var e, r, i;
          if (n.singleton) {
            var o = d++;
            (e = p || (p = s(n))),
              (r = f.bind(null, e, o, !1)),
              (i = f.bind(null, e, o, !0));
          } else
            (e = s(n)),
              (r = h.bind(null, e, n)),
              (i = function () {
                !(function (t) {
                  if (null === t.parentNode) return !1;
                  t.parentNode.removeChild(t);
                })(e);
              });
          return (
            r(t),
            function (n) {
              if (n) {
                if (
                  n.css === t.css &&
                  n.media === t.media &&
                  n.sourceMap === t.sourceMap
                )
                  return;
                r((t = n));
              } else i();
            }
          );
        }
        t.exports = function (t, n) {
          (n = n || {}).singleton ||
            "boolean" == typeof n.singleton ||
            (n.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var e = a((t = t || []), n);
          return function (t) {
            if (
              ((t = t || []),
              "[object Array]" === Object.prototype.toString.call(t))
            ) {
              for (var r = 0; r < e.length; r++) {
                var i = u(e[r]);
                o[i].references--;
              }
              for (var s = a(t, n), c = 0; c < e.length; c++) {
                var l = u(e[c]);
                0 === o[l].references && (o[l].updater(), o.splice(l, 1));
              }
              e = s;
            }
          };
        };
      },
    },
    n = {};
  function e(r) {
    var i = n[r];
    if (void 0 !== i) return i.exports;
    var o = (n[r] = { id: r, exports: {} });
    return t[r](o, o.exports, e), o.exports;
  }
  (e.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t;
    return e.d(n, { a: n }), n;
  }),
    (e.d = (t, n) => {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (() => {
      function t() {}
      function n(n) {
        return null == n
          ? t
          : function () {
              return this.querySelector(n);
            };
      }
      function r(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
      function i() {
        return [];
      }
      function o(t) {
        return function (n) {
          return n.matches(t);
        };
      }
      var u = Array.prototype.find;
      function a() {
        return this.firstElementChild;
      }
      var s = Array.prototype.filter;
      function c() {
        return this.children;
      }
      function l(t) {
        return new Array(t.length);
      }
      function f(t, n) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = n);
      }
      function h(t) {
        return function () {
          return t;
        };
      }
      function p(t, n, e, r, i, o) {
        for (var u, a = 0, s = n.length, c = o.length; a < c; ++a)
          (u = n[a])
            ? ((u.__data__ = o[a]), (r[a] = u))
            : (e[a] = new f(t, o[a]));
        for (; a < s; ++a) (u = n[a]) && (i[a] = u);
      }
      function d(t, n, e, r, i, o, u) {
        var a,
          s,
          c,
          l = new Map(),
          h = n.length,
          p = o.length,
          d = new Array(h);
        for (a = 0; a < h; ++a)
          (s = n[a]) &&
            ((d[a] = c = u.call(s, s.__data__, a, n) + ""),
            l.has(c) ? (i[a] = s) : l.set(c, s));
        for (a = 0; a < p; ++a)
          (c = u.call(t, o[a], a, o) + ""),
            (s = l.get(c))
              ? ((r[a] = s), (s.__data__ = o[a]), l.delete(c))
              : (e[a] = new f(t, o[a]));
        for (a = 0; a < h; ++a) (s = n[a]) && l.get(d[a]) === s && (i[a] = s);
      }
      function v(t) {
        return t.__data__;
      }
      function _(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
      f.prototype = {
        constructor: f,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, n) {
          return this._parent.insertBefore(t, n);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      var y = "http://www.w3.org/1999/xhtml";
      const m = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: y,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      };
      function g(t) {
        var n = (t += ""),
          e = n.indexOf(":");
        return (
          e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
          m.hasOwnProperty(n) ? { space: m[n], local: t } : t
        );
      }
      function w(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function b(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function A(t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      }
      function x(t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      }
      function S(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      }
      function C(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e
            ? this.removeAttributeNS(t.space, t.local)
            : this.setAttributeNS(t.space, t.local, e);
        };
      }
      function N(t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView
        );
      }
      function E(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function M(t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      }
      function T(t, n, e) {
        return function () {
          var r = n.apply(this, arguments);
          null == r
            ? this.style.removeProperty(t)
            : this.style.setProperty(t, r, e);
        };
      }
      function L(t, n) {
        return (
          t.style.getPropertyValue(n) ||
          N(t).getComputedStyle(t, null).getPropertyValue(n)
        );
      }
      function O(t) {
        return function () {
          delete this[t];
        };
      }
      function j(t, n) {
        return function () {
          this[t] = n;
        };
      }
      function B(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? delete this[t] : (this[t] = e);
        };
      }
      function P(t) {
        return t.trim().split(/^|\s+/);
      }
      function q(t) {
        return t.classList || new D(t);
      }
      function D(t) {
        (this._node = t), (this._names = P(t.getAttribute("class") || ""));
      }
      function H(t, n) {
        for (var e = q(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
      }
      function I(t, n) {
        for (var e = q(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
      }
      function R(t) {
        return function () {
          H(this, t);
        };
      }
      function U(t) {
        return function () {
          I(this, t);
        };
      }
      function k(t, n) {
        return function () {
          (n.apply(this, arguments) ? H : I)(this, t);
        };
      }
      function V() {
        this.textContent = "";
      }
      function Z(t) {
        return function () {
          this.textContent = t;
        };
      }
      function z(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.textContent = null == n ? "" : n;
        };
      }
      function F() {
        this.innerHTML = "";
      }
      function J(t) {
        return function () {
          this.innerHTML = t;
        };
      }
      function X(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.innerHTML = null == n ? "" : n;
        };
      }
      function G() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function K() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function Q(t) {
        return function () {
          var n = this.ownerDocument,
            e = this.namespaceURI;
          return e === y && n.documentElement.namespaceURI === y
            ? n.createElement(t)
            : n.createElementNS(e, t);
        };
      }
      function W(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      function Y(t) {
        var n = g(t);
        return (n.local ? W : Q)(n);
      }
      function $() {
        return null;
      }
      function tt() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function nt() {
        var t = this.cloneNode(!1),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function et() {
        var t = this.cloneNode(!0),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function rt(t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = "",
              e = t.indexOf(".");
            return (
              e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
              { type: t, name: n }
            );
          });
      }
      function it(t) {
        return function () {
          var n = this.__on;
          if (n) {
            for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
              (e = n[r]),
                (t.type && e.type !== t.type) || e.name !== t.name
                  ? (n[++i] = e)
                  : this.removeEventListener(e.type, e.listener, e.options);
            ++i ? (n.length = i) : delete this.__on;
          }
        };
      }
      function ot(t, n, e) {
        return function () {
          var r,
            i = this.__on,
            o = (function (t) {
              return function (n) {
                t.call(this, n, this.__data__);
              };
            })(n);
          if (i)
            for (var u = 0, a = i.length; u < a; ++u)
              if ((r = i[u]).type === t.type && r.name === t.name)
                return (
                  this.removeEventListener(r.type, r.listener, r.options),
                  this.addEventListener(
                    r.type,
                    (r.listener = o),
                    (r.options = e)
                  ),
                  void (r.value = n)
                );
          this.addEventListener(t.type, o, e),
            (r = {
              type: t.type,
              name: t.name,
              value: n,
              listener: o,
              options: e,
            }),
            i ? i.push(r) : (this.__on = [r]);
        };
      }
      function ut(t, n, e) {
        var r = N(t),
          i = r.CustomEvent;
        "function" == typeof i
          ? (i = new i(n, e))
          : ((i = r.document.createEvent("Event")),
            e
              ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
              : i.initEvent(n, !1, !1)),
          t.dispatchEvent(i);
      }
      function at(t, n) {
        return function () {
          return ut(this, t, n);
        };
      }
      function st(t, n) {
        return function () {
          return ut(this, t, n.apply(this, arguments));
        };
      }
      D.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (t) {
          var n = this._names.indexOf(t);
          n >= 0 &&
            (this._names.splice(n, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      var ct = [null];
      function lt(t, n) {
        (this._groups = t), (this._parents = n);
      }
      function ft(t) {
        return "string" == typeof t
          ? new lt([[document.querySelector(t)]], [document.documentElement])
          : new lt([[t]], ct);
      }
      lt.prototype = function () {
        return new lt([[document.documentElement]], ct);
      }.prototype = {
        constructor: lt,
        select: function (t) {
          "function" != typeof t && (t = n(t));
          for (
            var e = this._groups, r = e.length, i = new Array(r), o = 0;
            o < r;
            ++o
          )
            for (
              var u,
                a,
                s = e[o],
                c = s.length,
                l = (i[o] = new Array(c)),
                f = 0;
              f < c;
              ++f
            )
              (u = s[f]) &&
                (a = t.call(u, u.__data__, f, s)) &&
                ("__data__" in u && (a.__data__ = u.__data__), (l[f] = a));
          return new lt(i, this._parents);
        },
        selectAll: function (t) {
          t =
            "function" == typeof t
              ? (function (t) {
                  return function () {
                    var n = t.apply(this, arguments);
                    return null == n ? [] : r(n);
                  };
                })(t)
              : (function (t) {
                  return null == t
                    ? i
                    : function () {
                        return this.querySelectorAll(t);
                      };
                })(t);
          for (
            var n = this._groups, e = n.length, o = [], u = [], a = 0;
            a < e;
            ++a
          )
            for (var s, c = n[a], l = c.length, f = 0; f < l; ++f)
              (s = c[f]) && (o.push(t.call(s, s.__data__, f, c)), u.push(s));
          return new lt(o, u);
        },
        selectChild: function (t) {
          return this.select(
            null == t
              ? a
              : (function (t) {
                  return function () {
                    return u.call(this.children, t);
                  };
                })("function" == typeof t ? t : o(t))
          );
        },
        selectChildren: function (t) {
          return this.selectAll(
            null == t
              ? c
              : (function (t) {
                  return function () {
                    return s.call(this.children, t);
                  };
                })("function" == typeof t ? t : o(t))
          );
        },
        filter: function (t) {
          "function" != typeof t &&
            (t = (function (t) {
              return function () {
                return this.matches(t);
              };
            })(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var o, u = n[i], a = u.length, s = (r[i] = []), c = 0;
              c < a;
              ++c
            )
              (o = u[c]) && t.call(o, o.__data__, c, u) && s.push(o);
          return new lt(r, this._parents);
        },
        data: function (t, n) {
          if (!arguments.length) return Array.from(this, v);
          var e = n ? d : p,
            i = this._parents,
            o = this._groups;
          "function" != typeof t && (t = h(t));
          for (
            var u = o.length,
              a = new Array(u),
              s = new Array(u),
              c = new Array(u),
              l = 0;
            l < u;
            ++l
          ) {
            var f = i[l],
              _ = o[l],
              y = _.length,
              m = r(t.call(f, f && f.__data__, l, i)),
              g = m.length,
              w = (s[l] = new Array(g)),
              b = (a[l] = new Array(g)),
              A = (c[l] = new Array(y));
            e(f, _, w, b, A, m, n);
            for (var x, S, C = 0, N = 0; C < g; ++C)
              if ((x = w[C])) {
                for (C >= N && (N = C + 1); !(S = b[N]) && ++N < g; );
                x._next = S || null;
              }
          }
          return ((a = new lt(a, i))._enter = s), (a._exit = c), a;
        },
        enter: function () {
          return new lt(this._enter || this._groups.map(l), this._parents);
        },
        exit: function () {
          return new lt(this._exit || this._groups.map(l), this._parents);
        },
        join: function (t, n, e) {
          var r = this.enter(),
            i = this,
            o = this.exit();
          return (
            (r = "function" == typeof t ? t(r) : r.append(t + "")),
            null != n && (i = n(i)),
            null == e ? o.remove() : e(o),
            r && i ? r.merge(i).order() : i
          );
        },
        merge: function (t) {
          if (!(t instanceof lt)) throw new Error("invalid merge");
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              i = e.length,
              o = Math.min(r, i),
              u = new Array(r),
              a = 0;
            a < o;
            ++a
          )
            for (
              var s,
                c = n[a],
                l = e[a],
                f = c.length,
                h = (u[a] = new Array(f)),
                p = 0;
              p < f;
              ++p
            )
              (s = c[p] || l[p]) && (h[p] = s);
          for (; a < r; ++a) u[a] = n[a];
          return new lt(u, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var t = this._groups, n = -1, e = t.length; ++n < e; )
            for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0; )
              (r = i[o]) &&
                (u &&
                  4 ^ r.compareDocumentPosition(u) &&
                  u.parentNode.insertBefore(r, u),
                (u = r));
          return this;
        },
        sort: function (t) {
          function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
          }
          t || (t = _);
          for (
            var e = this._groups, r = e.length, i = new Array(r), o = 0;
            o < r;
            ++o
          ) {
            for (
              var u, a = e[o], s = a.length, c = (i[o] = new Array(s)), l = 0;
              l < s;
              ++l
            )
              (u = a[l]) && (c[l] = u);
            c.sort(n);
          }
          return new lt(i, this._parents).order();
        },
        call: function () {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
              var u = r[i];
              if (u) return u;
            }
          return null;
        },
        size: function () {
          let t = 0;
          for (const n of this) ++t;
          return t;
        },
        empty: function () {
          return !this.node();
        },
        each: function (t) {
          for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
            for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)
              (i = o[u]) && t.call(i, i.__data__, u, o);
          return this;
        },
        attr: function (t, n) {
          var e = g(t);
          if (arguments.length < 2) {
            var r = this.node();
            return e.local
              ? r.getAttributeNS(e.space, e.local)
              : r.getAttribute(e);
          }
          return this.each(
            (null == n
              ? e.local
                ? b
                : w
              : "function" == typeof n
              ? e.local
                ? C
                : S
              : e.local
              ? x
              : A)(e, n)
          );
        },
        style: function (t, n, e) {
          return arguments.length > 1
            ? this.each(
                (null == n ? E : "function" == typeof n ? T : M)(
                  t,
                  n,
                  null == e ? "" : e
                )
              )
            : L(this.node(), t);
        },
        property: function (t, n) {
          return arguments.length > 1
            ? this.each((null == n ? O : "function" == typeof n ? B : j)(t, n))
            : this.node()[t];
        },
        classed: function (t, n) {
          var e = P(t + "");
          if (arguments.length < 2) {
            for (var r = q(this.node()), i = -1, o = e.length; ++i < o; )
              if (!r.contains(e[i])) return !1;
            return !0;
          }
          return this.each(("function" == typeof n ? k : n ? R : U)(e, n));
        },
        text: function (t) {
          return arguments.length
            ? this.each(null == t ? V : ("function" == typeof t ? z : Z)(t))
            : this.node().textContent;
        },
        html: function (t) {
          return arguments.length
            ? this.each(null == t ? F : ("function" == typeof t ? X : J)(t))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(G);
        },
        lower: function () {
          return this.each(K);
        },
        append: function (t) {
          var n = "function" == typeof t ? t : Y(t);
          return this.select(function () {
            return this.appendChild(n.apply(this, arguments));
          });
        },
        insert: function (t, e) {
          var r = "function" == typeof t ? t : Y(t),
            i = null == e ? $ : "function" == typeof e ? e : n(e);
          return this.select(function () {
            return this.insertBefore(
              r.apply(this, arguments),
              i.apply(this, arguments) || null
            );
          });
        },
        remove: function () {
          return this.each(tt);
        },
        clone: function (t) {
          return this.select(t ? et : nt);
        },
        datum: function (t) {
          return arguments.length
            ? this.property("__data__", t)
            : this.node().__data__;
        },
        on: function (t, n, e) {
          var r,
            i,
            o = rt(t + ""),
            u = o.length;
          if (!(arguments.length < 2)) {
            for (a = n ? ot : it, r = 0; r < u; ++r) this.each(a(o[r], n, e));
            return this;
          }
          var a = this.node().__on;
          if (a)
            for (var s, c = 0, l = a.length; c < l; ++c)
              for (r = 0, s = a[c]; r < u; ++r)
                if ((i = o[r]).type === s.type && i.name === s.name)
                  return s.value;
        },
        dispatch: function (t, n) {
          return this.each(("function" == typeof n ? st : at)(t, n));
        },
        [Symbol.iterator]: function* () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r, i = t[n], o = 0, u = i.length; o < u; ++o)
              (r = i[o]) && (yield r);
        },
      };
      var ht = e(379),
        pt = e.n(ht),
        dt = e(88);
      pt()(dt.Z, { insert: "head", singleton: !1 }), dt.Z.locals;
      const vt = {
        id: "treemap",
        label: "Tree Map",
        options: {
          title: {
            type: "string",
            label: "Title",
            display: "text",
            default: "<Title>",
          },
        },
        create: function (t, n) {
          (this.title = ft(t).append("h1")), ft(t).append("h1");
        },
        update: function (t, n, e, r, i) {
          var o;
          null === (o = this.title) || void 0 === o || o.text(e.title);
        },
      };
      looker.plugins.visualizations.add(vt);
    })();
})();
