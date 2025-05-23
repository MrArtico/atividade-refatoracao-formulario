import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [formData, setData] = useState({
    name: '',
    email: '',
    job: '',
    age: '',
    city: '',
    state: '',
    phone: '',
    github: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/users', formData, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      alert('Usuário criado! ID: ' + response.data.id);
      setData({
        name: '',
        email: '',
        job: '',
        age: '',
        city: '',
        state: '',
        phone: '',
        github: ''
      });
    } catch (error) {
      alert('Erro ao enviar os dados.');
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome" name='name' value={formData.name} onChange={handleChange} required />
        <input placeholder="Email" name='email' value={formData.email} onChange={handleChange} required />
        <input placeholder="Cargo" name='job' value={formData.job} onChange={handleChange} required />
        <input placeholder="Idade" name='age' value={formData.age} onChange={handleChange} required />
        <input placeholder="Cidade" name='city' value={formData.city} onChange={handleChange} required />
        <input placeholder="Estado" name='state' value={formData.state} onChange={handleChange} required />
        <input placeholder="Telefone" name='phone' value={formData.phone} onChange={handleChange} required />
        <input placeholder="GitHub" name='github' value={formData.github} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
