import styled from "styled-components"

export const TimeLineStyled = styled.main`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.blackSecondary};

    .timeline-line {
        position: relative;
        width: 100%;
        padding-top: 7rem;
        padding-bottom: 2rem;
    }

    /* =========================
       MOBILE TIMELINE
    ========================= */

    /* Lodret timeline */
    .timeline-line::after {
        content: "";
        position: absolute;
        top: 4.5rem;
        bottom: 14rem;
        right: 15%;
        width: 2px;
        background-color: ${({ theme }) => theme.colors.text};
    }

    /* Stor cirkel øverst */
    .timeline-line::before {
        content: "";
        position: absolute;
        top: 2rem;
        right: calc(15% - 1.5rem);
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.text};
        z-index: 2;
    }

    /* =========================
       EVENTS - MOBILE
    ========================= */

    .left,
    .right {
        position: relative;
        width: 100%;
        margin-bottom: 8rem;
    }

    .content {
        width: 58%;
        margin-left: 5%;
        padding-top: 4.5rem;
        text-align: center;
    }

    /*
     * YEAR placeres ved starten af
     * den vandrette timeline-streg
     */
    .content h2 {
        position: absolute;
        top: 0;
        right: 30%;
        margin: 0;
        font-family: ${({ theme }) => theme.fonts[0]};
        font-size: 1.1rem;
        font-weight: 400;
        white-space: nowrap;
        color: ${({ theme }) => theme.colors.white};
    }

    .content p {
        margin: 0;
        font-family: ${({ theme }) => theme.fonts[0]};
        font-size: 1rem;
        line-height: 1.5;
        text-align: right;
        color: ${({ theme }) => theme.colors.white};
    }

    /* Book icon + Read more */
    .content > div {
        display: flex;
        justify-content: right;
        align-items: center;
        gap: 0.6rem;
        margin-top: 1rem;
    }

    .content img {
        width: 1.25rem;
        height: 1.25rem;
        object-fit: contain;
    }

    .content a {
        font-family: ${({ theme }) => theme.fonts[0]};
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.white};
        text-decoration: underline;
    }

    /* Vandret streg */
    .left::after,
    .right::after {
        content: "";
        position: absolute;
        top: 2.25rem;
        right: 15%;
        width: 21%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.text};
    }

    /* Lille cirkel */
    .left::before,
    .right::before {
        content: "";
        position: absolute;
        top: 1.45rem;
        right: calc(15% - 0.8rem);
        width: 1.4rem;
        height: 1.4rem;
        border: 2px solid ${({ theme }) => theme.colors.text};
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.black};
        z-index: 3;
    }

    /* =========================
       SCROLL MORE - MOBILE
    ========================= */

    .scroll-more {
        position: relative;
        width: 100%;
        height: 8rem;
        margin-top: 3rem;
        z-index: 5;

        p {
            text-align: center;
            position: absolute;
            top: 0;
            right: 3%;
            margin: 0;
            font-family: ${({ theme }) => theme.fonts[0]};
            font-size: 1rem;
            font-weight: 400;
            white-space: nowrap;
            color: ${({ theme }) => theme.colors.white};
        }

        .arrow {
            position: absolute;
            top: 2rem;
            right: 15%;
            transform: translateX(50%);
            font-family: ${({ theme }) => theme.fonts[0]};
            font-size: 3rem;
            font-weight: 400;
            line-height: 1;
            color: ${({ theme }) => theme.colors.text};
        }
    }

    /* DESKTOP */

    @media (min-width: 768px) {

        .timeline-line {
            padding-top: 7rem;
        }

        /* Lodret timeline i midten */
        .timeline-line::after {
            top: 4.5rem;
            bottom: 14rem;

            left: 50%;
            right: auto;

            transform: translateX(-50%);
        }

        /* Stor cirkel i toppen */
        .timeline-line::before {
            top: 2rem;

            left: 50%;
            right: auto;

            transform: translateX(-50%);
        }

        /* EVENTS på DESKTOP */

        .left,
        .right {
            width: 50%;

            margin-bottom: 4.5rem;
        }

        .left {
            margin-right: auto;
        }

        .right {
            margin-left: auto;
        }

        .left .content,
        .right .content {
            width: 52%;

            padding-top: 3.5rem;
        }

        /* Venstre event */
        .left .content {
            margin-left: auto;
            margin-right: 34%;

            text-align: right;
        }

        /* Højre event */
        .right .content {
            margin-left: 34%;
            margin-right: 0;

            text-align: left;
        }

        /* YEAR på DESKTOP */

        /* Justering af YEAR på venstre side */
        .left .content h2 {
            top: 0;

            right: 20%;
            left: auto;

            transform: translateX(-1rem);
        }

        /* Justering af YEAR på højre side */
        .right .content h2 {
            top: 0;
            left: 20%;
            right: auto;
            transform: translateX(1rem);
        }

        /* Event tekst */
        .left .content p {
            text-align: right;
        }

        .right .content p {
            text-align: left;
        }

        /* Read more */
        .left .content > div {
            justify-content: flex-end;
        }

        .right .content > div {
            justify-content: flex-start;
        }

        /* Stregen der går ud fra historierne til venstre (vandret) */
        .left::after {
            top: 2.25rem;
            right: 0;
            left: auto;
            width: 25%;
        }

        /* Stregen der går ud fra historierne til højre (vandret) */
        .right::after {
            top: 2.25rem;
            left: 0;
            right: auto;
            width: 25%;
        }

        /* Cirkelen der er til dem der er på venstre side */
        .left::before {
            top: 1.45rem;
            right: -0.8rem;
            left: auto;
        }

        /* Cirklen der er til dem der er på højre side */
        .right::before {
            top: 1.45rem;
            left: -0.8rem;
            right: auto;
        }

        /* Scroll til desktop */
        .scroll-more {
            margin-top: 3rem;

            p {
                left: 50%;
                right: auto;
                transform: translateX(-50%);
                text-align: center;
            }

            .arrow {
                left: 50%;
                right: auto;
                transform: translateX(-50%);
            }
        }
    }
    /* #endregion */
`