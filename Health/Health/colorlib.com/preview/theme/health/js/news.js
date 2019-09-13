$(document).ready(function()
{"use strict";var header=$('.header');var menu=$('.menu');var menuActive=false;var ctrl=new ScrollMagic.Controller();setHeader();$(window).on('resize',function()
{setHeader();setTimeout(function()
{$(window).trigger('resize.px.parallax');},375);});$(document).on('scroll',function()
{setHeader();});initMenu();function setHeader()
{if($(window).scrollTop()>91)
{header.addClass('scrolled');}
else
{header.removeClass('scrolled');}}
function initMenu()
{if($('.hamburger').length&&$('.menu').length)
{var hamb=$('.hamburger');var close=$('.menu_close_container');hamb.on('click',function()
{if(!menuActive)
{openMenu();}
else
{closeMenu();}});close.on('click',function()
{if(!menuActive)
{openMenu();}
else
{closeMenu();}});}}
function openMenu()
{menu.addClass('active');menuActive=true;}
function closeMenu()
{menu.removeClass('active');menuActive=false;}});