var married = new Date();
married.setFullYear(2016, 1, 23);
married.setHours(8);
married.setMinutes(00);
married.setSeconds(0);
married.setMilliseconds(0);

var current = Date();
var seconds_m = (Date.parse(current) - Date.parse(married)) / 1000;
/*need to consider 31days per months*/
var timeLeft_m = seconds_m;
var y = Math.floor(timeLeft_m/(60*60*24*30*12));
var tl = (timeLeft_m - (y * 12 * 30 * 24 * 60 * 60));
var w = Math.floor(tl / (60 * 60 * 24 * 30))+1;
tl = (tl - ((w-1) * 30 * 24 * 60 * 60));
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
    var aM = true;
    var aH = true;
    var aD = true;
    var aW = true;
    var aY = true;

    s++;
    if (s > 59) {
        m++;
        s = 0;
        aM = true;
    }
    if (m > 59) {
        h++;
        m = 0;
        aM = true;
        aH = true;
    }
    if (h > 23) {
        d++;
        h = 0;
        aH = true;
        aD = true;
    }
    if (d > 29) {
        w++;
        d = 0;
        aD = true;
        aW = true;
    }
    if (w > 11) {
        y--;
        w = 0;
        aW = true;
        aY = true;
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
        counterAnimate('months', w);
      }
    if (aY) {
        counterAnimate('years', y);
    }
    counterAnimate('secs', s);

    if (y === 0 && w === 0 && d === 0 && h === 0 && m === 0 && s === 0) {
        window.clearInterval(interval);
    }
}, duration);
