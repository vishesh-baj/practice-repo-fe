import {
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
} from "@mui/material";
const MuiImageList = () => {
  const itemData = [
    {
      img: "https://source.unsplash.com/random",
      title: "randomImage-01",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "randomImage-02",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "randomImage-03",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "randomImage-04",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "randomImage-05",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "randomImage-06",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "randomImage-07",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "randomImage-08",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "randomImage-09",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "randomImage-10",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "randomImage-01",
    },
  ];

  return (
    <Stack spacing={4}>
      {/* Stacking Layout */}
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}/?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Woven layout */}
      <ImageList
        variant="woven"
        sx={{ width: 500, height: 450 }}
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}/?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Masonary layout */}
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}/?w=164&h=164&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};
export default MuiImageList;
