import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Alert, Container } from 'reactstrap'
import TelLinkGenerator from './TelLinkGenerator'
import EmailLinkGenerator from './EmailLinkGenerator'
import Header from './Header'

class App extends Component {
  render() {
    const daysRemaining = Math.round((new Date(2021, 11, 30) - new Date()) / (24 * 60 * 60 * 1000))
    return (
      <Router>
          <Container fluid="md">
            <Alert color="danger">
              <p>
                This site is moving to {' '}
                <a className="alert-link" href="https://link-to-tel.herokuapp.com/">
                  link-to-tel.herokuapp.com
                </a>.
              </p>
            
              <p>
                <a className="alert-link" href="https://www.linktotel.com/">
                  www.linktotel.com
                </a> {' '}
                links will stop working on December 30 2021 (in
                <b>{' '}{daysRemaining}{' '}
                day{daysRemaining > 1 ? 's' : ''}</b> from now).
              </p>
            </Alert>

          <Header />

          <Switch>
            <Route exact path="/" component={TelLinkGenerator} />
            <Route path="/tel/new" component={TelLinkGenerator} />
            <Route path="/email/new" component={EmailLinkGenerator} />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
