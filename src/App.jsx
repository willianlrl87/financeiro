import React from 'react';
import { Resume } from './Components/Resume';
import { Header } from './Components/Header';
import { Form } from './Components/Form';
import './index.css';
import { useShowAsMoney } from './hooks/useShowAsMoney';
import * as styles from './Components/styles';



function App() {
  const entradas = 1000;
  const saidas = 510;
  const saldo = entradas-saidas;

  return (
    <React.Fragment>
      <Header />
      <styles.ResumesDiv>
        <Resume title='Entradas' resumeValue={useShowAsMoney(entradas)} />
        <Resume title='Saídas' resumeValue={useShowAsMoney(saidas)} />
        <Resume title='Saldo' resumeValue={useShowAsMoney(saldo)} />
      </styles.ResumesDiv>
      <Form />
    </React.Fragment>
  )
}

export default App
