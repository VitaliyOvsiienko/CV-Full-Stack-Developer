import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubTitle from '../SubTitle/SubTitle';
import Box from '../Box/Box';
import {
  Container,
  Title,
  SecondTitle,
  Item,
  List,
  Body,
  Img,
  TextBody,
  Text,
  Link,
  IconHtml,
  IconReact,
  IconSass,
  IconJs,
} from './FilteredProjects.styled';
import { FaReact, FaHtml5, FaSass, FaNode } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';

import WebStudio from '../../img/WebStudio.jpg';
import IceCream from '../../img/IceCream.jpg';
import Filmoteka from '../../img/Filmoteka.jpg';
import PhoneBook from '../../img/PhoneBook.jpg';
import CV from '../../img/CV.jpg';
import Node from '../../img/Node.jpg';

const iconHtml = (
  <IconHtml>
    <FaHtml5 style={{ fontSize: '20px' }} />
  </IconHtml>
);
const iconReact = (
  <IconReact>
    <FaReact style={{ fontSize: '20px' }} />
  </IconReact>
);
const iconSass = (
  <IconSass>
    <FaSass style={{ fontSize: '20px' }} />
  </IconSass>
);
const iconJs = (
  <IconJs>
    <DiJavascript1 style={{ fontSize: '20px' }} />
  </IconJs>
);
const iconNode = (
  <IconJs>
    <FaNode style={{ fontSize: '20px' }} />
  </IconJs>
);

const FilteredProjects = () => {
  const [filters, setFilters] = useState([]);
  const params = useParams();

  useEffect(() => {
    try {
      const filter = params.filters.split('&');
      setFilters(filter);
    } catch {
      setFilters([]);
    }
  }, [params]);

  return (
    <Box>
      <SubTitle text={'Projects'} />
      <Container>
        <List>
          {(filters.length === 0 || filters.includes('React')) && (
            <Item>
              <Title>
                Project 1 <SecondTitle>&#47;&#47; Phonebook</SecondTitle>
              </Title>
              <Body>
                <Img src={PhoneBook} alt="preview project 1" width="370" />
                <TextBody>
                  <Text>
                    A simple phonebook connected to backend API, where you can
                    register, log in, add, remove, or filter contacts, and log
                    out.
                  </Text>
                  <Link
                    target="_blank"
                    href="https://vitaliyovsiienko.github.io/goit-react-hw-08-phonebook/"
                  >
                    view-project
                  </Link>
                </TextBody>
                {iconReact}
              </Body>
            </Item>
          )}

          {(filters.length === 0 || filters.includes('JS')) && (
            <Item>
              <Title>
                Project 2 <SecondTitle>&#47;&#47; Filmoteka</SecondTitle>
              </Title>
              <Body>
                <Img src={Filmoteka} alt="preview project 2" width="370" />
                <TextBody>
                  <Text>
                    The website for movie searching on demand. Team
                    collaboration, my role on the project was a developer.
                  </Text>
                  <Link
                    target="_blank"
                    href="https://choodoss.github.io/project-group-1-js/"
                  >
                    view-project
                  </Link>
                </TextBody>
                {iconJs}
              </Body>
            </Item>
          )}

          {(filters.length === 0 || filters.includes('Node')) && (
            <Item>
              <Title>
                Project 3 <SecondTitle>&#47;&#47; Node.js</SecondTitle>
              </Title>
              <Body>
                <Img src={Node} alt="preview project 3" width="370" />
                <TextBody>
                  <Text>
                    This project includes user registration and authentication
                    by email, avatar uploading, connection to MongoDB database.
                    I used Express framework
                  </Text>
                  <Link
                    target="_blank"
                    href="https://github.com/VitaliyOvsiienko/nodejs-homework-REST-API"
                  >
                    view-project
                  </Link>
                </TextBody>
                {iconNode}
              </Body>
            </Item>
          )}

          {(filters.length === 0 ||
            filters.includes('HTML') ||
            filters.includes('CSS')) && (
            <Item>
              <Title>
                Project 4 <SecondTitle>&#47;&#47; ICE CREAM</SecondTitle>
              </Title>
              <Body>
                <Img src={IceCream} alt="preview project 4" width="370" />
                <TextBody>
                  <Text>
                    Single-page presentation of the ice cream selling website.
                    Team collaboration, my role on the project was a developer.
                  </Text>
                  <Link
                    target="_blank"
                    href="https://y-lapach.github.io/team-project-1/"
                  >
                    view-project
                  </Link>
                </TextBody>
                {iconHtml}
                {iconSass}
              </Body>
            </Item>
          )}

          {(filters.length === 0 ||
            filters.includes('HTML') ||
            filters.includes('CSS')) && (
            <Item>
              <Title>
                Project 5 <SecondTitle>&#47;&#47; Web Studio</SecondTitle>
              </Title>
              <Body>
                <Img src={WebStudio} alt="preview project 5" />
                <TextBody>
                  <Text>
                    Two-page business card website. Presentation of the web
                    design company.
                  </Text>
                  <Link
                    target="_blank"
                    href="https://vitaliyovsiienko.github.io/goit-markup-hw-08/"
                  >
                    view-project
                  </Link>
                </TextBody>
                {iconHtml}
                {iconSass}
              </Body>
            </Item>
          )}

          {(filters.length === 0 || filters.includes('React')) && (
            <Item>
              <Title>
                Project 6 <SecondTitle>&#47;&#47; CV</SecondTitle>
              </Title>
              <Body>
                <Img src={CV} alt="preview project 6" width="370" />
                <TextBody>
                  <Text>
                    Independent work on React, utilized React Router DOM and
                    React Icons.
                  </Text>
                  <Link target="_blank" href="https://vitaliyovsiienko.github.io/CV_Full-Stack_Developer/">
                    view-project
                  </Link>
                </TextBody>
                {iconReact}
              </Body>
            </Item>
          )}
        </List>
      </Container>
    </Box>
  );
};

export default FilteredProjects;
