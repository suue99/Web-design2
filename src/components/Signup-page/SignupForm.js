import {useForm} from 'react-hook-form'
import '/Users/suue/Desktop/web-design2/src/components/Signup-page/form.css'
import { Link } from 'react-router-dom';

function SignupForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); }
  

      return (
        <form onSubmit={handleSubmit (onSubmit)}>
          
        <div className="form-container">
          <div className='window'>
            <div className='overlay'></div>
              <div className='content'>
              <div className='welcome'>Hello There!</div>

              <div className='subtitle'>Create your account.</div>


                  <div className='input-fields'>
      
                      <input
                        type="text"
                        id="firstname"
                        className='input-line full-width'
                        placeholder=" First Name "
                        {...register("firstName", { required: true })} />
                        {errors.firstName && <p className='error-message'> *first name is required</p>}
                    


                      <input
                        type="text"
                        id="lastname"
                        className='input-line full-width'
                        placeholder=" Last Name "
                        {...register("lastName", { required: true })} />
                        {errors.lastName && <p className='error-message'> *last name is required </p>}


                      <input
                        type="text"
                        id="email"
                        className='input-line full-width'
                        placeholder=" Email "
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.email && <p className='error-message'> *Enter a valid email </p>}
          

                      <input
                        type="text"
                        id="practicelocation"
                        className='input-line full-width'
                        placeholder=" Practice and Location "
                        {...register("practicelocation", { required: true })} />
                        {errors.practiceLocation &&  <p className='error-message'> *location is required </p>}


                      <input
                        type="text"
                        id="password"
                        className='input-line full-width'
                        placeholder=" Password "
                        {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/  })} />
                        {errors.password && <p className='error-message'> *Enter a valid password of at least one upper case
                        letter, one number and one special character </p> }
                       
                      </div>

                        <button  className='ghost-round full-width' type='submit' >Create Account </button>

                        <p>Have an account already?</p>

                      <button  className='ghost-round full-width' type='submit' > <Link to ="/login"> Log In </Link></button>

                 </div>  
            </div>
         </div>
       
      </form>
    );
  }

  export default SignupForm