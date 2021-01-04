import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    & > div {
        font-size: ${(props) => props.theme.fontSizes.small};
    }
`;

export const RatingSpan = styled.span`
    padding-right: 5px;
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSizes.small};
`;
export const BackStars = styled.div`
    display: flex;
    position: relative;
    color: ${(props) => props.theme.colors.gray};
`;

export const FrontStars = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: ${(props) => props.rating}%;
    color: ${(props) => props.theme.colors.primary};
`;

export const SvgStar = styled.svg`
    flex-shrink: 0;
`;
