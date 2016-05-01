// import React, {Component, Proptypes} from 'react';
// import _ from 'lodash';

// export default class Typing extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       typingAnimator: null,
//       currentTypingString: 0
//     };

//     this._typingAnimator = this._typingAnimator.bind(this);
//     this._createTypingAnimator = this._createTypingAnimator.bind(this);
//   }

//   componentDidMount() {
//     if (this.props.strings.length > 0) {
//       this.setState({
//         typingAnimator: this._createTypingAnimator();
//       });
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.state.typingAnimator);
//   }

//   _createTypingAnimator() {
//     const letterInterval = this.props.interval.letter;
//     const wordInterval = this.props.interval.word;
//     const stringsToType = this.props.strings;

//     return setInterval(() => {});
//   }

//   render() {
//     const cursorElement = this.props.cursor ? (
//       <span className="typing__cursor">
//         { this.props.cursor }
//       </span>
//     ) : null;

//     return (
//       <div className="typing__container">
//         <span ref="typing__animator" className="typing__text">
          
//         </span>

//         { cursorElement }

//         <div className="typing__item"></div>
//         <div className="typing__item"></div>
//         <div className="typing__item"></div>
//         <div className="typing__item"></div>
//         <div className="typing__item"></div>
//         <div className="typing__item"></div>
//         <div className="typing__item"></div>
//       </div>
//     );
//   }
// }
