import {useFormik} from "formik"
import { initialValues, validationSchema } from "./schemas"
import {Container, Grid, TextField, Button, Box} from "@material-ui/core"
import * as Yup from "yup"

const Login = () => {
 
  const handleLogin = ({username, password}) => {
    //llegado a este punto -> username y password estan validados con mi schema
  }

  const formik = useFormik({
    initialValues,
    validationSchema : Yup.object(validationSchema),
    onSubmit : (obj) => {
      handleLogin(obj)
    }
  })
 
  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={8} md={4}>
          <form onSubmit={formik.handleSubmit}>
            <Box mt={1}>
              <TextField 
                type="text" 
                name="username"
                label="usuario"
                onChange={formik.handleChange}
                error={formik.errors.username}
                fullWidth
              />
              {formik?.errors?.username && formik.errors.username}
            </Box>
            <Box mt={1}>
              <TextField 
                type="text" 
                name="password"
                label="contraseña"
                onChange={formik.handleChange}
                error={formik.errors.password}
                fullWidth
              />
              {formik?.errors?.password && formik.errors.password}
            </Box>
            <Box mt={3}>
              <Button 
                fullWidth
                variant="contained"
                color="primary"
                type="submit">
                  enviar
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login