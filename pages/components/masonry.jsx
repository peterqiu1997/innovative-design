import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router';
import classNames from 'classnames';
import $ from 'jquery';

const bottomOffset = 100;

export default class MasonryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      divs: [],
      count: 0,
      open: false
    }

    this._handleScroll = this._handleScroll.bind(this);
    this.generate = this.generate.bind(this);
  }

  generate(key, path)  {
    return (
      <div key={key} className="grid-item"><div className="img__container"><img src={path} /></div></div>
    );
  };

  componentDidMount() {
    window.addEventListener("scroll", this._handleScroll);

    const divs = []
    divs.push(this.generate(1, "/img/portfolio/logos_innod-" + 13 + ".png"))
    divs.push(this.generate(2, "/img/portfolio/logos_innod-" + 14 + ".png"))
    for (let i = 1; i <= 6; i += 1) {
      divs.push(this.generate(2 + i, "/img/portfolio/logos_innod-" + i + ".jpg"))
    }

    // extra setState because of formatting issues initially
    this.setState({
      divs: divs,
      count: 8
    }, () => {
      this.setState({
        divs: this.state.divs.concat(this.generate(9, "/img/portfolio/logos_innod-" + 9 + ".jpg")),
        count: this.state.count + 1
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleScroll);
  }

  _handleScroll(e) {
    if (this.state.count < 30) {
      var d = document.documentElement;
      var offset = d.scrollTop + window.innerHeight;
      var height = d.offsetHeight;
      var scrolly = window.scrollY;
      if (scrolly >= height - offset - bottomOffset) {
        for (let i = this.state.count; i <= 12; i += 1) {
          let path = "/img/portfolio/logos_innod-" + i + ".jpg";
          this.setState({
            divs: this.state.divs.concat([<div key={this.state.count + 1} className="grid-item"><img src={path} /></div>]),
            count: this.state.count + 1
          });
        }
      }
    }
  }

  render() {
    const options = {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
    }

    return (
        <div className="masonry--container">
            <Masonry options={options} updateOnEachImageLoad={true}>
                <div className="grid-sizer"></div>
                <div className="grid-item hero">
                  <div className="img__container">
                    <a href="https://www.facebook.com/pg/InnovativeDesignUCB/events/">
                      <img src="/img/portfolio/hero.png"/>
                    </a>
                  </div>
                </div>
                <div className="grid-item intro">
                    <span>Innovative Design</span> is a family of graphic designers, web designers, and photographers at the University of California, Berkeley. 
                    <br />
                    <br />
                    We are creative individuals who are continuously evolving by collaborating, inspiring and educating one another.
                    <br />
                    <br />
                    Scroll down to view our work. 
                </div>
                <div className="content__container">
                  {this.state.divs}
                </div>
            </Masonry>
        </div>
    )
  }
}
