import { Box } from "@mui/material";

export const GifItem = ({ images, title }) => {
  return (
    <Box
      sx={{
        marginBottom: 8,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: 3,
        backgroundColor: "white",
        borderRadius: 3,
        border: "3px solid black",
      }}
    >
      <Box
        component={"img"}
        sx={{
          height: 355,
          width: 355,
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        }}
        src={images.original.webp}
        alt={title.split("GIF")[0]}
      />
      <Box
        sx={{
          fontSize: "1.2rem",
          backgroundColor: "white",
          marginBottom: 2,
          textTransform: "capitalize",
        }}
        component={"h3"}
      >
        {title.split("GIF")[0]}
      </Box>
    </Box>
  );
};
