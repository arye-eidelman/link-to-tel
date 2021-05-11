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
      <>
        <h2>Generate a phone call link</h2>
        <p className="text-muted">Clicking this link will open the dialer with this number prefilled.</p>

        <Form onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <Label for="phoneNumber">Phone number</Label>
            <Input type="tel" name="phoneNumber" id="phoneNumber" placeholder="+1 800 555 0123"
              onChange={this.handlePhoneNumberChange} value={this.state.phoneNumber} />
          </FormGroup>
        </Form>
        <br />
        {!this.state.phonNumber || this.linkResult()}
      </>
    )
  }
}

export default TelLinkGenerator
