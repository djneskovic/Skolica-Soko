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

    //! Reviews

    const reviews = [
        {
            id: 1,
            name: 'Jovana',
            text: '"Jednostavno, najbolji animatori do sada!"'
        },
        {
            id: 2,
            name: 'Srđan',
            text: '"Kao roditelj, na mnogo dečijih rođendana sam išao, ali ovi momci znaju kako sa decom treba raditi!"'
        },
        {
            id: 3,
            name: 'Ana',
            text: '"Perfekcija, stručnost, zabava."'
        },
        {
            id: 4,
            name: 'Mirko',
            text: '"Do sada,ovo je bio najbolji rođendan, animatori su za svaku pohvalu!"'
        }
    ];

    const title = document.querySelector('.review-title');
    const message = document.querySelector('.review-message');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');

    let currentItem = 0;

    const showPerson = function (person) {
        const item = reviews[person];
        title.textContent = item.name;
        message.textContent = item.text;
    }

    showPerson(currentItem);

    btnRight.addEventListener('click', () => {
        currentItem++;
        if (currentItem > reviews.length - 1) {
            currentItem = 0
        }
        showPerson(currentItem);
    });
    btnLeft.addEventListener('click', () => {
        currentItem--;
        if (currentItem < 0) {
            currentItem = reviews.length - 1;
        }
        showPerson(currentItem);
    })
})