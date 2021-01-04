import { useDispatch, useSelector } from "react-redux";

import {
    Wrapper,
    BreadCrumb,
    OfferFoundInfo,
    Sorting,
} from "./OfferSort.styles.js";

function OfferSort() {
    const dispatch = useDispatch();
    const { searchRegion, listTitle } = useSelector(
        (state) => state.offers.metaData
    );
    const breadCrumbData =
        searchRegion && searchRegion.name.split(", ").reverse();
    const breadCrumbDataLen = breadCrumbData && breadCrumbData.length;

    if (searchRegion === undefined) {
        return null;
    }
    return (
        <Wrapper>
            <div>
                <BreadCrumb>
                    {breadCrumbData &&
                        breadCrumbData.map((item, i) => {
                            if (breadCrumbDataLen === i + 1) {
                                return <span key={i}>{item}</span>;
                            } else {
                                return `${item} > `;
                            }
                        })}
                </BreadCrumb>
                <OfferFoundInfo>
                    <span>
                        {searchRegion && searchRegion.name} :{" "}
                        {searchRegion && searchRegion.totalNumberOfOffers}{" "}
                    </span>
                    {listTitle}
                </OfferFoundInfo>
            </div>

            <Sorting>
                <select>
                    <option value="Sortierung">Sortierung</option>
                    <option value="">Relevanz</option>
                    <option value="mostPopular">Beliebtheit</option>
                    <option value="holiduScore">Beste Bewertungen</option>
                    <option value="reviewCount">Meiste Bewertungen</option>
                    <option value="toBeach">Entfernung Strand</option>
                    <option value="toCoast">Entfernung Wasser</option>
                    <option value="toLake">Entfernung See</option>
                    <option value="toCityCenter">
                        Entfernung Stadtzentrum
                    </option>
                </select>
            </Sorting>
        </Wrapper>
    );
}

export default OfferSort;
