import React from 'react'

const Footer = () => {
    let footerStyle={
        position:"absolute",
        top:"100vh",
        width:"100%",   
    }
    return (
        <div className="bg-dark text-light py-3"style={
            footerStyle
        }>
        <p className="text-center">
        Made this todos list website with love by Ayush Gupta
        </p>
           
        </div>
    )
}

export default Footer;
