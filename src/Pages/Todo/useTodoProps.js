
import { useFieldArray, useForm } from "react-hook-form";

export const useTodoProp = () => {
       const { register, handleSubmit, control, watch } = useForm({
              defaultValues: {
                     users: [
                            { id: 0, title: 'birinchi', check: false, },
                            { id: 1, title: 'ikkinchi', check: false, },
                     ]
              }
       })

       const { fields, append } = useFieldArray({
              control: control,
              name: "users"
       })

       // console.log(fields);

       function onSubmit(data) {
              append({ id: fields.length + 1, title: watch('name'), check: false, })
       }

       return {
              register,
              handleSubmit,
              onSubmit,
              fields,
       }
}