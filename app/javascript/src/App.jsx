import React, { Component } from 'react'
import TelLinkGenerator from './TelLinkGenerator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Link To Tel</h1>
        <h2>Generate a url that redirects to a phone number (tel: link)</h2>
        <p>Great for places where you can only insert http(s): links and not tel: links</p>

        <TelLinkGenerator />
      </div>
    )
  }
}

export default App
