import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
    
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem; // esta infromando que tem 16px no desktop na lateral e 160px no final
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
        display: flex;
        align-items: center;
        cursor: pointer;
        strong{
            color: #fff;
            font-size: 1.5rem;
            margin: 0 1rem;
        }
    }


    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)

        }
    }
`;

