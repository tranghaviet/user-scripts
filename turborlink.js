// ==UserScript==
// @name         Turborlink
// @namespace    https://tranghv.blogspot.com/
// @version      0.1
// @description  Add Turbo script
// @author       Tráng Hà Viết
// @include        http://*
// @include        https://*

// @exclude        *mail.google.com/*
// @exclude        http://localhost:*
// @exclude        http://127.0.0.1:*
// @exclude        *www.facebook.com*
// @exclude        *github.com*
// @exclude        *www.baogiaothong.vn*
// @exclude        *radio.zing.vn*
// @exclude        *calendar.google.com*
// @exclude        https://www.google.com/maps*
// @exclude        https://www.google.com*
// @exclude        https://onedrive.live.com*
// @exclude        *www.slideshare.net*

// ==/UserScript==
document.addEventListener("DOMContentLoaded",function(){var t=document.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/turbolinks/5.0.3/turbolinks.js"),t.setAttribute("id","hvt-script"),document.getElementsByTagName("head").item(0).appendChild(t)},!1);
