import React from 'react';

function ContactPage() {
  return (
    <section className="contact-page">
      <h1>Contato</h1>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactPage;
