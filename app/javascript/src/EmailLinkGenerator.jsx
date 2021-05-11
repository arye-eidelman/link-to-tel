import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class TelLinkGenerator extends Component {
  state = { emailAddress: "" }

  handleEmailAddressChange = (e) => {
    this.setState({ emailAddress: e.target.value })
  }

  generateLink() {
    return `${window.origin}/email/${encodeURIComponent(this.state.emailAddress.replace(/\./g, "%2E"))}`
  }

  linkResult = () => (
    <p>
      <a href={this.generateLink()} >
        <Button outline color="success">
          <i className="material-icons pr-2 align-bottom">email </i>
          {this.state.emailAddress}
        </Button>
      </a>
    </p>
  )

  render() {
    return (
      <>
        <h2>Generate an email link</h2>
        <p className="text-muted">Clicking this link will start a new email to this address in your email app.</p>

        <Form onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <Label for="emailAddress">Email Address</Label>
            <Input type="email" name="emailAddress" id="emailAddress" placeholder="example@example.com"
              onChange={this.handleEmailAddressChange} value={this.state.emailAddress} />
          </FormGroup>
        </Form>
        <br />
        {!this.state.emailAddress || this.linkResult()}
      </>
    )
  }
}

export default TelLinkGenerator
