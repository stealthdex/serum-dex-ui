(window.webpackJsonp = window.webpackJsonp || []).push([
  ['object-tree-dialog'],
  {
    '+5L9': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>';
    },
    '+KIV': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>';
    },
    '02pg': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n('q1tI'),
        o = n('TSYQ'),
        i = n('XiJV');
      function s(e) {
        return r.createElement('div', {
          className: o(i.separator, e.className),
        });
      }
    },
    '20cQ': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 4A2.5 2.5 0 0 0 7 5.5V7h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2V5.5a3.5 3.5 0 0 1 6.231-2.19c-.231.19-.73.69-.73.69zM13 8H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-2 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
    },
    '2FdS': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('hFf1');
      t.TaskFactory = class {
        create(e) {
          const t = this.freeTasks,
            n = t.length
              ? t.pop()
              : new r.RawTask(this.onError, (e) => (t[t.length] = e));
          return (n.task = e), n;
        }
        constructor(e) {
          (this.onError = e), (this.freeTasks = []);
        }
      };
    },
    '4/GM': function (e, t, n) {
      e.exports = { dialog: 'dialog-3q1-PXu-', button: 'button-3q1-PXu-' };
    },
    '4c+U': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    '4ceR': function (e, t, n) {
      e.exports = {
        dropTargetInside: 'dropTargetInside-3UxYcxls',
        dropTarget: 'dropTarget-3UxYcxls',
        before: 'before-3UxYcxls',
        after: 'after-3UxYcxls',
      };
    },
    ASyk: function (e, t, n) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
      };
    },
    'B6/a': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.5 6C4.67 6 4 6.67 4 7.5V20.5c0 .83.67 1.5 1.5 1.5H16v-1H5.5a.5.5 0 0 1-.5-.5V12h16v1h1V9.5c0-.83-.67-1.5-1.5-1.5h-8.8L9.86 6.15 9.71 6H5.5zM21 11H5V7.5c0-.28.22-.5.5-.5h3.8l1.85 1.85.14.15h9.21c.28 0 .5.22.5.5V11zm1 11v-3h3v-1h-3v-3h-1v3h-3v1h3v3h1z"/></svg>';
    },
    DGxW: function (e, t, n) {
      e.exports = {
        separator: 'separator-3U2Wf-wc',
        tree: 'tree-3U2Wf-wc',
        overlayScrollWrap: 'overlayScrollWrap-3U2Wf-wc',
        listContainer: 'listContainer-3U2Wf-wc',
      };
    },
    EqDG: function (e, t, n) {
      'use strict';
      var r = n('aKzv'),
        o = 'dnd-core/INIT_COORDS',
        i = 'dnd-core/BEGIN_DRAG',
        s = 'dnd-core/PUBLISH_DRAG_SOURCE',
        a = 'dnd-core/HOVER',
        c = 'dnd-core/DROP',
        u = 'dnd-core/END_DRAG';
      function l(e, t) {
        return {
          type: o,
          payload: { sourceClientOffset: t || null, clientOffset: e || null },
        };
      }
      function d(e) {
        return (d =
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
      function h(e, t, n) {
        return t.split('.').reduce(function (e, t) {
          return e && e[t] ? e[t] : n || null;
        }, e);
      }
      function f(e, t) {
        return e.filter(function (e) {
          return e !== t;
        });
      }
      function p(e) {
        return 'object' === d(e);
      }
      function g(e, t) {
        var n = new Map(),
          r = function (e) {
            n.set(e, n.has(e) ? n.get(e) + 1 : 1);
          };
        e.forEach(r), t.forEach(r);
        var o = [];
        return (
          n.forEach(function (e, t) {
            1 === e && o.push(t);
          }),
          o
        );
      }
      var v = {
        type: o,
        payload: { clientOffset: null, sourceClientOffset: null },
      };
      function b(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { publishSource: !0 },
            r = n.publishSource,
            o = void 0 === r || r,
            s = n.clientOffset,
            a = n.getSourceClientOffset,
            c = e.getMonitor(),
            u = e.getRegistry();
          e.dispatch(l(s)), m(t, c, u);
          var d = S(t, c);
          if (null !== d) {
            var h = null;
            if (s) {
              if (!a) throw new Error('getSourceClientOffset must be defined');
              y(a), (h = a(d));
            }
            e.dispatch(l(s, h));
            var f = u.getSource(d),
              p = f.beginDrag(c, d);
            if (null != p) {
              O(p), u.pinSource(d);
              var g = u.getSourceType(d);
              return {
                type: i,
                payload: {
                  itemType: g,
                  item: p,
                  sourceId: d,
                  clientOffset: s || null,
                  sourceClientOffset: h || null,
                  isSourcePublic: !!o,
                },
              };
            }
          } else e.dispatch(v);
        };
      }
      function m(e, t, n) {
        Object(r.a)(!t.isDragging(), 'Cannot call beginDrag while dragging.'),
          e.forEach(function (e) {
            Object(r.a)(n.getSource(e), 'Expected sourceIds to be registered.');
          });
      }
      function y(e) {
        Object(r.a)(
          'function' == typeof e,
          'When clientOffset is provided, getSourceClientOffset must be a function.',
        );
      }
      function O(e) {
        Object(r.a)(p(e), 'Item must be an object.');
      }
      function S(e, t) {
        for (var n = null, r = e.length - 1; r >= 0; r--)
          if (t.canDragSource(e[r])) {
            n = e[r];
            break;
          }
        return n;
      }
      function w(e) {
        return function () {
          if (e.getMonitor().isDragging()) return { type: s };
        };
      }
      function _(e, t) {
        return null === t
          ? null === e
          : Array.isArray(e)
          ? e.some(function (e) {
              return e === t;
            })
          : e === t;
      }
      function C(e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.clientOffset;
          T(t);
          var o = t.slice(0),
            i = e.getMonitor(),
            s = e.getRegistry();
          E(o, i, s);
          var c = i.getItemType();
          return (
            j(o, s, c),
            D(o, i, s),
            { type: a, payload: { targetIds: o, clientOffset: r || null } }
          );
        };
      }
      function T(e) {
        Object(r.a)(Array.isArray(e), 'Expected targetIds to be an array.');
      }
      function E(e, t, n) {
        Object(r.a)(t.isDragging(), 'Cannot call hover while not dragging.'),
          Object(r.a)(!t.didDrop(), 'Cannot call hover after drop.');
        for (var o = 0; o < e.length; o++) {
          var i = e[o];
          Object(r.a)(
            e.lastIndexOf(i) === o,
            'Expected targetIds to be unique in the passed array.',
          );
          var s = n.getTarget(i);
          Object(r.a)(s, 'Expected targetIds to be registered.');
        }
      }
      function j(e, t, n) {
        for (var r = e.length - 1; r >= 0; r--) {
          var o = e[r];
          _(t.getTargetType(o), n) || e.splice(r, 1);
        }
      }
      function D(e, t, n) {
        e.forEach(function (e) {
          n.getTarget(e).hover(t, e);
        });
      }
      function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                M(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function M(e, t, n) {
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
      function x(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.getMonitor(),
            r = e.getRegistry();
          N(n);
          var o = A(n);
          o.forEach(function (o, i) {
            var s = P(o, i, r, n),
              a = { type: c, payload: { dropResult: k(k({}, t), s) } };
            e.dispatch(a);
          });
        };
      }
      function N(e) {
        Object(r.a)(e.isDragging(), 'Cannot call drop while not dragging.'),
          Object(r.a)(
            !e.didDrop(),
            'Cannot call drop twice during one drag operation.',
          );
      }
      function P(e, t, n, o) {
        var i = n.getTarget(e),
          s = i ? i.drop(o, e) : void 0;
        return (
          (function (e) {
            Object(r.a)(
              void 0 === e || p(e),
              'Drop result must either be an object or undefined.',
            );
          })(s),
          void 0 === s && (s = 0 === t ? {} : o.getDropResult()),
          s
        );
      }
      function A(e) {
        var t = e.getTargetIds().filter(e.canDropOnTarget, e);
        return t.reverse(), t;
      }
      function L(e) {
        return function () {
          var t = e.getMonitor(),
            n = e.getRegistry();
          !(function (e) {
            Object(r.a)(
              e.isDragging(),
              'Cannot call endDrag while not dragging.',
            );
          })(t);
          var o = t.getSourceId();
          null != o && (n.getSource(o, !0).endDrag(t, o), n.unpinSource());
          return { type: u };
        };
      }
      function R(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var B = (function () {
          function e(t, n) {
            var r = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.isSetUp = !1),
              (this.handleRefCountChange = function () {
                var e = r.store.getState().refCount > 0;
                r.backend &&
                  (e && !r.isSetUp
                    ? (r.backend.setup(), (r.isSetUp = !0))
                    : !e &&
                      r.isSetUp &&
                      (r.backend.teardown(), (r.isSetUp = !1)));
              }),
              (this.store = t),
              (this.monitor = n),
              t.subscribe(this.handleRefCountChange);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveBackend',
                value: function (e) {
                  this.backend = e;
                },
              },
              {
                key: 'getMonitor',
                value: function () {
                  return this.monitor;
                },
              },
              {
                key: 'getBackend',
                value: function () {
                  return this.backend;
                },
              },
              {
                key: 'getRegistry',
                value: function () {
                  return this.monitor.registry;
                },
              },
              {
                key: 'getActions',
                value: function () {
                  var e = this,
                    t = this.store.dispatch,
                    n = (function (e) {
                      return {
                        beginDrag: b(e),
                        publishDragSource: w(e),
                        hover: C(e),
                        drop: x(e),
                        endDrag: L(e),
                      };
                    })(this);
                  return Object.keys(n).reduce(function (r, o) {
                    var i,
                      s = n[o];
                    return (
                      (r[o] =
                        ((i = s),
                        function () {
                          for (
                            var n = arguments.length, r = new Array(n), o = 0;
                            o < n;
                            o++
                          )
                            r[o] = arguments[o];
                          var s = i.apply(e, r);
                          void 0 !== s && t(s);
                        })),
                      r
                    );
                  }, {});
                },
              },
              {
                key: 'dispatch',
                value: function (e) {
                  this.store.dispatch(e);
                },
              },
            ]) && R(t.prototype, n),
            r && R(t, r),
            e
          );
        })(),
        F = n('ANjH'),
        H = function (e, t) {
          return e === t;
        };
      function z(e, t) {
        return (!e && !t) || (!(!e || !t) && e.x === t.x && e.y === t.y);
      }
      function U(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : H;
        if (e.length !== t.length) return !1;
        for (var r = 0; r < e.length; ++r) if (!n(e[r], t[r])) return !1;
        return !0;
      }
      function G(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                K(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function K(e, t, n) {
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
      var W = {
        initialSourceClientOffset: null,
        initialClientOffset: null,
        clientOffset: null,
      };
      function q() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = t.payload;
        switch (t.type) {
          case o:
          case i:
            return {
              initialSourceClientOffset: n.sourceClientOffset,
              initialClientOffset: n.clientOffset,
              clientOffset: n.clientOffset,
            };
          case a:
            return z(e.clientOffset, n.clientOffset)
              ? e
              : V(V({}, e), {}, { clientOffset: n.clientOffset });
          case u:
          case c:
            return W;
          default:
            return e;
        }
      }
      var Y = 'dnd-core/ADD_SOURCE',
        Z = 'dnd-core/ADD_TARGET',
        J = 'dnd-core/REMOVE_SOURCE',
        X = 'dnd-core/REMOVE_TARGET';
      function Q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                ee(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function ee(e, t, n) {
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
      var te = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
      };
      function ne() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te,
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = t.payload;
        switch (t.type) {
          case i:
            return $(
              $({}, e),
              {},
              {
                itemType: n.itemType,
                item: n.item,
                sourceId: n.sourceId,
                isSourcePublic: n.isSourcePublic,
                dropResult: null,
                didDrop: !1,
              },
            );
          case s:
            return $($({}, e), {}, { isSourcePublic: !0 });
          case a:
            return $($({}, e), {}, { targetIds: n.targetIds });
          case X:
            return -1 === e.targetIds.indexOf(n.targetId)
              ? e
              : $($({}, e), {}, { targetIds: f(e.targetIds, n.targetId) });
          case c:
            return $(
              $({}, e),
              {},
              { dropResult: n.dropResult, didDrop: !0, targetIds: [] },
            );
          case u:
            return $(
              $({}, e),
              {},
              {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null,
                targetIds: [],
              },
            );
          default:
            return e;
        }
      }
      function re() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case Y:
          case Z:
            return e + 1;
          case J:
          case X:
            return e - 1;
          default:
            return e;
        }
      }
      var oe = [],
        ie = [];
      function se(e, t) {
        return (
          e !== oe &&
          (e === ie ||
            void 0 === t ||
            ((n = e),
            t.filter(function (e) {
              return n.indexOf(e) > -1;
            })).length > 0)
        );
        var n;
      }
      function ae() {
        var e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
          case a:
            break;
          case Y:
          case Z:
          case X:
          case J:
            return oe;
          case i:
          case s:
          case u:
          case c:
          default:
            return ie;
        }
        var t = e.payload,
          n = t.targetIds,
          r = void 0 === n ? [] : n,
          o = t.prevTargetIds,
          l = void 0 === o ? [] : o,
          d = g(r, l),
          h = d.length > 0 || !U(r, l);
        if (!h) return oe;
        var f = l[l.length - 1],
          p = r[r.length - 1];
        return f !== p && (f && d.push(f), p && d.push(p)), d;
      }
      function ce() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return e + 1;
      }
      function ue(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ue(Object(n), !0).forEach(function (t) {
                de(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function de(e, t, n) {
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
      function he() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return {
          dirtyHandlerIds: ae(e.dirtyHandlerIds, {
            type: t.type,
            payload: le(
              le({}, t.payload),
              {},
              { prevTargetIds: h(e, 'dragOperation.targetIds', []) },
            ),
          }),
          dragOffset: q(e.dragOffset, t),
          refCount: re(e.refCount, t),
          dragOperation: ne(e.dragOperation, t),
          stateId: ce(e.stateId),
        };
      }
      function fe(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function pe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      (oe.__IS_NONE__ = !0), (ie.__IS_ALL__ = !0);
      var ge,
        ve = (function () {
          function e(t, n) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.store = t),
              (this.registry = n);
          }
          var t, n, o;
          return (
            (t = e),
            (n = [
              {
                key: 'subscribeToStateChange',
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { handlerIds: void 0 },
                    o = n.handlerIds;
                  Object(r.a)(
                    'function' == typeof e,
                    'listener must be a function.',
                  ),
                    Object(r.a)(
                      void 0 === o || Array.isArray(o),
                      'handlerIds, when specified, must be an array of strings.',
                    );
                  var i = this.store.getState().stateId,
                    s = function () {
                      var n = t.store.getState(),
                        r = n.stateId;
                      try {
                        r === i ||
                          (r === i + 1 && !se(n.dirtyHandlerIds, o)) ||
                          e();
                      } finally {
                        i = r;
                      }
                    };
                  return this.store.subscribe(s);
                },
              },
              {
                key: 'subscribeToOffsetChange',
                value: function (e) {
                  var t = this;
                  Object(r.a)(
                    'function' == typeof e,
                    'listener must be a function.',
                  );
                  var n = this.store.getState().dragOffset;
                  return this.store.subscribe(function () {
                    var r = t.store.getState().dragOffset;
                    r !== n && ((n = r), e());
                  });
                },
              },
              {
                key: 'canDragSource',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e);
                  return (
                    Object(r.a)(
                      t,
                      'Expected to find a valid source. sourceId='.concat(e),
                    ),
                    !this.isDragging() && t.canDrag(this, e)
                  );
                },
              },
              {
                key: 'canDropOnTarget',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getTarget(e);
                  return (
                    Object(r.a)(
                      t,
                      'Expected to find a valid target. targetId='.concat(e),
                    ),
                    !(!this.isDragging() || this.didDrop()) &&
                      _(this.registry.getTargetType(e), this.getItemType()) &&
                      t.canDrop(this, e)
                  );
                },
              },
              {
                key: 'isDragging',
                value: function () {
                  return Boolean(this.getItemType());
                },
              },
              {
                key: 'isDraggingSource',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e, !0);
                  return (
                    Object(r.a)(
                      t,
                      'Expected to find a valid source. sourceId='.concat(e),
                    ),
                    !(!this.isDragging() || !this.isSourcePublic()) &&
                      this.registry.getSourceType(e) === this.getItemType() &&
                      t.isDragging(this, e)
                  );
                },
              },
              {
                key: 'isOverTarget',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { shallow: !1 };
                  if (!e) return !1;
                  var n = t.shallow;
                  if (!this.isDragging()) return !1;
                  var r = this.registry.getTargetType(e),
                    o = this.getItemType();
                  if (o && !_(r, o)) return !1;
                  var i = this.getTargetIds();
                  if (!i.length) return !1;
                  var s = i.indexOf(e);
                  return n ? s === i.length - 1 : s > -1;
                },
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.store.getState().dragOperation.itemType;
                },
              },
              {
                key: 'getItem',
                value: function () {
                  return this.store.getState().dragOperation.item;
                },
              },
              {
                key: 'getSourceId',
                value: function () {
                  return this.store.getState().dragOperation.sourceId;
                },
              },
              {
                key: 'getTargetIds',
                value: function () {
                  return this.store.getState().dragOperation.targetIds;
                },
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.store.getState().dragOperation.dropResult;
                },
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.store.getState().dragOperation.didDrop;
                },
              },
              {
                key: 'isSourcePublic',
                value: function () {
                  return Boolean(
                    this.store.getState().dragOperation.isSourcePublic,
                  );
                },
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.store.getState().dragOffset.initialClientOffset;
                },
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.store.getState().dragOffset
                    .initialSourceClientOffset;
                },
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.store.getState().dragOffset.clientOffset;
                },
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return (
                    (e = this.store.getState().dragOffset),
                    (r = e.clientOffset),
                    (o = e.initialClientOffset),
                    (i = e.initialSourceClientOffset),
                    r && o && i
                      ? fe(((n = i), { x: (t = r).x + n.x, y: t.y + n.y }), o)
                      : null
                  );
                  var e, t, n, r, o, i;
                },
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return (
                    (e = this.store.getState().dragOffset),
                    (t = e.clientOffset),
                    (n = e.initialClientOffset),
                    t && n ? fe(t, n) : null
                  );
                  var e, t, n;
                },
              },
            ]) && pe(t.prototype, n),
            o && pe(t, o),
            e
          );
        })(),
        be = 0;
      function me(e) {
        return (me =
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
      function ye(e, t) {
        t && Array.isArray(e)
          ? e.forEach(function (e) {
              return ye(e, !1);
            })
          : Object(r.a)(
              'string' == typeof e || 'symbol' === me(e),
              t
                ? 'Type can only be a string, a symbol, or an array of either.'
                : 'Type can only be a string or a symbol.',
            );
      }
      !(function (e) {
        (e.SOURCE = 'SOURCE'), (e.TARGET = 'TARGET');
      })(ge || (ge = {}));
      var Oe = n('LuQ6');
      function Se(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function we(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var s, a = e[Symbol.iterator]();
                !(r = (s = a.next()).done) &&
                (n.push(s.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return _e(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _e(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _e(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ce(e) {
        var t = (be++).toString();
        switch (e) {
          case ge.SOURCE:
            return 'S'.concat(t);
          case ge.TARGET:
            return 'T'.concat(t);
          default:
            throw new Error('Unknown Handler Role: '.concat(e));
        }
      }
      function Te(e) {
        switch (e[0]) {
          case 'S':
            return ge.SOURCE;
          case 'T':
            return ge.TARGET;
          default:
            Object(r.a)(!1, 'Cannot parse handler ID: '.concat(e));
        }
      }
      function Ee(e, t) {
        var n = e.entries(),
          r = !1;
        do {
          var o = n.next(),
            i = o.done;
          if (we(o.value, 2)[1] === t) return !0;
          r = !!i;
        } while (!r);
        return !1;
      }
      var je = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.types = new Map()),
            (this.dragSources = new Map()),
            (this.dropTargets = new Map()),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null),
            (this.store = t);
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: 'addSource',
              value: function (e, t) {
                ye(e),
                  (function (e) {
                    Object(r.a)(
                      'function' == typeof e.canDrag,
                      'Expected canDrag to be a function.',
                    ),
                      Object(r.a)(
                        'function' == typeof e.beginDrag,
                        'Expected beginDrag to be a function.',
                      ),
                      Object(r.a)(
                        'function' == typeof e.endDrag,
                        'Expected endDrag to be a function.',
                      );
                  })(t);
                var n = this.addHandler(ge.SOURCE, e, t);
                return (
                  this.store.dispatch(
                    (function (e) {
                      return { type: Y, payload: { sourceId: e } };
                    })(n),
                  ),
                  n
                );
              },
            },
            {
              key: 'addTarget',
              value: function (e, t) {
                ye(e, !0),
                  (function (e) {
                    Object(r.a)(
                      'function' == typeof e.canDrop,
                      'Expected canDrop to be a function.',
                    ),
                      Object(r.a)(
                        'function' == typeof e.hover,
                        'Expected hover to be a function.',
                      ),
                      Object(r.a)(
                        'function' == typeof e.drop,
                        'Expected beginDrag to be a function.',
                      );
                  })(t);
                var n = this.addHandler(ge.TARGET, e, t);
                return (
                  this.store.dispatch(
                    (function (e) {
                      return { type: Z, payload: { targetId: e } };
                    })(n),
                  ),
                  n
                );
              },
            },
            {
              key: 'containsHandler',
              value: function (e) {
                return Ee(this.dragSources, e) || Ee(this.dropTargets, e);
              },
            },
            {
              key: 'getSource',
              value: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                Object(r.a)(this.isSourceId(e), 'Expected a valid source ID.');
                var n = t && e === this.pinnedSourceId,
                  o = n ? this.pinnedSource : this.dragSources.get(e);
                return o;
              },
            },
            {
              key: 'getTarget',
              value: function (e) {
                return (
                  Object(r.a)(
                    this.isTargetId(e),
                    'Expected a valid target ID.',
                  ),
                  this.dropTargets.get(e)
                );
              },
            },
            {
              key: 'getSourceType',
              value: function (e) {
                return (
                  Object(r.a)(
                    this.isSourceId(e),
                    'Expected a valid source ID.',
                  ),
                  this.types.get(e)
                );
              },
            },
            {
              key: 'getTargetType',
              value: function (e) {
                return (
                  Object(r.a)(
                    this.isTargetId(e),
                    'Expected a valid target ID.',
                  ),
                  this.types.get(e)
                );
              },
            },
            {
              key: 'isSourceId',
              value: function (e) {
                return Te(e) === ge.SOURCE;
              },
            },
            {
              key: 'isTargetId',
              value: function (e) {
                return Te(e) === ge.TARGET;
              },
            },
            {
              key: 'removeSource',
              value: function (e) {
                var t = this;
                Object(r.a)(this.getSource(e), 'Expected an existing source.'),
                  this.store.dispatch(
                    (function (e) {
                      return { type: J, payload: { sourceId: e } };
                    })(e),
                  ),
                  Object(Oe.asap)(function () {
                    t.dragSources.delete(e), t.types.delete(e);
                  });
              },
            },
            {
              key: 'removeTarget',
              value: function (e) {
                Object(r.a)(this.getTarget(e), 'Expected an existing target.'),
                  this.store.dispatch(
                    (function (e) {
                      return { type: X, payload: { targetId: e } };
                    })(e),
                  ),
                  this.dropTargets.delete(e),
                  this.types.delete(e);
              },
            },
            {
              key: 'pinSource',
              value: function (e) {
                var t = this.getSource(e);
                Object(r.a)(t, 'Expected an existing source.'),
                  (this.pinnedSourceId = e),
                  (this.pinnedSource = t);
              },
            },
            {
              key: 'unpinSource',
              value: function () {
                Object(r.a)(
                  this.pinnedSource,
                  'No source is pinned at the time.',
                ),
                  (this.pinnedSourceId = null),
                  (this.pinnedSource = null);
              },
            },
            {
              key: 'addHandler',
              value: function (e, t, n) {
                var r = Ce(e);
                return (
                  this.types.set(r, t),
                  e === ge.SOURCE
                    ? this.dragSources.set(r, n)
                    : e === ge.TARGET && this.dropTargets.set(r, n),
                  r
                );
              },
            },
          ]) && Se(t.prototype, n),
          o && Se(t, o),
          e
        );
      })();
      function De(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          o = Ie(r),
          i = new ve(o, new je(o)),
          s = new B(o, i),
          a = e(s, t, n);
        return s.receiveBackend(a), s;
      }
      function Ie(e) {
        var t =
          'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
        return Object(F.e)(
          he,
          e && t && t({ name: 'dnd-core', instanceId: 'dnd-core' }),
        );
      }
      n.d(t, 'a', function () {
        return De;
      });
    },
    EvtC: function (e, t, n) {
      e.exports = { button: 'button-2YcRd2gv' };
    },
    FadI: function (e, t, n) {
      'use strict';
      function r(e) {
        if (!s(e)) throw e;
      }
      function o(e) {
        return (null == e ? void 0 : e.aborted)
          ? Promise.reject(i())
          : new Promise((t, n) => {
              null == e ||
                e.addEventListener('abort', () => n(i()), { once: !0 });
            });
      }
      function i() {
        return new DOMException('Aborted', 'AbortError');
      }
      function s(e) {
        return e instanceof Error && 'AbortError' === e.name;
      }
      function a(e, t) {
        return Promise.race([o(e), t]);
      }
      async function c(e, t) {
        let n;
        try {
          await a(
            e,
            new Promise((e) => {
              n = setTimeout(e, t);
            }),
          );
        } finally {
          clearTimeout(n);
        }
      }
      n.d(t, 'c', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return a;
        }),
        n.d(t, 'a', function () {
          return c;
        });
    },
    GjMU: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.086 6.207a2 2 0 0 1 2.828 0l1.879 1.879a2 2 0 0 1 0 2.828l-.94.94-9 9-1 1-.146.146H6v-4.707l.146-.146 1-1 9-9 .94-.94zm2.121.707a1 1 0 0 0-1.414 0l-.586.586 1.647 1.646 1.646 1.647.586-.586a1 1 0 0 0 0-1.414l-1.879-1.879zm.586 4.586L18.5 10.207 10.207 18.5l1.293 1.293 8.293-8.293zm-9 9l-1.647-1.646L7.5 17.207l-.5.5V21h3.293l.5-.5zm-2.586-4L9.5 17.793 17.793 9.5 16.5 8.207 8.207 16.5z"/></svg>';
    },
    ItnF: function (e, t, n) {
      e.exports = {
        dialog: 'dialog-2cMrvu9r',
        wrapper: 'wrapper-2cMrvu9r',
        separator: 'separator-2cMrvu9r',
      };
    },
    JEhF: function (e, t, n) {
      'use strict';
      (function (e) {
        n.d(t, 'a', function () {
          return h;
        });
        var r = n('nKUr'),
          o = n('q1tI'),
          i = n('EqDG'),
          s = n('p/5y');
        function a(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              if (
                'undefined' == typeof Symbol ||
                !(Symbol.iterator in Object(e))
              )
                return;
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var s, a = e[Symbol.iterator]();
                  !(r = (s = a.next()).done) &&
                  (n.push(s.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                (o = !0), (i = e);
              } finally {
                try {
                  r || null == a.return || a.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return c(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            })()
          );
        }
        function c(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function u(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++)
                (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (o[n] = e[n]));
          }
          return o;
        }
        var l = 0,
          d = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__'),
          h = Object(o.memo)(function (e) {
            var t = e.children,
              n = a(
                (function (e) {
                  if ('manager' in e) {
                    return [{ dragDropManager: e.manager }, !1];
                  }
                  var t = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : f(),
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        o = t;
                      o[d] ||
                        (o[d] = { dragDropManager: Object(i.a)(e, t, n, r) });
                      return o[d];
                    })(e.backend, e.context, e.options, e.debugMode),
                    n = !e.context;
                  return [t, n];
                })(u(e, ['children'])),
                2,
              ),
              c = n[0],
              h = n[1];
            return (
              Object(o.useEffect)(function () {
                if (h) {
                  var e = f();
                  return (
                    ++l,
                    function () {
                      0 == --l && (e[d] = null);
                    }
                  );
                }
              }, []),
              Object(r.jsx)(
                s.a.Provider,
                Object.assign({ value: c }, { children: t }),
                void 0,
              )
            );
          });
        function f() {
          return void 0 !== e ? e : window;
        }
      }.call(this, n('yLpj')));
    },
    LuQ6: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = {},
        o = c(n('eFQ1'));
      Object.keys(o).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === o[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
      var i = c(n('4c+U'));
      Object.keys(i).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var s = c(n('dYZt'));
      Object.keys(s).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var a = c(n('2FdS'));
      function c(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var r =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, n)
                  : {};
              r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n]);
            }
        return (t.default = e), t;
      }
      Object.keys(a).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
    },
    NhaM: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 11.5v8a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-8m-17 0v-4a1 1 0 0 1 1-1h4l2 2h9a1 1 0 0 1 1 1v2m-17 0h17"/></svg>';
    },
    'U+QY': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.692 3.012l-12 12.277.715.699 12-12.277-.715-.699zM9.05 15.627a7.042 7.042 0 0 1-3.144-.741l.742-.76c.72.311 1.52.5 2.402.5 2.297 0 4.047-1.29 5.25-2.645a12.168 12.168 0 0 0 1.687-2.466l.007-.015-.007-.015A12.166 12.166 0 0 0 14.3 7.019c-.11-.124-.225-.247-.344-.37l.699-.715c.137.14.268.28.392.42a13.16 13.16 0 0 1 1.83 2.678 8.117 8.117 0 0 1 .119.243l.006.015.003.005v.001l-.456.204.456.203v.002l-.003.005-.006.015-.025.052a11.762 11.762 0 0 1-.461.857 13.158 13.158 0 0 1-1.463 2.011c-1.296 1.46-3.296 2.982-5.998 2.982zm7.5-6.127l.456-.203.09.203-.09.203-.456-.203zm-7.5 3.07c-.27 0-.53-.037-.778-.105l.879-.899c.999-.052 1.833-.872 1.895-1.938l.902-.923c.066.253.102.52.102.795 0 1.695-1.344 3.07-3 3.07zM6.15 10.294l.902-.923c.063-1.066.896-1.886 1.895-1.938l.879-.9a2.94 2.94 0 0 0-.777-.103c-1.657 0-3 1.374-3 3.069 0 .275.035.541.101.795zM9.05 4.373c.88 0 1.68.19 2.4.5l.743-.759a7.043 7.043 0 0 0-3.143-.74c-2.703 0-4.703 1.521-6 2.98a13.159 13.159 0 0 0-1.83 2.678 7.886 7.886 0 0 0-.118.243l-.007.015-.002.005v.001l.456.204-.457-.203-.09.203.09.203.457-.203-.456.203v.002l.002.005.007.015a4.5 4.5 0 0 0 .119.243 13.152 13.152 0 0 0 1.83 2.677c.124.14.255.28.392.42l.7-.715c-.12-.122-.235-.245-.345-.369a12.156 12.156 0 0 1-1.686-2.466L2.105 9.5l.007-.015a12.158 12.158 0 0 1 1.686-2.466C5.002 5.665 6.752 4.373 9.05 4.373z"/></svg>';
    },
    Vbka: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M4.5 12.5l4.59-4.59a2 2 0 0 1 2.83 0l3.17 3.17a2 2 0 0 0 2.83 0L22.5 6.5m-8 9.5v5.5M12 19l2.5 2.5L17 19m4.5 3v-5.5M19 19l2.5-2.5L24 19"/></svg>';
    },
    WcWV: function (e, t, n) {
      e.exports = { button: 'button-2zRC9WmY', disabled: 'disabled-2zRC9WmY' };
    },
    XiJV: function (e, t, n) {
      e.exports = { separator: 'separator-3No0pWrk' };
    },
    Z3xJ: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M21.106 12.5H6.894a.5.5 0 0 1-.318-.886L14 5.5l7.424 6.114a.5.5 0 0 1-.318.886zM21.106 16.5H6.894a.5.5 0 0 0-.318.886L14 23.5l7.424-6.114a.5.5 0 0 0-.318-.886z"/></svg>';
    },
    aKzv: function (e, t, n) {
      'use strict';
      function r(e, t) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o];
        if (!e) {
          var i;
          if (void 0 === t)
            i = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            );
          else {
            var s = 0;
            (i = new Error(
              t.replace(/%s/g, function () {
                return r[s++];
              }),
            )).name = 'Invariant Violation';
          }
          throw ((i.framesToPop = 1), i);
        }
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    b4AZ: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return m;
      });
      var r = n('q1tI'),
        o = n('Eyy1'),
        i = n('Iivm'),
        s = n('zM7N'),
        a = n('oiZD'),
        c = n('YFKU'),
        u = n('txPx'),
        l = n('CW80'),
        d = n('gM3K'),
        h = n('ogJP'),
        f = n('jPOK'),
        p = n('leHx'),
        g = n('rlH3'),
        v = n('x5pF');
      const b = (e) =>
        Object(c.t)('{drawingsCount} drawing', {
          plural: '{drawingsCount} drawings',
          count: e,
        }).format({ drawingsCount: e.toString() });
      Object(u.getLogger)('Chart.ManageDrawings');
      class m extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._totalCount = 0),
            (this._model = null),
            (this._symbolDrawingsMap = null),
            (this._storageContentLoadingPromise = null),
            (this._onItemClick = (e) => {
              '' !== e &&
                (this.props.chartWidget.setSymbol(e),
                null !== this._model && this.setState({ currentSymbol: e }),
                this.props.onClose && this.props.onClose());
            }),
            (this._onRemove = async (e) => {
              if (this._model && this._symbolDrawingsMap) {
                const t = this._symbolDrawingsMap.get(e);
                if (t) {
                  const n = Array.from(t)
                    .map((e) =>
                      Object(o.ensureNotNull)(this._model)
                        .model()
                        .dataSourceForId(e),
                    )
                    .filter(h.notNull);
                  if (n.length > 0) {
                    const t =
                      Object(c.t)('Remove all line tools for') + ' ' + e;
                    this._model.removeSources(n, !1, t);
                  }
                  this._updateItems();
                }
              }
            }),
            (this._updateItems = async () => {
              if (null !== this._model) {
                const e = await this._getItems(
                  this._model.model().dataSources(),
                );
                this.setState({ items: e });
              }
            }),
            (this._updateTheme = () => {
              const e = a.watchedTheme.value();
              this.setState({ theme: e });
            }),
            (this.state = {
              currentSymbol: null,
              items: null,
              theme: a.watchedTheme.value(),
            });
        }
        componentDidMount() {
          this.props.chartWidget.withModel(this, async () => {
            (this._model = this.props.chartWidget.model()),
              this._model
                .model()
                .dataSourceCollectionChanged()
                .subscribe(this, this._updateItems);
            const e = await this._getItems(this._model.model().dataSources());
            this.setState(
              { currentSymbol: this._model.mainSeries().symbol(), items: e },
              () => {
                var e, t;
                return null === (t = (e = this.props).onInitialized) ||
                  void 0 === t
                  ? void 0
                  : t.call(e);
              },
            );
          }),
            a.watchedTheme.subscribe(this._updateTheme);
        }
        componentWillUnmount() {
          a.watchedTheme.unsubscribe(this._updateTheme),
            null !== this._model &&
              this._model
                .model()
                .dataSourceCollectionChanged()
                .unsubscribe(this, this._updateItems);
        }
        render() {
          const { isMobile: e } = this.props,
            { currentSymbol: t, items: n } = this.state,
            o = this._symbolDrawingsMap ? this._symbolDrawingsMap.size : 0,
            i = `${
              ((s = o),
              Object(c.t)('{symbolsCount} symbol', {
                plural: '{symbolsCount} symbols',
                context: 'symbols_and_drawings_count',
                count: s,
              }).format({ symbolsCount: s.toString() }))
            } ${((e) =>
              Object(c.t)('with {drawingsCount} drawing', {
                plural: 'with {drawingsCount} drawings',
                context: 'symbols_and_drawings_count',
                count: e,
              }).format({ drawingsCount: e.toString() }))(this._totalCount)}`;
          var s;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement('div', { className: v.title }, i),
            null === n || 0 === n.length
              ? this._renderEmptyContent()
              : n.map((n) =>
                  r.createElement(d.a, {
                    key: n.symbol,
                    title: n.symbol,
                    subtitle: b(n.drawingsCount),
                    removeBtnLabel: Object(c.t)(
                      'Remove all drawings for this symbol',
                    ),
                    isActive: n.symbol === t,
                    isMobile: e,
                    onClick: this._onItemClick.bind(this, n.symbol),
                    onClickRemove: this._onRemove.bind(this, n.symbol),
                    showFavorite: !1,
                  }),
                ),
          );
        }
        _renderEmptyContent() {
          const { theme: e } = this.state,
            t = e === s.a.Dark ? g : p;
          return null === this._symbolDrawingsMap
            ? r.createElement(f.a, null)
            : r.createElement(
                'div',
                { className: v.empty },
                r.createElement(i.a, { className: v.image, icon: t }),
                r.createElement('span', null, Object(c.t)('No drawings yet')),
              );
        }
        async _getStorageContent() {
          return new Map();
        }
        async _getItems(e) {
          const t = [],
            n = this._getSymbolDrawingsMap(e);
          return (
            (await this._getStorageContent()).forEach((e, t) => {
              const r = n.get(t) || new Set();
              e.forEach((e) => r.add(e)), n.set(t, r);
            }),
            (this._symbolDrawingsMap = n),
            (this._totalCount = 0),
            this._symbolDrawingsMap.forEach((e, n) => {
              t.push({ symbol: n, drawingsCount: e.size }),
                (this._totalCount = this._totalCount + e.size);
            }),
            t.sort((e, t) =>
              e.drawingsCount === t.drawingsCount
                ? e.symbol.localeCompare(t.symbol)
                : e.drawingsCount > t.drawingsCount
                ? -1
                : 1,
            )
          );
        }
        _getSymbolDrawingsMap(e) {
          const t = new Map();
          return (
            e.forEach((e) => {
              var n;
              if (Object(l.isLineTool)(e) && e.showInObjectTree()) {
                const r = null !== (n = e.symbol()) && void 0 !== n ? n : '',
                  o = t.get(r) || new Set();
                o.add(e.id()), t.set(r, o);
              }
            }),
            t
          );
        }
      }
    },
    co4r: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-1a1_EyKG',
        selected: 'selected-1a1_EyKG',
        childOfSelected: 'childOfSelected-1a1_EyKG',
        disabled: 'disabled-1a1_EyKG',
        expandHandle: 'expandHandle-1a1_EyKG',
        expanded: 'expanded-1a1_EyKG',
      };
    },
    dDxv: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l4.586-4.586a2 2 0 0 1 2.828 0l3.172 3.172a2 2 0 0 0 2.828 0L23.5 10.5"/></svg>';
    },
    dYZt: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('yY3h');
      t.AsapQueue = class {
        enqueueTask(e) {
          const { queue: t, requestFlush: n } = this;
          t.length || (n(), (this.flushing = !0)), (t[t.length] = e);
        }
        constructor() {
          (this.queue = []),
            (this.pendingErrors = []),
            (this.flushing = !1),
            (this.index = 0),
            (this.capacity = 1024),
            (this.flush = () => {
              const { queue: e } = this;
              for (; this.index < e.length; ) {
                const t = this.index;
                if ((this.index++, e[t].call(), this.index > this.capacity)) {
                  for (let t = 0, n = e.length - this.index; t < n; t++)
                    e[t] = e[t + this.index];
                  (e.length -= this.index), (this.index = 0);
                }
              }
              (e.length = 0), (this.index = 0), (this.flushing = !1);
            }),
            (this.registerPendingError = (e) => {
              this.pendingErrors.push(e), this.requestErrorThrow();
            }),
            (this.requestFlush = r.makeRequestCall(this.flush)),
            (this.requestErrorThrow = r.makeRequestCallFromTimer(() => {
              if (this.pendingErrors.length) throw this.pendingErrors.shift();
            }));
        }
      };
    },
    eFQ1: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.asap = function (e) {
          i.enqueueTask(s.create(e));
        });
      var r = n('dYZt'),
        o = n('2FdS');
      const i = new r.AsapQueue(),
        s = new o.TaskFactory(i.registerPendingError);
    },
    ffaL: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.605 14.089A10.052 10.052 0 0 1 4.56 14l.046-.089a17.18 17.18 0 0 1 2.329-3.327C8.58 8.758 10.954 7 14 7c3.046 0 5.421 1.757 7.066 3.585A17.18 17.18 0 0 1 23.44 14l-.046.089a17.18 17.18 0 0 1-2.329 3.327C19.42 19.242 17.046 21 14 21c-3.046 0-5.421-1.757-7.066-3.584a17.18 17.18 0 0 1-2.329-3.327zm19.848-.3L24 14l.453.212-.001.002-.003.005-.009.02a16.32 16.32 0 0 1-.662 1.195c-.44.72-1.1 1.684-1.969 2.65C20.08 20.008 17.454 22 14 22c-3.454 0-6.079-1.993-7.81-3.916a18.185 18.185 0 0 1-2.469-3.528 10.636 10.636 0 0 1-.161-.318l-.01-.019-.002-.005v-.002L4 14a55.06 55.06 0 0 1-.453-.212l.001-.002.003-.005.009-.02.033-.067a16.293 16.293 0 0 1 .629-1.126c.44-.723 1.1-1.686 1.969-2.652C7.92 7.993 10.546 6 14 6c3.454 0 6.079 1.993 7.81 3.916a18.183 18.183 0 0 1 2.469 3.528 10.588 10.588 0 0 1 .161.318l.01.019.002.005v.002zM24 14l.453-.211.099.211-.099.211L24 14zm-20.453-.211L4 14l-.453.211L3.448 14l.099-.211zM11 14a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>';
    },
    g89m: function (e, t, n) {
      'use strict';
      var r = n('q1tI'),
        o = n.n(r),
        i = n('Eyy1'),
        s = n('TSYQ'),
        a = n.n(s),
        c = n('/3z9'),
        u = n('d700'),
        l = n('WXjp'),
        d = n('02pg'),
        h = n('uhCe'),
        f = n('/KDZ'),
        p = n('pafz'),
        g = n('ZjKI'),
        v = n('FQhm'),
        b = n('Iivm');
      const m = o.a.createContext({ setHideClose: () => {} });
      var y = n('zztK'),
        O = n('px1m');
      function S(e) {
        const {
            title: t,
            subtitle: n,
            showCloseIcon: i = !0,
            onClose: s,
            renderBefore: c,
            renderAfter: u,
            draggable: l,
            className: d,
            unsetAlign: h,
          } = e,
          [f, p] = Object(r.useState)(!1);
        return o.a.createElement(
          m.Provider,
          { value: { setHideClose: p } },
          o.a.createElement(
            'div',
            { className: a()(O.container, d, (n || h) && O.unsetAlign) },
            c,
            o.a.createElement(
              'div',
              { 'data-dragg-area': l, className: O.title },
              o.a.createElement('div', { className: O.ellipsis }, t),
              n &&
                o.a.createElement(
                  'div',
                  { className: a()(O.ellipsis, O.subtitle) },
                  n,
                ),
            ),
            u,
            i &&
              !f &&
              o.a.createElement(b.a, {
                className: O.close,
                icon: y,
                onClick: s,
                'data-name': 'close',
                'data-role': 'button',
              }),
          ),
        );
      }
      var w = n('ItnF');
      n.d(t, 'a', function () {
        return T;
      });
      const _ = { vertical: 20 },
        C = { vertical: 0 };
      class T extends o.a.PureComponent {
        constructor() {
          super(...arguments),
            (this._controller = null),
            (this._reference = null),
            (this._renderChildren = (e, t) => (
              (this._controller = e),
              this.props.render({
                requestResize: this._requestResize,
                centerAndFit: this._centerAndFit,
                isSmallWidth: t,
              })
            )),
            (this._handleReference = (e) => (this._reference = e)),
            (this._handleClose = () => {
              this.props.onClose();
            }),
            (this._handleKeyDown = (e) => {
              var t;
              if (!e.defaultPrevented)
                switch (
                  (this.props.onKeyDown && this.props.onKeyDown(e),
                  Object(c.hashFromEvent)(e))
                ) {
                  case 27:
                    if (e.defaultPrevented) return;
                    if (
                      this.props.forceCloseOnEsc &&
                      this.props.forceCloseOnEsc()
                    )
                      return void this._handleClose();
                    const { activeElement: n } = document,
                      r = Object(i.ensureNotNull)(this._reference);
                    if (null !== n) {
                      if (
                        (e.preventDefault(),
                        'true' === (t = n).getAttribute('data-haspopup') &&
                          'true' !== t.getAttribute('data-expanded'))
                      )
                        return void this._handleClose();
                      if (Object(u.b)(n)) return void r.focus();
                      if (r.contains(n)) return void this._handleClose();
                    }
                }
            }),
            (this._requestResize = () => {
              null !== this._controller && this._controller.recalculateBounds();
            }),
            (this._centerAndFit = () => {
              null !== this._controller && this._controller.centerAndFit();
            });
        }
        componentDidMount() {
          v.subscribe(
            g.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
            this._handleClose,
            null,
          );
        }
        componentWillUnmount() {
          v.unsubscribe(
            g.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
            this._handleClose,
            null,
          );
        }
        focus() {
          Object(i.ensureNotNull)(this._reference).focus();
        }
        getElement() {
          return this._reference;
        }
        contains(e) {
          var t, n;
          return (
            null !==
              (n =
                null === (t = this._reference) || void 0 === t
                  ? void 0
                  : t.contains(e)) &&
            void 0 !== n &&
            n
          );
        }
        render() {
          const {
              className: e,
              headerClassName: t,
              isOpened: n,
              title: r,
              dataName: i,
              onClickOutside: s,
              additionalElementPos: c,
              additionalHeaderElement: u,
              backdrop: g,
              shouldForceFocus: v = !0,
              showSeparator: b,
              subtitle: m,
              draggable: y = !0,
              fullScreen: O = !1,
              showCloseIcon: T = !0,
              rounded: E = !0,
              isAnimationEnabled: j,
              growPoint: D,
              dialogTooltip: I,
              unsetHeaderAlign: k,
            } = this.props,
            M = 'after' !== c ? u : void 0,
            x = 'after' === c ? u : void 0;
          return o.a.createElement(f.a, { rule: h.a.SmallHeight }, (c) =>
            o.a.createElement(f.a, { rule: h.a.TabletSmall }, (u) =>
              o.a.createElement(
                l.a,
                {
                  rounded: !(u || O) && E,
                  className: a()(w.dialog, e),
                  isOpened: n,
                  reference: this._handleReference,
                  onKeyDown: this._handleKeyDown,
                  onClickOutside: s,
                  onClickBackdrop: s,
                  fullscreen: u || O,
                  guard: c ? C : _,
                  boundByScreen: u || O,
                  shouldForceFocus: v,
                  backdrop: g,
                  draggable: y,
                  isAnimationEnabled: j,
                  growPoint: D,
                  name: this.props.dataName,
                  dialogTooltip: I,
                },
                o.a.createElement(
                  'div',
                  {
                    className: w.wrapper,
                    'data-name': i,
                    'data-dialog-name': 'string' == typeof r ? r : '',
                  },
                  void 0 !== r &&
                    o.a.createElement(S, {
                      draggable: y && !(u || O),
                      onClose: this._handleClose,
                      renderAfter: x,
                      renderBefore: M,
                      subtitle: m,
                      title: r,
                      showCloseIcon: T,
                      className: t,
                      unsetAlign: k,
                    }),
                  b && o.a.createElement(d.a, { className: w.separator }),
                  o.a.createElement(p.a.Consumer, null, (e) =>
                    this._renderChildren(e, u || O),
                  ),
                ),
              ),
            ),
          );
        }
      }
    },
    gSe6: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-3Onbn19L',
        dialog: 'dialog-3Onbn19L',
        offset: 'offset-3Onbn19L',
        title: 'title-3Onbn19L',
        main: 'main-3Onbn19L',
        disabled: 'disabled-3Onbn19L',
        icon: 'icon-3Onbn19L',
        textIcon: 'textIcon-3Onbn19L',
        rightButtons: 'rightButtons-3Onbn19L',
        twoButtons: 'twoButtons-3Onbn19L',
        button: 'button-3Onbn19L',
        viewButton: 'viewButton-3Onbn19L',
        threeButtons: 'threeButtons-3Onbn19L',
        lockButton: 'lockButton-3Onbn19L',
        removeButton: 'removeButton-3Onbn19L',
        warn: 'warn-3Onbn19L',
        hover: 'hover-3Onbn19L',
        expandHandle: 'expandHandle-3Onbn19L',
        selected: 'selected-3Onbn19L',
        childOfSelected: 'childOfSelected-3Onbn19L',
        renameInput: 'renameInput-3Onbn19L',
      };
    },
    gla1: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('q1tI');
      const o = () => {
        const [, e] = Object(r.useReducer)((e, t) => e + 1, 0);
        return e;
      };
    },
    h5pj: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-3jZ5H2Ul',
        space: 'space-3jZ5H2Ul',
        tree: 'tree-3jZ5H2Ul',
      };
    },
    hFf1: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.RawTask = class {
        call() {
          try {
            this.task && this.task();
          } catch (e) {
            this.onError(e);
          } finally {
            (this.task = null), this.release(this);
          }
        }
        constructor(e, t) {
          (this.onError = e), (this.release = t), (this.task = null);
        }
      };
    },
    jPOK: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n('q1tI'),
        o = n('TSYQ'),
        i = n('Owlf');
      n('SzKR');
      function s(e) {
        const t = o(
          'tv-spinner',
          'tv-spinner--shown',
          'tv-spinner--size_' + (e.size || i.a),
        );
        return r.createElement(
          'div',
          { className: t, style: e.style, role: 'progressbar' },
          r.createElement(
            'div',
            { className: 'tv-spinner__spinner-layer' },
            r.createElement('div', {
              className: 'tv-spinner__background tv-spinner__width_element',
            }),
            r.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left',
            }),
            r.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right',
            }),
          ),
        );
      }
    },
    leHx: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 120" width="120" height="120" fill="none"><g clip-path="url(#avi4cgf11)"><path fill="#F0F3FA" d="M16.01 71.1c10.54 13.42 34.92 11.86 54.46-3.48s26.85-38.65 16.3-52.08C76.25 2.12 51.87 3.68 32.33 19.02c-9.2 7.22-15.68 16.2-18.87 25.09-.68 1.88-2.57 3.05-4.53 3.48a9.7 9.7 0 0 0-3.96 1.85C.5 52.94-.09 59.64 3.64 64.4a11.24 11.24 0 0 0 7.82 4.31 6.2 6.2 0 0 1 4.55 2.4z"/><path fill="url(#bvi4cgf11)" d="M28.3 35.56c1.8 3.42 12.08 10.65 25.62 16.88 6.36 2.93 12.38 5.3 17.37 6.93a172.7 172.7 0 0 0-18-12.68c-14.59-9.1-24.97-12.4-24.97-12.4-.18.3-.19.72-.01 1.27z"/><path stroke="#1E222D" stroke-width="1.5" d="M86.25 71.4c-.19.28-.54.53-1.17.69-.63.15-1.48.19-2.56.08-2.14-.22-5-1-8.4-2.28-6.78-2.57-15.53-7.13-24.64-13.06-9.12-5.93-16.82-12.1-21.92-17.25-2.55-2.59-4.41-4.89-5.48-6.76a7.79 7.79 0 0 1-.96-2.37c-.12-.64-.03-1.06.16-1.35.2-.3.54-.55 1.17-.7a7.8 7.8 0 0 1 2.56-.08c2.14.22 5 1 8.4 2.28 6.78 2.57 15.53 7.12 24.65 13.06 9.1 5.93 16.81 12.1 21.9 17.25 2.56 2.58 4.43 4.89 5.5 6.76.53.94.84 1.73.95 2.37.12.64.03 1.06-.16 1.35z"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="1.5" d="M28.96 34.63c1.99.57 4.47 1.55 7.3 2.86l12.2 6.52a193.2 193.2 0 0 1 6.66 4.15c10.56 6.88 19.12 13.86 22.97 18.45"/><path stroke="#1E222D" stroke-width="1.5" d="M83.79 65.59c6.77-14.14 1.41-32-13.05-41.42-14.46-9.41-32.96-7.09-43.15 4.83M74.96 21.24a6.08 6.08 0 0 1-2.58 2.3c-.9.39-1.69.35-2.23 0-.54-.36-.9-1.05-.9-2.04a6.08 6.08 0 0 1 1.05-3.29 6.07 6.07 0 0 1 2.58-2.29c.9-.4 1.69-.35 2.23 0s.9 1.05.9 2.04c.01.98-.32 2.17-1.05 3.28z"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="1.5" d="M42.7 23.62c1.25-.3 4.56-1.3 8.92-1.3M80.14 84.07C76.5 84.03 64.4 84 50 84s-26.5.03-30.14.07M24.7 59.33l5.77 5.32M32.05 56.05l.84 3.28"/></g><defs><linearGradient gradientUnits="userSpaceOnUse" x1="49.73" x2="49.73" y1="34.29" y2="59.37" id="bvi4cgf11"><stop stop-color="#2962FF"/><stop offset="1" stop-color="#2962FF"/></linearGradient><clipPath id="avi4cgf11"><path fill="#fff" d="M0 0h100v100H0V0z"/></clipPath></defs></svg>';
    },
    nkjW: function (e, t, n) {
      e.exports = {
        title: 'title-2PJRtZNU',
        withoutIcon: 'withoutIcon-2PJRtZNU',
        buttons: 'buttons-2PJRtZNU',
        button: 'button-2PJRtZNU',
        disabled: 'disabled-2PJRtZNU',
      };
    },
    'p/5y': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('q1tI'),
        o = Object(r.createContext)({ dragDropManager: void 0 });
    },
    'p0W+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n('q1tI'),
        o = n('TSYQ'),
        i = n('tU7i'),
        s = n('EvtC');
      const a = r.forwardRef((e, t) => {
        const { className: n, ...a } = e;
        return r.createElement(i.b, {
          ...a,
          ref: t,
          className: o(n, s.button),
        });
      });
    },
    px1m: function (e, t, n) {
      e.exports = {
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        container: 'container-2sL5JydP',
        unsetAlign: 'unsetAlign-2sL5JydP',
        title: 'title-2sL5JydP',
        subtitle: 'subtitle-2sL5JydP',
        ellipsis: 'ellipsis-2sL5JydP',
        close: 'close-2sL5JydP',
      };
    },
    rlH3: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 120" width="120" height="120" fill="none"><g clip-path="url(#a00y35lj1)"><path fill="#2A2E39" d="M16.01 71.1c10.54 13.42 34.92 11.86 54.46-3.48s26.85-38.65 16.3-52.08C76.25 2.12 51.87 3.68 32.33 19.02c-9.2 7.22-15.68 16.2-18.87 25.09-.68 1.88-2.57 3.05-4.53 3.48a9.7 9.7 0 0 0-3.96 1.85C.5 52.94-.09 59.64 3.64 64.4a11.24 11.24 0 0 0 7.82 4.31 6.2 6.2 0 0 1 4.55 2.4z"/><path fill="#1848CC" d="M28.3 35.56c1.8 3.42 12.08 10.65 25.62 16.88 6.36 2.93 12.38 5.3 17.37 6.93a172.7 172.7 0 0 0-18-12.68c-14.59-9.1-24.97-12.4-24.97-12.4-.18.3-.19.72-.01 1.27z"/><path stroke="#B2B5BE" stroke-width="1.5" d="M86.25 71.4c-.19.28-.54.53-1.17.69-.63.15-1.48.19-2.56.08-2.14-.22-5-1-8.4-2.28-6.78-2.57-15.53-7.13-24.64-13.06-9.12-5.93-16.82-12.1-21.92-17.25-2.55-2.59-4.41-4.89-5.48-6.76a7.79 7.79 0 0 1-.96-2.37c-.12-.64-.03-1.06.16-1.35.2-.3.54-.55 1.17-.7a7.8 7.8 0 0 1 2.56-.08c2.14.22 5 1 8.4 2.28 6.78 2.57 15.53 7.12 24.65 13.06 9.1 5.93 16.81 12.1 21.9 17.25 2.56 2.58 4.43 4.89 5.5 6.76.53.94.84 1.73.95 2.37.12.64.03 1.06-.16 1.35z"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="1.5" d="M28.96 34.63c1.99.57 4.47 1.55 7.3 2.86l12.2 6.52a193.2 193.2 0 0 1 6.66 4.15c10.56 6.88 19.12 13.86 22.97 18.45"/><path stroke="#B2B5BE" stroke-width="1.5" d="M83.79 65.59c6.77-14.14 1.41-32-13.05-41.42-14.46-9.41-32.96-7.09-43.15 4.83M74.96 21.24a6.08 6.08 0 0 1-2.58 2.3c-.9.39-1.69.35-2.23 0-.54-.36-.9-1.05-.9-2.04a6.08 6.08 0 0 1 1.05-3.29 6.07 6.07 0 0 1 2.58-2.29c.9-.4 1.69-.35 2.23 0s.9 1.05.9 2.04c.01.98-.32 2.17-1.05 3.28z"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="1.5" d="M42.7 23.62c1.25-.3 4.56-1.3 8.92-1.3M80.14 84.07C76.5 84.03 64.4 84 50 84s-26.5.03-30.14.07M24.7 59.33l5.77 5.32M32.05 56.05l.84 3.28"/></g><defs><clipPath id="a00y35lj1"><path fill="#fff" d="M0 0h100v100H0V0z"/></clipPath></defs></svg>';
    },
    tyJc: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5a2.5 2.5 0 0 1 5 0V7H7V5.5zM6 7V5.5a3.5 3.5 0 1 1 7 0V7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm8 2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9zm-3 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
    },
    uhCe: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('ASyk');
      const o = {
        SmallHeight: r['small-height-breakpoint'],
        TabletSmall: r['tablet-small-breakpoint'],
        TabletNormal: r['tablet-normal-breakpoint'],
      };
    },
    'x0D+': function (e, t, n) {
      var r, o, i;
      (o = [t]),
        void 0 ===
          (i =
            'function' ==
            typeof (r = function (e) {
              'use strict';
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                  return n;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, '__esModule', { value: !0 });
              var n = !1;
              if ('undefined' != typeof window) {
                var r = {
                  get passive() {
                    n = !0;
                  },
                };
                window.addEventListener('testPassive', null, r),
                  window.removeEventListener('testPassive', null, r);
              }
              var o =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                i = [],
                s = !1,
                a = -1,
                c = void 0,
                u = void 0,
                l = function (e) {
                  return i.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                d = function (e) {
                  var t = e || window.event;
                  return (
                    !!l(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                h = function () {
                  setTimeout(function () {
                    void 0 !== u &&
                      ((document.body.style.paddingRight = u), (u = void 0)),
                      void 0 !== c &&
                        ((document.body.style.overflow = c), (c = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, r) {
                if (o) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
                    );
                  if (
                    e &&
                    !i.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var h = { targetElement: e, options: r || {} };
                    (i = [].concat(t(i), [h])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (a = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var n, r, o, i;
                        1 === t.targetTouches.length &&
                          ((r = e),
                          (i = (n = t).targetTouches[0].clientY - a),
                          !l(n.target) &&
                            ((r && 0 === r.scrollTop && 0 < i) ||
                            ((o = r) &&
                              o.scrollHeight - o.scrollTop <= o.clientHeight &&
                              i < 0)
                              ? d(n)
                              : n.stopPropagation()));
                      }),
                      s ||
                        (document.addEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (s = !0));
                  }
                } else {
                  (p = r),
                    setTimeout(function () {
                      if (void 0 === u) {
                        var e = !!p && !0 === p.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((u = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === c &&
                        ((c = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var f = { targetElement: e, options: r || {} };
                  i = [].concat(t(i), [f]);
                }
                var p;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  o
                    ? (i.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      s &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (s = !1)),
                      (i = []),
                      (a = -1))
                    : (h(), (i = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (o) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (i = i.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      s &&
                        0 === i.length &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (s = !1));
                  } else
                    1 === i.length && i[0].targetElement === e
                      ? (h(), (i = []))
                      : (i = i.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? r.apply(t, o)
              : r) || (e.exports = i);
    },
    x5pF: function (e, t, n) {
      e.exports = {
        title: 'title-3eZ-_4gp',
        empty: 'empty-3eZ-_4gp',
        image: 'image-3eZ-_4gp',
        contentList: 'contentList-3eZ-_4gp',
      };
    },
    xNz2: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = {};
      n.r(r),
        n.d(r, 'FILE', function () {
          return te;
        }),
        n.d(r, 'URL', function () {
          return ne;
        }),
        n.d(r, 'TEXT', function () {
          return re;
        }),
        n.d(r, 'HTML', function () {
          return oe;
        });
      var o = n('q1tI'),
        i = n.n(o),
        s = n('i8i4');
      n('FadI');
      async function a(e, t, n) {
        let r;
        for (let o = 0; o < t; ++o)
          try {
            return await e(r);
          } catch (e) {
            (r = e), await n(o);
          }
        throw r;
      }
      async function c(e, t) {
        return a(e, t, () => Promise.resolve());
      }
      var u = n('txPx');
      const l = Object(u.getLogger)('DataSourcesIcons');
      let d = null;
      function h() {
        const e = n.c.zxD0;
        return e
          ? Promise.resolve(e.exports.lineToolsIcons)
          : n
              .e('line-tools-icons')
              .then(n.bind(null, 'zxD0'))
              .then((e) => e.lineToolsIcons);
      }
      function f() {
        const e = n.c.EsZh;
        return e
          ? Promise.resolve(e.exports.SERIES_ICONS)
          : n
              .e('series-icons-map')
              .then(n.bind(null, 'EsZh'))
              .then((e) => e.SERIES_ICONS);
      }
      let p = null;
      function g() {
        return (
          null === p &&
            (p = (function () {
              const e = c(h, 2)
                  .then((e) => e)
                  .catch((e) => (l.logWarn(e), {})),
                t = c(f, 2)
                  .then((e) => e)
                  .catch((e) => (l.logWarn(e), {}));
              return Promise.all([e, t]);
            })()),
          p.then((e) => ((d = { linetool: e[0], series: e[1] }), d))
        );
      }
      var v = n('Sn4D'),
        b = n('mkWe'),
        m = n('/KDZ'),
        y = n('YFKU'),
        O = n('g89m'),
        S = n('uhCe'),
        w = n('b4AZ');
      var _ = n('cvc5'),
        C = n.n(_),
        T = n('5rFJ'),
        E = n('8+VR'),
        j = n('Eyy1'),
        D = n('TSYQ'),
        I = n.n(D),
        k = n('Iivm'),
        M = n('N5tr'),
        x = n('82wv'),
        N = n('gla1');
      const P = o.createContext(null);
      var A = n('p0W+'),
        L = n('+KIV'),
        R = n('Z3xJ'),
        B = n('B6/a'),
        F = n('nkjW'),
        H = n('JWMC');
      function z(e) {
        const { viewModel: t } = Object(j.ensureNotNull)(
            Object(o.useContext)(P),
          ),
          n = Object(N.a)(),
          r = t.selection();
        Object(o.useEffect)(() => {
          const e = {};
          return (
            t.onChange().subscribe(e, () => n()),
            () => {
              t.onChange().unsubscribeAll(e);
            }
          );
        }, [t]),
          Object(o.useEffect)(() => {
            const e = {};
            return (
              r.onChange().subscribe(e, () => n()),
              () => {
                r.onChange().unsubscribeAll(e);
              }
            );
          }, [r]);
        const s = !t.canSelectionBeUnmerged(),
          a = t.isSelectionCopiable(),
          c = t.isSelectionCloneable(),
          u = !a && !c,
          l = t.canSelectionBeGrouped();
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            'div',
            { className: D(F.title, F.withoutIcon) },
            Object(y.t)('Object tree'),
            !1,
          ),
          i.a.createElement(
            'div',
            { className: F.buttons },
            i.a.createElement(A.a, {
              className: D(F.button, !l && F.disabled),
              icon: B,
              onClick: function () {
                t.createGroupFromSelection();
              },
              isDisabled: !l,
              title: Object(y.t)('Create a group of drawings'),
              'data-name': 'group-button',
            }),
            i.a.createElement(
              x.a,
              {
                className: D(F.button, u && F.disabled),
                isDisabled: u,
                content: i.a.createElement(k.a, { icon: L }),
                title: Object(y.t)('Clone, Copy'),
                arrow: !1,
                isShowTooltip: !0,
                'data-name': 'copy-clone-button',
              },
              a &&
                i.a.createElement(M.b, {
                  'data-name': 'copy',
                  label: Object(y.t)('Copy'),
                  onClick: function () {
                    t.copySelection();
                  },
                }),
              c &&
                i.a.createElement(M.b, {
                  'data-name': 'clone',
                  label: Object(y.t)('Clone'),
                  onClick: function () {
                    t.cloneSelection();
                  },
                }),
            ),
            i.a.createElement(
              x.a,
              {
                className: D(F.button, s && F.disabled),
                isDisabled: s,
                content: i.a.createElement(k.a, { icon: R }),
                title: Object(y.t)('Move to'),
                arrow: !1,
                isShowTooltip: !0,
                'data-name': 'move-to-button',
              },
              i.a.createElement(M.b, {
                'data-name': 'new-pane-above',
                label: Object(y.t)('New pane above'),
                onClick: function () {
                  t.unmergeSelectionUp();
                },
              }),
              i.a.createElement(M.b, {
                'data-name': 'new-pane-below',
                label: Object(y.t)('New pane below'),
                onClick: function () {
                  t.unmergeSelectionDown();
                },
              }),
            ),
          ),
        );
      }
      var U = n('rRWa'),
        G = n('/MKj');
      function V(e) {
        var t = null;
        return function () {
          return null == t && (t = e()), t;
        };
      }
      function K(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var W = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.entered = []),
              (this.isNodeInDocument = t);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'enter',
                value: function (e) {
                  var t = this,
                    n = this.entered.length;
                  return (
                    (this.entered = (function (e, t) {
                      var n = new Set(),
                        r = function (e) {
                          return n.add(e);
                        };
                      e.forEach(r), t.forEach(r);
                      var o = [];
                      return (
                        n.forEach(function (e) {
                          return o.push(e);
                        }),
                        o
                      );
                    })(
                      this.entered.filter(function (n) {
                        return (
                          t.isNodeInDocument(n) &&
                          (!n.contains || n.contains(e))
                        );
                      }),
                      [e],
                    )),
                    0 === n && this.entered.length > 0
                  );
                },
              },
              {
                key: 'leave',
                value: function (e) {
                  var t,
                    n,
                    r = this.entered.length;
                  return (
                    (this.entered =
                      ((t = this.entered.filter(this.isNodeInDocument)),
                      (n = e),
                      t.filter(function (e) {
                        return e !== n;
                      }))),
                    r > 0 && 0 === this.entered.length
                  );
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.entered = [];
                },
              },
            ]) && K(t.prototype, n),
            r && K(t, r),
            e
          );
        })(),
        q = V(function () {
          return /firefox/i.test(navigator.userAgent);
        }),
        Y = V(function () {
          return Boolean(window.safari);
        });
      function Z(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var J = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e);
          for (var r = t.length, o = [], i = 0; i < r; i++) o.push(i);
          o.sort(function (e, n) {
            return t[e] < t[n] ? -1 : 1;
          });
          for (var s, a, c = [], u = [], l = [], d = 0; d < r - 1; d++)
            (s = t[d + 1] - t[d]),
              (a = n[d + 1] - n[d]),
              u.push(s),
              c.push(a),
              l.push(a / s);
          for (var h = [l[0]], f = 0; f < u.length - 1; f++) {
            var p = l[f],
              g = l[f + 1];
            if (p * g <= 0) h.push(0);
            else {
              s = u[f];
              var v = u[f + 1],
                b = s + v;
              h.push((3 * b) / ((b + v) / p + (b + s) / g));
            }
          }
          h.push(l[l.length - 1]);
          for (var m, y = [], O = [], S = 0; S < h.length - 1; S++) {
            m = l[S];
            var w = h[S],
              _ = 1 / u[S],
              C = w + h[S + 1] - m - m;
            y.push((m - w - C) * _), O.push(C * _ * _);
          }
          (this.xs = t),
            (this.ys = n),
            (this.c1s = h),
            (this.c2s = y),
            (this.c3s = O);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'interpolate',
              value: function (e) {
                var t = this.xs,
                  n = this.ys,
                  r = this.c1s,
                  o = this.c2s,
                  i = this.c3s,
                  s = t.length - 1;
                if (e === t[s]) return n[s];
                for (var a, c = 0, u = i.length - 1; c <= u; ) {
                  var l = t[(a = Math.floor(0.5 * (c + u)))];
                  if (l < e) c = a + 1;
                  else {
                    if (!(l > e)) return n[a];
                    u = a - 1;
                  }
                }
                var d = e - t[(s = Math.max(0, u))],
                  h = d * d;
                return n[s] + r[s] * d + o[s] * h + i[s] * d * h;
              },
            },
          ]) && Z(t.prototype, n),
          r && Z(t, r),
          e
        );
      })();
      function X(e) {
        var t = 1 === e.nodeType ? e : e.parentElement;
        if (!t) return null;
        var n = t.getBoundingClientRect(),
          r = n.top;
        return { x: n.left, y: r };
      }
      function Q(e) {
        return { x: e.clientX, y: e.clientY };
      }
      function $(e, t, n, r, o) {
        var i,
          s,
          a,
          c =
            'IMG' === (i = t).nodeName &&
            (q() ||
              !(
                null !== (s = document.documentElement) &&
                void 0 !== s &&
                s.contains(i)
              )),
          u = X(c ? e : t),
          l = { x: n.x - u.x, y: n.y - u.y },
          d = e.offsetWidth,
          h = e.offsetHeight,
          f = r.anchorX,
          p = r.anchorY,
          g = (function (e, t, n, r) {
            var o = e ? t.width : n,
              i = e ? t.height : r;
            return (
              Y() &&
                e &&
                ((i /= window.devicePixelRatio),
                (o /= window.devicePixelRatio)),
              { dragPreviewWidth: o, dragPreviewHeight: i }
            );
          })(c, t, d, h),
          v = g.dragPreviewWidth,
          b = g.dragPreviewHeight,
          m = o.offsetX,
          y = o.offsetY,
          O = 0 === y || y;
        return {
          x:
            0 === m || m
              ? m
              : new J(
                  [0, 0.5, 1],
                  [l.x, (l.x / d) * v, l.x + v - d],
                ).interpolate(f),
          y: O
            ? y
            : ((a = new J(
                [0, 0.5, 1],
                [l.y, (l.y / h) * b, l.y + b - h],
              ).interpolate(p)),
              Y() && c && (a += (window.devicePixelRatio - 1) * b),
              a),
        };
      }
      var ee,
        te = '__NATIVE_FILE__',
        ne = '__NATIVE_URL__',
        re = '__NATIVE_TEXT__',
        oe = '__NATIVE_HTML__';
      function ie(e, t, n) {
        var r = t.reduce(function (t, n) {
          return t || e.getData(n);
        }, '');
        return null != r ? r : n;
      }
      function se(e, t, n) {
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
      var ae =
        (se((ee = {}), te, {
          exposeProperties: {
            files: function (e) {
              return Array.prototype.slice.call(e.files);
            },
            items: function (e) {
              return e.items;
            },
          },
          matchesTypes: ['Files'],
        }),
        se(ee, oe, {
          exposeProperties: {
            html: function (e, t) {
              return ie(e, t, '');
            },
          },
          matchesTypes: ['Html', 'text/html'],
        }),
        se(ee, ne, {
          exposeProperties: {
            urls: function (e, t) {
              return ie(e, t, '').split('\n');
            },
          },
          matchesTypes: ['Url', 'text/uri-list'],
        }),
        se(ee, re, {
          exposeProperties: {
            text: function (e, t) {
              return ie(e, t, '');
            },
          },
          matchesTypes: ['Text', 'text/plain'],
        }),
        ee);
      function ce(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var ue = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.config = t),
            (this.item = {}),
            this.initializeExposedProperties();
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'initializeExposedProperties',
              value: function () {
                var e = this;
                Object.keys(this.config.exposeProperties).forEach(function (t) {
                  Object.defineProperty(e.item, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return (
                        console.warn(
                          'Browser doesn\'t allow reading "'.concat(
                            t,
                            '" until the drop event.',
                          ),
                        ),
                        null
                      );
                    },
                  });
                });
              },
            },
            {
              key: 'loadDataTransfer',
              value: function (e) {
                var t = this;
                if (e) {
                  var n = {};
                  Object.keys(this.config.exposeProperties).forEach(function (
                    r,
                  ) {
                    n[r] = {
                      value: t.config.exposeProperties[r](
                        e,
                        t.config.matchesTypes,
                      ),
                      configurable: !0,
                      enumerable: !0,
                    };
                  }),
                    Object.defineProperties(this.item, n);
                }
              },
            },
            {
              key: 'canDrag',
              value: function () {
                return !0;
              },
            },
            {
              key: 'beginDrag',
              value: function () {
                return this.item;
              },
            },
            {
              key: 'isDragging',
              value: function (e, t) {
                return t === e.getSourceId();
              },
            },
            { key: 'endDrag', value: function () {} },
          ]) && ce(t.prototype, n),
          r && ce(t, r),
          e
        );
      })();
      function le(e) {
        if (!e) return null;
        var t = Array.prototype.slice.call(e.types || []);
        return (
          Object.keys(ae).filter(function (e) {
            return ae[e].matchesTypes.some(function (e) {
              return t.indexOf(e) > -1;
            });
          })[0] || null
        );
      }
      function de(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var he = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.ownerDocument = null),
            (this.globalContext = t),
            (this.optionsArgs = n);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'window',
              get: function () {
                return this.globalContext
                  ? this.globalContext
                  : 'undefined' != typeof window
                  ? window
                  : void 0;
              },
            },
            {
              key: 'document',
              get: function () {
                var e;
                return null !== (e = this.globalContext) &&
                  void 0 !== e &&
                  e.document
                  ? this.globalContext.document
                  : this.window
                  ? this.window.document
                  : void 0;
              },
            },
            {
              key: 'rootElement',
              get: function () {
                var e;
                return (
                  (null === (e = this.optionsArgs) || void 0 === e
                    ? void 0
                    : e.rootElement) || this.window
                );
              },
            },
          ]) && de(t.prototype, n),
          r && de(t, r),
          e
        );
      })();
      function fe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? fe(Object(n), !0).forEach(function (t) {
                ge(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function ge(e, t, n) {
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
      function ve(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var be,
        me = (function () {
          function e(t, n, r) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.sourcePreviewNodes = new Map()),
              (this.sourcePreviewNodeOptions = new Map()),
              (this.sourceNodes = new Map()),
              (this.sourceNodeOptions = new Map()),
              (this.dragStartSourceIds = null),
              (this.dropTargetIds = []),
              (this.dragEnterTargetIds = []),
              (this.currentNativeSource = null),
              (this.currentNativeHandle = null),
              (this.currentDragSourceNode = null),
              (this.altKeyPressed = !1),
              (this.mouseMoveTimeoutTimer = null),
              (this.asyncEndDragFrameId = null),
              (this.dragOverTargetIds = null),
              (this.getSourceClientOffset = function (e) {
                var t = o.sourceNodes.get(e);
                return (t && X(t)) || null;
              }),
              (this.endDragNativeItem = function () {
                o.isDraggingNativeItem() &&
                  (o.actions.endDrag(),
                  o.currentNativeHandle &&
                    o.registry.removeSource(o.currentNativeHandle),
                  (o.currentNativeHandle = null),
                  (o.currentNativeSource = null));
              }),
              (this.isNodeInDocument = function (e) {
                return Boolean(
                  e &&
                    o.document &&
                    o.document.body &&
                    document.body.contains(e),
                );
              }),
              (this.endDragIfSourceWasRemovedFromDOM = function () {
                var e = o.currentDragSourceNode;
                null == e ||
                  o.isNodeInDocument(e) ||
                  (o.clearCurrentDragSourceNode() &&
                    o.monitor.isDragging() &&
                    o.actions.endDrag());
              }),
              (this.handleTopDragStartCapture = function () {
                o.clearCurrentDragSourceNode(), (o.dragStartSourceIds = []);
              }),
              (this.handleTopDragStart = function (e) {
                if (!e.defaultPrevented) {
                  var t = o.dragStartSourceIds;
                  o.dragStartSourceIds = null;
                  var n = Q(e);
                  o.monitor.isDragging() && o.actions.endDrag(),
                    o.actions.beginDrag(t || [], {
                      publishSource: !1,
                      getSourceClientOffset: o.getSourceClientOffset,
                      clientOffset: n,
                    });
                  var r = e.dataTransfer,
                    i = le(r);
                  if (o.monitor.isDragging()) {
                    if (r && 'function' == typeof r.setDragImage) {
                      var s = o.monitor.getSourceId(),
                        a = o.sourceNodes.get(s),
                        c = o.sourcePreviewNodes.get(s) || a;
                      if (c) {
                        var u = o.getCurrentSourcePreviewNodeOptions(),
                          l = $(
                            a,
                            c,
                            n,
                            { anchorX: u.anchorX, anchorY: u.anchorY },
                            { offsetX: u.offsetX, offsetY: u.offsetY },
                          );
                        r.setDragImage(c, l.x, l.y);
                      }
                    }
                    try {
                      null == r || r.setData('application/json', {});
                    } catch (e) {}
                    o.setCurrentDragSourceNode(e.target),
                      o.getCurrentSourcePreviewNodeOptions()
                        .captureDraggingState
                        ? o.actions.publishDragSource()
                        : setTimeout(function () {
                            return o.actions.publishDragSource();
                          }, 0);
                  } else if (i) o.beginDragNativeItem(i);
                  else {
                    if (
                      r &&
                      !r.types &&
                      ((e.target && !e.target.hasAttribute) ||
                        !e.target.hasAttribute('draggable'))
                    )
                      return;
                    e.preventDefault();
                  }
                }
              }),
              (this.handleTopDragEndCapture = function () {
                o.clearCurrentDragSourceNode() &&
                  o.monitor.isDragging() &&
                  o.actions.endDrag();
              }),
              (this.handleTopDragEnterCapture = function (e) {
                if (
                  ((o.dragEnterTargetIds = []),
                  o.enterLeaveCounter.enter(e.target) &&
                    !o.monitor.isDragging())
                ) {
                  var t = e.dataTransfer,
                    n = le(t);
                  n && o.beginDragNativeItem(n, t);
                }
              }),
              (this.handleTopDragEnter = function (e) {
                var t = o.dragEnterTargetIds;
                ((o.dragEnterTargetIds = []), o.monitor.isDragging()) &&
                  ((o.altKeyPressed = e.altKey),
                  t.length > 0 && o.actions.hover(t, { clientOffset: Q(e) }),
                  t.some(function (e) {
                    return o.monitor.canDropOnTarget(e);
                  }) &&
                    (e.preventDefault(),
                    e.dataTransfer &&
                      (e.dataTransfer.dropEffect = o.getCurrentDropEffect())));
              }),
              (this.handleTopDragOverCapture = function () {
                o.dragOverTargetIds = [];
              }),
              (this.handleTopDragOver = function (e) {
                var t = o.dragOverTargetIds;
                if (((o.dragOverTargetIds = []), !o.monitor.isDragging()))
                  return (
                    e.preventDefault(),
                    void (
                      e.dataTransfer && (e.dataTransfer.dropEffect = 'none')
                    )
                  );
                (o.altKeyPressed = e.altKey),
                  o.actions.hover(t || [], { clientOffset: Q(e) }),
                  (t || []).some(function (e) {
                    return o.monitor.canDropOnTarget(e);
                  })
                    ? (e.preventDefault(),
                      e.dataTransfer &&
                        (e.dataTransfer.dropEffect = o.getCurrentDropEffect()))
                    : o.isDraggingNativeItem()
                    ? e.preventDefault()
                    : (e.preventDefault(),
                      e.dataTransfer && (e.dataTransfer.dropEffect = 'none'));
              }),
              (this.handleTopDragLeaveCapture = function (e) {
                o.isDraggingNativeItem() && e.preventDefault(),
                  o.enterLeaveCounter.leave(e.target) &&
                    o.isDraggingNativeItem() &&
                    setTimeout(function () {
                      return o.endDragNativeItem();
                    }, 0);
              }),
              (this.handleTopDropCapture = function (e) {
                var t;
                ((o.dropTargetIds = []), o.isDraggingNativeItem()) &&
                  (e.preventDefault(),
                  null === (t = o.currentNativeSource) ||
                    void 0 === t ||
                    t.loadDataTransfer(e.dataTransfer));
                o.enterLeaveCounter.reset();
              }),
              (this.handleTopDrop = function (e) {
                var t = o.dropTargetIds;
                (o.dropTargetIds = []),
                  o.actions.hover(t, { clientOffset: Q(e) }),
                  o.actions.drop({ dropEffect: o.getCurrentDropEffect() }),
                  o.isDraggingNativeItem()
                    ? o.endDragNativeItem()
                    : o.monitor.isDragging() && o.actions.endDrag();
              }),
              (this.handleSelectStart = function (e) {
                var t = e.target;
                'function' == typeof t.dragDrop &&
                  ('INPUT' === t.tagName ||
                    'SELECT' === t.tagName ||
                    'TEXTAREA' === t.tagName ||
                    t.isContentEditable ||
                    (e.preventDefault(), t.dragDrop()));
              }),
              (this.options = new he(n, r)),
              (this.actions = t.getActions()),
              (this.monitor = t.getMonitor()),
              (this.registry = t.getRegistry()),
              (this.enterLeaveCounter = new W(this.isNodeInDocument));
          }
          var t, n, o;
          return (
            (t = e),
            (n = [
              {
                key: 'profile',
                value: function () {
                  var e, t;
                  return {
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions: this.sourcePreviewNodeOptions
                      .size,
                    sourceNodeOptions: this.sourceNodeOptions.size,
                    sourceNodes: this.sourceNodes.size,
                    dragStartSourceIds:
                      (null === (e = this.dragStartSourceIds) || void 0 === e
                        ? void 0
                        : e.length) || 0,
                    dropTargetIds: this.dropTargetIds.length,
                    dragEnterTargetIds: this.dragEnterTargetIds.length,
                    dragOverTargetIds:
                      (null === (t = this.dragOverTargetIds) || void 0 === t
                        ? void 0
                        : t.length) || 0,
                  };
                },
              },
              {
                key: 'window',
                get: function () {
                  return this.options.window;
                },
              },
              {
                key: 'document',
                get: function () {
                  return this.options.document;
                },
              },
              {
                key: 'rootElement',
                get: function () {
                  return this.options.rootElement;
                },
              },
              {
                key: 'setup',
                value: function () {
                  var e = this.rootElement;
                  if (void 0 !== e) {
                    if (e.__isReactDndBackendSetUp)
                      throw new Error(
                        'Cannot have two HTML5 backends at the same time.',
                      );
                    (e.__isReactDndBackendSetUp = !0),
                      this.addEventListeners(e);
                  }
                },
              },
              {
                key: 'teardown',
                value: function () {
                  var e,
                    t = this.rootElement;
                  void 0 !== t &&
                    ((t.__isReactDndBackendSetUp = !1),
                    this.removeEventListeners(this.rootElement),
                    this.clearCurrentDragSourceNode(),
                    this.asyncEndDragFrameId &&
                      (null === (e = this.window) ||
                        void 0 === e ||
                        e.cancelAnimationFrame(this.asyncEndDragFrameId)));
                },
              },
              {
                key: 'connectDragPreview',
                value: function (e, t, n) {
                  var r = this;
                  return (
                    this.sourcePreviewNodeOptions.set(e, n),
                    this.sourcePreviewNodes.set(e, t),
                    function () {
                      r.sourcePreviewNodes.delete(e),
                        r.sourcePreviewNodeOptions.delete(e);
                    }
                  );
                },
              },
              {
                key: 'connectDragSource',
                value: function (e, t, n) {
                  var r = this;
                  this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
                  var o = function (t) {
                      return r.handleDragStart(t, e);
                    },
                    i = function (e) {
                      return r.handleSelectStart(e);
                    };
                  return (
                    t.setAttribute('draggable', 'true'),
                    t.addEventListener('dragstart', o),
                    t.addEventListener('selectstart', i),
                    function () {
                      r.sourceNodes.delete(e),
                        r.sourceNodeOptions.delete(e),
                        t.removeEventListener('dragstart', o),
                        t.removeEventListener('selectstart', i),
                        t.setAttribute('draggable', 'false');
                    }
                  );
                },
              },
              {
                key: 'connectDropTarget',
                value: function (e, t) {
                  var n = this,
                    r = function (t) {
                      return n.handleDragEnter(t, e);
                    },
                    o = function (t) {
                      return n.handleDragOver(t, e);
                    },
                    i = function (t) {
                      return n.handleDrop(t, e);
                    };
                  return (
                    t.addEventListener('dragenter', r),
                    t.addEventListener('dragover', o),
                    t.addEventListener('drop', i),
                    function () {
                      t.removeEventListener('dragenter', r),
                        t.removeEventListener('dragover', o),
                        t.removeEventListener('drop', i);
                    }
                  );
                },
              },
              {
                key: 'addEventListeners',
                value: function (e) {
                  e.addEventListener &&
                    (e.addEventListener('dragstart', this.handleTopDragStart),
                    e.addEventListener(
                      'dragstart',
                      this.handleTopDragStartCapture,
                      !0,
                    ),
                    e.addEventListener(
                      'dragend',
                      this.handleTopDragEndCapture,
                      !0,
                    ),
                    e.addEventListener('dragenter', this.handleTopDragEnter),
                    e.addEventListener(
                      'dragenter',
                      this.handleTopDragEnterCapture,
                      !0,
                    ),
                    e.addEventListener(
                      'dragleave',
                      this.handleTopDragLeaveCapture,
                      !0,
                    ),
                    e.addEventListener('dragover', this.handleTopDragOver),
                    e.addEventListener(
                      'dragover',
                      this.handleTopDragOverCapture,
                      !0,
                    ),
                    e.addEventListener('drop', this.handleTopDrop),
                    e.addEventListener('drop', this.handleTopDropCapture, !0));
                },
              },
              {
                key: 'removeEventListeners',
                value: function (e) {
                  e.removeEventListener &&
                    (e.removeEventListener(
                      'dragstart',
                      this.handleTopDragStart,
                    ),
                    e.removeEventListener(
                      'dragstart',
                      this.handleTopDragStartCapture,
                      !0,
                    ),
                    e.removeEventListener(
                      'dragend',
                      this.handleTopDragEndCapture,
                      !0,
                    ),
                    e.removeEventListener('dragenter', this.handleTopDragEnter),
                    e.removeEventListener(
                      'dragenter',
                      this.handleTopDragEnterCapture,
                      !0,
                    ),
                    e.removeEventListener(
                      'dragleave',
                      this.handleTopDragLeaveCapture,
                      !0,
                    ),
                    e.removeEventListener('dragover', this.handleTopDragOver),
                    e.removeEventListener(
                      'dragover',
                      this.handleTopDragOverCapture,
                      !0,
                    ),
                    e.removeEventListener('drop', this.handleTopDrop),
                    e.removeEventListener(
                      'drop',
                      this.handleTopDropCapture,
                      !0,
                    ));
                },
              },
              {
                key: 'getCurrentSourceNodeOptions',
                value: function () {
                  var e = this.monitor.getSourceId(),
                    t = this.sourceNodeOptions.get(e);
                  return pe(
                    { dropEffect: this.altKeyPressed ? 'copy' : 'move' },
                    t || {},
                  );
                },
              },
              {
                key: 'getCurrentDropEffect',
                value: function () {
                  return this.isDraggingNativeItem()
                    ? 'copy'
                    : this.getCurrentSourceNodeOptions().dropEffect;
                },
              },
              {
                key: 'getCurrentSourcePreviewNodeOptions',
                value: function () {
                  var e = this.monitor.getSourceId();
                  return pe(
                    { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
                    this.sourcePreviewNodeOptions.get(e) || {},
                  );
                },
              },
              {
                key: 'isDraggingNativeItem',
                value: function () {
                  var e = this.monitor.getItemType();
                  return Object.keys(r).some(function (t) {
                    return r[t] === e;
                  });
                },
              },
              {
                key: 'beginDragNativeItem',
                value: function (e, t) {
                  this.clearCurrentDragSourceNode(),
                    (this.currentNativeSource = (function (e, t) {
                      var n = new ue(ae[e]);
                      return n.loadDataTransfer(t), n;
                    })(e, t)),
                    (this.currentNativeHandle = this.registry.addSource(
                      e,
                      this.currentNativeSource,
                    )),
                    this.actions.beginDrag([this.currentNativeHandle]);
                },
              },
              {
                key: 'setCurrentDragSourceNode',
                value: function (e) {
                  var t = this;
                  this.clearCurrentDragSourceNode(),
                    (this.currentDragSourceNode = e),
                    (this.mouseMoveTimeoutTimer = setTimeout(function () {
                      var e;
                      return null === (e = t.rootElement) || void 0 === e
                        ? void 0
                        : e.addEventListener(
                            'mousemove',
                            t.endDragIfSourceWasRemovedFromDOM,
                            !0,
                          );
                    }, 1e3));
                },
              },
              {
                key: 'clearCurrentDragSourceNode',
                value: function () {
                  var e;
                  return (
                    !!this.currentDragSourceNode &&
                    ((this.currentDragSourceNode = null),
                    this.rootElement &&
                      (null === (e = this.window) ||
                        void 0 === e ||
                        e.clearTimeout(this.mouseMoveTimeoutTimer || void 0),
                      this.rootElement.removeEventListener(
                        'mousemove',
                        this.endDragIfSourceWasRemovedFromDOM,
                        !0,
                      )),
                    (this.mouseMoveTimeoutTimer = null),
                    !0)
                  );
                },
              },
              {
                key: 'handleDragStart',
                value: function (e, t) {
                  e.defaultPrevented ||
                    (this.dragStartSourceIds || (this.dragStartSourceIds = []),
                    this.dragStartSourceIds.unshift(t));
                },
              },
              {
                key: 'handleDragEnter',
                value: function (e, t) {
                  this.dragEnterTargetIds.unshift(t);
                },
              },
              {
                key: 'handleDragOver',
                value: function (e, t) {
                  null === this.dragOverTargetIds &&
                    (this.dragOverTargetIds = []),
                    this.dragOverTargetIds.unshift(t);
                },
              },
              {
                key: 'handleDrop',
                value: function (e, t) {
                  this.dropTargetIds.unshift(t);
                },
              },
            ]) && ve(t.prototype, n),
            o && ve(t, o),
            e
          );
        })(),
        ye = function (e, t, n) {
          return new me(e, t, n);
        },
        Oe = n('aKzv');
      !(function (e) {
        (e.mouse = 'mouse'), (e.touch = 'touch'), (e.keyboard = 'keyboard');
      })(be || (be = {}));
      var Se = 1,
        we = 0;
      function _e(e) {
        return void 0 === e.button || e.button === we;
      }
      function Ce(e) {
        return !!e.targetTouches;
      }
      function Te(e, t) {
        return Ce(e)
          ? (function (e, t) {
              return 1 === e.targetTouches.length
                ? Te(e.targetTouches[0])
                : t &&
                  1 === e.touches.length &&
                  e.touches[0].target === t.target
                ? Te(e.touches[0])
                : void 0;
            })(e, t)
          : { x: e.clientX, y: e.clientY };
      }
      var Ee = (function () {
        var e = !1;
        try {
          addEventListener(
            'test',
            function () {},
            Object.defineProperty({}, 'passive', {
              get: function () {
                return (e = !0), !0;
              },
            }),
          );
        } catch (e) {}
        return e;
      })();
      function je(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var De,
        Ie = (function () {
          function e(t, n) {
            var r = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.enableTouchEvents = !0),
              (this.enableMouseEvents = !1),
              (this.enableKeyboardEvents = !1),
              (this.ignoreContextMenu = !1),
              (this.enableHoverOutsideTarget = !1),
              (this.touchSlop = 0),
              (this.scrollAngleRanges = void 0),
              (this.context = n),
              (this.delayTouchStart = t.delayTouchStart || t.delay || 0),
              (this.delayMouseStart = t.delayMouseStart || t.delay || 0),
              Object.keys(t).forEach(function (e) {
                null != t[e] && (r[e] = t[e]);
              });
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'window',
                get: function () {
                  return this.context && this.context.window
                    ? this.context.window
                    : 'undefined' != typeof window
                    ? window
                    : void 0;
                },
              },
              {
                key: 'document',
                get: function () {
                  var e;
                  return null !== (e = this.context) &&
                    void 0 !== e &&
                    e.document
                    ? this.context.document
                    : this.window
                    ? this.window.document
                    : void 0;
                },
              },
            ]) && je(t.prototype, n),
            r && je(t, r),
            e
          );
        })();
      function ke(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Me(e, t, n) {
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
      var xe =
          (Me((De = {}), be.mouse, {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            contextmenu: 'contextmenu',
          }),
          Me(De, be.touch, {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
          }),
          Me(De, be.keyboard, { keydown: 'keydown' }),
          De),
        Ne = (function () {
          function e(t, n, r) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.getSourceClientOffset = function (e) {
                var t = o.sourceNodes.get(e);
                return (
                  t &&
                  (function (e) {
                    var t = 1 === e.nodeType ? e : e.parentElement;
                    if (t) {
                      var n = t.getBoundingClientRect(),
                        r = n.top;
                      return { x: n.left, y: r };
                    }
                  })(t)
                );
              }),
              (this.handleTopMoveStartCapture = function (e) {
                _e(e) && (o.moveStartSourceIds = []);
              }),
              (this.handleMoveStart = function (e) {
                Array.isArray(o.moveStartSourceIds) &&
                  o.moveStartSourceIds.unshift(e);
              }),
              (this.handleTopMoveStart = function (e) {
                if (_e(e)) {
                  var t = Te(e);
                  t &&
                    (Ce(e) && (o.lastTargetTouchFallback = e.targetTouches[0]),
                    (o._mouseClientOffset = t)),
                    (o.waitingForDelay = !1);
                }
              }),
              (this.handleTopMoveStartDelay = function (e) {
                if (_e(e)) {
                  var t =
                    e.type === xe.touch.start
                      ? o.options.delayTouchStart
                      : o.options.delayMouseStart;
                  (o.timeout = setTimeout(o.handleTopMoveStart.bind(o, e), t)),
                    (o.waitingForDelay = !0);
                }
              }),
              (this.handleTopMoveCapture = function () {
                o.dragOverTargetIds = [];
              }),
              (this.handleMove = function (e, t) {
                o.dragOverTargetIds && o.dragOverTargetIds.unshift(t);
              }),
              (this.handleTopMove = function (e) {
                if (
                  (o.timeout && clearTimeout(o.timeout),
                  o.document && !o.waitingForDelay)
                ) {
                  var t,
                    n,
                    r,
                    i,
                    s = o.moveStartSourceIds,
                    a = o.dragOverTargetIds,
                    c = o.options.enableHoverOutsideTarget,
                    u = Te(e, o.lastTargetTouchFallback);
                  if (u)
                    if (
                      o._isScrolling ||
                      (!o.monitor.isDragging() &&
                        (function (e, t, n, r, o) {
                          if (!o) return !1;
                          for (
                            var i =
                                (180 * Math.atan2(r - t, n - e)) / Math.PI +
                                180,
                              s = 0;
                            s < o.length;
                            ++s
                          )
                            if (
                              (null == o[s].start || i >= o[s].start) &&
                              (null == o[s].end || i <= o[s].end)
                            )
                              return !0;
                          return !1;
                        })(
                          o._mouseClientOffset.x || 0,
                          o._mouseClientOffset.y || 0,
                          u.x,
                          u.y,
                          o.options.scrollAngleRanges,
                        ))
                    )
                      o._isScrolling = !0;
                    else if (
                      (!o.monitor.isDragging() &&
                        o._mouseClientOffset.hasOwnProperty('x') &&
                        s &&
                        ((t = o._mouseClientOffset.x || 0),
                        (n = o._mouseClientOffset.y || 0),
                        (r = u.x),
                        (i = u.y),
                        Math.sqrt(
                          Math.pow(Math.abs(r - t), 2) +
                            Math.pow(Math.abs(i - n), 2),
                        ) > (o.options.touchSlop ? o.options.touchSlop : 0)) &&
                        ((o.moveStartSourceIds = void 0),
                        o.actions.beginDrag(s, {
                          clientOffset: o._mouseClientOffset,
                          getSourceClientOffset: o.getSourceClientOffset,
                          publishSource: !1,
                        })),
                      o.monitor.isDragging())
                    ) {
                      var l = o.sourceNodes.get(o.monitor.getSourceId());
                      o.installSourceNodeRemovalObserver(l),
                        o.actions.publishDragSource(),
                        e.cancelable && e.preventDefault();
                      var d = (a || [])
                          .map(function (e) {
                            return o.targetNodes.get(e);
                          })
                          .filter(function (e) {
                            return !!e;
                          }),
                        h = o.options.getDropTargetElementsAtPoint
                          ? o.options.getDropTargetElementsAtPoint(u.x, u.y, d)
                          : o.document.elementsFromPoint(u.x, u.y),
                        f = [];
                      for (var p in h)
                        if (h.hasOwnProperty(p)) {
                          var g = h[p];
                          for (f.push(g); g; )
                            (g = g.parentElement) &&
                              -1 === f.indexOf(g) &&
                              f.push(g);
                        }
                      var v = f
                        .filter(function (e) {
                          return d.indexOf(e) > -1;
                        })
                        .map(function (e) {
                          return o._getDropTargetId(e);
                        })
                        .filter(function (e) {
                          return !!e;
                        })
                        .filter(function (e, t, n) {
                          return n.indexOf(e) === t;
                        });
                      if (c)
                        for (var b in o.targetNodes) {
                          var m = o.targetNodes.get(b);
                          if (l && m && m.contains(l) && -1 === v.indexOf(b)) {
                            v.unshift(b);
                            break;
                          }
                        }
                      v.reverse(), o.actions.hover(v, { clientOffset: u });
                    }
                }
              }),
              (this._getDropTargetId = function (e) {
                for (
                  var t = o.targetNodes.keys(), n = t.next();
                  !1 === n.done;

                ) {
                  var r = n.value;
                  if (e === o.targetNodes.get(r)) return r;
                  n = t.next();
                }
              }),
              (this.handleTopMoveEndCapture = function (e) {
                (o._isScrolling = !1),
                  (o.lastTargetTouchFallback = void 0),
                  (function (e) {
                    return void 0 === e.buttons || 0 == (e.buttons & Se);
                  })(e) &&
                    (o.monitor.isDragging() && !o.monitor.didDrop()
                      ? (e.cancelable && e.preventDefault(),
                        (o._mouseClientOffset = {}),
                        o.uninstallSourceNodeRemovalObserver(),
                        o.actions.drop(),
                        o.actions.endDrag())
                      : (o.moveStartSourceIds = void 0));
              }),
              (this.handleCancelOnEscape = function (e) {
                'Escape' === e.key &&
                  o.monitor.isDragging() &&
                  ((o._mouseClientOffset = {}),
                  o.uninstallSourceNodeRemovalObserver(),
                  o.actions.endDrag());
              }),
              (this.options = new Ie(r, n)),
              (this.actions = t.getActions()),
              (this.monitor = t.getMonitor()),
              (this.sourceNodes = new Map()),
              (this.sourcePreviewNodes = new Map()),
              (this.sourcePreviewNodeOptions = new Map()),
              (this.targetNodes = new Map()),
              (this.listenerTypes = []),
              (this._mouseClientOffset = {}),
              (this._isScrolling = !1),
              this.options.enableMouseEvents &&
                this.listenerTypes.push(be.mouse),
              this.options.enableTouchEvents &&
                this.listenerTypes.push(be.touch),
              this.options.enableKeyboardEvents &&
                this.listenerTypes.push(be.keyboard);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'profile',
                value: function () {
                  var e;
                  return {
                    sourceNodes: this.sourceNodes.size,
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions: this.sourcePreviewNodeOptions
                      .size,
                    targetNodes: this.targetNodes.size,
                    dragOverTargetIds:
                      (null === (e = this.dragOverTargetIds) || void 0 === e
                        ? void 0
                        : e.length) || 0,
                  };
                },
              },
              {
                key: 'document',
                get: function () {
                  return this.options.document;
                },
              },
              {
                key: 'setup',
                value: function () {
                  this.document &&
                    (Object(Oe.a)(
                      !e.isSetUp,
                      'Cannot have two Touch backends at the same time.',
                    ),
                    (e.isSetUp = !0),
                    this.addEventListener(
                      this.document,
                      'start',
                      this.getTopMoveStartHandler(),
                    ),
                    this.addEventListener(
                      this.document,
                      'start',
                      this.handleTopMoveStartCapture,
                      !0,
                    ),
                    this.addEventListener(
                      this.document,
                      'move',
                      this.handleTopMove,
                    ),
                    this.addEventListener(
                      this.document,
                      'move',
                      this.handleTopMoveCapture,
                      !0,
                    ),
                    this.addEventListener(
                      this.document,
                      'end',
                      this.handleTopMoveEndCapture,
                      !0,
                    ),
                    this.options.enableMouseEvents &&
                      !this.options.ignoreContextMenu &&
                      this.addEventListener(
                        this.document,
                        'contextmenu',
                        this.handleTopMoveEndCapture,
                      ),
                    this.options.enableKeyboardEvents &&
                      this.addEventListener(
                        this.document,
                        'keydown',
                        this.handleCancelOnEscape,
                        !0,
                      ));
                },
              },
              {
                key: 'teardown',
                value: function () {
                  this.document &&
                    ((e.isSetUp = !1),
                    (this._mouseClientOffset = {}),
                    this.removeEventListener(
                      this.document,
                      'start',
                      this.handleTopMoveStartCapture,
                      !0,
                    ),
                    this.removeEventListener(
                      this.document,
                      'start',
                      this.handleTopMoveStart,
                    ),
                    this.removeEventListener(
                      this.document,
                      'move',
                      this.handleTopMoveCapture,
                      !0,
                    ),
                    this.removeEventListener(
                      this.document,
                      'move',
                      this.handleTopMove,
                    ),
                    this.removeEventListener(
                      this.document,
                      'end',
                      this.handleTopMoveEndCapture,
                      !0,
                    ),
                    this.options.enableMouseEvents &&
                      !this.options.ignoreContextMenu &&
                      this.removeEventListener(
                        this.document,
                        'contextmenu',
                        this.handleTopMoveEndCapture,
                      ),
                    this.options.enableKeyboardEvents &&
                      this.removeEventListener(
                        this.document,
                        'keydown',
                        this.handleCancelOnEscape,
                        !0,
                      ),
                    this.uninstallSourceNodeRemovalObserver());
                },
              },
              {
                key: 'addEventListener',
                value: function (e, t, n, r) {
                  var o = Ee ? { capture: r, passive: !1 } : r;
                  this.listenerTypes.forEach(function (r) {
                    var i = xe[r][t];
                    i && e.addEventListener(i, n, o);
                  });
                },
              },
              {
                key: 'removeEventListener',
                value: function (e, t, n, r) {
                  var o = Ee ? { capture: r, passive: !1 } : r;
                  this.listenerTypes.forEach(function (r) {
                    var i = xe[r][t];
                    i && e.removeEventListener(i, n, o);
                  });
                },
              },
              {
                key: 'connectDragSource',
                value: function (e, t) {
                  var n = this,
                    r = this.handleMoveStart.bind(this, e);
                  return (
                    this.sourceNodes.set(e, t),
                    this.addEventListener(t, 'start', r),
                    function () {
                      n.sourceNodes.delete(e),
                        n.removeEventListener(t, 'start', r);
                    }
                  );
                },
              },
              {
                key: 'connectDragPreview',
                value: function (e, t, n) {
                  var r = this;
                  return (
                    this.sourcePreviewNodeOptions.set(e, n),
                    this.sourcePreviewNodes.set(e, t),
                    function () {
                      r.sourcePreviewNodes.delete(e),
                        r.sourcePreviewNodeOptions.delete(e);
                    }
                  );
                },
              },
              {
                key: 'connectDropTarget',
                value: function (e, t) {
                  var n = this;
                  if (!this.document) return function () {};
                  var r = function (r) {
                    if (n.document && n.monitor.isDragging()) {
                      var o;
                      switch (r.type) {
                        case xe.mouse.move:
                          o = { x: r.clientX, y: r.clientY };
                          break;
                        case xe.touch.move:
                          o = {
                            x: r.touches[0].clientX,
                            y: r.touches[0].clientY,
                          };
                      }
                      var i =
                          null != o
                            ? n.document.elementFromPoint(o.x, o.y)
                            : void 0,
                        s = i && t.contains(i);
                      return i === t || s ? n.handleMove(r, e) : void 0;
                    }
                  };
                  return (
                    this.addEventListener(this.document.body, 'move', r),
                    this.targetNodes.set(e, t),
                    function () {
                      n.document &&
                        (n.targetNodes.delete(e),
                        n.removeEventListener(n.document.body, 'move', r));
                    }
                  );
                },
              },
              {
                key: 'getTopMoveStartHandler',
                value: function () {
                  return this.options.delayTouchStart ||
                    this.options.delayMouseStart
                    ? this.handleTopMoveStartDelay
                    : this.handleTopMoveStart;
                },
              },
              {
                key: 'installSourceNodeRemovalObserver',
                value: function (e) {
                  var t = this;
                  this.uninstallSourceNodeRemovalObserver(),
                    (this.draggedSourceNode = e),
                    (this.draggedSourceNodeRemovalObserver = new MutationObserver(
                      function () {
                        e &&
                          !e.parentElement &&
                          (t.resurrectSourceNode(),
                          t.uninstallSourceNodeRemovalObserver());
                      },
                    )),
                    e &&
                      e.parentElement &&
                      this.draggedSourceNodeRemovalObserver.observe(
                        e.parentElement,
                        { childList: !0 },
                      );
                },
              },
              {
                key: 'resurrectSourceNode',
                value: function () {
                  this.document &&
                    this.draggedSourceNode &&
                    ((this.draggedSourceNode.style.display = 'none'),
                    this.draggedSourceNode.removeAttribute('data-reactid'),
                    this.document.body.appendChild(this.draggedSourceNode));
                },
              },
              {
                key: 'uninstallSourceNodeRemovalObserver',
                value: function () {
                  this.draggedSourceNodeRemovalObserver &&
                    this.draggedSourceNodeRemovalObserver.disconnect(),
                    (this.draggedSourceNodeRemovalObserver = void 0),
                    (this.draggedSourceNode = void 0);
                },
              },
            ]) && ke(t.prototype, n),
            r && ke(t, r),
            e
          );
        })(),
        Pe = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          return new Ne(e, t, n);
        },
        Ae = n('JEhF');
      const Le = ((Re = 'OBJECT_TREE'), (e) => Re + '__' + e);
      var Re;
      const Be = Le('SET_NODES'),
        Fe = Le('SYNC_NODES'),
        He = Le('UPDATE_NODE'),
        ze = Le('UPDATE_NODES'),
        Ue = Le('RESET_TREE'),
        Ge = Le('SET_SELECTED_IDS'),
        Ve = Le('DROP_SELECTION'),
        Ke = Le('SELECT_PREVIOUS'),
        We = Le('SELECT_NEXT'),
        qe = Le('MULTI_SELECT_PREVIOUS'),
        Ye = Le('MULTI_SELECT_NEXT'),
        Ze = Le('PROCESS_DROP_TARGET'),
        Je = Le('UPDATE_DROP_TARGET'),
        Xe = Le('HIDE_DROP_TARGET'),
        Qe = Le('START_MULTI_SELECT'),
        $e = Le('STOP_MULTI_SELECT'),
        et = (Le('REMOVE_NODE'), Le('SET_FOCUSED_NODE')),
        tt = Le('SCROLL_TO_ID'),
        nt = Le('SET_IS_SELECTED'),
        rt = Le('SET_IS_EXPANDED'),
        ot = Le('SET_DISABLED_NODES'),
        it = Le('MOVE_NODES'),
        st = (Le('START_DRAG'), Le('END_DRAG')),
        at = () => ({ type: Ke }),
        ct = () => ({ type: We }),
        ut = () => ({ type: qe }),
        lt = () => ({ type: Ye }),
        dt = (e, t, n, r, o) => ({
          type: Ze,
          dropTarget: e,
          dropType: t,
          isHoveredLeft: n,
          boundBox: r,
          isLastChild: o,
        }),
        ht = () => ({ type: Ve }),
        ft = (e) => ({ type: Ge, ids: e }),
        pt = (e, t, n) => ({ type: it, ids: e, targetId: t, dropType: n }),
        gt = () => ({ type: Qe }),
        vt = () => ({ type: $e }),
        bt = (e) => ({ type: et, nodeId: e }),
        mt = (e) => ({ type: tt, nodeId: e }),
        yt = (e, t, n = 0) => ({ type: nt, nodeId: e, isSelected: t, mode: n }),
        Ot = (e, t) => ({ type: rt, nodeId: e, isExpanded: t }),
        St = (e) => ({ type: ot, ids: e }),
        wt = () => ({ type: st });
      var _t = n('G4qV');
      const Ct = (e) => e.nodes,
        Tt = (e) => e.selection,
        Et = (e) => e.dropTarget,
        jt = (e) => e.expanded,
        Dt = (e) => e.scrollToId,
        It = (e, t) => t,
        kt = Object(_t.a)([Ct, It], (e, t) => e[t]),
        Mt = Object(_t.a)([Tt, It], (e, t) => e.ids.includes(t)),
        xt = Object(_t.a)([jt, It], (e, t) => e.includes(t)),
        Nt = Object(_t.a)(
          [(e) => e.disabled, Tt, It],
          (e, t, n) => !t.ids.includes(n) && e.includes(n),
        ),
        Pt = Object(_t.a)(Ct, (e) => Object.keys(e)),
        At = Object(_t.a)(Tt, ({ ids: e }) => e),
        Lt = Object(_t.a)(Tt, ({ lastFocusedNodeId: e }) => e),
        Rt = Object(_t.a)(Tt, ({ isMultiSelecting: e }) => e),
        Bt = Object(_t.a)([Ct, At], (e, t) => t.map((t) => e[t])),
        Ft = Object(_t.a)(Ct, (e) =>
          Object.values(e).filter((e) => 0 === e.level),
        ),
        Ht = Object(_t.a)([Ct, Ft], (e, t) =>
          t.reduce((t, n) => [...t, ...zt(e, Object(j.ensureDefined)(n))], []),
        );
      function zt(e, t) {
        const n = [];
        for (const r of t.children) n.push(e[r]), n.push(...zt(e, e[r]));
        return n;
      }
      const Ut = Object(_t.a)([Ct, Ft, jt], (e, t, n) => {
          const r = new Set(n);
          return t.reduce(
            (t, n) => [...t, ...Vt(e, Object(j.ensureDefined)(n), r)],
            [],
          );
        }),
        Gt = Object(_t.a)([Ct, At, jt], (e, t, n) => {
          const r = new Set(n);
          return [{ id: 'drag-list', level: -1, children: t }].reduce(
            (t, n) => [...t, ...Vt(e, Object(j.ensureDefined)(n), r)],
            [],
          );
        });
      function Vt(e, t, n) {
        const r = [];
        for (const o of t.children) {
          const t = e[o];
          void 0 !== t && (r.push(t), n.has(o) && r.push(...Vt(e, t, n)));
        }
        return r;
      }
      function* Kt(e) {
        const { selectedIds: t, nodes: n } = yield Object(T.b)(e),
          r = n.reduce((e, t) => ({ ...e, [t.id]: t }), {});
        yield Object(T.e)(((e) => ({ type: Be, nodes: e }))(r)),
          yield Object(T.e)(ft(t));
        !Lt(yield Object(T.f)()) &&
          t.length > 0 &&
          (yield Object(T.e)(bt(t[0])), yield Object(T.e)(mt(t[0])));
      }
      function* Wt(e) {
        for (;;) {
          if ((yield Object(T.g)([Qe, $e])).type === Qe) {
            const t = Pt(yield Object(T.f)()).filter((t) => !e(t));
            yield Object(T.e)(St(t));
          } else yield Object(T.e)(St([]));
        }
      }
      function* qt() {
        for (;;) {
          const { type: e } = yield Object(T.g)([Ye, qe]),
            t = yield Object(T.f)(),
            n = Ht(t),
            r = n.length,
            o = Lt(t),
            i = n.findIndex((e) => e.id === o),
            s = [...At(t)];
          if ((e === qe && 0 === i) || (e === Ye && i === r - 1)) continue;
          const a = en(t, e === Ye ? 'next' : 'previous', n, i),
            { id: c } = a;
          s.includes(c) && o
            ? (yield Object(T.e)(yt(o, !1, 1)), yield Object(T.e)(bt(c)))
            : yield Object(T.e)(yt(c, !0, 1)),
            yield Object(T.e)(mt(c));
        }
      }
      function* Yt(e, t) {
        for (;;) {
          const { type: n } = yield Object(T.g)([We, Ke]),
            r = yield Object(T.f)(),
            o = Ht(r),
            i = Lt(r),
            s = o.findIndex((e) => e.id === i),
            a = n === We ? 'next' : 'previous',
            c = en(r, a, o, s),
            { id: u } = c;
          e ? e([u], a) : yield Object(T.e)(ft([u])),
            t && t(u),
            yield Object(T.e)(bt(u));
        }
      }
      function* Zt(e, t = () => !0) {
        for (;;) {
          const { mode: n, nodeId: r, isSelected: o } = yield Object(T.g)(nt);
          let i = [...At(yield Object(T.f)())];
          const s = Ht(yield Object(T.f)());
          if (1 === n) o ? i.push(r) : i.splice(i.indexOf(r), 1);
          else if (2 === n && i.length > 0) {
            const e = Lt(yield Object(T.f)());
            let n = s.findIndex((t) => t.id === e);
            -1 === n &&
              (n = s.reduce((e, t, n) => (i.includes(t.id) ? n : e), -1));
            const o = s.findIndex((e) => e.id === r);
            if (n !== o)
              for (let e = Math.min(n, o); e <= Math.max(n, o); e++) {
                const n = s[e].id;
                !i.includes(n) && t(n) && i.push(n);
              }
          } else i = r ? [r] : [];
          const a = new Set(i);
          (i = s.reduce((e, t) => (a.has(t.id) && e.push(t.id), e), [])),
            e ? e(i) : yield Object(T.e)(ft(i)),
            yield Object(T.e)(bt(r));
        }
      }
      function* Jt(e = () => !0, t) {
        const {
            dropTarget: n,
            dropType: r,
            isHoveredLeft: o,
            boundBox: i,
            isLastChild: s,
          } = t,
          a = Et(yield Object(T.f)()),
          c = kt(yield Object(T.f)(), Object(j.ensureDefined)(n.parentId)),
          u = s && 'after' === r,
          l = Bt(yield Object(T.f)()),
          d = !u || (!o && e(l, n, r)) ? n : c,
          h = (a.node && a.node.id !== d.id) || a.dropType !== r;
        l.map((e) => e.id).includes(d.id)
          ? yield Object(T.e)({ type: Xe })
          : h &&
            e(l, d, r) &&
            (yield Object(T.e)(
              ((e, t, n) => ({ type: Je, node: e, dropType: t, boundBox: n }))(
                d,
                r,
                i,
              ),
            ));
      }
      function* Xt(e) {
        yield Object(T.h)(0, Ze, Jt, e);
      }
      function* Qt(e) {
        for (;;) {
          yield Object(T.g)(Ve);
          const t = Bt(yield Object(T.f)()),
            { node: n, dropType: r } = Et(yield Object(T.f)());
          if (n && r) {
            const o = new CustomEvent('tree-node-drop', {
              detail: { nodes: t, target: n.id, type: r },
            });
            if ((e && e(o), !o.defaultPrevented)) {
              const e = At(yield Object(T.f)());
              yield Object(T.e)(pt(e, n.id, r));
            }
          }
        }
      }
      function* $t(e) {
        for (;;) {
          yield Object(T.g)(it);
          e(Ct(yield Object(T.f)()));
        }
      }
      function en(e, t, n, r) {
        const o = n.length;
        let i,
          s = 0;
        for (
          ;
          !i ||
          (Math.abs(s) < o &&
            (a = i).level > 1 &&
            !xt(e, Object(j.ensureDefined)(a.parentId)));

        )
          (s += 'next' === t ? 1 : -1), (i = n[(r + s + o) % o]);
        var a;
        return i;
      }
      function* tn(e = {}) {
        const {
            saga: t,
            onDrop: n,
            canMove: r,
            onMove: o,
            onSelect: i,
            onKeyboardSelect: s,
            initState: a,
            canBeAddedToSelection: c,
          } = e,
          u = [
            Object(T.d)(Xt, r),
            Object(T.d)(Qt, n),
            Object(T.d)(Zt, i, c),
            Object(T.d)(Yt, i, s),
            Object(T.d)(qt),
          ];
        for (
          t && u.push(Object(T.d)(t)),
            o && u.push(Object(T.d)($t, o)),
            c && u.push(Object(T.d)(Wt, c));
          ;

        ) {
          a && (yield Object(T.b)(Kt, a));
          const e = yield Object(T.a)(u);
          yield Object(T.g)(Ue);
          for (const t of e) yield Object(T.c)(t);
        }
      }
      var nn = n('ANjH'),
        rn = n('ogJP');
      const on = Object(u.getLogger)('Platform.GUI.ObjectTree.CallApi');
      const sn = { ids: [], lastFocusedNodeId: void 0, isMultiSelecting: !1 };
      const an = { node: void 0, dropType: void 0, boundBox: void 0 };
      const cn = Object(nn.c)({
        nodes: function (e = {}, t) {
          switch (t.type) {
            case Be:
              return t.nodes;
            case Fe: {
              const { nodes: n } = t,
                r = n.map((e) => e.id),
                o = { ...e };
              for (const t of Object.keys(e))
                if (!r.includes(t)) {
                  const { parentId: e } = o[t];
                  e &&
                    (o[e] = {
                      ...o[e],
                      children: o[e].children.filter((e) => e !== t),
                    }),
                    delete o[t];
                }
              for (const e of n) {
                const t = e.id;
                if (o.hasOwnProperty(t)) {
                  !Object(rn.deepEquals)(o[t].children, e.children)[0] &&
                    (o[t] = { ...o[t], children: [...e.children] });
                } else {
                  o[t] = e;
                  const { parentId: n } = e;
                  if (n && !o[n].children.includes(t))
                    throw new Error('Not implemented');
                }
              }
              return o;
            }
            case He: {
              const { type: n, nodeId: r, ...o } = t;
              return { ...e, [r]: { ...e[r], ...o } };
            }
            case ze: {
              const { nodes: n } = t,
                r = { ...e };
              return (
                Object.keys(n).forEach((e) => {
                  r[e] = { ...r[e], ...n[e] };
                }),
                { ...e, ...r }
              );
            }
            case it: {
              const { ids: n, targetId: r, dropType: o } = t,
                i = Object(j.ensureDefined)(e[r].parentId),
                s = e[i],
                a = {};
              for (const t of n) {
                const n = e[t];
                if (n.parentId) {
                  const r = a[n.parentId] || e[n.parentId];
                  a[n.parentId] = {
                    ...r,
                    children: r.children.filter((e) => e !== t),
                  };
                }
                a[t] = { ...n, parentId: i, level: s.level + 1 };
              }
              const c = s.children.filter((e) => !n.includes(e));
              return (
                c.splice(
                  ((e, t, n) => {
                    switch (n) {
                      case 'before':
                        return e.indexOf(Object(j.ensureDefined)(t));
                      case 'inside':
                        return e.length;
                      case 'after':
                        return e.indexOf(Object(j.ensureDefined)(t)) + 1;
                      default:
                        return 0;
                    }
                  })(c, r, o),
                  0,
                  ...n,
                ),
                (a[i] = { ...e[i], children: c, isExpanded: !0 }),
                { ...e, ...a }
              );
            }
            default:
              return e;
          }
        },
        selection: function (e = sn, t) {
          switch (t.type) {
            case Ge: {
              const { ids: n } = t;
              return {
                ...e,
                ids: n,
                lastFocusedNodeId: n.length > 0 ? e.lastFocusedNodeId : void 0,
              };
            }
            case Qe:
              return { ...e, isMultiSelecting: !0 };
            case $e:
              return { ...e, isMultiSelecting: !1 };
            case et:
              return { ...e, lastFocusedNodeId: t.nodeId };
            case Fe: {
              const n = new Set(t.nodes.map((e) => e.id));
              return (
                e.lastFocusedNodeId &&
                  !n.has(e.lastFocusedNodeId) &&
                  delete e.lastFocusedNodeId,
                { ...e, ids: e.ids.filter((e) => n.has(e)) }
              );
            }
            default:
              return e;
          }
        },
        dropTarget: function (e = an, t) {
          switch (t.type) {
            case Je: {
              const { node: n, dropType: r, boundBox: o } = t;
              return { ...e, node: n, dropType: r, boundBox: o };
            }
            case Xe:
            case st:
            case Ue:
              return { ...an };
            default:
              return e;
          }
        },
        expanded: function (e = [], t) {
          switch (t.type) {
            case rt: {
              const { nodeId: n, isExpanded: r } = t;
              if (r) return [...e, n];
              const o = [...e];
              return o.splice(e.indexOf(n), 1), o;
            }
            default:
              return e;
          }
        },
        disabled: function (e = [], t) {
          switch (t.type) {
            case ot:
              return [...t.ids];
            default:
              return e;
          }
        },
        scrollToId: function (e = null, t) {
          switch (t.type) {
            case tt:
              return null === t.nodeId ? null : { id: t.nodeId };
            default:
              return e;
          }
        },
      });
      function un(e, t, n) {
        var r = n.getRegistry(),
          o = r.addTarget(e, t);
        return [
          o,
          function () {
            return r.removeTarget(o);
          },
        ];
      }
      function ln(e, t, n) {
        var r = n.getRegistry(),
          o = r.addSource(e, t);
        return [
          o,
          function () {
            return r.removeSource(o);
          },
        ];
      }
      function dn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var hn = !1,
        fn = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.targetId = null),
              (this.internalMonitor = t.getMonitor());
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveHandlerId',
                value: function (e) {
                  this.targetId = e;
                },
              },
              {
                key: 'getHandlerId',
                value: function () {
                  return this.targetId;
                },
              },
              {
                key: 'subscribeToStateChange',
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: 'canDrop',
                value: function () {
                  if (!this.targetId) return !1;
                  Object(Oe.a)(
                    !hn,
                    'You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor',
                  );
                  try {
                    return (
                      (hn = !0),
                      this.internalMonitor.canDropOnTarget(this.targetId)
                    );
                  } finally {
                    hn = !1;
                  }
                },
              },
              {
                key: 'isOver',
                value: function (e) {
                  return (
                    !!this.targetId &&
                    this.internalMonitor.isOverTarget(this.targetId, e)
                  );
                },
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: 'getItem',
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]) && dn(t.prototype, n),
            r && dn(t, r),
            e
          );
        })();
      function pn(e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
        var i = Object.keys(e),
          s = Object.keys(t);
        if (i.length !== s.length) return !1;
        for (
          var a = Object.prototype.hasOwnProperty.bind(t), c = 0;
          c < i.length;
          c++
        ) {
          var u = i[c];
          if (!a(u)) return !1;
          var l = e[u],
            d = t[u];
          if (
            !1 === (o = n ? n.call(r, l, d, u) : void 0) ||
            (void 0 === o && l !== d)
          )
            return !1;
        }
        return !0;
      }
      function gn(e) {
        if ('string' != typeof e.type) {
          var t = e.type.displayName || e.type.name || 'the component';
          throw new Error(
            'Only native element nodes can now be passed to React DnD connectors.' +
              'You can either wrap '.concat(
                t,
                ' into a <div>, or turn it into a ',
              ) +
              'drag source or a drop target itself.',
          );
        }
      }
      function vn(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (n) {
            var r = e[n];
            if (n.endsWith('Ref')) t[n] = e[n];
            else {
              var i = (function (e) {
                return function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  if (!Object(o.isValidElement)(t)) {
                    var r = t;
                    return e(r, n), r;
                  }
                  var i = t;
                  gn(i);
                  var s = n
                    ? function (t) {
                        return e(t, n);
                      }
                    : e;
                  return mn(i, s);
                };
              })(r);
              t[n] = function () {
                return i;
              };
            }
          }),
          t
        );
      }
      function bn(e, t) {
        'function' == typeof e ? e(t) : (e.current = t);
      }
      function mn(e, t) {
        var n = e.ref;
        return (
          Object(Oe.a)(
            'string' != typeof n,
            'Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs',
          ),
          n
            ? Object(o.cloneElement)(e, {
                ref: function (e) {
                  bn(n, e), bn(t, e);
                },
              })
            : Object(o.cloneElement)(e, { ref: t })
        );
      }
      function yn(e) {
        return (yn =
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
      function On(e) {
        return (
          null !== e &&
          'object' === yn(e) &&
          Object.prototype.hasOwnProperty.call(e, 'current')
        );
      }
      function Sn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var wn = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.hooks = vn({
              dropTarget: function (e, t) {
                n.clearDropTarget(),
                  (n.dropTargetOptions = t),
                  On(e) ? (n.dropTargetRef = e) : (n.dropTargetNode = e),
                  n.reconnect();
              },
            })),
            (this.handlerId = null),
            (this.dropTargetRef = null),
            (this.dropTargetOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDropTarget = null),
            (this.lastConnectedDropTargetOptions = null),
            (this.backend = t);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'connectTarget',
              get: function () {
                return this.dropTarget;
              },
            },
            {
              key: 'reconnect',
              value: function () {
                var e =
                  this.didHandlerIdChange() ||
                  this.didDropTargetChange() ||
                  this.didOptionsChange();
                e && this.disconnectDropTarget();
                var t = this.dropTarget;
                this.handlerId &&
                  (t
                    ? e &&
                      ((this.lastConnectedHandlerId = this.handlerId),
                      (this.lastConnectedDropTarget = t),
                      (this.lastConnectedDropTargetOptions = this.dropTargetOptions),
                      (this.unsubscribeDropTarget = this.backend.connectDropTarget(
                        this.handlerId,
                        t,
                        this.dropTargetOptions,
                      )))
                    : (this.lastConnectedDropTarget = t));
              },
            },
            {
              key: 'receiveHandlerId',
              value: function (e) {
                e !== this.handlerId &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: 'dropTargetOptions',
              get: function () {
                return this.dropTargetOptionsInternal;
              },
              set: function (e) {
                this.dropTargetOptionsInternal = e;
              },
            },
            {
              key: 'didHandlerIdChange',
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: 'didDropTargetChange',
              value: function () {
                return this.lastConnectedDropTarget !== this.dropTarget;
              },
            },
            {
              key: 'didOptionsChange',
              value: function () {
                return !pn(
                  this.lastConnectedDropTargetOptions,
                  this.dropTargetOptions,
                );
              },
            },
            {
              key: 'disconnectDropTarget',
              value: function () {
                this.unsubscribeDropTarget &&
                  (this.unsubscribeDropTarget(),
                  (this.unsubscribeDropTarget = void 0));
              },
            },
            {
              key: 'dropTarget',
              get: function () {
                return (
                  this.dropTargetNode ||
                  (this.dropTargetRef && this.dropTargetRef.current)
                );
              },
            },
            {
              key: 'clearDropTarget',
              value: function () {
                (this.dropTargetRef = null), (this.dropTargetNode = null);
              },
            },
          ]) && Sn(t.prototype, n),
          r && Sn(t, r),
          e
        );
      })();
      function _n(e) {
        return (_n =
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
      function Cn(e) {
        var t = e.current;
        return null == t ? null : t.decoratedRef ? t.decoratedRef.current : t;
      }
      function Tn(e) {
        return (
          ((t = e) && t.prototype && 'function' == typeof t.prototype.render) ||
          (function (e) {
            var t,
              n = e;
            return (
              'Symbol(react.forward_ref)' ===
              (null == n || null === (t = n.$$typeof) || void 0 === t
                ? void 0
                : t.toString())
            );
          })(e)
        );
        var t;
      }
      function En(e) {
        return 'function' == typeof e;
      }
      function jn() {}
      function Dn(e) {
        if (
          !(function (e) {
            return 'object' === _n(e) && null !== e;
          })(e)
        )
          return !1;
        if (null === Object.getPrototypeOf(e)) return !0;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function In(e, t) {
        return (
          'string' == typeof e ||
          'symbol' === _n(e) ||
          (!!t &&
            Array.isArray(e) &&
            e.every(function (e) {
              return In(e, !1);
            }))
        );
      }
      var kn = n('nKUr'),
        Mn = n('p/5y');
      function xn(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function Nn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Pn(e, t, n) {
        return t && Nn(e.prototype, t), n && Nn(e, n), e;
      }
      var An = (function () {
        function e(t) {
          xn(this, e), (this.isDisposed = !1), (this.action = En(t) ? t : jn);
        }
        return (
          Pn(
            e,
            [
              {
                key: 'dispose',
                value: function () {
                  this.isDisposed || (this.action(), (this.isDisposed = !0));
                },
              },
            ],
            [
              {
                key: 'isDisposable',
                value: function (e) {
                  return Boolean(e && En(e.dispose));
                },
              },
              {
                key: '_fixup',
                value: function (t) {
                  return e.isDisposable(t) ? t : e.empty;
                },
              },
              {
                key: 'create',
                value: function (t) {
                  return new e(t);
                },
              },
            ],
          ),
          e
        );
      })();
      An.empty = { dispose: jn };
      var Ln = (function () {
          function e() {
            xn(this, e), (this.isDisposed = !1);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            this.disposables = n;
          }
          return (
            Pn(e, [
              {
                key: 'add',
                value: function (e) {
                  this.isDisposed ? e.dispose() : this.disposables.push(e);
                },
              },
              {
                key: 'remove',
                value: function (e) {
                  var t = !1;
                  if (!this.isDisposed) {
                    var n = this.disposables.indexOf(e);
                    -1 !== n &&
                      ((t = !0), this.disposables.splice(n, 1), e.dispose());
                  }
                  return t;
                },
              },
              {
                key: 'clear',
                value: function () {
                  if (!this.isDisposed) {
                    for (
                      var e = this.disposables.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = this.disposables[n];
                    this.disposables = [];
                    for (var r = 0; r < e; r++) t[r].dispose();
                  }
                },
              },
              {
                key: 'dispose',
                value: function () {
                  if (!this.isDisposed) {
                    this.isDisposed = !0;
                    for (
                      var e = this.disposables.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = this.disposables[n];
                    this.disposables = [];
                    for (var r = 0; r < e; r++) t[r].dispose();
                  }
                },
              },
            ]),
            e
          );
        })(),
        Rn = (function () {
          function e() {
            xn(this, e), (this.isDisposed = !1);
          }
          return (
            Pn(e, [
              {
                key: 'getDisposable',
                value: function () {
                  return this.current;
                },
              },
              {
                key: 'setDisposable',
                value: function (e) {
                  var t = this.isDisposed;
                  if (!t) {
                    var n = this.current;
                    (this.current = e), n && n.dispose();
                  }
                  t && e && e.dispose();
                },
              },
              {
                key: 'dispose',
                value: function () {
                  if (!this.isDisposed) {
                    this.isDisposed = !0;
                    var e = this.current;
                    (this.current = void 0), e && e.dispose();
                  }
                },
              },
            ]),
            e
          );
        })(),
        Bn = n('2mql'),
        Fn = n.n(Bn);
      function Hn(e) {
        return (Hn =
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
      function zn(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var s, a = e[Symbol.iterator]();
                !(r = (s = a.next()).done) &&
                (n.push(s.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return Un(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Un(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function Un(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Gn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Vn(e, t) {
        return (Vn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Kn(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = qn(e);
          if (t) {
            var o = qn(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Wn(this, n);
        };
      }
      function Wn(e, t) {
        return !t || ('object' !== Hn(t) && 'function' != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : t;
      }
      function qn(e) {
        return (qn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Yn(e) {
        var t = e.DecoratedComponent,
          n = e.createHandler,
          r = e.createMonitor,
          i = e.createConnector,
          s = e.registerHandler,
          a = e.containerDisplayName,
          c = e.getType,
          u = e.collect,
          l = e.options.arePropsEqual,
          d = void 0 === l ? pn : l,
          h = t,
          f = t.displayName || t.name || 'Component',
          p = (function (e) {
            !(function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && Vn(e, t);
            })(g, e);
            var t,
              a,
              l,
              p = Kn(g);
            function g(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, g),
                ((t = p.call(this, e)).decoratedRef = Object(o.createRef)()),
                (t.handleChange = function () {
                  var e = t.getCurrentState();
                  pn(e, t.state) || t.setState(e);
                }),
                (t.disposable = new Rn()),
                t.receiveProps(e),
                t.dispose(),
                t
              );
            }
            return (
              (t = g),
              (a = [
                {
                  key: 'getHandlerId',
                  value: function () {
                    return this.handlerId;
                  },
                },
                {
                  key: 'getDecoratedComponentInstance',
                  value: function () {
                    return (
                      Object(Oe.a)(
                        this.decoratedRef.current,
                        'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()',
                      ),
                      this.decoratedRef.current
                    );
                  },
                },
                {
                  key: 'shouldComponentUpdate',
                  value: function (e, t) {
                    return !d(e, this.props) || !pn(t, this.state);
                  },
                },
                {
                  key: 'componentDidMount',
                  value: function () {
                    (this.disposable = new Rn()),
                      (this.currentType = void 0),
                      this.receiveProps(this.props),
                      this.handleChange();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    d(this.props, e) ||
                      (this.receiveProps(this.props), this.handleChange());
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.dispose();
                  },
                },
                {
                  key: 'receiveProps',
                  value: function (e) {
                    this.handler &&
                      (this.handler.receiveProps(e), this.receiveType(c(e)));
                  },
                },
                {
                  key: 'receiveType',
                  value: function (e) {
                    if (
                      this.handlerMonitor &&
                      this.manager &&
                      this.handlerConnector &&
                      e !== this.currentType
                    ) {
                      this.currentType = e;
                      var t = zn(s(e, this.handler, this.manager), 2),
                        n = t[0],
                        r = t[1];
                      (this.handlerId = n),
                        this.handlerMonitor.receiveHandlerId(n),
                        this.handlerConnector.receiveHandlerId(n);
                      var o = this.manager
                        .getMonitor()
                        .subscribeToStateChange(this.handleChange, {
                          handlerIds: [n],
                        });
                      this.disposable.setDisposable(
                        new Ln(new An(o), new An(r)),
                      );
                    }
                  },
                },
                {
                  key: 'dispose',
                  value: function () {
                    this.disposable.dispose(),
                      this.handlerConnector &&
                        this.handlerConnector.receiveHandlerId(null);
                  },
                },
                {
                  key: 'getCurrentState',
                  value: function () {
                    return this.handlerConnector
                      ? u(
                          this.handlerConnector.hooks,
                          this.handlerMonitor,
                          this.props,
                        )
                      : {};
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this;
                    return Object(kn.jsx)(
                      Mn.a.Consumer,
                      {
                        children: function (t) {
                          var n = t.dragDropManager;
                          return (
                            e.receiveDragDropManager(n),
                            'undefined' != typeof requestAnimationFrame &&
                              requestAnimationFrame(function () {
                                var t;
                                return null === (t = e.handlerConnector) ||
                                  void 0 === t
                                  ? void 0
                                  : t.reconnect();
                              }),
                            Object(kn.jsx)(
                              h,
                              Object.assign({}, e.props, e.getCurrentState(), {
                                ref: Tn(h) ? e.decoratedRef : null,
                              }),
                              void 0,
                            )
                          );
                        },
                      },
                      void 0,
                    );
                  },
                },
                {
                  key: 'receiveDragDropManager',
                  value: function (e) {
                    void 0 === this.manager &&
                      (Object(Oe.a)(
                        void 0 !== e,
                        'Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context',
                        f,
                        f,
                      ),
                      void 0 !== e &&
                        ((this.manager = e),
                        (this.handlerMonitor = r(e)),
                        (this.handlerConnector = i(e.getBackend())),
                        (this.handler = n(
                          this.handlerMonitor,
                          this.decoratedRef,
                        ))));
                  },
                },
              ]) && Gn(t.prototype, a),
              l && Gn(t, l),
              g
            );
          })(o.Component);
        return (
          (p.DecoratedComponent = t),
          (p.displayName = ''.concat(a, '(').concat(f, ')')),
          Fn()(p, t)
        );
      }
      function Zn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var Jn = ['canDrop', 'hover', 'drop'],
        Xn = (function () {
          function e(t, n, r) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.props = null),
              (this.spec = t),
              (this.monitor = n),
              (this.ref = r);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveProps',
                value: function (e) {
                  this.props = e;
                },
              },
              {
                key: 'receiveMonitor',
                value: function (e) {
                  this.monitor = e;
                },
              },
              {
                key: 'canDrop',
                value: function () {
                  return (
                    !this.spec.canDrop ||
                    this.spec.canDrop(this.props, this.monitor)
                  );
                },
              },
              {
                key: 'hover',
                value: function () {
                  this.spec.hover &&
                    this.props &&
                    this.spec.hover(this.props, this.monitor, Cn(this.ref));
                },
              },
              {
                key: 'drop',
                value: function () {
                  if (this.spec.drop)
                    return this.spec.drop(
                      this.props,
                      this.monitor,
                      this.ref.current,
                    );
                },
              },
            ]) && Zn(t.prototype, n),
            r && Zn(t, r),
            e
          );
        })();
      function Qn(e) {
        return (
          Object.keys(e).forEach(function (t) {
            Object(Oe.a)(
              Jn.indexOf(t) > -1,
              'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
              Jn.join(', '),
              t,
            ),
              Object(Oe.a)(
                'function' == typeof e[t],
                'Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                t,
                t,
                e[t],
              );
          }),
          function (t, n) {
            return new Xn(e, t, n);
          }
        );
      }
      function $n(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o = e;
        'function' != typeof e &&
          (Object(Oe.a)(
            In(e, !0),
            'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            e,
          ),
          (o = function () {
            return e;
          })),
          Object(Oe.a)(
            Dn(t),
            'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            t,
          );
        var i = Qn(t);
        return (
          Object(Oe.a)(
            'function' == typeof n,
            'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            n,
          ),
          Object(Oe.a)(
            Dn(r),
            'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            n,
          ),
          function (e) {
            return Yn({
              containerDisplayName: 'DropTarget',
              createHandler: i,
              registerHandler: un,
              createMonitor: function (e) {
                return new fn(e);
              },
              createConnector: function (e) {
                return new wn(e);
              },
              DecoratedComponent: e,
              getType: o,
              collect: n,
              options: r,
            });
          }
        );
      }
      var er = n('iR1w'),
        tr = n('qFKp');
      function nr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var rr = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.hooks = vn({
              dragSource: function (e, t) {
                n.clearDragSource(),
                  (n.dragSourceOptions = t || null),
                  On(e) ? (n.dragSourceRef = e) : (n.dragSourceNode = e),
                  n.reconnectDragSource();
              },
              dragPreview: function (e, t) {
                n.clearDragPreview(),
                  (n.dragPreviewOptions = t || null),
                  On(e) ? (n.dragPreviewRef = e) : (n.dragPreviewNode = e),
                  n.reconnectDragPreview();
              },
            })),
            (this.handlerId = null),
            (this.dragSourceRef = null),
            (this.dragSourceOptionsInternal = null),
            (this.dragPreviewRef = null),
            (this.dragPreviewOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDragSource = null),
            (this.lastConnectedDragSourceOptions = null),
            (this.lastConnectedDragPreview = null),
            (this.lastConnectedDragPreviewOptions = null),
            (this.backend = t);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'receiveHandlerId',
              value: function (e) {
                this.handlerId !== e &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: 'connectTarget',
              get: function () {
                return this.dragSource;
              },
            },
            {
              key: 'dragSourceOptions',
              get: function () {
                return this.dragSourceOptionsInternal;
              },
              set: function (e) {
                this.dragSourceOptionsInternal = e;
              },
            },
            {
              key: 'dragPreviewOptions',
              get: function () {
                return this.dragPreviewOptionsInternal;
              },
              set: function (e) {
                this.dragPreviewOptionsInternal = e;
              },
            },
            {
              key: 'reconnect',
              value: function () {
                this.reconnectDragSource(), this.reconnectDragPreview();
              },
            },
            {
              key: 'reconnectDragSource',
              value: function () {
                var e = this.dragSource,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragSourceChange() ||
                    this.didDragSourceOptionsChange();
                t && this.disconnectDragSource(),
                  this.handlerId &&
                    (e
                      ? t &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDragSource = e),
                        (this.lastConnectedDragSourceOptions = this.dragSourceOptions),
                        (this.dragSourceUnsubscribe = this.backend.connectDragSource(
                          this.handlerId,
                          e,
                          this.dragSourceOptions,
                        )))
                      : (this.lastConnectedDragSource = e));
              },
            },
            {
              key: 'reconnectDragPreview',
              value: function () {
                var e = this.dragPreview,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragPreviewChange() ||
                    this.didDragPreviewOptionsChange();
                t && this.disconnectDragPreview(),
                  this.handlerId &&
                    (e
                      ? t &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDragPreview = e),
                        (this.lastConnectedDragPreviewOptions = this.dragPreviewOptions),
                        (this.dragPreviewUnsubscribe = this.backend.connectDragPreview(
                          this.handlerId,
                          e,
                          this.dragPreviewOptions,
                        )))
                      : (this.lastConnectedDragPreview = e));
              },
            },
            {
              key: 'didHandlerIdChange',
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: 'didConnectedDragSourceChange',
              value: function () {
                return this.lastConnectedDragSource !== this.dragSource;
              },
            },
            {
              key: 'didConnectedDragPreviewChange',
              value: function () {
                return this.lastConnectedDragPreview !== this.dragPreview;
              },
            },
            {
              key: 'didDragSourceOptionsChange',
              value: function () {
                return !pn(
                  this.lastConnectedDragSourceOptions,
                  this.dragSourceOptions,
                );
              },
            },
            {
              key: 'didDragPreviewOptionsChange',
              value: function () {
                return !pn(
                  this.lastConnectedDragPreviewOptions,
                  this.dragPreviewOptions,
                );
              },
            },
            {
              key: 'disconnectDragSource',
              value: function () {
                this.dragSourceUnsubscribe &&
                  (this.dragSourceUnsubscribe(),
                  (this.dragSourceUnsubscribe = void 0));
              },
            },
            {
              key: 'disconnectDragPreview',
              value: function () {
                this.dragPreviewUnsubscribe &&
                  (this.dragPreviewUnsubscribe(),
                  (this.dragPreviewUnsubscribe = void 0),
                  (this.dragPreviewNode = null),
                  (this.dragPreviewRef = null));
              },
            },
            {
              key: 'dragSource',
              get: function () {
                return (
                  this.dragSourceNode ||
                  (this.dragSourceRef && this.dragSourceRef.current)
                );
              },
            },
            {
              key: 'dragPreview',
              get: function () {
                return (
                  this.dragPreviewNode ||
                  (this.dragPreviewRef && this.dragPreviewRef.current)
                );
              },
            },
            {
              key: 'clearDragSource',
              value: function () {
                (this.dragSourceNode = null), (this.dragSourceRef = null);
              },
            },
            {
              key: 'clearDragPreview',
              value: function () {
                (this.dragPreviewNode = null), (this.dragPreviewRef = null);
              },
            },
          ]) && nr(t.prototype, n),
          r && nr(t, r),
          e
        );
      })();
      function or(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var ir = !1,
        sr = !1,
        ar = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.sourceId = null),
              (this.internalMonitor = t.getMonitor());
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveHandlerId',
                value: function (e) {
                  this.sourceId = e;
                },
              },
              {
                key: 'getHandlerId',
                value: function () {
                  return this.sourceId;
                },
              },
              {
                key: 'canDrag',
                value: function () {
                  Object(Oe.a)(
                    !ir,
                    'You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor',
                  );
                  try {
                    return (
                      (ir = !0),
                      this.internalMonitor.canDragSource(this.sourceId)
                    );
                  } finally {
                    ir = !1;
                  }
                },
              },
              {
                key: 'isDragging',
                value: function () {
                  if (!this.sourceId) return !1;
                  Object(Oe.a)(
                    !sr,
                    'You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor',
                  );
                  try {
                    return (
                      (sr = !0),
                      this.internalMonitor.isDraggingSource(this.sourceId)
                    );
                  } finally {
                    sr = !1;
                  }
                },
              },
              {
                key: 'subscribeToStateChange',
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: 'isDraggingSource',
                value: function (e) {
                  return this.internalMonitor.isDraggingSource(e);
                },
              },
              {
                key: 'isOverTarget',
                value: function (e, t) {
                  return this.internalMonitor.isOverTarget(e, t);
                },
              },
              {
                key: 'getTargetIds',
                value: function () {
                  return this.internalMonitor.getTargetIds();
                },
              },
              {
                key: 'isSourcePublic',
                value: function () {
                  return this.internalMonitor.isSourcePublic();
                },
              },
              {
                key: 'getSourceId',
                value: function () {
                  return this.internalMonitor.getSourceId();
                },
              },
              {
                key: 'subscribeToOffsetChange',
                value: function (e) {
                  return this.internalMonitor.subscribeToOffsetChange(e);
                },
              },
              {
                key: 'canDragSource',
                value: function (e) {
                  return this.internalMonitor.canDragSource(e);
                },
              },
              {
                key: 'canDropOnTarget',
                value: function (e) {
                  return this.internalMonitor.canDropOnTarget(e);
                },
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: 'getItem',
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]) && or(t.prototype, n),
            r && or(t, r),
            e
          );
        })();
      function cr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var ur,
        lr = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'],
        dr = ['beginDrag'],
        hr = (function () {
          function e(t, n, r) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.props = null),
              (this.beginDrag = function () {
                if (o.props)
                  return o.spec.beginDrag(o.props, o.monitor, o.ref.current);
              }),
              (this.spec = t),
              (this.monitor = n),
              (this.ref = r);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveProps',
                value: function (e) {
                  this.props = e;
                },
              },
              {
                key: 'canDrag',
                value: function () {
                  return (
                    !!this.props &&
                    (!this.spec.canDrag ||
                      this.spec.canDrag(this.props, this.monitor))
                  );
                },
              },
              {
                key: 'isDragging',
                value: function (e, t) {
                  return (
                    !!this.props &&
                    (this.spec.isDragging
                      ? this.spec.isDragging(this.props, this.monitor)
                      : t === e.getSourceId())
                  );
                },
              },
              {
                key: 'endDrag',
                value: function () {
                  this.props &&
                    this.spec.endDrag &&
                    this.spec.endDrag(this.props, this.monitor, Cn(this.ref));
                },
              },
            ]) && cr(t.prototype, n),
            r && cr(t, r),
            e
          );
        })();
      function fr(e) {
        return (
          Object.keys(e).forEach(function (t) {
            Object(Oe.a)(
              lr.indexOf(t) > -1,
              'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              lr.join(', '),
              t,
            ),
              Object(Oe.a)(
                'function' == typeof e[t],
                'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                t,
                t,
                e[t],
              );
          }),
          dr.forEach(function (t) {
            Object(Oe.a)(
              'function' == typeof e[t],
              'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              t,
              t,
              e[t],
            );
          }),
          function (t, n) {
            return new hr(e, t, n);
          }
        );
      }
      var pr = n('/3z9'),
        gr = n('3F0O'),
        vr = n('8d0Q');
      const br = o.createContext({ size: 0, smallSizeTreeNodeAction: 1 }),
        mr = { [pr.Modifiers.Mod]: 1, [pr.Modifiers.Shift]: 2 };
      var yr = n('+5L9'),
        Or = n('co4r');
      const Sr = () => {};
      class wr extends i.a.PureComponent {
        constructor() {
          super(...arguments),
            (this._ref = null),
            (this._handleRef = (e) => {
              this._ref = e;
              const {
                connectDragSource: t,
                connectDropTarget: n,
                connectDragPreview: r,
              } = this.props;
              Object(j.ensureDefined)(n)(this._ref),
                Object(j.ensureDefined)(t)(this._ref),
                Object(j.ensureDefined)(r)(
                  (ur ||
                    ((ur = new Image()).src =
                      'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                  ur),
                  { captureDraggingState: !0 },
                );
            }),
            (this._handleTouchStart = (e) => {
              const t = (e, t) => {
                  const n = (function (e, t) {
                    try {
                      const n = document.createEvent('TouchEvent');
                      return (
                        n.initTouchEvent(
                          e,
                          !0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          t.touches,
                          t.targetTouches,
                          t.changedTouches,
                        ),
                        n
                      );
                    } catch (e) {
                      return null;
                    }
                  })(e, t);
                  if (n) return n;
                  const r = Array.from(t.changedTouches),
                    o = Array.from(t.touches),
                    i = Array.from(t.targetTouches);
                  return new TouchEvent(e, {
                    bubbles: !0,
                    changedTouches: r,
                    touches: o,
                    targetTouches: i,
                  });
                },
                n = e.target;
              if (n instanceof Element) {
                const e = (e) => {
                    const r = e;
                    if (!n.isConnected) {
                      r.preventDefault();
                      const e = t('touchmove', r);
                      document.body.dispatchEvent(e);
                    }
                  },
                  r = (o) => {
                    const i = o;
                    if (!n.isConnected) {
                      i.preventDefault();
                      const e = t('touchend', i);
                      document.body.dispatchEvent(e);
                    }
                    n.removeEventListener('touchend', r),
                      n.removeEventListener('touchmove', e);
                  };
                n.addEventListener('touchend', r),
                  n.addEventListener('touchmove', e);
              }
            });
        }
        componentDidMount() {
          var e;
          null === (e = this._ref) ||
            void 0 === e ||
            e.addEventListener('touchstart', this._handleTouchStart);
        }
        componentWillUnmount() {
          var e;
          null === (e = this._ref) ||
            void 0 === e ||
            e.removeEventListener('touchstart', this._handleTouchStart);
        }
        render() {
          return i.a.createElement(_r, {
            ...this.props,
            reference: this._handleRef,
          });
        }
        getNode() {
          return Object(j.ensureNotNull)(this._ref);
        }
      }
      const _r = (e) => {
          const {
              id: t,
              isSelected: n,
              isOffset: r,
              isExpandable: s,
              setIsSelected: a,
              isDisabled: c,
              isExpanded: u,
              onClick: l,
              parentId: d,
              setIsExpanded: h,
              reference: f,
              isFirstListItem: p,
              isLastListItem: g,
              nodeRenderer: v,
              isChildOfSelected: b = !1,
            } = e,
            { size: m, smallSizeTreeNodeAction: y } = Object(o.useContext)(br),
            O = Object(o.useRef)(null),
            S = Object(gr.a)((e) => (O.current = e), f);
          let [w, _] = Object(vr.c)();
          return (
            tr.CheckMobile.any() &&
              ((w = n), (_ = { onMouseOut: Sr, onMouseOver: Sr })),
            i.a.createElement(
              'div',
              {
                className: D(
                  Or.wrap,
                  n && Or.selected,
                  b && Or.childOfSelected,
                  c && Or.disabled,
                  s && Or.expandable,
                ),
                onClick:
                  1 === m && 0 === y
                    ? C
                    : function (e) {
                        if (e.defaultPrevented) return;
                        const r = mr[Object(pr.modifiersFromEvent)(e)] || 0;
                        !c && a && a(t, !n, r);
                        l && 0 === r && l(e, t);
                      },
                onContextMenu: C,
                ref: S,
                ..._,
              },
              s &&
                i.a.createElement(k.a, {
                  icon: yr,
                  className: D(Or.expandHandle, u && Or.expanded),
                  onClick: function (e) {
                    e.preventDefault(), s && h(t, !u);
                  },
                  onMouseDown: function (e) {
                    e.preventDefault();
                  },
                }),
              v({
                id: t,
                isOffset: r,
                parentId: d,
                isDisabled: c,
                isSelected: n,
                isChildOfSelected: b,
                isHovered: w,
                isExpanded: u,
                isFirstListItem: p,
                isLastListItem: g,
              }),
            )
          );
          function C() {
            c || n || !a || a(t, !0);
          }
        },
        Cr = i.a.createContext({});
      function Tr(e, t) {
        const { id: n } = t,
          r = kt(e, n),
          o = Mt(e, n);
        let i = !1,
          s = r.parentId;
        for (; s && !i; ) (i = Mt(e, s)), (s = kt(e, s).parentId);
        return {
          ...r,
          isSelected: o,
          isChildOfSelected: i,
          isExpanded: r.children.length > 0 && xt(e, n),
          isExpandable: r.children.length > 0,
          isDisabled: Nt(e, n),
        };
      }
      function Er(e) {
        return Object(nn.b)(
          {
            setIsExpanded: Ot,
            processDropTarget: dt,
            dropSelection: ht,
            selectNext: ct,
            selectPrevious: at,
            setIsSelected: yt,
            endDrag: wt,
          },
          e,
        );
      }
      const jr = (function (e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            o = e;
          'function' != typeof e &&
            (Object(Oe.a)(
              In(e),
              'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              e,
            ),
            (o = function () {
              return e;
            })),
            Object(Oe.a)(
              Dn(t),
              'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              t,
            );
          var i = fr(t);
          return (
            Object(Oe.a)(
              'function' == typeof n,
              'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              n,
            ),
            Object(Oe.a)(
              Dn(r),
              'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              n,
            ),
            function (e) {
              return Yn({
                containerDisplayName: 'DragSource',
                createHandler: i,
                registerHandler: ln,
                createConnector: function (e) {
                  return new rr(e);
                },
                createMonitor: function (e) {
                  return new ar(e);
                },
                DecoratedComponent: e,
                getType: o,
                collect: n,
                options: r,
              });
            }
          );
        })(
          'node',
          {
            beginDrag: (e) => {
              const { id: t, isDisabled: n, isSelected: r } = e;
              return n || r || e.setIsSelected(t, !0), e;
            },
            endDrag: (e) => e.endDrag(),
          },
          (e) => ({
            connectDragSource: e.dragSource(),
            connectDragPreview: e.dragPreview(),
          }),
        ),
        Dr = $n(
          'node',
          {
            hover: (e, t, n) => {
              if (!n) return;
              const r = n.getNode(),
                o = r.getBoundingClientRect(),
                i = o.bottom - o.top,
                s = t.getClientOffset();
              if (s) {
                const t = s.y - o.top;
                let n, a;
                if (
                  ((n =
                    0 === e.children.length
                      ? t < i / 2
                        ? 'before'
                        : 'after'
                      : t < i / 3
                      ? 'before'
                      : e.isExpanded || (t >= i / 3 && t < (2 * i) / 3)
                      ? 'inside'
                      : 'after'),
                  void 0 !== e.getContainerElement)
                ) {
                  const t = e.getContainerElement().getBoundingClientRect();
                  a = {
                    top: o.top - t.top,
                    left: o.left - t.left,
                    bottom: o.top - t.top + o.height,
                    right: o.left - t.left + o.width,
                    height: o.height,
                    width: o.width,
                  };
                } else
                  a = {
                    top: r.offsetTop,
                    left: r.offsetLeft,
                    bottom: r.offsetTop + r.offsetHeight,
                    right: r.offsetLeft + r.offsetWidth,
                    height: r.offsetHeight,
                    width: r.offsetWidth,
                  };
                e.processDropTarget(e, n, s.x - o.left < 48, a, e.isLastChild);
              }
            },
          },
          (e) => ({ connectDropTarget: e.dropTarget() }),
        ),
        Ir = Object(G.b)(Tr, Er, null, { context: Cr })(jr(Dr(wr))),
        kr = Object(G.b)(Tr, Er, null, { context: Cr })(_r);
      var Mr = n('d700');
      function xr(e) {
        return (xr =
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
      function Nr(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function Pr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Ar(e, t, n) {
        return t && Pr(e.prototype, t), n && Pr(e, n), e;
      }
      function Lr(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Rr(e, t);
      }
      function Rr(e, t) {
        return (Rr =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Br(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Hr(e);
          if (t) {
            var o = Hr(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Fr(this, n);
        };
      }
      function Fr(e, t) {
        return !t || ('object' !== xr(t) && 'function' != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : t;
      }
      function Hr(e) {
        return (Hr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function zr(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          Object(Oe.a)(
            'function' == typeof e,
            'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',
            'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',
            e,
          ),
          Object(Oe.a)(
            Dn(t),
            'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',
            t,
          ),
          function (n) {
            var r = n,
              i = t.arePropsEqual,
              s = void 0 === i ? pn : i,
              a = r.displayName || r.name || 'Component',
              c = (function (t) {
                Lr(i, t);
                var n = Br(i);
                function i() {
                  var e;
                  return (
                    Nr(this, i),
                    ((e = n.apply(this, arguments)).isCurrentlyMounted = !1),
                    (e.ref = Object(o.createRef)()),
                    (e.handleChange = function () {
                      if (e.isCurrentlyMounted) {
                        var t = e.getCurrentState();
                        pn(t, e.state) || e.setState(t);
                      }
                    }),
                    e
                  );
                }
                return (
                  Ar(i, [
                    {
                      key: 'getDecoratedComponentInstance',
                      value: function () {
                        return (
                          Object(Oe.a)(
                            this.ref.current,
                            'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()',
                          ),
                          this.ref.current
                        );
                      },
                    },
                    {
                      key: 'shouldComponentUpdate',
                      value: function (e, t) {
                        return !s(e, this.props) || !pn(t, this.state);
                      },
                    },
                    {
                      key: 'componentDidMount',
                      value: function () {
                        (this.isCurrentlyMounted = !0), this.handleChange();
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function () {
                        (this.isCurrentlyMounted = !1),
                          this.unsubscribeFromOffsetChange &&
                            (this.unsubscribeFromOffsetChange(),
                            (this.unsubscribeFromOffsetChange = void 0)),
                          this.unsubscribeFromStateChange &&
                            (this.unsubscribeFromStateChange(),
                            (this.unsubscribeFromStateChange = void 0));
                      },
                    },
                    {
                      key: 'render',
                      value: function () {
                        var e = this;
                        return Object(kn.jsx)(
                          Mn.a.Consumer,
                          {
                            children: function (t) {
                              var n = t.dragDropManager;
                              return void 0 === n
                                ? null
                                : (e.receiveDragDropManager(n),
                                  e.isCurrentlyMounted
                                    ? Object(kn.jsx)(
                                        r,
                                        Object.assign({}, e.props, e.state, {
                                          ref: Tn(r) ? e.ref : null,
                                        }),
                                        void 0,
                                      )
                                    : null);
                            },
                          },
                          void 0,
                        );
                      },
                    },
                    {
                      key: 'receiveDragDropManager',
                      value: function (e) {
                        if (void 0 === this.manager) {
                          (this.manager = e),
                            Object(Oe.a)(
                              'object' === xr(e),
                              'Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context',
                              a,
                              a,
                            );
                          var t = this.manager.getMonitor();
                          (this.unsubscribeFromOffsetChange = t.subscribeToOffsetChange(
                            this.handleChange,
                          )),
                            (this.unsubscribeFromStateChange = t.subscribeToStateChange(
                              this.handleChange,
                            ));
                        }
                      },
                    },
                    {
                      key: 'getCurrentState',
                      value: function () {
                        if (!this.manager) return {};
                        var t = this.manager.getMonitor();
                        return e(t, this.props);
                      },
                    },
                  ]),
                  i
                );
              })(o.Component);
            return (
              (c.displayName = 'DragLayer('.concat(a, ')')),
              (c.DecoratedComponent = n),
              Fn()(c, n)
            );
          }
        );
      }
      var Ur = n('AiMB');
      function Gr(e) {
        const t = e(),
          n = Object(o.useRef)(t);
        n.current = t;
        const [r, i] = Object(o.useState)(n.current),
          s = Object(o.useRef)(null);
        return (
          Object(o.useEffect)(() => {
            null === s.current &&
              (s.current = requestAnimationFrame(() => {
                (s.current = null), i(n.current);
              }));
          }),
          Object(o.useEffect)(
            () => () => {
              s.current && cancelAnimationFrame(s.current);
            },
            [],
          ),
          r
        );
      }
      function Vr(e) {
        const { dropTargetOffset: t, mousePosition: n } = e;
        if (!t) return { display: 'none' };
        const { x: r, y: o } = t,
          i = n && t ? n.y - t.y : 0,
          s = `translate(${r + (n && t ? n.x - t.x : 0)}px, ${o + i}px)`;
        return { transform: s, WebkitTransform: s };
      }
      const Kr = {
        top: 0,
        left: 0,
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 100,
        opacity: 0.5,
        width: 300,
        backgroundColor: 'red',
      };
      const Wr = zr(function (e) {
        return {
          isDragging: e.isDragging() && 'node' === e.getItemType(),
          mousePosition: e.getClientOffset(),
          dropTargetOffset: e.getSourceClientOffset(),
        };
      })(
        Object(G.b)(
          function (e) {
            return { items: Gt(e) };
          },
          null,
          null,
          { context: Cr },
        )(function (e) {
          const {
            items: t,
            isDragging: n,
            nodeRenderer: r,
            dragPreviewRenderer: o,
          } = e;
          return Gr(function () {
            return n
              ? i.a.createElement(
                  Ur.a,
                  null,
                  i.a.createElement(
                    'div',
                    { style: { ...Kr, ...Vr(e) } },
                    t.map((e) => {
                      if (o) {
                        const t = o;
                        return i.a.createElement(t, { key: e.id, ...e });
                      }
                      return i.a.createElement(kr, {
                        id: e.id,
                        key: e.id,
                        nodeRenderer: r,
                        isDragPreview: !0,
                        isOffset: e.level > 1,
                      });
                    }),
                  ),
                )
              : null;
          });
        }),
      );
      var qr = n('0lNN'),
        Yr = n('n9z6');
      const Zr = i.a.forwardRef((e, t) => {
          const n = Object(o.useRef)(null);
          return (
            e.connectDropTarget(n),
            Object(o.useImperativeHandle)(
              t,
              () => ({ getNode: () => Object(j.ensureNotNull)(n.current) }),
              [],
            ),
            i.a.createElement('div', {
              ref: n,
              style: { height: '100%', width: '100%' },
            })
          );
        }),
        Jr = $n(
          'node',
          {
            hover: (e, t, n) => {
              if (!n) return;
              const r = t.getClientOffset();
              if (null === r) return;
              const o = e.getOrderedNodes();
              if (0 === o.length) return;
              const i = n.getNode().getBoundingClientRect(),
                s = e.getContainerElement().getBoundingClientRect();
              if ('first' === e.type) {
                const t = {
                  top: i.top - s.top + i.height,
                  left: i.left - s.left,
                  bottom: i.top - s.top + i.height,
                  right: i.left - s.left + i.width,
                  height: 0,
                  width: i.width,
                };
                e.processDropTarget(o[0], 'before', !1, t, !1);
              }
              if ('last' === e.type) {
                const t = r.x - i.left < 48,
                  n = o[o.length - 1],
                  a =
                    t && 2 === n.level
                      ? Object(j.ensureDefined)(
                          o.find((e) => e.id === n.parentId),
                        )
                      : n,
                  c = {
                    top: i.top - s.top,
                    left: i.left - s.left,
                    bottom: i.top - s.top,
                    right: i.left - s.left + i.width,
                    height: i.height,
                    width: i.width,
                  };
                e.processDropTarget(a, 'after', t, c, !1);
              }
            },
          },
          (e) => ({ connectDropTarget: e.dropTarget() }),
        )(Zr),
        Xr = i.a.createContext({ isOver: !1, transform: void 0 });
      var Qr = n('4ceR');
      function $r(e) {
        const { dropType: t, boundBox: n } = e,
          { top: r, bottom: o, left: i } = Object(j.ensureDefined)(n);
        return [i, 'before' === t || 'inside' === t ? r : o];
      }
      const eo = zr(function (e) {
          return { isDragging: e.isDragging() };
        })(
          Object(G.b)(
            function (e) {
              const { boundBox: t, dropType: n, node: r } = Et(e);
              return { boundBox: t, dropType: n, level: r ? r.level : void 0 };
            },
            null,
            null,
            { context: Cr },
          )(function (e) {
            const {
              dropType: t,
              boundBox: n,
              isDragging: r,
              level: i,
              transform: s = $r,
            } = e;
            return Gr(function () {
              if (!r || !t || !n) return null;
              const a = {
                  [Qr.dropTarget]: 'inside' !== t,
                  [Qr.dropTargetInside]: 'inside' === t,
                },
                { width: c, height: u } = n,
                [l, d] = s(e),
                h = `translate(${l}px, ${d}px)`;
              return o.createElement('div', {
                className: D(a),
                style: {
                  position: 'absolute',
                  transform: h,
                  WebkitTransform: h,
                  top: 0,
                  left: 2 === i ? '46px' : 0,
                  width: 2 === i ? c - 46 + 'px' : c,
                  height: 'inside' === t ? u : '2px',
                },
              });
            });
          }),
        ),
        to = i.a.forwardRef((e, t) => {
          const n = Object(o.useContext)(Xr);
          return i.a.createElement(
            'div',
            { ...e, ref: t },
            e.children,
            n.isOver && i.a.createElement(eo, { transform: n.transform }),
          );
        });
      var no = n('Ialn'),
        ro = n('DGxW');
      const oo = 38 + pr.Modifiers.Shift,
        io = 40 + pr.Modifiers.Shift;
      const so = i.a.forwardRef(function (e, t) {
          const {
              navigationKeys: n,
              renderList: r,
              stopMultiSelect: s,
              startMultiSelect: a,
              isMultiSelecting: c,
              nodeRenderer: u,
              dragPreviewRenderer: l,
              className: d,
              connectDropTarget: h,
              readOnly: f,
              onClick: p,
              dropLayerTransform: g,
              setFocusedNode: v,
              scrollToId: b,
              rowHeight: m,
              onMultiSelectPrevious: y,
              onMultiSelectNext: O,
              onMoveCursorToNext: S,
              onMoveCursorToPrevious: w,
              outerRef: _,
              width: C,
              height: T,
              isOver: E,
              processDropTarget: D,
            } = e,
            k = Object(o.useContext)(P),
            M = Object(o.useRef)(null);
          Object(o.useEffect)(() => {
            const e = (e) => {
                [pr.Modifiers.Mod, pr.Modifiers.Shift].includes(
                  Object(pr.modifiersFromEvent)(e),
                ) && a();
              },
              t = (e) => {
                c &&
                  ![pr.Modifiers.Mod, pr.Modifiers.Shift].includes(
                    Object(pr.modifiersFromEvent)(e),
                  ) &&
                  s();
              };
            return (
              document.addEventListener('keydown', e),
              document.addEventListener('keyup', t),
              document.addEventListener('mousemove', t),
              () => {
                document.removeEventListener('keydown', e),
                  document.removeEventListener('keyup', t),
                  document.removeEventListener('mousemove', t);
              }
            );
          }, [c]),
            (function (e) {
              Object(o.useEffect)(() => {
                if (tr.isEdge) {
                  let t = null;
                  const n = Object(j.ensureNotNull)(e.current),
                    r = (e) => {
                      if (e.target instanceof Element) {
                        const n = Object(j.ensureNotNull)(
                          e.target.closest('[draggable]'),
                        );
                        n instanceof HTMLElement &&
                          ((n.style.opacity = '0'),
                          (t = requestAnimationFrame(
                            () => (n.style.opacity = '1'),
                          )));
                      }
                    };
                  return (
                    n.addEventListener('dragstart', r),
                    () => {
                      n.removeEventListener('dragstart', r),
                        null !== t && cancelAnimationFrame(t);
                    }
                  );
                }
                return () => {};
              }, []);
            })(M);
          const x = Object(o.useCallback)(
              () => Object(j.ensureNotNull)(W.current),
              [],
            ),
            N = Object(o.useCallback)(() => r, [r]),
            A = Object(o.useMemo)(() => {
              const e = f ? kr : Ir,
                t = [];
              let n;
              t.push({
                type: 'padding',
                node: i.a.createElement(Jr, {
                  type: 'first',
                  key: 'padding-top',
                  getContainerElement: x,
                  getOrderedNodes: N,
                  processDropTarget: D,
                }),
              });
              for (let o = 0; o < r.length; o++) {
                const s = r[o];
                1 === s.level &&
                  (void 0 !== n &&
                    n !== s.parentId &&
                    t.push({
                      type: 'separator',
                      node: i.a.createElement('div', {
                        key: n + '_separator',
                        className: ro.separator,
                      }),
                    }),
                  (n = s.parentId)),
                  t.push({
                    type: 'node',
                    node: i.a.createElement(e, {
                      id: s.id,
                      key: s.id,
                      isFirstListItem: 0 === o,
                      isLastListItem: o === r.length - 1,
                      isExpandable: s.children.length > 0,
                      nodeRenderer: u,
                      readOnly: f,
                      onClick: p,
                      isOffset: s.level > 1,
                      getContainerElement: x,
                    }),
                  });
              }
              return (
                t.push({
                  type: 'padding',
                  node: i.a.createElement(Jr, {
                    type: 'last',
                    key: 'padding-bottom',
                    getContainerElement: x,
                    getOrderedNodes: N,
                    processDropTarget: D,
                  }),
                }),
                t
              );
            }, [r]),
            L = Object(o.useRef)([]);
          L.current = A;
          const R = Object(o.useCallback)((e) => {
              let { style: t } = e;
              const { index: n } = e;
              return (
                n === L.current.length - 1 &&
                  ((t = { ...t, bottom: 0, minHeight: t.height }),
                  delete t.height),
                i.a.createElement('div', { style: t }, L.current[n].node)
              );
            }, []),
            B = Object(o.useCallback)(
              (e) => {
                const t = L.current[e];
                return 'padding' === t.type
                  ? 6
                  : 'function' == typeof m
                  ? m(e, t)
                  : m;
              },
              [m],
            ),
            F = Object(o.useCallback)(
              (e) => Object(j.ensure)(L.current[e].node.key),
              [],
            ),
            H = Object(o.useMemo)(
              () =>
                null === b
                  ? { index: -1 }
                  : { index: L.current.findIndex((e) => e.node.key === b.id) },
              [b],
            );
          h(M);
          const [z, U, G, V] = Object(Yr.a)(),
            K = Object(o.useRef)(null);
          Object(o.useEffect)(
            () => Object(j.ensureNotNull)(K.current).resetAfterIndex(0, !0),
            [A],
          ),
            Object(o.useEffect)(
              () => Object(j.ensureNotNull)(K.current).scrollToItem(H.index),
              [H],
            );
          const W = Object(o.useRef)(null),
            q = Object(o.useMemo)(() => ({ isOver: E, transform: g }), [E, g]),
            Y = Object(o.useRef)(null),
            Z = Object(o.useRef)({
              startScroll(e) {
                const t = () => {
                  null !== G.current &&
                    ((Y.current = requestAnimationFrame(t)),
                    G.current.scrollBy({ top: e }));
                };
                this.stopScroll(), t();
              },
              stopScroll() {
                null !== Y.current &&
                  (cancelAnimationFrame(Y.current), (Y.current = null));
              },
              getListElement: () => G.current,
            });
          return (
            Object(o.useImperativeHandle)(t, () => Z.current, []),
            Object(o.useEffect)(() => () => Z.current.stopScroll(), [E]),
            i.a.createElement(
              Xr.Provider,
              { value: q },
              i.a.createElement(
                'div',
                {
                  ...U,
                  className: I()(ro.tree, d),
                  ref: M,
                  tabIndex: -1,
                  onKeyDown: function (e) {
                    const t = Object(pr.hashFromEvent)(e);
                    if (e.defaultPrevented || Object(Mr.a)(t, e.target)) return;
                    k || t !== oo || (e.preventDefault(), y());
                    k || t !== io || (e.preventDefault(), O());
                    (38 === t || (void 0 !== n && 'previous' === n[t])) &&
                      (e.preventDefault(), w());
                    (40 === t || (void 0 !== n && 'next' === n[t])) &&
                      (e.preventDefault(), S());
                    if ((8 === t || 46 === t) && k) {
                      const { viewModel: e } = k,
                        t = e.selection(),
                        n = t.selected();
                      if (1 !== n.length) return;
                      const r = e.getNextNodeIdAfterRemove(n[0]);
                      if (null === r) return;
                      e.onChange().subscribe(
                        null,
                        () => {
                          if (t.selected().length) return;
                          const n = e.entity(r);
                          n && (t.set([n]), v(r));
                        },
                        !0,
                      );
                    }
                  },
                },
                i.a.createElement(qr.a, {
                  ...z,
                  className: ro.overlayScrollWrap,
                }),
                i.a.createElement(er.b, {
                  ref: function (e) {
                    K.current = e;
                  },
                  className: ro.listContainer,
                  width: C,
                  height: T,
                  itemCount: A.length,
                  itemSize: B,
                  children: R,
                  itemKey: F,
                  outerRef: function (e) {
                    (G.current = e), _ && _(e);
                  },
                  innerRef: function (e) {
                    W.current = e;
                  },
                  innerElementType: to,
                  onItemsRendered: function () {
                    V();
                  },
                  overscanCount: 20,
                  direction: Object(no.isRtl)() ? 'rtl' : 'ltr',
                }),
                i.a.createElement(Wr, {
                  dragPreviewRenderer: l,
                  nodeRenderer: u,
                }),
              ),
            )
          );
        }),
        ao = $n(
          'node',
          {
            drop: (e, t, n) => {
              ('touch' === e.drag || tr.isFF) && n.stopScroll(),
                t.getItem().dropSelection();
            },
            hover: (e, t, n) => {
              if ('touch' !== e.drag && !tr.isFF) return;
              const r = t.getClientOffset();
              if (null === r) return;
              const o = n.getListElement();
              if (null === o) return;
              const i = o.getBoundingClientRect();
              ((t, r, o) => {
                const i = Math.abs(t - o),
                  s = Math.abs(t - r);
                if ((s > 40 && i > 40) || (i <= 40 && s <= 40))
                  return void n.stopScroll();
                var a, c, u, l;
                (a = s > 20 && s <= 40),
                  (u = i <= 20),
                  (l = s <= 20),
                  (c = i > 20 && i <= 40) || a
                    ? 'touch' === e.drag
                      ? n.startScroll(c ? -5 : 5)
                      : n.startScroll(c ? -2 : 2)
                    : (u || l) &&
                      ('touch' === e.drag
                        ? n.startScroll(u ? -10 : 10)
                        : n.startScroll(u ? -5 : 5));
              })(r.y, i.bottom, i.top);
            },
          },
          (e, t) => ({ connectDropTarget: e.dropTarget(), isOver: t.isOver() }),
        )(so);
      const co = Object(G.b)(
          function (e) {
            return {
              renderList: Ut(e),
              orderedNodes: Ht(e),
              isMultiSelecting: Rt(e),
              selectedIds: At(e),
              scrollToId: Dt(e),
            };
          },
          function (e) {
            return Object(nn.b)(
              {
                startMultiSelect: gt,
                stopMultiSelect: vt,
                setFocusedNode: bt,
                processDropTarget: dt,
                onMoveCursorToNext: ct,
                onMoveCursorToPrevious: at,
                onMultiSelectPrevious: ut,
                onMultiSelectNext: lt,
              },
              e,
            );
          },
          null,
          { context: Cr },
        )(ao),
        uo = { delayTouchStart: 100 };
      function lo(e) {
        const {
            canBeAddedToSelection: t,
            initState: n,
            onSelect: r,
            canMove: s,
            onDrop: a,
            onMove: c,
            nodes: u,
            selectedIds: l,
            onKeyboardSelect: d,
            saga: h,
            lastFocusedNodeObject: f,
            lastSyncTimestampRef: p,
            scrollToId: g,
            ...v
          } = e,
          [b, m] = Object(o.useState)(null);
        return (
          Object(o.useEffect)(() => {
            const e = Object(U.b)();
            m(
              (function (e) {
                const t = Object(nn.a)(e);
                return Object(nn.e)(cn, t);
              })(e),
            );
            const o = e.run(tn, {
              initState: n,
              onKeyboardSelect: d,
              saga: h,
              canMove: s,
              onMove: c,
              onDrop: a,
              onSelect: r,
              canBeAddedToSelection: t,
            });
            return () => o.cancel();
          }, []),
          Object(o.useEffect)(
            () => (
              null !== b &&
                u &&
                (p && (p.current = performance.now()),
                b.dispatch(((e) => ({ type: Fe, nodes: e }))(u))),
              () => {}
            ),
            [b, u],
          ),
          Object(o.useEffect)(() => {
            null !== b && l && b.dispatch(ft(l));
          }, [b, l]),
          Object(o.useEffect)(() => {
            null !== b && (null == f ? void 0 : f.id) && b.dispatch(bt(f.id));
          }, [b, f]),
          null === b
            ? null
            : i.a.createElement(ho, { store: b, scrollToId: g, ...v })
        );
      }
      const ho = i.a.memo(function (e) {
        const { store: t, scrollToId: n, ...r } = e,
          s = 'touch' === e.drag ? Pe : ye;
        return (
          Object(o.useEffect)(() => {
            var e;
            t.dispatch(
              mt(
                null !== (e = null == n ? void 0 : n.id) && void 0 !== e
                  ? e
                  : null,
              ),
            );
          }, [n]),
          i.a.createElement(
            Ae.a,
            { backend: s, options: uo },
            i.a.createElement(
              G.a,
              { store: t, context: Cr },
              i.a.createElement(co, { ...r }),
            ),
          )
        );
      });
      function fo(e, t) {
        Object(H.trackEvent)('Object Tree', e, t);
      }
      function po(e) {
        return e.length > 1 ? 'Multi select' : e[0].gaLabel();
      }
      function go(e) {
        return Object(U.c)((t) => {
          const n = {};
          return (
            e.onChange().subscribe(n, () => t({ type: Ue })),
            e.onGroupCreated().subscribe(n, (e) => t(Ot(e, !0))),
            e
              .selection()
              .onChange()
              .subscribe(n, (e) => t(ft(e))),
            () => {
              e.onChange().unsubscribeAll(n),
                e.selection().onChange().unsubscribeAll(n),
                e.onGroupCreated().unsubscribeAll(n);
            }
          );
        }, U.a.expanding());
      }
      function* vo() {
        for (;;) yield Object(T.g)([We, Ke]), fo('Select', 'Arrow');
      }
      function* bo() {
        for (;;) {
          const { mode: e } = yield Object(T.g)(nt);
          1 === e && fo('Multi select', 'Ctrl'),
            2 === e && fo('Multi select', 'Shift');
        }
      }
      function* mo(e) {
        for (;;) {
          yield Object(T.g)(Ve);
          const { node: t, dropType: n } = Et(yield Object(T.f)());
          if (t) {
            const r = Bt(yield Object(T.f)()),
              o = r.map((t) => Object(j.ensureNotNull)(e.entity(t.id)));
            let i = 'Drag';
            1 === t.level && 'inside' !== n && r.some((e) => 2 === e.level)
              ? (i = 'From the group')
              : (2 !== t.level && 'inside' !== n) ||
                !r.some((e) => 1 === e.level)
              ? 1 === r.length &&
                r[0].parentId !== t.parentId &&
                (i = 'Existing pane')
              : (i = 'To the group'),
              fo(i, po(o));
          }
        }
      }
      function* yo(e) {
        yield Object(T.d)(vo), yield Object(T.d)(bo), yield Object(T.d)(mo, e);
      }
      function* Oo(e) {
        yield Object(T.d)(yo, e);
        const t = yield Object(T.b)(go, e);
        on.logNormal('Opened object tree data source channel');
        try {
          for (;;) {
            const e = yield Object(T.g)(t);
            yield Object(T.e)(e);
          }
        } finally {
          on.logNormal('Closed object tree data source channel'), t.close();
        }
      }
      var So = n('5VQP');
      const wo = o.createContext(null);
      var _o = n('XAms'),
        Co = n('9S1y'),
        To = n('h5pj');
      const Eo = E.mobiletouch ? 'touch' : 'native';
      function jo(e) {
        const {
            viewModel: t,
            showHeader: n = !0,
            nodeRenderer: r,
            isDialog: s = !1,
          } = e,
          a = Object(o.useRef)(null),
          c = (function (e) {
            const [t, n] = Object(o.useState)(e.getChartId()),
              r = Object(o.useRef)(t);
            return (
              (r.current = t),
              Object(o.useEffect)(() => {
                return (
                  e.onChange().subscribe(null, t),
                  () => {
                    e.onChange().unsubscribe(null, t);
                  }
                );
                function t() {
                  const t = e.getChartId();
                  r.current !== t && n(t);
                }
              }, []),
              t
            );
          })(t),
          [u, l] = Object(Co.a)(),
          [d, h] = Object(o.useState)(null),
          f = Object(o.useMemo)(() => ({ isTouch: E.touch, isDialog: s }), [s]);
        return i.a.createElement(
          wo.Provider,
          { value: f },
          i.a.createElement(
            P.Provider,
            { value: { viewModel: t } },
            i.a.createElement(
              'div',
              { className: To.wrap, onContextMenu: _o.b },
              n && i.a.createElement(z, null),
              i.a.createElement(
                C.a,
                { onMeasure: u },
                i.a.createElement(
                  'div',
                  {
                    className: To.space,
                    onClick: function (e) {
                      if (e.defaultPrevented) return;
                      if (!(e.target instanceof Element) || null === a.current)
                        return;
                      e.target === a.current && t.selection().set([]);
                    },
                  },
                  null !== l &&
                    i.a.createElement(lo, {
                      key: c,
                      height: l.height,
                      width: l.width,
                      canBeAddedToSelection: function (e) {
                        const n = t.entity(e);
                        return t.selection().canBeAddedToSelection(n);
                      },
                      nodeRenderer: r,
                      initState: function () {
                        const { nodes: e, selection: n } = t.getState();
                        return { selectedIds: n, nodes: e };
                      },
                      canMove: function (e, n, r) {
                        return t.isSelectionDropable(n.id, r);
                      },
                      drag: Eo,
                      rowHeight: Do,
                      onSelect: function (e) {
                        const n = e
                          .map((e) => t.entity(e))
                          .filter((e) => null !== e);
                        t.selection().set(n);
                        const r = So.ContextMenuManager.getShown();
                        r && r.hide();
                      },
                      onDrop: function (e) {
                        e.preventDefault();
                        const {
                          detail: { target: n, type: r },
                        } = e;
                        t.insertSelection(n, r);
                      },
                      scrollToId: d,
                      saga: function* () {
                        yield Object(T.d)(Oo, t);
                      },
                      onKeyboardSelect: function (e) {
                        h({ id: e });
                      },
                      outerRef: function (e) {
                        a.current = e;
                      },
                    }),
                ),
              ),
            ),
          ),
        );
      }
      function Do(e, t) {
        switch (t.type) {
          case 'node':
            return 38;
          case 'separator':
            return 13;
        }
      }
      var Io,
        ko = n('Kxc7');
      !(function (e) {
        (e.Svg = 'svg'), (e.Text = 'text');
      })(Io || (Io = {}));
      var Mo = n('wHCJ'),
        xo = n('WcWV');
      function No(e) {
        const { className: t, disabled: n, ...r } = e;
        return i.a.createElement(k.a, {
          className: I()(xo.button, n && xo.disabled, t),
          ...r,
        });
      }
      var Po = n('To8B'),
        Ao = n('tyJc'),
        Lo = n('20cQ'),
        Ro = n('zn4F'),
        Bo = n('U+QY'),
        Fo = n('gSe6');
      function Ho(e) {
        const { id: t } = e,
          n = Object(o.useContext)(P),
          { viewModel: r } = Object(j.ensureNotNull)(n),
          s = r.entity(t);
        return null === s ? null : i.a.createElement(zo, { ...e, entity: s });
      }
      function zo(e) {
        const {
            id: t,
            isOffset: n,
            isDisabled: r,
            isSelected: s,
            isChildOfSelected: a,
            isHovered: c,
            parentId: u,
            entity: l,
            isExpanded: d,
          } = e,
          h = Object(o.useContext)(P),
          f = Object(o.useContext)(wo),
          { size: p } = Object(o.useContext)(br),
          [g, v] = Object(o.useState)(!1),
          b = Object(o.useRef)(null),
          [m, O] = Object(o.useState)(l.title()),
          [S, w] = Object(o.useState)(l.isLocked()),
          [_, C] = Object(o.useState)(l.isVisible()),
          [T, E] = Object(o.useState)(l.isActualInterval()),
          [I, M] = Object(o.useState)(!1),
          [x, N] = Object(o.useState)(!1),
          A = Object(o.useRef)(null);
        Object(o.useEffect)(() => {
          const e = {};
          l.onLockChanged().subscribe(e, () => w(l.isLocked())),
            l.onVisibilityChanged().subscribe(e, () => C(l.isVisible()));
          const t = l.onTitleChanged();
          return (
            t && t.subscribe(e, () => O(l.title())),
            l
              .onIsActualIntervalChange()
              .subscribe(e, () => E(l.isActualInterval())),
            () => {
              l.onIsActualIntervalChange().unsubscribeAll(e),
                l.onLockChanged().unsubscribeAll(e),
                l.onVisibilityChanged().unsubscribeAll(e),
                t && t.unsubscribeAll(e),
                A.current && clearTimeout(A.current);
            }
          );
        }, [l]),
          Object(o.useEffect)(() => {
            g &&
              b.current &&
              (b.current.focus(), b.current.setSelectionRange(0, m.length));
          }, [g]),
          Object(o.useEffect)(() => {
            const e = {};
            return (
              L.hoveredObjectChanged().subscribe(e, Z),
              () => {
                L.hoveredObjectChanged().unsubscribeAll(e);
              }
            );
          }, [d]),
          Object(o.useEffect)(() => {
            L.setHoveredObject(c ? t : null);
          }, [c]),
          Object(o.useEffect)(() => {
            !s && A.current && (clearTimeout(A.current), (A.current = null)),
              v(!1);
          }, [s]);
        const { viewModel: L } = Object(j.ensureNotNull)(h),
          R = !_ || S,
          B = l.getIcon(),
          F = {};
        if (u) {
          const e = L.entity(u);
          e && (F['data-parent-name'] = e.title()),
            (F['data-type'] = l.hasChildren() ? 'group' : 'data-source');
        }
        const H = ko.enabled('test_show_object_tree_debug')
            ? `<${l.id()}> (${l.zOrder()})`
            : l.title(),
          z = c || I,
          U = g && s,
          G = !!f && f.isTouch,
          V = !!f && f.isDialog,
          K = T && _ ? Ro : Bo,
          W = l.hasChildren()
            ? y.t('Group is hidden on current interval')
            : y.t('Drawing is hidden on current interval');
        return i.a.createElement(
          'span',
          {
            className: D(
              Fo.wrap,
              R && Fo.modifier,
              r && Fo.disabled,
              s && Fo.selected,
              n && Fo.offset,
              a && Fo.childOfSelected,
              I && !r && !s && !a && Fo.hover,
              V && !r && !s && !a && Fo.dialog,
            ),
            onMouseDown: function (e) {
              g &&
                !Object(j.ensureNotNull)(b.current).contains(e.target) &&
                N(!0);
            },
            onClick:
              1 === p
                ? q
                : function (e) {
                    if (e.defaultPrevented) return;
                    if (0 !== Object(pr.modifiersFromEvent)(e)) return;
                    if (A.current)
                      e.preventDefault(),
                        clearTimeout(A.current),
                        (A.current = null),
                        L.openProperties(l),
                        N(!1);
                    else {
                      const e = L.selection().selected();
                      A.current = setTimeout(() => {
                        (A.current = null),
                          s && !x && 1 === e.length && L.rename(l, () => v(!0)),
                          N(!1);
                      }, 500);
                    }
                  },
            onContextMenu: G ? void 0 : q,
          },
          !U &&
            i.a.createElement(
              o.Fragment,
              null,
              B &&
                B.type === Io.Svg &&
                i.a.createElement(k.a, {
                  icon: B.content || '',
                  className: Fo.icon,
                }),
              B &&
                B.type === Io.Text &&
                i.a.createElement(
                  'span',
                  { className: D(Fo.icon, Fo.textIcon) },
                  B.content,
                ),
              i.a.createElement(
                'span',
                {
                  className: D(
                    Fo.title,
                    L.isMain(l) && Fo.main,
                    (!l.isVisible() || !T) && Fo.disabled,
                  ),
                  ...F,
                },
                H,
              ),
              (z || S || !_ || G || !T) &&
                i.a.createElement(
                  'span',
                  {
                    className: D(
                      Fo.rightButtons,
                      l.canBeRemoved() && Fo.twoButtons,
                      l.canBeLocked() && (z || S) && Fo.threeButtons,
                    ),
                  },
                  l.canBeLocked() &&
                    (z || S) &&
                    i.a.createElement(No, {
                      icon: S ? Ao : Lo,
                      className: D(Fo.button, Fo.lockButton),
                      onClick: function (e) {
                        if (e.defaultPrevented) return;
                        e.preventDefault(), L.setIsLocked(t, !l.isLocked());
                      },
                      'data-role': 'button',
                      'data-name': 'lock',
                      'data-active': S,
                    }),
                  (z || !_ || !T) &&
                    i.a.createElement(No, {
                      icon: K,
                      className: D(
                        Fo.button,
                        Fo.viewButton,
                        !T && [Fo.warn, 'apply-common-tooltip'],
                      ),
                      onClick: T
                        ? function (e) {
                            if (e.defaultPrevented) return;
                            e.preventDefault(),
                              L.setIsVisible(t, !l.isVisible());
                          }
                        : void 0,
                      title: T ? void 0 : W,
                      disabled: !T,
                      'data-role': 'button',
                      'data-name': 'hide',
                      'data-active': !_,
                    }),
                  l.canBeRemoved() &&
                    (G || z) &&
                    i.a.createElement(No, {
                      icon: Po,
                      className: D(Fo.button, Fo.removeButton),
                      onClick: function (e) {
                        if (e.defaultPrevented) return;
                        e.preventDefault(), e.stopPropagation(), L.remove(t);
                      },
                      'data-role': 'button',
                      'data-name': 'remove',
                    }),
                ),
            ),
          U &&
            i.a.createElement(Mo.a, {
              value: m,
              onChange: function (e) {
                O(e.currentTarget.value);
              },
              onClick: _o.a,
              className: Fo.renameInput,
              onKeyDown: function (e) {
                27 === Object(pr.hashFromEvent)(e)
                  ? (e.preventDefault(), O(l.title()), v(!1))
                  : 13 === Object(pr.hashFromEvent)(e) &&
                    (e.preventDefault(), Y());
              },
              reference: function (e) {
                b.current = e;
              },
              onBlur: Y,
              onDragStart: function (e) {
                e.preventDefault(), e.stopPropagation();
              },
              draggable: !0,
              stretch: !0,
            }),
        );
        function q(e) {
          e.defaultPrevented ||
            g ||
            (e.preventDefault(),
            e.persist(),
            L.openContextMenu(l, () => v(!0), e));
        }
        function Y() {
          '' !== m && l.setName(m), O(l.title()), v(!1);
        }
        function Z(e) {
          if (l.hasChildren() && !d) {
            const t = null !== e && l.childrenIds().has(e);
            M(t);
          } else M(t === e);
        }
      }
      var Uo = n('4/GM');
      class Go extends i.a.PureComponent {
        constructor(e) {
          super(e),
            (this._isMounted = !1),
            (this._dialogRef = i.a.createRef()),
            (this._renderChildren = (e) =>
              i.a.createElement(Vo, {
                isSmallTablet: e,
                viewModel: this.props.viewModel,
              })),
            (this._handleMediaChange = () => {
              this.state.showDrawer &&
                !window.matchMedia(S.a.TabletSmall).matches &&
                this.setState({ showDrawer: !1 });
            }),
            (this._onManageDrawings = (e) => {
              throw new Error('not supported');
            }),
            (this._closeDrawer = () => {
              this.setState({ showDrawer: !1 });
            }),
            (this._handleContextMenuOpened = (e) => {
              this.setState({ isContextMenuOpened: e });
            }),
            (this._matchMedia = window.matchMedia(S.a.TabletSmall)),
            (this.state = {
              showDrawer: !1,
              showDialog: !1,
              isContextMenuOpened: !1,
            });
        }
        componentDidMount() {
          (this._isMounted = !0),
            this._matchMedia.addListener(this._handleMediaChange),
            this.props.viewModel
              .isContextMenuOpened()
              .subscribe(this._handleContextMenuOpened);
        }
        componentWillUnmount() {
          (this._isMounted = !1),
            this._matchMedia.removeListener(this._handleMediaChange),
            this.props.viewModel
              .isContextMenuOpened()
              .unsubscribe(this._handleContextMenuOpened);
        }
        render() {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(m.a, { rule: S.a.TabletSmall }, (e) =>
              i.a.createElement(O.a, {
                additionalElementPos: 'after',
                additionalHeaderElement: !1,
                className: Uo.dialog,
                dataName: 'object-tree-dialog',
                isOpened: !0,
                onClickOutside:
                  this.state.showDialog || e || this.state.isContextMenuOpened
                    ? () => {}
                    : this.props.onClose,
                onClose: this.props.onClose,
                ref: this._dialogRef,
                render: () => this._renderChildren(e),
                title: Object(y.t)('Object tree'),
                showSeparator: !0,
              }),
            ),
            i.a.createElement(
              b.b,
              null,
              this.state.showDrawer &&
                i.a.createElement(
                  v.a,
                  { onClose: this._closeDrawer, position: 'Bottom' },
                  i.a.createElement(w.a, {
                    onClose: this._closeDrawer,
                    chartWidget: this.props.activeChartWidget,
                    isMobile: !0,
                  }),
                ),
            ),
          );
        }
      }
      function Vo(e) {
        const { isSmallTablet: t, viewModel: n } = e,
          r = Object(o.useMemo)(
            () => ({ size: t ? 1 : 0, smallSizeTreeNodeAction: 0 }),
            [t],
          );
        return i.a.createElement(
          br.Provider,
          { value: r },
          i.a.createElement(jo, {
            nodeRenderer: Ho,
            showHeader: !1,
            viewModel: n,
            isDialog: !0,
          }),
        );
      }
      var Ko = n('eqEH'),
        Wo = n('vPbs'),
        qo = n('aIyQ'),
        Yo = n.n(qo);
      function Zo(e) {
        return e;
      }
      var Jo = n('QrSB');
      function Xo(e, t) {
        return `${e}:${t}`;
      }
      class Qo {
        constructor(e) {
          (this._onChange = new Yo.a()),
            (this._recalculate = () => {
              const e = this._groupModel
                  .groups()
                  .map((e) => Xo(e.id, e.instanceId)),
                t = this._selectionApi.allSources();
              (this._selected = this._selected.filter(
                (n) => e.includes(n) || t.includes(n),
              )),
                this._onChange.fire(this._selected);
            }),
            (this._model = e),
            (this._selectionApi = new Jo.SelectionApi(this._model)),
            (this._groupModel = this._model.lineToolsGroupModel()),
            (this._selected = this._getSelectedIds()),
            this._selectionApi.onChanged().subscribe(this, () => {
              (this._selected = this._getSelectedIds()),
                this._onChange.fire(this._selected);
            }),
            this._groupModel.onChanged().subscribe(this, this._recalculate);
        }
        destroy() {
          this._selectionApi.onChanged().unsubscribeAll(this),
            this._groupModel.onChanged().unsubscribeAll(this);
        }
        set(e) {
          const t = [];
          let n = e.map((e) => e.id());
          for (const r of e)
            if (r.hasChildren()) {
              const e = r.childrenIds();
              t.push(...Array.from(e.values()).map(Zo)),
                (n = n.filter((t) => !e.has(t)));
            } else t.push(r.id());
          this._selectionApi.set(t),
            (this._selected = n),
            this._onChange.fire(this._selected);
        }
        canBeAddedToSelection(e) {
          return null !== e && e.canBeAddedToSelection();
        }
        onChange() {
          return this._onChange;
        }
        selected() {
          return this._selected;
        }
        _getSelectedIds() {
          return this._selectionApi.allSources().filter((e) => {
            const t = this._model.dataSourceForId(e);
            return null !== t && t.showInObjectTree();
          });
        }
      }
      class $o {
        constructor(e, t) {
          (this._controller = e),
            (this._facade = t),
            (this._groupModel = e.model().lineToolsGroupModel());
        }
        buildTree() {
          const e = {};
          for (const t of this._controller.model().panes()) {
            const n = t
              .sourcesByGroup()
              .all()
              .filter((e) => e.showInObjectTree());
            e[t.id()] = ei(t.id(), 0);
            for (const n of this._groupModel.groups()) {
              const r = Xo(n.id, n.instanceId),
                o = Object(j.ensureNotNull)(this._facade.getObjectById(r));
              if (o.pane() === t) {
                const r = [...n.lineTools()]
                  .sort((e, t) => (e.zorder() > t.zorder() ? -1 : 1))
                  .map((e) => e.id());
                (e[o.id()] = ei(o.id(), 1, t.id(), r)),
                  e[t.id()].children.push(o.id());
                for (const t of r) e[t] = ei(t, 2, o.id());
              }
            }
            for (const r of n)
              e[r.id()] ||
                ((e[r.id()] = ei(r.id(), 1, t.id())),
                e[t.id()].children.push(r.id()));
            e[t.id()].children.sort((e, t) => {
              const n = Object(j.ensureNotNull)(this._facade.getObjectById(e)),
                r = Object(j.ensureNotNull)(this._facade.getObjectById(t));
              return (
                Object(j.ensureNotNull)(r.zOrder()) -
                Object(j.ensureNotNull)(n.zOrder())
              );
            });
          }
          return this._facade.invalidateCache(new Set(Object.keys(e))), e;
        }
      }
      function ei(e, t, n, r = []) {
        return { id: e, level: t, parentId: n, children: r };
      }
      var ti = n('CW80'),
        ni = n('3ClC'),
        ri = n('fgLi'),
        oi = n('HZKX'),
        ii = n('Vbka'),
        si = n('dDxv'),
        ai = n('NhaM');
      const ci = Object(y.t)('Show {sourceTitle}'),
        ui = Object(y.t)('Hide {sourceTitle}'),
        li = Object(y.t)('Lock {sourceTitle}'),
        di = Object(y.t)('Unlock {sourceTitle}'),
        hi = Object(y.t)('Change {sourceType} title to {newSourceTitle}');
      function fi(e, t) {
        return t.every(
          (t) => !(t.pane() !== e && !t.allowsMovingbetweenPanes()),
        );
      }
      function pi(e) {
        return e instanceof ri.DataSource && e.showInObjectTree()
          ? e.id()
          : null;
      }
      const gi = new Yo.a();
      class vi {
        constructor(e, t) {
          (this._syncStateChanged = new Yo.a()),
            (this._linkKeyChangedBound = this._linkKeyChanged.bind(this)),
            (this._undoModel = e),
            (this._dataSource = t),
            Object(ti.isLineTool)(this._dataSource) &&
              this._dataSource.linkKey().subscribe(this._linkKeyChangedBound);
        }
        destroy() {
          Object(ti.isLineTool)(this._dataSource) &&
            this._dataSource.linkKey().unsubscribe(this._linkKeyChangedBound);
        }
        id() {
          return this._dataSource.id();
        }
        title() {
          return Object(ti.isLineTool)(this._dataSource)
            ? this._dataSource.properties().title.value() ||
                this._dataSource.translatedType()
            : this._dataSource.title();
        }
        gaLabel() {
          return Object(ni.isStudy)(this._dataSource)
            ? 'Study'
            : Object(ti.isLineTool)(this._dataSource)
            ? 'Drawing'
            : 'Symbol';
        }
        canBeLocked() {
          return (
            Object(ti.isLineTool)(this._dataSource) &&
            this._dataSource.userEditEnabled()
          );
        }
        canBeRemoved() {
          return (
            this._undoModel.mainSeries() !== this._dataSource &&
            this._dataSource.isUserDeletable()
          );
        }
        canBeHidden() {
          return this._dataSource.canBeHidden();
        }
        canBeRenamed() {
          return Object(ti.isLineTool)(this._dataSource);
        }
        isVisible() {
          return this._dataSource.properties().visible.value();
        }
        isActualInterval() {
          return (
            (!Object(ti.isLineTool)(this._dataSource) &&
              !Object(ni.isStudy)(this._dataSource)) ||
            this._dataSource.isActualInterval()
          );
        }
        onIsActualIntervalChange() {
          return Object(ti.isLineTool)(this._dataSource) ||
            Object(ni.isStudy)(this._dataSource)
            ? this._dataSource.onIsActualIntervalChange()
            : gi;
        }
        isLocked() {
          return (
            !!Object(ti.isLineTool)(this._dataSource) &&
            this._dataSource.properties().frozen.value()
          );
        }
        onVisibilityChanged() {
          return this._dataSource.properties().visible.listeners();
        }
        onLockChanged() {
          return Object(ti.isLineTool)(this._dataSource)
            ? this._dataSource.properties().frozen.listeners()
            : gi;
        }
        getIcon() {
          const e = d,
            t = this._dataSource.getSourceIcon(),
            n = Object(ni.isStudyStrategy)(this._dataSource);
          let r = { type: Io.Svg, content: n ? ii : si };
          if (e && t)
            if ('loadSvg' === t.type) {
              const [n, o] = t.svgId.split('.'),
                i = 'linetool' === n ? e.linetool[o] : e.series[Number(o)];
              r = { type: Io.Svg, content: i || si };
            } else
              'text' === t.type && (r = { type: Io.Text, content: t.text });
          return r;
        }
        setVisible(e) {
          const t = (e ? ci : ui).format({
            sourceTitle: this._dataSource.title(),
          });
          this._undoModel.setProperty(
            this._dataSource.properties().visible,
            e,
            t,
          );
        }
        setLocked(e) {
          if (Object(ti.isLineTool)(this._dataSource)) {
            const t = (e ? li : di).format({
              sourceTitle: this._dataSource.translatedType(),
            });
            this._undoModel.setProperty(
              this._dataSource.properties().frozen,
              e,
              t,
            );
          }
        }
        setName(e) {
          if (Object(ti.isLineTool)(this._dataSource)) {
            const t = hi.format({
              sourceType:
                this._dataSource.properties().title.value() ||
                this._dataSource.title(),
              newSourceTitle: e,
            });
            this._undoModel.setProperty(
              this._dataSource.properties().title,
              e,
              t,
            );
          }
        }
        isCopiable() {
          return this._dataSource.copiable();
        }
        isClonable() {
          return this._dataSource.cloneable();
        }
        zOrder() {
          return this._dataSource.zorder();
        }
        remove() {
          this._undoModel.removeSource(this._dataSource, !1);
        }
        canBeAddedToSelection() {
          return this._undoModel
            .selection()
            .canBeAddedToSelection(this._dataSource);
        }
        setAsSelection() {
          this._undoModel.model().selectionMacro((e) => {
            e.clearSelection(), e.addSourceToSelection(this._dataSource);
          });
        }
        addToSelection() {
          this._undoModel.model().selectionMacro((e) => {
            e.addSourceToSelection(this._dataSource);
          });
        }
        addSourcesToArray(e) {
          return e.push(this._dataSource), e;
        }
        insertSourcesBeforeThis(e) {
          this._insertSources(e, (e) =>
            this._undoModel.insertBefore(e, this._dataSource),
          );
        }
        insertSourcesAfterThis(e) {
          this._insertSources(e, (e) =>
            this._undoModel.insertAfter(e, this._dataSource),
          );
        }
        childrenIds() {
          return new Set();
        }
        hasChildren() {
          return !1;
        }
        pane() {
          return Object(j.ensureNotNull)(
            this._undoModel.model().paneForSource(this._dataSource),
          );
        }
        allowsMovingbetweenPanes() {
          return !Object(ti.isLineTool)(this._dataSource);
        }
        canBeAddedToGroup() {
          return Object(ti.isLineTool)(this._dataSource);
        }
        canInsertBeforeThis(e) {
          return this._canInsertBeforeOrAfter(e);
        }
        canInsertAfterThis(e) {
          return this._canInsertBeforeOrAfter(e);
        }
        detachFromParent() {
          if (Object(ti.isLineTool)(this._dataSource)) {
            const e = this._undoModel.model(),
              t = this._undoModel.lineToolsGroupController(),
              n = e.lineToolsGroupModel().groupForLineTool(this._dataSource);
            null !== n && t.excludeLineToolFromGroup(n, this._dataSource);
          }
        }
        onTitleChanged() {
          const e = this._dataSource.properties().title;
          return e ? e.listeners() : void 0;
        }
        canBeSyncedInLayout() {
          return (
            Object(ti.isLineTool)(this._dataSource) &&
            this._dataSource.isSynchronizable()
          );
        }
        onSyncStateChanged() {
          return this._syncStateChanged;
        }
        setDrawingSyncState(e) {
          if (!this.canBeSyncedInLayout()) return;
          const t = this._dataSource;
          switch (e) {
            case 0:
              if (null === t.linkKey().value()) return;
              this._undoModel.unlinkLines([t]);
              break;
            case 1:
              if (null !== t.linkKey().value()) return;
              this._undoModel.copyToOtherCharts([t]);
          }
        }
        getDrawingSyncState() {
          return this.canBeSyncedInLayout()
            ? null !== this._dataSource.linkKey().value()
              ? 1
              : 0
            : null;
        }
        _linkKeyChanged() {
          this._syncStateChanged.fire(
            Object(j.ensureNotNull)(this.getDrawingSyncState()),
          );
        }
        _canInsertBeforeOrAfter(e) {
          const t = this._undoModel.model();
          if (!fi(this.pane(), e)) return !1;
          if (Object(ti.isLineTool)(this._dataSource)) {
            if (
              null !==
                t.lineToolsGroupModel().groupForLineTool(this._dataSource) &&
              e.some((e) => !e.canBeAddedToGroup())
            )
              return !1;
          }
          return !0;
        }
        _insertSources(e, t) {
          const n = this._undoModel.model(),
            r = this._undoModel.lineToolsGroupController();
          this._undoModel.beginUndoMacro('Insert source(s) after');
          const o = () => {
              e.forEach((e) => e.detachFromParent());
            },
            i = e.reduce((e, t) => t.addSourcesToArray(e), []);
          if (Object(ti.isLineTool)(this._dataSource)) {
            const t = n
              .lineToolsGroupModel()
              .groupForLineTool(this._dataSource);
            null !== t
              ? (Object(j.assert)(!e.some((e) => e.hasChildren())),
                i.forEach((e) => {
                  Object(ti.isLineTool)(e) &&
                    (t.containsLineTool(e) || r.addLineToolToGroup(t, e));
                }))
              : o();
          } else o();
          t(i), this._undoModel.endUndoMacro();
        }
      }
      class bi {
        constructor(e, t) {
          (this._onTitleChanged = new Yo.a()),
            (this._onVisibilityChanged = new Yo.a()),
            (this._onLockChanged = new Yo.a()),
            (this._onIsActualIntervalChanged = new Yo.a()),
            (this._syncStateChanged = new Yo.a()),
            (this._linkKeyChangedBound = this._linkKeyChanged.bind(this)),
            (this._undoModel = e),
            (this._group = t),
            (this._lineTools = t.lineTools()),
            (this._paneId = Object(j.ensureNotNull)(
              e.model().paneForSource(this._lineTools[0]),
            ).id());
          const n = () => {
            this._lineTools.forEach((e) => {
              e
                .properties()
                .visible.listeners()
                .subscribe(this, () => this._onVisibilityChanged.fire()),
                e
                  .properties()
                  .frozen.listeners()
                  .subscribe(this, () => this._onLockChanged.fire()),
                e
                  .onIsActualIntervalChange()
                  .subscribe(this, () =>
                    this._onIsActualIntervalChanged.fire(),
                  );
            }),
              this._lineTools.length > 0 &&
                this._lineTools[0]
                  .linkKey()
                  .subscribe(this._linkKeyChangedBound);
          };
          this._group.onChanged().subscribe(this, (e) => {
            this._unsubscribeFromAllLineTools(),
              (this._lineTools = this._group.lineTools()),
              n(),
              e.lockedChanged && this._onLockChanged.fire(),
              e.visibilityChanged && this._onVisibilityChanged.fire(),
              e.titleChanged && this._onTitleChanged.fire(),
              e.isActualIntervalChanged &&
                this._onIsActualIntervalChanged.fire();
          }),
            n(),
            (this._lastActualZOrder = this.zOrder()),
            (this._lastIsVisible = this.isVisible()),
            (this._lastIsActualInterval = this.isActualInterval()),
            (this._lastIsLocked = this.isLocked());
        }
        destroy() {
          this._unsubscribeFromAllLineTools(),
            this._group.onChanged().unsubscribeAll(this);
        }
        id() {
          return Xo(this._group.id, this._group.instanceId);
        }
        title() {
          return this._group.name();
        }
        gaLabel() {
          return 'Group';
        }
        getIcon() {
          return { type: Io.Svg, content: ai };
        }
        canBeRemoved() {
          return !0;
        }
        canBeHidden() {
          return !0;
        }
        canBeLocked() {
          return !0;
        }
        canBeRenamed() {
          return !0;
        }
        isVisible() {
          return (
            this._group.lineTools().length > 0 &&
              (this._lastIsVisible = 'Invisible' !== this._group.visibility()),
            this._lastIsVisible
          );
        }
        isActualInterval() {
          return (
            this._group.lineTools().length > 0 &&
              (this._lastIsActualInterval = this._group
                .lineTools()
                .some((e) => e.isActualInterval())),
            this._lastIsActualInterval
          );
        }
        onIsActualIntervalChange() {
          return this._onIsActualIntervalChanged;
        }
        isLocked() {
          return (
            this._group.lineTools().length > 0 &&
              (this._lastIsLocked = 'Locked' === this._group.locked()),
            this._lastIsLocked
          );
        }
        onTitleChanged() {
          return this._onTitleChanged;
        }
        onVisibilityChanged() {
          return this._onVisibilityChanged;
        }
        onLockChanged() {
          return this._onLockChanged;
        }
        setVisible(e) {
          this._undoModel
            .lineToolsGroupController()
            .setGroupVisibility(this._group, e);
        }
        setLocked(e) {
          this._undoModel
            .lineToolsGroupController()
            .setGroupLock(this._group, e);
        }
        setName(e) {
          this._undoModel
            .lineToolsGroupController()
            .setGroupName(this._group, e);
        }
        isCopiable() {
          return !1;
        }
        isClonable() {
          return !1;
        }
        zOrder() {
          return (
            this._group.lineTools().length > 0 &&
              (this._lastActualZOrder = this._group.lineTools()[0].zorder()),
            this._lastActualZOrder
          );
        }
        remove() {
          this._undoModel.lineToolsGroupController().removeGroup(this._group);
        }
        canBeAddedToSelection() {
          const e = this._undoModel.model();
          return this._lineTools.every((t) =>
            e.selection().canBeAddedToSelection(t),
          );
        }
        setAsSelection() {
          this._undoModel.model().selectionMacro((e) => {
            e.clearSelection(),
              this._lineTools.forEach((t) => e.addSourceToSelection(t));
          });
        }
        addToSelection() {
          this._undoModel.model().selectionMacro((e) => {
            this._lineTools.forEach((t) => e.addSourceToSelection(t));
          });
        }
        addSourcesToArray(e) {
          return e.push(...this._lineTools), e;
        }
        detachFromParent() {}
        insertSourcesBeforeThis(e) {
          const t = this._insertBeforeTarget();
          this._insertSources(e, (e) => this._undoModel.insertBefore(e, t));
        }
        insertSourcesAfterThis(e) {
          const t = this._insertAfterTarget();
          this._insertSources(e, (e) => this._undoModel.insertAfter(e, t));
        }
        childrenIds() {
          const e = [...this._lineTools];
          return (
            e.sort((e, t) => t.zorder() - e.zorder()),
            new Set(e.map((e) => e.id()))
          );
        }
        hasChildren() {
          return !0;
        }
        pane() {
          return Object(j.ensureDefined)(
            this._undoModel
              .model()
              .panes()
              .find((e) => e.id() === this._paneId),
          );
        }
        allowsMovingbetweenPanes() {
          return !1;
        }
        canBeAddedToGroup() {
          return !1;
        }
        canInsertBeforeThis(e) {
          return this._canInsertBeforeOrAfter(e);
        }
        canInsertAfterThis(e) {
          return this._canInsertBeforeOrAfter(e);
        }
        canBeSyncedInLayout() {
          return (
            this._lineTools.length > 0 && this._lineTools[0].isSynchronizable()
          );
        }
        onSyncStateChanged() {
          return this._syncStateChanged;
        }
        setDrawingSyncState(e) {
          if (!this.canBeSyncedInLayout()) return;
          const t = this._lineTools[0];
          switch (e) {
            case 0:
              if (null === t.linkKey().value()) return;
              this._undoModel.unlinkLines([t]);
              break;
            case 1:
              if (null !== t.linkKey().value()) return;
              this._undoModel.copyToOtherCharts([t]);
          }
        }
        getDrawingSyncState() {
          if (!this.canBeSyncedInLayout()) return null;
          return null !== this._lineTools[0].linkKey().value() ? 1 : 0;
        }
        _linkKeyChanged() {
          this._syncStateChanged.fire(
            Object(j.ensureNotNull)(this.getDrawingSyncState()),
          );
        }
        _canInsertBeforeOrAfter(e) {
          return fi(this.pane(), e);
        }
        _insertSources(e, t) {
          this._undoModel.beginUndoMacro('Insert source(s) after');
          const n = e.reduce((e, t) => t.addSourcesToArray(e), []);
          e.forEach((e) => e.detachFromParent()),
            t(n),
            this._undoModel.endUndoMacro();
        }
        _insertBeforeTarget() {
          return Object(j.ensureNotNull)(
            this._lineTools.reduce(
              (e, t) => (null === e ? t : e.zorder() < t.zorder() ? e : t),
              null,
            ),
          );
        }
        _insertAfterTarget() {
          return Object(j.ensureNotNull)(
            this._lineTools.reduce(
              (e, t) => (null === e ? t : e.zorder() > t.zorder() ? e : t),
              null,
            ),
          );
        }
        _unsubscribeFromAllLineTools() {
          this._lineTools.forEach((e) => {
            e.properties().visible.listeners().unsubscribeAll(this),
              e.properties().frozen.listeners().unsubscribeAll(this),
              e.onIsActualIntervalChange().unsubscribeAll(this);
          }),
            this._lineTools.length > 0 &&
              this._lineTools[0]
                .linkKey()
                .unsubscribe(this._linkKeyChangedBound);
        }
      }
      class mi {
        constructor(e) {
          (this._hoveredObjectChanged = new Yo.a()),
            (this._entitiesCache = new Map()),
            (this._undoModel = e),
            this._undoModel
              .model()
              .hoveredSourceChanged()
              .subscribe(this, this._onModelHoveredSourceChanged);
        }
        destroy() {
          for (const e of this._entitiesCache.values())
            null == e || e.destroy();
        }
        getObjectById(e) {
          if (this._entitiesCache.has(e))
            return Object(j.ensureDefined)(this._entitiesCache.get(e));
          const t = this._createObjectById(e);
          return this._entitiesCache.set(e, t), t;
        }
        invalidateCache(e) {
          Array.from(this._entitiesCache.keys()).forEach((t) => {
            var n;
            e.has(t) ||
              (null === (n = this._entitiesCache.get(t)) ||
                void 0 === n ||
                n.destroy(),
              this._entitiesCache.delete(t));
          });
        }
        canBeGroupped(e) {
          if (0 === e.length || (1 === e.length && e[0].hasChildren()))
            return !1;
          const t = [];
          if (
            (e.forEach((e) => e.addSourcesToArray(t)),
            t.some((e) => !Object(ti.isLineTool)(e)))
          )
            return !1;
          const n = this._undoModel.model(),
            r = t.map((e) => n.paneForSource(e));
          return new Set(r).size < 2;
        }
        contextMenuActions(e, t, n) {
          const r = new oi.ActionsProvider(e, n),
            o = [];
          return (
            t.forEach((e) => e.addSourcesToArray(o)),
            r.contextMenuActionsForSources(o)
          );
        }
        insertBefore(e, t) {
          t.insertSourcesAfterThis(e);
        }
        insertAfter(e, t) {
          t.insertSourcesBeforeThis(e);
        }
        setHoveredObject(e) {
          const t = this._undoModel.model();
          if (null === e) return void t.setHoveredSource(null, null);
          const n = t.dataSourceForId(e);
          null !== n && t.setHoveredSource(n, null);
        }
        hoveredObjectId() {
          return pi(this._undoModel.model().hoveredSource());
        }
        hoveredObjectChanged() {
          return this._hoveredObjectChanged;
        }
        _onModelHoveredSourceChanged(e) {
          this._hoveredObjectChanged.fire(pi(e));
        }
        _createObjectById(e) {
          const t = (function (e) {
              return 2 === e.split(':').length;
            })(e)
              ? (function (e) {
                  const t = e.split(':');
                  return { persistentId: t[0], instanceId: t[1] };
                })(e).persistentId
              : e,
            n = this._undoModel.model(),
            r = n.dataSourceForId(t);
          if (null !== r) return new vi(this._undoModel, r);
          const o = n.lineToolsGroupModel().groupForId(t);
          return null !== o ? new bi(this._undoModel, o) : null;
        }
      }
      var yi = n('7ktv'),
        Oi = n('7KDR'),
        Si = n('zRdu'),
        wi = n('hY0g'),
        _i = n.n(wi),
        Ci = n('fs3R'),
        Ti = n('qckB'),
        Ei = n('dmHa'),
        ji = n('ffaL'),
        Di = n('GjMU'),
        Ii = n('aVjL');
      const ki = Object(u.getLogger)('Platform.GUI.ObjectTree');
      function Mi(e) {
        return e instanceof yi.PriceDataSource;
      }
      class xi {
        constructor(e) {
          (this._nodes = {}),
            (this._onChange = new Yo.a()),
            (this._onGroupCreated = new Yo.a()),
            (this._subscriptions = []),
            (this._removeSourcesPromise = null),
            (this._timeout = null),
            (this._objects = []),
            (this._options = {
              general: !0,
              mainSeries: !0,
              mainSeriesTrade: !0,
              esdStudies: !0,
              fundamentals: !0,
              studies: !0,
              lineTools: !0,
              publishedCharts: !0,
              ordersAndPositions: !0,
              alerts: !1,
              chartEvents: !0,
              objectTree: !1,
              gotoLineTool: !0,
            }),
            (this._isContextMenuOpened = new _i.a(!1)),
            (this._getObjectsToModify = (e) => {
              const t = this.selection().selected();
              return t.find((t) => t === e)
                ? t.map(this._ensuredEntity)
                : [this._ensuredEntity(e)];
            }),
            (this._onActiveChartChanged = () => {
              this._cleanup(), this._init();
            }),
            (this._cleanup = () => {
              null !== this._timeout &&
                (clearTimeout(this._timeout), (this._timeout = null)),
                this._subscriptions.forEach((e) => {
                  e.unsubscribeAll(this);
                }),
                this._selection.destroy(),
                this._chart.unsubscribe(this._onActiveChartChanged),
                null !== this._removeSourcesPromise &&
                  this._removeSourcesPromise.cancel(),
                this._facade.destroy();
            }),
            (this._init = () => {
              (this._controller = this._chart.value().model()),
                (this._groupController = this._controller.lineToolsGroupController()),
                (this._model = this._controller.model()),
                (this._groupModel = this._model.lineToolsGroupModel()),
                (this._facade = new mi(this._controller)),
                (this._subscriptions = [
                  this._model.mainSeries().onStyleChanged(),
                  this._model.mainSeries().dataEvents().symbolResolved(),
                  this._model.mainSeries().onIntervalChanged(),
                  this._model.panesCollectionChanged(),
                  this._model.dataSourceCollectionChanged(),
                  this._groupModel.onChanged(),
                ]),
                this._subscriptions.forEach((e) => {
                  e.subscribe(this, this._update);
                }),
                this._chart.subscribe(this._onActiveChartChanged),
                (this._selection = new Qo(this._model)),
                this._update();
            }),
            (this._update = () => {
              null === this._timeout &&
                (this._timeout = setTimeout(() => {
                  this._recalculateTree(),
                    this._onChange.fire(),
                    (this._timeout = null);
                }));
            }),
            (this._ensuredEntity = (e) =>
              Object(j.ensureNotNull)(this._getEntityById(e))),
            (this._chart = e),
            this._init();
        }
        destroy() {
          this._cleanup();
        }
        getState() {
          return {
            nodes: Object.values(this._nodes),
            selection: this._selection.selected(),
          };
        }
        getChartId() {
          return this._chart.value().id();
        }
        insertSelection(e, t) {
          const n = this._facade,
            r = this.selection().selected().map(this._ensuredEntity),
            [o, i] = this._normalizeTargetAndDropType(e, t);
          this._controller.withMacro(Object(y.t)('Move objects'), () => {
            switch (i) {
              case 'before':
                n.insertBefore(r, o);
                break;
              case 'after':
                n.insertAfter(r, o);
            }
          }),
            this._update();
        }
        entity(e) {
          return this._facade.getObjectById(e);
        }
        isMain(e) {
          return e.id() === this._controller.mainSeries().id();
        }
        selection() {
          return this._selection;
        }
        setIsLocked(e, t) {
          const n = this._getObjectsToModify(e),
            r =
              (t ? Object(y.t)('Lock') : Object(y.t)('Unlock')) +
              ' ' +
              Object(y.t)('objects');
          this._controller.withMacro(r, () => {
            for (const e of n) e.setLocked(t);
          }),
            fo('Lock', po(n));
        }
        setIsVisible(e, t) {
          const n = this._getObjectsToModify(e),
            r =
              (t ? Object(y.t)('Show') : Object(y.t)('Hide')) +
              ' ' +
              Object(y.t)('objects');
          this._controller.withMacro(r, () => {
            for (const e of n) e.setVisible(t);
          }),
            fo('Hide', po(n));
        }
        remove(e) {
          const t = () => {
              this._controller.withMacro(Object(y.t)('Remove objects'), () => {
                for (const e of n) e.remove();
              }),
                fo('Delete', po(n)),
                this._update();
            },
            n = this._getObjectsToModify(e);
          t();
        }
        canSelectionBeGrouped() {
          const e = this._getSelectedEntities();
          return this._facade.canBeGroupped(e);
        }
        createGroupFromSelection() {
          const e = this._groupController.createGroupFromSelection();
          fo('Create Group');
          const t = Xo(e.id, e.instanceId);
          this.selection().set([this._ensuredEntity(t)]),
            this._onGroupCreated.fire(t),
            this._update();
        }
        isSelectionDropable(e, t) {
          const n = this.selection().selected().map(this._ensuredEntity),
            [r, o] = this._normalizeTargetAndDropType(e, t);
          switch (o) {
            case 'after':
              return r.canInsertAfterThis(n);
            case 'before':
              return r.canInsertBeforeThis(n);
          }
        }
        onChange() {
          return this._onChange;
        }
        onGroupCreated() {
          return this._onGroupCreated;
        }
        isSelectionCloneable() {
          const e = this._getSelectedEntities();
          return e.length > 0 && e.every((e) => e.isClonable());
        }
        isSelectionCopiable() {
          const e = this._getSelectedEntities();
          return e.length > 0 && e.every((e) => e.isCopiable());
        }
        openProperties(e) {
          const t = this._model.dataSourceForId(e.id());
          this.selection().set([e]),
            null !== t &&
              (this._controller.mainSeries() === t
                ? this._chart.value().showGeneralChartProperties()
                : (Object(ti.isLineTool)(t) || Object(ni.isStudy)(t)) &&
                  this._chart.value().showChartPropertiesForSource(t));
        }
        canSelectionBeUnmerged() {
          const e = this._getSelectedEntities();
          return 1 === e.length && this.canNodeWithIdBeUnmerged(e[0].id());
        }
        canNodeWithIdBeUnmerged(e) {
          const t = this._model.dataSourceForId(e);
          return (
            null !== t && Mi(t) && this._model.isUnmergeAvailableForSource(t)
          );
        }
        unmergeSelectionUp() {
          this._unmergeSelection(0);
        }
        unmergeSelectionDown() {
          this._unmergeSelection(1);
        }
        copySelection() {
          const e = this._getSelectedEntities(),
            t = e.map((e) =>
              Object(j.ensureNotNull)(this._model.dataSourceForId(e.id())),
            );
          this._chart
            .value()
            .chartWidgetCollection()
            .clipboard.uiRequestCopy(t),
            fo('Copy', po(e));
        }
        cloneSelection() {
          const e = this._getSelectedEntities(),
            t = e.map((e) =>
              Object(j.ensureNotNull)(this._model.dataSourceForId(e.id())),
            );
          t.every(ti.isLineTool) &&
            (this._controller.cloneLineTools([...t], !1), fo('Clone', po(e)));
        }
        rename(e, t) {
          const n = this._getObjectsToModify(e.id());
          1 === n.length &&
            n.some((e) => e.canBeRenamed()) &&
            (t(), fo('Rename', po(n)));
        }
        async openContextMenu(e, t, n) {
          this._objects = this._getObjectsToModify(e.id());
          const r = this._facade.canBeGroupped(this._objects);
          let o;
          if (this._objects.some((e) => e.hasChildren()))
            o = this._getActionsForGroupItem(e, t, r);
          else {
            const e = await this._facade.contextMenuActions(
              this._chart.value(),
              this._objects,
              this._options,
            );
            if (
              ((o = Array.from(e).filter(
                (e, t, n) =>
                  e.type !== Si.a.Separator ||
                  !n[t + 1] ||
                  n[t + 1].type !== Si.a.Separator,
              )),
              1 === this._objects.length && this._objects[0].canBeRenamed())
            ) {
              const e = o.findIndex((e) => 'Copy' === e.id);
              o.splice(
                -1 === e ? o.length : e + 1,
                0,
                this._getRenameAction(t),
              );
            }
            if (r) {
              const e = o.findIndex((e) => 'Clone' === e.id);
              o.splice(-1 === e ? 0 : e, 0, this._getGroupAction());
            }
          }
          o.length > 0 &&
            (this._chart.value().updateActions(),
            So.ContextMenuManager.createMenu(
              o,
              { takeFocus: !0, returnFocus: !0 },
              () => {
                this._isContextMenuOpened.setValue(!1);
              },
            ).then((e) => {
              e.show(n), this._isContextMenuOpened.setValue(!0);
            }));
        }
        setHoveredObject(e) {
          this._facade.setHoveredObject(e);
        }
        hoveredObjectChanged() {
          return this._facade.hoveredObjectChanged();
        }
        getNextNodeIdAfterRemove(e) {
          var t;
          const { nodes: n } = this.getState(),
            r = n.find((t) => t.id === e),
            o = this.entity(e);
          if (!(r && r.parentId && o && o.canBeRemoved())) return null;
          if (
            (null === (t = o.pane().mainDataSource()) || void 0 === t
              ? void 0
              : t.id()) === e &&
            !this.canNodeWithIdBeUnmerged(e)
          ) {
            const e = n.filter((e) => 0 === e.level).map((e) => e.id),
              t = this._takeNextOrPrevElement(e, r.parentId);
            return Object(j.ensureDefined)(n.find((e) => e.id === t))
              .children[0];
          }
          const i = Object(j.ensureDefined)(n.find((e) => e.id === r.parentId))
            .children;
          return 1 === i.length
            ? this.getNextNodeIdAfterRemove(r.parentId)
            : this._takeNextOrPrevElement(i, e);
        }
        isContextMenuOpened() {
          return this._isContextMenuOpened.readonly();
        }
        _takeNextOrPrevElement(e, t) {
          const n = e.indexOf(t);
          return e[n === e.length - 1 ? n - 1 : n + 1];
        }
        _getGroupAction() {
          return new Oi.Action({
            label: Object(y.t)('Create a group of drawings'),
            icon: B,
            onExecute: () => {
              this.createGroupFromSelection();
            },
          });
        }
        _getRenameAction(e) {
          return new Oi.Action({
            label: Object(y.t)('Rename'),
            icon: Di,
            onExecute: () => {
              e(), fo('Context menu rename', po(this._objects));
            },
          });
        }
        _getActionsForGroupItem(e, t, n) {
          const r = [
            new Oi.Action({
              label: e.isLocked() ? Object(y.t)('Unlock') : Object(y.t)('Lock'),
              icon: e.isLocked() ? Ci : Ti,
              onExecute: () => this.setIsLocked(e.id(), !e.isLocked()),
            }),
            new Oi.Action({
              label: e.isVisible() ? Object(y.t)('Hide') : Object(y.t)('Show'),
              icon: e.isVisible() ? Ei : ji,
              onExecute: () => this.setIsVisible(e.id(), !e.isVisible()),
            }),
            new Oi.Action({
              label: Object(y.t)('Remove'),
              icon: Ii,
              onExecute: () => this.remove(e.id()),
              hotkeyHash: pr.isMacKeyboard ? 8 : 46,
            }),
          ];
          return (
            1 === this._objects.length &&
              (r.unshift(new Oi.Separator()),
              r.unshift(this._getRenameAction(t))),
            n &&
              (r.unshift(new Oi.Separator()),
              r.unshift(this._getGroupAction())),
            r
          );
        }
        _unmergeSelection(e) {
          const t = this._getSelectedEntities();
          if (1 !== t.length)
            throw new Error('Only one object can be unmerged');
          const n = t[0],
            r = Object(j.ensureNotNull)(this._model.dataSourceForId(n.id()));
          if (!Mi(r)) throw new Error('Entity is not IPriceDataSource');
          (0 === e
            ? this._controller.unmergeSourceUp
            : this._controller.unmergeSourceDown
          ).call(this._controller, r);
          fo(0 === e ? 'New pane above' : 'New pane below', po([n]));
        }
        _recalculateTree() {
          const e = new $o(this._controller, this._facade);
          this._nodes = e.buildTree();
        }
        _normalizeTargetAndDropType(e, t) {
          let n = this._ensuredEntity(e);
          return (
            'inside' === t &&
              ((t = 'before'),
              (n = Object(j.ensureNotNull)(
                this.entity([...n.childrenIds()].shift() || ''),
              ))),
            [n, t]
          );
        }
        _getSelectedEntities() {
          const { selected: e, removed: t } = this._selection.selected().reduce(
            (e, t) => {
              const n = this._getEntityById(t);
              return n ? (e.selected.push(n), e) : (e.removed.push(t), e);
            },
            { selected: [], removed: [] },
          );
          return (
            t.length &&
              ki.logWarn(
                'Detected dangling sources in selection. They will be ignored: ' +
                  JSON.stringify(t),
              ),
            e
          );
        }
        _getEntityById(e) {
          return this._facade.getObjectById(e);
        }
      }
      var Ni = n('sQaR');
      n.d(t, 'ObjectTreeDialogRenderer', function () {
        return Pi;
      });
      class Pi extends Ni.a {
        constructor() {
          super(),
            (this._handleClose = () => {
              s.unmountComponentAtNode(this._container),
                this._setVisibility(!1),
                null !== this._viewModel &&
                  (this._viewModel.destroy(), (this._viewModel = null));
            });
          const e = Object(Ko.service)(Wo.CHART_WIDGET_COLLECTION_SERVICE);
          (this._activeChartWidget = e.activeChartWidget.value()),
            (this._viewModel = new xi(e.activeChartWidget));
        }
        hide() {
          this._handleClose();
        }
        isVisible() {
          return this.visible().value();
        }
        show() {
          g().then(() => {
            null !== this._viewModel &&
              (s.render(
                o.createElement(Go, {
                  onClose: this._handleClose,
                  viewModel: this._viewModel,
                  activeChartWidget: this._activeChartWidget,
                }),
                this._container,
              ),
              this._setVisibility(!0));
          });
        }
      }
    },
    yY3h: function (e, t, n) {
      'use strict';
      (function (e) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.makeRequestCallFromTimer = o),
          (t.makeRequestCallFromMutationObserver = i),
          (t.makeRequestCall = void 0);
        const n = void 0 !== e ? e : self,
          r = n.MutationObserver || n.WebKitMutationObserver;
        function o(e) {
          return function () {
            const t = setTimeout(r, 0),
              n = setInterval(r, 50);
            function r() {
              clearTimeout(t), clearInterval(n), e();
            }
          };
        }
        function i(e) {
          let t = 1;
          const n = new r(e),
            o = document.createTextNode('');
          return (
            n.observe(o, { characterData: !0 }),
            function () {
              (t = -t), (o.data = t);
            }
          );
        }
        const s = 'function' == typeof r ? i : o;
        t.makeRequestCall = s;
      }.call(this, n('yLpj')));
    },
    zn4F: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.448 10.124a10.82 10.82 0 0 1-.336-.609L2.105 9.5l.007-.015a12.159 12.159 0 0 1 1.686-2.466C5.002 5.665 6.752 4.373 9.05 4.373c2.297 0 4.047 1.292 5.25 2.646a12.166 12.166 0 0 1 1.687 2.466l.007.015-.007.015a12.163 12.163 0 0 1-1.686 2.466c-1.204 1.354-2.954 2.646-5.251 2.646-2.298 0-4.048-1.292-5.252-2.646a12.16 12.16 0 0 1-1.35-1.857zm14.558-.827l-.456.203.456.203v.002l-.003.005-.006.015-.025.052a11.813 11.813 0 0 1-.461.857 13.163 13.163 0 0 1-1.463 2.011c-1.296 1.46-3.296 2.982-5.998 2.982-2.703 0-4.703-1.522-6-2.982a13.162 13.162 0 0 1-1.83-2.677 7.883 7.883 0 0 1-.118-.243l-.007-.015-.002-.005v-.001l.456-.204-.456-.203v-.002l.002-.005.007-.015a4.66 4.66 0 0 1 .119-.243 13.158 13.158 0 0 1 1.83-2.677c1.296-1.46 3.296-2.982 5.999-2.982 2.702 0 4.702 1.522 5.998 2.981a13.158 13.158 0 0 1 1.83 2.678 8.097 8.097 0 0 1 .119.243l.006.015.003.005v.001zm-.456.203l.456-.203.09.203-.09.203-.456-.203zM1.092 9.297l.457.203-.457.203-.09-.203.09-.203zm9.958.203c0 1.164-.917 2.07-2 2.07-1.084 0-2-.906-2-2.07 0-1.164.916-2.07 2-2.07 1.083 0 2 .906 2 2.07zm1 0c0 1.695-1.344 3.07-3 3.07-1.657 0-3-1.375-3-3.07 0-1.695 1.343-3.07 3-3.07 1.656 0 3 1.375 3 3.07z"/></svg>';
    },
    zztK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>';
    },
  },
]);
