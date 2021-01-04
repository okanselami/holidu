import {
    OfferContainer,
    OfferWrapper,
    Card,
    OfferImage,
    OfferDetails,
    OfferTitle,
    OfferInfo,
    OfferProvider,
    OfferDetailsDiv,
    FillHeart,
    EmptyHeart,
    FavButton,
    BreakLine,
    OfferProviderContainer,
    ProviderName,
    ProviderImg,
} from "./OfferCard.styles.js";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useDispatch, useSelector } from "react-redux";
import Rating from "../Rating";

import { favoriteOffer } from "../../redux/actions/favorites";

function OfferCard(offer) {
    const dispatch = useDispatch();
    const { details, photos, price, rating, provider } = offer;
    const favorites = useSelector((state) => state.favorites.favorites);
    const [firstPhoto, ...rest] = photos;
    return (
        <OfferWrapper>
            <OfferContainer>
                <Card>
                    <OfferImage>
                        <LazyLoadImage key={firstPhoto.t} src={firstPhoto.t} />
                        <FavButton
                            onClick={() => dispatch(favoriteOffer(offer.id))}
                        >
                            {favorites.includes(offer.id) ? (
                                <FillHeart />
                            ) : (
                                <EmptyHeart />
                            )}
                        </FavButton>
                    </OfferImage>
                    <OfferDetails>
                        <OfferDetailsDiv col={75}>
                            <OfferTitle>
                                {details.apartmentTypeTitle}
                            </OfferTitle>
                            <OfferInfo>{details.name}</OfferInfo>
                            <OfferInfo>
                                <span>{details.guestsCount}</span> pers.{" "}
                                <span>{details.bedroomsCount}</span> bedrooms{" "}
                            </OfferInfo>
                            <OfferInfo>
                                <span>{details.shortName.join(" ")}</span>
                            </OfferInfo>
                            <Rating rating={rating} />
                        </OfferDetailsDiv>
                        <OfferDetailsDiv col={25}>
                            <h2>
                                from <div>{price.daily}€</div> per night
                            </h2>
                        </OfferDetailsDiv>
                    </OfferDetails>
                    <OfferProvider>
                        <BreakLine />
                        <OfferProviderContainer>
                            <ProviderName>
                                Provider: <span>{provider.shortName}</span>
                            </ProviderName>
                            <ProviderImg src={provider.logoUrl} />
                        </OfferProviderContainer>
                    </OfferProvider>
                </Card>
            </OfferContainer>
        </OfferWrapper>
    );
}

export default OfferCard;
