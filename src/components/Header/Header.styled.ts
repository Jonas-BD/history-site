import styled from "styled-components";
import headerImage from "../../assets/headerImg.png"

export const HeaderStyled = styled.header`
    position: relative;
    background-image: url(${headerImage});
    background-size: cover;
    height: 400px;

    .titleContainer {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2rem;
        background-color: #1F1F1F;
        border: 24px solid;
        border-image-source: linear-gradient(180deg, rgba(199, 189, 141, 0.33) 0%, rgba(210, 158, 98, 0.33) 100%);
        border-image-slice: 1;
    }
`