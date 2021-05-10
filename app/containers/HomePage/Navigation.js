import React from 'react'

import './_navigation.scss';

export default function Navigation() {
    return (
        <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#" class="navigation__link">About Natous</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">Your benfits</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">Popular tours</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">Stories</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link">Book now</a></li>
                    </ul>
            </nav>
        </div>
    )
}
