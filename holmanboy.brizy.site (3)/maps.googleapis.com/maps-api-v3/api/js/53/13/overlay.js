google.maps.__gjsload__('overlay', function(_) {
    var Py = function(a) {
            this.g = a
        },
        Roa = function() {},
        Qy = function(a) {
            a.Rq = a.Rq || new Roa;
            return a.Rq
        },
        Soa = function(a) {
            this.Ca = new _.Ri(function() {
                var b = a.Rq;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.mp && a.onAdd) a.onAdd();
                        b.mp = !0;
                        a.draw()
                    }
                } else {
                    if (b.mp)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.mp = !1
                }
            }, 0)
        },
        Toa = function(a, b) {
            function c() {
                return _.Si(e.Ca)
            }
            var d = Qy(a),
                e = d.co;
            e || (e = d.co = new Soa(a));
            _.pb(d.Oa || [], _.mf);
            var f = d.Xa = d.Xa || new _.sw,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Qv = d.Qv || new Py(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Oa = [_.M(a, "panes_changed", c), _.M(g, "zoom_changed", c), _.M(g, "offset_changed", c), _.M(b, "projection_changed", c), _.M(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.Ff ? (_.Q(b, "Ox"), _.P(b, 148440)) : b instanceof _.mh && (_.Q(b, "Oxs"), _.P(b, 181451))
        },
        Xoa = function(a) {
            if (a) {
                var b = a.getMap();
                if (Uoa(a) !== b && b && b instanceof _.Ff) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Voa(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.ha;
                        var e = new Ry(b, d);
                        d.wb(e);
                        c.overlayLayer = e;
                        Woa(a);
                        Xoa(a)
                    })
                }
            }
        },
        Woa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Hd(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Uoa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Voa = function(a, b, c) {
            this.map = a;
            this.g =
                b;
            this.j = c;
            this.h = !1;
            _.Q(this.map, "Ox");
            _.P(this.map, 148440);
            c.qd(this)
        },
        Yoa = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        Ry = function(a, b) {
            this.o = a;
            this.j = b;
            this.g = null;
            this.h = []
        };
    _.Va(Py, _.O);
    Py.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.ae(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var Sy = {};
    _.Va(Soa, _.O);
    Sy.qd = function(a) {
        if (a) {
            var b = a.getMap();
            (Qy(a).yv || null) !== b && (b && Toa(a, b), Qy(a).yv = b)
        }
    };
    Sy.Hd = function(a) {
        var b = Qy(a),
            c = b.Xa;
        c && c.unbindAll();
        (c = b.Qv) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Oa && _.pb(b.Oa, _.mf);
        b.Oa = null;
        b.co && (b.co.Ca.wc(), b.co = null);
        delete Qy(a).yv
    };
    var Ty = {};
    Voa.prototype.draw = function() {
        this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    Ry.prototype.dispose = function() {};
    Ry.prototype.Kb = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.lr(this.o, this.j, function() {});
        k.Kb(a, b, c, d, e, f, g, h);
        a = _.A(this.h);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Yoa(b, k), b.draw()
    };
    Ry.prototype.qd = function(a) {
        this.h.push(a);
        this.g && Yoa(a, this.g);
        this.j.refresh()
    };
    Ry.prototype.Hd = function(a) {
        _.sb(this.h, a)
    };
    Ty.qd = Xoa;
    Ty.Hd = Woa;
    _.cf("overlay", {
        Ls: function(a) {
            if (a) {
                (0, Sy.Hd)(a);
                (0, Ty.Hd)(a);
                var b = a.getMap();
                b && (b instanceof _.Ff ? (0, Ty.qd)(a) : (0, Sy.qd)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Or(a, {
                Bd: function(b) {
                    _.on(b.event.Fa)
                },
                xc: function(b) {
                    return _.sr(b)
                },
                Mh: function(b) {
                    return _.tr(b)
                },
                gd: function(b) {
                    return _.tr(b)
                },
                Fc: function(b) {
                    return _.vr(b)
                }
            }).aj(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.hf);
            a.addEventListener("contextmenu", _.hf);
            a.addEventListener("dblclick", _.hf);
            a.addEventListener("mousedown",
                _.hf);
            a.addEventListener("mousemove", _.hf);
            a.addEventListener("MSPointerDown", _.hf);
            a.addEventListener("pointerdown", _.hf);
            a.addEventListener("touchstart", _.hf);
            a.addEventListener("wheel", _.hf)
        }
    });
});