import Carousel from "react-material-ui-carousel";
import { useMediaQuery, Box, Typography } from "@mui/material";

var items = [
  {
    name: "We Have What You Want",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, nulla, facere quam facilis cum, ab in at qui explicabo illum deserunt culpa eius expedita. Iste ipsa earum impedit perferendis minus!",
    img: "https://img.freepik.com/premium-photo/interior-living-room-with-yellow-sofa-generative-ai_220873-25589.jpg?w=996",
  },
  {
    name: "Modern Furniture ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, nulla, facere quam facilis cum, ab in at qui explicabo illum deserunt culpa eius expedita. Iste ipsa earum impedit perferendis minus! ",
    img: "https://img.freepik.com/free-photo/blue-armchair-against-blue-wall-living-room-interior-elegant-interior-design-with-copy-space-ai-generative_123827-23719.jpg?w=1380&t=st=1698074946~exp=1698075546~hmac=e92d6c6862fa49a2ce1eab216f080cbea7bcee87f7123e7fa0d612c8fa2ed73b",
  },

  {
    name: "Casual Furniture For a Laid Back Experiance",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, nulla, facere quam facilis cum, ab in at qui explicabo illum deserunt culpa eius expedita. Iste ipsa earum impedit perferendis minus! ",

    img: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg?w=826&t=st=1698074253~exp=1698074853~hmac=4b7cd02b869ff02512da47bfd2f940addab0d85408a075fe817b85a83c3ec262",
  },
  {
    name: "Traditional Furnitures for a premium look",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et provident tempora voluptatem eos numquam inventore eligendi qui dicta reprehenderit?",
    img: "https://images2.alphacoders.com/270/270990.jpg",
  },
  {
    name: "Lively Living Room Experiance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et provident tempora voluptatem eos numquam inventore eligendi qui dicta reprehenderit?",
    img: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=826&t=st=1698074482~exp=1698075082~hmac=793515eb446d976ac8f32c21bfbd97eff1106b5f41e81c000a7e1d662f216bee",
  },
];

export const Ads = () => {
  return (
    <Carousel autoPlay>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  const isNonMobile = useMediaQuery("(min-width:900px)");

  return (
    <>
      {isNonMobile ? (
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          padding='30px '
          style={{
            height: "500px",
            backgroundImage: `url(${props.item.img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}>
          <Typography fontSize='2.5rem' color='#fff'>
            {props.item.name}
          </Typography>
          <Typography width='300px' color='#f4f4f4'>
            {props.item.description}
          </Typography>
        </Box>
      ) : (
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          padding='30px '
          style={{
            height: "350px",
            backgroundImage: `url(${props.item.img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}>
          <Typography
            fontSize='clamp(1rem, -2rem + 5.6vw, 1.5rem)'
            color='#fff'>
            {props.item.name}
          </Typography>
          <Typography
            fontSize=' clamp(0.5rem, 2rem + -11.2vw, 1.0rem)'
            maxWidth={isNonMobile ? "600px" : "200px"}
            color='#f4f4f4'>
            {props.item.description}
          </Typography>
        </Box>
      )}
    </>
  );
}
