import React, { Component } from 'react'

class TelLinkGenerator extends Component {
  state = { phonNumber: "" }

  handlePhoneNumberChange = (e) => {
    this.setState({ phonNumber: e.target.value })
  }

  generateLink() {
    return `${window.origin}/tel/${this.state.phonNumber}`
  }

  linkResult = () => <p> Link: <a href={this.generateLink()} > {this.generateLink()} </a> </p>

  render() {
    return (
      <div>
        <form>
          <label>
            <p>Create Telephone Link</p>
            <input type="tel" name="phoneNumber" onChange={this.handlePhoneNumberChange} />
          </label>
        </form>
        <br/>
        {!this.state.phonNumber || this.linkResult()}
      </div>
    )
  }
}

export default TelLinkGenerator
