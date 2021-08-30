import logoImg from '../../assets/logoImg.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <div>
                    <img src={logoImg} alt="gj money" />
                    <strong>gj money</strong>
                </div>
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}