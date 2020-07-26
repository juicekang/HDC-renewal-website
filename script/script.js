$(document).ready(function(){
    AOS.init();
    

    // menu slidedown
    $('header nav > ul > li').hover(function(){
        $(this).find('ul').stop().slideDown();    
    }, function(){
        $(this).find('ul').stop().slideUp();
    });
    
    //header scroll

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var headerHeight = $('header').outerHeight();

    $(window).scroll(function(e){
        didScroll = true;
        if ( $(window).scrollTop() > 80 ) {
            $('header').css('background','#fff');
            $('header a').css('color','#333');
            $('header .lang img').attr('src','img/lang2.svg');
            $('header h1.logo img').attr('src','img/logo1.png');
            $('header nav > ul > li.lnb_object').hover(function(){
                $('header').css('height','320px');
            }, function(){
                $('header').css('height','80px');
            });
        } else { 
            $('header').css('background','inherit');
            $('header a').css('color','#fff');
            $('header h1.logo img').attr('src','img/logo3.png');
            $('header .lang img').attr('src','img/lang.svg');
         }
    });

    setInterval(function(){
        if(didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled(){
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return; 
        if ( st > lastScrollTop && st > headerHeight) {
            $('header').addClass('nav_up');
        } else {
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav_up');
            }
        }
    lastScrollTop = st; 
    }

    //font size
    $(window).resize(function(){
        var fontSize = $(window).width()/1920*14;
		var footerSize = $(window).width()/1920*14;
        if (fontSize < 14) {
            $('p, .more_btn').css('font-size',14);
        } else if (fontSize > 30) {
            $('p, .more_btn').css('font-size',30); 
        } else {
            $('p, .more_btn').css('font-size',fontSize);
        }

		if (footerSize < 12) {
            $('footer .left address, footer .right ul li, footer .right button').css('font-size',12);
        } else if (footerSize > 14) {
            $('footer .left address, footer .right ul li, footer .right button').css('font-size',14); 
        } else {
            $('footer .left address, footer .right ul li, footer .right button').css('font-size',fontSize);
        }

        if ($(window).width() >= 1310) {
            $('.news_area article').stop().animate({left:-50+'%'});
        }

        if ($(window).width() > 480) {
            $('#main video')[0].play();
        }
    });
    $(window).trigger('resize');

    // news scroll
    var current = 0; 
    var artLeft = 0;
    $('#next_btn').click(function(){
        current++;
        $(window).width() >= 1310 ? artLeft = -(current%2)*50 : artLeft = -(current%4)*25;
        $('.news_area article').stop().animate({left:artLeft+'%'});
    });
    $('#prev_btn').click(function(){
        current > 0 ? current-- : current = $('.news_area article').size() - 1;
        $(window).width() >= 1310 ? artLeft = -(current%2)*50 : artLeft = -(current%4)*25;
        $('.news_area article').stop().animate({left:artLeft+'%'});
    });

    //burger menu
    $('button.burger').click(function(){
        $('.burger_menu_area').fadeIn();
    });
    $('button.close').click(function(){
        $('.burger_menu_area').fadeOut();
    })
});
