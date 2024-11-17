import React, { useState } from "react";
import Layout from "../components/layout";

const ContatoForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "form_contribuition", ...inputs }),
    })
      .then(() => {
        alert("Recebemos sua mensagem. Muito obrigado por contribuir!");
        setInputs({ name: "", email: "", description: "" });
      })
      .catch((error) => alert(error));
  };

  return (
    <Layout>
      <div className='w-[800px] mx-auto mt-8 p-6 bg-custom-third shadow-lg rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>
          Entre em contato conosco!
        </h2>
        <form
          onSubmit={handleSubmit}
          name='form_contribuition'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
        >
          <div className='mb-4'>
            <input name='bot-field' className='hidden' />
            <label className='block mb-1 font-semibold' htmlFor='name'>
              Nome:
            </label>
            <input
              id='name'
              type='text'
              name='name'
              className='w-full border border-gray-300 rounded px-3 py-2'
              placeholder='Seu nome'
              value={inputs.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1 font-semibold' htmlFor='email'>
              Email:
            </label>
            <input
              id='email'
              type='email'
              name='email'
              className='w-full border border-gray-300 rounded px-3 py-2'
              placeholder='Seu email'
              value={inputs.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1 font-semibold' htmlFor='description'>
              Deixe sua mensagem
            </label>
            <textarea
              id='description'
              className='w-full border border-gray-300 rounded px-3 py-2'
              rows='4'
              name='description'
              placeholder='Escreva sua sugestão ou crítica'
              value={inputs.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded'
          >
            Enviar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContatoForm;

export const Head = () => <title>Contato</title>;
