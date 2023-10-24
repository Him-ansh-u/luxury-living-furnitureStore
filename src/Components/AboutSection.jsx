import { Typography, Box } from "@mui/material";

export const AboutSection = () => {
  return (
    <Box
      width='100%'
      height='auto'
      display='flex'
      flexDirection=' column'
      justifyContent='center'
      alignItems='center'>
      <Box display='flex' justifyContent='center' className='topic-container'>
        <Typography color='#696969' fontSize='2rem' className='topic'>
          ABOUT
        </Typography>
      </Box>
      <Box className='about-container'>
        <img
          src='https://keshraf.github.io/Product-Landing/pictures/amc.jpg'
          alt='AMC THEATRES'
          className='about-image aboutImg'
        />
        <Box className='about-text-box AbtTextBox'>
          <Typography fontSize='1.5rem' className='about-text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            tempore deleniti. Eligendi eos modi, nemo tempore, quam voluptas
            corrupti quis esse excepturi quasi voluptates eveniet repellendus,
            quae sint nihil laborum!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
