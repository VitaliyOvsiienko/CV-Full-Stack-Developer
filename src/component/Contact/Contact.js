import { RiMailFill, RiPhoneFill, RiMapPin2Line } from 'react-icons/ri';
import { FaDownload } from 'react-icons/fa';
import {
  TitleContactList,
  TitleContactItem,
  ContactLink,
  Container,
} from './Contact.styled';
import AsideMainTitle from '../../component/AsideMainTitle/AsideMainTitle';
import { useState } from 'react';

const Contact = ({ open = false }) => {
  const [openMenu, setOpenMenu] = useState(open);

  const hendleOpenSubMenu = () => {
    setOpenMenu(prev => !prev);
  };

  return (
    <Container>
      <AsideMainTitle
        hendleOpenSubMenu={hendleOpenSubMenu}
        open={openMenu}
        text={'contacts'}
      />
      <TitleContactList className={openMenu ? 'open' : 'close'}>
        <TitleContactItem>
          <ContactLink href="mailto:ovsiyenko80@gmail.com">
            <RiMailFill style={{ fontSize: '16px' }} />
            <span>ovsiyenko80@gmail.com</span>
          </ContactLink>

          <ContactLink href="tel:+972535459823">
            <RiPhoneFill style={{ fontSize: '16px' }} />
            <span>+972535459823</span>
          </ContactLink>

          <ContactLink>
            <RiMapPin2Line style={{ fontSize: '16px' }} />
            <span>Netanya, Israel</span>
          </ContactLink>

          <ContactLink
            href="https://drive.google.com/file/d/1rEEFENL6qeWqxrxYeP5ZByFI2RtGRqJQ/view?usp=drive_link"
            target="blank"
            rel="noopener noreferrer"
          >
            <FaDownload style={{ fontSize: '16px' }} />
            <span>Download my resume</span>
          </ContactLink>
        </TitleContactItem>
      </TitleContactList>
    </Container>
  );
};

export default Contact;
