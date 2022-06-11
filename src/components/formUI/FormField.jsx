import { Field } from "formik"
import Input from "./Input"

const FormField = (props) => {
  const { children, ...otherProps } = props

  return (
    <Field {...otherProps}>
      {({ field, meta: { touched, error } }) => (
        <div>
          <label className="block font-bold mt-2">
            {children}
            <Input className="w-full" {...field} {...otherProps} />
          </label>
          {touched && error ? (
            <p className="text-red-500 p-2 text-sm">{error}</p>
          ) : null}
        </div>
      )}
    </Field>
  )
}

export default FormField
