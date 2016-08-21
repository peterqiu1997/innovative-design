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
  }

  componentDidMount() {}

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
              <div className="slide__layout-1">
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
                    style={{ backgroundImage: `url("${prefixLink('/img/club-three.jpg')}")` }}
                  ></div>
                  <a href="http://apply.innovativedesign.club">
                    <div className="slide__button slide__button--2">
                      <div className="apply__text">join our team</div>
                      <div className="slide__fill"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
