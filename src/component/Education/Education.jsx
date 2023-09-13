import Box from '../Box/Box';
import SubTitle from '../SubTitle/SubTitle';
import { EduContainer, EduBox, Title, Description, DateTime, DescriptionSpan } from './Education.styled';
import EduTechSkill from '../EduTechSkill/EduTechSkill';

const Education = () => {
    return (<>
        <Box size={2}>
            <SubTitle text={'education'} />
            <EduContainer>
                <EduBox>
                    <Title>IT School GoIT</Title>
                    <Description><DescriptionSpan>Full-Stack Developer</DescriptionSpan></Description>
                    <DateTime>2022-2023</DateTime>
                </EduBox>
                <EduBox>
                    <Title>National Academy of Internal Affairs</Title>
                    <Description>Master's degree, <DescriptionSpan>Law</DescriptionSpan></Description>
                    <DateTime>2014-2015</DateTime>
                </EduBox>
                <EduBox>
                    <Title>National Academy of Internal Affairs</Title>
                    <Description>Bachelor's degree, <DescriptionSpan>Law</DescriptionSpan></Description>
                    <DateTime>2006-2011</DateTime>
                </EduBox>
            </EduContainer>
        </Box>
        <Box size={2}>
            <EduTechSkill />
        </Box>
    </>)
}

export default Education;