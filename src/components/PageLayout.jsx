'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PageLayout({ children }) {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
}
