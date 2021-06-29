!(function (t, a) {
  var r = 1e4,
    g_moduleConfig = {
      uabModule: {
        grey: ['AWSC/uab/1.140.0/collina.js'],
        stable: ['AWSC/uab/1.140.0/collina.js'],
        greyBr: ['AWSC-br/uab/1.140.0/collina.js'],
        stableBr: ['AWSC-br/uab/1.140.0/collina.js'],
        ratio: 10000,
        greyConfig: {},
        stableConfig: {}
      },
      fyModule: {
        grey: ['AWSC/fireyejs/1.210.1/fireyejs.js'],
        stable: ['AWSC/fireyejs/1.210.1/fireyejs.js'],
        greyBr: ['AWSC-br/fireyejs/1.210.1/fireyejs.js'],
        stableBr: ['AWSC-br/fireyejs/1.210.1/fireyejs.js'],
        ratio: 10000,
        greyConfig: {},
        stableConfig: {}
      },
      nsModule: {
        grey: ['js/nc/60.js'],
        stable: ['js/nc/60.js'],
        ratio: 1e4,
        greyConfig: {},
        stableConfig: {}
      },
      umidPCModule: {
        grey: ['AWSC/WebUMID/1.87.0/um.js'],
        stable: ['AWSC/WebUMID/1.87.0/um.js'],
        greyBr: ['AWSC-br/WebUMID/1.87.0/um.js'],
        stableBr: ['AWSC-br/WebUMID/1.87.0/um.js'],
        ratio: 10000,
        greyConfig: {},
        stableConfig: {}
      },
      etModule: {
        grey: ['AWSC/et/1.62.0/et_f.js', 'AWSC/et/1.62.1/et_n.js'],
        stable: ['AWSC/et/1.62.0/et_f.js', 'AWSC/et/1.62.1/et_n.js'],
        greyBr: ['AWSC-br/et/1.62.0/et_f.js', 'AWSC-br/et/1.62.1/et_n.js'],
        stableBr: ['AWSC-br/et/1.62.0/et_f.js', 'AWSC-br/et/1.62.1/et_n.js'],
        ratio: 10000,
        greyConfig: {
          whitelist: [
            'login.taobao.com/member/login.jhtml',
            'passport.alibaba.com/mini_login.htm',
            'login.taobao.com/member/loginByIm.do',
            'login.taobao.com/member/login_by_safe.htm',
            'login.taobao.com/member/vst.htm',
            'login.taobao.com/member/facebookLogin.do',
            'login.m.taobao.com/login.htm',
            'login.m.taobao.com/sendMsg.do',
            'login.m.taobao.com/msg_login.htm',
            'login.m.taobao.com/login_oversea.htm',
            'login.m.taobao.com/login_oversea_phone.htm',
            'login.m.taobao.com/newlogin/login.do',
            'login.m.taobao.com/newlogin/account/check.do',
            'login.m.taobao.com/newlogin/sms/send.do',
            'login.m.taobao.com/newlogin/sms/login.do',
            'buy.taobao.com/auction/buy_now.jhtml',
            'buy.taobao.com/auction/order/confirm_order.html',
            'buy.tmall.com/order/confirm_order.html',
            'buyertrade.taobao.com/trade/itemlist/list_bought_items.htm',
            'member1.taobao.com/member/fresh/account_security.htm',
            'member1.taobao.com/member/fresh/account_management.htm',
            'member1.taobao.com/member/fresh/weibo_bind_management.htm',
            'member1.taobao.com/member/fresh/deliver_address.htm',
            'h5.m.taobao.com/mlapp/olist.html',
            'h5.m.taobao.com/mlapp/odetail.html',
            'main.m.taobao.com/olist/index.html',
            'main.m.taobao.com/odetail/index.html',
            'h5.m.taobao.com/app/hongbao/www/detail/index.html',
            'market.m.taobao.com/app/dinamic/h5-tb-olist/index.html',
            'market.m.taobao.com/app/dinamic/h5-tb-odetail/index.html',
            'market.m.taobao.com/app/mtb/evaluation-list/pages/index2',
            'h5.m.taobao.com/qn/mobile/delivery.html',
            'h5.m.taobao.com/mlapp/odetail.html',
            'main.m.taobao.com/order/index.html',
            'buy.m.tmall.com/order/confirmOrderWap.htm',
            'h5.m.taobao.com/cart/order.html',
            'h5.m.tmall.hk/cart/order.html'
          ]
        },
        stableConfig: {
          whitelist: [
            'login.taobao.com/member/login.jhtml',
            'passport.alibaba.com/mini_login.htm',
            'login.taobao.com/member/loginByIm.do',
            'login.taobao.com/member/login_by_safe.htm',
            'login.taobao.com/member/vst.htm',
            'login.taobao.com/member/facebookLogin.do',
            'login.m.taobao.com/login.htm',
            'login.m.taobao.com/sendMsg.do',
            'login.m.taobao.com/msg_login.htm',
            'login.m.taobao.com/login_oversea.htm',
            'login.m.taobao.com/login_oversea_phone.htm',
            'login.m.taobao.com/newlogin/login.do',
            'login.m.taobao.com/newlogin/account/check.do',
            'login.m.taobao.com/newlogin/sms/send.do',
            'login.m.taobao.com/newlogin/sms/login.do',
            'buy.taobao.com/auction/buy_now.jhtml',
            'buy.taobao.com/auction/order/confirm_order.html',
            'buy.tmall.com/order/confirm_order.html',
            'buyertrade.taobao.com/trade/itemlist/list_bought_items.htm',
            'member1.taobao.com/member/fresh/account_security.htm',
            'member1.taobao.com/member/fresh/account_management.htm',
            'member1.taobao.com/member/fresh/weibo_bind_management.htm',
            'member1.taobao.com/member/fresh/deliver_address.htm',
            'h5.m.taobao.com/mlapp/olist.html',
            'h5.m.taobao.com/mlapp/odetail.html',
            'main.m.taobao.com/olist/index.html',
            'main.m.taobao.com/odetail/index.html',
            'h5.m.taobao.com/app/hongbao/www/detail/index.html',
            'market.m.taobao.com/app/dinamic/h5-tb-olist/index.html',
            'market.m.taobao.com/app/dinamic/h5-tb-odetail/index.html',
            'market.m.taobao.com/app/mtb/evaluation-list/pages/index2',
            'h5.m.taobao.com/qn/mobile/delivery.html',
            'h5.m.taobao.com/mlapp/odetail.html',
            'main.m.taobao.com/order/index.html',
            'buy.m.tmall.com/order/confirmOrderWap.htm',
            'h5.m.taobao.com/cart/order.html',
            'h5.m.tmall.hk/cart/order.html'
          ]
        }
      },
      ncModule: {
        grey: ['AWSC/nc/1.79.2/nc.js'],
        stable: ['AWSC/nc/1.78.0/nc.js'],
        ratio: 9999,
        greyConfig: {},
        stableConfig: {}
      }
    },
    s = [
      {
        name: 'umidPCModule',
        features: ['umpc', 'um', 'umh5'],
        depends: [],
        sync: !1
      },
      { name: 'uabModule', features: ['uab'], depends: [], sync: !1 },
      { name: 'fyModule', features: ['fy'], depends: [], sync: !1 },
      { name: 'nsModule', features: ['ns'], depends: [], sync: !1 },
      { name: 'etModule', features: ['et'], depends: [], sync: !1 },
      {
        name: 'ncModule',
        features: ['nc', 'nvc', 'ic'],
        depends: ['fy'],
        sync: !1
      }
    ],
    c = navigator.userAgent,
    b = c.match(/Chrome\/(\d*)/)
  b && (b = +b[1])
  var p = c.match(/Edge\/([\d]*)/),
    h = c.match(/Safari\/([\d]*)/),
    y = c.match(/Firefox\/([\d]*)/),
    A = c.match(/MSIE|Trident/)
  function v() {
    var t = 'function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D'
    return 'WebkitAppearance' in document.documentElement.style &&
      escape(navigator.javaEnabled.toString()) === t
      ? !0
      : !1
  }
  function j(a, s) {
    var c = 'AWSC_SPECIFY_' + a.toUpperCase() + '_ADDRESSES'
    if (t[c]) return t[c]
    var j = { normalAddresses: [], brAddresses: [] }
    for (var S in g_moduleConfig)
      if (g_moduleConfig.hasOwnProperty(S) && S === a) {
        var moduleConfig = g_moduleConfig[S],
          W = Math.ceil(Math.random() * r) <= moduleConfig.ratio
        ;(j.normalAddresses = W
          ? moduleConfig.grey.slice()
          : moduleConfig.stable.slice()),
          moduleConfig.stableBr &&
            moduleConfig.greyBr &&
            (j.brAddresses = W
              ? moduleConfig.greyBr.slice()
              : moduleConfig.stableBr.slice()),
          'etModule' === a &&
            (p
              ? (j.normalAddresses.pop(), j.brAddresses.pop())
              : b
              ? (j.normalAddresses.pop(), j.brAddresses.pop())
              : h || y || A
              ? (j.normalAddresses.shift(), j.brAddresses.shift())
              : v()
              ? (j.normalAddresses.pop(), j.brAddresses.pop())
              : (j.normalAddresses.shift(), j.brAddresses.shift()))
        for (var w = 0; w < j.normalAddresses.length; w++) {
          var T = s ? 'https://' + s + '/' : D
          'https://assets.alicdn.com/' === T && (T += 'g/'),
            (j.normalAddresses[w] = T + j.normalAddresses[w]),
            j.brAddresses[w] && (j.brAddresses[w] = T + j.brAddresses[w])
        }
        return j
      }
  }
  var S = [],
    W = 'loading',
    w = 'loaded',
    T = 'timeout',
    k = 'unexpected',
    M = 'no such feature',
    B = new RegExp(
      '^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$'
    ),
    D = F(E())
  function F(t) {
    var a = 'https://g.alicdn.com/'
    if (!t) return a
    if (/aliexpress/.test(location.href)) return 'https://aeis.alicdn.com/'
    var r = B.exec(t)
    return r ? 'https://' + r[3] + (r[4] ? ':' + r[4] : '') + '/' : a
  }
  function E() {
    for (
      var t = document.getElementsByTagName('script'), i = 0;
      i < t.length;
      i++
    ) {
      var a = t[i],
        r = a.hasAttribute ? a.src : a.getAttribute('src', 4)
      if (/\/awsc\.js/.test(r)) return r
    }
  }
  function Y(t) {
    for (var a = void 0, r = 0; r < s.length; r++) {
      for (var c = s[r], b = 0; b < c.features.length; b++)
        if (c.features[b] === t) {
          a = c
          break
        }
      if (a) break
    }
    return a
  }
  function x(t) {
    for (var a = 0; a < S.length; a++) {
      var r = S[a]
      if (r.name === t) return r
    }
  }
  function I(t) {
    for (var a = void 0, r = 0; r < s.length; r++) {
      var c = s[r]
      if (c.name === t) {
        a = c
        break
      }
      if (a) break
    }
    return a
  }
  function U(t, r, s) {
    if (s)
      for (var c = 0; c < t.normalAddresses.length; c++) {
        var b = t.normalAddresses[c]
        a.write('<script src=' + b + '></script>')
      }
    else {
      function p(t, s, c) {
        for (var b = 0; b < t.length; b++) {
          var p = t[b],
            h = a.createElement('script')
          ;(h.async = !1),
            (h.src = p),
            (h.id = r),
            (h.onerror = s || function () {}),
            (h.onload = c || function () {})
          var m = a.getElementsByTagName('script')[0]
          m && m.parentNode
            ? m.parentNode.insertBefore(h, m)
            : ((m = a.body || a.head), m && m.appendChild(h))
        }
      }
      p(t.normalAddresses)
    }
  }
  function O(a, r, s) {
    var c =
        'https://acjs.aliyun.com/error?v=' +
        a +
        '&e=' +
        encodeURIComponent(r) +
        '&stack=' +
        encodeURIComponent(s),
      b = new Image(),
      p = '_awsc_img_' + Math.floor(1e6 * Math.random())
    ;(t[p] = b),
      (b.onload = b.onerror = function () {
        try {
          delete t[p]
        } catch (e) {
          t[p] = null
        }
      }),
      (b.src = c)
  }
  function R(t, a) {
    Math.random() < 1e-4 &&
      O(
        'awsc_state',
        'feature=' +
          t.name +
          '&state=' +
          t.state +
          '&href=' +
          encodeURIComponent(location.href)
      )
    for (var r = void 0; (r = t.callbacks.shift()); )
      try {
        if ('function' == typeof r) r(t.state, t.exportObj)
        else if ('object' == typeof r) {
          var s = t.exportObj
          s && 'function' == typeof s.init && s.init(r)
        }
      } catch (e) {
        if (a) throw e
        O(t.name, e.message, e.stack)
      }
  }
  function N(t, a, r, s) {
    var c = Y(t)
    if (!c) return 'function' == typeof a && a(M), void 0
    var b = r && r.cdn,
      p = r && r.sync,
      h = (r && r.timeout) || 5e3
    if (0 !== c.depends.length)
      for (var y = 0; y < c.depends.length; y++) {
        var A = c.depends[y]
        r && (delete r.sync, delete r.timeout, delete r.cdn), P(A, void 0, r)
      }
    var v = s || {}
    ;(v.module = c),
      (v.name = t),
      (v.state = W),
      (v.callbacks = v.callbacks || []),
      (v.options = r),
      a && v.callbacks.push(a),
      (v.timeoutTimer = setTimeout(function () {
        ;(v.state = T), R(v, r && r.throwExceptionInCallback)
      }, h)),
      s || S.push(v)
    var w = c.sync
    p && (w = p)
    var k = j(c.name, b)
    U(k, 'AWSC_' + c.name, w)
  }
  function P(t, a, r) {
    var s = x(t)
    if (s)
      if (s.state === T) N(t, a, r, s)
      else if (s.state === w) {
        if ('function' == typeof a) a(s.state, s.exportObj)
        else if ('object' == typeof a) {
          var c = s.exportObj
          c && 'function' == typeof c.init && c.init(a)
        }
      } else s.state === W ? a && s.callbacks.push(a) : void 0
    else N(t, a, r)
  }
  function L(t, a, r) {
    var s = !1
    try {
      var c = I(t)
      c || void 0, (c.moduleLoadStatus = w)
      for (var b = void 0, p = 0; p < S.length; p++) {
        var h = S[p]
        h.module === c &&
          h.name === a &&
          ((s = h.options && h.options.throwExceptionInCallback),
          (b = h),
          clearTimeout(b.timeoutTimer),
          delete b.timeoutTimer,
          (b.exportObj = r),
          h.state === W || h.state === T
            ? ((b.state = w),
              setTimeout(function () {
                R(b, s)
              }, 0))
            : void 0)
      }
      b ||
        ((b = {}),
        (b.module = c),
        (b.name = a),
        (b.state = w),
        (b.exportObj = r),
        (b.callbacks = []),
        S.push(b))
    } catch (e) {
      if (s) throw e
      O('awsc_error', e.message, e.stack)
    }
  }
  function $(t) {
    ;(t.AWSCFY = function () {}),
      (t.AWSC.configFY = function (t, r, s, c) {
        return a(t, r, s, c)
      }),
      (t.AWSC.configFYSync = function (t, r) {
        return a(null, t, r)
      })
    function a(a, r, s, c) {
      var b = location.protocol + '//' + location.host + location.pathname,
        p = new t.AWSCFY()
      t._umopt_npfp = 0
      var h = !1
      ;(p.umidToken =
        'defaultToken1_um_not_loaded@@' + b + '@@' + new Date().getTime()),
        t.AWSC.use('um', function (t, a) {
          'loaded' === t
            ? ((p.umidToken =
                'defaultToken3_init_callback_not_called@@' +
                b +
                '@@' +
                new Date().getTime()),
              a.init(r, function (t, a) {
                'success' === t
                  ? (p.umidToken = a.tn)
                  : (p.umidToken =
                      'defaultToken4_init_failed with ' +
                      t +
                      '@@' +
                      b +
                      '@@' +
                      new Date().getTime()),
                  (h = !0),
                  v()
              }))
            : ((p.umidToken =
                'defaultToken2_load_failed with ' +
                t +
                '@@' +
                b +
                '@@' +
                new Date().getTime()),
              (h = !0),
              v())
        })
      var y = !1
      if (
        ((p.getUA = function () {
          return 'defaultUA1_uab_not_loaded@@' + b + '@@' + new Date().getTime()
        }),
        t.AWSC.use('uab', function (t, a) {
          ;(y = !0),
            'loaded' === t
              ? ((p.uabModule = a),
                (p.uabConfig = s),
                (p.getUA = function () {
                  return this.uabModule.getUA(this.uabConfig)
                }))
              : (p.getUA = function () {
                  return (
                    'defaultUA2_load_failed with ' +
                    t +
                    '@@' +
                    b +
                    '@@' +
                    new Date().getTime()
                  )
                }),
            v()
        }),
        null != a)
      )
        var A = t.setTimeout(
          function () {
            v(!0)
          },
          c ? c : 2e3
        )
      function v(r) {
        null != a && ((y && h) || r) && (a(p), t.clearTimeout(A))
      }
      return null == a ? p : void 0
    }
  }
  function z(t) {
    var a = function () {}
    ;(t.AWSC.configFYEx = function (t, a, s) {
      return r(t, a, s)
    }),
      (t.AWSC.configFYSyncEx = function (t) {
        return r(null, t)
      })
    function r(r, s, c) {
      var b = (
          location.protocol +
          '//' +
          location.host +
          location.pathname
        ).substr(0, 128),
        p = new a()
      if (((c = c || 2e3), 'function' == typeof r))
        var h = t.setTimeout(function () {
          y()
        }, c)
      function y() {
        'function' == typeof r && (r(p), t.clearTimeout(h))
      }
      return (
        (p.getFYToken = function () {
          return (
            'defaultFY1_fyjs_not_loaded@@' + b + '@@' + new Date().getTime()
          )
        }),
        (s = s || {}),
        s.timeout ||
          (c >= 2e3 ? (s.timeout = c - 1e3) : (s.timeout = (c / 2) | 0)),
        (t.fyglobalopt = s),
        t.AWSC.use('fy', function (t, a) {
          'loaded' === t
            ? ((p.getFYToken = function () {
                return (
                  'defaultFY3_fyjs_not_initialized@@' +
                  b +
                  '@@' +
                  new Date().getTime()
                )
              }),
              (p.fyObj = a),
              a.init(s, function (t) {
                ;(p.getFYToken = function () {
                  var t = this.fyObj.getFYToken(s)
                  return (
                    t ||
                    'defaultFY4_getFYToken_error@@' +
                      b +
                      '@@' +
                      new Date().getTime()
                  )
                }),
                  y()
              }))
            : ((p.getFYToken = function () {
                return (
                  'defaultFY2_load_failed with ' +
                  t +
                  '@@' +
                  b +
                  '@@' +
                  new Date().getTime()
                )
              }),
              y())
        }),
        'function' == typeof r ? void 0 : p
      )
    }
  }
  function q(t) {
    var moduleConfig = g_moduleConfig.etModule,
      a = Math.ceil(Math.random() * r) <= moduleConfig.ratio,
      s = a
        ? moduleConfig.greyConfig.whitelist
        : moduleConfig.stableConfig.whitelist,
      c = new RegExp(('^' + s.join('$|^') + '$').replace(/\*/g, '.*'))
    c.test(location.host + location.pathname) &&
      ((window.etrprtrt = 0.01), t.AWSC.use('et'))
  }
  function G(t) {
    t.AWSC ||
      ((t.AWSC = {}),
      (t.AWSC.use = P),
      (t.AWSCInner = {}),
      (t.AWSCInner.register = L),
      $(t),
      z(t),
      q(t))
  }
  G(t)
})(window, document)
