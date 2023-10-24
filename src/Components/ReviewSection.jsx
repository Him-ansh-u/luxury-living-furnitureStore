import { Box, Typography, useMediaQuery } from "@mui/material";
export const ReviewSection = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");

  return (
    <>
      {isNonMobile ? (
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography color='#696969' fontSize='1.5rem'>
            Watch our Reviews
          </Typography>

          <iframe
            width='760'
            height='415'
            src='https://www.youtube.com/embed/roABNwbjZf4?si=7zqjSh6Ugergh72y'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen></iframe>
        </Box>
      ) : (
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography color='#696969' fontSize='1.5rem'>
            Watch our Reviews
          </Typography>

          <iframe
            width='400px'
            height='300px'
            src='https://www.youtube.com/embed/roABNwbjZf4?si=7zqjSh6Ugergh72y'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen></iframe>
        </Box>
      )}
    </>
  );
};
