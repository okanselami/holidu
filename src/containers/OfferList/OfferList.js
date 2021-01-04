import OfferCard from "../../components/OfferCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { getOffers } from "../../redux/actions/offers";
import { Waypoint } from "react-waypoint";

import { Wrapper } from "./OfferList.styles.js";

function OfferList() {
    const dispatch = useDispatch();

    const offers = useSelector((state) => state.offers.offers);
    const nextPage = useSelector((state) => state.offers.nextPage);
    const loading = useSelector((state) => state.offers.loading);

    useEffect(() => {
        const fetchOffer = () => {
            dispatch(getOffers());
        };
        fetchOffer();
    }, [dispatch]);

    return (
        <Wrapper>
            {offers &&
                offers.map((offer) => <OfferCard key={offer.id} {...offer} />)}
            {offers && offers.length && !loading ? (
                <Waypoint onEnter={() => dispatch(getOffers(nextPage))}>
                    <div style={{ height: "100px" }}></div>
                </Waypoint>
            ) : null}
        </Wrapper>
    );
}

export default OfferList;
