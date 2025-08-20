import React from 'react';
import './layout.css'; // Importing CSS for layout styles

const Layout: React.FC = ({ children }) => {
    return (
        <div className="layout">
            <header className="header">
                <h1 className="logo">CleanSSR</h1>
                <nav className="nav">
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                <p>&copy; 2023 CleanSSR. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;