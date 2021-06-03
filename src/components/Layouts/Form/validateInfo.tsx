export default function validateInfo(values){
    let errors = {};

    if(!values.nume.trim()) {
        errors.nume = 'Required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())){
    //     errors.nume = 'nume corect'
    // }

    if (!values.email) {
        errors.email = 'Email required';
    //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //     errors.email = 'Email address is invalid';
    //   }
}