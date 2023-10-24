import { Box, Typography, useMediaQuery } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/material/styles";

const aboutUs = ["About Us", "Contact Us", "Blog", "Affiliates"];
const helpMenu = [
  "FAQs",
  "Store Locator",
  "Franchise Enquiry",
  "Project Enquiry",
  "Modular Expert",
];
const productSection = [
  "Product Care",
  "Buying Guide",
  "Warranty",
  "Reviews",
  "Offers",
];

export const Footer = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <>
      {isNonMobile ? (
        <Box>
          <Box
            m='30px 0px 0px 0px'
            bgcolor='#333'
            color='#fff'
            p='10px'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'>
            <Box display='flex'>
              <Box
                m='-30px 0px 0px 0px '
                boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRYVVECXdYBIDTyLIwKkHn5t2bWF4j0LjXIIhUSVJeZ71dyjJVOCvamzJn36nbGy1rvA&usqp=CAU'
                  alt='LOGO'
                />
              </Box>
              <Box
                width='100%'
                display='flex'
                p='10px 30px 0px 30px'
                justifyContent='space-between'>
                <Box>
                  <Typography></Typography>
                  {aboutUs.map((item, key) => {
                    return <ListItemGenerator item={item} key={key} />;
                  })}
                </Box>

                <Box>
                  {helpMenu.map((item, key) => {
                    return <ListItemGenerator item={item} key={key} />;
                  })}
                </Box>

                <Box>
                  {productSection.map((item, key) => {
                    return <ListItemGenerator item={item} key={key} />;
                  })}
                </Box>
              </Box>
            </Box>
          </Box>

          <Box p='10px'>
            <Box width='100%' display='flex' flexDirection='column'>
              <Box display='flex' justifyContent='space-between'>
                <Typography fontSize='1.2rem'>Get in touch with us</Typography>
                <Box display='flex'>
                  <LocationOnIcon />
                  <Typography>
                    Evok Homes Private Limited 68, Echelon Inst. Area,
                    Sector-32, Gurugram, Haryana 122 001, India.
                  </Typography>
                </Box>
              </Box>

              <Box
                display='flex'
                width='100%'
                justifyContent='space-between'
                p='0px 20px 0px 20px'>
                <Box display='flex'>
                  <CallIcon />
                  <Typography>1800-1207-577 / 08069145666</Typography>
                </Box>
                <Box display='flex'>
                  <EmailIcon />
                  <Typography>evokcare@evok.in</Typography>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box> &#169; All copyrights reseerved to the rightful owner</Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            m='20px 0px 0px 0px'
            bgcolor='#333'
            color='#fff'
            p='5px'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'>
            <Box display='flex'>
              <Box
                m='-20px 0px 0px 0px '
                boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                <Box>
                  <img
                    height='60px'
                    width='100px'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRYVVECXdYBIDTyLIwKkHn5t2bWF4j0LjXIIhUSVJeZ71dyjJVOCvamzJn36nbGy1rvA&usqp=CAU'
                    alt='LOGO'
                  />
                </Box>
                <Box></Box>
              </Box>
              <Box
                width='100%'
                display='flex'
                p='5px'
                justifyContent='space-between'>
                <Box>
                  <Typography>About</Typography>
                  {aboutUs.map((item, key) => {
                    return <ListItemGenerator item={item} key={key} />;
                  })}
                </Box>

                <Box>
                  <Typography>Help</Typography>
                  {helpMenu.map((item, key) => {
                    return <ListItemGenerator item={item} key={key} />;
                  })}
                </Box>

                <Box>
                  <Typography>Products</Typography>
                  {productSection.map((item, key) => {
                    return <ListItemGenerator item={item} key={key} />;
                  })}
                </Box>
              </Box>
            </Box>
          </Box>

          <Box p='10px'>
            <Box width='100%' display='flex' flexDirection='column'>
              <Box>
                <Typography fontSize='0.8rem'>
                  Get in touch with us :
                </Typography>
                <Box display='flex'>
                  <LocationOnIcon
                    sx={{
                      height: "17px",
                    }}
                  />
                  <Typography fontSize='0.8rem'>
                    Evok Homes Private Limited 68, Echelon Inst. Area,
                    Sector-32, Gurugram, Haryana 122 001, India.
                  </Typography>
                </Box>
              </Box>

              <Box
                display='flex'
                width='100%'
                justifyContent='space-between'
                p='0px 20px 0px 20px'>
                <Box display='flex'>
                  <CallIcon
                    sx={{
                      height: "17px",
                    }}
                  />
                  <Typography fontSize='0.8rem'>
                    1800-1207-577 / 08069145666
                  </Typography>
                </Box>
                <Box display='flex'>
                  <EmailIcon
                    sx={{
                      height: "17px",
                    }}
                  />
                  <Typography fontSize='0.8rem'> evokcare@evok.in</Typography>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box fontSize='0.8rem'>
              &#169; All copyrights reseerved to the rightful owner
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

const ListItemGenerator = (props) => {
  const isNonMobile = useMediaQuery("(min-width:850px)");
  return (
    <>
      {isNonMobile ? (
        <ul>
          <li
            style={{
              padding: "2px",
            }}>
            <a href='#'>{props.item}</a>
          </li>
        </ul>
      ) : (
        <ul>
          <li
            style={{
              fontSize: "0.6rem",
            }}>
            <a href='#'>{props.item}</a>
          </li>
        </ul>
      )}
    </>
  );
};
