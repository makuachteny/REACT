import { MenuItems } from "./MenuItems";
function Navbar() {
    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>React<i className="fab fa-react"></i>"</h1>

            <div className='menu-icon'>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}><a className={item.cName} href={item.url}>{ item.title}</a></li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    
    );
}

export default Navbar;