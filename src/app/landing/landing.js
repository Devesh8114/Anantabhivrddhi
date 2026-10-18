"use client"; // Required for useState/useEffect

import React, { useState, useEffect } from 'react';
import styles from './landing.module.css';
import Link from 'next/link';
import Loader from '@/components/common/loader';
import MenuItems from '@/components/home/MenuItems';
import Footer from '@/components/home/footer';

const HeroSection = () => {
    const [loading, setLoading] = useState(true);
    const videoSrc = "/videos/home-page/banner-video.mp4";

    useEffect(() => {
        // Simulate a small delay for the loader or wait for mount
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;

    return (
        <>
            <MenuItems />
            <section className={styles.heroContainer}>
                {/* Video Background */}
                <video className={styles.heroVideo} autoPlay muted loop playsInline>
                    <source src={videoSrc} type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <div className={styles.heroOverlay} />

                <div className={styles.content}>
                    <p className={styles.tagline}>"Powering Bihar's Future with Clean, Affordable Solar Energy"</p>

                    <div className={styles.vendorBadge}>
                        <span className={styles.badgeIcon}>🏅</span>
                        MNRE Bihar Registered Vendor | GSTIN: 10CCFPK3447Q3ZD
                    </div>

                    <h1 className={styles.mainHeading}>
                        Discover Your Dream Property <br />
                        <span>with Anantabhivrddhi</span>
                    </h1>

                    <p className={styles.description}>
                        ASR Enterprises is Bihar's trusted solar rooftop installation company,
                        committed to delivering reliable and cost-effective renewable energy solutions.
                    </p>

                    <div className={styles.ctaGrid}>
                        {/* CTA: Moves to the main /home route */}
                        <Link href="/home" className={`${styles.btn} ${styles.btnConsult}`}>
                            Explore Our Services
                        </Link>

                        <a href="tel:9296389097" className={`${styles.btn} ${styles.btnCall}`}>
                            Call: 9296389097
                        </a>

                        <a
                            href="https://wa.me/919296389097"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.btn} ${styles.btnWhatsapp}`}
                        >
                            WhatsApp Us
                        </a>

                        <Link href="/contact" className={`${styles.btn} ${styles.btnService}`}>
                            Book Solar Service - ₹2999
                        </Link>
                    </div>

                    <div className={styles.trustBadges}>
                        <span className={styles.trustItem}>✓ 25+ Happy Customers</span>
                        <span className={styles.trustItem}>✓ MNRE Registered</span>
                        <span className={styles.trustItem}>✓ PM Surya Ghar Partner</span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default HeroSection;