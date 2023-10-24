import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Link,
  useMediaQuery,
} from "@mui/material";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

export const Navbar = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  return (
    <>
      {isNonMobile ? (
        <Box>
          <Box
            display='flex'
            width='100%'
            justifyContent='space-between'
            padding='10px 20px 10px 20px '>
            <Box height='50px' width='100px'>
              <Link href='#'>
                <img
                  height='100%'
                  width='100%'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRYVVECXdYBIDTyLIwKkHn5t2bWF4j0LjXIIhUSVJeZ71dyjJVOCvamzJn36nbGy1rvA&usqp=CAU'
                  alt='LOGO'
                />
              </Link>
            </Box>
            <Box>
              <TextField
                variant='outlined'
                placeholder='Search'
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "540px",
                  backgroundColor: "#f5f5f5",
                  "& fieldset": { border: "none" },
                }}
              />
            </Box>
            <Box>
              <IconButton>
                <AccountCircleOutlinedIcon />
              </IconButton>
              <IconButton>
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <IconButton>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box width='100%' display='flex' justifyContent='space-evenly'>
            <Link
              href='#'
              sx={{ fontSize: "1.2rem", color: "#696969" }}
              underline='hover'>
              Deals
            </Link>
            <Link
              href='#'
              sx={{ fontSize: "1.2rem", color: "#696969" }}
              underline='hover'>
              Sofas & Recliners
            </Link>
            <Link
              href='#'
              sx={{ fontSize: "1.2rem", color: "#696969" }}
              underline='hover'>
              Living
            </Link>
            <Link
              href='#'
              sx={{ fontSize: "1.2rem", color: "#696969" }}
              underline='hover'>
              Bedroom & Mattresses
            </Link>
            <Link
              href='#'
              sx={{ fontSize: "1.2rem", color: "#696969" }}
              underline='hover'>
              Lighting & Decor
            </Link>
            <Link
              href='#'
              sx={{ fontSize: "1.2rem", color: "#696969" }}
              underline='hover'>
              Lighting & Decor
            </Link>
            <Link
              href='#'
              sx={{ fontSize: "1.2rem", color: "#696969" }}
              underline='hover'>
              Interiors
            </Link>
          </Box>
        </Box>
      ) : (
        <Box width='100%' p='8px'>
          {isSidebarVisible && (
            <Box
              position='fixed'
              height='100vh'
              width='100vw'
              zIndex={10}
              p='20px'
              backgroundColor='#fff'>
              <Box display='flex' justifyContent='space-between'>
                <Button>
                  <img
                    height='45px'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRYVVECXdYBIDTyLIwKkHn5t2bWF4j0LjXIIhUSVJeZ71dyjJVOCvamzJn36nbGy1rvA&usqp=CAU'
                    alt='LOGO'
                  />
                </Button>
                <IconButton
                  sx={{
                    height: "50px",
                    width: "50px",
                  }}
                  onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
              <Box display='flex' flexDirection='column'>
                <IconButton>
                  <AddLocationAltOutlinedIcon />
                  <Typography fontSize='14px'>Find Shops</Typography>
                </IconButton>
                <IconButton>
                  <LocalShippingOutlinedIcon />
                  <Typography fontSize='14px'>Track Order</Typography>
                </IconButton>
                <IconButton>
                  <ApartmentOutlinedIcon />
                  <Typography fontSize='14px'>Franchise Enquiry</Typography>
                </IconButton>
                <IconButton>
                  <ContactSupportOutlinedIcon />
                  <Typography fontSize='14px'>Project Enquiry</Typography>
                </IconButton>
              </Box>
              <Box display='flex' flexDirection='column'>
                <Typography variant='h5'>Catagories</Typography>
                <Button>Furniture</Button>

                <Button>Mattress</Button>

                <Button>Storage & Table</Button>

                <Button>Beds & Wardrobes</Button>

                <Button>Dining</Button>

                <Button>Decor</Button>

                <Button>Hindware Appliances</Button>

                <Button>Clearance Sale</Button>
              </Box>
            </Box>
          )}
          <Box>
            <Box display='flex' width='100%' justifyContent='space-between'>
              <Box display='flex'>
                <IconButton
                  onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                  <MenuOutlinedIcon />
                </IconButton>
                <Box height='40px'>
                  <Link href='#'>
                    <img
                      height='100%'
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRYVVECXdYBIDTyLIwKkHn5t2bWF4j0LjXIIhUSVJeZ71dyjJVOCvamzJn36nbGy1rvA&usqp=CAU'
                      alt='LOGO'
                    />
                  </Link>
                </Box>
              </Box>

              <Box>
                <IconButton>
                  <AccountCircleOutlinedIcon />
                </IconButton>
                <IconButton>
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box p='8px'>
            <TextField
              variant='outlined'
              placeholder='Search'
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: "100%",
                backgroundColor: "#f5f5f5",
                "& fieldset": { border: "none" },
              }}
            />
          </Box>
        </Box>
      )}
    </>
  );
};
