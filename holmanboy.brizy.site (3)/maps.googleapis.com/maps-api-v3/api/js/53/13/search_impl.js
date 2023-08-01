google.maps.__gjsload__('search_impl', function(_) {
    var Ukb = function(a) {
            _.H.call(this, a)
        },
        Wkb = function(a) {
            a = a.toArray();
            Vkb || (Vkb = {
                J: "sssM",
                N: ["ss"]
            });
            return _.qd(a, Vkb, 1)
        },
        Xkb = function(a, b) {
            _.D(a.m, 3, b)
        },
        Ykb = function(a) {
            _.H.call(this, a)
        },
        Zkb = function() {
            var a = _.Lk,
                b = _.Vj;
            this.h = _.Bd;
            this.g = _.Tl(_.Lv, a, _.Aw + "/maps/api/js/LayersService.GetFeature", b)
        },
        blb = function(a, b, c) {
            var d = _.DG(new Zkb);
            c.Fi = (0, _.Ra)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.KGa(c, _.uO(b));
            var e = [];
            e.push(_.M(c, "click", (0, _.Ra)($kb, null, a)));
            _.pb(["mouseover", "mouseout", "mousemove"],
                function(f) {
                    e.push(_.M(c, f, (0, _.Ra)(alb, null, a, f)))
                });
            e.push(_.M(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        $kb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.S(e.m, 2) ? new _.Fe(_.co(_.J(e.m, 2, _.jo).m, 1), _.co(_.J(e.m, 2, _.jo).m, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.m, 3), h = 0; h < g; ++h) {
                    var k = _.hm(e.m, 3, _.AO, h);
                    f.fields[k.getKey()] = k.Ea()
                }
            }
            _.N(a, "click", b, c, d, f)
        },
        alb = function(a, b, c, d, e, f, g) {
            var h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.N(a, b, c, d, e, h, g)
        },
        clb = function() {};
    _.B(Ukb, _.H);
    Ukb.prototype.Mb = function() {
        return _.L(this.m, 2)
    };
    var Vkb;
    _.B(Ykb, _.H);
    Ykb.prototype.getStatus = function() {
        return _.F(this.m, 1, -1)
    };
    Zkb.prototype.load = function(a, b) {
        function c(g) {
            g = new Ykb(g);
            b(g)
        }
        var d = new Ukb;
        _.D(d.m, 1, a.layerId.split("|")[0]);
        _.D(d.m, 2, a.featureId);
        Xkb(d, _.wd(_.zd(this.h)));
        for (var e in a.parameters) {
            var f = _.td(d.m, 4, _.AO);
            _.D(f.m, 1, e);
            _.D(f.m, 2, a.parameters[e])
        }
        a = Wkb(d);
        this.g(a, c, c);
        return a
    };
    Zkb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    clb.prototype.uy = function(a) {
        if (_.fj[15]) {
            var b = a.o,
                c = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.j, b.set(b.get().Lf(a.g))) : a.g && _.fHa(a.g, b) && (_.pb(a.h || [], _.mf), a.h = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("clickableCities"),
                    p = a.get("travelMapRequest"),
                    q = a.get("searchPipeMetadata"),
                    r = a.get("overlayLayer"),
                    t = a.get("caseExperimentIds"),
                    v = a.get("airQualityPipeMetadata"),
                    x = a.get("directionsPipeParameters");
                b = new _.wv;
                d = d.split("|");
                b.layerId = d[0];
                for (var z = 1; z < d.length; ++z) {
                    var y = _.A(d[z].split(":")),
                        G = y.next().value;
                    y = _.na(y);
                    b.parameters[G] = y.join(":")
                }
                e && (b.spotlightDescription = new _.Vt(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.su(g));
                p && (b.travelMapRequest = new _.hv(p));
                h && (b.mapsApiLayer = new _.jm(h));
                l && (b.mapFeatures = l);
                m && (b.clickableCities = m);
                q && (b.searchPipeMetadata = new _.Qp(q));
                r && (b.overlayLayer = new _.Nt(r));
                t && (b.caseExperimentIds = t.slice(0));
                v && (b.airQualityPipeMetadata = new _.Et(v));
                x && (b.directionsPipeParameters = new _.Bt(x));
                b.darkLaunch = !!k;
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = c.__gm.j, a.set(a.get().Td(b))) : blb(a, c, b);
                _.Q(c, "Lg");
                _.P(c, 148282)
            }
        }
    };
    _.cf("search_impl", new clb);
});