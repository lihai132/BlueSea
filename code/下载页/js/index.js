
// var swiper = new Swiper('.swiper-container');

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// $('.swiper-slide-active .person')

var startX, startY;
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var page4 = document.getElementById("page4");
var person = document.getElementById("person");
var love = document.getElementById("love");
var airship = document.getElementById("airship");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var person_bottom = parseInt($('#person').css("bottom"));
var person_top = parseInt($('#person').css("top"));
var love_bottom = parseInt($('#love').css("bottom"));
var airship_bottom = parseInt($('#airship').css("bottom"));
var first_bottom = parseInt($('#first').css("bottom"));
var second_bottom = parseInt($('#second').css("bottom"));
var third_bottom = parseInt($('#third').css("bottom"));

function setStyle(obj, json) {
    for (var i in json) {
        obj.style[i] = json[i];
    }
}

page4.addEventListener('touchstart', function (ev) {
    startX = ev.touches[0].clientX;
    startY = ev.touches[0].clientY;

}, false);


page4.addEventListener('touchmove', function (ev) {
    var endX, endY;
    endX = ev.changedTouches[0].clientX;
    endY = ev.changedTouches[0].clientY;
    var dy = endY - startY;
    //var dx = endX - startX;  
    if (dy > 0) {//鍚戜笅婊戝姩  
        var b_change = person_bottom + dy;
        var t_change = person_top + dy;
        var o = ((person_top - dy) / (person_top) + 0.2).toFixed(2);
        if (b_change >= $('.page4').height()) {
            return;
        }
        else {
            // person.setAttribute('style','bottom:'+t+'px');
            setStyle(person, { bottom: b_change + 'px', opacity: o });
        }
    } else if (dy <= 0) {//鍚戜笂婊戝姩  
        var b_change = person_bottom + dy;
        var t_change = person_top + dy;
        var o = ((person_top - dy) / (person_top) + 0.2).toFixed(2);
        if (b_change <= person_bottom) {
            return;
        }
        else {
            // person.setAttribute('style','bottom:'+t+'px');
            setStyle(person, { bottom: b_change + 'px', opacity: o });
        }
    }


}, false);

page4.addEventListener('touchend', function (ev) {
    $("#person").css({ 'bottom': '55%', 'opacity': '1' });

}, false);



page3.addEventListener('touchstart', function (ev) {
    startX = ev.touches[0].clientX;
    startY = ev.touches[0].clientY;

}, false);


page3.addEventListener('touchmove', function (ev) {
    var endX, endY;
    endX = ev.changedTouches[0].clientX;
    endY = ev.changedTouches[0].clientY;
    var dy = startY - endY;
    //var dx = endX - startX;  
    if (dy > 0) {//鍚戜笂婊戝姩  
        var b_change1 = love_bottom + dy;
        var b_change2 = airship_bottom + dy;
        var o1 = (b_change1 / (love_bottom)).toFixed(2);
        var o2 = (b_change2 / (airship_bottom)).toFixed(2);
        if (b_change1 >= love_bottom) {
            return;
        }
        else {
            // person.setAttribute('style','top:'+t+'px');
            setStyle(love, { bottom: b_change1 + 'px', opacity: o1 });
        }
        if (b_change2 >= love_bottom) {
            return;
        }
        else {
            // person.setAttribute('style','top:'+t+'px');
            setStyle(airship, { bottom: b_change2 + 'px', opacity: o2 });
        }
    } else if (dy <= 0) {//鍚戜笅婊戝姩  
        var b_change1 = love_bottom + dy;
        var b_change2 = airship_bottom + dy;
        var o1 = (b_change1 / (love_bottom)).toFixed(2);
        var o2 = (b_change2 / (airship_bottom)).toFixed(2);
        if (b_change1 < -150) {
            return;
        }
        else {
            // person.setAttribute('style','top:'+t+'px');
            setStyle(love, { bottom: b_change1 + 'px', opacity: o1 });
        }
        if (b_change2 < -150) {
            return;
        }
        else {
            // person.setAttribute('style','top:'+t+'px');
            setStyle(airship, { bottom: b_change2 + 'px', opacity: o2 });
        }
    }
}, false);

page3.addEventListener('touchend', function (ev) {
    $("#love").css({ 'bottom': '315px', 'opacity': '1' });
    $("#airship").css({ 'bottom': '230px', 'opacity': '1' });
    var base_height = $("#page4-img").height();
    $(".wrap").css("height", base_height + 'px');
    $(".wrap-inner").css("height", base_height + 'px');
}, false);


page2.addEventListener('touchstart', function (ev) {
    startX = ev.touches[0].clientX;
    startY = ev.touches[0].clientY;

}, false);

