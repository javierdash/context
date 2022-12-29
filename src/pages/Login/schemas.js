import * as Yup from "yup"

//formik --> states
export const initialValues = {
  username: "",
  password: "",
}

export const validationSchema = {
  username: Yup.string().required("este campo no puede estar vacío!!"),
  password: Yup.string().min(5, "la contraseña debe contener al menos 5 dígitos").required("la contraseña no puede estar vacía")
  
}