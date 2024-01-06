import React from 'react';

class MenuItems extends React.Component {
    MenuItems = [
        {
            title: "Home",
            url: "#",
            cName: "nav-links"
        },
        {
            title: "Courses",
            url: "#",
            cName: "nav-links"
        },
        {
            title: "Contact Us",
            url: "#",
            cName: "nav-links"
        },
        {
            title: "Sign Up",
            url: "#",
            cName: "nav-links-mobile"
        }
    ];

    render() {
        return (
            <div>
                {this.MenuItems.map((item, index) => {
                    return (
                        <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                    )
                })}
            </div>
        )
    }
}

export default MenuItems;
