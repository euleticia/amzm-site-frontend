import React, { useState } from 'react';
import './style.css';

const ContactFormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const baseUrl = window?.location?.origin;
      const nextValue = `${baseUrl}/success`;
    
  return (
    <>
    <form action="https://formsubmit.co/euletizia@gmail.com" method="POST" >
    <input type="hidden" name="_next" value={nextValue} />
    <div className='contact-div'>
      <label>Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Nome'
        />
      </div>
      <div className='contact-div'>
      <label>E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='E-mail'
        />
      </div>
      <div className='contact-div'>
      <label>Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder='Telefone'
        />
      </div>
      <div className='contact-div'>
        <label>Mensagem</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{padding: '50px'}}
        />
      </div>  
      <button type="submit">Enviar mensagem</button>
    </form>
  </>

  );
};

export default ContactFormComponent;
