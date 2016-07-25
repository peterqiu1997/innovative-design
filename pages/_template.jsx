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
  },

  render () {
    return (
      <div className="root">
        <div className="content">
          { this.props.children }
        </div>
        <div className="nav">
          <div className="nav__wrapper">
            <a href={ prefixLink('/') }>
              <div className="nav__item">
                home
              </div>
            </a>
            <a href={ prefixLink('/about/') }>
              <div className="nav__item">
                about
              </div>
            </a>
            <a href={ prefixLink('/team/') }>
              <div className="nav__item hide__second">
                team
              </div>
            </a>
            <a href={ prefixLink('/events/') }>
              <div className="nav__item hide__last">
                events
              </div>
            </a>
            <a href={ prefixLink('/decal/') }>
              <div className="nav__item hide__first">
                decal
              </div>
            </a>
            <a href={ prefixLink('/contact/') }>
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
