import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Alert, Container } from 'reactstrap'
import TelLinkGenerator from './TelLinkGenerator'
import EmailLinkGenerator from './EmailLinkGenerator'
import Header from './Header'

class App extends Component {
  render() {
    const daysRemaining = Math.round((new Date(2022, 11, 28) - new Date()) / (24 * 60 * 60 * 1000))
    return (
      <Router>
          <Container fluid="md">
            <Alert color="danger">
              <p>
                This site will be retired, and links will stop working on November 28, 2022
                (in {' '}{daysRemaining}{' '} day{daysRemaining > 1 ? 's' : ''}),
                when the
                <a className="alert-link" href="https://blog.heroku.com/next-chapter">
                  Heroku free tear is retired
                </a>
                .
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
