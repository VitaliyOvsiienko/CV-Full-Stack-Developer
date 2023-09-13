import { LinkItem, LinkList, FootText, Nav, LinkIcon, Text, LinkGitHub } from "./Foooter.styled";
import { FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa';


const Footer = () => {

    return (<Nav>
        <LinkList>
            <LinkItem><FootText>find me in:</FootText></LinkItem>
            <LinkItem><LinkIcon aria-label="LinkedIn" href="https://www.linkedin.com/in/vitaly-ovsiyenko/" target="_blank"><FaLinkedinIn style={{ fontSize: "24px" }} /></LinkIcon></LinkItem>
            <LinkItem><LinkIcon aria-label="Facebook" href="https://www.facebook.com/vitaly.ovsiyenko" target="_blank"><FaFacebookF style={{ fontSize: "24px" }} /></LinkIcon></LinkItem>
            <LinkItem><LinkGitHub aria-label="GitHub" href="https://github.com/VitaliyOvsiienko" target="_blank"><Text>VitaliyOvsiienko</Text> <FaGithub style={{ fontSize: "24px" }} /></LinkGitHub></LinkItem>
        </LinkList>
    </Nav>)
};

export default Footer;