import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --blue: #5429CC;
        --green: #33CC95;
        --red: #E62E4D;
        --shape: #FFFFFF;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --blue-light: #6933ff;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop) Padrão

    html {
        @media (max-width: 1080px){//até 1080px de largura
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){//até 720px de largura
            font-size: 82.5%; //14px
        }
    }

    // REM = 1rem = 16px

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }



`