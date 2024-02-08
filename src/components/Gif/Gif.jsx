import { Box } from "@mui/material";

import { useFetchGifs } from "../../hooks/useFetchGifs.js";
import { RequestGif } from "../RequestGif/RequestGif.jsx";

export const Gif = ({ category }) => {
  let requestGif = useFetchGifs(category);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {requestGif.length !== 0 ? (
        <>
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
                  <RequestGif key={id} images={images} title={title} />
                )
            )}
          </Box>
        </>
      ) : (
        <Box
          sx={{
            textAlign: "center",
            marginBottom: 5,
            fontSize: "2.7rem",
            textTransform: "capitalize",
          }}
          component={"h2"}
        >
          Cargando...
        </Box>
      )}
    </Box>
  );
};
