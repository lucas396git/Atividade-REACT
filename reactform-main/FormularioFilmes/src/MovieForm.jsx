import { useState } from 'react'
import Form from './components/Form.jsx'
import TextInput from './components/TextInput.jsx'
import NumberInput from './components/NumberInput.jsx'
import SelectInput from './components/SelectInput.jsx'
import RadioGroup from './components/RadioGroup.jsx'
import Textarea from './components/Textarea.jsx'
import SubmitButton from './components/SubmitButton.jsx'
import './App.css'

function MovieForm() {
  const [nome, setNome] = useState('')
  const [diretor, setDiretor] = useState('')
  const [ano, setAno] = useState('')
  const [estilo, setEstilo] = useState('acao')
  const [nota, setNota] = useState('5')
  const [review, setReview] = useState('')

  const estilos = [
    { value: 'acao', label: 'Ação' },
    { value: 'drama', label: 'Drama' },
    { value: 'comedia', label: 'Comédia' },
    { value: 'ficcao', label: 'Ficção' },
    { value: 'terror', label: 'Terror' }
  ]

  const notas = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' }
  ]

  function handleSubmit(e) {
    e.preventDefault()
    const data = { nome, diretor, ano, estilo, nota, review }
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <div className="container">
      <h1>Cadastro de Filmes</h1>
      <Form onSubmit={handleSubmit}>
        <TextInput label="Nome" name="nome" value={nome} onChange={setNome} placeholder="Ex.: Matrix" />
        <TextInput label="Diretor" name="diretor" value={diretor} onChange={setDiretor} placeholder="Ex.: Wachowski" />
        <NumberInput label="Ano" name="ano" value={ano} onChange={setAno} min={1900} max={2100} />
        <SelectInput label="Estilo" name="estilo" value={estilo} onChange={setEstilo} options={estilos} />
        <RadioGroup label="Nota" name="nota" value={nota} onChange={setNota} options={notas} />
        <Textarea label="Review" name="review" value={review} onChange={setReview} placeholder="Escreva sua review" />
        <SubmitButton>Enviar</SubmitButton>
      </Form>
    </div>
  )
}

export default MovieForm
