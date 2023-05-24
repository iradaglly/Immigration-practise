import * as yup from "yup";

export const Validation = yup.object().shape({
  title: yup.string().required("title is required"),
  desc: yup.string().required("desc is required"),

  image: yup.string().required("image is required"),
  countryName: yup.string().required("Country name is required"),
});
