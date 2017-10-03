import React from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';

import $ from 'jquery';
import _ from 'lodash';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const timeline = (
      <ul className="timeline">
        <li className="event" data-date="August 29, 2017">
          <h3>Decal Infosession</h3>
          <h4 className="hidden__date">August 29, 2017</h4>
          <p>
            Are you interested in graphic design or photography but have no experience?
            Come out to our decal infosession to learn more about the decals we offer!
          </p>
          <div className="button__wrapper">
            <a href="https://www.facebook.com/events/862106073942194/" target="_blank">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="September 7, 2017">
          <h3>Club Infosession</h3>
          <h4 className="hidden__date">September 7, 2017</h4>
          <p>
            Interested in joining the Innovative Design family?  Come out to our club infosession and find out more about
            Innovative Design and each of the different tiers.
          </p>
          <div className="button__wrapper">
            <a href="https://www.facebook.com/events/2005703226341629/" target="_blank">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="October 14, 2017">
          <h3>HEX: Hone and Explore</h3>
          <h4 className="hidden__date">October 14, 2017</h4>
          <p>
            HEX: Hone and Explore is a workshop series where students come to learn and teach design. Workshops are taught by members and alumni of <a ng-href="http://innovativedesign.club" href="http://innovativedesign.club">Innovative Design</a>.
            They are free and open to ALL skill levels and Cal students! Come out to learn from and meet fellow design-minded students.
          </p>
          <div className="button__wrapper">
            <a href="" target="_blank">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="October 21, 2017">
          <h3>HEX: Hone and Explore</h3>
          <h4 className="hidden__date">October 21, 2017</h4>
          <p>
            HEX: Hone and Explore is a workshop series where students come to learn and teach design. Workshops are taught by members and alumni of <a ng-href="http://innovativedesign.club" href="http://innovativedesign.club">Innovative Design</a>.
            They are free and open to ALL skill levels and Cal students! Come out to learn from and meet fellow design-minded students.
          </p>
          <div className="button__wrapper">
            <a href="" target="_blank">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="October 28, 2017">
          <h3>HEX: Hone and Explore</h3>
          <h4 className="hidden__date">October 28, 2017</h4>
          <p>
            HEX: Hone and Explore is a workshop series where students come to learn and teach design. Workshops are taught by members and alumni of <a ng-href="http://innovativedesign.club" href="http://innovativedesign.club">Innovative Design</a>.
            They are free and open to ALL skill levels and Cal students! Come out to learn from and meet fellow design-minded students.
          </p>
          <div className="button__wrapper">
            <a href="" target="_blank">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="November 4, 2017">
          <h3>CMYK: Come Make Your Mark</h3>
          <h4 className="hidden__date">November 4, 2017</h4>
          <p>
            Join us on Saturday, November 4th for a day of learning and exciting competition with peers and professional designers
          </p>
          <div className="button__wrapper">
            <a href="" target="_blank">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
      </ul>
    );

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper events">
            <h1 className="section__title">upcoming events</h1>
            <div className="info">
              Here is the timeline for our public events this semester.  "Coming Soon" means the Facebook event has not yet been made for the event.
              You can check back here or like our Facebook page for updates.
            </div>
            { timeline }
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
