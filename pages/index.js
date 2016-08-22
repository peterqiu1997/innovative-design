import anime from 'animejs';
import React from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';

import _ from 'lodash';

import Logo, { LOGO_TEXT, LOGO_ICON } from './components/logo';
import Typing from './components/typing';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  componentDidMount() {}

  _handleArrowClick(e, increment) {
    e.preventDefault();

    const currentIndex = this.state.slideIndex;
    const nextIndex = increment ? (currentIndex + 1) : (currentIndex - 1)
    this.setState({
      slideIndex: nextIndex
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
          <div className="page__wrapper home">
            <div className="slideshow">
              {/*<div className="slide__layout--1">
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
              </div>*/}
              <div className="slide__layout--2">
                <div className="circle__container">
                  <div className="circle circle--one"></div>
                  <div className="circle circle--two"></div>
                  <div className="circle circle--three"></div>
                </div>
                <div className="info__container">
                  Innovative Design is a family of designers, photographers, web developers,
                  and videographers at the University of California, Berkeley. We are creative
                  individuals who are continuously evolving by collaborating, inspiring and
                  educating one another.
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

