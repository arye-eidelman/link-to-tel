import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

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
      <Container>
        <h2>Generate a URL to send an email (using the mailto: protocol).</h2>
        <p>Great for places where you can only insert standard web links.</p>

        <Form onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <Label for="emailAddress">Email Address</Label>
            <Input type="email" name="emailAddress" id="emailAddress" placeholder="example@example.com"
              onChange={this.handleEmailAddressChange} value={this.state.emailAddress} />
          </FormGroup>
        </Form>
        <br />
        {!this.state.emailAddress || this.linkResult()}
      </Container>
    )
  }
}

export default TelLinkGenerator
