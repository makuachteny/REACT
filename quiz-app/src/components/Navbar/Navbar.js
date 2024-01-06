import { MenuItems } from "./MenuItems";
function Navbar( props ) {
    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>React</h1>

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