import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

// hook
import { useMedia } from "./hooks/useMedia";

// containers
import OfferList from "./containers/OfferList";
import OfferFilter from "./containers/OfferFilter";
import OfferSort from "./containers/OfferSort";

import Header from "./containers/Header";
import Loading from "./components/Loading";

// helmet
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
    let isBiggerPage = useMedia("(min-width: 1024px)");

    const { searchRegion = "" } = useSelector((state) => state.offers.metaData);
    const loading = useSelector((state) => state.offers.loading);
    return (
        <HelmetProvider>
            <div className="App">
                <Helmet>
                    <title>
                        Holidu - {searchRegion && searchRegion.name} : Find the
                        best vacation apartments & vacation homes{" "}
                    </title>
                    <meta
                        name="description"
                        content={`Your Search Engine for Vacation Rentals ✓ ${
                            searchRegion && searchRegion.totalNumberOfOffers
                        } Offers in ${
                            searchRegion && searchRegion.name
                        } ✓ Find the perfect Vacation Rental & save up to 55% ✓ Compare and book online`}
                    />
                </Helmet>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    {isBiggerPage ? (
                        <Col lg="2" xs>
                            <OfferFilter />
                        </Col>
                    ) : null}
                    <Col>
                        <OfferSort />
                        <OfferList />
                        {loading && <Loading />}
                    </Col>
                </Row>
            </div>
        </HelmetProvider>
    );
}

export default App;
