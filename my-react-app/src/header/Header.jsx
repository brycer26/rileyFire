import React from 'react';

function Header () {
    return (
        <section className="header">

            <section className="header-top" style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                left: 0,
                backgroundColor: '#f8f8f8', 
                padding: '1rem',
                display: 'flex', 
                justifyContent: 'space-between', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
                alignItems: 'flex-end'
            }}>
                
                <section className="header-top-logo">
                <img src="/logo.png" alt="Logo" style={{ height: '200px', marginRight: '1rem' }} />
                </section>

                <section className="navBar" style={{display: "flex", paddingRight: "20px"}}>
                    <a href="#" style={{ margin: '0 1rem', fontSize: '1.2rem', textDecoration: 'none', color: '#333' }}>Home</a>
                    <a href="#" style={{ margin: '0 1rem', fontSize: '1.2rem', textDecoration: 'none', color: '#333' }}>About Us</a>
                    <a href="#" style={{ margin: '0 1rem', fontSize: '1.2rem', textDecoration: 'none', color: '#333' }}>Services</a>
                </section>

            </section>

        </section>
    );
}

export default Header;
