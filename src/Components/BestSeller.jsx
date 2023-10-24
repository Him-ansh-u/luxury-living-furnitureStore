import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box, Typography, Rating, IconButton } from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const bestSellerItems = [
  {
    name: "Sofa",
    description: "2",
    price: "1000",
    rating: 3,
    img: "https://static.vecteezy.com/system/resources/previews/011/794/199/non_2x/fabric-armchair-soft-cushion-with-metal-leg-3d-rendering-modern-interior-design-for-living-room-free-png.png",
  },
  {
    name: "Gaming chair",
    description: "2",
    price: "1000",
    rating: 4,
    img: "https://lengliim.com/wp-content/uploads/2023/09/DECOWL-218.png",
  },
  {
    name: "Cupboard",
    description: "Gothic Wall Cupboard ",
    price: "1000",
    rating: 3,
    img: "https://scumblegoosie.co.uk/wp-content/uploads/2019/01/WC7-Gothic-Shelf-supplement-CMYK-e1548620297499.png",
  },
  {
    name: "Kitchen Counter",
    description: "Modern style kitchen counter with sink",
    price: "1000",
    rating: 3,
    img: "https://professional3dservices.com/img/modeling/kitchen-cabinets-cupboards.png",
  },
  {
    name: "Cabinate",
    description: "Durable Solid Wood Kitchen Cabinets  ",
    rating: 3,
    price: "1000",
    img: "https://www.supreme.co.in/uploads/images/fmm8SqiZCCINTNWYaU3BmyyZ6PLcJ2nArDxRxdkw.png",
  },
];

export const BestSeller = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box p='10px 20px 10px 20px'>
      <Typography fontSize='1.8rem'>Best Seller</Typography>
      <Carousel autoPlay infinite responsive={responsive}>
        {bestSellerItems.map((item, key) => {
          return <Cards item={item} key={key} />;
        })}
      </Carousel>
    </Box>
  );
};

const Cards = (props) => {
  let val = 2;
  return (
    <Card
      sx={{
        maxWidth: 300,
        overflow: "hidden",
      }}>
      <CardMedia
        sx={{
          overflow: "visible",
          transition: "0.3s",
          "&:hover": { transform: "scale(1.1)" },
        }}
        component='img'
        alt={props.item.name}
        height='220'
        image={props.item.img}
      />
      <CardContent sx={{ backgroundColor: "#fff" }}>
        <Typography gutterBottom fontSize='1rem' component='div'>
          {props.item.name}
        </Typography>
        <Typography fontSize='0.8rem' color='text.secondary'>
          {props.item.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography>&#8377;{props.item.price}</Typography>
          <Rating value={props.item.rating} readOnly />
        </Box>

        <IconButton size='small' color='primary'>
          <AddShoppingCartIcon />
          Add To Cart
        </IconButton>
      </CardActions>
    </Card>
  );
};
