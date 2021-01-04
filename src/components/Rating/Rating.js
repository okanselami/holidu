import { Wrapper, BackStars, FrontStars, RatingSpan } from "./Rating.styles";

import IconStar from "./IconStar";

const Rating = ({ rating }) => {
    const { value, count } = rating;
    if (value === 0) {
        return null;
    }
    return (
        <>
            <Wrapper>
                <RatingSpan>{(value / 20).toFixed(1)}</RatingSpan>
                <BackStars>
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <FrontStars rating={value}>
                        <IconStar />
                        <IconStar />
                        <IconStar />
                        <IconStar />
                        <IconStar />
                    </FrontStars>
                </BackStars>
                <div> ({count})</div>
            </Wrapper>
        </>
    );
};
export default Rating;
