import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full drop-shadow-xl bg-slate-100">
        <nav className="flex items-center justify-around h-32 ">
            <a href="/" >
              <img src="https://res.cloudinary.com/dv8zwrzop/image/upload/v1685900315/EventWizard/evento_c.987980d92e74ea624578_thmmmv.png" 
              className="w-24 md:w-40 lg:w-52" alt="logo" />
            </a>
            <div className="flex gap-5 md:gap-20 lg:gap-40">
              <Link to="/" className='text-2xl md:text-3xl lg:text-3xl' preventScrollReset={true}>Home</Link>
              <Link to="/services" className='text-2xl md:text-3xl lg:text-3xl' preventScrollReset={true}>Services</Link>
              <Link to="/contact" className='text-2xl md:text-3xl lg:text-3xl' preventScrollReset={true}>Contact</Link>
            </div>
            
            {/* <div className="hidden md:block">asdad</div> */
            /*visible for screen greater than 768 px */}
            {/* <div className="block md:hidden">q2qwewq</div> */
            /*visible for screen less than 768 px */}
        </nav>
    </div>
  )
}

export default Navbar

// GiHamburgerMenu
