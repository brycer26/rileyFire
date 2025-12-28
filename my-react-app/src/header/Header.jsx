import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <section className="header" style={{ margin: 0, marginTop: '-2rem' }}>

            <section className="header-top" style={{
                position: 'relative',
                top: 0,
                width: '100vw',
                left: '50%',
                marginLeft: '-50vw',
                marginTop: 0,
                backgroundColor: '#f8f8f8', 
                padding: '1rem',
                display: 'flex', 
                justifyContent: 'space-between', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
                alignItems: 'flex-end'
            }}>
                
                <section className="header-top-logo">
                <img src="/logo.png" alt="Logo" style={{ height: '150px', marginRight: '1rem', paddingLeft: '5rem' }} />
                </section>

                <section className="navBar" style={{display: "flex", paddingRight: "20px", }}>
                    <Link to="/" style={{ margin: '0 1rem', fontSize: '1.2rem', color: '#333', textDecoration: 'none'  }}>Home</Link>
                    <Link to="/about" style={{ margin: '0 1rem', fontSize: '1.2rem', color: '#333', textDecoration: 'none' }}>About Us</Link>
                    <Link to="/services" style={{ margin: '0 1rem', fontSize: '1.2rem', color: '#333', textDecoration: 'none' }}>Services</Link>
                </section>

            </section>

        </section>
    );
}

export default Header;
