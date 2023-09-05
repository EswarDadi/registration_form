import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    errorMsg: false,
    lastNameError: false,
    isFormSubmitted: false,
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({errorMsg: true})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameError: true})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
    this.setState({errorMsg: false})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
    this.setState({errorMsg: false})
  }

  onSubmit = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()
    if (firstName !== '' && lastName !== '') {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        isFormSubmitted: false,
      })
    }
    if (firstName === '') {
      this.setState({errorMsg: true})
    }
    if (lastName === '') {
      this.setState({lastNameError: true})
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
    }))
    this.setState({firstName: '', lastName: ''})
  }

  onsubmitSuccessView = () => {
    console.log('submit')
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
          alt="success"
        />
        <p>Submitted Successfully</p>
        <button type="button" onClick={this.onClickSubmitAnotherResponse}>
          Submit Another Response
        </button>
      </div>
    )
  }

  renderForm = () => {
    const {firstName, lastName, errorMsg, lastNameError} = this.state
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="firstName">FIRST NAME</label>
          <br />
          <input
            type="text"
            id="firstName"
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
            value={firstName}
            placeholder="First name"
          />
          <br />
          {errorMsg ? <p>Required</p> : ''}

          <label htmlFor="lastName">LAST NAME</label>
          <br />
          <input
            type="text"
            id="lastName"
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
            value={lastName}
            placeholder="Last name"
          />
          <br />
          {lastNameError ? <p>Required</p> : ' '}
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div>
        <h1>Registration</h1>
        {isFormSubmitted ? this.onsubmitSuccessView() : this.renderForm()}
      </div>
    )
  }
}
export default RegistrationForm
