(window.webpackJsonp = window.webpackJsonp || []).push([
  ['share-chart-to-social-utils'],
  {
    E5mD: function (t, n, o) {
      'use strict';
      var e;
      o.r(n),
        o.d(n, 'Twitter', function () {
          return e;
        }),
        (function (t) {
          function n(t, n) {
            return 'cme' === TradingView.widgetCustomer
              ? n + ' from cmegroup.com via @tradingview $' + t
              : `Check out my #${t} analysis on @TradingView: ${n}`;
          }
          function o(t = 'about:blank', n = 'snapshot_tweet') {
            const o = Math.round(screen.width / 2 - 275),
              e = Math.round(screen.height / 2 - 210);
            return window.open(
              t,
              n,
              `scrollbars=yes,resizable=yes,toolbar=no,location=yes,\n\t\t\t\twidth=550,height=420,\n\t\t\t\tleft=${o},top=${e}`,
            );
          }
          (t.getStatus = n),
            (t.shareSnapshot = function (t) {
              const e = o();
              return {
                onFailure: () => {
                  e.close();
                },
                onSuccess: (o) => {
                  e.location.href = (function (t, o) {
                    return (
                      'https://twitter.com/intent/tweet?&text=' +
                      encodeURIComponent(
                        n(
                          t,
                          (function (t) {
                            return (
                              window.location.protocol +
                              '//' +
                              window.location.host +
                              '/x/' +
                              t +
                              '/'
                            );
                          })(o),
                        ),
                      )
                    );
                  })(t, o);
                },
              };
            }),
            (t.shareSnapshotInstantly = function (t, e) {
              o(
                (function (t, o) {
                  return (
                    'https://twitter.com/intent/tweet?&text=' +
                    encodeURIComponent(n(t, o))
                  );
                })(t, e),
              );
            });
        })(e || (e = {}));
    },
  },
]);
