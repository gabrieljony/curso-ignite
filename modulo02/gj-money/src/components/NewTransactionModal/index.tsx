import { useState } from 'react';
import Modal from 'react-modal';
import fecharImg from '../../assets/fechar.svg'
import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({ isOpen, onCloseNewTransactionModal }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

    function handleSetTypeDeposit() {

    }

    return(
        <Modal
          isOpen={isOpen}
          onRequestClose={onCloseNewTransactionModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
      >
          <button 
            type="button" 
            onClick={onCloseNewTransactionModal} 
            className="react-modal-close">
              <img src={fecharImg} alt="fechar modal" />
          </button>
          <Container>    
            <h2>Cadastrar transação</h2>
            <input placeholder="Título"/>
            <input type="number" placeholder="Valor"/>
            <TransactionTypeContainer>
                <RadioBox 
                    type="button"
                    isActive={type === 'deposit'}
                    activeColor="green"
                    // className={type === 'deposit' ? 'active' : ''} 
                    onClick={() => { setType('deposit'); }}>
                    <img src={entradasImg} alt="entrada" />
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                    type="button"
                    isActive={type === 'withdraw'}
                    activeColor="red"
                    onClick={() => { setType('withdraw'); }}>
                    <img src={saidasImg} alt="saida" />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>
            <input placeholder="Categoria"/>
            <button type="submit">Cadastrar</button>
          </Container>
      </Modal>
    )
}