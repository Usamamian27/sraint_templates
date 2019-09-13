$(document).ready(function()
{"use strict";var header=$('.header');var menu=$('.menu');var menuActive=false;var map;setHeader();$(window).on('resize',function()
{setHeader();setTimeout(function()
{$(window).trigger('resize.px.parallax');},375);});$(document).on('scroll',function()
{setHeader();});initMenu();initGoogleMap();function setHeader()
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
{menu.removeClass('active');menuActive=false;}
function initGoogleMap()
{var myLatlng=new google.maps.LatLng(34.063685,-118.272936);var mapOptions={center:myLatlng,zoom:14,mapTypeId:google.maps.MapTypeId.ROADMAP,draggable:true,scrollwheel:false,zoomControl:true,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER},mapTypeControl:false,scaleControl:false,streetViewControl:false,rotateControl:false,fullscreenControl:true,styles:[{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffeba1"}]}]}
map=new google.maps.Map(document.getElementById('map'),mapOptions);google.maps.event.addDomListener(window,'resize',function()
{setTimeout(function()
{google.maps.event.trigger(map,"resize");map.setCenter(myLatlng);},1400);});}});