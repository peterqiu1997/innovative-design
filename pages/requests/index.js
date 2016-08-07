import React from 'react';
import Datepicker from 'react-datepicker';
import DocumentTitle from 'react-document-title';
import moment from 'moment';
import { prefixLink } from 'gatsby-helpers';

import $ from 'jquery';
import _ from 'lodash';

require('react-datepicker/dist/react-datepicker.css');

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this._handleDateChange = this._handleDateChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleSubmissionError = this._handleSubmissionError.bind(this);
    this._handleSubmissionSuccess = this._handleSubmissionSuccess.bind(this);

    this.state = {
      selectedDate: null,
      sending: false,
      sent: false,
      sentError: null,
      request: {
        campus: 'campus__title',
        type: 'project__title'
      }
    };
  }

  _handleSubmissionError(error) {
    console.error(error.responseJSON); // {error, message, statusCode}
    this.setState({
      sent: true,
      sending: false,
      sentError: error.responseJSON // Error,
    });

    $('html, body').animate({
      scrollTop: $(document).height()
    }, 400);
  }

  _handleSubmissionSuccess() {
    this.setState({
      sent: true,
      sending: false,
      sentError: null
    });
  }

  _handleSubmit(e) {
    e.preventDefault();

    const jsonPayload = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      organization: this.refs.organization.value,
      description: this.refs.description.value,
      campus: this.refs.campus.value,
      type: this.refs.type.value,
      deadline: this.state.selectedDate.format("MM/DD/YYYY"),
      project: this.refs.project.value,
      questions: this.refs.questions.value
    };

    console.log(jsonPayload);

    this.setState({
      sending: true,
      request: jsonPayload
    });

    // $.ajax({
    //   url: '',
    //   type: 'POST',
    //   headers: {
    //     "X-API-Version": "kitty/v1"
    //   },
    //   contentType: 'application/json',
    //   data: jsonPayload,
    //   success: this._handleSubmissionSuccess,
    //   error: this._handleSubmissionError
    // });

    setTimeout(() => {
      this._handleSubmissionError({
        responseJSON: {
          message: "There was an error processing your request."
        }
      });
    }, 2000);
  }

  _handleDateChange(date) {
    this.setState({
      selectedDate: date
    });
  }

  componentDidMount() {}

  render () {
    const dateProps = {
      minDate: moment().add(3, 'w'),
      selected: this.state.selectedDate,
      onChange: this._handleDateChange
    };

    const sentMsgBody = (
      <div className="sent__message">
        <p>
          Your request is currently being delivered by a group of avocado enthusiasts. 
          An officer should be reaching out to you in a couple days to discuss the details of the project. 
        </p>
        <p>
          Feel free to reach out to 
          <a href="mailto:innovativedesignatcal@gmail.com">innovativedesignatcal@gmail.com</a> 
          with additional questions.
        </p>
      </div>
    );

    var formBody;

    console.log(this.state);

    const generateUnsentFormBodyMarkup = () => {
      const formButton = !this.state.sending ? (
        <div className="button__wrapper">
          <button id="form__submit" type="submit">
            submit
          </button>
        </div>
      ) : (
        <div className="button__wrapper">
          <div className="submit__loader"></div>
        </div>
      );

      return (
        <form id="request-form" onSubmit={ this._handleSubmit }>
          <div className="input__container">
            <input
              ref="name"
              id="name"
              name="name"
              defaultValue={ this.state.request.name }
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input__container">
            <input
              ref="email"
              type="email"
              id="email"
              name="email"
              defaultValue={ this.state.request.email }
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input__container">
            <input
              ref="phone"
              type="phone"
              id="phone"
              name="phone"
              defaultValue={ this.state.request.phone }
              required
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="input__container">
            <input
              ref="organization"
              type="organization"
              id="organization"
              name="organization"
              defaultValue={ this.state.request.organization }
              required
            />
            <label htmlFor="organization">Organization</label>
          </div>
          <div className="input__container">
            <textarea
              ref="description"
              name="description"
              id="description"
              defaultValue={ this.state.request.description }
              required
            ></textarea>
            <label htmlFor="description">Organization Description</label>
          </div>
          <div className="dropdown__wrapper">
            <select
              ref="campus"
              name="campus"
              id="campus"
              defaultValue={ this.state.request.campus }
              required
            >
              <option value="campus__title" disabled>Are you on or off campus?</option>
              <option value="on-campus-registered">
                On campus, as a registered student organization
              </option>
              <option value="on-campus-university">On campus, as a university program</option>
              <option value="off-campus">Off campus</option>
            </select>
          </div>
          <div className="dropdown__wrapper">
            <select
              ref="type"
              name="type"
              id="type"
              defaultValue={ this.state.request.type }
              required
            >
              <option value="project__title" disabled>Project Type</option>
              <option value="photo">Photography</option>
              <option value="video">Videography</option>
              <option value="web">Web Design</option>
              <option value="graphic">Graphic Design</option>
            </select>
          </div>
          <div className="input__container">
            <Datepicker name="deadline" {...dateProps} placeholderText="deadline" id="deadline" />
          </div>
          <div className="input__container">
            <textarea
              ref="project"
              name="project"
              id="project"
              defaultValue={ this.state.request.project }
              required
            ></textarea>
            <label htmlFor="project">Project Description</label>
          </div>
          <div className="input__container">
            <textarea
              ref="questions"
              name="questions"
              id="questions"
              defaultValue={ this.state.request.questions }
            ></textarea>
            <label htmlFor="questions">Additional Information</label>
          </div>

          { formButton }
        </form>
      );
    };

    if (this.state.sent && !this.state.sentError) {
      formBody = sentMsgBody;
    } else {
      formBody = generateUnsentFormBodyMarkup();
    }

    const errorBody = this.state.sentError ? (<div>{ this.state.sentError.message }</div>) : null;

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper requests">
            <h1 className="section__title">design requests</h1>
            <div className="page__wrapper requests">
              <div className="request__info">
                Please submit design requests through the form below.
              </div>
              <div className="request__form">
                { formBody }
              </div>
              <div className="request__error">
                { errorBody }
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
