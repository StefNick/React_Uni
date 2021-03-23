import { useState, useEffect } from "react";

const useForm = () => {
    const [values, setValues] = useState({
        nume:'',
        prenume:'',
        universitate:'',
        facultate:'',
        anul:''

    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const { name, value} = e.target
        setValues({
            ...values
            [name]: value
        })
        
}
    return {handleChange}
}

export default useForm;