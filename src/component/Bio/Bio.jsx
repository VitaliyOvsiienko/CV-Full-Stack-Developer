import Box from '../Box/Box';
import {outletMacker} from '../OutletMacker/OutletMacker';
import SubTitle from '../SubTitle/SubTitle';

const Bio = () => {
  const text =
    'Enthusiastic Junior Full-Stack Developer with a strong foundation in both Front-End and Back-End development. Skilled in HTML, CSS, JavaScript, React, and Node.js, facilitating the creation of engaging and dynamic web interfaces. Experienced in utilizing Git for efficient project collaboration and version control. Dedicated to ongoing learning, with a knack for producing visually appealing web designs. An adept communicator and proactive team player, eager to contribute to inventive web solutions while actively seeking insights from seasoned professionals.';

  const result = outletMacker(text);

  return (
    <Box>
      <SubTitle text={'personal-info'} />
      {result}
    </Box>
  );
};

export default Bio;
