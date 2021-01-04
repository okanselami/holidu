import styled from "styled-components";

export const Wrapper = styled.aside`
    position: fixed;
    padding: ${(props) => props.theme.spacing.large};

    & > h3 {
        font-size: ${(props) => props.theme.fontSizes.large};
    }
`;

export const Property = styled.div`
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.third};
    padding: ${(props) => props.theme.spacing.small} 0;
    & > span {
        float: right;
        font-weight: ${(props) => props.theme.fontWeight.bold};
    }
`;
