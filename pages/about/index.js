import React from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';

import $ from 'jquery';
import _ from 'lodash';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render () {
    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper about">
            <h1 className="section__title">about us</h1>
            <div className="intro__wrapper">
              <div className="info left">Who are we?</div>
              <div className="info right">
                <b>Innovative Design</b> is a family of designers, photographers, web developers, and videographers
                at the University of California, Berkeley. We are creative individuals who are continuously
                evolving by collaborating, inspiring and educating one another. It is through our different
                artistic tools and talents that we are able to create novel photographs, designs, videos, and
                websites for our peers and professional clients.
              </div>
              <div className="info left">What do we do?</div>
              <div className="info right">
                We design things
              </div>
              <div className="info left">How can I join?</div>
              <div className="info right">
                The club has six tiers that students can apply to be a member on: <b>Blue, Gold, Photo, Video, Web and Product</b>.
                In addition, Innovative Design also has a dedicated <b>Marketing tier</b>, which members can apply to after having
                been in the club for at least one semester.  You can read more about each of the individual tiers below.
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
