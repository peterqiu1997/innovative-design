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

    const marketing = [
      {
        name: 'Liz Wu',
        tagline: 'rip me',
        photo: '/img/officers/liz.jpg'
      },
      {
        name: 'Sey Kim',
        tagline: 'shrek is love. shrek is life.',
        photo: '/img/officers/sey.jpg'
      },
      {
        name: 'Irene Dea',
        tagline: 'popoto',
        photo: '/img/officers/irene.jpg'
      },
      {
        name: 'David Bui',
        tagline: 'lets dispel with this fiction i have any idea what i\'m doing',
        photo: '/img/officers/davidb.jpg'
      }
    ];

    const officers = [
      {
        name: 'Jacqueline Woo',
        tagline: 'where\'s the selfie stick',
        title: 'President',
        photo: '/img/officers/jackie.jpg'
      },
      {
        name: 'Natasha Welingkar',
        tagline: 'never not laughing',
        title: 'President',
        photo: '/img/officers/natasha.jpg'
      },
      {
        name: 'Alven Wang',
        tagline: 'detail oriented team player who thinks outside the box',
        title: 'Design Services',
        tier: 'Gold Tier',
        photo: '/img/officers/alven.jpg'
      },
      {
        name: 'Natya Dharmosetio',
        tagline: '✌︎ hehe',
        title: 'Photo Services',
        tier: 'Photo Tier',
        photo: '/img/officers/natya.jpg'
      },
      {
        name: 'Sonia Hung',
        tagline: 'feed me kimchi and i\'ll love you <3 ',
        title: 'External',
        tier: 'Gold Tier',
        photo: '/img/officers/sonia.jpg'
      },
      {
        name: 'David Xie',
        tagline: 'succ(ulent) boi',
        title: 'External',
        tier: 'Gold Tier',
        photo: '/img/officers/davidx.jpg'
      },
      {
        name: 'Julia Sun',
        tagline: '1ce qube',
        title: 'Technology',
        tier: 'Web Tier',
        photo: '/img/officers/julia.jpg'
      },
      {
        name: 'Roya Chagnon',
        tagline: 'down with tech!',
        title: 'VP of Marketing',
        tier: 'Marketing Tier',
        photo: '/img/officers/roya.jpg'
      },
      {
        name: 'Catherine Zhou',
        tagline: '!! ༼;´༎ຶ ۝ ༎ຶ༽',
        title: 'VP of Marketing',
        tier: 'Marketing Tier',
        photo: '/img/officers/cassie.jpg'
      },
      {
        name: 'Arlan Jaska',
        tagline: '\"><script>alert(/xss/)</script>',
        title: 'Finance',
        tier: 'Web Tier',
        photo: '/img/officers/arlan.jpg'
      },
      {
        name: 'Brian Giang',
        tagline: '*eye emoji*',
        title: 'Admin',
        tier: 'Gold Tier',
        photo: '/img/officers/brian.jpg'
      },
      {
        name: 'Peter Phan',
        tagline: 'photo slave',
        title: 'Recollections',
        tier: 'Photo Tier',
        photo: '/img/officers/peter.jpg'
      },
      {
        name: 'Charley Huang',
        tagline: 'More than you can afford, pal. Ferrari.',
        title: 'Internal',
        tier: 'Video Tier',
        photo: '/img/officers/charley.jpg'
      },
      {
        name: 'Soph Li',
        tagline: 'member of the 4am club',
        title: 'Internal',
        tier: 'Photo Tier',
        photo: '/img/officers/soph.jpg'
      },
      {
        name: 'Grace Noh',
        tagline: 'My wifi password is \"catsaregreat.\"',
        title: 'Education Coordinator',
        tier: 'Intro Decal',
        photo: '/img/officers/grace.jpg'
      },
      {
        name: 'Yudi Sun',
        tagline: 'shark baby',
        title: 'Education Outreach',
        tier: 'Gold Tier',
        photo: '/img/officers/yudi.jpg'
      },
      {
        name: 'Shota Pangilinan',
        tagline: 'bad spiderman',
        title: 'Advisor',
        tier: 'Photo Tier',
        photo: '/img/officers/shota.jpg'
      },
      {
        name: 'Charisse Celestial',
        tagline: 'ᕕ( ᐛ )ᕗ',
        title: 'Advisor',
        tier: 'Intro Decal',
        photo: '/img/officers/charisse.jpg'
      },
      {
        name: 'Jason Mai',
        tagline: 'worst behavior',
        title: 'Advisor',
        tier: 'Graphic Design Principles and Photo Decals',
        photo: '/img/officers/jason.jpg'
      },
      {
        name: 'Brandon Chau',
        tagline: 'photo senpai',
        title: 'Advisor',
        tier: 'Photo Decal',
        photo: '/img/officers/brandon.jpg'
      },
      {
        name: 'Tina Xu',
        tagline: 'Generic asian girl (ʘ‿ʘ✿)',
        title: 'Advisor',
        tier: 'Blue Tier',
        photo: '/img/officers/tina.jpg'
      },
      {
        name: 'Davinci Lam',
        tagline: 'rave god',
        title: 'Facilitator',
        tier: 'Photo Decal',
        photo: '/img/officers/davinci.jpg'
      },
      {
        name: 'Margaret Zhou',
        tagline: 'margiemARgiemargaretmARgaret',
        title: 'Facilitator',
        tier: 'Intro Decal',
        photo: '/img/officers/margie.jpg'
      },
      {
        name: 'Pamela Hu',
        tagline: 'Knock knock? Hu\'s there.',
        title: 'Facilitator',
        tier: 'Photo Decal',
        photo: '/img/officers/pam.jpg'
      },
      {
        name: 'Hongye Xu',
        tagline: 'Pray for me, I\'m bout to hit the Ye button',
        title: 'Advisor',
        photo: '/img/officers/hongye.jpg'
      },
      {
        name: 'Ben Marimon',
        tagline: 'diversity hire',
        title: 'Advisor',
        photo: '/img/officers/ben.jpg'
      },
      {
        name: 'Allan Peng',
        tagline: 'imma bee imma bee imma bee',
        title: 'Advisor',
        photo: '/img/officers/allan.jpg'
      },
      {
        name: 'Jordan Said',
        tagline: 'Doing too much. Asha?',
        title: 'Advisor',
        photo: '/img/officers/jordan.jpg'
      }
    ];

    const officerElements = _.map(officers, (person, index) => {
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

    const marketingElements = _.map(marketing, (person, index) => {
      return (
        <div
          key={ `personElem-${index}` }
          className="marketing"
        >
          <div className="marketing__photo">
            <img
              src={ prefixLink(person.photo) }
            />
          </div>
          <div className="marketing__overlay marketing__overlay--left"></div>
          <div className="marketing__overlay marketing__overlay--right"></div>
          <div className="marketing__details">
            <div className="marketing__detail--name">
              { person.name }
            </div>
            <div className="marketing__detail--tagline">
              <i>{ person.tagline }</i>
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
              { officerElements }
            </div>
            <h1 className="section__title">
              marketing
            </h1>
            <div className="marketing__wrapper">
              { marketingElements }
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
