var timeLeft = vw_countdown.timeLeft;

var w = Math.floor(timeLeft / (60 * 60 * 24 * 7));
var tl = (timeLeft - (w * 7 * 24 * 60 * 60));
var d = Math.floor(tl / (60 * 60 * 24));
tl = (tl - (d * 24 * 60 * 60));
var h = Math.floor(tl / (60 * 60));
tl = (tl - (h * 60 * 60));
var m = Math.floor(tl / 60);
var s = tl - m * 60;
var duration = 1000;

function counterAnimate(type, value)
{
    var first = Math.floor(value / 10);
    var last  = value - first * 10;
    var seconds = jQuery('.vintage-' + type + '-digit > .vintage-digit');
    var secObjFirst = seconds.first();
    var secObjLast = seconds.next();

    var firstTop = secObjFirst.find('div.top');
    var firstBottom = secObjFirst.find('div.bottom');

    var lastTop = secObjLast.find('div.top');
    var lastBottom = secObjLast.find('div.bottom');

//        console.log(firstTop.html() + lastTop.html());

    if (firstTop.html() != first) {
        firstTop.css({'display': 'none'});
        firstTop.html((first ? first : '0')).stop(true, true).slideDown(duration / 2);

        firstBottom.stop(true, true).animate({'height': ''}, duration / 2, function() {
            firstBottom.html(firstTop.html());
            firstBottom.css({'display': 'block', 'height': ''});
            firstTop.hide().slideUp(10);
        });
    }

    if (lastTop.html() != last) {
        lastTop.css({'display': 'none'});
        lastTop.html((last ? last : '0')).stop(true, true).slideDown(duration / 2);

        lastBottom.stop(true, true).animate({'height': ''}, duration / 2, function() {
            lastBottom.html(lastTop.html());
            lastBottom.css({'display': 'block', 'height': ''});
            lastTop.hide().slideUp(10);
        });
    }
}

var interval = window.setInterval(function test()
{
    var aM = false;
    var aH = false;
    var aD = false;
    var aW = false;

    s--;
    if (s < 0) {
        m--;
        s = 59;
        aM = true;
    }
    if (m < 0) {
        h--;
        m = 59;
        aM = true;
        aH = true;
    }
    if (h < 0) {
        d--;
        h = 23;
        aH = true;
        aD = true;
    }
    if (d < 0) {
        w--;
        d = 6;
        aD = true;
        aW = true;
    }
    if (aM) {
        counterAnimate('mins', m);
    }
    if (aH) {
        counterAnimate('hours', h);
    }
    if (aD) {
        counterAnimate('days', d);
    }
    if (aW) {
        counterAnimate('weeks', w);
    }
    counterAnimate('secs', s);

    if (w === 0 && d === 0 && h === 0 && m === 0 && s === 0) {
        window.clearInterval(interval);
    }
}, duration);
