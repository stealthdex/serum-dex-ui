(window.webpackJsonp = window.webpackJsonp || []).push([
  ['vendors'],
  {
    '/B3w': function (e, t) {
      var n = Math.ceil,
        r = Math.floor;
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
      };
    },
    '/Hub': function (e, t, n) {
      var r = n('vRGa'),
        o = n('yUtn'),
        i = n('6Ngl'),
        u = n('YN/q'),
        s = n('isQe'),
        a = n('O6f/'),
        d = Object.getOwnPropertyDescriptor;
      t.f = n('nULH')
        ? d
        : function (e, t) {
            if (((e = i(e)), (t = u(t, !0)), a))
              try {
                return d(e, t);
              } catch (e) {}
            if (s(e, t)) return o(!r.f.call(e, t), e[t]);
          };
    },
    '/SnT': function (e, t, n) {
      'use strict';
      const r = [
        776,
        2359,
        2359,
        2367,
        2367,
        2984,
        3007,
        3021,
        3633,
        3635,
        3648,
        3657,
        4352,
        4449,
        4520,
      ];
      function o(e) {
        if ('string' != typeof e)
          throw new Error('string cannot be undefined or null');
        const t = [];
        let n = 0,
          r = 0;
        for (; n < e.length; )
          (r += i(n + r, e)),
            d(e[n + r]) && r++,
            s(e[n + r]) && r++,
            a(e[n + r]) && r++,
            c(e[n + r])
              ? r++
              : (t.push(e.substring(n, n + r)), (n += r), (r = 0));
        return t;
      }
      function i(e, t) {
        const n = t[e];
        if (
          !(function (e) {
            return e && l(e[0].charCodeAt(0), 55296, 56319);
          })(n) ||
          e === t.length - 1
        )
          return 1;
        const r = n + t[e + 1];
        let o = t.substring(e + 2, e + 5);
        return (u(r) && u(o)) ||
          (function (e) {
            return l(f(e), 127995, 127999);
          })(o)
          ? 4
          : 2;
      }
      function u(e) {
        return l(f(e), 127462, 127487);
      }
      function s(e) {
        return 'string' == typeof e && l(e.charCodeAt(0), 65024, 65039);
      }
      function a(e) {
        return 'string' == typeof e && l(e.charCodeAt(0), 8400, 8447);
      }
      function d(e) {
        return 'string' == typeof e && -1 !== r.indexOf(e.charCodeAt(0));
      }
      function c(e) {
        return 'string' == typeof e && 8205 === e.charCodeAt(0);
      }
      function f(e) {
        return (
          ((e.charCodeAt(0) - 55296) << 10) + (e.charCodeAt(1) - 56320) + 65536
        );
      }
      function l(e, t, n) {
        return e >= t && e <= n;
      }
      (e.exports = o),
        (e.exports.substr = function (e, t, n) {
          const r = o(e);
          if (void 0 === t) return e;
          if (t >= r.length) return '';
          const i = r.length - t;
          let u = t + (void 0 === n ? i : n);
          return u > t + i && (u = void 0), r.slice(t, u).join('');
        });
    },
    '0+LD': function (e, t, n) {
      'use strict';
      var r = n('KGgr'),
        o = n('vVR7'),
        i = n('AZRH'),
        u = n('OHC2'),
        s = n('PAQY'),
        a = n('BMTb'),
        d = n('OKbE'),
        c = n('zY5Q'),
        f = n('u52/'),
        l = n('zP2l'),
        p = n('AuAe'),
        h = n('e08H');
      e.exports = function (e, t, n, g, _, v) {
        var y = r[e],
          b = y,
          m = _ ? 'set' : 'add',
          w = b && b.prototype,
          x = {},
          k = function (e) {
            var t = w[e];
            i(
              w,
              e,
              'delete' == e || 'has' == e
                ? function (e) {
                    return !(v && !c(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : 'get' == e
                ? function (e) {
                    return v && !c(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                  }
                : 'add' == e
                ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this;
                  }
                : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this;
                  },
            );
          };
        if (
          'function' == typeof b &&
          (v ||
            (w.forEach &&
              !f(function () {
                new b().entries().next();
              })))
        ) {
          var S = new b(),
            O = S[m](v ? {} : -0, 1) != S,
            j = f(function () {
              S.has(1);
            }),
            E = l(function (e) {
              new b(e);
            }),
            P =
              !v &&
              f(function () {
                for (var e = new b(), t = 5; t--; ) e[m](t, t);
                return !e.has(-0);
              });
          E ||
            (((b = t(function (t, n) {
              d(t, b, e);
              var r = h(new y(), t, b);
              return null != n && a(n, _, r[m], r), r;
            })).prototype = w),
            (w.constructor = b)),
            (j || P) && (k('delete'), k('has'), _ && k('get')),
            (P || O) && k(m),
            v && w.clear && delete w.clear;
        } else
          (b = g.getConstructor(t, e, _, m)), u(b.prototype, n), (s.NEED = !0);
        return (
          p(b, e),
          (x[e] = b),
          o(o.G + o.W + o.F * (b != y), x),
          v || g.setStrong(b, e, _),
          b
        );
      };
    },
    '04I0': function (e, t, n) {
      var r = n('vVR7'),
        o = n('Kc4g'),
        i = Math.abs;
      r(r.S, 'Number', {
        isSafeInteger: function (e) {
          return o(e) && i(e) <= 9007199254740991;
        },
      });
    },
    '12Jd': function (e, t, n) {
      var r = n('xjCr'),
        o = n('PPId'),
        i = n('vRGa');
      e.exports = function (e) {
        var t = r(e),
          n = o.f;
        if (n)
          for (var u, s = n(e), a = i.f, d = 0; s.length > d; )
            a.call(e, (u = s[d++])) && t.push(u);
        return t;
      };
    },
    '12Rd': function (e, t, n) {
      var r = n('qKVQ');
      e.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function (e) {
            return 'String' == r(e) ? e.split('') : Object(e);
          };
    },
    '17C/': function (e, t, n) {
      var r = n('9TFj'),
        o = n('zY5Q'),
        i = n('UyYM');
      e.exports = function (e, t) {
        if ((r(e), o(t) && t.constructor === e)) return t;
        var n = i.f(e);
        return (0, n.resolve)(t), n.promise;
      };
    },
    '18Fm': function (e, t, n) {
      'use strict';
      var r = n('XSq2'),
        o = n('VgLE'),
        i = n('bSmq');
      e.exports = function (e) {
        for (
          var t = r(this),
            n = i(t.length),
            u = arguments.length,
            s = o(u > 1 ? arguments[1] : void 0, n),
            a = u > 2 ? arguments[2] : void 0,
            d = void 0 === a ? n : o(a, n);
          d > s;

        )
          t[s++] = e;
        return t;
      };
    },
    '1Vm/': function (e, t) {
      e.exports = function (e) {
        if ('function' != typeof e) throw TypeError(e + ' is not a function!');
        return e;
      };
    },
    '1npb': function (e, t, n) {
      var r = n('fnBu');
      e.exports = function (e, t) {
        return new (r(e))(t);
      };
    },
    '1yTv': function (e, t, n) {
      var r = n('vVR7');
      r(r.P, 'Array', { fill: n('18Fm') }), n('OlM/')('fill');
    },
    '1zYV': function (e, t, n) {
      var r = n('vVR7'),
        o = n('VgLE'),
        i = String.fromCharCode,
        u = String.fromCodePoint;
      r(r.S + r.F * (!!u && 1 != u.length), 'String', {
        fromCodePoint: function (e) {
          for (var t, n = [], r = arguments.length, u = 0; r > u; ) {
            if (((t = +arguments[u++]), o(t, 1114111) !== t))
              throw RangeError(t + ' is not a valid code point');
            n.push(
              t < 65536
                ? i(t)
                : i(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320),
            );
          }
          return n.join('');
        },
      });
    },
    '285N': function (e, t, n) {
      'use strict';
      var r = n('gPPl').f,
        o = n('Vrag'),
        i = n('OHC2'),
        u = n('hvJ5'),
        s = n('OKbE'),
        a = n('BMTb'),
        d = n('Fu1i'),
        c = n('JwWU'),
        f = n('ybEM'),
        l = n('nULH'),
        p = n('PAQY').fastKey,
        h = n('utAV'),
        g = l ? '_s' : 'size',
        _ = function (e, t) {
          var n,
            r = p(t);
          if ('F' !== r) return e._i[r];
          for (n = e._f; n; n = n.n) if (n.k == t) return n;
        };
      e.exports = {
        getConstructor: function (e, t, n, d) {
          var c = e(function (e, r) {
            s(e, c, t, '_i'),
              (e._t = t),
              (e._i = o(null)),
              (e._f = void 0),
              (e._l = void 0),
              (e[g] = 0),
              null != r && a(r, n, e[d], e);
          });
          return (
            i(c.prototype, {
              clear: function () {
                for (var e = h(this, t), n = e._i, r = e._f; r; r = r.n)
                  (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
                (e._f = e._l = void 0), (e[g] = 0);
              },
              delete: function (e) {
                var n = h(this, t),
                  r = _(n, e);
                if (r) {
                  var o = r.n,
                    i = r.p;
                  delete n._i[r.i],
                    (r.r = !0),
                    i && (i.n = o),
                    o && (o.p = i),
                    n._f == r && (n._f = o),
                    n._l == r && (n._l = i),
                    n[g]--;
                }
                return !!r;
              },
              forEach: function (e) {
                h(this, t);
                for (
                  var n,
                    r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (n = n ? n.n : this._f);

                )
                  for (r(n.v, n.k, this); n && n.r; ) n = n.p;
              },
              has: function (e) {
                return !!_(h(this, t), e);
              },
            }),
            l &&
              r(c.prototype, 'size', {
                get: function () {
                  return h(this, t)[g];
                },
              }),
            c
          );
        },
        def: function (e, t, n) {
          var r,
            o,
            i = _(e, t);
          return (
            i
              ? (i.v = n)
              : ((e._l = i = {
                  i: (o = p(t, !0)),
                  k: t,
                  v: n,
                  p: (r = e._l),
                  n: void 0,
                  r: !1,
                }),
                e._f || (e._f = i),
                r && (r.n = i),
                e[g]++,
                'F' !== o && (e._i[o] = i)),
            e
          );
        },
        getEntry: _,
        setStrong: function (e, t, n) {
          d(
            e,
            t,
            function (e, n) {
              (this._t = h(e, t)), (this._k = n), (this._l = void 0);
            },
            function () {
              for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
              return this._t && (this._l = t = t ? t.n : this._t._f)
                ? c(0, 'keys' == e ? t.k : 'values' == e ? t.v : [t.k, t.v])
                : ((this._t = void 0), c(1));
            },
            n ? 'entries' : 'values',
            !n,
            !0,
          ),
            f(t);
        },
      };
    },
    '4Dbv': function (e, t, n) {
      'use strict';
      var r,
        o,
        i,
        u,
        s = n('SwRI'),
        a = n('KGgr'),
        d = n('hvJ5'),
        c = n('IxbO'),
        f = n('vVR7'),
        l = n('zY5Q'),
        p = n('1Vm/'),
        h = n('OKbE'),
        g = n('BMTb'),
        _ = n('s245'),
        v = n('caxj').set,
        y = n('aQPA')(),
        b = n('UyYM'),
        m = n('TnYX'),
        w = n('bjrj'),
        x = n('17C/'),
        k = a.TypeError,
        S = a.process,
        O = S && S.versions,
        j = (O && O.v8) || '',
        E = a.Promise,
        P = 'process' == c(S),
        L = function () {},
        R = (o = b.f),
        A = !!(function () {
          try {
            var e = E.resolve(1),
              t = ((e.constructor = {})[n('IXQl')('species')] = function (e) {
                e(L, L);
              });
            return (
              (P || 'function' == typeof PromiseRejectionEvent) &&
              e.then(L) instanceof t &&
              0 !== j.indexOf('6.6') &&
              -1 === w.indexOf('Chrome/66')
            );
          } catch (e) {}
        })(),
        N = function (e) {
          var t;
          return !(!l(e) || 'function' != typeof (t = e.then)) && t;
        },
        C = function (e, t) {
          if (!e._n) {
            e._n = !0;
            var n = e._c;
            y(function () {
              for (
                var r = e._v,
                  o = 1 == e._s,
                  i = 0,
                  u = function (t) {
                    var n,
                      i,
                      u,
                      s = o ? t.ok : t.fail,
                      a = t.resolve,
                      d = t.reject,
                      c = t.domain;
                    try {
                      s
                        ? (o || (2 == e._h && I(e), (e._h = 1)),
                          !0 === s
                            ? (n = r)
                            : (c && c.enter(),
                              (n = s(r)),
                              c && (c.exit(), (u = !0))),
                          n === t.promise
                            ? d(k('Promise-chain cycle'))
                            : (i = N(n))
                            ? i.call(n, a, d)
                            : a(n))
                        : d(r);
                    } catch (e) {
                      c && !u && c.exit(), d(e);
                    }
                  };
                n.length > i;

              )
                u(n[i++]);
              (e._c = []), (e._n = !1), t && !e._h && T(e);
            });
          }
        },
        T = function (e) {
          v.call(a, function () {
            var t,
              n,
              r,
              o = e._v,
              i = F(e);
            if (
              (i &&
                ((t = m(function () {
                  P
                    ? S.emit('unhandledRejection', o, e)
                    : (n = a.onunhandledrejection)
                    ? n({ promise: e, reason: o })
                    : (r = a.console) &&
                      r.error &&
                      r.error('Unhandled promise rejection', o);
                })),
                (e._h = P || F(e) ? 2 : 1)),
              (e._a = void 0),
              i && t.e)
            )
              throw t.v;
          });
        },
        F = function (e) {
          return 1 !== e._h && 0 === (e._a || e._c).length;
        },
        I = function (e) {
          v.call(a, function () {
            var t;
            P
              ? S.emit('rejectionHandled', e)
              : (t = a.onrejectionhandled) && t({ promise: e, reason: e._v });
          });
        },
        V = function (e) {
          var t = this;
          t._d ||
            ((t._d = !0),
            ((t = t._w || t)._v = e),
            (t._s = 2),
            t._a || (t._a = t._c.slice()),
            C(t, !0));
        },
        M = function (e) {
          var t,
            n = this;
          if (!n._d) {
            (n._d = !0), (n = n._w || n);
            try {
              if (n === e) throw k("Promise can't be resolved itself");
              (t = N(e))
                ? y(function () {
                    var r = { _w: n, _d: !1 };
                    try {
                      t.call(e, d(M, r, 1), d(V, r, 1));
                    } catch (e) {
                      V.call(r, e);
                    }
                  })
                : ((n._v = e), (n._s = 1), C(n, !1));
            } catch (e) {
              V.call({ _w: n, _d: !1 }, e);
            }
          }
        };
      A ||
        ((E = function (e) {
          h(this, E, 'Promise', '_h'), p(e), r.call(this);
          try {
            e(d(M, this, 1), d(V, this, 1));
          } catch (e) {
            V.call(this, e);
          }
        }),
        ((r = function (e) {
          (this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1);
        }).prototype = n('OHC2')(E.prototype, {
          then: function (e, t) {
            var n = R(_(this, E));
            return (
              (n.ok = 'function' != typeof e || e),
              (n.fail = 'function' == typeof t && t),
              (n.domain = P ? S.domain : void 0),
              this._c.push(n),
              this._a && this._a.push(n),
              this._s && C(this, !1),
              n.promise
            );
          },
          catch: function (e) {
            return this.then(void 0, e);
          },
        })),
        (i = function () {
          var e = new r();
          (this.promise = e),
            (this.resolve = d(M, e, 1)),
            (this.reject = d(V, e, 1));
        }),
        (b.f = R = function (e) {
          return e === E || e === u ? new i(e) : o(e);
        })),
        f(f.G + f.W + f.F * !A, { Promise: E }),
        n('AuAe')(E, 'Promise'),
        n('ybEM')('Promise'),
        (u = n('5wX8').Promise),
        f(f.S + f.F * !A, 'Promise', {
          reject: function (e) {
            var t = R(this);
            return (0, t.reject)(e), t.promise;
          },
        }),
        f(f.S + f.F * (s || !A), 'Promise', {
          resolve: function (e) {
            return x(s && this === u ? E : this, e);
          },
        }),
        f(
          f.S +
            f.F *
              !(
                A &&
                n('zP2l')(function (e) {
                  E.all(e).catch(L);
                })
              ),
          'Promise',
          {
            all: function (e) {
              var t = this,
                n = R(t),
                r = n.resolve,
                o = n.reject,
                i = m(function () {
                  var n = [],
                    i = 0,
                    u = 1;
                  g(e, !1, function (e) {
                    var s = i++,
                      a = !1;
                    n.push(void 0),
                      u++,
                      t.resolve(e).then(function (e) {
                        a || ((a = !0), (n[s] = e), --u || r(n));
                      }, o);
                  }),
                    --u || r(n);
                });
              return i.e && o(i.v), n.promise;
            },
            race: function (e) {
              var t = this,
                n = R(t),
                r = n.reject,
                o = m(function () {
                  g(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, r);
                  });
                });
              return o.e && r(o.v), n.promise;
            },
          },
        );
    },
    '4O03': function (e, t, n) {
      var r = n('vVR7');
      r(r.P, 'String', { repeat: n('ktZe') });
    },
    '4O8T': function (e, t, n) {
      var r;
      !(function (t) {
        'use strict';
        function o() {}
        var i = o.prototype,
          u = t.EventEmitter;
        function s(e, t) {
          for (var n = e.length; n--; ) if (e[n].listener === t) return n;
          return -1;
        }
        function a(e) {
          return function () {
            return this[e].apply(this, arguments);
          };
        }
        (i.getListeners = function (e) {
          var t,
            n,
            r = this._getEvents();
          if (e instanceof RegExp)
            for (n in ((t = {}), r))
              r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
          else t = r[e] || (r[e] = []);
          return t;
        }),
          (i.flattenListeners = function (e) {
            var t,
              n = [];
            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
            return n;
          }),
          (i.getListenersAsObject = function (e) {
            var t,
              n = this.getListeners(e);
            return n instanceof Array && ((t = {})[e] = n), t || n;
          }),
          (i.addListener = function (e, t) {
            if (
              !(function e(t) {
                return (
                  'function' == typeof t ||
                  t instanceof RegExp ||
                  (!(!t || 'object' != typeof t) && e(t.listener))
                );
              })(t)
            )
              throw new TypeError('listener must be a function');
            var n,
              r = this.getListenersAsObject(e),
              o = 'object' == typeof t;
            for (n in r)
              r.hasOwnProperty(n) &&
                -1 === s(r[n], t) &&
                r[n].push(o ? t : { listener: t, once: !1 });
            return this;
          }),
          (i.on = a('addListener')),
          (i.addOnceListener = function (e, t) {
            return this.addListener(e, { listener: t, once: !0 });
          }),
          (i.once = a('addOnceListener')),
          (i.defineEvent = function (e) {
            return this.getListeners(e), this;
          }),
          (i.defineEvents = function (e) {
            for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this;
          }),
          (i.removeListener = function (e, t) {
            var n,
              r,
              o = this.getListenersAsObject(e);
            for (r in o)
              o.hasOwnProperty(r) &&
                -1 !== (n = s(o[r], t)) &&
                o[r].splice(n, 1);
            return this;
          }),
          (i.off = a('removeListener')),
          (i.addListeners = function (e, t) {
            return this.manipulateListeners(!1, e, t);
          }),
          (i.removeListeners = function (e, t) {
            return this.manipulateListeners(!0, e, t);
          }),
          (i.manipulateListeners = function (e, t, n) {
            var r,
              o,
              i = e ? this.removeListener : this.addListener,
              u = e ? this.removeListeners : this.addListeners;
            if ('object' != typeof t || t instanceof RegExp)
              for (r = n.length; r--; ) i.call(this, t, n[r]);
            else
              for (r in t)
                t.hasOwnProperty(r) &&
                  (o = t[r]) &&
                  ('function' == typeof o
                    ? i.call(this, r, o)
                    : u.call(this, r, o));
            return this;
          }),
          (i.removeEvent = function (e) {
            var t,
              n = typeof e,
              r = this._getEvents();
            if ('string' === n) delete r[e];
            else if (e instanceof RegExp)
              for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
            else delete this._events;
            return this;
          }),
          (i.removeAllListeners = a('removeEvent')),
          (i.emitEvent = function (e, t) {
            var n,
              r,
              o,
              i,
              u = this.getListenersAsObject(e);
            for (i in u)
              if (u.hasOwnProperty(i))
                for (n = u[i].slice(0), o = 0; o < n.length; o++)
                  !0 === (r = n[o]).once && this.removeListener(e, r.listener),
                    r.listener.apply(this, t || []) ===
                      this._getOnceReturnValue() &&
                      this.removeListener(e, r.listener);
            return this;
          }),
          (i.trigger = a('emitEvent')),
          (i.emit = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t);
          }),
          (i.setOnceReturnValue = function (e) {
            return (this._onceReturnValue = e), this;
          }),
          (i._getOnceReturnValue = function () {
            return (
              !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue
            );
          }),
          (i._getEvents = function () {
            return this._events || (this._events = {});
          }),
          (o.noConflict = function () {
            return (t.EventEmitter = u), o;
          }),
          void 0 ===
            (r = function () {
              return o;
            }.call(t, n, t, e)) || (e.exports = r);
      })(this || {});
    },
    '5wX8': function (e, t) {
      var n = (e.exports = { version: '2.6.5' });
      'number' == typeof __e && (__e = n);
    },
    '5zJJ': function (e, t, n) {
      var r = n('IXQl')('match');
      e.exports = function (e) {
        var t = /./;
        try {
          '/./'[e](t);
        } catch (n) {
          try {
            return (t[r] = !1), !'/./'[e](t);
          } catch (e) {}
        }
        return !0;
      };
    },
    '6Ngl': function (e, t, n) {
      var r = n('12Rd'),
        o = n('H46L');
      e.exports = function (e) {
        return r(o(e));
      };
    },
    '6jKD': function (e, t, n) {
      'use strict';
      if (window._babelPolyfill)
        throw new Error('only one instance of babel/polyfill is allowed');
      (window._babelPolyfill = !0),
        n('F2Ge'),
        n('XDiO'),
        n('yyyB'),
        n('tB8R'),
        n('qUYv'),
        n('04I0'),
        n('elwX'),
        n('NX6/'),
        n('LHOG'),
        n('esfA'),
        n('iBVM'),
        n('ftsf'),
        n('mPZe'),
        n('1zYV'),
        n('C+zs'),
        n('bq52'),
        n('mz5e'),
        n('4O03'),
        n('gKOe'),
        n('YhSK'),
        n('NFwL'),
        n('1yTv'),
        n('EjkM'),
        n('9AMt'),
        n('voXF'),
        n('4Dbv'),
        n('B0EX'),
        n('xL+S'),
        n('a4n4'),
        n('n0SC'),
        n('uBJQ'),
        n('bI2D'),
        n('kIXF');
    },
    '7+od': function (e, t) {
      e.exports = function (e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
          case 0:
            return r ? e() : e.call(n);
          case 1:
            return r ? e(t[0]) : e.call(n, t[0]);
          case 2:
            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
          case 3:
            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
          case 4:
            return r
              ? e(t[0], t[1], t[2], t[3])
              : e.call(n, t[0], t[1], t[2], t[3]);
        }
        return e.apply(n, t);
      };
    },
    '8+VR': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'mobiletouch', function () {
          return o;
        }),
        n.d(t, 'touch', function () {
          return i;
        }),
        n.d(t, 'setClasses', function () {
          return u;
        });
      const r = 'ontouchstart' in window,
        o = r && 'onorientationchange' in window,
        i = r || !!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints;
      function u() {
        document.documentElement.classList.add(
          i ? 'feature-touch' : 'feature-no-touch',
          o ? 'feature-mobiletouch' : 'feature-no-mobiletouch',
        );
      }
    },
    '8ICS': function (e, t, n) {
      var r = n('5wX8'),
        o = n('KGgr'),
        i = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
      (e.exports = function (e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {});
      })('versions', []).push({
        version: r.version,
        mode: n('SwRI') ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
      });
    },
    '8ZkX': function (e, t, n) {
      'use strict';
      var r = n('xjCr'),
        o = n('PPId'),
        i = n('vRGa'),
        u = n('XSq2'),
        s = n('12Rd'),
        a = Object.assign;
      e.exports =
        !a ||
        n('u52/')(function () {
          var e = {},
            t = {},
            n = Symbol(),
            r = 'abcdefghijklmnopqrst';
          return (
            (e[n] = 7),
            r.split('').forEach(function (e) {
              t[e] = e;
            }),
            7 != a({}, e)[n] || Object.keys(a({}, t)).join('') != r
          );
        })
          ? function (e, t) {
              for (
                var n = u(e), a = arguments.length, d = 1, c = o.f, f = i.f;
                a > d;

              )
                for (
                  var l,
                    p = s(arguments[d++]),
                    h = c ? r(p).concat(c(p)) : r(p),
                    g = h.length,
                    _ = 0;
                  g > _;

                )
                  f.call(p, (l = h[_++])) && (n[l] = p[l]);
              return n;
            }
          : a;
    },
    '9AMt': function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('Blyn')(6),
        i = 'findIndex',
        u = !0;
      i in [] &&
        Array(1)[i](function () {
          u = !1;
        }),
        r(r.P + r.F * u, 'Array', {
          findIndex: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n('OlM/')(i);
    },
    '9S7S': function (e, t, n) {
      var r = n('zY5Q'),
        o = n('KGgr').document,
        i = r(o) && r(o.createElement);
      e.exports = function (e) {
        return i ? o.createElement(e) : {};
      };
    },
    '9TFj': function (e, t, n) {
      var r = n('zY5Q');
      e.exports = function (e) {
        if (!r(e)) throw TypeError(e + ' is not an object!');
        return e;
      };
    },
    AZRH: function (e, t, n) {
      var r = n('KGgr'),
        o = n('khJW'),
        i = n('isQe'),
        u = n('QqfT')('src'),
        s = n('pipr'),
        a = ('' + s).split('toString');
      (n('5wX8').inspectSource = function (e) {
        return s.call(e);
      }),
        (e.exports = function (e, t, n, s) {
          var d = 'function' == typeof n;
          d && (i(n, 'name') || o(n, 'name', t)),
            e[t] !== n &&
              (d && (i(n, u) || o(n, u, e[t] ? '' + e[t] : a.join(String(t)))),
              e === r
                ? (e[t] = n)
                : s
                ? e[t]
                  ? (e[t] = n)
                  : o(e, t, n)
                : (delete e[t], o(e, t, n)));
        })(Function.prototype, 'toString', function () {
          return ('function' == typeof this && this[u]) || s.call(this);
        });
    },
    AuAe: function (e, t, n) {
      var r = n('gPPl').f,
        o = n('isQe'),
        i = n('IXQl')('toStringTag');
      e.exports = function (e, t, n) {
        e &&
          !o((e = n ? e : e.prototype), i) &&
          r(e, i, { configurable: !0, value: t });
      };
    },
    B0EX: function (e, t, n) {
      'use strict';
      var r = n('285N'),
        o = n('utAV');
      e.exports = n('0+LD')(
        'Map',
        function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function (e) {
            var t = r.getEntry(o(this, 'Map'), e);
            return t && t.v;
          },
          set: function (e, t) {
            return r.def(o(this, 'Map'), 0 === e ? 0 : e, t);
          },
        },
        r,
        !0,
      );
    },
    B1QU: function (e, t, n) {
      var r = n('qKVQ');
      e.exports =
        Array.isArray ||
        function (e) {
          return 'Array' == r(e);
        };
    },
    BMTb: function (e, t, n) {
      var r = n('hvJ5'),
        o = n('Jdba'),
        i = n('lHEB'),
        u = n('9TFj'),
        s = n('bSmq'),
        a = n('f8KY'),
        d = {},
        c = {};
      ((t = e.exports = function (e, t, n, f, l) {
        var p,
          h,
          g,
          _,
          v = l
            ? function () {
                return e;
              }
            : a(e),
          y = r(n, f, t ? 2 : 1),
          b = 0;
        if ('function' != typeof v) throw TypeError(e + ' is not iterable!');
        if (i(v)) {
          for (p = s(e.length); p > b; b++)
            if ((_ = t ? y(u((h = e[b]))[0], h[1]) : y(e[b])) === d || _ === c)
              return _;
        } else
          for (g = v.call(e); !(h = g.next()).done; )
            if ((_ = o(g, y, h.value, t)) === d || _ === c) return _;
      }).BREAK = d),
        (t.RETURN = c);
    },
    Blyn: function (e, t, n) {
      var r = n('hvJ5'),
        o = n('12Rd'),
        i = n('XSq2'),
        u = n('bSmq'),
        s = n('1npb');
      e.exports = function (e, t) {
        var n = 1 == e,
          a = 2 == e,
          d = 3 == e,
          c = 4 == e,
          f = 6 == e,
          l = 5 == e || f,
          p = t || s;
        return function (t, s, h) {
          for (
            var g,
              _,
              v = i(t),
              y = o(v),
              b = r(s, h, 3),
              m = u(y.length),
              w = 0,
              x = n ? p(t, m) : a ? p(t, 0) : void 0;
            m > w;
            w++
          )
            if ((l || w in y) && ((_ = b((g = y[w]), w, v)), e))
              if (n) x[w] = _;
              else if (_)
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return g;
                  case 6:
                    return w;
                  case 2:
                    x.push(g);
                }
              else if (c) return !1;
          return f ? -1 : d || c ? c : x;
        };
      };
    },
    'C+zs': function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('iP0q')(!1);
      r(r.P, 'String', {
        codePointAt: function (e) {
          return o(this, e);
        },
      });
    },
    C9Yf: function (e, t, n) {
      var r = n('WJeB'),
        o = n('IbiK').concat('length', 'prototype');
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return r(e, o);
        };
    },
    D5V3: function (e, t, n) {
      'use strict';
      var r = n('gPPl'),
        o = n('yUtn');
      e.exports = function (e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : (e[t] = n);
      };
    },
    EjkM: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('Blyn')(5),
        i = !0;
      'find' in [] &&
        Array(1).find(function () {
          i = !1;
        }),
        r(r.P + r.F * i, 'Array', {
          find: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n('OlM/')('find');
    },
    F2Ge: function (e, t, n) {
      'use strict';
      var r = n('KGgr'),
        o = n('isQe'),
        i = n('nULH'),
        u = n('vVR7'),
        s = n('AZRH'),
        a = n('PAQY').KEY,
        d = n('u52/'),
        c = n('8ICS'),
        f = n('AuAe'),
        l = n('QqfT'),
        p = n('IXQl'),
        h = n('eKEP'),
        g = n('fkSf'),
        _ = n('12Jd'),
        v = n('B1QU'),
        y = n('9TFj'),
        b = n('zY5Q'),
        m = n('6Ngl'),
        w = n('YN/q'),
        x = n('yUtn'),
        k = n('Vrag'),
        S = n('s3mU'),
        O = n('/Hub'),
        j = n('gPPl'),
        E = n('xjCr'),
        P = O.f,
        L = j.f,
        R = S.f,
        A = r.Symbol,
        N = r.JSON,
        C = N && N.stringify,
        T = p('_hidden'),
        F = p('toPrimitive'),
        I = {}.propertyIsEnumerable,
        V = c('symbol-registry'),
        M = c('symbols'),
        z = c('op-symbols'),
        B = Object.prototype,
        q = 'function' == typeof A,
        U = r.QObject,
        D = !U || !U.prototype || !U.prototype.findChild,
        K =
          i &&
          d(function () {
            return (
              7 !=
              k(
                L({}, 'a', {
                  get: function () {
                    return L(this, 'a', { value: 7 }).a;
                  },
                }),
              ).a
            );
          })
            ? function (e, t, n) {
                var r = P(B, t);
                r && delete B[t], L(e, t, n), r && e !== B && L(B, t, r);
              }
            : L,
        H = function (e) {
          var t = (M[e] = k(A.prototype));
          return (t._k = e), t;
        },
        Q =
          q && 'symbol' == typeof A.iterator
            ? function (e) {
                return 'symbol' == typeof e;
              }
            : function (e) {
                return e instanceof A;
              },
        W = function (e, t, n) {
          return (
            e === B && W(z, t, n),
            y(e),
            (t = w(t, !0)),
            y(n),
            o(M, t)
              ? (n.enumerable
                  ? (o(e, T) && e[T][t] && (e[T][t] = !1),
                    (n = k(n, { enumerable: x(0, !1) })))
                  : (o(e, T) || L(e, T, x(1, {})), (e[T][t] = !0)),
                K(e, t, n))
              : L(e, t, n)
          );
        },
        J = function (e, t) {
          y(e);
          for (var n, r = _((t = m(t))), o = 0, i = r.length; i > o; )
            W(e, (n = r[o++]), t[n]);
          return e;
        },
        Y = function (e) {
          var t = I.call(this, (e = w(e, !0)));
          return (
            !(this === B && o(M, e) && !o(z, e)) &&
            (!(t || !o(this, e) || !o(M, e) || (o(this, T) && this[T][e])) || t)
          );
        },
        X = function (e, t) {
          if (((e = m(e)), (t = w(t, !0)), e !== B || !o(M, t) || o(z, t))) {
            var n = P(e, t);
            return (
              !n || !o(M, t) || (o(e, T) && e[T][t]) || (n.enumerable = !0), n
            );
          }
        },
        $ = function (e) {
          for (var t, n = R(m(e)), r = [], i = 0; n.length > i; )
            o(M, (t = n[i++])) || t == T || t == a || r.push(t);
          return r;
        },
        G = function (e) {
          for (
            var t, n = e === B, r = R(n ? z : m(e)), i = [], u = 0;
            r.length > u;

          )
            !o(M, (t = r[u++])) || (n && !o(B, t)) || i.push(M[t]);
          return i;
        };
      q ||
        (s(
          (A = function () {
            if (this instanceof A)
              throw TypeError('Symbol is not a constructor!');
            var e = l(arguments.length > 0 ? arguments[0] : void 0),
              t = function (n) {
                this === B && t.call(z, n),
                  o(this, T) && o(this[T], e) && (this[T][e] = !1),
                  K(this, e, x(1, n));
              };
            return i && D && K(B, e, { configurable: !0, set: t }), H(e);
          }).prototype,
          'toString',
          function () {
            return this._k;
          },
        ),
        (O.f = X),
        (j.f = W),
        (n('C9Yf').f = S.f = $),
        (n('vRGa').f = Y),
        (n('PPId').f = G),
        i && !n('SwRI') && s(B, 'propertyIsEnumerable', Y, !0),
        (h.f = function (e) {
          return H(p(e));
        })),
        u(u.G + u.W + u.F * !q, { Symbol: A });
      for (
        var Z = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ',',
          ),
          ee = 0;
        Z.length > ee;

      )
        p(Z[ee++]);
      for (var te = E(p.store), ne = 0; te.length > ne; ) g(te[ne++]);
      u(u.S + u.F * !q, 'Symbol', {
        for: function (e) {
          return o(V, (e += '')) ? V[e] : (V[e] = A(e));
        },
        keyFor: function (e) {
          if (!Q(e)) throw TypeError(e + ' is not a symbol!');
          for (var t in V) if (V[t] === e) return t;
        },
        useSetter: function () {
          D = !0;
        },
        useSimple: function () {
          D = !1;
        },
      }),
        u(u.S + u.F * !q, 'Object', {
          create: function (e, t) {
            return void 0 === t ? k(e) : J(k(e), t);
          },
          defineProperty: W,
          defineProperties: J,
          getOwnPropertyDescriptor: X,
          getOwnPropertyNames: $,
          getOwnPropertySymbols: G,
        }),
        N &&
          u(
            u.S +
              u.F *
                (!q ||
                  d(function () {
                    var e = A();
                    return (
                      '[null]' != C([e]) ||
                      '{}' != C({ a: e }) ||
                      '{}' != C(Object(e))
                    );
                  })),
            'JSON',
            {
              stringify: function (e) {
                for (var t, n, r = [e], o = 1; arguments.length > o; )
                  r.push(arguments[o++]);
                if (((n = t = r[1]), (b(t) || void 0 !== e) && !Q(e)))
                  return (
                    v(t) ||
                      (t = function (e, t) {
                        if (
                          ('function' == typeof n && (t = n.call(this, e, t)),
                          !Q(t))
                        )
                          return t;
                      }),
                    (r[1] = t),
                    C.apply(N, r)
                  );
              },
            },
          ),
        A.prototype[F] || n('khJW')(A.prototype, F, A.prototype.valueOf),
        f(A, 'Symbol'),
        f(Math, 'Math', !0),
        f(r.JSON, 'JSON', !0);
    },
    Fu1i: function (e, t, n) {
      'use strict';
      var r = n('SwRI'),
        o = n('vVR7'),
        i = n('AZRH'),
        u = n('khJW'),
        s = n('V3uq'),
        a = n('R99l'),
        d = n('AuAe'),
        c = n('pZZ2'),
        f = n('IXQl')('iterator'),
        l = !([].keys && 'next' in [].keys()),
        p = function () {
          return this;
        };
      e.exports = function (e, t, n, h, g, _, v) {
        a(n, t, h);
        var y,
          b,
          m,
          w = function (e) {
            if (!l && e in O) return O[e];
            switch (e) {
              case 'keys':
              case 'values':
                return function () {
                  return new n(this, e);
                };
            }
            return function () {
              return new n(this, e);
            };
          },
          x = t + ' Iterator',
          k = 'values' == g,
          S = !1,
          O = e.prototype,
          j = O[f] || O['@@iterator'] || (g && O[g]),
          E = j || w(g),
          P = g ? (k ? w('entries') : E) : void 0,
          L = ('Array' == t && O.entries) || j;
        if (
          (L &&
            (m = c(L.call(new e()))) !== Object.prototype &&
            m.next &&
            (d(m, x, !0), r || 'function' == typeof m[f] || u(m, f, p)),
          k &&
            j &&
            'values' !== j.name &&
            ((S = !0),
            (E = function () {
              return j.call(this);
            })),
          (r && !v) || (!l && !S && O[f]) || u(O, f, E),
          (s[t] = E),
          (s[x] = p),
          g)
        )
          if (
            ((y = {
              values: k ? E : w('values'),
              keys: _ ? E : w('keys'),
              entries: P,
            }),
            v)
          )
            for (b in y) b in O || i(O, b, y[b]);
          else o(o.P + o.F * (l || S), t, y);
        return y;
      };
    },
    H46L: function (e, t) {
      e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e;
      };
    },
    HbRj: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('ogJP');
      const o = /{(\w+)}/g,
        i = /{(\d+)}/g;
      String.prototype.format = function (...e) {
        const t = Object(r.isObject)(e[0]),
          n = t ? o : i,
          u = t
            ? (t, n) => {
                const r = e[0];
                return void 0 !== r[n] ? r[n] : t;
              }
            : (t, n) => {
                const r = parseInt(n, 10),
                  o = e[r];
                return void 0 !== o ? o : t;
              };
        return this.replace(n, u);
      };
    },
    IXQl: function (e, t, n) {
      var r = n('8ICS')('wks'),
        o = n('QqfT'),
        i = n('KGgr').Symbol,
        u = 'function' == typeof i;
      (e.exports = function (e) {
        return r[e] || (r[e] = (u && i[e]) || (u ? i : o)('Symbol.' + e));
      }).store = r;
    },
    IbiK: function (e, t) {
      e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ',',
      );
    },
    IxbO: function (e, t, n) {
      var r = n('qKVQ'),
        o = n('IXQl')('toStringTag'),
        i =
          'Arguments' ==
          r(
            (function () {
              return arguments;
            })(),
          );
      e.exports = function (e) {
        var t, n, u;
        return void 0 === e
          ? 'Undefined'
          : null === e
          ? 'Null'
          : 'string' ==
            typeof (n = (function (e, t) {
              try {
                return e[t];
              } catch (e) {}
            })((t = Object(e)), o))
          ? n
          : i
          ? r(t)
          : 'Object' == (u = r(t)) && 'function' == typeof t.callee
          ? 'Arguments'
          : u;
      };
    },
    IzLi: function (e, t, n) {
      'use strict';
      t.a = function (e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      };
    },
    JX7q: function (e, t, n) {
      'use strict';
      function r(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    Jdba: function (e, t, n) {
      var r = n('9TFj');
      e.exports = function (e, t, n, o) {
        try {
          return o ? t(r(n)[0], n[1]) : t(n);
        } catch (t) {
          var i = e.return;
          throw (void 0 !== i && r(i.call(e)), t);
        }
      };
    },
    JwWU: function (e, t) {
      e.exports = function (e, t) {
        return { value: t, done: !!e };
      };
    },
    KGgr: function (e, t) {
      var n = (e.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')());
      'number' == typeof __g && (__g = n);
    },
    Kc4g: function (e, t, n) {
      var r = n('zY5Q'),
        o = Math.floor;
      e.exports = function (e) {
        return !r(e) && isFinite(e) && o(e) === e;
      };
    },
    Kxc7: function (e, t, n) {
      var r = n('qlfx'),
        o = {},
        i = {},
        u = {},
        s = {
          init: function () {
            var e, t;
            Object.keys(r).forEach(function (n) {
              (e = r[n]),
                (t = e.subsets),
                Array.isArray(t)
                  ? t.forEach(function (e) {
                      o[e] = 1;
                    })
                  : t &&
                    Object.keys(t).forEach(function (e) {
                      o[e] = 1;
                    }),
                (o[n] = 1);
            });
            var n,
              a = Object.keys(o);
            a.forEach(function (e) {
              a.forEach(function (o) {
                if (void 0 !== (n = r[o])) {
                  if (!(t = n.subsets)) return;
                  i.hasOwnProperty(e) || (i[e] = []),
                    ((Array.isArray(t) && ~t.indexOf(e)) || e in t) &&
                      i[e].push(o);
                }
              });
            }),
              'undefined' != typeof __initialDisabledFeaturesets &&
                __initialDisabledFeaturesets &&
                __initialDisabledFeaturesets.forEach(function (e) {
                  s.disable(e);
                }),
              'undefined' != typeof __initialEnabledFeaturesets &&
                __initialEnabledFeaturesets &&
                __initialEnabledFeaturesets.forEach(function (e) {
                  s.enable(e);
                }),
              'undefined' != typeof window && (window.Featuresets = s),
              (this.meta = {
                _uniqueSetsNames: o,
                _setsReverseDependencies: i,
                _setsStates: u,
              });
          },
          enabled: function (e) {
            var t = function (e) {
              var n = i.hasOwnProperty(e) ? i[e] : [];
              if (!1 === u[e]) return !1;
              for (var r = u[e], o = 0; o < n.length; ++o) r |= t(n[o]);
              return r;
            };
            return !!t(e);
          },
          enable: function (e) {
            u[e] = !0;
          },
          disable: function (e) {
            u[e] = !1;
          },
          setEnabled: function (e, t) {
            u[e] = !!t;
          },
          getAllFeatures: function () {
            var e = {};
            return (
              Object.keys(o).forEach(function (t) {
                e[t] = u[t];
              }),
              e
            );
          },
        };
      s.init(), (e.exports = s);
    },
    LHOG: function (e, t, n) {
      var r = n('vVR7'),
        o = n('hrFL');
      r(r.S + r.F * (Number.parseFloat != o), 'Number', { parseFloat: o });
    },
    NFwL: function (e, t, n) {
      'use strict';
      var r = n('hvJ5'),
        o = n('vVR7'),
        i = n('XSq2'),
        u = n('Jdba'),
        s = n('lHEB'),
        a = n('bSmq'),
        d = n('D5V3'),
        c = n('f8KY');
      o(
        o.S +
          o.F *
            !n('zP2l')(function (e) {
              Array.from(e);
            }),
        'Array',
        {
          from: function (e) {
            var t,
              n,
              o,
              f,
              l = i(e),
              p = 'function' == typeof this ? this : Array,
              h = arguments.length,
              g = h > 1 ? arguments[1] : void 0,
              _ = void 0 !== g,
              v = 0,
              y = c(l);
            if (
              (_ && (g = r(g, h > 2 ? arguments[2] : void 0, 2)),
              null == y || (p == Array && s(y)))
            )
              for (n = new p((t = a(l.length))); t > v; v++)
                d(n, v, _ ? g(l[v], v) : l[v]);
            else
              for (f = y.call(l), n = new p(); !(o = f.next()).done; v++)
                d(n, v, _ ? u(f, g, [o.value, v], !0) : o.value);
            return (n.length = v), n;
          },
        },
      );
    },
    'NX6/': function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Number', { MIN_SAFE_INTEGER: -9007199254740991 });
    },
    'O6f/': function (e, t, n) {
      e.exports =
        !n('nULH') &&
        !n('u52/')(function () {
          return (
            7 !=
            Object.defineProperty(n('9S7S')('div'), 'a', {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    OHC2: function (e, t, n) {
      var r = n('AZRH');
      e.exports = function (e, t, n) {
        for (var o in t) r(e, o, t[o], n);
        return e;
      };
    },
    OKbE: function (e, t) {
      e.exports = function (e, t, n, r) {
        if (!(e instanceof t) || (void 0 !== r && r in e))
          throw TypeError(n + ': incorrect invocation!');
        return e;
      };
    },
    'OlM/': function (e, t, n) {
      var r = n('IXQl')('unscopables'),
        o = Array.prototype;
      null == o[r] && n('khJW')(o, r, {}),
        (e.exports = function (e) {
          o[r][e] = !0;
        });
    },
    OpLF: function (e, t, n) {
      var r = n('KGgr').document;
      e.exports = r && r.documentElement;
    },
    PAQY: function (e, t, n) {
      var r = n('QqfT')('meta'),
        o = n('zY5Q'),
        i = n('isQe'),
        u = n('gPPl').f,
        s = 0,
        a =
          Object.isExtensible ||
          function () {
            return !0;
          },
        d = !n('u52/')(function () {
          return a(Object.preventExtensions({}));
        }),
        c = function (e) {
          u(e, r, { value: { i: 'O' + ++s, w: {} } });
        },
        f = (e.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function (e, t) {
            if (!o(e))
              return 'symbol' == typeof e
                ? e
                : ('string' == typeof e ? 'S' : 'P') + e;
            if (!i(e, r)) {
              if (!a(e)) return 'F';
              if (!t) return 'E';
              c(e);
            }
            return e[r].i;
          },
          getWeak: function (e, t) {
            if (!i(e, r)) {
              if (!a(e)) return !0;
              if (!t) return !1;
              c(e);
            }
            return e[r].w;
          },
          onFreeze: function (e) {
            return d && f.NEED && a(e) && !i(e, r) && c(e), e;
          },
        });
    },
    PPId: function (e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    QqfT: function (e, t) {
      var n = 0,
        r = Math.random();
      e.exports = function (e) {
        return 'Symbol('.concat(
          void 0 === e ? '' : e,
          ')_',
          (++n + r).toString(36),
        );
      };
    },
    R99l: function (e, t, n) {
      'use strict';
      var r = n('Vrag'),
        o = n('yUtn'),
        i = n('AuAe'),
        u = {};
      n('khJW')(u, n('IXQl')('iterator'), function () {
        return this;
      }),
        (e.exports = function (e, t, n) {
          (e.prototype = r(u, { next: o(1, n) })), i(e, t + ' Iterator');
        });
    },
    SYQx: function (e, t, n) {
      var r = n('gPPl'),
        o = n('9TFj'),
        i = n('xjCr');
      e.exports = n('nULH')
        ? Object.defineProperties
        : function (e, t) {
            o(e);
            for (var n, u = i(t), s = u.length, a = 0; s > a; )
              r.f(e, (n = u[a++]), t[n]);
            return e;
          };
    },
    SwRI: function (e, t) {
      e.exports = !1;
    },
    T0pI: function (e, t, n) {
      var r = n('KGgr').parseInt,
        o = n('W+In').trim,
        i = n('YqzG'),
        u = /^[-+]?0[xX]/;
      e.exports =
        8 !== r(i + '08') || 22 !== r(i + '0x16')
          ? function (e, t) {
              var n = o(String(e), 3);
              return r(n, t >>> 0 || (u.test(n) ? 16 : 10));
            }
          : r;
    },
    TnYX: function (e, t) {
      e.exports = function (e) {
        try {
          return { e: !1, v: e() };
        } catch (e) {
          return { e: !0, v: e };
        }
      };
    },
    UXvI: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('hbEN'),
        o = n('IzLi');
      t.default = function (e, t, n) {
        var i = !0,
          u = !0;
        if ('function' != typeof e) throw new TypeError('Expected a function');
        return (
          Object(o.a)(n) &&
            ((i = 'leading' in n ? !!n.leading : i),
            (u = 'trailing' in n ? !!n.trailing : u)),
          Object(r.default)(e, t, { leading: i, maxWait: t, trailing: u })
        );
      };
    },
    UyYM: function (e, t, n) {
      'use strict';
      var r = n('1Vm/');
      function o(e) {
        var t, n;
        (this.promise = new e(function (e, r) {
          if (void 0 !== t || void 0 !== n)
            throw TypeError('Bad Promise constructor');
          (t = e), (n = r);
        })),
          (this.resolve = r(t)),
          (this.reject = r(n));
      }
      e.exports.f = function (e) {
        return new o(e);
      };
    },
    V3uq: function (e, t) {
      e.exports = {};
    },
    VgLE: function (e, t, n) {
      var r = n('/B3w'),
        o = Math.max,
        i = Math.min;
      e.exports = function (e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t);
      };
    },
    Vrag: function (e, t, n) {
      var r = n('9TFj'),
        o = n('SYQx'),
        i = n('IbiK'),
        u = n('pND+')('IE_PROTO'),
        s = function () {},
        a = function () {
          var e,
            t = n('9S7S')('iframe'),
            r = i.length;
          for (
            t.style.display = 'none',
              n('OpLF').appendChild(t),
              t.src = 'javascript:',
              (e = t.contentWindow.document).open(),
              e.write('<script>document.F=Object</script>'),
              e.close(),
              a = e.F;
            r--;

          )
            delete a.prototype[i[r]];
          return a();
        };
      e.exports =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((s.prototype = r(e)),
                (n = new s()),
                (s.prototype = null),
                (n[u] = e))
              : (n = a()),
            void 0 === t ? n : o(n, t)
          );
        };
    },
    VymR: function (e, t, n) {
      'use strict';
      var r = (function () {
        var e = {
            base: 'https://twemoji.maxcdn.com/v/13.0.1/',
            ext: '.png',
            size: '72x72',
            className: 'emoji',
            convert: {
              fromCodePoint: function (e) {
                var t = 'string' == typeof e ? parseInt(e, 16) : e;
                if (t < 65536) return s(t);
                return s(55296 + ((t -= 65536) >> 10), 56320 + (1023 & t));
              },
              toCodePoint: _,
            },
            onerror: function () {
              this.parentNode &&
                this.parentNode.replaceChild(a(this.alt, !1), this);
            },
            parse: function (t, n) {
              (n && 'function' != typeof n) || (n = { callback: n });
              return ('string' == typeof t ? l : f)(t, {
                callback: n.callback || d,
                attributes:
                  'function' == typeof n.attributes ? n.attributes : h,
                base: 'string' == typeof n.base ? n.base : e.base,
                ext: n.ext || e.ext,
                size:
                  n.folder ||
                  ((r = n.size || e.size),
                  'number' == typeof r ? r + 'x' + r : r),
                className: n.className || e.className,
                onerror: n.onerror || e.onerror,
              });
              var r;
            },
            replace: g,
            test: function (e) {
              n.lastIndex = 0;
              var t = n.test(e);
              return (n.lastIndex = 0), t;
            },
          },
          t = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;',
          },
          n = /(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
          r = /\uFE0F/g,
          o = String.fromCharCode(8205),
          i = /[&<>'"]/g,
          u = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
          s = String.fromCharCode;
        return e;
        function a(e, t) {
          return document.createTextNode(t ? e.replace(r, '') : e);
        }
        function d(e, t) {
          return ''.concat(t.base, t.size, '/', e, t.ext);
        }
        function c(e) {
          return _(e.indexOf(o) < 0 ? e.replace(r, '') : e);
        }
        function f(e, t) {
          for (
            var r,
              o,
              i,
              s,
              d,
              f,
              l,
              p,
              h,
              g,
              _,
              v,
              y,
              b = (function e(t, n) {
                for (var r, o, i = t.childNodes, s = i.length; s--; )
                  3 === (o = (r = i[s]).nodeType)
                    ? n.push(r)
                    : 1 !== o ||
                      ('ownerSVGElement' in r) ||
                      u.test(r.nodeName.toLowerCase()) ||
                      e(r, n);
                return n;
              })(e, []),
              m = b.length;
            m--;

          ) {
            for (
              i = !1,
                s = document.createDocumentFragment(),
                f = (d = b[m]).nodeValue,
                p = 0;
              (l = n.exec(f));

            ) {
              if (
                ((h = l.index) !== p && s.appendChild(a(f.slice(p, h), !0)),
                (v = c((_ = l[0]))),
                (p = h + _.length),
                (y = t.callback(v, t)),
                v && y)
              ) {
                for (o in (((g = new Image()).onerror = t.onerror),
                g.setAttribute('draggable', 'false'),
                (r = t.attributes(_, v))))
                  r.hasOwnProperty(o) &&
                    0 !== o.indexOf('on') &&
                    !g.hasAttribute(o) &&
                    g.setAttribute(o, r[o]);
                (g.className = t.className),
                  (g.alt = _),
                  (g.src = y),
                  (i = !0),
                  s.appendChild(g);
              }
              g || s.appendChild(a(_, !1)), (g = null);
            }
            i &&
              (p < f.length && s.appendChild(a(f.slice(p), !0)),
              d.parentNode.replaceChild(s, d));
          }
          return e;
        }
        function l(e, t) {
          return g(e, function (e) {
            var n,
              r,
              o = e,
              u = c(e),
              s = t.callback(u, t);
            if (u && s) {
              for (r in ((o = '<img '.concat(
                'class="',
                t.className,
                '" ',
                'draggable="false" ',
                'alt="',
                e,
                '"',
                ' src="',
                s,
                '"',
              )),
              (n = t.attributes(e, u))))
                n.hasOwnProperty(r) &&
                  0 !== r.indexOf('on') &&
                  -1 === o.indexOf(' ' + r + '=') &&
                  (o = o.concat(' ', r, '="', n[r].replace(i, p), '"'));
              o = o.concat('/>');
            }
            return o;
          });
        }
        function p(e) {
          return t[e];
        }
        function h() {
          return null;
        }
        function g(e, t) {
          return String(e).replace(n, t);
        }
        function _(e, t) {
          for (var n = [], r = 0, o = 0, i = 0; i < e.length; )
            (r = e.charCodeAt(i++)),
              o
                ? (n.push(
                    (65536 + ((o - 55296) << 10) + (r - 56320)).toString(16),
                  ),
                  (o = 0))
                : 55296 <= r && r <= 56319
                ? (o = r)
                : n.push(r.toString(16));
          return n.join(t || '-');
        }
      })();
      t.a = r;
    },
    'W+In': function (e, t, n) {
      var r = n('vVR7'),
        o = n('H46L'),
        i = n('u52/'),
        u = n('YqzG'),
        s = '[' + u + ']',
        a = RegExp('^' + s + s + '*'),
        d = RegExp(s + s + '*$'),
        c = function (e, t, n) {
          var o = {},
            s = i(function () {
              return !!u[e]() || '​' != '​'[e]();
            }),
            a = (o[e] = s ? t(f) : u[e]);
          n && (o[n] = a), r(r.P + r.F * s, 'String', o);
        },
        f = (c.trim = function (e, t) {
          return (
            (e = String(o(e))),
            1 & t && (e = e.replace(a, '')),
            2 & t && (e = e.replace(d, '')),
            e
          );
        });
      e.exports = c;
    },
    WJeB: function (e, t, n) {
      var r = n('isQe'),
        o = n('6Ngl'),
        i = n('WnSb')(!1),
        u = n('pND+')('IE_PROTO');
      e.exports = function (e, t) {
        var n,
          s = o(e),
          a = 0,
          d = [];
        for (n in s) n != u && r(s, n) && d.push(n);
        for (; t.length > a; ) r(s, (n = t[a++])) && (~i(d, n) || d.push(n));
        return d;
      };
    },
    WnSb: function (e, t, n) {
      var r = n('6Ngl'),
        o = n('bSmq'),
        i = n('VgLE');
      e.exports = function (e) {
        return function (t, n, u) {
          var s,
            a = r(t),
            d = o(a.length),
            c = i(u, d);
          if (e && n != n) {
            for (; d > c; ) if ((s = a[c++]) != s) return !0;
          } else
            for (; d > c; c++)
              if ((e || c in a) && a[c] === n) return e || c || 0;
          return !e && -1;
        };
      };
    },
    XDiO: function (e, t, n) {
      var r = n('vVR7');
      r(r.S + r.F, 'Object', { assign: n('8ZkX') });
    },
    XSq2: function (e, t, n) {
      var r = n('H46L');
      e.exports = function (e) {
        return Object(r(e));
      };
    },
    XqMk: function (e, t, n) {
      'use strict';
      (function (e) {
        var n = 'object' == typeof e && e && e.Object === Object && e;
        t.a = n;
      }.call(this, n('yLpj')));
    },
    YFKU: function (e, t, n) {
      'use strict';
      n.r(t);
      const r = window;
      function o(e) {
        window.t = e;
      }
      function i(e) {
        r.$ || (r.$ = {}), (r.$.t = e);
      }
      const u = (e, t) => e;
      function s(e) {
        return (s =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      o(u), i(u);
      var a = n('rePB');
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? Object(arguments[t]) : {},
            r = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }),
            )),
            r.forEach(function (t) {
              Object(a.a)(e, t, n[t]);
            });
        }
        return e;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e, t, n) {
        return t && f(e.prototype, t), n && f(e, n), e;
      }
      var p = n('JX7q');
      function h(e, t) {
        return !t || ('object' !== s(t) && 'function' != typeof t)
          ? Object(p.a)(e)
          : t;
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _(e, t) {
        return (_ =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function v(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && _(e, t);
      }
      var y = {
          type: 'logger',
          log: function (e) {
            this.output('log', e);
          },
          warn: function (e) {
            this.output('warn', e);
          },
          error: function (e) {
            this.output('error', e);
          },
          output: function (e, t) {
            console && console[e] && console[e].apply(console, t);
          },
        },
        b = new ((function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            c(this, e), this.init(t, n);
          }
          return (
            l(e, [
              {
                key: 'init',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.prefix = t.prefix || 'i18next:'),
                    (this.logger = e || y),
                    (this.options = t),
                    (this.debug = t.debug);
                },
              },
              {
                key: 'setDebug',
                value: function (e) {
                  this.debug = e;
                },
              },
              {
                key: 'log',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'log', '', !0);
                },
              },
              {
                key: 'warn',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'warn', '', !0);
                },
              },
              {
                key: 'error',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'error', '');
                },
              },
              {
                key: 'deprecate',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
                },
              },
              {
                key: 'forward',
                value: function (e, t, n, r) {
                  return r && !this.debug
                    ? null
                    : ('string' == typeof e[0] &&
                        (e[0] = ''
                          .concat(n)
                          .concat(this.prefix, ' ')
                          .concat(e[0])),
                      this.logger[t](e));
                },
              },
              {
                key: 'create',
                value: function (t) {
                  return new e(
                    this.logger,
                    d(
                      {},
                      { prefix: ''.concat(this.prefix, ':').concat(t, ':') },
                      this.options,
                    ),
                  );
                },
              },
            ]),
            e
          );
        })())(),
        m = (function () {
          function e() {
            c(this, e), (this.observers = {});
          }
          return (
            l(e, [
              {
                key: 'on',
                value: function (e, t) {
                  var n = this;
                  return (
                    e.split(' ').forEach(function (e) {
                      (n.observers[e] = n.observers[e] || []),
                        n.observers[e].push(t);
                    }),
                    this
                  );
                },
              },
              {
                key: 'off',
                value: function (e, t) {
                  this.observers[e] &&
                    (t
                      ? (this.observers[e] = this.observers[e].filter(function (
                          e,
                        ) {
                          return e !== t;
                        }))
                      : delete this.observers[e]);
                },
              },
              {
                key: 'emit',
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  if (this.observers[e]) {
                    var o = [].concat(this.observers[e]);
                    o.forEach(function (e) {
                      e.apply(void 0, n);
                    });
                  }
                  if (this.observers['*']) {
                    var i = [].concat(this.observers['*']);
                    i.forEach(function (t) {
                      t.apply(t, [e].concat(n));
                    });
                  }
                },
              },
            ]),
            e
          );
        })();
      function w() {
        var e,
          t,
          n = new Promise(function (n, r) {
            (e = n), (t = r);
          });
        return (n.resolve = e), (n.reject = t), n;
      }
      function x(e) {
        return null == e ? '' : '' + e;
      }
      function k(e, t, n) {
        e.forEach(function (e) {
          t[e] && (n[e] = t[e]);
        });
      }
      function S(e, t, n) {
        function r(e) {
          return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e;
        }
        function o() {
          return !e || 'string' == typeof e;
        }
        for (
          var i = 'string' != typeof t ? [].concat(t) : t.split('.');
          i.length > 1;

        ) {
          if (o()) return {};
          var u = r(i.shift());
          !e[u] && n && (e[u] = new n()), (e = e[u]);
        }
        return o() ? {} : { obj: e, k: r(i.shift()) };
      }
      function O(e, t, n) {
        var r = S(e, t, Object);
        r.obj[r.k] = n;
      }
      function j(e, t) {
        var n = S(e, t),
          r = n.obj,
          o = n.k;
        if (r) return r[o];
      }
      function E(e, t, n) {
        var r = j(e, n);
        return void 0 !== r ? r : j(t, n);
      }
      function P(e, t, n) {
        for (var r in t)
          '__proto__' !== r &&
            (r in e
              ? 'string' == typeof e[r] ||
                e[r] instanceof String ||
                'string' == typeof t[r] ||
                t[r] instanceof String
                ? n && (e[r] = t[r])
                : P(e[r], t[r], n)
              : (e[r] = t[r]));
        return e;
      }
      function L(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      }
      var R = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      };
      function A(e) {
        return 'string' == typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return R[e];
            })
          : e;
      }
      var N =
          'undefined' != typeof window &&
          window.navigator &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf('MSIE') > -1,
        C = (function (e) {
          function t(e) {
            var n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ['translation'], defaultNS: 'translation' };
            return (
              c(this, t),
              (n = h(this, g(t).call(this))),
              N && m.call(Object(p.a)(n)),
              (n.data = e || {}),
              (n.options = r),
              void 0 === n.options.keySeparator &&
                (n.options.keySeparator = '.'),
              n
            );
          }
          return (
            v(t, e),
            l(t, [
              {
                key: 'addNamespaces',
                value: function (e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                },
              },
              {
                key: 'removeNamespaces',
                value: function (e) {
                  var t = this.options.ns.indexOf(e);
                  t > -1 && this.options.ns.splice(t, 1);
                },
              },
              {
                key: 'getResource',
                value: function (e, t, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    o =
                      void 0 !== r.keySeparator
                        ? r.keySeparator
                        : this.options.keySeparator,
                    i = [e, t];
                  return (
                    n && 'string' != typeof n && (i = i.concat(n)),
                    n &&
                      'string' == typeof n &&
                      (i = i.concat(o ? n.split(o) : n)),
                    e.indexOf('.') > -1 && (i = e.split('.')),
                    j(this.data, i)
                  );
                },
              },
              {
                key: 'addResource',
                value: function (e, t, n, r) {
                  var o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    i = this.options.keySeparator;
                  void 0 === i && (i = '.');
                  var u = [e, t];
                  n && (u = u.concat(i ? n.split(i) : n)),
                    e.indexOf('.') > -1 &&
                      ((r = t), (t = (u = e.split('.'))[1])),
                    this.addNamespaces(t),
                    O(this.data, u, r),
                    o.silent || this.emit('added', e, t, n, r);
                },
              },
              {
                key: 'addResources',
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 };
                  for (var o in n)
                    ('string' != typeof n[o] &&
                      '[object Array]' !==
                        Object.prototype.toString.apply(n[o])) ||
                      this.addResource(e, t, o, n[o], { silent: !0 });
                  r.silent || this.emit('added', e, t, n);
                },
              },
              {
                key: 'addResourceBundle',
                value: function (e, t, n, r, o) {
                  var i =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    u = [e, t];
                  e.indexOf('.') > -1 &&
                    ((r = n), (n = t), (t = (u = e.split('.'))[1])),
                    this.addNamespaces(t);
                  var s = j(this.data, u) || {};
                  r ? P(s, n, o) : (s = d({}, s, n)),
                    O(this.data, u, s),
                    i.silent || this.emit('added', e, t, n);
                },
              },
              {
                key: 'removeResourceBundle',
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit('removed', e, t);
                },
              },
              {
                key: 'hasResourceBundle',
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t);
                },
              },
              {
                key: 'getResourceBundle',
                value: function (e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    'v1' === this.options.compatibilityAPI
                      ? d({}, {}, this.getResource(e, t))
                      : this.getResource(e, t)
                  );
                },
              },
              {
                key: 'getDataByLanguage',
                value: function (e) {
                  return this.data[e];
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this.data;
                },
              },
            ]),
            t
          );
        })(m),
        T = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e;
          },
          handle: function (e, t, n, r, o) {
            var i = this;
            return (
              e.forEach(function (e) {
                i.processors[e] && (t = i.processors[e].process(t, n, r, o));
              }),
              t
            );
          },
        },
        F = {},
        I = (function (e) {
          function t(e) {
            var n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              c(this, t),
              (n = h(this, g(t).call(this))),
              N && m.call(Object(p.a)(n)),
              k(
                [
                  'resourceStore',
                  'languageUtils',
                  'pluralResolver',
                  'interpolator',
                  'backendConnector',
                  'i18nFormat',
                  'utils',
                ],
                e,
                Object(p.a)(n),
              ),
              (n.options = r),
              void 0 === n.options.keySeparator &&
                (n.options.keySeparator = '.'),
              (n.logger = b.create('translator')),
              n
            );
          }
          return (
            v(t, e),
            l(t, [
              {
                key: 'changeLanguage',
                value: function (e) {
                  e && (this.language = e);
                },
              },
              {
                key: 'exists',
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} },
                    n = this.resolve(e, t);
                  return n && void 0 !== n.res;
                },
              },
              {
                key: 'extractFromKey',
                value: function (e, t) {
                  var n =
                    void 0 !== t.nsSeparator
                      ? t.nsSeparator
                      : this.options.nsSeparator;
                  void 0 === n && (n = ':');
                  var r =
                      void 0 !== t.keySeparator
                        ? t.keySeparator
                        : this.options.keySeparator,
                    o = t.ns || this.options.defaultNS;
                  if (n && e.indexOf(n) > -1) {
                    var i = e.match(this.interpolator.nestingRegexp);
                    if (i && i.length > 0) return { key: e, namespaces: o };
                    var u = e.split(n);
                    (n !== r ||
                      (n === r && this.options.ns.indexOf(u[0]) > -1)) &&
                      (o = u.shift()),
                      (e = u.join(r));
                  }
                  return (
                    'string' == typeof o && (o = [o]), { key: e, namespaces: o }
                  );
                },
              },
              {
                key: 'translate',
                value: function (e, t, n) {
                  var r = this;
                  if (
                    ('object' !== s(t) &&
                      this.options.overloadTranslationOptionHandler &&
                      (t = this.options.overloadTranslationOptionHandler(
                        arguments,
                      )),
                    t || (t = {}),
                    null == e)
                  )
                    return '';
                  Array.isArray(e) || (e = [String(e)]);
                  var o =
                      void 0 !== t.keySeparator
                        ? t.keySeparator
                        : this.options.keySeparator,
                    i = this.extractFromKey(e[e.length - 1], t),
                    u = i.key,
                    a = i.namespaces,
                    c = a[a.length - 1],
                    f = t.lng || this.language,
                    l =
                      t.appendNamespaceToCIMode ||
                      this.options.appendNamespaceToCIMode;
                  if (f && 'cimode' === f.toLowerCase()) {
                    if (l) {
                      var p = t.nsSeparator || this.options.nsSeparator;
                      return c + p + u;
                    }
                    return u;
                  }
                  var h = this.resolve(e, t),
                    g = h && h.res,
                    _ = (h && h.usedKey) || u,
                    v = (h && h.exactUsedKey) || u,
                    y = Object.prototype.toString.apply(g),
                    b = [
                      '[object Number]',
                      '[object Function]',
                      '[object RegExp]',
                    ],
                    m =
                      void 0 !== t.joinArrays
                        ? t.joinArrays
                        : this.options.joinArrays,
                    w = !this.i18nFormat || this.i18nFormat.handleAsObject,
                    x =
                      'string' != typeof g &&
                      'boolean' != typeof g &&
                      'number' != typeof g;
                  if (
                    w &&
                    g &&
                    x &&
                    b.indexOf(y) < 0 &&
                    ('string' != typeof m || '[object Array]' !== y)
                  ) {
                    if (!t.returnObjects && !this.options.returnObjects)
                      return (
                        this.logger.warn(
                          'accessing an object - but returnObjects options is not enabled!',
                        ),
                        this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(_, g, t)
                          : "key '"
                              .concat(u, ' (')
                              .concat(
                                this.language,
                                ")' returned an object instead of string.",
                              )
                      );
                    if (o) {
                      var k = '[object Array]' === y,
                        S = k ? [] : {},
                        O = k ? v : _;
                      for (var j in g)
                        if (Object.prototype.hasOwnProperty.call(g, j)) {
                          var E = ''.concat(O).concat(o).concat(j);
                          (S[j] = this.translate(
                            E,
                            d({}, t, { joinArrays: !1, ns: a }),
                          )),
                            S[j] === E && (S[j] = g[j]);
                        }
                      g = S;
                    }
                  } else if (
                    w &&
                    'string' == typeof m &&
                    '[object Array]' === y
                  )
                    (g = g.join(m)) && (g = this.extendTranslation(g, e, t, n));
                  else {
                    var P = !1,
                      L = !1;
                    if (!this.isValidLookup(g) && void 0 !== t.defaultValue) {
                      if (((P = !0), void 0 !== t.count)) {
                        var R = this.pluralResolver.getSuffix(f, t.count);
                        g = t['defaultValue'.concat(R)];
                      }
                      g || (g = t.defaultValue);
                    }
                    this.isValidLookup(g) || ((L = !0), (g = u));
                    var A =
                      t.defaultValue &&
                      t.defaultValue !== g &&
                      this.options.updateMissing;
                    if (L || P || A) {
                      if (
                        (this.logger.log(
                          A ? 'updateKey' : 'missingKey',
                          f,
                          c,
                          u,
                          A ? t.defaultValue : g,
                        ),
                        o)
                      ) {
                        var N = this.resolve(u, d({}, t, { keySeparator: !1 }));
                        N &&
                          N.res &&
                          this.logger.warn(
                            'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                          );
                      }
                      var C = [],
                        T = this.languageUtils.getFallbackCodes(
                          this.options.fallbackLng,
                          t.lng || this.language,
                        );
                      if (
                        'fallback' === this.options.saveMissingTo &&
                        T &&
                        T[0]
                      )
                        for (var F = 0; F < T.length; F++) C.push(T[F]);
                      else
                        'all' === this.options.saveMissingTo
                          ? (C = this.languageUtils.toResolveHierarchy(
                              t.lng || this.language,
                            ))
                          : C.push(t.lng || this.language);
                      var I = function (e, n) {
                        r.options.missingKeyHandler
                          ? r.options.missingKeyHandler(
                              e,
                              c,
                              n,
                              A ? t.defaultValue : g,
                              A,
                              t,
                            )
                          : r.backendConnector &&
                            r.backendConnector.saveMissing &&
                            r.backendConnector.saveMissing(
                              e,
                              c,
                              n,
                              A ? t.defaultValue : g,
                              A,
                              t,
                            ),
                          r.emit('missingKey', e, c, n, g);
                      };
                      if (this.options.saveMissing) {
                        var V =
                          void 0 !== t.count && 'string' != typeof t.count;
                        this.options.saveMissingPlurals && V
                          ? C.forEach(function (e) {
                              r.pluralResolver
                                .getPluralFormsOfKey(e, u)
                                .forEach(function (t) {
                                  return I([e], t);
                                });
                            })
                          : I(C, u);
                      }
                    }
                    (g = this.extendTranslation(g, e, t, h, n)),
                      L &&
                        g === u &&
                        this.options.appendNamespaceToMissingKey &&
                        (g = ''.concat(c, ':').concat(u)),
                      L &&
                        this.options.parseMissingKeyHandler &&
                        (g = this.options.parseMissingKeyHandler(g));
                  }
                  return g;
                },
              },
              {
                key: 'extendTranslation',
                value: function (e, t, n, r, o) {
                  var i = this;
                  if (this.i18nFormat && this.i18nFormat.parse)
                    e = this.i18nFormat.parse(
                      e,
                      n,
                      r.usedLng,
                      r.usedNS,
                      r.usedKey,
                      { resolved: r },
                    );
                  else if (!n.skipInterpolation) {
                    n.interpolation &&
                      this.interpolator.init(
                        d({}, n, {
                          interpolation: d(
                            {},
                            this.options.interpolation,
                            n.interpolation,
                          ),
                        }),
                      );
                    var u,
                      s =
                        (n.interpolation && n.interpolation.skipOnVariables) ||
                        this.options.interpolation.skipOnVariables;
                    if (s) {
                      var a = e.match(this.interpolator.nestingRegexp);
                      u = a && a.length;
                    }
                    var c =
                      n.replace && 'string' != typeof n.replace ? n.replace : n;
                    if (
                      (this.options.interpolation.defaultVariables &&
                        (c = d(
                          {},
                          this.options.interpolation.defaultVariables,
                          c,
                        )),
                      (e = this.interpolator.interpolate(
                        e,
                        c,
                        n.lng || this.language,
                        n,
                      )),
                      s)
                    ) {
                      var f = e.match(this.interpolator.nestingRegexp);
                      u < (f && f.length) && (n.nest = !1);
                    }
                    !1 !== n.nest &&
                      (e = this.interpolator.nest(
                        e,
                        function () {
                          for (
                            var e = arguments.length, n = new Array(e), r = 0;
                            r < e;
                            r++
                          )
                            n[r] = arguments[r];
                          return o && o[0] === n[0]
                            ? (i.logger.warn(
                                'It seems you are nesting recursively key: '
                                  .concat(n[0], ' in key: ')
                                  .concat(t[0]),
                              ),
                              null)
                            : i.translate.apply(i, n.concat([t]));
                        },
                        n,
                      )),
                      n.interpolation && this.interpolator.reset();
                  }
                  var l = n.postProcess || this.options.postProcess,
                    p = 'string' == typeof l ? [l] : l;
                  return (
                    null != e &&
                      p &&
                      p.length &&
                      !1 !== n.applyPostProcessor &&
                      (e = T.handle(
                        p,
                        e,
                        t,
                        this.options && this.options.postProcessPassResolved
                          ? d({ i18nResolved: r }, n)
                          : n,
                        this,
                      )),
                    e
                  );
                },
              },
              {
                key: 'resolve',
                value: function (e) {
                  var t,
                    n,
                    r,
                    o,
                    i,
                    u = this,
                    s =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (
                    'string' == typeof e && (e = [e]),
                    e.forEach(function (e) {
                      if (!u.isValidLookup(t)) {
                        var a = u.extractFromKey(e, s),
                          d = a.key;
                        n = d;
                        var c = a.namespaces;
                        u.options.fallbackNS &&
                          (c = c.concat(u.options.fallbackNS));
                        var f =
                            void 0 !== s.count && 'string' != typeof s.count,
                          l =
                            void 0 !== s.context &&
                            'string' == typeof s.context &&
                            '' !== s.context,
                          p = s.lngs
                            ? s.lngs
                            : u.languageUtils.toResolveHierarchy(
                                s.lng || u.language,
                                s.fallbackLng,
                              );
                        c.forEach(function (e) {
                          u.isValidLookup(t) ||
                            ((i = e),
                            !F[''.concat(p[0], '-').concat(e)] &&
                              u.utils &&
                              u.utils.hasLoadedNamespace &&
                              !u.utils.hasLoadedNamespace(i) &&
                              ((F[''.concat(p[0], '-').concat(e)] = !0),
                              u.logger.warn(
                                'key "'
                                  .concat(n, '" for languages "')
                                  .concat(
                                    p.join(', '),
                                    '" won\'t get resolved as namespace "',
                                  )
                                  .concat(i, '" was not yet loaded'),
                                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                              )),
                            p.forEach(function (n) {
                              if (!u.isValidLookup(t)) {
                                o = n;
                                var i,
                                  a,
                                  c = d,
                                  p = [c];
                                if (u.i18nFormat && u.i18nFormat.addLookupKeys)
                                  u.i18nFormat.addLookupKeys(p, d, n, e, s);
                                else
                                  f &&
                                    (i = u.pluralResolver.getSuffix(
                                      n,
                                      s.count,
                                    )),
                                    f && l && p.push(c + i),
                                    l &&
                                      p.push(
                                        (c += ''
                                          .concat(u.options.contextSeparator)
                                          .concat(s.context)),
                                      ),
                                    f && p.push((c += i));
                                for (; (a = p.pop()); )
                                  u.isValidLookup(t) ||
                                    ((r = a), (t = u.getResource(n, e, a, s)));
                              }
                            }));
                        });
                      }
                    }),
                    {
                      res: t,
                      usedKey: n,
                      exactUsedKey: r,
                      usedLng: o,
                      usedNS: i,
                    }
                  );
                },
              },
              {
                key: 'isValidLookup',
                value: function (e) {
                  return !(
                    void 0 === e ||
                    (!this.options.returnNull && null === e) ||
                    (!this.options.returnEmptyString && '' === e)
                  );
                },
              },
              {
                key: 'getResource',
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  return this.i18nFormat && this.i18nFormat.getResource
                    ? this.i18nFormat.getResource(e, t, n, r)
                    : this.resourceStore.getResource(e, t, n, r);
                },
              },
            ]),
            t
          );
        })(m);
      function V(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var M = (function () {
          function e(t) {
            c(this, e),
              (this.options = t),
              (this.whitelist = this.options.supportedLngs || !1),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = b.create('languageUtils'));
          }
          return (
            l(e, [
              {
                key: 'getScriptPartFromCode',
                value: function (e) {
                  if (!e || e.indexOf('-') < 0) return null;
                  var t = e.split('-');
                  return 2 === t.length
                    ? null
                    : (t.pop(),
                      'x' === t[t.length - 1].toLowerCase()
                        ? null
                        : this.formatLanguageCode(t.join('-')));
                },
              },
              {
                key: 'getLanguagePartFromCode',
                value: function (e) {
                  if (!e || e.indexOf('-') < 0) return e;
                  var t = e.split('-');
                  return this.formatLanguageCode(t[0]);
                },
              },
              {
                key: 'formatLanguageCode',
                value: function (e) {
                  if ('string' == typeof e && e.indexOf('-') > -1) {
                    var t = [
                        'hans',
                        'hant',
                        'latn',
                        'cyrl',
                        'cans',
                        'mong',
                        'arab',
                      ],
                      n = e.split('-');
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map(function (e) {
                            return e.toLowerCase();
                          }))
                        : 2 === n.length
                        ? ((n[0] = n[0].toLowerCase()),
                          (n[1] = n[1].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = V(n[1].toLowerCase())))
                        : 3 === n.length &&
                          ((n[0] = n[0].toLowerCase()),
                          2 === n[1].length && (n[1] = n[1].toUpperCase()),
                          'sgn' !== n[0] &&
                            2 === n[2].length &&
                            (n[2] = n[2].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = V(n[1].toLowerCase())),
                          t.indexOf(n[2].toLowerCase()) > -1 &&
                            (n[2] = V(n[2].toLowerCase()))),
                      n.join('-')
                    );
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e;
                },
              },
              {
                key: 'isWhitelisted',
                value: function (e) {
                  return (
                    this.logger.deprecate(
                      'languageUtils.isWhitelisted',
                      'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.',
                    ),
                    this.isSupportedCode(e)
                  );
                },
              },
              {
                key: 'isSupportedCode',
                value: function (e) {
                  return (
                    ('languageOnly' === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  );
                },
              },
              {
                key: 'getBestMatchFromCodes',
                value: function (e) {
                  var t,
                    n = this;
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var r = n.formatLanguageCode(e);
                          (n.options.supportedLngs && !n.isSupportedCode(r)) ||
                            (t = r);
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var r = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(r)) return (t = r);
                            t = n.options.supportedLngs.find(function (e) {
                              if (0 === e.indexOf(r)) return e;
                            });
                          }
                        }),
                      t ||
                        (t = this.getFallbackCodes(
                          this.options.fallbackLng,
                        )[0]),
                      t)
                    : null;
                },
              },
              {
                key: 'getFallbackCodes',
                value: function (e, t) {
                  if (!e) return [];
                  if (
                    ('string' == typeof e && (e = [e]),
                    '[object Array]' === Object.prototype.toString.apply(e))
                  )
                    return e;
                  if (!t) return e.default || [];
                  var n = e[t];
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                  );
                },
              },
              {
                key: 'toResolveHierarchy',
                value: function (e, t) {
                  var n = this,
                    r = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e,
                    ),
                    o = [],
                    i = function (e) {
                      e &&
                        (n.isSupportedCode(e)
                          ? o.push(e)
                          : n.logger.warn(
                              'rejecting language code not found in supportedLngs: '.concat(
                                e,
                              ),
                            ));
                    };
                  return (
                    'string' == typeof e && e.indexOf('-') > -1
                      ? ('languageOnly' !== this.options.load &&
                          i(this.formatLanguageCode(e)),
                        'languageOnly' !== this.options.load &&
                          'currentOnly' !== this.options.load &&
                          i(this.getScriptPartFromCode(e)),
                        'currentOnly' !== this.options.load &&
                          i(this.getLanguagePartFromCode(e)))
                      : 'string' == typeof e && i(this.formatLanguageCode(e)),
                    r.forEach(function (e) {
                      o.indexOf(e) < 0 && i(n.formatLanguageCode(e));
                    }),
                    o
                  );
                },
              },
            ]),
            e
          );
        })(),
        z = [
          {
            lngs: [
              'ach',
              'ak',
              'am',
              'arn',
              'br',
              'fil',
              'gun',
              'ln',
              'mfe',
              'mg',
              'mi',
              'oc',
              'pt',
              'pt-BR',
              'tg',
              'ti',
              'tr',
              'uz',
              'wa',
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              'af',
              'an',
              'ast',
              'az',
              'bg',
              'bn',
              'ca',
              'da',
              'de',
              'dev',
              'el',
              'en',
              'eo',
              'es',
              'et',
              'eu',
              'fi',
              'fo',
              'fur',
              'fy',
              'gl',
              'gu',
              'ha',
              'hi',
              'hu',
              'hy',
              'ia',
              'it',
              'kn',
              'ku',
              'lb',
              'mai',
              'ml',
              'mn',
              'mr',
              'nah',
              'nap',
              'nb',
              'ne',
              'nl',
              'nn',
              'no',
              'nso',
              'pa',
              'pap',
              'pms',
              'ps',
              'pt-PT',
              'rm',
              'sco',
              'se',
              'si',
              'so',
              'son',
              'sq',
              'sv',
              'sw',
              'ta',
              'te',
              'tk',
              'ur',
              'yo',
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              'ay',
              'bo',
              'cgg',
              'fa',
              'id',
              'ja',
              'jbo',
              'ka',
              'kk',
              'km',
              'ko',
              'ky',
              'lo',
              'ms',
              'sah',
              'su',
              'th',
              'tt',
              'ug',
              'vi',
              'wo',
              'zh',
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
          { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
          { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ['fr'], nr: [1, 2], fc: 9 },
          { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ['is'], nr: [1, 2], fc: 12 },
          { lngs: ['jv'], nr: [0, 1], fc: 13 },
          { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
          { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
          { lngs: ['mk'], nr: [1, 2], fc: 17 },
          { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
          { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ['or'], nr: [2, 1], fc: 2 },
          { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
          { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ['he'], nr: [1, 2, 20, 21], fc: 22 },
        ],
        B = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5,
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3,
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3,
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2,
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0,
            );
          },
          22: function (e) {
            return Number(
              1 == e
                ? 0
                : 2 == e
                ? 1
                : (e < 0 || e > 10) && e % 10 == 0
                ? 2
                : 3,
            );
          },
        };
      function q() {
        var e = {};
        return (
          z.forEach(function (t) {
            t.lngs.forEach(function (n) {
              e[n] = { numbers: t.nr, plurals: B[t.fc] };
            });
          }),
          e
        );
      }
      var U = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            c(this, e),
              (this.languageUtils = t),
              (this.options = n),
              (this.logger = b.create('pluralResolver')),
              (this.rules = q());
          }
          return (
            l(e, [
              {
                key: 'addRule',
                value: function (e, t) {
                  this.rules[e] = t;
                },
              },
              {
                key: 'getRule',
                value: function (e) {
                  return (
                    this.rules[e] ||
                    this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                  );
                },
              },
              {
                key: 'needsPlural',
                value: function (e) {
                  var t = this.getRule(e);
                  return t && t.numbers.length > 1;
                },
              },
              {
                key: 'getPluralFormsOfKey',
                value: function (e, t) {
                  var n = this,
                    r = [],
                    o = this.getRule(e);
                  return o
                    ? (o.numbers.forEach(function (o) {
                        var i = n.getSuffix(e, o);
                        r.push(''.concat(t).concat(i));
                      }),
                      r)
                    : r;
                },
              },
              {
                key: 'getSuffix',
                value: function (e, t) {
                  var n = this,
                    r = this.getRule(e);
                  if (r) {
                    var o = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t)),
                      i = r.numbers[o];
                    this.options.simplifyPluralSuffix &&
                      2 === r.numbers.length &&
                      1 === r.numbers[0] &&
                      (2 === i ? (i = 'plural') : 1 === i && (i = ''));
                    var u = function () {
                      return n.options.prepend && i.toString()
                        ? n.options.prepend + i.toString()
                        : i.toString();
                    };
                    return 'v1' === this.options.compatibilityJSON
                      ? 1 === i
                        ? ''
                        : 'number' == typeof i
                        ? '_plural_'.concat(i.toString())
                        : u()
                      : 'v2' === this.options.compatibilityJSON ||
                        (this.options.simplifyPluralSuffix &&
                          2 === r.numbers.length &&
                          1 === r.numbers[0])
                      ? u()
                      : this.options.prepend && o.toString()
                      ? this.options.prepend + o.toString()
                      : o.toString();
                  }
                  return (
                    this.logger.warn('no plural rule found for: '.concat(e)), ''
                  );
                },
              },
            ]),
            e
          );
        })(),
        D = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            c(this, e),
              (this.logger = b.create('interpolator')),
              (this.options = t),
              (this.format =
                (t.interpolation && t.interpolation.format) ||
                function (e) {
                  return e;
                }),
              this.init(t);
          }
          return (
            l(e, [
              {
                key: 'init',
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  e.interpolation || (e.interpolation = { escapeValue: !0 });
                  var t = e.interpolation;
                  (this.escape = void 0 !== t.escape ? t.escape : A),
                    (this.escapeValue =
                      void 0 === t.escapeValue || t.escapeValue),
                    (this.useRawValueToEscape =
                      void 0 !== t.useRawValueToEscape &&
                      t.useRawValueToEscape),
                    (this.prefix = t.prefix
                      ? L(t.prefix)
                      : t.prefixEscaped || '{{'),
                    (this.suffix = t.suffix
                      ? L(t.suffix)
                      : t.suffixEscaped || '}}'),
                    (this.formatSeparator = t.formatSeparator
                      ? t.formatSeparator
                      : t.formatSeparator || ','),
                    (this.unescapePrefix = t.unescapeSuffix
                      ? ''
                      : t.unescapePrefix || '-'),
                    (this.unescapeSuffix = this.unescapePrefix
                      ? ''
                      : t.unescapeSuffix || ''),
                    (this.nestingPrefix = t.nestingPrefix
                      ? L(t.nestingPrefix)
                      : t.nestingPrefixEscaped || L('$t(')),
                    (this.nestingSuffix = t.nestingSuffix
                      ? L(t.nestingSuffix)
                      : t.nestingSuffixEscaped || L(')')),
                    (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                      ? t.nestingOptionsSeparator
                      : t.nestingOptionsSeparator || ','),
                    (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                    (this.alwaysFormat =
                      void 0 !== t.alwaysFormat && t.alwaysFormat),
                    this.resetRegExp();
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.options && this.init(this.options);
                },
              },
              {
                key: 'resetRegExp',
                value: function () {
                  var e = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
                  this.regexp = new RegExp(e, 'g');
                  var t = ''
                    .concat(this.prefix)
                    .concat(this.unescapePrefix, '(.+?)')
                    .concat(this.unescapeSuffix)
                    .concat(this.suffix);
                  this.regexpUnescape = new RegExp(t, 'g');
                  var n = ''
                    .concat(this.nestingPrefix, '(.+?)')
                    .concat(this.nestingSuffix);
                  this.nestingRegexp = new RegExp(n, 'g');
                },
              },
              {
                key: 'interpolate',
                value: function (e, t, n, r) {
                  var o,
                    i,
                    u,
                    s = this,
                    a =
                      (this.options &&
                        this.options.interpolation &&
                        this.options.interpolation.defaultVariables) ||
                      {};
                  function d(e) {
                    return e.replace(/\$/g, '$$$$');
                  }
                  var c = function (e) {
                    if (e.indexOf(s.formatSeparator) < 0) {
                      var o = E(t, a, e);
                      return s.alwaysFormat ? s.format(o, void 0, n) : o;
                    }
                    var i = e.split(s.formatSeparator),
                      u = i.shift().trim(),
                      d = i.join(s.formatSeparator).trim();
                    return s.format(E(t, a, u), d, n, r);
                  };
                  this.resetRegExp();
                  var f =
                    (r && r.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler;
                  for (u = 0; (o = this.regexpUnescape.exec(e)); ) {
                    if (void 0 === (i = c(o[1].trim())))
                      if ('function' == typeof f) {
                        var l = f(e, o, r);
                        i = 'string' == typeof l ? l : '';
                      } else
                        this.logger.warn(
                          'missed to pass in variable '
                            .concat(o[1], ' for interpolating ')
                            .concat(e),
                        ),
                          (i = '');
                    else
                      'string' == typeof i ||
                        this.useRawValueToEscape ||
                        (i = x(i));
                    if (
                      ((e = e.replace(o[0], d(i))),
                      (this.regexpUnescape.lastIndex = 0),
                      ++u >= this.maxReplaces)
                    )
                      break;
                  }
                  for (u = 0; (o = this.regexp.exec(e)); ) {
                    if (void 0 === (i = c(o[1].trim())))
                      if ('function' == typeof f) {
                        var p = f(e, o, r);
                        i = 'string' == typeof p ? p : '';
                      } else
                        this.logger.warn(
                          'missed to pass in variable '
                            .concat(o[1], ' for interpolating ')
                            .concat(e),
                        ),
                          (i = '');
                    else
                      'string' == typeof i ||
                        this.useRawValueToEscape ||
                        (i = x(i));
                    if (
                      ((i = this.escapeValue ? d(this.escape(i)) : d(i)),
                      (e = e.replace(o[0], i)),
                      (this.regexp.lastIndex = 0),
                      ++u >= this.maxReplaces)
                    )
                      break;
                  }
                  return e;
                },
              },
              {
                key: 'nest',
                value: function (e, t) {
                  var n,
                    r,
                    o = this,
                    i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    u = d({}, i);
                  function s(e, t) {
                    var n = this.nestingOptionsSeparator;
                    if (e.indexOf(n) < 0) return e;
                    var r = e.split(new RegExp(''.concat(n, '[ ]*{'))),
                      o = '{'.concat(r[1]);
                    (e = r[0]),
                      (o = (o = this.interpolate(o, u)).replace(/'/g, '"'));
                    try {
                      (u = JSON.parse(o)), t && (u = d({}, t, u));
                    } catch (t) {
                      return (
                        this.logger.warn(
                          'failed parsing options string in nesting for key '.concat(
                            e,
                          ),
                          t,
                        ),
                        ''.concat(e).concat(n).concat(o)
                      );
                    }
                    return delete u.defaultValue, e;
                  }
                  for (
                    u.applyPostProcessor = !1, delete u.defaultValue;
                    (n = this.nestingRegexp.exec(e));

                  ) {
                    var a = [],
                      c = !1;
                    if (
                      n[0].includes(this.formatSeparator) &&
                      !/{.*}/.test(n[1])
                    ) {
                      var f = n[1]
                        .split(this.formatSeparator)
                        .map(function (e) {
                          return e.trim();
                        });
                      (n[1] = f.shift()), (a = f), (c = !0);
                    }
                    if (
                      (r = t(s.call(this, n[1].trim(), u), u)) &&
                      n[0] === e &&
                      'string' != typeof r
                    )
                      return r;
                    'string' != typeof r && (r = x(r)),
                      r ||
                        (this.logger.warn(
                          'missed to resolve '
                            .concat(n[1], ' for nesting ')
                            .concat(e),
                        ),
                        (r = '')),
                      c &&
                        (r = a.reduce(function (e, t) {
                          return o.format(e, t, i.lng, i);
                        }, r.trim())),
                      (e = e.replace(n[0], r)),
                      (this.regexp.lastIndex = 0);
                  }
                  return e;
                },
              },
            ]),
            e
          );
        })();
      var K = (function (e) {
        function t(e, n, r) {
          var o,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          return (
            c(this, t),
            (o = h(this, g(t).call(this))),
            N && m.call(Object(p.a)(o)),
            (o.backend = e),
            (o.store = n),
            (o.services = r),
            (o.languageUtils = r.languageUtils),
            (o.options = i),
            (o.logger = b.create('backendConnector')),
            (o.state = {}),
            (o.queue = []),
            o.backend && o.backend.init && o.backend.init(r, i.backend, i),
            o
          );
        }
        return (
          v(t, e),
          l(t, [
            {
              key: 'queueLoad',
              value: function (e, t, n, r) {
                var o = this,
                  i = [],
                  u = [],
                  s = [],
                  a = [];
                return (
                  e.forEach(function (e) {
                    var r = !0;
                    t.forEach(function (t) {
                      var s = ''.concat(e, '|').concat(t);
                      !n.reload && o.store.hasResourceBundle(e, t)
                        ? (o.state[s] = 2)
                        : o.state[s] < 0 ||
                          (1 === o.state[s]
                            ? u.indexOf(s) < 0 && u.push(s)
                            : ((o.state[s] = 1),
                              (r = !1),
                              u.indexOf(s) < 0 && u.push(s),
                              i.indexOf(s) < 0 && i.push(s),
                              a.indexOf(t) < 0 && a.push(t)));
                    }),
                      r || s.push(e);
                  }),
                  (i.length || u.length) &&
                    this.queue.push({
                      pending: u,
                      loaded: {},
                      errors: [],
                      callback: r,
                    }),
                  {
                    toLoad: i,
                    pending: u,
                    toLoadLanguages: s,
                    toLoadNamespaces: a,
                  }
                );
              },
            },
            {
              key: 'loaded',
              value: function (e, t, n) {
                var r = e.split('|'),
                  o = r[0],
                  i = r[1];
                t && this.emit('failedLoading', o, i, t),
                  n && this.store.addResourceBundle(o, i, n),
                  (this.state[e] = t ? -1 : 2);
                var u = {};
                this.queue.forEach(function (n) {
                  var r, s, a, d, c, f;
                  (r = n.loaded),
                    (s = i),
                    (d = S(r, [o], Object)),
                    (c = d.obj),
                    (f = d.k),
                    (c[f] = c[f] || []),
                    a && (c[f] = c[f].concat(s)),
                    a || c[f].push(s),
                    (function (e, t) {
                      for (var n = e.indexOf(t); -1 !== n; )
                        e.splice(n, 1), (n = e.indexOf(t));
                    })(n.pending, e),
                    t && n.errors.push(t),
                    0 !== n.pending.length ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function (e) {
                        u[e] || (u[e] = []),
                          n.loaded[e].length &&
                            n.loaded[e].forEach(function (t) {
                              u[e].indexOf(t) < 0 && u[e].push(t);
                            });
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback());
                }),
                  this.emit('loaded', u),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done;
                  }));
              },
            },
            {
              key: 'read',
              value: function (e, t, n) {
                var r = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  i =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 350,
                  u = arguments.length > 5 ? arguments[5] : void 0;
                return e.length
                  ? this.backend[n](e, t, function (s, a) {
                      s && a && o < 5
                        ? setTimeout(function () {
                            r.read.call(r, e, t, n, o + 1, 2 * i, u);
                          }, i)
                        : u(s, a);
                    })
                  : u(null, {});
              },
            },
            {
              key: 'prepareLoading',
              value: function (e, t) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  o = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                  return (
                    this.logger.warn(
                      'No backend was added via i18next.use. Will not load resources.',
                    ),
                    o && o()
                  );
                'string' == typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  'string' == typeof t && (t = [t]);
                var i = this.queueLoad(e, t, r, o);
                if (!i.toLoad.length) return i.pending.length || o(), null;
                i.toLoad.forEach(function (e) {
                  n.loadOne(e);
                });
              },
            },
            {
              key: 'load',
              value: function (e, t, n) {
                this.prepareLoading(e, t, {}, n);
              },
            },
            {
              key: 'reload',
              value: function (e, t, n) {
                this.prepareLoading(e, t, { reload: !0 }, n);
              },
            },
            {
              key: 'loadOne',
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  r = e.split('|'),
                  o = r[0],
                  i = r[1];
                this.read(o, i, 'read', void 0, void 0, function (r, u) {
                  r &&
                    t.logger.warn(
                      ''
                        .concat(n, 'loading namespace ')
                        .concat(i, ' for language ')
                        .concat(o, ' failed'),
                      r,
                    ),
                    !r &&
                      u &&
                      t.logger.log(
                        ''
                          .concat(n, 'loaded namespace ')
                          .concat(i, ' for language ')
                          .concat(o),
                        u,
                      ),
                    t.loaded(e, r, u);
                });
              },
            },
            {
              key: 'saveMissing',
              value: function (e, t, n, r, o) {
                var i =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {};
                this.services.utils &&
                this.services.utils.hasLoadedNamespace &&
                !this.services.utils.hasLoadedNamespace(t)
                  ? this.logger.warn(
                      'did not save key "'
                        .concat(n, '" as the namespace "')
                        .concat(t, '" was not yet loaded'),
                      'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                    )
                  : null != n &&
                    '' !== n &&
                    (this.backend &&
                      this.backend.create &&
                      this.backend.create(
                        e,
                        t,
                        n,
                        r,
                        null,
                        d({}, i, { isUpdate: o }),
                      ),
                    e && e[0] && this.store.addResource(e[0], t, n, r));
              },
            },
          ]),
          t
        );
      })(m);
      function H() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ['translation'],
          defaultNS: ['translation'],
          fallbackLng: ['dev'],
          fallbackNS: !1,
          whitelist: !1,
          nonExplicitWhitelist: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: 'all',
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: '.',
          nsSeparator: ':',
          pluralSeparator: '_',
          contextSeparator: '_',
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: 'fallback',
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !0,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            var t = {};
            if (
              ('object' === s(e[1]) && (t = e[1]),
              'string' == typeof e[1] && (t.defaultValue = e[1]),
              'string' == typeof e[2] && (t.tDescription = e[2]),
              'object' === s(e[2]) || 'object' === s(e[3]))
            ) {
              var n = e[3] || e[2];
              Object.keys(n).forEach(function (e) {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: function (e, t, n, r) {
              return e;
            },
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1e3,
            skipOnVariables: !1,
          },
        };
      }
      function Q(e) {
        return (
          'string' == typeof e.ns && (e.ns = [e.ns]),
          'string' == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          'string' == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.whitelist &&
            (e.whitelist &&
              e.whitelist.indexOf('cimode') < 0 &&
              (e.whitelist = e.whitelist.concat(['cimode'])),
            (e.supportedLngs = e.whitelist)),
          e.nonExplicitWhitelist &&
            (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist),
          e.supportedLngs &&
            e.supportedLngs.indexOf('cimode') < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
          e
        );
      }
      function W() {}
      var J = new ((function (e) {
        function t() {
          var e,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (c(this, t),
            (e = h(this, g(t).call(this))),
            N && m.call(Object(p.a)(e)),
            (e.options = Q(n)),
            (e.services = {}),
            (e.logger = b),
            (e.modules = { external: [] }),
            r && !e.isInitialized && !n.isClone)
          ) {
            if (!e.options.initImmediate)
              return e.init(n, r), h(e, Object(p.a)(e));
            setTimeout(function () {
              e.init(n, r);
            }, 0);
          }
          return e;
        }
        return (
          v(t, e),
          l(t, [
            {
              key: 'init',
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = arguments.length > 1 ? arguments[1] : void 0;
                function r(e) {
                  return e ? ('function' == typeof e ? new e() : e) : null;
                }
                if (
                  ('function' == typeof t && ((n = t), (t = {})),
                  t.whitelist &&
                    !t.supportedLngs &&
                    this.logger.deprecate(
                      'whitelist',
                      'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.',
                    ),
                  t.nonExplicitWhitelist &&
                    !t.nonExplicitSupportedLngs &&
                    this.logger.deprecate(
                      'whitelist',
                      'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.',
                    ),
                  (this.options = d({}, H(), this.options, Q(t))),
                  (this.format = this.options.interpolation.format),
                  n || (n = W),
                  !this.options.isClone)
                ) {
                  this.modules.logger
                    ? b.init(r(this.modules.logger), this.options)
                    : b.init(null, this.options);
                  var o = new M(this.options);
                  this.store = new C(this.options.resources, this.options);
                  var i = this.services;
                  (i.logger = b),
                    (i.resourceStore = this.store),
                    (i.languageUtils = o),
                    (i.pluralResolver = new U(o, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    (i.interpolator = new D(this.options)),
                    (i.utils = {
                      hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                    }),
                    (i.backendConnector = new K(
                      r(this.modules.backend),
                      i.resourceStore,
                      i,
                      this.options,
                    )),
                    i.backendConnector.on('*', function (t) {
                      for (
                        var n = arguments.length,
                          r = new Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o];
                      e.emit.apply(e, [t].concat(r));
                    }),
                    this.modules.languageDetector &&
                      ((i.languageDetector = r(this.modules.languageDetector)),
                      i.languageDetector.init(
                        i,
                        this.options.detection,
                        this.options,
                      )),
                    this.modules.i18nFormat &&
                      ((i.i18nFormat = r(this.modules.i18nFormat)),
                      i.i18nFormat.init && i.i18nFormat.init(this)),
                    (this.translator = new I(this.services, this.options)),
                    this.translator.on('*', function (t) {
                      for (
                        var n = arguments.length,
                          r = new Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o];
                      e.emit.apply(e, [t].concat(r));
                    }),
                    this.modules.external.forEach(function (t) {
                      t.init && t.init(e);
                    });
                }
                this.modules.languageDetector ||
                  this.options.lng ||
                  this.logger.warn(
                    'init: no languageDetector is used and no lng is defined',
                  );
                var u = [
                  'getResource',
                  'addResource',
                  'addResources',
                  'addResourceBundle',
                  'removeResourceBundle',
                  'hasResourceBundle',
                  'getResourceBundle',
                  'getDataByLanguage',
                ];
                u.forEach(function (t) {
                  e[t] = function () {
                    var n;
                    return (n = e.store)[t].apply(n, arguments);
                  };
                });
                var s = w(),
                  a = function () {
                    e.changeLanguage(e.options.lng, function (t, r) {
                      (e.isInitialized = !0),
                        e.logger.log('initialized', e.options),
                        e.emit('initialized', e.options),
                        s.resolve(r),
                        n(t, r);
                    });
                  };
                return (
                  this.options.resources || !this.options.initImmediate
                    ? a()
                    : setTimeout(a, 0),
                  s
                );
              },
            },
            {
              key: 'loadResources',
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : W,
                  r = n,
                  o = 'string' == typeof e ? e : this.language;
                if (
                  ('function' == typeof e && (r = e),
                  !this.options.resources ||
                    this.options.partialBundledLanguages)
                ) {
                  if (o && 'cimode' === o.toLowerCase()) return r();
                  var i = [],
                    u = function (e) {
                      e &&
                        t.services.languageUtils
                          .toResolveHierarchy(e)
                          .forEach(function (e) {
                            i.indexOf(e) < 0 && i.push(e);
                          });
                    };
                  if (o) u(o);
                  else {
                    var s = this.services.languageUtils.getFallbackCodes(
                      this.options.fallbackLng,
                    );
                    s.forEach(function (e) {
                      return u(e);
                    });
                  }
                  this.options.preload &&
                    this.options.preload.forEach(function (e) {
                      return u(e);
                    }),
                    this.services.backendConnector.load(i, this.options.ns, r);
                } else r(null);
              },
            },
            {
              key: 'reloadResources',
              value: function (e, t, n) {
                var r = w();
                return (
                  e || (e = this.languages),
                  t || (t = this.options.ns),
                  n || (n = W),
                  this.services.backendConnector.reload(e, t, function (e) {
                    r.resolve(), n(e);
                  }),
                  r
                );
              },
            },
            {
              key: 'use',
              value: function (e) {
                if (!e)
                  throw new Error(
                    'You are passing an undefined module! Please check the object you are passing to i18next.use()',
                  );
                if (!e.type)
                  throw new Error(
                    'You are passing a wrong module! Please check the object you are passing to i18next.use()',
                  );
                return (
                  'backend' === e.type && (this.modules.backend = e),
                  ('logger' === e.type || (e.log && e.warn && e.error)) &&
                    (this.modules.logger = e),
                  'languageDetector' === e.type &&
                    (this.modules.languageDetector = e),
                  'i18nFormat' === e.type && (this.modules.i18nFormat = e),
                  'postProcessor' === e.type && T.addPostProcessor(e),
                  '3rdParty' === e.type && this.modules.external.push(e),
                  this
                );
              },
            },
            {
              key: 'changeLanguage',
              value: function (e, t) {
                var n = this;
                this.isLanguageChangingTo = e;
                var r = w();
                this.emit('languageChanging', e);
                var o = function (e) {
                  var o =
                    'string' == typeof e
                      ? e
                      : n.services.languageUtils.getBestMatchFromCodes(e);
                  o &&
                    (n.language ||
                      ((n.language = o),
                      (n.languages = n.services.languageUtils.toResolveHierarchy(
                        o,
                      ))),
                    n.translator.language || n.translator.changeLanguage(o),
                    n.services.languageDetector &&
                      n.services.languageDetector.cacheUserLanguage(o)),
                    n.loadResources(o, function (e) {
                      !(function (e, o) {
                        o
                          ? ((n.language = o),
                            (n.languages = n.services.languageUtils.toResolveHierarchy(
                              o,
                            )),
                            n.translator.changeLanguage(o),
                            (n.isLanguageChangingTo = void 0),
                            n.emit('languageChanged', o),
                            n.logger.log('languageChanged', o))
                          : (n.isLanguageChangingTo = void 0),
                          r.resolve(function () {
                            return n.t.apply(n, arguments);
                          }),
                          t &&
                            t(e, function () {
                              return n.t.apply(n, arguments);
                            });
                      })(e, o);
                    });
                };
                return (
                  e ||
                  !this.services.languageDetector ||
                  this.services.languageDetector.async
                    ? !e &&
                      this.services.languageDetector &&
                      this.services.languageDetector.async
                      ? this.services.languageDetector.detect(o)
                      : o(e)
                    : o(this.services.languageDetector.detect()),
                  r
                );
              },
            },
            {
              key: 'getFixedT',
              value: function (e, t) {
                var n = this,
                  r = function e(t, r) {
                    var o;
                    if ('object' !== s(r)) {
                      for (
                        var i = arguments.length,
                          u = new Array(i > 2 ? i - 2 : 0),
                          a = 2;
                        a < i;
                        a++
                      )
                        u[a - 2] = arguments[a];
                      o = n.options.overloadTranslationOptionHandler(
                        [t, r].concat(u),
                      );
                    } else o = d({}, r);
                    return (
                      (o.lng = o.lng || e.lng),
                      (o.lngs = o.lngs || e.lngs),
                      (o.ns = o.ns || e.ns),
                      n.t(t, o)
                    );
                  };
                return (
                  'string' == typeof e ? (r.lng = e) : (r.lngs = e),
                  (r.ns = t),
                  r
                );
              },
            },
            {
              key: 't',
              value: function () {
                var e;
                return (
                  this.translator &&
                  (e = this.translator).translate.apply(e, arguments)
                );
              },
            },
            {
              key: 'exists',
              value: function () {
                var e;
                return (
                  this.translator &&
                  (e = this.translator).exists.apply(e, arguments)
                );
              },
            },
            {
              key: 'setDefaultNamespace',
              value: function (e) {
                this.options.defaultNS = e;
              },
            },
            {
              key: 'hasLoadedNamespace',
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                if (!this.isInitialized)
                  return (
                    this.logger.warn(
                      'hasLoadedNamespace: i18next was not initialized',
                      this.languages,
                    ),
                    !1
                  );
                if (!this.languages || !this.languages.length)
                  return (
                    this.logger.warn(
                      'hasLoadedNamespace: i18n.languages were undefined or empty',
                      this.languages,
                    ),
                    !1
                  );
                var r = this.languages[0],
                  o = !!this.options && this.options.fallbackLng,
                  i = this.languages[this.languages.length - 1];
                if ('cimode' === r.toLowerCase()) return !0;
                var u = function (e, n) {
                  var r =
                    t.services.backendConnector.state[
                      ''.concat(e, '|').concat(n)
                    ];
                  return -1 === r || 2 === r;
                };
                if (n.precheck) {
                  var s = n.precheck(this, u);
                  if (void 0 !== s) return s;
                }
                return (
                  !!this.hasResourceBundle(r, e) ||
                  !this.services.backendConnector.backend ||
                  !(!u(r, e) || (o && !u(i, e)))
                );
              },
            },
            {
              key: 'loadNamespaces',
              value: function (e, t) {
                var n = this,
                  r = w();
                return this.options.ns
                  ? ('string' == typeof e && (e = [e]),
                    e.forEach(function (e) {
                      n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                    }),
                    this.loadResources(function (e) {
                      r.resolve(), t && t(e);
                    }),
                    r)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: 'loadLanguages',
              value: function (e, t) {
                var n = w();
                'string' == typeof e && (e = [e]);
                var r = this.options.preload || [],
                  o = e.filter(function (e) {
                    return r.indexOf(e) < 0;
                  });
                return o.length
                  ? ((this.options.preload = r.concat(o)),
                    this.loadResources(function (e) {
                      n.resolve(), t && t(e);
                    }),
                    n)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: 'dir',
              value: function (e) {
                if (
                  (e ||
                    (e =
                      this.languages && this.languages.length > 0
                        ? this.languages[0]
                        : this.language),
                  !e)
                )
                  return 'rtl';
                return [
                  'ar',
                  'shu',
                  'sqr',
                  'ssh',
                  'xaa',
                  'yhd',
                  'yud',
                  'aao',
                  'abh',
                  'abv',
                  'acm',
                  'acq',
                  'acw',
                  'acx',
                  'acy',
                  'adf',
                  'ads',
                  'aeb',
                  'aec',
                  'afb',
                  'ajp',
                  'apc',
                  'apd',
                  'arb',
                  'arq',
                  'ars',
                  'ary',
                  'arz',
                  'auz',
                  'avl',
                  'ayh',
                  'ayl',
                  'ayn',
                  'ayp',
                  'bbz',
                  'pga',
                  'he',
                  'iw',
                  'ps',
                  'pbt',
                  'pbu',
                  'pst',
                  'prp',
                  'prd',
                  'ug',
                  'ur',
                  'ydd',
                  'yds',
                  'yih',
                  'ji',
                  'yi',
                  'hbo',
                  'men',
                  'xmn',
                  'fa',
                  'jpr',
                  'peo',
                  'pes',
                  'prs',
                  'dv',
                  'sam',
                ].indexOf(
                  this.services.languageUtils.getLanguagePartFromCode(e),
                ) >= 0
                  ? 'rtl'
                  : 'ltr';
              },
            },
            {
              key: 'createInstance',
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = arguments.length > 1 ? arguments[1] : void 0;
                return new t(e, n);
              },
            },
            {
              key: 'cloneInstance',
              value: function () {
                var e = this,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : W,
                  o = d({}, this.options, n, { isClone: !0 }),
                  i = new t(o),
                  u = ['store', 'services', 'language'];
                return (
                  u.forEach(function (t) {
                    i[t] = e[t];
                  }),
                  (i.services = d({}, this.services)),
                  (i.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  (i.translator = new I(i.services, i.options)),
                  i.translator.on('*', function (e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    i.emit.apply(i, [e].concat(n));
                  }),
                  i.init(o, r),
                  (i.translator.options = i.options),
                  (i.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  i
                );
              },
            },
          ]),
          t
        );
      })(m))();
      const Y = {
        ar_AE: 'ar',
        br: 'pt',
        de_DE: 'de',
        he_IL: 'he',
        id_ID: 'id',
        in: 'en',
        kr: 'ko',
        ms_MY: 'ms',
        sv_SE: 'sv',
        th_TH: 'th',
        uk: 'en',
        vi_VN: 'vi',
        zh_CN: 'zh-Hans',
        zh_TW: 'zh-Hant',
        zh: 'zh-Hans',
      };
      n.d(t, 't', function () {
        return G;
      });
      let X = u;
      const $ = window;
      if (!$.__tradingviewI18nextInited) {
        let e = window.language || null,
          t = Z(e);
        (e && t) ||
          (console.error('No translation data'), (e = 'en'), (t = Z('en')));
        const n = (function (e) {
          return Y[e] || e;
        })(e);
        if (e && t) {
          const e = {
            interpolation: { escapeValue: !1, prefix: '__', suffix: '__' },
            keySeparator: ':::',
            lng: n,
            nsSeparator: ':::',
            resources: { [n]: { translation: t } },
          };
          J.init(e), (X = J.t.bind(J)), o(X), i(X);
        }
        $.__tradingviewI18nextInited = !0;
      }
      function G(e, t) {
        return X(e, t);
      }
      function Z(e) {
        return (e && $._tv_languages && $._tv_languages[e]) || null;
      }
    },
    'YN/q': function (e, t, n) {
      var r = n('zY5Q');
      e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && 'function' == typeof (n = e.toString) && !r((o = n.call(e))))
          return o;
        if ('function' == typeof (n = e.valueOf) && !r((o = n.call(e))))
          return o;
        if (!t && 'function' == typeof (n = e.toString) && !r((o = n.call(e))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    YhSK: function (e, t, n) {
      var r = Date.prototype,
        o = r.toString,
        i = r.getTime;
      new Date(NaN) + '' != 'Invalid Date' &&
        n('AZRH')(r, 'toString', function () {
          var e = i.call(this);
          return e == e ? o.call(this) : 'Invalid Date';
        });
    },
    YqzG: function (e, t) {
      e.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff';
    },
    YuTi: function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    a4n4: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('WnSb')(!0);
      r(r.P, 'Array', {
        includes: function (e) {
          return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
        n('OlM/')('includes');
    },
    aQPA: function (e, t, n) {
      var r = n('KGgr'),
        o = n('caxj').set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        u = r.process,
        s = r.Promise,
        a = 'process' == n('qKVQ')(u);
      e.exports = function () {
        var e,
          t,
          n,
          d = function () {
            var r, o;
            for (a && (r = u.domain) && r.exit(); e; ) {
              (o = e.fn), (e = e.next);
              try {
                o();
              } catch (r) {
                throw (e ? n() : (t = void 0), r);
              }
            }
            (t = void 0), r && r.enter();
          };
        if (a)
          n = function () {
            u.nextTick(d);
          };
        else if (!i || (r.navigator && r.navigator.standalone))
          if (s && s.resolve) {
            var c = s.resolve(void 0);
            n = function () {
              c.then(d);
            };
          } else
            n = function () {
              o.call(r, d);
            };
        else {
          var f = !0,
            l = document.createTextNode('');
          new i(d).observe(l, { characterData: !0 }),
            (n = function () {
              l.data = f = !f;
            });
        }
        return function (r) {
          var o = { fn: r, next: void 0 };
          t && (t.next = o), e || ((e = o), n()), (t = o);
        };
      };
    },
    bI2D: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('lrbo'),
        i = n('bjrj'),
        u = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
      r(r.P + r.F * u, 'String', {
        padStart: function (e) {
          return o(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
        },
      });
    },
    bSmq: function (e, t, n) {
      var r = n('/B3w'),
        o = Math.min;
      e.exports = function (e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0;
      };
    },
    bZMm: function (e, t) {
      !(function (e) {
        'use strict';
        if (!e.fetch) {
          var t = 'URLSearchParams' in e,
            n = 'Symbol' in e && 'iterator' in Symbol,
            r =
              'FileReader' in e &&
              'Blob' in e &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            o = 'FormData' in e,
            i = 'ArrayBuffer' in e;
          if (i)
            var u = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]',
              ],
              s = function (e) {
                return e && DataView.prototype.isPrototypeOf(e);
              },
              a =
                ArrayBuffer.isView ||
                function (e) {
                  return e && u.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          (h.prototype.append = function (e, t) {
            (e = f(e)), (t = l(t));
            var n = this.map[e];
            n || ((n = []), (this.map[e] = n)), n.push(t);
          }),
            (h.prototype.delete = function (e) {
              delete this.map[f(e)];
            }),
            (h.prototype.get = function (e) {
              var t = this.map[f(e)];
              return t ? t[0] : null;
            }),
            (h.prototype.getAll = function (e) {
              return this.map[f(e)] || [];
            }),
            (h.prototype.has = function (e) {
              return this.map.hasOwnProperty(f(e));
            }),
            (h.prototype.set = function (e, t) {
              this.map[f(e)] = [l(t)];
            }),
            (h.prototype.forEach = function (e, t) {
              Object.getOwnPropertyNames(this.map).forEach(function (n) {
                this.map[n].forEach(function (r) {
                  e.call(t, r, n, this);
                }, this);
              }, this);
            }),
            (h.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(n);
                }),
                p(e)
              );
            }),
            (h.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                p(e)
              );
            }),
            (h.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push([n, t]);
                }),
                p(e)
              );
            }),
            n && (h.prototype[Symbol.iterator] = h.prototype.entries);
          var d = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
          (m.prototype.clone = function () {
            return new m(this, { body: this._bodyInit });
          }),
            b.call(m.prototype),
            b.call(x.prototype),
            (x.prototype.clone = function () {
              return new x(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new h(this.headers),
                url: this.url,
              });
            }),
            (x.error = function () {
              var e = new x(null, { status: 0, statusText: '' });
              return (e.type = 'error'), e;
            });
          var c = [301, 302, 303, 307, 308];
          (x.redirect = function (e, t) {
            if (-1 === c.indexOf(t))
              throw new RangeError('Invalid status code');
            return new x(null, { status: t, headers: { location: e } });
          }),
            (e.Headers = h),
            (e.Request = m),
            (e.Response = x),
            (e.fetch = function (e, t) {
              return new Promise(function (n, o) {
                var i = new m(e, t),
                  u = new XMLHttpRequest();
                (u.onload = function () {
                  var e,
                    t,
                    r = {
                      status: u.status,
                      statusText: u.statusText,
                      headers:
                        ((e = u.getAllResponseHeaders() || ''),
                        (t = new h()),
                        e.split('\r\n').forEach(function (e) {
                          var n = e.split(':'),
                            r = n.shift().trim();
                          if (r) {
                            var o = n.join(':').trim();
                            t.append(r, o);
                          }
                        }),
                        t),
                    };
                  r.url =
                    'responseURL' in u
                      ? u.responseURL
                      : r.headers.get('X-Request-URL');
                  var o = 'response' in u ? u.response : u.responseText;
                  n(new x(o, r));
                }),
                  (u.onerror = function () {
                    o(new TypeError('Network request failed'));
                  }),
                  (u.ontimeout = function () {
                    o(new TypeError('Network request failed'));
                  }),
                  u.open(i.method, i.url, !0),
                  'include' === i.credentials && (u.withCredentials = !0),
                  'responseType' in u && r && (u.responseType = 'blob'),
                  i.headers.forEach(function (e, t) {
                    u.setRequestHeader(t, e);
                  }),
                  u.send(void 0 === i._bodyInit ? null : i._bodyInit);
              });
            }),
            (e.fetch.polyfill = !0);
        }
        function f(e) {
          if (
            ('string' != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))
          )
            throw new TypeError('Invalid character in header field name');
          return e.toLowerCase();
        }
        function l(e) {
          return 'string' != typeof e && (e = String(e)), e;
        }
        function p(e) {
          var t = {
            next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            },
          };
          return (
            n &&
              (t[Symbol.iterator] = function () {
                return t;
              }),
            t
          );
        }
        function h(e) {
          (this.map = {}),
            e instanceof h
              ? e.forEach(function (e, t) {
                  this.append(t, e);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t]);
                }, this);
        }
        function g(e) {
          if (e.bodyUsed) return Promise.reject(new TypeError('Already read'));
          e.bodyUsed = !0;
        }
        function _(e) {
          return new Promise(function (t, n) {
            (e.onload = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                n(e.error);
              });
          });
        }
        function v(e) {
          var t = new FileReader(),
            n = _(t);
          return t.readAsArrayBuffer(e), n;
        }
        function y(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function b() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              if (((this._bodyInit = e), e))
                if ('string' == typeof e) this._bodyText = e;
                else if (r && Blob.prototype.isPrototypeOf(e))
                  this._bodyBlob = e;
                else if (o && FormData.prototype.isPrototypeOf(e))
                  this._bodyFormData = e;
                else if (t && URLSearchParams.prototype.isPrototypeOf(e))
                  this._bodyText = e.toString();
                else if (i && r && s(e))
                  (this._bodyArrayBuffer = y(e.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer]));
                else {
                  if (!i || (!ArrayBuffer.prototype.isPrototypeOf(e) && !a(e)))
                    throw new Error('unsupported BodyInit type');
                  this._bodyArrayBuffer = y(e);
                }
              else this._bodyText = '';
              this.headers.get('content-type') ||
                ('string' == typeof e
                  ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set('content-type', this._bodyBlob.type)
                  : t &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      'content-type',
                      'application/x-www-form-urlencoded;charset=UTF-8',
                    ));
            }),
            r &&
              ((this.blob = function () {
                var e = g(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                  throw new Error('could not read FormData body as blob');
                return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? g(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(v);
              })),
            (this.text = function () {
              var e,
                t,
                n,
                r = g(this);
              if (r) return r;
              if (this._bodyBlob)
                return (
                  (e = this._bodyBlob),
                  (t = new FileReader()),
                  (n = _(t)),
                  t.readAsText(e),
                  n
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (
                      var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                      r < t.length;
                      r++
                    )
                      n[r] = String.fromCharCode(t[r]);
                    return n.join('');
                  })(this._bodyArrayBuffer),
                );
              if (this._bodyFormData)
                throw new Error('could not read FormData body as text');
              return Promise.resolve(this._bodyText);
            }),
            o &&
              (this.formData = function () {
                return this.text().then(w);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        function m(e, t) {
          var n,
            r,
            o = (t = t || {}).body;
          if ('string' == typeof e) this.url = e;
          else {
            if (e.bodyUsed) throw new TypeError('Already read');
            (this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new h(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              o ||
                null == e._bodyInit ||
                ((o = e._bodyInit), (e.bodyUsed = !0));
          }
          if (
            ((this.credentials = t.credentials || this.credentials || 'omit'),
            (!t.headers && this.headers) || (this.headers = new h(t.headers)),
            (this.method =
              ((n = t.method || this.method || 'GET'),
              (r = n.toUpperCase()),
              d.indexOf(r) > -1 ? r : n)),
            (this.mode = t.mode || this.mode || null),
            (this.referrer = null),
            ('GET' === this.method || 'HEAD' === this.method) && o)
          )
            throw new TypeError('Body not allowed for GET or HEAD requests');
          this._initBody(o);
        }
        function w(e) {
          var t = new FormData();
          return (
            e
              .trim()
              .split('&')
              .forEach(function (e) {
                if (e) {
                  var n = e.split('='),
                    r = n.shift().replace(/\+/g, ' '),
                    o = n.join('=').replace(/\+/g, ' ');
                  t.append(decodeURIComponent(r), decodeURIComponent(o));
                }
              }),
            t
          );
        }
        function x(e, t) {
          t || (t = {}),
            (this.type = 'default'),
            (this.status = 'status' in t ? t.status : 200),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
            (this.headers = new h(t.headers)),
            (this.url = t.url || ''),
            this._initBody(e);
        }
      })('undefined' != typeof self ? self : this);
    },
    bjrj: function (e, t, n) {
      var r = n('KGgr').navigator;
      e.exports = (r && r.userAgent) || '';
    },
    bq52: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('bSmq'),
        i = n('p0R9'),
        u = ''.endsWith;
      r(r.P + r.F * n('5zJJ')('endsWith'), 'String', {
        endsWith: function (e) {
          var t = i(this, e, 'endsWith'),
            n = arguments.length > 1 ? arguments[1] : void 0,
            r = o(t.length),
            s = void 0 === n ? r : Math.min(o(n), r),
            a = String(e);
          return u ? u.call(t, a, s) : t.slice(s - a.length, s) === a;
        },
      });
    },
    c2y1: function (e, t, n) {
      var r = n('zY5Q'),
        o = n('9TFj'),
        i = function (e, t) {
          if ((o(e), !r(t) && null !== t))
            throw TypeError(t + ": can't set as prototype!");
        };
      e.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function (e, t, r) {
                try {
                  (r = n('hvJ5')(
                    Function.call,
                    n('/Hub').f(Object.prototype, '__proto__').set,
                    2,
                  ))(e, []),
                    (t = !(e instanceof Array));
                } catch (e) {
                  t = !0;
                }
                return function (e, n) {
                  return i(e, n), t ? (e.__proto__ = n) : r(e, n), e;
                };
              })({}, !1)
            : void 0),
        check: i,
      };
    },
    caxj: function (e, t, n) {
      var r,
        o,
        i,
        u = n('hvJ5'),
        s = n('7+od'),
        a = n('OpLF'),
        d = n('9S7S'),
        c = n('KGgr'),
        f = c.process,
        l = c.setImmediate,
        p = c.clearImmediate,
        h = c.MessageChannel,
        g = c.Dispatch,
        _ = 0,
        v = {},
        y = function () {
          var e = +this;
          if (v.hasOwnProperty(e)) {
            var t = v[e];
            delete v[e], t();
          }
        },
        b = function (e) {
          y.call(e.data);
        };
      (l && p) ||
        ((l = function (e) {
          for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
          return (
            (v[++_] = function () {
              s('function' == typeof e ? e : Function(e), t);
            }),
            r(_),
            _
          );
        }),
        (p = function (e) {
          delete v[e];
        }),
        'process' == n('qKVQ')(f)
          ? (r = function (e) {
              f.nextTick(u(y, e, 1));
            })
          : g && g.now
          ? (r = function (e) {
              g.now(u(y, e, 1));
            })
          : h
          ? ((i = (o = new h()).port2),
            (o.port1.onmessage = b),
            (r = u(i.postMessage, i, 1)))
          : c.addEventListener &&
            'function' == typeof postMessage &&
            !c.importScripts
          ? ((r = function (e) {
              c.postMessage(e + '', '*');
            }),
            c.addEventListener('message', b, !1))
          : (r =
              'onreadystatechange' in d('script')
                ? function (e) {
                    a.appendChild(
                      d('script'),
                    ).onreadystatechange = function () {
                      a.removeChild(this), y.call(e);
                    };
                  }
                : function (e) {
                    setTimeout(u(y, e, 1), 0);
                  })),
        (e.exports = { set: l, clear: p });
    },
    e08H: function (e, t, n) {
      var r = n('zY5Q'),
        o = n('c2y1').set;
      e.exports = function (e, t, n) {
        var i,
          u = t.constructor;
        return (
          u !== n &&
            'function' == typeof u &&
            (i = u.prototype) !== n.prototype &&
            r(i) &&
            o &&
            o(e, i),
          e
        );
      };
    },
    eKEP: function (e, t, n) {
      t.f = n('IXQl');
    },
    elwX: function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Number', { MAX_SAFE_INTEGER: 9007199254740991 });
    },
    esfA: function (e, t, n) {
      var r = n('vVR7'),
        o = n('T0pI');
      r(r.S + r.F * (Number.parseInt != o), 'Number', { parseInt: o });
    },
    f2KN: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = { allowDownsampling: !0 };
      function o(e, t) {
        return void 0 === t && (t = r), new i(e, t);
      }
      var i = (function () {
        function e(e, t) {
          var n = this;
          (this._resolutionMediaQueryList = null),
            (this._resolutionListener = function (e) {
              return n._onResolutionChanged();
            }),
            (this._canvasConfiguredListeners = []),
            (this.canvas = e),
            (this._canvasSize = {
              width: this.canvas.clientWidth,
              height: this.canvas.clientHeight,
            }),
            (this._options = t),
            this._configureCanvas(),
            this._installResolutionListener();
        }
        return (
          (e.prototype.destroy = function () {
            (this._canvasConfiguredListeners.length = 0),
              this._uninstallResolutionListener(),
              (this.canvas = null);
          }),
          Object.defineProperty(e.prototype, 'canvasSize', {
            get: function () {
              return {
                width: this._canvasSize.width,
                height: this._canvasSize.height,
              };
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.resizeCanvas = function (e) {
            (this._canvasSize = { width: e.width, height: e.height }),
              this._configureCanvas();
          }),
          Object.defineProperty(e.prototype, 'pixelRatio', {
            get: function () {
              var e = this.canvas.ownerDocument.defaultView;
              if (null == e)
                throw new Error('No window is associated with the canvas');
              return e.devicePixelRatio > 1 || this._options.allowDownsampling
                ? e.devicePixelRatio
                : 1;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.subscribeCanvasConfigured = function (e) {
            this._canvasConfiguredListeners.push(e);
          }),
          (e.prototype.unsubscribeCanvasConfigured = function (e) {
            this._canvasConfiguredListeners = this._canvasConfiguredListeners.filter(
              function (t) {
                return t != e;
              },
            );
          }),
          (e.prototype._configureCanvas = function () {
            var e = this.pixelRatio;
            (this.canvas.style.width = this._canvasSize.width + 'px'),
              (this.canvas.style.height = this._canvasSize.height + 'px'),
              (this.canvas.width = this._canvasSize.width * e),
              (this.canvas.height = this._canvasSize.height * e),
              this._emitCanvasConfigured();
          }),
          (e.prototype._emitCanvasConfigured = function () {
            var e = this;
            this._canvasConfiguredListeners.forEach(function (t) {
              return t.call(e);
            });
          }),
          (e.prototype._installResolutionListener = function () {
            if (null !== this._resolutionMediaQueryList)
              throw new Error('Resolution listener is already installed');
            var e = this.canvas.ownerDocument.defaultView;
            if (null == e)
              throw new Error('No window is associated with the canvas');
            var t = e.devicePixelRatio;
            (this._resolutionMediaQueryList = e.matchMedia(
              'all and (resolution: ' + t + 'dppx)',
            )),
              this._resolutionMediaQueryList.addListener(
                this._resolutionListener,
              );
          }),
          (e.prototype._uninstallResolutionListener = function () {
            null !== this._resolutionMediaQueryList &&
              (this._resolutionMediaQueryList.removeListener(
                this._resolutionListener,
              ),
              (this._resolutionMediaQueryList = null));
          }),
          (e.prototype._reinstallResolutionListener = function () {
            this._uninstallResolutionListener(),
              this._installResolutionListener();
          }),
          (e.prototype._onResolutionChanged = function () {
            this._configureCanvas(), this._reinstallResolutionListener();
          }),
          e
        );
      })();
    },
    f8KY: function (e, t, n) {
      var r = n('IxbO'),
        o = n('IXQl')('iterator'),
        i = n('V3uq');
      e.exports = n('5wX8').getIteratorMethod = function (e) {
        if (null != e) return e[o] || e['@@iterator'] || i[r(e)];
      };
    },
    fkSf: function (e, t, n) {
      var r = n('KGgr'),
        o = n('5wX8'),
        i = n('SwRI'),
        u = n('eKEP'),
        s = n('gPPl').f;
      e.exports = function (e) {
        var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        '_' == e.charAt(0) || e in t || s(t, e, { value: u.f(e) });
      };
    },
    fnBu: function (e, t, n) {
      var r = n('zY5Q'),
        o = n('B1QU'),
        i = n('IXQl')('species');
      e.exports = function (e) {
        var t;
        return (
          o(e) &&
            ('function' != typeof (t = e.constructor) ||
              (t !== Array && !o(t.prototype)) ||
              (t = void 0),
            r(t) && null === (t = t[i]) && (t = void 0)),
          void 0 === t ? Array : t
        );
      };
    },
    ftsf: function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Math', { sign: n('jrio') });
    },
    gKOe: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('bSmq'),
        i = n('p0R9'),
        u = ''.startsWith;
      r(r.P + r.F * n('5zJJ')('startsWith'), 'String', {
        startsWith: function (e) {
          var t = i(this, e, 'startsWith'),
            n = o(
              Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length),
            ),
            r = String(e);
          return u ? u.call(t, r, n) : t.slice(n, n + r.length) === r;
        },
      });
    },
    gPPl: function (e, t, n) {
      var r = n('9TFj'),
        o = n('O6f/'),
        i = n('YN/q'),
        u = Object.defineProperty;
      t.f = n('nULH')
        ? Object.defineProperty
        : function (e, t, n) {
            if ((r(e), (t = i(t, !0)), r(n), o))
              try {
                return u(e, t, n);
              } catch (e) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported!');
            return 'value' in n && (e[t] = n.value), e;
          };
    },
    hbEN: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('IzLi'),
        o = n('XqMk'),
        i = 'object' == typeof self && self && self.Object === Object && self,
        u = o.a || i || Function('return this')(),
        s = function () {
          return u.Date.now();
        },
        a = u.Symbol,
        d = Object.prototype,
        c = d.hasOwnProperty,
        f = d.toString,
        l = a ? a.toStringTag : void 0;
      var p = function (e) {
          var t = c.call(e, l),
            n = e[l];
          try {
            e[l] = void 0;
            var r = !0;
          } catch (e) {}
          var o = f.call(e);
          return r && (t ? (e[l] = n) : delete e[l]), o;
        },
        h = Object.prototype.toString;
      var g = function (e) {
          return h.call(e);
        },
        _ = a ? a.toStringTag : void 0;
      var v = function (e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : _ && _ in Object(e)
          ? p(e)
          : g(e);
      };
      var y = function (e) {
        return null != e && 'object' == typeof e;
      };
      var b = function (e) {
          return 'symbol' == typeof e || (y(e) && '[object Symbol]' == v(e));
        },
        m = /^\s+|\s+$/g,
        w = /^[-+]0x[0-9a-f]+$/i,
        x = /^0b[01]+$/i,
        k = /^0o[0-7]+$/i,
        S = parseInt;
      var O = function (e) {
          if ('number' == typeof e) return e;
          if (b(e)) return NaN;
          if (Object(r.a)(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = Object(r.a)(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(m, '');
          var n = x.test(e);
          return n || k.test(e)
            ? S(e.slice(2), n ? 2 : 8)
            : w.test(e)
            ? NaN
            : +e;
        },
        j = Math.max,
        E = Math.min;
      t.default = function (e, t, n) {
        var o,
          i,
          u,
          a,
          d,
          c,
          f = 0,
          l = !1,
          p = !1,
          h = !0;
        if ('function' != typeof e) throw new TypeError('Expected a function');
        function g(t) {
          var n = o,
            r = i;
          return (o = i = void 0), (f = t), (a = e.apply(r, n));
        }
        function _(e) {
          return (f = e), (d = setTimeout(y, t)), l ? g(e) : a;
        }
        function v(e) {
          var n = e - c;
          return void 0 === c || n >= t || n < 0 || (p && e - f >= u);
        }
        function y() {
          var e = s();
          if (v(e)) return b(e);
          d = setTimeout(
            y,
            (function (e) {
              var n = t - (e - c);
              return p ? E(n, u - (e - f)) : n;
            })(e),
          );
        }
        function b(e) {
          return (d = void 0), h && o ? g(e) : ((o = i = void 0), a);
        }
        function m() {
          var e = s(),
            n = v(e);
          if (((o = arguments), (i = this), (c = e), n)) {
            if (void 0 === d) return _(c);
            if (p) return clearTimeout(d), (d = setTimeout(y, t)), g(c);
          }
          return void 0 === d && (d = setTimeout(y, t)), a;
        }
        return (
          (t = O(t) || 0),
          Object(r.a)(n) &&
            ((l = !!n.leading),
            (u = (p = 'maxWait' in n) ? j(O(n.maxWait) || 0, t) : u),
            (h = 'trailing' in n ? !!n.trailing : h)),
          (m.cancel = function () {
            void 0 !== d && clearTimeout(d), (f = 0), (o = c = i = d = void 0);
          }),
          (m.flush = function () {
            return void 0 === d ? a : b(s());
          }),
          m
        );
      };
    },
    hrFL: function (e, t, n) {
      var r = n('KGgr').parseFloat,
        o = n('W+In').trim;
      e.exports =
        1 / r(n('YqzG') + '-0') != -1 / 0
          ? function (e) {
              var t = o(String(e), 3),
                n = r(t);
              return 0 === n && '-' == t.charAt(0) ? -0 : n;
            }
          : r;
    },
    hvJ5: function (e, t, n) {
      var r = n('1Vm/');
      e.exports = function (e, t, n) {
        if ((r(e), void 0 === t)) return e;
        switch (n) {
          case 1:
            return function (n) {
              return e.call(t, n);
            };
          case 2:
            return function (n, r) {
              return e.call(t, n, r);
            };
          case 3:
            return function (n, r, o) {
              return e.call(t, n, r, o);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      };
    },
    iBVM: function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Math', {
        log10: function (e) {
          return Math.log(e) * Math.LOG10E;
        },
      });
    },
    iP0q: function (e, t, n) {
      var r = n('/B3w'),
        o = n('H46L');
      e.exports = function (e) {
        return function (t, n) {
          var i,
            u,
            s = String(o(t)),
            a = r(n),
            d = s.length;
          return a < 0 || a >= d
            ? e
              ? ''
              : void 0
            : (i = s.charCodeAt(a)) < 55296 ||
              i > 56319 ||
              a + 1 === d ||
              (u = s.charCodeAt(a + 1)) < 56320 ||
              u > 57343
            ? e
              ? s.charAt(a)
              : i
            : e
            ? s.slice(a, a + 2)
            : u - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    },
    isQe: function (e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function (e, t) {
        return n.call(e, t);
      };
    },
    jjqu: function (e, t, n) {
      'use strict';
      var r, o, i, u, s, a;
      window.parent !== window &&
        window.CanvasRenderingContext2D &&
        window.TextMetrics &&
        (o = window.CanvasRenderingContext2D.prototype) &&
        o.hasOwnProperty('font') &&
        o.hasOwnProperty('mozTextStyle') &&
        'function' == typeof o.__lookupSetter__ &&
        (i = o.__lookupSetter__('font')) &&
        (o.__defineSetter__('font', function (e) {
          try {
            return i.call(this, e);
          } catch (e) {
            if ('NS_ERROR_FAILURE' !== e.name) throw e;
          }
        }),
        (u = o.measureText),
        (r = function () {
          (this.width = 0),
            (this.isFake = !0),
            (this.__proto__ = window.TextMetrics.prototype);
        }),
        (o.measureText = function (e) {
          try {
            return u.apply(this, arguments);
          } catch (e) {
            if ('NS_ERROR_FAILURE' !== e.name) throw e;
            return new r();
          }
        }),
        (s = o.fillText),
        (o.fillText = function (e, t, n, r) {
          try {
            s.apply(this, arguments);
          } catch (e) {
            if ('NS_ERROR_FAILURE' !== e.name) throw e;
          }
        }),
        (a = o.strokeText),
        (o.strokeText = function (e, t, n, r) {
          try {
            a.apply(this, arguments);
          } catch (e) {
            if ('NS_ERROR_FAILURE' !== e.name) throw e;
          }
        }));
    },
    jrio: function (e, t) {
      e.exports =
        Math.sign ||
        function (e) {
          return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
        };
    },
    kIXF: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('lrbo'),
        i = n('bjrj'),
        u = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
      r(r.P + r.F * u, 'String', {
        padEnd: function (e) {
          return o(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
        },
      });
    },
    khJW: function (e, t, n) {
      var r = n('gPPl'),
        o = n('yUtn');
      e.exports = n('nULH')
        ? function (e, t, n) {
            return r.f(e, t, o(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          };
    },
    ktZe: function (e, t, n) {
      'use strict';
      var r = n('/B3w'),
        o = n('H46L');
      e.exports = function (e) {
        var t = String(o(this)),
          n = '',
          i = r(e);
        if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
        for (; i > 0; (i >>>= 1) && (t += t)) 1 & i && (n += t);
        return n;
      };
    },
    lHEB: function (e, t, n) {
      var r = n('V3uq'),
        o = n('IXQl')('iterator'),
        i = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (r.Array === e || i[o] === e);
      };
    },
    lrbo: function (e, t, n) {
      var r = n('bSmq'),
        o = n('ktZe'),
        i = n('H46L');
      e.exports = function (e, t, n, u) {
        var s = String(i(e)),
          a = s.length,
          d = void 0 === n ? ' ' : String(n),
          c = r(t);
        if (c <= a || '' == d) return s;
        var f = c - a,
          l = o.call(d, Math.ceil(f / d.length));
        return l.length > f && (l = l.slice(0, f)), u ? l + s : s + l;
      };
    },
    mPZe: function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Math', {
        trunc: function (e) {
          return (e > 0 ? Math.floor : Math.ceil)(e);
        },
      });
    },
    mz5e: function (e, t, n) {
      'use strict';
      var r = n('vVR7'),
        o = n('p0R9');
      r(r.P + r.F * n('5zJJ')('includes'), 'String', {
        includes: function (e) {
          return !!~o(this, e, 'includes').indexOf(
            e,
            arguments.length > 1 ? arguments[1] : void 0,
          );
        },
      });
    },
    n0SC: function (e, t, n) {
      var r = n('vVR7'),
        o = n('yFUn')(!1);
      r(r.S, 'Object', {
        values: function (e) {
          return o(e);
        },
      });
    },
    nULH: function (e, t, n) {
      e.exports = !n('u52/')(function () {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    nc0P: function (e, t, n) {
      var r;
      !(function (o) {
        'use strict';
        var i,
          u = '[big.js] ',
          s = u + 'Invalid ',
          a = s + 'decimal places',
          d = {},
          c = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
        function f(e, t, n, r) {
          var o = e.c,
            i = e.e + t + 1;
          if (i < o.length) {
            if (1 === n) r = o[i] >= 5;
            else if (2 === n)
              r =
                o[i] > 5 ||
                (5 == o[i] &&
                  (r || i < 0 || void 0 !== o[i + 1] || 1 & o[i - 1]));
            else if (3 === n) r = r || !!o[0];
            else if (((r = !1), 0 !== n))
              throw Error('[big.js] Invalid rounding mode');
            if (i < 1)
              (o.length = 1), r ? ((e.e = -t), (o[0] = 1)) : (o[0] = e.e = 0);
            else {
              if (((o.length = i--), r))
                for (; ++o[i] > 9; ) (o[i] = 0), i-- || (++e.e, o.unshift(1));
              for (i = o.length; !o[--i]; ) o.pop();
            }
          } else if (n < 0 || n > 3 || n !== ~~n)
            throw Error('[big.js] Invalid rounding mode');
          return e;
        }
        function l(e, t, n, r) {
          var o,
            i,
            u = e.constructor,
            d = !e.c[0];
          if (void 0 !== n) {
            if (n !== ~~n || n < (3 == t) || n > 1e6)
              throw Error(3 == t ? s + 'precision' : a);
            for (
              n = r - (e = new u(e)).e,
                e.c.length > ++r && f(e, n, u.RM),
                2 == t && (r = e.e + n + 1);
              e.c.length < r;

            )
              e.c.push(0);
          }
          if (
            ((o = e.e),
            (n = (i = e.c.join('')).length),
            2 != t && (1 == t || (3 == t && r <= o) || o <= u.NE || o >= u.PE))
          )
            i =
              i.charAt(0) +
              (n > 1 ? '.' + i.slice(1) : '') +
              (o < 0 ? 'e' : 'e+') +
              o;
          else if (o < 0) {
            for (; ++o; ) i = '0' + i;
            i = '0.' + i;
          } else if (o > 0)
            if (++o > n) for (o -= n; o--; ) i += '0';
            else o < n && (i = i.slice(0, o) + '.' + i.slice(o));
          else n > 1 && (i = i.charAt(0) + '.' + i.slice(1));
          return e.s < 0 && (!d || 4 == t) ? '-' + i : i;
        }
        (d.abs = function () {
          var e = new this.constructor(this);
          return (e.s = 1), e;
        }),
          (d.cmp = function (e) {
            var t,
              n = this,
              r = n.c,
              o = (e = new n.constructor(e)).c,
              i = n.s,
              u = e.s,
              s = n.e,
              a = e.e;
            if (!r[0] || !o[0]) return r[0] ? i : o[0] ? -u : 0;
            if (i != u) return i;
            if (((t = i < 0), s != a)) return (s > a) ^ t ? 1 : -1;
            for (u = (s = r.length) < (a = o.length) ? s : a, i = -1; ++i < u; )
              if (r[i] != o[i]) return (r[i] > o[i]) ^ t ? 1 : -1;
            return s == a ? 0 : (s > a) ^ t ? 1 : -1;
          }),
          (d.div = function (e) {
            var t = this,
              n = t.constructor,
              r = t.c,
              o = (e = new n(e)).c,
              i = t.s == e.s ? 1 : -1,
              u = n.DP;
            if (u !== ~~u || u < 0 || u > 1e6) throw Error(a);
            if (!o[0]) throw Error('[big.js] Division by zero');
            if (!r[0]) return new n(0 * i);
            var s,
              d,
              c,
              l,
              p,
              h = o.slice(),
              g = (s = o.length),
              _ = r.length,
              v = r.slice(0, s),
              y = v.length,
              b = e,
              m = (b.c = []),
              w = 0,
              x = u + (b.e = t.e - e.e) + 1;
            for (b.s = i, i = x < 0 ? 0 : x, h.unshift(0); y++ < s; ) v.push(0);
            do {
              for (c = 0; c < 10; c++) {
                if (s != (y = v.length)) l = s > y ? 1 : -1;
                else
                  for (p = -1, l = 0; ++p < s; )
                    if (o[p] != v[p]) {
                      l = o[p] > v[p] ? 1 : -1;
                      break;
                    }
                if (!(l < 0)) break;
                for (d = y == s ? o : h; y; ) {
                  if (v[--y] < d[y]) {
                    for (p = y; p && !v[--p]; ) v[p] = 9;
                    --v[p], (v[y] += 10);
                  }
                  v[y] -= d[y];
                }
                for (; !v[0]; ) v.shift();
              }
              (m[w++] = l ? c : ++c),
                v[0] && l ? (v[y] = r[g] || 0) : (v = [r[g]]);
            } while ((g++ < _ || void 0 !== v[0]) && i--);
            return (
              m[0] || 1 == w || (m.shift(), b.e--),
              w > x && f(b, u, n.RM, void 0 !== v[0]),
              b
            );
          }),
          (d.eq = function (e) {
            return !this.cmp(e);
          }),
          (d.gt = function (e) {
            return this.cmp(e) > 0;
          }),
          (d.gte = function (e) {
            return this.cmp(e) > -1;
          }),
          (d.lt = function (e) {
            return this.cmp(e) < 0;
          }),
          (d.lte = function (e) {
            return this.cmp(e) < 1;
          }),
          (d.minus = d.sub = function (e) {
            var t,
              n,
              r,
              o,
              i = this,
              u = i.constructor,
              s = i.s,
              a = (e = new u(e)).s;
            if (s != a) return (e.s = -a), i.plus(e);
            var d = i.c.slice(),
              c = i.e,
              f = e.c,
              l = e.e;
            if (!d[0] || !f[0])
              return f[0] ? ((e.s = -a), e) : new u(d[0] ? i : 0);
            if ((s = c - l)) {
              for (
                (o = s < 0) ? ((s = -s), (r = d)) : ((l = c), (r = f)),
                  r.reverse(),
                  a = s;
                a--;

              )
                r.push(0);
              r.reverse();
            } else
              for (
                n = ((o = d.length < f.length) ? d : f).length, s = a = 0;
                a < n;
                a++
              )
                if (d[a] != f[a]) {
                  o = d[a] < f[a];
                  break;
                }
            if (
              (o && ((r = d), (d = f), (f = r), (e.s = -e.s)),
              (a = (n = f.length) - (t = d.length)) > 0)
            )
              for (; a--; ) d[t++] = 0;
            for (a = t; n > s; ) {
              if (d[--n] < f[n]) {
                for (t = n; t && !d[--t]; ) d[t] = 9;
                --d[t], (d[n] += 10);
              }
              d[n] -= f[n];
            }
            for (; 0 === d[--a]; ) d.pop();
            for (; 0 === d[0]; ) d.shift(), --l;
            return (
              d[0] || ((e.s = 1), (d = [(l = 0)])), (e.c = d), (e.e = l), e
            );
          }),
          (d.mod = function (e) {
            var t,
              n = this,
              r = n.constructor,
              o = n.s,
              i = (e = new r(e)).s;
            if (!e.c[0]) throw Error('[big.js] Division by zero');
            return (
              (n.s = e.s = 1),
              (t = 1 == e.cmp(n)),
              (n.s = o),
              (e.s = i),
              t
                ? new r(n)
                : ((o = r.DP),
                  (i = r.RM),
                  (r.DP = r.RM = 0),
                  (n = n.div(e)),
                  (r.DP = o),
                  (r.RM = i),
                  this.minus(n.times(e)))
            );
          }),
          (d.plus = d.add = function (e) {
            var t,
              n = this,
              r = n.constructor,
              o = n.s,
              i = (e = new r(e)).s;
            if (o != i) return (e.s = -i), n.minus(e);
            var u = n.e,
              s = n.c,
              a = e.e,
              d = e.c;
            if (!s[0] || !d[0]) return d[0] ? e : new r(s[0] ? n : 0 * o);
            if (((s = s.slice()), (o = u - a))) {
              for (
                o > 0 ? ((a = u), (t = d)) : ((o = -o), (t = s)), t.reverse();
                o--;

              )
                t.push(0);
              t.reverse();
            }
            for (
              s.length - d.length < 0 && ((t = d), (d = s), (s = t)),
                o = d.length,
                i = 0;
              o;
              s[o] %= 10
            )
              i = ((s[--o] = s[o] + d[o] + i) / 10) | 0;
            for (i && (s.unshift(i), ++a), o = s.length; 0 === s[--o]; )
              s.pop();
            return (e.c = s), (e.e = a), e;
          }),
          (d.pow = function (e) {
            var t = this,
              n = new t.constructor(1),
              r = n,
              o = e < 0;
            if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(s + 'exponent');
            for (o && (e = -e); 1 & e && (r = r.times(t)), (e >>= 1); )
              t = t.times(t);
            return o ? n.div(r) : r;
          }),
          (d.round = function (e, t) {
            var n = this.constructor;
            if (void 0 === e) e = 0;
            else if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(a);
            return f(new n(this), e, void 0 === t ? n.RM : t);
          }),
          (d.sqrt = function () {
            var e,
              t,
              n,
              r = this,
              o = r.constructor,
              i = r.s,
              s = r.e,
              a = new o(0.5);
            if (!r.c[0]) return new o(r);
            if (i < 0) throw Error(u + 'No square root');
            0 === (i = Math.sqrt(r + '')) || i === 1 / 0
              ? (((t = r.c.join('')).length + s) & 1 || (t += '0'),
                (s = (((s + 1) / 2) | 0) - (s < 0 || 1 & s)),
                (e = new o(
                  ((i = Math.sqrt(t)) == 1 / 0
                    ? '1e'
                    : (i = i.toExponential()).slice(0, i.indexOf('e') + 1)) + s,
                )))
              : (e = new o(i)),
              (s = e.e + (o.DP += 4));
            do {
              (n = e), (e = a.times(n.plus(r.div(n))));
            } while (n.c.slice(0, s).join('') !== e.c.slice(0, s).join(''));
            return f(e, (o.DP -= 4), o.RM);
          }),
          (d.times = d.mul = function (e) {
            var t,
              n = this,
              r = n.constructor,
              o = n.c,
              i = (e = new r(e)).c,
              u = o.length,
              s = i.length,
              a = n.e,
              d = e.e;
            if (((e.s = n.s == e.s ? 1 : -1), !o[0] || !i[0]))
              return new r(0 * e.s);
            for (
              e.e = a + d,
                u < s && ((t = o), (o = i), (i = t), (d = u), (u = s), (s = d)),
                t = new Array((d = u + s));
              d--;

            )
              t[d] = 0;
            for (a = s; a--; ) {
              for (s = 0, d = u + a; d > a; )
                (s = t[d] + i[a] * o[d - a - 1] + s),
                  (t[d--] = s % 10),
                  (s = (s / 10) | 0);
              t[d] = (t[d] + s) % 10;
            }
            for (s ? ++e.e : t.shift(), a = t.length; !t[--a]; ) t.pop();
            return (e.c = t), e;
          }),
          (d.toExponential = function (e) {
            return l(this, 1, e, e);
          }),
          (d.toFixed = function (e) {
            return l(this, 2, e, this.e + e);
          }),
          (d.toPrecision = function (e) {
            return l(this, 3, e, e - 1);
          }),
          (d.toString = function () {
            return l(this);
          }),
          (d.valueOf = d.toJSON = function () {
            return l(this, 4);
          }),
          ((i = (function e() {
            function t(n) {
              var r = this;
              if (!(r instanceof t)) return void 0 === n ? e() : new t(n);
              n instanceof t
                ? ((r.s = n.s), (r.e = n.e), (r.c = n.c.slice()))
                : (function (e, t) {
                    var n, r, o;
                    if (0 === t && 1 / t < 0) t = '-0';
                    else if (!c.test((t += ''))) throw Error(s + 'number');
                    (e.s = '-' == t.charAt(0) ? ((t = t.slice(1)), -1) : 1),
                      (n = t.indexOf('.')) > -1 && (t = t.replace('.', ''));
                    (r = t.search(/e/i)) > 0
                      ? (n < 0 && (n = r),
                        (n += +t.slice(r + 1)),
                        (t = t.substring(0, r)))
                      : n < 0 && (n = t.length);
                    for (o = t.length, r = 0; r < o && '0' == t.charAt(r); )
                      ++r;
                    if (r == o) e.c = [(e.e = 0)];
                    else {
                      for (; o > 0 && '0' == t.charAt(--o); );
                      for (e.e = n - r - 1, e.c = [], n = 0; r <= o; )
                        e.c[n++] = +t.charAt(r++);
                    }
                  })(r, n),
                (r.constructor = t);
            }
            return (
              (t.prototype = d),
              (t.DP = 20),
              (t.RM = 1),
              (t.NE = -7),
              (t.PE = 21),
              (t.version = '5.2.2'),
              t
            );
          })()).default = i.Big = i),
          void 0 ===
            (r = function () {
              return i;
            }.call(t, n, t, e)) || (e.exports = r);
      })();
    },
    nib0: function (e, t, n) {
      var r = n('zY5Q'),
        o = n('qKVQ'),
        i = n('IXQl')('match');
      e.exports = function (e) {
        var t;
        return r(e) && (void 0 !== (t = e[i]) ? !!t : 'RegExp' == o(e));
      };
    },
    oYVD: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        o = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      function i() {
        if (r) return r;
        if (!o || !window.document.body) return 'indeterminate';
        var e = window.document.createElement('div');
        return (
          e.appendChild(document.createTextNode('ABCD')),
          (e.dir = 'rtl'),
          (e.style.fontSize = '14px'),
          (e.style.width = '4px'),
          (e.style.height = '1px'),
          (e.style.position = 'absolute'),
          (e.style.top = '-1000px'),
          (e.style.overflow = 'scroll'),
          document.body.appendChild(e),
          (r = 'reverse'),
          e.scrollLeft > 0
            ? (r = 'default')
            : ((e.scrollLeft = 1), 0 === e.scrollLeft && (r = 'negative')),
          document.body.removeChild(e),
          r
        );
      }
      (t._setScrollType = function (e) {
        r = e;
      }),
        (t.detectScrollType = i),
        (t.getNormalizedScrollLeft = function (e, t) {
          var n = e.scrollLeft;
          if ('rtl' !== t) return n;
          var r = i();
          if ('indeterminate' === r) return Number.NaN;
          switch (r) {
            case 'negative':
              return e.scrollWidth - e.clientWidth + n;
            case 'reverse':
              return e.scrollWidth - e.clientWidth - n;
          }
          return n;
        }),
        (t.setNormalizedScrollLeft = function (e, t, n) {
          if ('rtl' === n) {
            var r = i();
            if ('indeterminate' !== r)
              switch (r) {
                case 'negative':
                  e.scrollLeft = e.clientWidth - e.scrollWidth + t;
                  break;
                case 'reverse':
                  e.scrollLeft = e.scrollWidth - e.clientWidth - t;
                  break;
                default:
                  e.scrollLeft = t;
              }
          } else e.scrollLeft = t;
        });
    },
    ogJP: function (e, t, n) {
      (function (e) {
        var t,
          n =
            Array.isArray ||
            function (e) {
              return '[object Array]' === Object.prototype.toString.call(e);
            },
          r = function (e) {
            return 'object' == typeof e && null !== e;
          };
        function o(e) {
          return 'number' == typeof e && isFinite(e);
        }
        function i(e) {
          return null != e && e.constructor === Function;
        }
        function u(e, t) {
          e.prototype = Object.create(t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          });
        }
        'undefined' != typeof window
          ? ((t = window.TradingView = window.TradingView || {}),
            (window.isNumber = o),
            (window.isFunction = i),
            (window.inherit = u),
            (window.isArray = n))
          : (t = this.TradingView = this.TradingView || {}),
          (t.isNaN = function (e) {
            return !(e <= 0 || e > 0);
          }),
          (t.isAbsent = function (e) {
            return null == e;
          }),
          (t.isExistent = function (e) {
            return null != e;
          }),
          (Number.isNaN =
            Number.isNaN ||
            function (e) {
              return e != e;
            }),
          (t.isSameType = function (e, t) {
            return Number.isNaN(e) || Number.isNaN(t)
              ? Number.isNaN(e) === Number.isNaN(t)
              : {}.toString.call(e) === {}.toString.call(t);
          }),
          (t.isInteger = function (e) {
            return 'number' == typeof e && e % 1 == 0;
          }),
          (t.parseBool = function (e) {
            return !0 === e || 'true' === e;
          }),
          (t.isBoolean = function (e) {
            return !0 === e || !1 === e;
          }),
          (t.isString = function (e) {
            return null != e && e.constructor === String;
          }),
          (t.isInherited = function (e, t) {
            if (null == e || null == e.prototype)
              throw new TypeError(
                'isInherited: child should be a constructor function',
              );
            if (null == t || null == t.prototype)
              throw new TypeError(
                'isInherited: parent should be a constructor function',
              );
            return e.prototype instanceof t || e.prototype === t.prototype;
          }),
          (t.TypeValidator = function (e) {
            this.m_type = e;
          }),
          (t.TypeValidator.prototype.check = function (e) {
            return (
              e.constructor === this.m_type ||
              t.isInherited(e.constructor, this.m_type)
            );
          }),
          (t.PredicateValidator = function (e) {
            this.m_predicate = e;
          }),
          (t.PredicateValidator.prototype.check = function (e) {
            return this.m_predicate(e);
          }),
          (t.clone = function (e) {
            if (!e || 'object' != typeof e) return e;
            var n, r, o;
            for (r in ((n = 'function' == typeof e.pop ? [] : {}), e))
              e.hasOwnProperty(r) &&
                ((o = e[r]),
                (n[r] = o && 'object' == typeof o ? t.clone(o) : o));
            return n;
          }),
          (t.deepEquals = function (e, r, o) {
            if ((o || (o = ''), e === r)) return [!0, o];
            if (
              (i(e) && (e = void 0),
              i(r) && (r = void 0),
              void 0 === e && void 0 !== r)
            )
              return [!1, o];
            if (void 0 === r && void 0 !== e) return [!1, o];
            if (null === e && null !== r) return [!1, o];
            if (null === r && null !== e) return [!1, o];
            if ('object' != typeof e && 'object' != typeof r)
              return [e === r, o];
            if (Array.isArray(e) && Array.isArray(r)) {
              var u = e.length;
              if (u !== r.length) return [!1, o];
              for (var s = 0; s < u; s++) {
                if (!(d = t.deepEquals(e[s], r[s], o + '[' + s + ']'))[0])
                  return d;
              }
              return [!0, o];
            }
            if (n(e) || n(r)) return [!1, o];
            if (Object.keys(e).length !== Object.keys(r).length) return [!1, o];
            for (var a in e) {
              var d;
              if (!(d = t.deepEquals(e[a], r[a], o + '[' + a + ']'))[0])
                return d;
            }
            return [!0, o];
          }),
          (t.merge = function (e, n) {
            for (var r in n)
              null !== n[r] && 'object' == typeof n[r] && e.hasOwnProperty(r)
                ? t.merge(e[r], n[r])
                : (e[r] = n[r]);
            return e;
          }),
          (t.mergeObj = function (e, n) {
            for (var r in n)
              n[r].constructor === Object && e.hasOwnProperty(r)
                ? t.mergeObj(e[r], n[r])
                : (e[r] = n[r]);
            return e;
          }),
          (t.mergeWithRules = function (e, n, r, o) {
            for (var i in n) {
              var u = o ? o + '.' + i : i;
              r && u in r
                ? (e[i] = r[u](e[i], n[i]))
                : 'object' == typeof n[i] && e.hasOwnProperty(i)
                ? t.merge(e[i], n[i], r, u)
                : (e[i] = n[i]);
            }
          }),
          (t.sortMultipleFunction = function () {
            var e = [].slice.call(arguments),
              t = e.length;
            return function (n, r) {
              var o, i, u, s, a, d, c;
              for (
                c = 0;
                c < t &&
                ((d = 0),
                (o = n[(s = 'string' == typeof (u = e[c]) ? u : u.name)]),
                (i = r[s]),
                'function' == typeof u.fn && ((o = u.fn(o)), (i = u.fn(i))),
                (a = u.reverse ? -1 : 1),
                o < i && (d = -1 * a),
                o > i && (d = 1 * a),
                0 === d);
                c++
              );
              return d;
            };
          }),
          e &&
            e.exports &&
            (e.exports = {
              inherit: u,
              clone: t.clone,
              merge: t.merge,
              isNumber: o,
              isInteger: t.isInteger,
              isBoolean: t.isBoolean,
              isString: t.isString,
              isObject: r,
              isHashObject: function (e) {
                return (
                  r(e) &&
                  -1 !== e.constructor.toString().indexOf('function Object')
                );
              },
              isPromise: function (e) {
                return r(e) && e.then;
              },
              isNaN: t.isNaN,
              isAbsent: t.isAbsent,
              isExistent: t.isExistent,
              isSameType: t.isSameType,
              isArray: n,
              isFunction: i,
              parseBool: t.parseBool,
              deepEquals: t.deepEquals,
              notNull: function (e) {
                return null !== e;
              },
              notUndefined: function (e) {
                return void 0 !== e;
              },
              declareClassAsPureInterface: function (e, t) {
                for (var n in e.prototype)
                  'function' == typeof e.prototype[n] &&
                    e.prototype.hasOwnProperty(n) &&
                    (e.prototype[n] = function () {
                      throw new Error(
                        t +
                          '::' +
                          n +
                          ' is an interface member declaration and must be overloaded in order to be called',
                      );
                    });
              },
              requireFullInterfaceImplementation: function (e, t, n, r) {
                for (var o in n.prototype)
                  if ('function' == typeof n.prototype[o] && !e.prototype[o])
                    throw new Error(
                      'Interface implementation assertion failed: ' +
                        t +
                        ' does not implement ' +
                        r +
                        '::' +
                        o +
                        ' function',
                    );
              },
            });
      }.call(this, n('YuTi')(e)));
    },
    p0R9: function (e, t, n) {
      var r = n('nib0'),
        o = n('H46L');
      e.exports = function (e, t, n) {
        if (r(t)) throw TypeError('String#' + n + " doesn't accept regex!");
        return String(o(e));
      };
    },
    'pND+': function (e, t, n) {
      var r = n('8ICS')('keys'),
        o = n('QqfT');
      e.exports = function (e) {
        return r[e] || (r[e] = o(e));
      };
    },
    pZZ2: function (e, t, n) {
      var r = n('isQe'),
        o = n('XSq2'),
        i = n('pND+')('IE_PROTO'),
        u = Object.prototype;
      e.exports =
        Object.getPrototypeOf ||
        function (e) {
          return (
            (e = o(e)),
            r(e, i)
              ? e[i]
              : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? u
              : null
          );
        };
    },
    pipr: function (e, t, n) {
      e.exports = n('8ICS')('native-function-to-string', Function.toString);
    },
    qFKp: function (e, t, n) {
      'use strict';
      const { mobiletouch: r, touch: o } = n('8+VR');
      var i,
        u,
        s,
        a,
        d,
        c = (window.TradingView = window.TradingView || {}),
        f = window.chrome && window.chrome.runtime,
        l = window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
        p = /\sEdge\/\d\d\b/.test(navigator.userAgent),
        h = 'msHidden' in window.document,
        g =
          navigator.vendor &&
          navigator.vendor.indexOf('Apple') > -1 &&
          -1 === navigator.userAgent.indexOf('CriOS') &&
          -1 === navigator.userAgent.indexOf('FxiOS');
      (c.className = function (e) {
        for (var t in this) if (c[t] === e) return t;
        return null;
      }),
        (c.isMobile =
          ((i = /Android/i.test(navigator.userAgent)),
          (u = /BlackBerry/i.test(navigator.userAgent)),
          (s = /iPhone|iPad|iPod/.test(navigator.platform)),
          (a = /Opera Mini/i.test(navigator.userAgent)),
          (d = i || u || s || a),
          {
            Android: function () {
              return i;
            },
            BlackBerry: function () {
              return u;
            },
            iOS: function () {
              return s;
            },
            Opera: function () {
              return a;
            },
            any: function () {
              return d;
            },
          })),
        (c.supportTouch = function () {
          return r || o || c.isMobile.any();
        }),
        (c.onWidget = function () {
          for (
            var e = [
                '^widgetembed/?$',
                '^cmewidgetembed/?$',
                '^([0-9a-zA-Z-]+)/widgetembed/?$',
                '^([0-9a-zA-Z-]+)/widgetstatic/?$',
                '^([0-9a-zA-Z-]+)?/?miniwidgetembed/?$',
                '^([0-9a-zA-Z-]+)?/?mediumwidgetembed/?$',
                '^embed(-static)?/([0-9a-zA-Z]{8})/?$',
                '^widgetpopup/?$',
                '^extension/?$',
                '^chatwidgetembed/?$',
                '^ideaswidgetembed/?$',
                '^ideas-widget/?$',
                '^view-idea-widget/([0-9a-zA-Z]{8})/?$',
                '^user-info-widget/?$',
                '^user-info-widget-get/(.+?)?/?$',
                '^embed-quotes-provider/?$',
                '^idea-popup/?$',
                '^hotlistswidgetembed/?$',
                '^([0-9a-zA-Z-]+)/hotlistswidgetembed/?$',
                '^marketoverviewwidgetembed/?$',
                '^([0-9a-zA-Z-]+)/marketoverviewwidgetembed/?$',
                '^eventswidgetembed/?$',
                '^tickerswidgetembed/?$',
                '^forexcrossrateswidgetembed/?$',
                '^forexheatmapwidgetembed/?$',
                '^marketquoteswidgetembed/?$',
                '^screenerwidget/?$',
                '^cryptomktscreenerwidget/?$',
                '^([0-9a-zA-Z-]+)/cryptomktscreenerwidget/?$',
                '^([0-9a-zA-Z-]+)/marketquoteswidgetembed/?$',
                '^technical-analysis-widget-embed/$',
                '^singlequotewidgetembed/?$',
                '^([0-9a-zA-Z-]+)/singlequotewidgetembed/?$',
                '^embed-widget/([0-9a-zA-Z-]+)/(([0-9a-zA-Z-]+)/)?$',
              ],
              t = window.location.pathname.replace(/^\//, ''),
              n = e.length - 1;
            n >= 0;
            n--
          )
            if (new RegExp(e[n]).test(t)) return !0;
          return !1;
        }),
        (c.onOrder = function () {
          return '/order/' === window.location.pathname;
        }),
        (e.exports.isMac = function () {
          return /mac/i.test(navigator.platform);
        }),
        (e.exports.isDesktopApp = function () {
          return /TVDesktop/i.test(navigator.userAgent);
        }),
        (e.exports.CheckMobile = c.isMobile),
        (e.exports.onWidget = c.onWidget),
        (e.exports.supportTouch = c.supportTouch),
        (e.exports.checkPageType = function (e) {
          return (
            new URLSearchParams(window.location.search).get('page_type') === e
          );
        }),
        (e.exports.isChrome = f),
        (e.exports.isFF = l),
        (e.exports.isEdge = p),
        (e.exports.isIE = h),
        (e.exports.isSafari = g),
        (e.exports.onOrder = c.onOrder),
        (e.exports.onGoPro = function () {
          return '/gopro/' === window.location.pathname;
        });
    },
    qKVQ: function (e, t) {
      var n = {}.toString;
      e.exports = function (e) {
        return n.call(e).slice(8, -1);
      };
    },
    qUYv: function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Number', {
        isNaN: function (e) {
          return e != e;
        },
      });
    },
    qlfx: function (e) {
      e.exports = JSON.parse(
        '{"14851":{},"custom_items_in_context_menu":{},"websocket_connection":{},"countdown":{},"symbol_search_parser_mixin":{},"show_pro_features":{},"daily_timeframe_suffix":{},"symbollist_context_menu":{},"pay_attention_to_ticker_not_symbol":{},"graying_disabled_tools_enabled":{},"update_study_formatter_on_symbol_resolve":{},"constraint_dialogs_movement":{},"phone_verification":{},"show_trading_notifications_history":{},"show_interval_dialog_on_key_press":{},"header_interval_dialog_button":{"subsets":["show_interval_dialog_on_key_press"]},"header_fullscreen_button":{},"header_symbol_search":{},"symbol_search_hot_key":{},"header_resolutions":{"subsets":["header_interval_dialog_button"]},"header_chart_type":{},"header_settings":{},"header_indicators":{},"header_compare":{},"header_undo_redo":{},"header_screenshot":{},"header_saveload":{},"study_on_study":{},"scales_date_format":{},"header_widget":{"subsets":["header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_settings","header_indicators","header_compare","header_undo_redo","header_fullscreen_button","compare_symbol","header_screenshot"]},"legend_widget":{},"compare_symbol":{"subsets":["header_compare"]},"property_pages":{"subsets":["show_chart_property_page","chart_property_page"]},"show_chart_property_page":{},"chart_property_page":{"subsets":["chart_property_page_scales","chart_property_page_trading","chart_property_page_right_margin_editor"]},"disable_userlink_popup":{},"left_toolbar":{},"hide_left_toolbar_by_default":{},"control_bar":{},"widget_logo":{},"timeframes_toolbar":{},"edit_buttons_in_legend":{"subsets":["show_hide_button_in_legend","format_button_in_legend","study_buttons_in_legend","delete_button_in_legend"]},"hide_legend_by_default":{},"show_hide_button_in_legend":{},"object_tree_legend_mode":{},"format_button_in_legend":{},"study_buttons_in_legend":{},"delete_button_in_legend":{},"broker_button":{},"buy_sell_buttons":{"subsets":["broker_button"]},"pane_context_menu":{},"scales_context_menu":{},"legend_context_menu":{},"no_layout_top_offset":{},"context_menus":{"subsets":["pane_context_menu","scales_context_menu","legend_context_menu","objects_tree_context_menu"]},"items_favoriting":{},"save_chart_properties_to_local_storage":{},"use_localstorage_for_settings":{"subsets":["items_favoriting","save_chart_properties_to_local_storage"]},"handle_scale":{"subsets":["mouse_wheel_scale","pinch_scale","axis_pressed_mouse_move_scale"]},"handle_scroll":{"subsets":["mouse_wheel_scroll","pressed_mouse_move_scroll","horz_touch_drag_scroll","vert_touch_drag_scroll"]},"plain_studymarket":{},"trading_watch_positions":{},"disable_resolution_rebuild":{},"border_around_the_chart":{},"charting_library_debug_mode":{},"log_data_request_time":{},"saveload_requires_authentication":{},"saveload_storage_customization":{},"new_chart_creation_available":{},"volume_force_overlay":{},"create_volume_indicator_by_default":{},"create_volume_indicator_by_default_once":{},"saved_charts_count_restriction":{},"lean_chart_load":{},"stop_study_on_restart":{},"star_some_intervals_by_default":{},"predefined_items_only_may_be_starred":{},"move_logo_to_main_pane":{},"show_animated_logo":{},"link_to_tradingview":{},"logo_without_link":{},"right_bar_stays_on_scroll":{},"chart_content_overrides_by_defaults":{},"snapshot_trading_drawings":{},"allow_supported_resolutions_set_only":{},"study_market_minimized":{},"widgetbar_tabs":{"subsets":["right_toolbar"]},"show_object_tree":{"subsets":["right_toolbar"]},"dome_widget":{"subsets":["right_toolbar","showdom_button"]},"collapsible_header":{},"show_extension_popup":{},"study_templates":{},"side_toolbar_in_fullscreen_mode":{},"header_in_fullscreen_mode":{},"remove_library_container_border":{},"whotrades_auth_only":{},"support_multicharts":{},"display_market_status":{},"display_data_mode":{},"show_chart_warn_message":{},"datasource_copypaste":{},"drawing_templates":{"subsets":["linetoolpropertieswidget_template_button"]},"expand_symbolsearch_items":{},"symbol_search_three_columns_exchanges":{},"symbol_search_flags":{},"symbol_search_limited_exchanges":{},"bugreport_button":{"subsets":["right_toolbar"]},"footer_publish_idea_button":{},"showdom_button":{"subsets":["right_toolbar"]},"text_notes":{},"show_source_code":{},"symbol_info":{},"no_bars_status":{},"clear_bars_on_series_error":{},"hide_loading_screen_on_series_error":{},"seconds_resolution":{},"dont_show_boolean_study_arguments":{},"hide_last_na_study_output":{},"price_scale_always_last_bar_value":{},"study_dialog_search_control":{},"study_dialog_fundamentals_economy_addons":{},"uppercase_instrument_names":{},"cqg_trading_confirm_risks":{},"trading_notifications":{},"chart_crosshair_menu":{},"japanese_chart_styles":{},"hide_series_legend_item":{},"hide_study_overlay_legend_item":{},"hide_study_compare_legend_item":{},"linetoolpropertieswidget_template_button":{},"use_overrides_for_overlay":{},"timezone_menu":{},"main_series_scale_menu":{},"show_login_dialog":{},"remove_img_from_rss":{},"bars_marks":{},"chart_scroll":{},"chart_zoom":{},"source_selection_markers":{},"low_density_bars":{},"end_of_period_timescale_marks":{},"open_account_manager":{},"show_order_panel_on_start":{},"order_panel":{"subsets":["order_panel_close_button","order_panel_undock","right_toolbar","order_info"]},"multiple_watchlists":{},"study_overlay_compare_legend_option":{},"custom_resolutions":{},"referral_program_for_widget_owners":{},"mobile_app_force_chart_maximize":{},"mobile_app_hide_toolbars":{},"mobile_app_hide_layout_buttons_on_chart_toolbar":{},"mobile_app_hide_series_control_bar":{},"mobile_trading":{},"no_min_chart_width":{},"lock_visible_time_range_on_resize":{},"pricescale_currency":{},"referral_program_policy_aggressive":{"subsets":["referral_program_policy_passive","referral_program_policy_normal"]},"referral_program_policy_normal":{"subsets":["referral_program_policy_passive","header_fake_features_buttons","custom_resolutions"]},"cropped_tick_marks":{},"trading_account_manager":{},"disable_sameinterval_aligning":{},"display_legend_on_all_charts":{},"chart_style_hilo":{},"pricescale_unit":{},"show_spread_operators":{},"hide_exponentiation_spread_operator":{},"hide_reciprocal_spread_operator":{},"compare_symbol_search_spread_operators":{},"studies_symbol_search_spread_operators":{},"hide_resolution_in_legend":{},"hide_unresolved_symbols_in_legend":{},"fix_left_edge":{},"study_symbol_ticker_description":{},"two_character_bar_marks_labels":{},"tick_resolution":{},"secondary_series_extend_time_scale":{},"hide_volume_ma":{},"small_no_display":{},"charting_library_single_symbol_request":{},"use_ticker_on_symbol_info_update":{},"show_zoom_and_move_buttons_on_touch":{},"tv_production":{"subsets":["auto_enable_symbol_labels","show_pro_features","symbol_search_parser_mixin","symbollist_context_menu","websocket_connection","header_fullscreen_button","header_widget","dont_show_boolean_study_arguments","left_toolbar","buy_sell_buttons","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","uppercase_instrument_names","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","new_chart_creation_available","saved_charts_count_restriction","create_volume_indicator_by_default","create_volume_indicator_by_default_once","charts_auto_save","save_old_chart_before_save_as","chart_content_overrides_by_defaults","alerts","show_extension_popup","header_saveload","header_layouttoggle","datasource_copypaste","show_saved_watchlists","watchlists_from_to_file","add_to_watchlist","property_pages","support_multicharts","display_market_status","display_data_mode","show_chart_warn_message","support_manage_drawings","widgetbar_tabs","study_templates","collapsible_header","drawing_templates","footer_publish_idea_button","text_notes","show_source_code","trading_watch_positions","symbol_info","linetoolpropertieswidget_template_button","cqg_trading_confirm_risks","trading_notifications","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","phone_verification","chart_events","custom_resolutions","compare_symbol","study_on_study","japanese_chart_styles","show_login_dialog","dome_widget","bars_marks","chart_scroll","chart_zoom","show_trading_notifications_history","source_selection_markers","study_dialog_fundamentals_economy_addons","multiple_watchlists","marked_symbols","order_panel","pricescale_currency","show_animated_logo","pricescale_currency","show_object_tree","scales_date_format","popup_hints","show_right_widgets_panel_by_default","compare_recent_symbols_enabled"]},"browser_extension":{"subsets":["disable_userlink_popup","show_pro_features","show_saved_watchlists","display_market_status","display_data_mode","show_chart_warn_message","widgetbar_tabs","show_login_dialog"]},"widget":{"subsets":["auto_enable_symbol_labels","show_pro_features","symbol_search_parser_mixin","symbollist_context_menu","websocket_connection","uppercase_instrument_names","left_toolbar","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","create_volume_indicator_by_default","create_volume_indicator_by_default_once","dont_show_boolean_study_arguments","header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_compare","header_indicators","star_some_intervals_by_default","display_market_status","display_data_mode","show_chart_warn_message","symbol_info","linetoolpropertieswidget_template_button","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","widgetbar_tabs","compare_symbol","show_login_dialog","plain_studymarket","japanese_chart_styles","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","show_right_widgets_panel_by_default"]},"bovespa_widget":{"subsets":["widget","header_settings","linetoolpropertieswidget_template_button","compare_recent_symbols_enabled"]},"charting_library_base":{"subsets":["14851","allow_supported_resolutions_set_only","auto_enable_symbol_labels","border_around_the_chart","collapsible_header","constraint_dialogs_movement","context_menus","control_bar","create_volume_indicator_by_default","custom_items_in_context_menu","datasource_copypaste","daily_timeframe_suffix","uppercase_instrument_names","display_market_status","edit_buttons_in_legend","object_tree_legend_mode","graying_disabled_tools_enabled","header_widget","legend_widget","header_saveload","dont_show_boolean_study_arguments","lean_chart_load","left_toolbar","trading_watch_positions","link_to_tradingview","pay_attention_to_ticker_not_symbol","plain_studymarket","predefined_items_only_may_be_starred","refresh_saved_charts_list_on_dialog_show","right_bar_stays_on_scroll","saveload_storage_customization","stop_study_on_restart","timeframes_toolbar","symbol_search_hot_key","update_study_formatter_on_symbol_resolve","update_timeframes_set_on_symbol_resolve","use_localstorage_for_settings","volume_force_overlay","widget_logo","countdown","use_overrides_for_overlay","trading_notifications","compare_symbol","symbol_info","timezone_menu","main_series_scale_menu","study_dialog_search_control","create_volume_indicator_by_default_once","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","go_to_date","adaptive_logo","show_animated_logo","handle_scale","handle_scroll","shift_visible_range_on_new_bar","chart_content_overrides_by_defaults","cropped_tick_marks","scales_date_format","popup_hints","save_shortcut","show_right_widgets_panel_by_default","show_object_tree","insert_indicator_dialog_shortcut","compare_recent_symbols_enabled"]},"charting_library":{"subsets":["charting_library_base"]},"static_charts_service":{"subsets":["charting_library","disable_resolution_rebuild","log_data_request_time"]},"trading_terminal":{"subsets":["charting_library_base","showdom_button","support_multicharts","header_layouttoggle","japanese_chart_styles","chart_property_page_trading","add_to_watchlist","open_account_manager","show_dom_first_time","order_panel","buy_sell_buttons","multiple_watchlists","show_trading_notifications_history","always_pass_called_order_to_modify","show_object_tree","drawing_templates","trading_account_manager","chart_crosshair_menu","compare_recent_symbols_enabled"]}}',
      );
    },
    rePB: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    s245: function (e, t, n) {
      var r = n('9TFj'),
        o = n('1Vm/'),
        i = n('IXQl')('species');
      e.exports = function (e, t) {
        var n,
          u = r(e).constructor;
        return void 0 === u || null == (n = r(u)[i]) ? t : o(n);
      };
    },
    s3mU: function (e, t, n) {
      var r = n('6Ngl'),
        o = n('C9Yf').f,
        i = {}.toString,
        u =
          'object' == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      e.exports.f = function (e) {
        return u && '[object Window]' == i.call(e)
          ? (function (e) {
              try {
                return o(e);
              } catch (e) {
                return u.slice();
              }
            })(e)
          : o(r(e));
      };
    },
    tB8R: function (e, t, n) {
      var r = n('vVR7');
      r(r.S, 'Number', { isInteger: n('Kc4g') });
    },
    'u52/': function (e, t) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    uBJQ: function (e, t, n) {
      var r = n('vVR7'),
        o = n('yFUn')(!0);
      r(r.S, 'Object', {
        entries: function (e) {
          return o(e);
        },
      });
    },
    utAV: function (e, t, n) {
      var r = n('zY5Q');
      e.exports = function (e, t) {
        if (!r(e) || e._t !== t)
          throw TypeError('Incompatible receiver, ' + t + ' required!');
        return e;
      };
    },
    vRGa: function (e, t) {
      t.f = {}.propertyIsEnumerable;
    },
    vVR7: function (e, t, n) {
      var r = n('KGgr'),
        o = n('5wX8'),
        i = n('khJW'),
        u = n('AZRH'),
        s = n('hvJ5'),
        a = function (e, t, n) {
          var d,
            c,
            f,
            l,
            p = e & a.F,
            h = e & a.G,
            g = e & a.S,
            _ = e & a.P,
            v = e & a.B,
            y = h ? r : g ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
            b = h ? o : o[t] || (o[t] = {}),
            m = b.prototype || (b.prototype = {});
          for (d in (h && (n = t), n))
            (f = ((c = !p && y && void 0 !== y[d]) ? y : n)[d]),
              (l =
                v && c
                  ? s(f, r)
                  : _ && 'function' == typeof f
                  ? s(Function.call, f)
                  : f),
              y && u(y, d, f, e & a.U),
              b[d] != f && i(b, d, l),
              _ && m[d] != f && (m[d] = f);
        };
      (r.core = o),
        (a.F = 1),
        (a.G = 2),
        (a.S = 4),
        (a.P = 8),
        (a.B = 16),
        (a.W = 32),
        (a.U = 64),
        (a.R = 128),
        (e.exports = a);
    },
    voXF: function (e, t, n) {
      'use strict';
      var r = n('OlM/'),
        o = n('JwWU'),
        i = n('V3uq'),
        u = n('6Ngl');
      (e.exports = n('Fu1i')(
        Array,
        'Array',
        function (e, t) {
          (this._t = u(e)), (this._i = 0), (this._k = t);
        },
        function () {
          var e = this._t,
            t = this._k,
            n = this._i++;
          return !e || n >= e.length
            ? ((this._t = void 0), o(1))
            : o(0, 'keys' == t ? n : 'values' == t ? e[n] : [n, e[n]]);
        },
        'values',
      )),
        (i.Arguments = i.Array),
        r('keys'),
        r('values'),
        r('entries');
    },
    'xL+S': function (e, t, n) {
      'use strict';
      var r = n('285N'),
        o = n('utAV');
      e.exports = n('0+LD')(
        'Set',
        function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function (e) {
            return r.def(o(this, 'Set'), (e = 0 === e ? 0 : e), e);
          },
        },
        r,
      );
    },
    xjCr: function (e, t, n) {
      var r = n('WJeB'),
        o = n('IbiK');
      e.exports =
        Object.keys ||
        function (e) {
          return r(e, o);
        };
    },
    yFUn: function (e, t, n) {
      var r = n('xjCr'),
        o = n('6Ngl'),
        i = n('vRGa').f;
      e.exports = function (e) {
        return function (t) {
          for (var n, u = o(t), s = r(u), a = s.length, d = 0, c = []; a > d; )
            i.call(u, (n = s[d++])) && c.push(e ? [n, u[n]] : u[n]);
          return c;
        };
      };
    },
    yLpj: function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (e) {
        'object' == typeof window && (n = window);
      }
      e.exports = n;
    },
    yUtn: function (e, t) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      };
    },
    ybEM: function (e, t, n) {
      'use strict';
      var r = n('KGgr'),
        o = n('gPPl'),
        i = n('nULH'),
        u = n('IXQl')('species');
      e.exports = function (e) {
        var t = r[e];
        i &&
          t &&
          !t[u] &&
          o.f(t, u, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    yyyB: function (e, t, n) {
      var r = n('vVR7'),
        o = n('KGgr').isFinite;
      r(r.S, 'Number', {
        isFinite: function (e) {
          return 'number' == typeof e && o(e);
        },
      });
    },
    zP2l: function (e, t, n) {
      var r = n('IXQl')('iterator'),
        o = !1;
      try {
        var i = [7][r]();
        (i.return = function () {
          o = !0;
        }),
          Array.from(i, function () {
            throw 2;
          });
      } catch (e) {}
      e.exports = function (e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
          var i = [7],
            u = i[r]();
          (u.next = function () {
            return { done: (n = !0) };
          }),
            (i[r] = function () {
              return u;
            }),
            e(i);
        } catch (e) {}
        return n;
      };
    },
    zY5Q: function (e, t) {
      e.exports = function (e) {
        return 'object' == typeof e ? null !== e : 'function' == typeof e;
      };
    },
  },
]);
