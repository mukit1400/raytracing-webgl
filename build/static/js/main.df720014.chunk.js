;(this['webpackJsonpuse-r3f-assets'] = this['webpackJsonpuse-r3f-assets'] || []).push([
  [0],
  {
    72: function (e, t, a) {
      e.exports = a(95)
    },
    90: function (e, t, a) {},
    95: function (e, t, a) {
      'use strict'
      a.r(t)
      var r = a(31),
        n = a(1),
        i = a.n(n),
        s = a(8),
        c = a(19),
        o = a(67),
        l = a(16),
        u = a(9),
        h = a(21),
        f = a(0)
      var m = function () {
        var e = Object(n.useRef)(),
          t = Object(s.h)().viewport,
          a = Object(n.useMemo)(function () {
            return [new f.Euler(0, 0, 0), new f.Quaternion(0, 0, 0, 0)]
          }, []),
          r = Object(u.a)(a, 2),
          i = r[0],
          c = r[1]
        return (
          Object(s.e)(function (a) {
            var r = a.mouse
            if (e.current) {
              var n = (r.x * t.width) / 100,
                s = (r.y * t.height) / 100
              i.set(s, n, 0), c.setFromEuler(i), e.current.quaternion.slerp(c, 0.1)
            }
          }),
          e
        )
      }
      var p = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0],
            t = Object(n.useRef)()
          return (
            Object(n.useEffect)(function () {
              t.current.layers.disableAll(),
                e.sort().forEach(function (e) {
                  t.current.layers.enable(e)
                })
            }),
            t
          )
        },
        x = a(36)
      var y = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = Object(n.useMemo)(
            function () {
              var t = { format: f.RGBAFormat, generateMipmaps: !0 }
              return new f.WebGLCubeRenderTarget(1024, Object(x.a)(Object(x.a)({}, t), e))
            },
            [e]
          ),
          a = Object(n.useRef)()
        return (
          Object(s.e)(function (e) {
            var t = e.gl,
              r = e.scene
            a.current && a.current.update(t, r)
          }),
          [a, t]
        )
      }
      function v(e, t, a, r) {
        ;(this._filmThickness = e || 500),
          (this._refractiveIndexFilm = t || 2),
          (this._refractiveIndexBase = a || 3),
          (this._size = r || 128),
          (this._data = new Uint8Array(4 * this._size)),
          this._updateData(),
          f.DataTexture.call(
            this,
            this._data,
            this._size,
            1,
            f.RGBAFormat,
            f.UnsignedByteType,
            f.UVMapping,
            f.RepeatWrapping,
            f.RepeatWrapping,
            f.LinearFilter,
            f.LinearMipMapLinearFilter
          ),
          (this.generateMipmaps = !0),
          (this.needsUpdate = !0)
      }
      ;(v.prototype = Object.create(f.DataTexture.prototype, {
        filmThickness: {
          get: function () {
            return this._filmThickness
          },
          set: function (e) {
            ;(this._filmThickness = e),
              this.updateSettings(this._filmThickness, this._refractiveIndexFilm, this._refractiveIndexBase)
          }
        },
        refractiveIndexFilm: {
          get: function () {
            return this._refractiveIndexFilm
          },
          set: function (e) {
            ;(this._refractiveIndexFilm = e),
              this.updateSettings(this._filmThickness, this._refractiveIndexFilm, this._refractiveIndexBase)
          }
        },
        refractiveIndexBase: {
          get: function () {
            return this._refractiveIndexBase
          },
          set: function (e) {
            ;(this._refractiveIndexBase = e),
              this.updateSettings(this._filmThickness, this._refractiveIndexFilm, this._refractiveIndexBase)
          }
        }
      })),
        (v.prototype.updateSettings = function (e, t, a) {
          ;(this._filmThickness = e || 380),
            (this._refractiveIndexFilm = t || 2),
            (this._refractiveIndexBase = a || 3),
            this._updateData()
        }),
        (v.prototype._fresnelRefl = function (e, t, a, r, n, i) {
          var s = 1 - a * a,
            c = e / t
          if (c * c * s > 1) {
            ;(n.x = 1), (n.y = 1)
            var o = c * c
            ;(i.x = 2 * Math.atan((-o * Math.sqrt(s - 1 / o)) / a)), (i.y = 2 * Math.atan(-Math.sqrt(s - 1 / o) / a))
          } else {
            var l = (t * a - e * r) / (t * a + e * r),
              u = (e * a - t * r) / (e * a + t * r)
            ;(i.x = l < 0 ? Math.PI : 0), (i.y = u < 0 ? Math.PI : 0), (n.x = l * l), (n.y = u * u)
          }
        }),
        (v.prototype._updateData = function () {
          var e = this._filmThickness,
            t = this._refractiveIndexFilm,
            a = this._refractiveIndexBase,
            r = this._size
          function n(e) {
            var t = (e - 442) * (e < 442 ? 0.0624 : 0.0374),
              a = (e - 599.8) * (e < 599.8 ? 0.0264 : 0.0323),
              r = (e - 501.1) * (e < 501.1 ? 0.049 : 0.0382)
            return 0.362 * Math.exp(-0.5 * t * t) + 1.056 * Math.exp(-0.5 * a * a) - 0.065 * Math.exp(-0.5 * r * r)
          }
          function i(e) {
            var t = (e - 568.8) * (e < 568.8 ? 0.0213 : 0.0247),
              a = (e - 530.9) * (e < 530.9 ? 0.0613 : 0.0322)
            return 0.821 * Math.exp(-0.5 * t * t) + 0.286 * Math.exp(-0.5 * a * a)
          }
          function s(e) {
            var t = (e - 437) * (e < 437 ? 0.0845 : 0.0278),
              a = (e - 459) * (e < 459 ? 0.0385 : 0.0725)
            return 1.217 * Math.exp(-0.5 * t * t) + 0.681 * Math.exp(-0.5 * a * a)
          }
          for (
            var c = this._data,
              o = new f.Vector2(),
              l = new f.Vector2(),
              u = new f.Vector2(),
              h = new f.Vector2(),
              m = new f.Vector2(),
              p = new f.Vector2(),
              x = new f.Vector2(),
              y = new f.Vector2(),
              v = new f.Vector2(),
              M = new f.Vector2(),
              d = new f.Vector2(),
              g = new f.Vector2(),
              b = 1 / (t * t),
              E = (t * t) / (a * a),
              F = 0;
            F < r;
            ++F
          ) {
            var _ = F / r,
              j = Math.sqrt(1 - b * (1 - _ * _)),
              O = Math.sqrt(1 - E * (1 - j * j)),
              I = 2 * t * e * j,
              w = 2 * Math.PI * I
            this._fresnelRefl(1, t, _, j, h, o),
              (m.x = 1 - h.x),
              (m.y = 1 - h.y),
              (l.x = Math.PI - o.x),
              (l.y = Math.PI - o.y),
              this._fresnelRefl(t, a, j, O, p, u),
              (x.x = Math.sqrt(p.x * h.x)),
              (x.y = Math.sqrt(p.y * h.y)),
              (y.x = Math.sqrt(m.x * m.x)),
              (y.y = Math.sqrt(m.y * m.y)),
              (v.x = (m.x * m.x * p.x) / (1 - p.x * h.x)),
              (v.y = (m.y * m.y * p.y) / (1 - p.y * h.y)),
              (M.x = x.x * x.x),
              (M.y = x.y * x.y),
              (d.x = h.x + v.x),
              (d.y = h.y + v.y),
              (g.x = v.x - y.x),
              (g.y = v.y - y.y)
            for (var k = 0, B = 0, q = 0, R = 0, T = 0, V = 0, A = 0; A < 64; ++A) {
              var P = 380 + (A / 63) * 400,
                C = w / P,
                S = Math.cos(C + u.x + l.x),
                D = Math.cos(C + u.y + l.y),
                L =
                  0.5 *
                  (d.x +
                    ((2 * (x.x * S - M.x)) / (1 - 2 * x.x * S + M.x)) * g.x +
                    (d.y + ((2 * (x.y * D - M.y)) / (1 - 2 * x.y * D + M.y)) * g.y)),
                z = n(P),
                U = i(P),
                G = s(P)
              ;(R += z), (T += U), (V += G), (k += z * L), (B += U * L), (q += G * L)
            }
            var W = 3.2406 * (k /= R) - 1.5372 * (B /= T) - 0.4986 * (q /= V),
              J = -0.9689 * k + 1.8758 * B + 0.0415 * q,
              K = 0.0557 * k - 0.204 * B + 1.057 * q
            ;(W = f.Math.clamp(W, 0, 1)),
              (J = f.Math.clamp(J, 0, 1)),
              (K = f.Math.clamp(K, 0, 1)),
              (W = Math.sqrt(W)),
              (J = Math.sqrt(J)),
              (K = Math.sqrt(K))
            var N = F << 2
            ;(c[N] = Math.floor(255 * W)),
              (c[N + 1] = Math.floor(255 * J)),
              (c[N + 2] = Math.floor(255 * K)),
              (c[N + 3] = 255)
          }
          this.needsUpdate = !0
        })
      var M = {
          mirrors: [
            {
              args: [2.87483173052424, 2.920755196190408, 0.05],
              position: [3.116376203948097, -2.1742814140991196, -7.998859699752443],
              rotation: [1.2536197471688286, -1.6683567077395978, -2.8428053193736256]
            },
            {
              args: [1.799233278635274, 1.9642524560408021, 0.05],
              position: [-3.325473394997085, 3.5307542721423446, -6.530151273151705],
              rotation: [1.3951213133257898, -0.2888432911308304, 0.7178380971731012]
            },
            {
              args: [2.8780801433198553, 2.9065216543855974, 0.05],
              position: [1.2839348832937714, 2.888947614684322, -6.467835086028824],
              rotation: [-1.3341775957580109, 2.8031736269533125, -0.18771283594857274]
            },
            {
              args: [2.2175936863874006, 1.3820832190972703, 0.05],
              position: [4.552400557892, 0.9814639517113943, -5.836395383986279],
              rotation: [-2.3299625953354437, 0.6139693063561498, -0.3902201705507059]
            },
            {
              args: [1.7446126775638997, 2.6211835436253392, 0.05],
              position: [-2.826056860647832, -3.0308788716782042, -5.4685371584057485],
              rotation: [-1.4052581815125296, 3.002812728418492, 2.54202362440499]
            },
            {
              args: [1.139549518339333, 1.8007363020629232, 0.05],
              position: [-0.041834072623521124, -1.351281881742426, -2.40411451302583],
              rotation: [1.284839439661856, -0.310029190116405, -2.107987000676972]
            },
            {
              args: [2.2021865186914007, 2.610358395964105, 0.05],
              position: [-4.154292737578202, -0.349560252979882, -2.489538720961452],
              rotation: [1.4401104979160235, 1.8179123712769851, -2.2157249608220475]
            },
            {
              args: [2.0964670262303393, 1.5750930602784585, 0.05],
              position: [6.571372497652996, -2.6457284555412066, -6.252562745592483],
              rotation: [1.1870955922970219, 0.5335941225301444, 0.4523391139946649]
            },
            {
              args: [1.3270056676441064, 1.5169873297208318, 0.05],
              position: [3.6761316187794724, -4.141729519755186, -4.39063863430271],
              rotation: [-0.7690386626408349, 1.4093151276977962, 2.0252977680762476]
            },
            {
              args: [5.142610544045821, 4.416201863189162, 0.05],
              position: [0.646982562789564, 7.09096733026142, -8.351518200349155],
              rotation: [-0.0692356415822184, 1.918047448701773, 0.5268942683942657]
            }
          ]
        },
        d =
          (Math.PI,
          Math.PI,
          Math.PI,
          Math.PI,
          { fontSize: 2.5, font: 'https://fonts.gstatic.com/s/syncopate/v12/pe0pMIuPIYBCpEV5eFdKvtKqBP5p.woff' })
      function g(e) {
        var t = e.layers,
          a = Object(h.a)(e, ['layers']),
          r = Object(n.useRef)()
        Object(n.useEffect)(function () {
          r.current.lookAt(0, 0, 0)
        }, [])
        var s = p(t)
        return i.a.createElement(
          'group',
          Object.assign({}, a, { ref: r }),
          i.a.createElement(
            c.e,
            Object.assign(
              { ref: s, name: 'text-panna', depthTest: !1, 'material-toneMapped': !1, 'material-color': '#FFFFFF' },
              d
            ),
            'MIR REZA'
          )
        )
      }
      function b(e) {
        var t = e.sideMaterial,
          a = e.reflectionMaterial,
          r = e.args,
          n = e.layers,
          o = Object(h.a)(e, ['sideMaterial', 'reflectionMaterial', 'args', 'layers']),
          l = p(n)
        return (
          Object(s.e)(function () {
            l.current && ((l.current.rotation.y += 0.001), (l.current.rotation.z += 0.01))
          }),
          i.a.createElement(c.a, Object.assign({}, o, { ref: l, args: r, material: [t, t, t, t, a, a] }))
        )
      }
      function E(e) {
        var t = e.envMap,
          a = e.layers,
          r = Object(h.a)(e, ['envMap', 'layers']),
          c = Object(n.useState)(new v()),
          o = Object(u.a)(c, 1)[0],
          l = Object(s.g)(),
          f = Object(s.g)()
        return i.a.createElement(
          'group',
          Object.assign({ name: 'mirrors' }, r),
          i.a.createElement('meshLambertMaterial', { ref: l, map: o, color: '#AAAAAA' }),
          i.a.createElement('meshLambertMaterial', { ref: f, map: o, envMap: t, color: '#FFFFFF' }),
          M.mirrors.map(function (e, t) {
            return i.a.createElement(
              b,
              Object.assign({ key: 'mirror-'.concat(t), layers: a }, e, {
                name: 'mirror-'.concat(t),
                sideMaterial: l.current,
                reflectionMaterial: f.current
              })
            )
          })
        )
      }
      function F(e) {
        var t = e.layers,
          a = Object(n.useMemo)(function () {
            return new f.IcosahedronGeometry(10).vertices
          }, [])
        return i.a.createElement(
          'group',
          { name: 'titleCopies' },
          a.map(function (e, a) {
            return i.a.createElement(g, { name: 'titleCopy-' + a, position: e, layers: t })
          })
        )
      }
      var _ = function () {
        var e = y(),
          t = Object(u.a)(e, 2),
          a = t[0],
          r = t[1],
          n = m(),
          s = Object(c.g)('C8D1DC_575B62_818892_6E747B'),
          o = Object(u.a)(s, 1)[0]
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            'group',
            { name: 'sceneContainer', ref: n },
            i.a.createElement(
              c.c,
              { layers: [11], name: 'background', args: [20, 4, 4], position: [0, 0, -5] },
              i.a.createElement('meshMatcapMaterial', {
                matcap: o,
                side: f.BackSide,
                transparent: !0,
                opacity: 0.3,
                color: '#FFFFFF'
              })
            ),
            i.a.createElement('cubeCamera', {
              layers: [11],
              name: 'cubeCamera',
              ref: a,
              args: [0.1, 100, r],
              position: [0, 0, 5]
            }),
            i.a.createElement(g, { name: 'title', position: [0, 0, -10] }),
            i.a.createElement(F, { layers: [11] }),
            i.a.createElement(E, { layers: [0, 11], envMap: r.texture })
          )
        )
      }
      a(96)
      a(90)
      function j() {
        var e = Object(c.h)().progress
        return i.a.createElement(
          c.b,
          { center: !0 },
          i.a.createElement('span', { style: { color: '#FFFFFF' } }, e, ' % loaded')
        )
      }
      function O(e) {
        var t = e.scene,
          a = void 0 === t ? 1 : t
        return i.a.createElement(
          s.a,
          { concurrent: !0, shadowMap: !0, camera: { position: [0, 0, 5], fov: 70 } },
          i.a.createElement('color', { attach: 'background', args: ['#000'] }),
          i.a.createElement(
            n.Suspense,
            { fallback: i.a.createElement(j, null) },
            1 === a && i.a.createElement(_, null)
          ),
          i.a.createElement('ambientLight', { intensity: 0.4 })
        )
      }
      function I() {
        return i.a.createElement(
          o.a,
          null,
          i.a.createElement(
            'main',
            null,
            i.a.createElement('div', { className: 'frame' }),
            i.a.createElement(
              'div',
              { className: 'content' },
              i.a.createElement(
                l.d,
                null,
                i.a.createElement(l.b, { exact: !0, path: '/' }, i.a.createElement(l.a, { to: '/panna' })),
                i.a.createElement(l.b, { exact: !0, path: '/panna' }, i.a.createElement(O, { scene: 1 }))
              )
            )
          )
        )
      }
      Object(r.render)(i.a.createElement(I, null), document.querySelector('#root'))
    }
  },
  [[72, 1, 2]]
])
//# sourceMappingURL=main.df720014.chunk.js.map
