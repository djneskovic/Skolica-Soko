import './scss/style.scss'

'use strict';

$(document).ready(function () {


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

    //! Services

    const question = document.querySelectorAll('.question');
    const a1 = document.querySelector('.a-1')
    const a2 = document.querySelector('.a-2')
    const a3 = document.querySelector('.a-3')

    question.forEach(function (e) {
        e.addEventListener('click', function (p) {
            const link = p.target;
            if (link.classList.contains('q-1')) {
                a1.classList.toggle('hidden')
            } else if (link.classList.contains('q-2')) {
                a2.classList.toggle('hidden')
            } else if (link.classList.contains('q-3')) {
                a3.classList.toggle('hidden')
            }
        })
    })


})