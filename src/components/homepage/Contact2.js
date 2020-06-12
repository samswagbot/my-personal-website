import React from 'react';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange(e) {
    console.log(e)
      this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name:{' '}
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => this.handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{' '}
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => this.handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{' '}
            <textarea
              name="message"
              value={message}
              onChange={e => this.handleChange(e)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}

export default ContactForm;
