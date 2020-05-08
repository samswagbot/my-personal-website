import React, { useState } from 'react';
import styled from 'styled-components';
import { H2, Input, Label, Button, Modal } from 'Components/components';

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
`;

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    msg: '',
    showModal: false,
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
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => setForm({ ...form, showModal: true }))
      .catch(error => alert(error));
  };

  return (
    <>
      <H2>Interested in collaborating on a project?</H2>
      <ContactForm onSubmit={e => submitForm(e)}>
        <InputGroup>
          <Input
            id="full-name"
            type="text"
            name="fullName"
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
        <Button type="submit" value="Submit">Submit</Button>
          {form.showModal && <Modal/>}
      </ContactForm>
    </>
  );
};

export default Contact;
