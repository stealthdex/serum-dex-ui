(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    GOhO: function (e, t, n) {
      'use strict';
      var r = n('+DwS');
      n('tc+8');
      var o = n('m/cY');
      function i(e, ...t) {
        const n = () => e(...t.map((e) => e.value())),
          r = Object(o.a)(n()),
          i = () => r.setValue(n()),
          u = {};
        for (const e of t) e.subscribe(u, i);
        return (
          (r.destroy = () => {
            t.forEach((e) => e.unsubscribeAll(u));
          }),
          r
        );
      }
      n.d(t, 'b', function () {
        return r.a;
      }),
        n.d(t, 'a', function () {
          return i;
        });
    },
    HSjo: function (e, t, n) {
      'use strict';
      function r(e, t) {
        return { propType: 'checkable', properties: e, ...t };
      }
      function o(e, t, n) {
        return {
          propType: 'checkableSet',
          properties: e,
          childrenDefinitions: n,
          ...t,
        };
      }
      function i(e, t) {
        return { propType: 'color', properties: e, noAlpha: !1, ...t };
      }
      var u = n('a7Ha'),
        s = n('8Uy/');
      const c = [s.LINESTYLE_SOLID, s.LINESTYLE_DOTTED, s.LINESTYLE_DASHED],
        p = [1, 2, 3, 4],
        l = [u.LineEnd.Normal, u.LineEnd.Arrow];
      function d(e, t) {
        const n = { propType: 'line', properties: e, ...t };
        return (
          void 0 !== n.properties.style && (n.styleValues = c),
          void 0 !== n.properties.width && (n.widthValues = p),
          (void 0 === n.properties.leftEnd &&
            void 0 === n.properties.rightEnd) ||
            void 0 !== n.endsValues ||
            (n.endsValues = l),
          void 0 !== n.properties.value &&
            void 0 === n.valueType &&
            (n.valueType = 1),
          n
        );
      }
      const a = [s.LINESTYLE_SOLID, s.LINESTYLE_DOTTED, s.LINESTYLE_DASHED],
        f = [1, 2, 3, 4];
      function v(e, t) {
        const n = { propType: 'leveledLine', properties: e, ...t };
        return (
          void 0 !== n.properties.style && (n.styleValues = a),
          void 0 !== n.properties.width && (n.widthValues = f),
          n
        );
      }
      function b(e, t) {
        return { propType: 'number', properties: e, type: 1, ...t };
      }
      function y(e, t) {
        return { propType: 'options', properties: e, ...t };
      }
      function w(e, t) {
        return { propType: 'twoOptions', properties: e, ...t };
      }
      n('YFKU');
      const T = [
          { id: 'bottom', value: 'bottom', title: window.t('Top') },
          { id: 'middle', value: 'middle', title: window.t('Middle') },
          { id: 'top', value: 'top', title: window.t('Bottom') },
        ],
        m = [
          { id: 'left', value: 'left', title: window.t('Left') },
          { id: 'center', value: 'center', title: window.t('Center') },
          { id: 'right', value: 'right', title: window.t('Right') },
        ],
        g = [
          {
            id: 'horizontal',
            value: 'horizontal',
            title: window.t('Horizontal'),
          },
          { id: 'vertical', value: 'vertical', title: window.t('Vertical') },
        ],
        h = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map((e) => ({
          title: String(e),
          value: e,
        })),
        E = [1, 2, 3, 4],
        V = window.t('Text alignment'),
        S = window.t('Text orientation');
      function I(e, t) {
        const n = {
          propType: 'text',
          properties: e,
          ...t,
          isEditable: t.isEditable || !1,
        };
        return (
          void 0 !== n.properties.size &&
            void 0 === n.sizeItems &&
            (n.sizeItems = h),
          void 0 !== n.properties.alignmentVertical &&
            void 0 === n.alignmentVerticalItems &&
            (n.alignmentVerticalItems = T),
          void 0 !== n.properties.alignmentHorizontal &&
            void 0 === n.alignmentHorizontalItems &&
            (n.alignmentHorizontalItems = m),
          (n.alignmentVerticalItems || n.alignmentHorizontalItems) &&
            void 0 === n.alignmentTitle &&
            (n.alignmentTitle = V),
          void 0 !== n.properties.orientation &&
            (void 0 === n.orientationItems && (n.orientationItems = g),
            void 0 === n.orientationTitle && (n.orientationTitle = S)),
          void 0 !== n.properties.borderWidth &&
            void 0 === n.borderWidthItems &&
            (n.borderWidthItems = E),
          n
        );
      }
      function L(e, t) {
        return {
          propType: 'twoColors',
          properties: e,
          noAlpha1: !1,
          noAlpha2: !1,
          ...t,
        };
      }
      function O(e, t) {
        return { propType: 'coordinates', properties: e, ...t };
      }
      function A(e, t) {
        return {
          propType: 'range',
          properties: e,
          ...t,
        };
      }
      function D(e, t) {
        return { propType: 'transparency', properties: e, ...t };
      }
      function z(e, t) {
        return { propType: 'symbol', properties: e, ...t };
      }
      function H(e, t) {
        return { propType: 'session', properties: e, ...t };
      }
      function j(e, t) {
        return { propType: 'emoji', properties: e, ...t };
      }
      var Y = n('hY0g'),
        k = n.n(Y);
      function M(e, t, n) {
        return {
          id: t,
          title: n,
          groupType: 'general',
          definitions: new k.a(e),
        };
      }
      function N(e, t, n) {
        return {
          id: t,
          title: n,
          groupType: 'leveledLines',
          definitions: new k.a(e),
        };
      }
      function P(e, t) {
        const n = new Map(),
          r = void 0 !== t ? t[0] : (e) => e,
          o = void 0 !== t ? (void 0 !== t[1] ? t[1] : t[0]) : (e) => e,
          i = {
            value: () => r(e.value()),
            setValue: (t) => {
              e.setValue(o(t));
            },
            subscribe: (t, r) => {
              const o = (e) => {
                r(i);
              };
              n.set(r, o), e.subscribe(t, o);
            },
            unsubscribe: (t, r) => {
              const o = n.get(r);
              o && (e.unsubscribe(t, o), n.delete(r));
            },
            unsubscribeAll: (t) => {
              e.unsubscribeAll(t), n.clear();
            },
          };
        return i;
      }
      function _(e, t, n, r) {
        const o = P(t, r),
          i = void 0 !== r ? (void 0 !== r[1] ? r[1] : r[0]) : (e) => e;
        return (o.setValue = (r) => e.setProperty(t, i(r), n)), o;
      }
      function x(e, t, n, r) {
        const o = (function (e, t) {
            const n = new Map(),
              r = void 0 !== t ? t[0] : (e) => e,
              o = void 0 !== t ? (void 0 !== t[1] ? t[1] : t[0]) : (e) => e,
              i = {
                value: () => r(e.value()),
                setValue: (t) => {
                  e.setValue(o(t));
                },
                subscribe: (t, r) => {
                  const o = () => {
                    r(i);
                  };
                  let u = n.get(t);
                  void 0 === u
                    ? ((u = new Map()), u.set(r, o), n.set(t, u))
                    : u.set(r, o),
                    e.subscribe(o);
                },
                unsubscribe: (t, r) => {
                  const o = n.get(t);
                  if (void 0 !== o) {
                    const t = o.get(r);
                    void 0 !== t && (e.unsubscribe(t), o.delete(r));
                  }
                },
                unsubscribeAll: (t) => {
                  const r = n.get(t);
                  void 0 !== r &&
                    (r.forEach((t, n) => {
                      e.unsubscribe(t);
                    }),
                    r.clear());
                },
              };
            return i;
          })(t, r),
          i = void 0 !== r ? (void 0 !== r[1] ? r[1] : r[0]) : (e) => e;
        return (
          (o.setValue = (r) => e.undoHistory().setWatchedValue(t, i(r), n)), o
        );
      }
      function U(e, t) {
        const n = P(t);
        return (n.setValue = (t) => e.setPriceScaleSelectionStrategy(t)), n;
      }
      function W(e, t, n, r) {
        const o = P(t);
        return (
          (o.setValue = (t) => {
            const o = { lockScale: t };
            e.setPriceScaleMode(o, n, r);
          }),
          o
        );
      }
      function C(e, t, n, r) {
        const o = P(t, r);
        return (
          (o.setValue = (r) => {
            e.setScaleRatioProperty(t, r, n);
          }),
          o
        );
      }
      var J = n('eJTA'),
        R = n('Tmoa'),
        G = n('GOhO');
      function q(e, t) {
        if (Object(R.isHexColor)(e)) {
          const n = Object(J.parseRgb)(e);
          return Object(J.rgbaToString)(Object(J.rgba)(n, (100 - t) / 100));
        }
        return e;
      }
      function B(e, t, n, r, o) {
        let i;
        if (null !== n) {
          i = (function (e) {
            const t = P(e);
            return (
              (t.destroy = () => {
                e.destroy();
              }),
              t
            );
          })(Object(G.a)(q, t, n));
        } else i = P(t, [() => q(t.value(), 0), (e) => e]);
        return (
          (i.setValue = (n) => {
            o && e.beginUndoMacro(r),
              e.setProperty(t, n, r),
              o && e.endUndoMacro();
          }),
          i
        );
      }
      function F(e, t, n, r, o, i) {
        const u = [
          ((s = n),
          (c = t),
          (e) => {
            const t = s(c);
            if (e === c.value() && null !== t) {
              const e = t.ticker || t.full_name;
              if (e) return e;
            }
            return e;
          }),
          (e) => e,
        ];
        var s, c;
        const p = _(e, t, o, u);
        i && (p.setValue = i);
        const l = new Map();
        (p.subscribe = (e, n) => {
          const r = (e) => {
            n(p);
          };
          l.set(n, r), t.subscribe(e, r);
        }),
          (p.unsubscribe = (e, n) => {
            const r = l.get(n);
            r && (t.unsubscribe(e, r), l.delete(n));
          });
        const d = {};
        return (
          r.subscribe(d, () => {
            l.forEach((e, t) => {
              e(p);
            });
          }),
          (p.destroy = () => {
            r.unsubscribeAll(d), l.clear();
          }),
          p
        );
      }
      function K(e) {
        return e.hasOwnProperty('groupType');
      }
      function Q(e) {
        e.forEach((e) => {
          if (e.hasOwnProperty('propType')) {
            Object.keys(e.properties).forEach((t) => {
              const n = e.properties[t];
              void 0 !== n && void 0 !== n.destroy && n.destroy();
            });
          } else Q(e.definitions.value());
        });
      }
      n.d(t, 'A', function () {
        return K;
      }),
        n.d(t, 'u', function () {
          return Q;
        }),
        n.d(t, 'c', function () {
          return r;
        }),
        n.d(t, 'd', function () {
          return o;
        }),
        n.d(t, 'e', function () {
          return i;
        }),
        n.d(t, 'i', function () {
          return d;
        }),
        n.d(t, 'h', function () {
          return v;
        }),
        n.d(t, 'j', function () {
          return b;
        }),
        n.d(t, 'k', function () {
          return y;
        }),
        n.d(t, 't', function () {
          return w;
        }),
        n.d(t, 'q', function () {
          return I;
        }),
        n.d(t, 's', function () {
          return L;
        }),
        n.d(t, 'f', function () {
          return O;
        }),
        n.d(t, 'n', function () {
          return A;
        }),
        n.d(t, 'r', function () {
          return D;
        }),
        n.d(t, 'p', function () {
          return z;
        }),
        n.d(t, 'o', function () {
          return H;
        }),
        n.d(t, 'g', function () {
          return j;
        }),
        n.d(t, 'l', function () {
          return M;
        }),
        n.d(t, 'm', function () {
          return N;
        }),
        n.d(t, 'b', function () {
          return _;
        }),
        n.d(t, 'a', function () {
          return x;
        }),
        n.d(t, 'x', function () {
          return U;
        }),
        n.d(t, 'w', function () {
          return W;
        }),
        n.d(t, 'y', function () {
          return C;
        }),
        n.d(t, 'v', function () {
          return B;
        }),
        n.d(t, 'z', function () {
          return F;
        });
    },
  },
]);
