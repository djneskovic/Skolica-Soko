import './scss/style.scss'

'use strict';

//! Navigation

const $hamburger = $('.hamburger');
const $menu = $('.nav-list');
const $listMenu = $('.list-menu');

$hamburger.click(function () {
    $menu.slideToggle('hidden')
});

$listMenu.click(function () {
    $menu.css('display', 'none');
})

//! Counting section

const $years = $('.years');
const $activity = $('.activity');

let $countYears = 1;
let $countActivity = 1;

setInterval(function () {
    $countYears++
    if ($countYears > 7) return
    $years.text($countYears)
}, 100)

setInterval(function () {
    $countActivity++
    if ($countActivity > 500) return
    $activity.text($countActivity)
}, 10)