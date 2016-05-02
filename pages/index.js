import React from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';

import _ from 'lodash';

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
            <div className="home__container">
              <div className="logo__type">
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 39.8"
                >
                  <g>
                    <rect y="0.7" className="logo__type--color" width="5.5" height="39.2"/>
                    <path className="logo__type--color" d="M37.6,39.8h5.5V14.4c0-2.2-0.4-5.7-0.4-5.7h0.1c0,0,1.8,3.6,3.3,5.7l17.5,25.4h5.4V0.7h-5.5v25.5
                      c0,2.2,0.4,5.7,0.4,5.7h-0.1c0,0-1.8-3.6-3.3-5.7L43,0.7h-5.4V39.8z"/>
                    <path className="logo__type--color" d="M101,39.8h5.5V14.4c0-2.2-0.4-5.7-0.4-5.7h0.1c0,0,1.8,3.6,3.3,5.7L127,39.8h5.4V0.7h-5.5v25.5
                      c0,2.2,0.4,5.7,0.4,5.7h-0.1c0,0-1.8-3.6-3.3-5.7L106.4,0.7H101V39.8z"/>
                    <path className="logo__type--color" d="M240.7,39.8h5.5l14.4-39.2h-5.8l-9.8,27.7c-0.7,2.1-1.5,5.4-1.5,5.4h-0.1c0,0-0.8-3.3-1.5-5.4l-9.7-27.7h-5.9
                      L240.7,39.8z"/>
                    <polygon className="logo__type--color" points="348.3,39.8 353.8,39.8 353.8,5.4 367.2,5.4 367.2,0.7 334.9,0.7 334.9,5.4 348.3,5.4  "/>
                    <rect x="394.3" y="0.7" className="logo__type--color" width="5.5" height="39.2"/>
                    <path className="logo__type--color" d="M441.3,39.8h5.5l14.4-39.2h-5.8l-9.8,27.7c-0.7,2.1-1.5,5.4-1.5,5.4H444c0,0-0.8-3.3-1.5-5.4l-9.7-27.7h-5.9
                      L441.3,39.8z"/>
                    <polygon className="logo__type--color" points="488.3,39.8 512,39.8 512,35.1 493.8,35.1 493.8,22.5 507.8,22.5 507.8,17.7 493.8,17.7 493.8,5.4 
                      511.1,5.4 511.1,0.7 488.3,0.7   "/>
                    <g>
                      <path className="logo__type--color" d="M190.1,30.4c2.8,0,5.3,0.8,7.5,2.1c2.5-3.4,4-7.6,4-12.2c0-11.2-8.9-20.3-19.8-20.3
                        c-10.9,0-19.8,9.1-19.8,20.3c0,9.3,6.1,17.1,14.3,19.5C178.6,34.3,183.9,30.4,190.1,30.4"/>
                    </g>
                    <path className="logo__type--color" d="M37.6,39.8h5.5V14.4c0-2.2-0.4-5.7-0.4-5.7h0.1c0,0,1.8,3.6,3.3,5.7l17.5,25.4h5.4V0.7h-5.5v25.5
                      c0,2.2,0.4,5.7,0.4,5.7h-0.1c0,0-1.8-3.6-3.3-5.7L43,0.7h-5.4V39.8z"/>
                    <path className="logo__type--color" d="M101,39.8h5.5V14.4c0-2.2-0.4-5.7-0.4-5.7h0.1c0,0,1.8,3.6,3.3,5.7L127,39.8h5.4V0.7h-5.5v25.5
                      c0,2.2,0.4,5.7,0.4,5.7h-0.1c0,0-1.8-3.6-3.3-5.7L106.4,0.7H101V39.8z"/>
                    <path className="logo__type--color" d="M240.7,39.8h5.5l14.4-39.2h-5.8l-9.8,27.7c-0.7,2.1-1.5,5.4-1.5,5.4h-0.1c0,0-0.8-3.3-1.5-5.4l-9.7-27.7h-5.9
                      L240.7,39.8z"/>
                    <g>
                      <path className="logo__type--color" d="M305.5,28.6h-14.8l-3.9,11.3h-5.7l14.1-39.2h5.8l14.1,39.2h-5.7L305.5,28.6z M298.1,6c0,0-0.9,3.6-1.6,5.5
                        L292.1,24H304l-4.3-12.4c-0.7-2-1.5-5.5-1.5-5.5H298.1z"/>
                    </g>
                  </g>
                </svg>
              </div>
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
