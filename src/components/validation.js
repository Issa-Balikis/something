const Validation = (formData) => {
    let errors = {};
    
    if(!formData.company){
        errors.company="Company name is required"
    }
    if(!formData.name){
        errors.name="Name is required"
    }
    if(!formData.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
        errors.email="Email is invalid"
    }
    if(!formData.phone){
        errors.phone="field is empty"
    }
    if(!formData.street){
        errors.street="field is empty"
    }
    if(!formData.country){
        errors.country="field is empty"
    }
    if(!formData.city){
        errors.city="field is empty"
    }
    if(!formData.zip){
        errors.zip="field is empty"
    }
    if(!formData.street1){
        errors.street1="field is empty"
    }
    if(!formData.country1){
        errors.country1="field is empty"
    }
    if(!formData.city1){
        errors.city1="field is empty"
    }
    if(!formData.zip1){
        errors.zip1="field is empty"
    }
    if(!formData.weight){
        errors.weight="field is empty"
    }
    if(!formData.qty){
        errors.qty="field is empty"
    }
  
    if(!formData.length){
        errors.length="field is empty"
    }
  
    if(!formData.width){
        errors.width="field is empty"
    }
  
    if(!formData.height){
        errors.height="field is empty"
    }
  
    if(!formData.details){
        errors.details="Request details is empty"
    }
  
    return errors;
}
 
export default Validation;