import { FiExternalLink } from 'react-icons/fi';
import { Item, LinkItem, List, Container } from './FindMe.styled';
import { useState } from 'react';
import AsideMainTitle from '../AsideMainTitle/AsideMainTitle';

const FindMe = ({ open = false }) => {
    const [openMenu, setOpenMenu] = useState(open);

    const hendleOpenSubMenu = () => {
        setOpenMenu(prev => !prev);
    };

    return (
        <Container>
            <AsideMainTitle hendleOpenSubMenu={hendleOpenSubMenu} open={openMenu} text={'find-me-also-in'} />
            <List className={openMenu ? "open" : "close"}>
                <Item><LinkItem target="_blank" href="https://www.linkedin.com/in/vitaly-ovsiyenko/"><FiExternalLink style={{ fontSize: "16px" }} /> <span>LinkedIn profile</span> </LinkItem></Item>
                 <Item><LinkItem target="_blank" href="https://www.facebook.com/vitaly.ovsiyenko" ><FiExternalLink style={{ fontSize: "16px" }} /> <span>Facebook accaunt</span> </LinkItem></Item>
            </List>
        </Container>)
};

export default FindMe;