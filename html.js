import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    };
  },
  render () {
    const title = DocumentTitle.rewind();

    let cssLink;
    let environment = process.env.NODE_ENV;

    if (environment === 'production' ||  environment === 'staging') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="Julia Sun" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <meta
            name="description"
            content=""
          />
          <meta
            name="keywords"
            content=""
          />
          <title>{ title }</title>
          
          <link 
            rel="icon" 
            type="img/png"
            href={ prefixLink('/img/Logo.png') }
          />
          <link
            href='https://fonts.googleapis.com/css?family=Lato:400,400italic,700'
            rel='stylesheet'
            type='text/css'
          />
          <link 
            href='https://fonts.googleapis.com/css?family=Open+Sans' 
            rel='stylesheet' 
            type='text/css'
          />
          <link 
            href='https://fonts.googleapis.com/css?family=Raleway:400,700,800,900' 
            rel='stylesheet' 
            type='text/css'
          />
          <link 
            href='https://fonts.googleapis.com/css?family=Montserrat' 
            rel='stylesheet' 
            type='text/css'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Fira+Sans:400,300,300italic,400italic,500,500italic,700,700italic'
            rel='stylesheet'
            type='text/css'
          />

          { cssLink }
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={ prefixLink('/bundle.js') } />
        </body>
      </html>
    );
  }
});
