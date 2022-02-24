import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Zoom } from "react-reveal";
import { CardDoa, CardGames, CardInvitation } from "../components";

const TabletOrMobile = () => {
    const [isCardInvitation, setIsCardInvitation] = useState(true);
    const [isCardDoa, setIsCardDoa] = useState(false);
    const [isCardGames, setIsCardGames] = useState(false);
    const [cardComp, setCardComp] = useState('')

    useEffect(() => {
        let Comp = changePage();
        setCardComp(Comp);
    }, [isCardInvitation, isCardDoa, isCardGames])

    const goToOtherPage = (param) => {
        if(param === 0){
            setIsCardInvitation(true)
            setIsCardDoa(false)
            setIsCardGames(false)
        } else if(param === 1){
            setIsCardInvitation(false)
            setIsCardDoa(true)
            setIsCardGames(false)
        } else if(param === 2){
            setIsCardInvitation(false)
            setIsCardDoa(false)
            setIsCardGames(true)
        }
    }

    const changePage = () => {
        if(isCardInvitation){
            return CardInvitation
        }
        if(isCardDoa){
            return CardDoa
        }
        if(isCardGames){
            return CardGames
        }
    }
    return (
        <div>
            <Navbar variant="light">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => goToOtherPage(0)}>Kartu</Nav.Link>
                    <Nav.Link onClick={() => goToOtherPage(1)}>Ucapan</Nav.Link>
                    <Nav.Link onClick={() => goToOtherPage(2)}>Games</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
            <Container>
                {cardComp}
            </Container>
        </div>
    )
}

export default TabletOrMobile;