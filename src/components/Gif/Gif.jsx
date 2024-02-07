import { Box } from "@mui/material";
import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs.js";
import { RequestGif } from "../RequestGif/RequestGif.jsx";

export const Gif = ({ category }) => {
  const requestGif = useFetchGifs(category);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component={"h2"}
        sx={{ textAlign: "center", marginBottom: 5, fontSize: "2.7rem" }}
      >
        {category}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {requestGif.map(
          ({ id, images, title }) =>
            title.trim() != "" && (
              <RequestGif key={id} images={images} title={title} />
            )
        )}
      </Box>
    </Box>
  );
};
