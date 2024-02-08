import { Box } from "@mui/material";
import { useFetchGifs } from "../../hooks/useFetchGifs.js";

import { GifItem } from "../GifItem/GifItem.jsx";

export const Gif = ({ category }) => {
  let requestGif = useFetchGifs(category);

  return (
    <>
      {requestGif.length !== 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component={"h2"}
            sx={{
              textAlign: "center",
              marginBottom: 5,
              fontSize: "2.7rem",
              textTransform: "capitalize",
            }}
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
                  <GifItem key={id} images={images} title={title} />
                )
            )}
          </Box>
        </Box>
      )}
    </>
  );
};
