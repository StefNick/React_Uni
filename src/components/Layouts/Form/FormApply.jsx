import { values } from 'mobx';
import React from 'react'
import useForm from './useForm.tsx'

const FormApply = () => {
    const { handleChange, values, handleSubmit} = useForm();


    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Aplica, sa nu-ti fie rusine!</h1>
                <div className="form-inputs">
                    <label htmlFor="nume" className="form-label">
                        Nume Prenume
                    </label>
                    <input type="text" name="nume" className="Form-input" placeholder='Nume' value={values.nume} onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="text" name="email" className="Form-input" placeholder='email' value={values.email} onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="universitate" className="form-label">
                        Universitate
                    </label>
                    <input type="text" name="universitate" className="Form-input" placeholder='Universitate' value={values.universitate} onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="facultate" className="form-label">
                        Facultate/Grupa
                    </label>
                    <input type="text" name="facultate" className="Form-input" placeholder='facultate' value={values.facultate} onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="anul" className="form-label">
                        Anul
                    </label>
                    <input type="text" name="anul" className="Form-input" placeholder='anul' value={values.anul} onChange={handleChange}/>
                </div>
                <button className="form-input-btn" type="submit">Apply</button>
                <span className="form-input-login"></span>
            </form>
        </div>
    )
}

export default FormApply;