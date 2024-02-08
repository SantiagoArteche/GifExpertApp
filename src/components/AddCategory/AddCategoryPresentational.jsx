import { useState } from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { Gif } from "../Gif/Gif";
import { Box, Input } from "@mui/material";

export const AddCategoryPresentational = ({
  values,
  handleChange,
  handleSubmit,
  categories,
  clearCategories,
}) => {
  const requestGif = useFetchGifs(categories);

  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{ display: "flex", justifyContent: "center", marginY: 5 }}
      >
        <Input
          onChange={handleChange}
          name="category"
          value={values.category}
          placeholder="Busque sus gifs..."
          sx={{
            width: 500,
            fontSize: 22,
            border: "2px solid black",
            borderBottom: "none",
            padding: 2,
            "::after": { borderBottom: "none" },
            ":before": {
              borderBottom: "2px solid black",
            },
          }}
          ON
        />
        <Box
          component={"button"}
          sx={{
            backgroundColor: "black",
            border: 0,
            color: "white",
            padding: 2,
            fontSize: 22,
            ":hover": { backgroundColor: "gray" },
            cursor: "pointer",
          }}
          type="submit"
        >
          Buscar
        </Box>
      </Box>
      {categories.length !== 0 && requestGif.length !== 0 && (
        <Box
          sx={{
            display: "flex",
            marginRight: 16,
            justifyContent: "end",
            alignSelf: "end",
            justifySelf: "end",
          }}
        >
          <Box
            sx={{
              backgroundColor: "black",
              padding: 2,
              borderRadius: 2,
              color: "white",
              alignSelf: "end",
              justifySelf: "end",
              cursor: "pointer",
              fontSize: 20,
              ":hover": { backgroundColor: "gray" },
            }}
            onClick={clearCategories}
          >
            Limpiar Busquedas
          </Box>
        </Box>
      )}
      {categories.length !== 0 && requestGif.length == 0 && (
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

      {requestGif.length !== 0 &&
        categories.map((category) => (
          <Gif key={category} categories={categories} category={category} />
        ))}
    </>
  );
};
