import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class TelLinkGenerator extends Component {
  state = { phonNumber: "" }

  handlePhoneNumberChange = (e) => {
    this.setState({ phonNumber: e.target.value })
  }

  generateLink() {
    return `${window.origin}/tel/${encodeURIComponent(this.state.phonNumber)}`
  }

  linkResult = () => (
    <p>
      <a href={this.generateLink()} >
        <Button outline color="success">
          <i className="material-icons pr-2 align-bottom">phone </i>
          {this.state.phonNumber}
        </Button>
      </a>
    </p>
  )

  render() {
    return (
      <Container>
        <h2>Generate a URL to call a phone number (using the tel: protocol)</h2>
        <p>Great for places where you can only insert standard web links</p>

        <Form onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <Label for="phoneNumber">Phone number</Label>
            <Input type="tel" name="phoneNumber" id="phoneNumber" placeholder="+1 800 555 0123"
              onChange={this.handlePhoneNumberChange} value={this.state.phoneNumber} />
          </FormGroup>
        </Form>
        <br />
        {!this.state.phonNumber || this.linkResult()}
      </Container>
    )
  }
}

export default TelLinkGenerator
