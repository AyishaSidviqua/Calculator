import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./index.scss"
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";


interface data {
  email: string,
  password: string
}
const initalValue: data = {
  email: "",
  password: ""
}
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("name is required"),
  password: Yup.string().max(6).required("password is required")
})
const UseFormikLoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: initalValue,
    validationSchema,
    onSubmit: (values,action) => {
      console.log(values, "val");
      action.resetForm();
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>UseFormik Form</h4>
      <div >
        <div style={{ marginTop: 20 }}>
          <InputText
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="errorr">{formik.errors.email}</div>
          ) : null}
        </div>
        <div style={{ marginTop: 20 }}>
          <InputText
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="errorr">{formik.errors.password}</div>
          ) : null}
        </div>
        <div style={{marginTop:20}}>
          <Button
            type="submit"
            label="submit"
            className="subBtn"
          >
          </Button>
        </div>
      </div>
    </form>
  )
}
export default UseFormikLoginForm