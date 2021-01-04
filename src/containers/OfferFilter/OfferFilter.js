import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFilters } from "../../redux/actions/filter";

import { Wrapper, Property } from "./OfferFilter.styles.js";

function OfferFilter() {
    const dispatch = useDispatch();
    const offers = useSelector((state) => state.offers.offers);

    const { filter } = useSelector((state) => state.filters);

    useEffect(() => {
        const fetchOffer = () => {
            dispatch(getFilters(offers));
        };
        fetchOffer();
    }, [offers, dispatch]);

    return (
        <Wrapper>
            <h3>Property Type</h3>
            {Object.keys(filter).map((filterItem) => (
                <Property key={filterItem}>
                    {filterItem} <span>({filter[filterItem].length})</span>
                </Property>
            ))}
        </Wrapper>
    );
}

export default OfferFilter;
