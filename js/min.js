/*global $, window, document */
$(function () {
    'use strict';
    // Start click activ nav
    $('.links li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // End click activ nav
    
    window.onresize = window.onload = function () {
        // start set height slider
        var myslid = document.querySelector('.my-slid'),
            nav = document.querySelector('nav').offsetHeight,
            upper = document.querySelector('.upper-bar').offsetHeight;
        myslid.style.height = window.innerHeight - nav - upper + 'px';
        // end set height slider
    };
    
    // start option
    $('.option').click(function () {
        $('.featured ul').toggle(500);
    });
    if (window.innerWidth <= 767.97) {
        window.onscroll = function () {
            if (window.pageYOffset >= 1500) {
                document.querySelector('.box').style.position = 'fixed';
            } else {
                document.querySelector('.box').style.position = 'absolute';
            }
            if (window.pageYOffset >= 1900) {
                document.querySelector('.box').style.position = 'absolute';
            }
        };
        // end option
        
        // start shufel img
        $('.shufile-img .row').parent().addClass('container');
        $('.shufile-img .row div').css({
            width: '120px'
        });
    }
    
    window.onresize = function () {
        if (window.innerWidth >= 767.97) {
            $('.shufile-img .row').parent().removeClass('container');
        }
    };

    $('.featured ul li').click(function () {
        if ($(this).data('class') === 'all') {
            $('.shufile-img .row div').show();
            $('.shufile-img .row').parent().removeClass('container');
        } else {
            $('.shufile-img .row div').hide();
            $($(this).data('class')).fadeIn();
            $('.shufile-img .row').parent().addClass('container');
        }
    });
    // end shufel img
    
});