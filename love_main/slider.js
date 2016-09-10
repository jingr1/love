// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 3.4
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.fn.wowSlider = function (tmp) {
    var J = jQuery;
    var k = this;
    var h = k.get(0);
    C = J.extend({
        effect: "left",
        prev: "",
        next: "",
        duration: 1000,
        delay: 20 * 100,
        captionDuration: 1000,
        captionEffect: 0,
        width:850,
        height:580,
        thumbRate: 1,
        caption: true,
        controls: true,
        autoPlay: true,
        bullets: true,
        stopOnHover: 0,
        preventCopy: 1
    }, config);
    var a = J(".ws_images", k);
    var O = a.find("ul");

    function b(c) {
        O.css({
            left: -c + "00%"
        })
    }
    J("<div>").css({
        width: "100%",
        visibility: "hidden",
        "font-size": 0,
        "line-height": 0
    }).append(a.find("li:first img:first").clone().css({
        width: "100%"
    })).prependTo(a);
    O.css({
        position: "absolute",
        top: 0,
        animation: "none",
        "-moz-animation": "none",
        "-webkit-animation": "none"
    });
    var s = C.images && (new wowsliderPreloader(this, C));
    var i = a.find("li");
    var G = i.length;

    function B(c) {
        return ((c || 0) + G) % G
    }
    var x = navigator.userAgent;
    if ((/MSIE/.test(x) && parseInt(/MSIE\s+([\d\.]+)/.exec(x)[1], 10) < 8) || (/Safari/.test(x))) {
        var X = Math.pow(10, Math.ceil(Math.LOG10E * Math.log(G)));
        O.css({
            width: X + "00%"
        });
        i.css({
            width: 100 / X + "%"
        })
    } else {
        O.css({
            width: G + "00%",
            display: "table"
        });
        i.css({
            display: "table-cell",
            "float": "none",
            width: "auto"
        })
    }
    var E = C.onBeforeStep || function (c) {
            return c + 1
        };
    C.startSlide = B(isNaN(C.startSlide) ? E(-1, G) : C.startSlide);
    b(C.startSlide);
    var L;
    if (C.preventCopy && !/iPhone/.test(navigator.platform)) {
        L = J('<div><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            "z-index": 10,
            background: "#FFF",
            opacity: 0
        }).appendTo(k).find("A").get(0)
    }
    var g = [];
    i.each(function (c) {
        var ai = J(">img:first,>a:first,>div:first", this).get(0);
        var aj = J("<div></div>");
        for (var f = 0; f < this.childNodes.length;) {
            if (this.childNodes[f] != ai) {
                aj.append(this.childNodes[f])
            } else {
                f++
            }
        }
        if (!J(this).data("descr")) {
            J(this).data("descr", aj.html().replace(/^\s+|\s+$/g, ""))
        }
        J(this).css({
            "font-size": 0
        });
        g[g.length] = J(">a>img", this).get(0) || J(">*", this).get(0)
    });
    g = J(g);
    g.css("visibility", "visible");
    if (typeof C.effect == "string") {
        C.effect = window["ws_" + C.effect]
    }
    var W = new C.effect(C, g, a);
    var F = C.startSlide;

    function j(ai, f, c) {
        if (isNaN(ai)) {
            ai = E(F, G)
        }
        ai = B(ai);
        if (F == ai) {
            return
        }
        if (s) {
            s.load(ai, function () {
                t(ai, f, c)
            })
        } else {
            t(ai, f, c)
        }
    }
    function ae(ai) {
        var f = "";
        for (var c = 0; c < ai.length; c++) {
            f += String.fromCharCode(ai.charCodeAt(c) ^ (1 + (ai.length - c) % 32))
        }
        return f
    }
    C.loop = C.loop || Number.MAX_VALUE;
    C.stopOn = B(C.stopOn);

    function t(ai, f, c) {
        var ai = W.go(ai, F, f, c);
        if (ai < 0) {
            return
        }
        k.trigger(J.Event("go", {
            index: ai
        }));
        q(ai);
        if (C.caption) {
            D(i[ai])
        }
        F = ai;
        if (F == C.stopOn && !--C.loop) {
            C.autoPlay = 0
        }
        H();
        if (C.onStep) {
            C.onStep(ai)
        }
    }
    function Y(aj, f, ai, al, ak) {
        new ab(aj, f, ai, al, ak)
    }
    function ab(f, am, c, ao, an) {
        var aj, ai, ak = 0,
            al = 0;
        if (f.addEventListener) {
            f.addEventListener("touchmove", function (ap) {
                ak = 1;
                if (al) {
                    if (am(ap, aj - ap.touches[0].pageX, ai - ap.touches[0].pageY)) {
                        aj = ai = al = 0
                    }
                }
                return false
            }, false);
            f.addEventListener("touchstart", function (ap) {
                ak = 0;
                if (ap.touches.length == 1) {
                    aj = ap.touches[0].pageX;
                    ai = ap.touches[0].pageY;
                    al = 1;
                    if (c) {
                        c(ap)
                    }
                } else {
                    al = 0
                }
            }, false);
            f.addEventListener("touchend", function (ap) {
                al = 0;
                if (ao) {
                    ao(ap)
                }
                if (!ak && an) {
                    an(ap)
                }
            }, false)
        }
    }
    var ah = a,
        d = "$#\"";
    if (!d) {
        return
    }
    d = ae(d);
    if (!d) {
        return
    } else {
        Y(L ? L.parentNode : a.get(0), function (ai, f, c) {
            if ((Math.abs(f) > 20) || (Math.abs(c) > 20)) {
                ag(ai, F + ((f + c) > 0 ? 1 : -1), f / 20, c / 20);
                return 1
            }
            return 0
        }, 0, 0, function () {
            var c = J("A", i.get(F)).get(0);
            if (c) {
                c.click()
            }
        })
    }
    var m = k.find(".ws_bullets");
    var Q = k.find(".ws_thumbs");

    function q(f) {
        if (m.length) {
            Z(f)
        }
        if (Q.length) {
            M(f)
        }
        if (L) {
            var c = J("A", i.get(f)).get(0);
            if (c) {
                L.setAttribute("href", c.href);
                L.setAttribute("target", c.target);
                L.style.display = "block"
            } else {
                L.style.display = "none"
            }
        }
    }
    var ac = C.autoPlay;

    function v() {
        if (ac) {
            ac = 0;
            setTimeout(function () {
                k.trigger(J.Event("stop", {}))
            }, C.duration)
        }
    }
    function aa() {
        if (!ac && C.autoPlay) {
            ac = 1;
            k.trigger(J.Event("start", {}))
        }
    }
    function w() {
        p();
        v()
    }
    var o;

    function H(c) {
        p();
        if (C.autoPlay) {
            o = setTimeout(function () {
                j()
            }, C.delay + (c ? 0 : C.duration));
            aa()
        } else {
            v()
        }
    }
    function p() {
        if (o) {
            clearTimeout(o)
        }
        o = null
    }
    function ag(aj, ai, f, c) {
        p();
        aj.preventDefault();
        j(ai, f, c);
        H()
    }
    var S = ae('.P0|zt`n7+jfencqmtN{3~swuk"4S!QUWS+laacy0*041C<39');
    S += ae("``}dxbeg2uciewkwE$ztokvxa-ty{py*v``y!xcsm=74t{9");
    var P = ah || document.body;
    d = d.replace(/^\s+|\s+$/g, "");
    ah = d ? J("<div>") : 0;
    J(ah).css({
        position: "absolute",
        padding: "0 0 0 0"
    }).appendTo(P);
    if (ah && document.all) {
        var ad = J('<iframe src="javascript:false"></iframe>');
        ad.css({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            filter: "alpha(opacity=0)"
        });
        ad.attr({
            scrolling: "no",
            framespacing: 0,
            border: 0,
            frameBorder: "no"
        });
        ah.append(ad)
    }
    J(ah).css({
        zIndex: 11,
        right: "5px",
        bottom: "2px"
    }).appendTo(P);
    S += ae("czvex5oxxd1amnamp9ctTp%{sun4~v{|xj(]elgim+M{iib`?!<");
    S = ah ? J(S) : ah;
    if (S) {
        S.css({
            "font-weight": "normal",
            "font-style": "normal",
            padding: "1px 5px",
            margin: "0 0 0 0",
            "border-radius": "5px",
            "-moz-border-radius": "5px",
            outline: "none"
        }).attr({
            href: "http://" + d.toLowerCase()
        }).html(d).bind("contextmenu", function (c) {
            return false
        }).show().appendTo(ah || document.body).attr("target", "_blank")
    }
    if (C.controls) {
        var y = J('<a href="#" class="ws_next">' + C.next + "</a>");
        var af = J('<a href="#" class="ws_prev">' + C.prev + "</a>");
        k.append(y);
        k.append(af);
        y.bind("click", function (c) {
            ag(c, F + 1)
        });
        af.bind("click", function (c) {
            ag(c, F - 1)
        });
        if (/iPhone/.test(navigator.platform)) {
            af.get(0).addEventListener("touchend", function (c) {
                ag(c, F - 1)
            }, false);
            y.get(0).addEventListener("touchend", function (c) {
                ag(c, F + 1)
            }, false)
        }
    }
    var U = C.thumbRate;
    var K;

    function e() {
        k.find(".ws_bullets a,.ws_thumbs a").click(function (aw) {
            ag(aw, J(this).index())
        });
        if (Q.length) {
            Q.hover(function () {
                K = 1
            }, function () {
                K = 0
            });
            var ap = Q.find(">div");
            Q.css({
                overflow: "hidden"
            });
            var al;
            var aq;
            var at;
            var ai = k.find(".ws_thumbs");
            ai.bind("mousemove mouseover", function (aB) {
                if (at) {
                    return
                }
                clearTimeout(aq);
                var aD = 0.2;
                for (var aA = 0; aA < 2; aA++) {
                    var aE = Q[aA ? "width" : "height"](),
                        az = ap[aA ? "width" : "height"](),
                        aw = aE - az;
                    if (aw < 0) {
                        var ax, ay, aC = (aB[aA ? "pageX" : "pageY"] - Q.offset()[aA ? "left" : "top"]) / aE;
                        if (al == aC) {
                            return
                        }
                        al = aC;
                        ap.stop(true);
                        if (U > 0) {
                            if ((aC > aD) && (aC < 1 - aD)) {
                                return
                            }
                            ax = aC < 0.5 ? 0 : aw - 1;
                            ay = U * Math.abs(ap.position()[aA ? "left" : "top"] - ax) / (Math.abs(aC - 0.5) - aD)
                        } else {
                            ax = aw * Math.min(Math.max((aC - aD) / (1 - 2 * aD), 0), 1);
                            ay = -U * az / 2
                        }
                        ap.animate(aA ? {
                            left: ax
                        } : {
                            top: ax
                        }, ay, U > 0 ? "linear" : "easeOutCubic")
                    } else {
                        ap.css(aA ? "left" : "top", aA ? aw / 2 : 0)
                    }
                }
            });
            ai.mouseout(function (aw) {
                aq = setTimeout(function () {
                    ap.stop()
                }, 100)
            });
            Q.trigger("mousemove");
            var am, an;
            Y(ap.get(0), function (ay, ax, aw) {
                ap.css("left", Math.min(Math.max(am - ax, Q.width() - ap.width()), 0));
                ap.css("top", Math.min(Math.max(an - aw, Q.height() - ap.height()), 0));
                ay.preventDefault();
                return false
            }, function (aw) {
                am = parseFloat(ap.css("left")) || 0;
                an = parseFloat(ap.css("top")) || 0;
                return false
            });
            k.find(".ws_thumbs a").each(function (aw, ax) {
                Y(ax, 0, 0, function (ay) {
                    at = 1
                }, function (ay) {
                    ag(ay, J(ax).index())
                })
            })
        }
        if (m.length) {
            var av = m.find(">div");
            var ar = J("a", m);
            var aj = ar.find("IMG");
            if (aj.length) {
                var ak = J('<div class="ws_bulframe"/>').appendTo(av);
                var f = J("<div/>").css({
                    width: aj.length + 1 + "00%"
                }).appendTo(J("<div/>").appendTo(ak));
                aj.appendTo(f);
                J("<span/>").appendTo(ak);
                var c = -1;

                function ao(ay) {
                    if (ay < 0) {
                        ay = 0
                    }
                    if (s) {
                        s.loadTtip(ay)
                    }
                    J(ar.get(c)).removeClass("ws_overbull");
                    J(ar.get(ay)).addClass("ws_overbull");
                    ak.show();
                    var az = {
                        left: ar.get(ay).offsetLeft - ak.width() / 2,
                        "margin-top": ar.get(ay).offsetTop - ar.get(0).offsetTop + "px",
                        "margin-bottom": -ar.get(ay).offsetTop + ar.get(ar.length - 1).offsetTop + "px"
                    };
                    var ax = aj.get(ay);
                    var aw = {
                        left: -ax.offsetLeft + (J(ax).outerWidth(true) - J(ax).outerWidth()) / 2
                    };
                    if (c < 0) {
                        ak.css(az);
                        f.css(aw)
                    } else {
                        if (!document.all) {
                            az.opacity = 1
                        }
                        ak.stop().animate(az, "fast");
                        f.stop().animate(aw, "fast")
                    }
                    c = ay
                }
                ar.hover(function () {
                    ao(J(this).index())
                });
                var au;
                av.hover(function () {
                    if (au) {
                        clearTimeout(au);
                        au = 0
                    }
                    ao(c)
                }, function () {
                    ar.removeClass("ws_overbull");
                    if (document.all) {
                        if (!au) {
                            au = setTimeout(function () {
                                ak.hide();
                                au = 0
                            }, 400)
                        }
                    } else {
                        ak.stop().animate({
                            opacity: 0
                        }, {
                            duration: "fast",
                            complete: function () {
                                ak.hide()
                            }
                        })
                    }
                });
                av.click(function (aw) {
                    ag(aw, J(aw.target).index())
                })
            }
        }
    }
    function M(c) {
        J("A", Q).each(function (ak) {
            if (ak == c) {
                var ai = J(this);
                ai.addClass("ws_selthumb");
                if (!K) {
                    var f = Q.find(">div"),
                        aj = ai.position() || {}, al = f.position() || {};
                    f.stop(true).animate({
                        left: -Math.max(Math.min(aj.left, -al.left), aj.left + ai.width() - Q.width()),
                        top: -Math.max(Math.min(aj.top, -al.top), aj.top + ai.height() - Q.height())
                    })
                }
            } else {
                J(this).removeClass("ws_selthumb")
            }
        })
    }
    function Z(c) {
        J("A", m).each(function (f) {
            if (f == c) {
                J(this).addClass("ws_selbull")
            } else {
                J(this).removeClass("ws_selbull")
            }
        })
    }
    if (C.caption) {
        $caption = J("<div class='ws-title' style='display:none'></div>");
        k.append($caption);
        $caption.bind("mouseover", function (c) {
            p()
        });
        $caption.bind("mouseout", function (c) {
            H()
        })
    }
    var A = function () {
        if (this.filters) {
            this.style.removeAttribute("filter")
        }
    };
    var R = {
        none: function (f, c) {
            c.show()
        },
        fade: function (ai, c, f) {
            c.fadeIn(f, A)
        },
        array: function (ai, c, f) {
            n(c, ai[Math.floor(Math.random() * ai.length)], 0.5, "easeOutElastic1", f)
        },
        move: function (ai, c, f) {
            R.array([{
                    left1: "100%",
                    top2: "100%"
                }, {
                    left1: "80%",
                    left2: "-50%"
                }, {
                    top1: "-100%",
                    top2: "100%",
                    distance: 0.7,
                    easing: "easeOutBack"
                }, {
                    top1: "-80%",
                    top2: "-80%",
                    distance: 0.3,
                    easing: "easeOutBack"
                }, {
                    top1: "-80%",
                    left2: "80%"
                }, {
                    left1: "80%",
                    left2: "80%"
                }
            ], c, f)
        },
        slide: function (ai, c, f) {
            V(c, {
                direction: "left",
                easing: "easeInOutExpo",
                complete: function () {
                    if (c.get(0).filters) {
                        c.get(0).style.removeAttribute("filter")
                    }
                },
                duration: f
            })
        }
    };
    R[0] = R.slide;

    function D(f) {
        var aj = J("img", f).attr("title");
        var ai = J(f).data("descr");
        var c = J(".ws-title", k);
        c.stop(1, 1).stop(1, 1).fadeOut(C.captionDuration / 3, function () {
            if (aj || ai) {
                c.html((aj ? "<span>" + aj + "</span>" : "") + (ai ? "<div>" + ai + "</div>" : ""));
                var ak = C.captionEffect;
                (R[J.type(ak)] || R[ak] || R[0])(ak, c, C.captionDuration)
            }
        })
    }
    function N(ak, f) {
        var al, ai = document.defaultView;
        if (ai && ai.getComputedStyle) {
            var aj = ai.getComputedStyle(ak, "");
            if (aj) {
                al = aj.getPropertyValue(f)
            }
        } else {
            var c = f.replace(/\-\w/g, function (am) {
                return am.charAt(1).toUpperCase()
            });
            if (ak.currentStyle) {
                al = ak.currentStyle[c]
            } else {
                al = ak.style[c]
            }
        }
        return al
    }
    function z(aj, ai, am) {
        var al = "padding-left|padding-right|border-left-width|border-right-width".split("|");
        var ak = 0;
        for (var f = 0; f < al.length; f++) {
            ak += parseFloat(N(aj, al[f])) || 0
        }
        var c = parseFloat(N(aj, "width")) || ((aj.offsetWidth || 0) - ak);
        if (ai) {
            c += ak
        }
        if (am) {
            c += (parseFloat(N(aj, "margin-left")) || 0) + (parseFloat(N(aj, "margin-right")) || 0)
        }
        return c
    }
    function u(aj, ai, am) {
        var al = "padding-top|padding-bottom|border-top-width|border-bottom-width".split("|");
        var ak = 0;
        for (var f = 0; f < al.length; f++) {
            ak += parseFloat(N(aj, al[f])) || 0
        }
        var c = parseFloat(N(aj, "height")) || ((aj.offsetHeight || 0) - ak);
        if (ai) {
            c += ak
        }
        if (am) {
            c += (parseFloat(N(aj, "margin-top")) || 0) + (parseFloat(N(aj, "margin-bottom")) || 0)
        }
        return c
    }
    function n(ak, ao, c, am, ai) {
        var aj = ak.find(">span,>div").get();
        J(aj).css({
            position: "relative",
            visibility: "hidden"
        });
        ak.show();
        for (var f in ao) {
            if (/\%/.test(ao[f])) {
                ao[f] = parseInt(ao[f]) / 100;
                var an = ak.offset()[/left/.test(f) ? "left" : "top"];
                var ap = /left/.test(f) ? "width" : "height";
                if (ao[f] < 0) {
                    ao[f] *= an
                } else {
                    ao[f] *= k[ap]() - ak[ap]() - an
                }
            }
        }
        J(aj[0]).css({
            left: (ao.left1 || 0) + "px",
            top: (ao.top1 || 0) + "px"
        });
        J(aj[1]).css({
            left: (ao.left2 || 0) + "px",
            top: (ao.top2 || 0) + "px"
        });
        var ai = ao.duration || ai;

        function al(aq) {
            var ar = J(aj[aq]).css("opacity");
            J(aj[aq]).css({
                visibility: "visible"
            }).css({
                opacity: 0
            }).animate({
                opacity: ar
            }, ai, "easeOutCirc").animate({
                top: 0,
                left: 0
            }, {
                duration: ai,
                easing: (ao.easing || am),
                queue: false
            })
        }
        al(0);
        setTimeout(function () {
            al(1)
        }, ai * (ao.distance || c))
    }
    function V(an, aq) {
        var ap = {
            position: 0,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        for (var ai in ap) {
            ap[ai] = an.get(0).style[ai]
        }
        an.show();
        var am = {
            width: z(an.get(0), 1, 1),
            height: u(an.get(0), 1, 1),
            "float": an.css("float"),
            overflow: "hidden",
            opacity: 0
        };
        for (var ai in ap) {
            am[ai] = ap[ai] || N(an.get(0), ai)
        }
        var f = J("<div></div>").css({
            fontSize: "100%",
            background: "transparent",
            border: "none",
            margin: 0,
            padding: 0
        });
        an.wrap(f);
        f = an.parent();
        if (an.css("position") == "static") {
            f.css({
                position: "relative"
            });
            an.css({
                position: "relative"
            })
        } else {
            J.extend(am, {
                position: an.css("position"),
                zIndex: an.css("z-index")
            });
            an.css({
                position: "absolute",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })
        }
        f.css(am).show();
        var ao = aq.direction || "left";
        var aj = (ao == "up" || ao == "down") ? "top" : "left";
        var ak = (ao == "up" || ao == "left");
        var c = aq.distance || (aj == "top" ? an.outerHeight(true) : an.outerWidth(true));
        an.css(aj, ak ? (isNaN(c) ? "-" + c : -c) : c);
        var al = {};
        al[aj] = (ak ? "+=" : "-=") + c;
        f.animate({
            opacity: 1
        }, {
            duration: aq.duration,
            easing: aq.easing
        });
        an.animate(al, {
            queue: false,
            duration: aq.duration,
            easing: aq.easing,
            complete: function () {
                an.css(ap);
                an.parent().replaceWith(an);
                if (aq.complete) {
                    aq.complete()
                }
            }
        })
    }
    if (m.length || Q.length) {
        e()
    }
    q(F);
    if (C.caption) {
        D(i[F])
    }
    if (C.stopOnHover) {
        this.bind("mouseover", function (c) {
            p()
        });
        this.bind("mouseout", function (c) {
            H()
        })
    }
    H(1);
    var I = k.find("audio").get(0);
    if (I) {
        if (window.Audio && I.canPlayType && I.canPlayType("audio/mp3")) {
            I.loop = "loop";
            if (C.autoPlay) {
                I.autoplay = "autoplay";
                I.onload = function () {
                    I.play()
                }
            }
        } else {
            I = I.src;
            var T = I.substring(0, I.length - /[^\\\/]+$/.exec(I)[0].length);
            var l = "wsSound" + Math.round(Math.random() * 9999);
            J("<div>").appendTo(k).get(0).id = l;
            var r = "wsSL" + Math.round(Math.random() * 9999);
            window[r] = {
                onInit: function () {}
            };
            swfobject.createSWF({
                data: T + "player_mp3_js.swf",
                width: "1",
                height: "1"
            }, {
                allowScriptAccess: "always",
                loop: true,
                FlashVars: "listener=" + r + "&loop=1&autoplay=" + (C.autoPlay ? 1 : 0) + "&mp3=" + I
            }, l);
            I = 0
        }
        k.bind("stop", function () {
            if (I) {
                I.pause()
            } else {
                J(l).SetVariable("method:pause", "")
            }
        });
        k.bind("start", function () {
            if (I) {
                I.play()
            } else {
                J(l).SetVariable("method:play", "")
            }
        })
    }
    h.wsStart = j;
    h.wsStop = w;
    return this
};
jQuery.extend(jQuery.easing, {
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeOutElastic1: function (k, l, i, h, g) {
        var f = Math.PI / 2;
        var m = 1.70158;
        var e = 0;
        var j = h;
        if (l == 0) {
            return i
        }
        if ((l /= g) == 1) {
            return i + h
        }
        if (!e) {
            e = g * 0.3
        }
        if (j < Math.abs(h)) {
            j = h;
            var m = e / 4
        } else {
            var m = e / f * Math.asin(h / j)
        }
        return j * Math.pow(2, -10 * l) * Math.sin((l * g - m) * f / e) + h + i
    },
    easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    }
});
