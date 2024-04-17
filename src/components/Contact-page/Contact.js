import '/Users/suue/Desktop/web-design2/src/components/Contact-page/contact.css'


function Contact () {


    return (
<div>
      <h1 className='form-heading'>Get in touch with us!</h1>    
      <form className='contact-container'>  
        
      <input name="name" type="text" className="text-input" placeholder="Name" />   
      <input name="email" type="text" className="text-input" placeholder="Email" />
      <textarea name="text" className="text-input" placeholder="Message"></textarea>
      <button className='contact-button' type='submit'> submit </button> 
      </form>
 </div>
    );
 
  }

  export default Contact