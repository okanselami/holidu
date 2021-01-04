import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    background-color: ${(props) => props.theme.colors.primary};
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

export const FavCount = styled.div`
    color: ${(props) => props.theme.colors.white};
    font-weight: ${(props) => props.theme.fontWeight.regular};
`;
