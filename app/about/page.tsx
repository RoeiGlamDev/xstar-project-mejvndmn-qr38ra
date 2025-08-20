import React from 'react';
import styles from './About.module.css'; // Assuming you have a CSS module for styling

const AboutPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>About CleanSSR</h1>
                <p>Your trusted cleaning partner.</p>
            </header>
            <section className={styles.content}>
                <h2>Who We Are</h2>
                <p>At CleanSSR, we provide top-notch cleaning services tailored to meet your needs. Our team of professionals is dedicated to delivering exceptional results with a focus on customer satisfaction.</p>
            </section>
            <section className={styles.reviews}>
                <h2>What Our Clients Say</h2>
                <div className={styles.review}>
                    <p>"CleanSSR transformed my home! Highly recommend!" - Sarah J.</p>
                </div>
                <div className={styles.review}>
                    <p>"Professional and thorough. Will definitely use again!" - Mark T.</p>
                </div>
                <div className={styles.review}>
                    <p>"Best cleaning service I've ever used!" - Emily R.</p>
                </div>
            </section>
            <footer className={styles.footer}>
                <p>&copy; 2023 CleanSSR. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;