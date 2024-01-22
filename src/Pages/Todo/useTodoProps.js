// import { useState, useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const useTodoProp = () => {
       const { register, handleSubmit, control, watch, } = useForm({
              defaultValues: {
                     users: [
                            { title: 'birinchi', check: false, },
                            { title: 'ikkinchi', check: false, },
                     ]
              }
       })

       const { fields, append, remove } = useFieldArray({
              control: control,
              name: "users"
       })

       // const inputRef = useRef(null)
       // const [count, setCount] = useState(fields.length || 0)
       
       function onSubmit(data) {
              append({ title: watch('name'), check: true, })
       }

       // const handleDelete = () => {
       //        // console.log(inputRef.current.id);
       // }

       return {
              register,
              handleSubmit,
              onSubmit,
              fields,
              remove,
       }
}