import { Container, Author, MobMenuButton, AnimatedIcon } from "./MobHeader.styled";
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

const MobHeader = ({ openMenu, isMobMenu }) => {

    return (
        <Container>
            <Author>_vitaliy-ovsiyenko</Author>
            <MobMenuButton onClick={openMenu} type="button">
                <AnimatedIcon className={isMobMenu ? "cross" : "hamburger"}>
                    {isMobMenu ? <RxCross1 style={{ fontSize: "24px" }} /> : <RxHamburgerMenu style={{ fontSize: "24px" }} />}
                </AnimatedIcon>
            </MobMenuButton>
        </Container>
    );
};

export default MobHeader;