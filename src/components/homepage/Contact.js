import React, { useState } from 'react';
import styled from 'styled-components';
import { H2, Input } from 'Components/components';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const FormLabel = styled.label`
  display: flex;
  align-self: flex-start;
  color: ${p => p.theme.colors.taxiYellow};
  margin-top: 20px;
  margin-bottom: 5px;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 45px;
  width: 100%;
`;

const FormMessage = styled.textarea`
  color: ${p => p.theme.colors.lightGray};
  font-size: ${p => p.theme.fontSizes.small};
  width: 100%;
  resize: none;
  height: 100px;
  text-indent: 5px;
  border: ${p => p.theme.borders.formInputBorder};
  border-left: 3px solid;
  border-radius: 5px;
  &::placeholder {
    color: ${p => p.theme.colors.lightGray};
  }
  &:not(:placeholder-shown) {
    border: ${p => p.theme.borders.formInputInvalidBorder};
    border-left: 3px solid ${p => p.theme.colors.burgundy};
  }
  &:valid {
    border: ${p => p.theme.borders.formInputValidBorder};
    border-left: 3px solid ${p => p.theme.colors.taxiYellow};
  }
  &:focus {
    outline-width: 0;
  }
`;

const SubmitButton = styled.input`
  padding: 10px 15px;
  letter-spacing: 1px;
  background-color: ${p => p.theme.colors.taxiYellow};
  color: ${p => p.theme.colors.white};
  width: 100%;
  font-size: ${p => p.theme.fontSizes.small};
  margin: 20px 0;
  border-radius: 5px;
  &:hover {
    opacity: ${p => p.theme.opacity.mainOpacity};
  }
`;

const Contact = () => {
  const [form, setForm] = useState({
    fName: '',
    lName: '',
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
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  return (
    <>
      <H2>Interested in collaborating on a project?</H2>
      <ContactForm onSubmit={e => submitForm(e)}>
        <InputGroup>
          <Input
            id="First Name"
            type="text"
            placeholder="First Name"
            name="fName"
            aria-label="First Name"
            aria-required="true"
            value={form.fName}
            onChange={e => updateFormValue(e)}
            required
            pattern="[A-Za-z]{3}"
            title="First name should contain only letters"
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <FormLabel htmlFor="First Name">First Name</FormLabel>
        </InputGroup>
        <FormLabel htmlFor="Last Name">Last Name</FormLabel>
        <Input
          id="Last Name"
          aria-label="Last Name"
          aria-required="true"
          type="text"
          placeholder="last name.."
          name="lName"
          value={form.lName}
          onChange={e => updateFormValue(e)}
          required
          pattern="[A-Za-z]+"
          title="Last name should contain only letters"
        />
        <FormLabel htmlFor="Email">Email</FormLabel>
        <Input
          id="Email"
          aria-label="Email"
          aria-required="true"
          type="email"
          placeholder="email.."
          name="email"
          value={form.email}
          onChange={e => updateFormValue(e)}
          pattern="\S+.*"
          required
          title="email address is not valid"
        />
        <FormLabel htmlFor="Message">Message</FormLabel>
        <FormMessage
          id="Message"
          aria-label="Message"
          aria-required="true"
          placeholder="Send me some love <3.."
          name="msg"
          value={form.msg}
          onChange={e => updateFormValue(e)}
        />
        <SubmitButton type="submit" value="Submit" />
      </ContactForm>
    </>
  );
};

export default Contact;
