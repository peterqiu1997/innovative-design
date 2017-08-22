import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router';
import classNames from 'classnames';

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
    console.log("called");
    return (
      <div key={key} className="grid-item"><div className="img__container"><img src={path} /></div></div>
    );
  };

  componentDidMount() {
    window.addEventListener("scroll", this._handleScroll);

    const divs = []

    for (let i = 1; i < 11; i += 1) {
      divs.push(this.generate(i, "/img/portfolio/img" + i + ".png"))
    }

    this.setState({
      divs: divs,
      count: 10
    }, () => {
      this.setState({
        divs: this.state.divs.concat(this.generate(11, "/img/portfolio/img" + 11 + ".png")),
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
        for (let i = 1; i < 4; i += 1) {
          let path = "/img/portfolio/img" + i + ".png";
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
                <div className="grid-item intro">
                    <span>Innovative Design</span> is a family of graphic designers, web designers, and photographers at the University of California, Berkeley. 
                    <br />
                    <br />
                    We are creative individuals who are continuously evolving by collaborating, inspiring and educating one another.
                    <br />
                    <br />
                    Scroll down to view our work. 
                </div>
                {this.state.divs}
            </Masonry>
        </div>
    )
  }
}
