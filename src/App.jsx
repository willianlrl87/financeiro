import React from 'react';
import { Resume } from './Components/Resume';
import { Header } from './Components/Header';
import { Form } from './Components/Form';
import './index.css';
import { useShowAsMoney } from './hooks/useShowAsMoney';
import * as styles from './Components/styles';
import { Operations } from './Components/Operations';
import FormContext from './contexts/FormContext';
import OperationsContext from './contexts/OperationsContext';


function App() {
  const entradas = 1000;
  const saidas = 510;
  const saldo = entradas-saidas;
  const [operations, setOperations] = React.useState({});
  const [formValue, setFormValue] = 
    React.useState({'description':'', 'value': '', 'type':''});
  const [operationsRegistered, setOperationsRegistered] = React.useState([]);


  return (
    <React.Fragment>
      <Header />
      <OperationsContext.Provider value={{operationsRegistered, setOperationsRegistered}} >
        <FormContext.Provider value={{formValue, setFormValue}} >
          <styles.ResumesDiv>
            <Resume title='Entradas' resumeValue={useShowAsMoney(entradas)} />
            <Resume title='Saídas' resumeValue={useShowAsMoney(saidas)} />
            <Resume title='Saldo' resumeValue={useShowAsMoney(saldo)} />
          </styles.ResumesDiv>
          <Form />
          <Operations />
        </FormContext.Provider>
      </OperationsContext.Provider>
    </React.Fragment>
  )
}

export default App


//tornar o formulario responsivo atraves de um custom hook
// Gerar um provider para armazenar os dados do formulario
// gerar um provider para armazenar todos os registros do formulario, sendo cada registro um objeto
// gerar um custom hook para fazer um map por cada objeto dos registros do formulario e usar o componente OperationRegister
// Fazer um custom hook para os calculos de entradas, saidas e saldos
