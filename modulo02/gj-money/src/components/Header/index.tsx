import logoImg from '../../assets/logoImg.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    

    return (
        <Container>
            <Content>
                <div>
                    <img src={logoImg} alt="gj money" />
                    <strong>gj money</strong>
                </div>
                <button onClick={onOpenNewTransactionModal} type="button">
                    Nova transação
                </button>
                
            </Content>
        </Container>
    )
}