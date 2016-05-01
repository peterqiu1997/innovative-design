import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import $ from 'jquery';

import 'css/_index.scss';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },

  componentDidMount() {},

  render () {
    return (
      <div className="root">
        <div className="content">
          { this.props.children }
        </div>
        <div className="nav">
          <div className="nav__wrapper">
            <a href="/">
              <div className="nav__item">
                home
              </div>
            </a>
            <a href="/about/">
              <div className="nav__item">
                about
              </div>
            </a>
            <a href="/team/">
              <div className="nav__item">
                team
              </div>
            </a>
            <a href="/events/">
              <div className="nav__item">
                events
              </div>
            </a>
            <a href="/decal/">
              <div className="nav__item">
                decal
              </div>
            </a>
            <a href="/contact/">
              <div className="nav__item">
                contact
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  },
})
