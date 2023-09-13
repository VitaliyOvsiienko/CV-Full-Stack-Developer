import Box from '../Box/Box';
import { outletMacker } from '../OutletMacker/OutletMacker';
import SubTitle from '../SubTitle/SubTitle';

const InterestsAbout = () => {
    const text = "I have a passion for sports, with a special love for playing football. In the past, I was a professional footballer, and the thrill of the game still runs deep within me. Aside from sports, I also enjoy travelling, exploring new places, and experiencing different cultures. Occasionally, I indulge in some gaming on my Sony PlayStation to unwind and have a bit of fun."
    const result = outletMacker(text);

    return (
        <Box>
            <SubTitle text={'interest'} />
            {result}
        </Box>
    );
};

export default InterestsAbout;