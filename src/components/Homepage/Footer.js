import '../Homepage/footer.css'
import { FaFacebook , FaInstagram , FaTwitter , FaGithub } from "react-icons/fa";



function Footer () {
    const year = new Date().getFullYear();

    return (
        
        <footer class="footer-container">

			<div class="footer-right">

               <ul>
                <li> <FaFacebook/> </li>
                <li> <FaInstagram/> </li>
                <li> <FaTwitter/> </li>
                <li> <FaGithub/> </li> 
                </ul>
			</div>

          <div className='copyright'> {`Copyright © FindMyPhysio ${year}`}</div> 

		</footer>
    )

}

export default Footer