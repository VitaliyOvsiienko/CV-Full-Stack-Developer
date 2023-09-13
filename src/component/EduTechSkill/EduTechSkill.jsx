import { nanoid } from 'nanoid';
import { EduContainer, List, Item, Title, Text } from './EduTechSkill.styled';
import SubTitle from '../SubTitle/SubTitle';

const EduTechSkill = () => {
  const skillsAndQualities = [
    'Systematic approach in work',
    'Proficient at setting and reaching goals',
    'Quick learning',
    'Self-motivated',
    'Critical thinking and problem-solving skills',
    'Team collaboration',
  ];
  const techSkils = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML',
    'CSS/SASS',
    'Responsive/Adaptive design',
    'REST API',
    'Docker',
    'WebSocket',
    'MongoDB',
    'GIT',
    'Webpack',
  ];

  return (
    <>
      <SubTitle text={'tech-soft-skills'} />
      <EduContainer>
        <Title>&#47;&#47;tech-skills</Title>
        <List>
          {techSkils.map((item, index) => (
            <Item key={nanoid()}>
              <Text>
                {index <= 9 ? '\u00a0' : null}
                {index}:&nbsp;
              </Text>
              {item}
            </Item>
          ))}
        </List>
        <Title>&#47;&#47;soft-skills</Title>
        <List>
          {skillsAndQualities.map((item, index) => (
            <Item key={nanoid()}>
              <Text>
                {index <= 9 ? '\u00a0' : null}
                {index}:&nbsp;
              </Text>
              {item}
            </Item>
          ))}
        </List>
      </EduContainer>
    </>
  );
};

export default EduTechSkill;
