import { useFormik } from "formik";
import { useState } from "react";
import { AddCategoryPresentational } from "./AddCategoryPresentational";

export const AddCategory = () => {
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );

  const onNewCategory = (newCategory) => {
    if (newCategory === "") return;

    setCategories([newCategory, ...categories]);
    localStorage.setItem(
      "categories",
      JSON.stringify([newCategory, ...categories])
    );
  };

  const clearCategories = () => {
    setCategories([]);
    localStorage.setItem("categories", JSON.stringify([]));
  };
  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues: {
      category: "",
    },
    onSubmit: (data) => {
      const uniqueCategory = categories.find(
        (category) => category.toUpperCase() === data.category.toUpperCase()
      );
      !uniqueCategory && onNewCategory(`${data.category}`);
      resetForm();
    },
    validateOnChange: false,
  });

  return (
    <AddCategoryPresentational
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      categories={categories}
      clearCategories={clearCategories}
    />
  );
};
