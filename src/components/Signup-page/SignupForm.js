import {useForm} from 'react-hook-form'
import '/Users/suue/Desktop/web-design2/src/components/Signup-page/form.css'

function SignupForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); }
  

      return (
        <form onSubmit={handleSubmit (onSubmit)}>
          <div className="form-items">

          <div className="title">Welcome</div>
          <div className="subtitle">Let's create your account!</div>

          <div className='input-field if1'>
            <input
              type="text"
              id="firstname"
              className='input'
              placeholder=" "
              {...register("firstName", { required: true })} />
              {errors.firstName && alert ('first name is required')}
              <div class="cut"></div>
              <label for ="firstname" className="placeholder">First name</label>
            </div>


            <div className='input-field if2'>
            <input
              type="text"
              id="lastname"
              className='input'
              placeholder=" "
              {...register("lastName", { required: true })} />
              {errors.lastName && alert ('last name is required')}
              <div class="cut"></div>
              <label for ="lasttname" className="placeholder">Last name</label>
            </div>

            <div className='input-field if3'>
            <input
              type="text"
              id="email"
              className='input'
              placeholder=" "
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
              {errors.email && alert ('email is required')}
              <div class="cut"></div>
              <label for ="email" className="placeholder">Email</label>
            </div>

            <div className='input-field if4'>
            <input
              type="text"
              id="practicelocation"
              className='input'
              placeholder=" "
              {...register("practicelocation", { required: true })} />
              {errors.practiceLocation &&  alert ('location is required')}
              <div class="cut"></div>
              <label for ="practiceLocation" className="placeholder">Practice</label>
            </div>

            <div className='input-field if5'>
            <input
              type="text"
              id="password"
              className='input'
              placeholder=" "
              {...register("password", { required: true, minLength: { value: 8, message: "Password must be at least 8 characters" } })} />
              {errors.password && alert ('password is required and must be valid')}
              <div class="cut"></div>
              <label for ="password" className="placeholder">Password</label>
            </div>

            <button type="text" class="submit">submit</button>
         
          </div>
        </form>
    );
  }

  export default SignupForm