import React, { useEffect, useState } from 'react'
import { ArrowFatLinesUp } from "@phosphor-icons/react";

const ScrollButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.pageYOffset > 800 ? setShowButton(true) : setShowButton(false);
        };

        window.addEventListener('scroll', handleScrollButtonVisibility);
        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility);
        };
    }, [])

    return (
        <div>
            {showButton && (
                <button className="fixed bottom-5 right-7 z-50 cursor-pointer p-4 hover:text-[#2f80ed] transition-colors" onClick={handleScrollToTop}>
                    <ArrowFatLinesUp size={40} />
                </button>
            )}
        </div>
    )
}

export default ScrollButton