import { Text, DevName, DevProfile, TextDownProfile, TextViolet, TextGreen, LinkOrange, Container, Section, TextList, HeadProfile, Green, Blue, MobTextList } from "./Home.styled";

const Home = () => {

    return (
        <Section>
            <Green></Green>
            <Blue></Blue>
            <Container>
          <HeadProfile>
            
                    <Text>Hi Everyone. I am</Text> 
                    <DevName>Vitaliy Ovsiyenko</DevName>
                    <DevProfile>&gt; Full-Stack Developer</DevProfile>
                </HeadProfile>
                <TextList>
                    <TextDownProfile>&#47;&#47;this resume is built with react</TextDownProfile>
                    <TextDownProfile>&#47;&#47;find my profile on Github:</TextDownProfile>
                    <TextDownProfile><TextViolet>const</TextViolet><TextGreen> githubLink = </TextGreen><LinkOrange aria-label="Repositories on GitHub" href="https://github.com/VitaliyOvsiienko" target="_blank">https://github.com/VitaliyOvsiienko</LinkOrange></TextDownProfile>
                </TextList>
                <MobTextList>
                    <TextDownProfile>&#47;&#47; find my profile on Github:</TextDownProfile>
                    <TextDownProfile><TextViolet>const</TextViolet><TextGreen> githubLink = </TextGreen><LinkOrange aria-label="Repositories on GitHub" href="https://github.com/VitaliyOvsiienko" target="_blank">https://github.com/VitaliyOvsiienko</LinkOrange></TextDownProfile>
                </MobTextList>
            </Container>
        </Section>)
};

export default Home;