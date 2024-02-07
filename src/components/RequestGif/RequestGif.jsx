import { Box } from "@mui/material";
import React from "react";

export const RequestGif = ({ images, title }) => {
  console.log(images);
  return (
    <Box
      sx={{
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Box sx={{ fontSize: "1.5rem" }} component={"h3"}>
        {title.split("GIF")[0]}
      </Box>
      <Box
        component={"img"}
        sx={{
          height: 355,
          width: 355,
          borderRadius: 3,
          border: "3px solid black",
        }}
        src={images.original.webp}
        alt={title.split("GIF")[0]}
      />
    </Box>
  );
};
