import {useForm} from 'react-hook-form'
import '../Signup-page/form.css'

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); }
  

      return (
        <form onSubmit={handleSubmit (onSubmit)}>
          
        <div className="form-container">
          <div className='window-login'>
            <div className='overlay-login'></div>
              <div className='content'>
              <div className='welcome'> Welcome back!</div>

                  <div className='input-fields'>
      
     
                      <input
                        type="text"
                        id="email"
                        className='input-line full-width'
                        placeholder=" Email "
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.email && <p className='error-message'> *Enter a valid email </p>}
          

                      <input
                        type="text"
                        id="password"
                        className='input-line full-width'
                        placeholder=" Password "
                        {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/  })} />
                        {errors.password && <p className='error-message'> *Enter a valid password of at least one upper case
                        letter, one number and one special character </p> }
                       
                      </div>

                        <button  className='ghost-round-login full-width' type='submit' > Log In </button>
      

                 </div>  
            </div>
         </div>
       
      </form>
    );
  }

  export default Login