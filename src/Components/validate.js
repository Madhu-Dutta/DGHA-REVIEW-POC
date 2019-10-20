// //Validate errors
// export function validate{
//     let fNameError = '';
//     let lNameError = '';        
//     let emailError = '';
//     let membershipTypeError= '';
//     let titleError= '';  
//     let streetAddressError= '';
//     let suburbError='';
//     let stateError= '';   
//     let postcodeError= '';
//     let phoneError= '';

//     //No blank inputs - validations
//     if(!this.state.firstName){
//         fNameError = 'This field cannot be blank';            
//     }        
//     if(!this.state.lastName){            
//         lNameError = 'This field cannot be blank';            
//     }
//     if(!this.state.title){
//         titleError = 'This field cannot be blank';           
//     }
//     if(!this.state.streetAddress){            
//         streetAddressError = 'This field cannot be blank';            
//     }
//     if(!this.state.suburb){            
//         suburbError = 'This field cannot be blank';           
//     }
//     if(!this.state.state){            
//         stateError = 'This field cannot be blank';           
//     }
//     if(!this.state.postcode){            
//         postcodeError = 'This field cannot be blank';          
//     }
//     if(!this.state.phone){           
//         phoneError = 'This field cannot be blank';           
//     }
//     //Radio button options check - validations
//     if(!this.state.membershipType){           
//         membershipTypeError = 'Please choose one of the given options';
//     }
//     //Input fields Length check
//     if(this.state.firstName.length > 10){
//         fNameError ="First name is too long" 
//     }

//     //Check for valid email
//     var emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

//     if(!emailPattern.test(this.state.email)){
//         emailError = 'invalid email';
//     }
//     //If Error in input fields
//     if(emailError || fNameError || lNameError || titleError || streetAddressError|| suburbError
//         ||stateError||postcodeError||phoneError|| membershipTypeError){
//         this.setState({emailError, fNameError, lNameError, titleError, streetAddressError,
//         suburbError, stateError, postcodeError, phoneError, membershipTypeError});
//         //Input fields are not valid
//         return false;
//     }
//     //if no error. Input fields are valid    
//     return true;
// }