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

    const officers = [
      {
        name: 'Jacqueline Woo',
        title: 'President',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Natasha Welingkar',
        title: 'President',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Alven Wang',
        tagline: 'yolo',
        title: 'Design Services',
        tier: 'Gold Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Natya Dharmosetio',
        tagline: '✌︎ hehe',
        title: 'Photo Services',
        tier: 'Photo Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Sonia Hung',
        title: 'External',
        tier: 'Gold Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'David Xie',
        tagline: 'succulent boi',
        title: 'External',
        tier: 'Gold Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Roya Chagnon',
        tagline: 'down with tech!',
        title: 'VP of Marketing',
        tier: 'Marketing Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Catherine Zhou',
        tagline: '!! ༼;´༎ຶ ۝ ༎ຶ༽',
        title: 'VP of Marketing',
        tier: 'Marketing Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Julia Sun',
        tagline: '1ce qube',
        title: 'Technology',
        tier: 'Web Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Arlan Jaska',
        tagline: '\"><script>alert(/xss/)</script>',
        title: 'Finance',
        tier: 'Web Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Brian Giang',
        tagline: '*eye emoji*',
        title: 'Admin',
        tier: 'Gold Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Peter Phan',
        title: 'Recollections',
        tier: 'Photo Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Charley Huang',
        tagline: 'more than you can afford, pal. ferrari.',
        title: 'Internal',
        tier: 'Video Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Soph Li',
        tagline: 'member of the 4am club',
        title: 'Internal',
        tier: 'Photo Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Grace Noh',
        tagline: 'my wifi password is \'cats are great\'',
        title: 'Education Coordinator',
        tier: 'Intro to Photoshop and Illustrator Decal',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Yudi Sun',
        tagline: 'shark baby',
        title: 'Education Outreach',
        tier: 'Intro to Photoshop and Illustrator Decal',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Shota Pangilinan',
        tagline: 'bad spiderman',
        title: 'Advisor',
        tier: 'Photo Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Charisse Celestial',
        tagline: 'ᕕ( ᐛ )ᕗ',
        title: 'Advisor',
        tier: 'Intro to Photoshop and Illustrator Decal',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Jason Mai',
        title: 'Advisor',
        tier: 'Graphic Design Principles and Photo Decals',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Brandon Chau',
        title: 'Advisor',
        tier: 'Photo Decal',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Tina Xu',
        tagline: 'Generic asian girl (ʘ‿ʘ✿)',
        title: 'Advisor',
        tier: 'Blue Tier',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Jeffrey Shi',
        title: 'Facilitator',
        tier: 'Graphic Design Principles Decal',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Davinci Lam',
        tagline: 'rave god',
        title: 'Facilitator',
        tier: 'Photo Decal',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Pamela Hu',
        title: 'Facilitator',
        tier: 'Photo Decal',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Allan Peng',
        title: 'Facilitator',
        tier: 'Photo Decal',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Hongye Xu',
        tagline: 'pray for me, i\'m about to hit the ye button',
        title: 'Advisor',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Ben Marimon',
        tagline: 'diversity hire',
        title: 'Advisor',
        photo: '/img/officers/cat.jpg'
      },
      {
        name: 'Jordan Said',
        tagline: 'doing too much. asha?',
        title: 'Advisor',
        photo: '/img/officers/cat.jpg'
      }
    ];

    const peopleElements = _.map(officers, (person, index) => {
      return (
        <div
          key={ `personElem-${index}` }
          className="officer"
        >
          <div className="officer__photo">
            <img
              src={ prefixLink(person.photo) }
            />
          </div>
          <div className="officer__overlay officer__overlay--left"></div>
          <div className="officer__overlay officer__overlay--right"></div>
          <div className="officer__details">
            <div className="officer__detail--name">
              { person.name }
            </div>
            <div className="officer__detail--tagline">
              <i>{ person.tagline }</i>
            </div>
            <div className="officer__detail--title">
              { person.title }
            </div>
            <div className="officer__detail--tier">
              { person.tier }
            </div>
          </div>
        </div>
      );
    });

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper team">
            <h1 className="section__title">
              officers
            </h1>
            <div className="officers">
              { peopleElements }
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
