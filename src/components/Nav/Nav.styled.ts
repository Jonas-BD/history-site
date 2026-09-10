import styled from "styled-components";

export const NavStyled = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.blackSecondary};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;

    ul {
        width: 100%;
        margin: 0;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-evenly;
        align-items: center;
    }

    li {
        list-style: none;
        font-size: ${({ theme }) => theme.fontSizes.xl};
        cursor: pointer;

        a {
            display: inline-block;
            text-decoration: none;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.primary};
            
            &:hover {
                text-decoration: underline;
            }
            &.active {
                text-decoration: underline;
                transform: translateY(-0.4rem);
            }
        }
    }

    @media (min-width: 768px) {
        ul {
            flex-direction: row;
            justify-content: space-evenly;
        }
    }
`