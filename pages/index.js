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

  componentDidMount() {
    var touch = window.ontouchstart
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0);

    if (touch) { // remove all :hover stylesheets
      try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
          var styleSheet = document.styleSheets[si];
          if (!styleSheet.rules) continue;

          for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
            if (!styleSheet.rules[ri].selectorText) continue;

            if (styleSheet.rules[ri].selectorText.match(':hover')) {
                styleSheet.deleteRule(ri);
            }
          }
        }
      } catch (ex) {}
    }
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
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
