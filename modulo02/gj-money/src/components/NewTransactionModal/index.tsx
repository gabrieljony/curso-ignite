import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import fecharImg from '../../assets/fechar.svg'
import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({ isOpen, onCloseNewTransactionModal }: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        console.log('event', event)
        //previnir a submit do carregamento da tela quando chama o metodo de submit de um formulário
        event.preventDefault();

        console.log({
            title,
            value,
            type,
            category
        })

        const data = {
            title,
            value,
            type,
            category
        }

        api.post('/transactions', data)


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
          <Container onSubmit={handleCreateNewTransaction}>    
            <h2>Cadastrar transação</h2>
            <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>
            <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>
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
            <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
            <button type="submit">Cadastrar</button>
          </Container>
      </Modal>
    )
}