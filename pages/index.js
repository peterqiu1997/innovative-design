import anime from 'animejs';
import React from 'react';
import classNames from 'classnames';
import DocumentTitle from 'react-document-title';
import KeyHandler, { KEYDOWN } from 'react-key-handler';
import { prefixLink } from 'gatsby-helpers';

import _ from 'lodash';

import Logo, { LOGO_TEXT, LOGO_ICON } from './components/logo';
import Typing from './components/typing';

const numOfSections = 3;
let slideAnimations = {};

function generateSlideAnimations(win) {
  slideAnimations = {
    slide0: [
      {
        targets: '.splash__container',
        translateX: [win.innerWidth, 0],
        delay: 25,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.slide__button--wrapper',
        translateX: [-win.innerWidth, 0],
        delay: 50,
        easing: "easeOutCirc",
        duration: 440
      }
    ],
    slide1: [
      {
        targets: '.circle--one',
        scale: [0, 1],
        delay: 25,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.circle--two',
        scale: [0, 1],
        delay: 250,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.circle--three',
        scale: [0, 1],
        delay: 475,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.info__container--circles',
        translateY: [win.innerHeight, 0],
        delay: 50,
        easing: "easeOutCirc",
        duration: 440
      }
    ],
    slide2: [
      {
        targets: '.blue',
        scale: [0, 1],
        delay: 25,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.gold',
        scale: [0, 1],
        delay: 50,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.photo',
        scale: [0, 1],
        delay: 75,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.web',
        scale: [0, 1],
        delay: 100,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.video',
        scale: [0, 1],
        delay: 125,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.info__container--icons',
        translateY: [win.innerHeight, 0],
        delay: 150,
        easing: "easeOutCirc",
        duration: 440
      }
    ],
  };
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  componentDidMount() {
    if (window) {
      generateSlideAnimations(window);
    }
  }

  componentDidUpdate() {
    const animations = slideAnimations[`slide${this.state.slideIndex}`];
    if (animations) {
      for (let animation of animations) {
        anime(animation);
      }
    }
  }

  _handleKeyboardArrows(e, increment) {
    this._handleArrowClick(e, true);
  }

  _handleArrowClick(e, increment) {
    e.preventDefault();

    const currentIndex = this.state.slideIndex;
    const nextIndex = increment ? (currentIndex + 1) : (currentIndex - 1)

    this.setState({
      slideIndex: nextIndex < 0 ? numOfSections - 1 : nextIndex % numOfSections
    });
  }

  render () {
    const stringsToType = [
      'Design',
      'Graphic Design',
      'Photography',
      'Web Design',
      'Videography',
      'Design'
    ];

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="ArrowDown"
            onKeyHandle={(e) => {
              this._handleKeyboardArrows(e, true);
            }}
          />
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="ArrowUp"
            onKeyHandle={(e) => {
              this._handleKeyboardArrows(e, false);
            }}
          />
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="ArrowRight"
            onKeyHandle={(e) => {
              this._handleKeyboardArrows(e, true);
            }}
          />
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="ArrowLeft"
            onKeyHandle={(e) => {
              this._handleKeyboardArrows(e, false);
            }}
          />
          <div className="page__wrapper home">
            <div className="slideshow">
              <div
                className={
                  classNames(
                    "slide__layout",
                    "slide__layout--1",
                    {
                      "slide__layout--selected": this.state.slideIndex === 0
                    }
                  )
                }
              >
                <div className="splash__container">
                  <Logo logoType={ LOGO_TEXT } logoClass={ 'logo__svg--color' } />
                  <Typing
                    defaultString="Design"
                    strings={ stringsToType }
                    interval={ { letter: 50, string: 500 } }
                    backspace={ true }
                    cursor={ '|' }
                    startDelay={ 750 }
                    hideCursorOnDone={ true }
                  />
                </div>
                <div className="slide__button--wrapper">
                  <div
                    className="slide__button slide__button--1"
                    style={{ backgroundImage: `url("${prefixLink('/img/club-one.jpg')}")` }}
                  ></div>
                  <a href="http://apply.innovativedesign.club">
                    <div className="slide__button slide__button--2">
                      <div className="apply__text">join our team</div>
                      <div className="slide__fill"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className={
                  classNames(
                    "slide__layout",
                    "slide__layout--2",
                    {
                      "slide__layout--selected": this.state.slideIndex === 1
                    }
                  )
                }
              >
                <div className="circle__container">
                  <div
                    className="circle circle--one"
                    style={{ backgroundImage: `url("${prefixLink('/img/calday.jpg')}")` }}
                  ></div>
                  <div
                    className="circle circle--two"
                    style={{ backgroundImage: `url("${prefixLink('/img/marketing.png')}")` }}
                  ></div>
                  <div
                    className="circle circle--three"
                    style={{ backgroundImage: `url("${prefixLink('/img/flyers.png')}")` }}
                  ></div>
                </div>
                <div className="info__container--circles">
                  Innovative Design is a family of designers, photographers, web developers,
                  and videographers at the University of California, Berkeley. We are creative
                  individuals who are continuously evolving by collaborating, inspiring and
                  educating one another.
                </div>
              </div>
              <div
                className={
                  classNames(
                    "slide__layout",
                    "slide__layout--3",
                    {
                      "slide__layout--selected": this.state.slideIndex === 2
                    }
                  )
                }
              >
                <div className="icons__container">
                  <a href="http://makeberkeleybeautiful.com/blue">
                    <div
                      className="icon blue"
                      style={{ backgroundImage: `url("${prefixLink('/img/tiers/blue.png')}")` }}
                    ></div>
                  </a>
                  <a href="http://makeberkeleybeautiful.com/gold">
                    <div
                      className="icon gold"
                      style={{ backgroundImage: `url("${prefixLink('/img/tiers/gold.png')}")` }}
                    ></div>
                  </a>
                  <a href="http://makeberkeleybeautiful.com/photo">
                    <div
                      className="icon photo"
                      style={{ backgroundImage: `url("${prefixLink('/img/tiers/photo.png')}")` }}
                    ></div>
                  </a>
                  <a href="http://makeberkeleybeautiful.com/web">
                    <div
                      className="icon web"
                      style={{ backgroundImage: `url("${prefixLink('/img/tiers/web.png')}")` }}
                    ></div>
                  </a>
                  <a href="http://makeberkeleybeautiful.com/video">
                    <div
                      className="icon video"
                      style={{ backgroundImage: `url("${prefixLink('/img/tiers/video.png')}")` }}
                    ></div>
                  </a>
                </div>
                <div className="info__container--icons">
                  <p>
                    Innovative Design has five tiers that students can apply to be a member on: Blue, Gold, Photo, Video, and Web.
                  </p>
                  <p>
                    There are two design tiers, Gold and Blue Tier.  <b>Blue Tier</b> is a group of intermediate to advanced designers
                    that offers design services to off-campus groups while <b>Gold Tier</b> offers graphic design education
                    and experience for beginner to intermediate designers to on-campus groups.
                  </p>
                  <p>
                    <b>Photo Tier</b> is a hands-on experience in shooting professional headshots, event photography, stock photos and more.
                  </p>
                  <p>
                    <b>Web Tier</b> works for clients that are in need of technical help in designing their websites.
                    Tier members learn new skills and put existing knowledge to use through hands-on experience.
                  </p>
                  <p>
                    <b>Video Tier</b> creates video campaigns for clients on and off campus -- everything from logo animations,
                    event recap videos and Kickstarter campaigns.
                  </p>
                  <p>
                    Click on each icon to learn more about the tier or visit <b><a href="http://makeberkeleybeautiful.com">makeberkeleybeautiful.com</a></b> for a full portfolio.
                  </p>
                </div>
              </div>
            </div>
            <div className="slideshow__nav">
              <div className="slideshow__arrows">
                <div
                  className="arrow arrow--left"
                  onClick={(e) => { this._handleArrowClick(e, false) }}
                >
                  <div className="arrow__bar"></div>
                  <div className="arrow__triangle"></div>
                </div>
                <div
                  className="arrow arrow--right"
                  onClick={(e) => { this._handleArrowClick(e, true) }}
                >
                  <div className="arrow__bar"></div>
                  <div className="arrow__triangle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

