import { object, ref, string } from "yup";

export const productValidationSchema = object().shape({
  title: string().required("Name required!"),
  brand: string().required("Author required!"),
  // date: string().required("Date required!"),
  rating: string().required("Rating required!"),
});
