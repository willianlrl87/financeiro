import * as styles from './styles';
import React from 'react';

export const OperationsHeader = () => {

    return (
        <styles.OperationsHeaderDiv>
            <span style={{flex:'2'}}>Descrição</span>
            <span style={{flex:'2'}}>Valor</span>
            <div style={{display:'flex', flex: '1', justifyContent:'space-between', width: '150px'}}>
                <span>Tipo</span>
                <span></span>
            </div>
        </styles.OperationsHeaderDiv>
    )
}