page2.addEventListener('touchmove', function (ev) {
    var endX, endY;
    endX = ev.changedTouches[0].clientX;
    endY = ev.changedTouches[0].clientY;
    var dy = startY - endY;
    //var dx = endX - startX;  
    if (dy > 0) {//鍚戜笂婊戝姩  
        var b_change1 = first_bottom + dy;
        var b_change2 = second_bottom + dy;
        var b_change3 = third_bottom + dy;
        var o1 = (b_change1 / (first_bottom) + 0.5).toFixed(2);
        var o2 = (b_change2 / (second_bottom) + 0.5).toFixed(2);
        var o3 = (b_change3 / (third_bottom) + 0.5).toFixed(2);
        if (b_change1 >= first_bottom) {
            return;
        }
        else {
            // person.setAttribute('style','top:'+t+'px');
            setStyle(first, { bottom: b_change1 + 'px', opacity: o1 });
        }
        if (b_change2 >= second_bottom) {
            return;
        }
        else {
            // person.setAttribute('style','top:'+t+'px');
            setStyle(second, { bottom: b_change2 + 'px', opacity: o2 });
        }
        if (b_change3 >= third_bottom) {
            return;
        }
        else {
            // person.setAttribute('style','top:'+t+'px');
            setStyle(third, { bottom: b_change3 + 'px', opacity: o3 });
        }
    } else if (dy <= 0) {//鍚戜笅婊戝姩  
        var b_change1 = first_bottom + dy;
        var b_change2 = second_bottom + dy;
        var b_change3 = third_bottom + dy;
        var o1 = (b_change1 / (first_bottom) + 0.5).toFixed(2);
        var o2 = (b_change2 / (second_bottom) + 0.5).toFixed(2);
        var o3 = (b_change3 / (third_bottom) + 0.5).toFixed(2);
        if (b_change1 < -500) {
            return;
        }
        else {
            // person.setAttribute('style','top:'+t+'px');
            setStyle(first, { bottom: b_change1 + 'px', opacity: o1 });
        }
        if (b_change2 < -500) {
            return;
        }
        else {
            // person.setAttribute('style','top:'+t+'px');
            setStyle(second, { bottom: b_change2 + 'px', opacity: o2 });
        }
        if (b_change3 < -500) {
            return;
        }
        else {
            // person.setAttribute('style','top:'+t+'px');
            setStyle(third, { bottom: b_change3 + 'px', opacity: o3 });
        }
    }
}, false);

page2.addEventListener('touchend', function (ev) {
    $("#first").css({ 'bottom': '98px', 'opacity': '1' });
    $("#second").css({ 'bottom': '110px', 'opacity': '1' });
    $("#third").css({ 'bottom': '91px', 'opacity': '1' });
}, false);

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}


function isInWx() {
    let ua = navigator.userAgent.toLowerCase();
    return !!ua.match(/MicroMessenger/i);
}


function isInQq() {
    let ua = navigator.userAgent.toLowerCase();
    return !!ua.match(/ qq\//i);
}


function guideDialog() {

    let iosPath = myApp.device.ios, androidPath = myApp.device.android
    let mobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
    let modalName


    if (androidPath) {
        modalName = myApp.modal({
            // modalCloseByOutside: true,
            text: '<div class="guide-dialog" style="">' +
                '<img src="https://cdn.52tt.com/m/official/android-guide.png" width="240px" height="194px"  style="display:block;margin: 0 auto;"></div>' +
                '</div>'
        })
    } else if (iosPath) {
        modalName = myApp.modal({
            // modalCloseByOutside: true,
            text: '<div class="guide-dialog" style="">' +
                '<img src="https://cdn.52tt.com/m/official/ios-guide.png" width="240px" height="194px"  style="display:block;margin: 0 auto;"></div>' +
                '</div>'
        })
    }
    myApp.openModal(modalName)
    // setTimeout(() => {
    //     myApp.closeModal(modalName)
    // },500)
}




$('.download').click(function () {
    var packageChannel = getUrlParam("offical_id");
    console.log(packageChannel)
    if (packageChannel == 1) {
        _hmt.push(['_trackEvent', '绉诲姩瀹樼綉', 'click', '娓犻亾1']);
    }
    else if (packageChannel == 2) {
        _hmt.push(['_trackEvent', '绉诲姩瀹樼綉', 'click', '娓犻亾2']);
    }
    else if (packageChannel == 3) {
        _hmt.push(['_trackEvent', '绉诲姩瀹樼綉', 'click', '娓犻亾3']);
    }
    else {
        _hmt.push(['_trackEvent', '绉诲姩瀹樼綉', 'click', '鍏跺畠']);
    }

    if (isInWx() || isInQq()) {
        guideDialog()
    } else {
        // guideDialog()
        myApp.downloadTT();
    }

})
//点击充值事件

// $('#recharge').click(function () {
//     window.location.href = 'https://quwantt.tmall.com/shop/view_shop.htm?spm=a230r.1.14.5.4a564dd3MmTjUH&user_number_id=3571284696';
// })

if ($(".page1-bg").hasClass("swiper-slide-active")) {
    setTimeout(function () {
        $(".logo1").removeClass("logo1-animated1").addClass("logo1-animated2")
    }, 3000)
}