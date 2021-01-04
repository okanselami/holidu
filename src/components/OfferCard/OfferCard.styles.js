import styled from "styled-components";
import { HeartFill } from "@styled-icons/bootstrap/";

export const OfferWrapper = styled.div`
    width: 25%;
    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
        width: 33%;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        width: 50%;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        width: 100%;
    }
`;

export const OfferContainer = styled.div`
    height: 24rem;
    padding: ${(props) => props.theme.spacing.medium};
`;

export const Card = styled.div`
    display: flex;
    box-shadow: ${(props) => props.theme.boxShadow};
    height: 100%;
    flex-direction: column;
    border-radius: ${(props) => props.theme.borderRadius};
`;

export const EmptyHeart = styled(HeartFill)`
    color: ${(props) => props.theme.colors.white};
`;

export const FillHeart = styled(HeartFill)`
    color: ${(props) => props.theme.colors.red}; ;
`;

export const FavButton = styled.div`
    width: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

export const OfferImage = styled.div`
    position: relative;
    & > img {
        width: 100%;
        height: 10rem;
        object-fit: cover;
        border-radius: ${(props) => props.theme.borderRadius}
            ${(props) => props.theme.borderRadius} 0 0;
    }
`;

export const OfferDetails = styled.div`
    display: flex;
    padding: ${(props) => props.theme.spacing.medium};
    height: 9rem;
`;

export const OfferDetailsDiv = styled.div`
    width: ${(props) => props.col}%;
    & > h2 {
        font-size: ${(props) => props.theme.fontSizes.small};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        text-align: right;
        line-height: 1.2rem;
        & > div {
            font-size: ${(props) => props.theme.fontSizes.medium};
            font-weight: ${(props) => props.theme.fontWeight.bolder};
        }
    }
`;

export const OfferInfo = styled.div`
    font-size: ${(props) => props.theme.fontSizes.small};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: ${(props) => props.theme.spacing.medium} 0;
    color: ${(props) => props.theme.colors.secondary};
    & > span {
        font-weight: ${(props) => props.theme.fontWeight.bolder};
    }
`;

export const OfferTitle = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const BreakLine = styled.div`
    border-top: solid 1px ${(props) => props.theme.colors.gray};
`;

export const OfferProvider = styled.div`
    padding: ${(props) => props.theme.spacing.medium};
    width: 100%;
    height: 100%;
`;

export const OfferProviderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${(props) => props.theme.spacing.medium} 0;
`;

export const ProviderName = styled.div`
    font-size: ${(props) => props.theme.fontSizes.small};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    & > span {
        color: ${(props) => props.theme.colors.primary};
    }
`;

export const ProviderImg = styled.img`
    width: 5rem;
    max-height: 2rem;
    object-fit: scale-down;
`;
