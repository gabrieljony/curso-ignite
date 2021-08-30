import Modal from 'react-modal';
import fecharImg from '../../assets/fechar.svg'
import { Container } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({ isOpen, onCloseNewTransactionModal }: NewTransactionModalProps) {
    return(
        <Modal
          isOpen={isOpen}
          onRequestClose={onCloseNewTransactionModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
      >
          <button type="button" onClick={onCloseNewTransactionModal} className="react-modal-close">
              <img src={fecharImg} alt="fechar modal" />
          </button>
          <Container>    
            <h2>Cadastrar transação</h2>
            <input placeholder="Título"/>
            <input type="number" placeholder="Valor"/>
            <input placeholder="Categoria"/>
            <button type="submit">Cadastrar</button>
          </Container>
      </Modal>
    )
}