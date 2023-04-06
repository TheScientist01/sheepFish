import { object, ref, string } from "yup";

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 32;

export const passwordValidationFactory = (message) => {
  return string()
    .required(message)
    .min(MIN_PASSWORD_LENGTH, `Password must be ${MIN_PASSWORD_LENGTH} characters or longer!`)
    .max(MAX_PASSWORD_LENGTH, `Password must be ${MAX_PASSWORD_LENGTH} characters or shorter!`);
};

export const passwordDefaultValidationFactory = () => {
  return {
    minLength: {
      value: MIN_PASSWORD_LENGTH,
      message: `Password must be ${MIN_PASSWORD_LENGTH} characters or longer!`,
    },
    maxLength: {
      value: MAX_PASSWORD_LENGTH,
      message: `Password must be ${MAX_PASSWORD_LENGTH} characters or shorter!`,
    },
  };
};

export const resetPasswordValidationSchema = object().shape({
  oldPassword: passwordValidationFactory("Old password is required!"),
  newPassword: passwordValidationFactory("New password is required!"),
  confirmPassword: passwordValidationFactory("Confirm password is required!").oneOf(
    [ref("newPassword")],
    "New password and confirm password must match"
  ),
});

export const addFolderSchema = object().shape({
  name: string().required("Required!"),
});
export const noteValidationSchema = object().shape({
  headline: string().required("Headline required!"),
  content: string().required("Content required!"),
});

export const vaccineValidationSchema = object().shape({
  clinic: string().required("Clinic required!"),
  date: string().required("Date required!"),
});

export const vacationValidationSchema = object().shape({
  vacationStart: string().required("Start date is required!"),
  vacationEnd: string().required("End date is required!"),
});

export const createGroupValidationSchema = object().shape({
  name: string().required("Name is required"),
  admissionYear: string().required("Admission year is required"),
  email: string().email("Email is invalid").required("Email is required"),
});

/* 
IMPORTANT: BELOW FUNCTIONS ARE NOT A VALIDATION SCHEMAS, THIS IS A VALIDATION FUNCTIONS, DO NOT USE THEM, USE THE SCHEMA INSTEAD 
I WILL REMOVE THEM SOON, I JUST WANT TO KEEP THEM FOR REFERENCE.
*/

export const isEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isNotEmpty = (value) => {
  return value !== null && value !== undefined && value !== "" && value !== "Choose" && !Number.isNaN(value);
};

export const minLength = (value, length) => {
  return value.length >= length;
};

export const maxLength = (value, length) => {
  return value.length <= length;
};
