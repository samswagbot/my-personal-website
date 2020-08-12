import React, { useState } from 'react';
import styled from 'styled-components';
import { H2, Input, Label, Button } from 'Components/components';

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 45px;
  width: 100%;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media ${p => p.theme.device.mobileS} {
    margin-top: 40px;
  }
`;

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    msg: '',
  });

  const encode = data => {
    const formData = new FormData();
    Object.keys(data).forEach(k => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const updateFormValue = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form })
    })
      .then(() => setForm({ ...form, showModal: true }))
      .catch(error => alert(error));
    e.preventDefault();
  };

  return (
    <>
      <H2>Interested in collaborating on a project?</H2>
      <ContactForm
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={e => submitForm(e)}
      >
        <input type="hidden" name="form-name" value="contact" />
        <InputGroup>
          <Input
            id="full-name"
            type="text"
            name="name"
            aria-label="Full Name"
            aria-required="true"
            value={form.fName}
            onChange={e => updateFormValue(e)}
            required
            title="Please enter your name"
            placeholder=" "
          />
          <Label htmlFor="full-name">Name</Label>
        </InputGroup>
        <InputGroup>
          <Input
            id="Email"
            aria-label="Email"
            aria-required="true"
            type="email"
            name="email"
            value={form.email}
            onChange={e => updateFormValue(e)}
            required
            title="Please enter your email"
            placeholder=" "
          />
          <Label htmlFor="Email">Email</Label>
        </InputGroup>
        <InputGroup>
          <Input
            id="Message"
            aria-label="Message"
            aria-required="true"
            placeholder=" "
            name="msg"
            value={form.msg}
            onChange={e => updateFormValue(e)}
          />
          <Label htmlFor="Message">Message</Label>
        </InputGroup>
        <Button type="submit" value="Submit">
          Submit
        </Button>
      </ContactForm>
    </>
  );
};

export default Contact;
