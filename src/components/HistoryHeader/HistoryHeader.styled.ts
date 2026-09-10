import styled from "styled-components";
import headerImage from "../../assets/headerImg.png"

export const HistoryHeaderStyled = styled.header`
    min-height: 430px;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    padding: 1rem;

    background-image: url(${headerImage});
    background-size: cover;
    background-position: center;

    .plaque {
        position: relative;

        width: 100%;
        max-width: 850px;

        padding: 4rem 2rem;

        background-color: ${({ theme }) => theme.colors.blackSecondary};

        border: 1rem solid ${({ theme }) => theme.colors.gray};

        text-align: center;
    }

    .header-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1.5rem;
    }

    h1 {
        margin: 0;

        font-family: ${({ theme }) => theme.fonts[1]};
        font-size: 2.5rem;
        font-weight: 400;

        color: ${({ theme }) => theme.colors.text};
    }

    h2 {
        max-width: 600px;

        margin: 0;

        font-family: ${({ theme }) => theme.fonts[0]};
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.4;

        color: ${({ theme }) => theme.colors.text};
    }

    .title-input {
        display: flex;
        justify-content: center;
        align-items: baseline;

        gap: 0.5rem;
    }

    .title-input label {
        font-family: ${({ theme }) => theme.fonts[1]};
        font-size: 2.5rem;

        color: ${({ theme }) => theme.colors.text};
    }

    .title-input input {
        width: 9rem;

        padding: 0;

        border: none;
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
        outline: none;

        background: transparent;

        font-family: ${({ theme }) => theme.fonts[1]};
        font-size: 2.8rem;
        text-align: center;

        color: ${({ theme }) => theme.colors.primary};
    }

    .dot {
        position: absolute;

        width: 1.2rem;
        height: 1.2rem;

        border-radius: 50%;

        background-color: ${({ theme }) => theme.colors.text};
    }

    .top-left {
        top: 1rem;
        left: 1rem;
    }

    .top-right {
        top: 1rem;
        right: 1rem;
    }

    .bottom-left {
        bottom: 1rem;
        left: 1rem;
    }

    .bottom-right {
        bottom: 1rem;
        right: 1rem;
    }

    @media (min-width: 768px) {

        min-height: 585px;

        padding: 0 2rem 0;

        .plaque {
            padding: 5rem 3rem;
        }

        h1 {
            font-size: 4rem;
        }

        h2 {
            font-size: 1.4rem;
        }

        .title-input label {
            font-size: 4rem;
        }

        .title-input input {
            width: 12rem;

            font-size: 4rem;
        }
    }
`