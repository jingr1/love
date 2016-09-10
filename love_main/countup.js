function counterAnimate2(t, i) {
    var n = Math.floor(i / 10),
    e = i - 10 * n,
    o = jQuery(".th-" + t + "-digit > .cp-digit"),
    a = o.first(),
    d = o.next(),
    l = a.find("div.top"),
    s = a.find("div.bottom"),
    h = d.find("div.top"),
    m = d.find("div.bottom");
    l.html() != n && (l.css({
        display: "none"
    }), l.html(n ? n: "0").stop(!0, !0).slideDown(duration_l / 2), s.stop(!0, !0).animate({
        height: ""
    },
    duration_l / 2,
    function() {
        s.html(l.html()),
        s.css({
            display: "block",
            height: ""
        }),
        l.hide().slideUp(10)
    })),
    h.html() != e && (h.css({
        display: "none"
    }), h.html(e ? e: "0").stop(!0, !0).slideDown(duration_l / 2), m.stop(!0, !0).animate({
        height: ""
    },
    duration_l / 2,
    function() {
        m.html(h.html()),
        m.css({
            display: "block",
            height: ""
        }),
        h.hide().slideUp(10)
    }))
}

var loved = new Date();
loved.setFullYear(2009, 11, 23);
loved.setHours(20);
loved.setMinutes(00);
loved.setSeconds(0);
loved.setMilliseconds(0);

var current_l = Date();
var seconds_l = (Date.parse(current_l)- Date.parse(loved)) / 1000;
var timeLeft_l = seconds_l;
var y_l = Math.floor(timeLeft_l/(60*60*24*30*12));
var tl_l = (timeLeft_l - (y_l * 12 * 30 * 24 * 60 * 60));
var w_l = Math.floor(tl_l / (60 * 60 * 24 * 30));
tl_l = (tl_l - (w_l * 30 * 24 * 60 * 60));
d_l = Math.floor(tl_l / 86400);
tl_l -= 24 * d_l * 60 * 60;
var h_l = Math.floor(tl_l / 3600);
tl_l -= 60 * h_l * 60;
var m_l = Math.floor(tl_l / 60),
s_l = tl_l - 60 * m_l,
duration_l = 1e3,
interval2 = window.setInterval(function() {
    var t = !0,
    i = !0,
    n = !0,
    e = !0;
    s_l++,
    59 < s_l && (m_l++, s_l = 0, t = !0),
    59 < m_l && (h_l++, m_l = 0, t = !0, i = !0),
    23 < h_l && (d_l++, h_l = 0, i = !0, n = !0),
    30 < d_l && (w_l++, d_l = 0, n = !0, e = !0),
    12 < w_l &&(y_l++, w_l = 0)
    t && counterAnimate2("mins", m_l),
    i && counterAnimate2("hours", h_l),
    n && counterAnimate2("days", d_l),
    e && counterAnimate2("months", w_l),
    counterAnimate2("years", y_l),
    counterAnimate2("secs", s_l),
    0 === w_l && 0 === d_l && 0 === h_l && 0 === m_l && 0 === s_l && y_l === 0 && window.clearInterval(interval2)
},
duration_l);
