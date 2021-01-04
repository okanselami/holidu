import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: ${(props) => props.theme.spacing.medium};
    justify-content: space-between;
`;

export const BreadCrumb = styled.div`
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.primary};
    font-weight: ${(props) => props.theme.fontWeight.bold};

    & > span {
        color: ${(props) => props.theme.colors.third};

        font-weight: ${(props) => props.theme.fontWeight.normal};
    }
`;

export const OfferFoundInfo = styled.h1`
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        font-size: ${(props) => props.theme.fontSizes.smaller};
    }
    font-size: ${(props) => props.theme.fontSizes.medium};

    padding: ${(props) => props.theme.spacing.medium} 0;
    font-weight: ${(props) => props.theme.fontWeight.regular};
    margin: ${(props) => props.theme.spacing.none};
    & > span {
        font-weight: ${(props) => props.theme.fontWeight.bold};
    }
`;

export const Sorting = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    & > select {
        border: 0;
        width: 6rem;

        font-size: ${(props) => props.theme.fontSizes.small};
        font-weight: ${(props) => props.theme.fontWeight.regular};
    }
`;
