import React, { Component } from 'react'
import { Menuitems } from './MenuItems'
import './Navbar.css'
import './css/fontawesome.min.css'





class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            clicked: false,
            signup: false,
            cancel: false
        }
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })

    }


    clickSignup =() =>{
        this.setState({
            signup: true

        })
    }

  
    render() {
        return (
         <div>
             <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <strong>Kleenr</strong>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} >
                

                    {Menuitems.map((item, index) => {
                        return (
                            <li key={index}><a className={item.cName} href={item.url}>
                                {item.title}</a></li>
                        )
                    })}
                    

                    <div>
                       {/* <button className='nav-links-mobile' onClick = {this.clickSignup}>Sign up</button>*/}

                    

                        
                     
        
                    </div>

                </ul>



            </nav>
        
        

            </div>

  
        )
    }

}

export default Navbar