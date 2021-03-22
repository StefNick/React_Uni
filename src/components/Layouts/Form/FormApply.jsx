import React from 'react'

const FormApply = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Aplica, sa nu-ti fie rusine!</h1>
                <div className="form-inputs">
                    <label htmlFor="nume" className="form-label">
                        Nume
                    </label>
                    <input type="text" name="nume" className="Form-input" placeholder='Nume'/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="prenume" className="form-label">
                        Prenume
                    </label>
                    <input type="text" name="prenume" className="Form-input" placeholder='prenume'/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="universitate" className="form-label">
                        Universitate
                    </label>
                    <input type="text" name="universitate" className="Form-input" placeholder='universitate'/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="facultate" className="form-label">
                        Facultate/Grupa
                    </label>
                    <input type="text" name="facultate" className="Form-input" placeholder='facultate'/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="anul" className="form-label">
                        Anul
                    </label>
                    <input type="text" name="anul" className="Form-input" placeholder='anul'/>
                </div>
                <button className="form-input-btn" type="submit">Apply</button>
                <span className="form-input-login"></span>
            </form>
        </div>
    )
}

export default FormApply;