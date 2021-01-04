import { Wrapper, FavCount } from "./Header.styles.js";
import { useSelector } from "react-redux";

import Logo from "../../components/Logo";

function Header() {
    const favorites = useSelector((state) => state.favorites.favorites);
    return (
        <Wrapper>
            <Logo />
            <FavCount>{favorites.length} Favorites </FavCount>
        </Wrapper>
    );
}

export default Header;
