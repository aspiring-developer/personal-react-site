import React from 'react';
import SocialIcons from './SocialIcons';

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <>
<footer>
<SocialIcons />
          <div className="text-center bg-dark text-info py-4 px-3">
          <p className="py-4 px-4"> &copy;{currentYear} &bull; Sharma Web Development & Graphic Design &bull; Cary, North Carolina &bull; 919-793-4494 </p>
        </div>
      </footer> 
    </>
  )
}
export default Footer;