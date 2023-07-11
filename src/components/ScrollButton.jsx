import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';

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
                <button className="fixed bottom-5 right-7 z-50 cursor-pointer p-4 hover:animate-bounce" onClick={handleScrollToTop}>
                    <Icon className="border border-[#bf61ff] rounded-full" icon="mdi:arrow-up-bold-circle" color="#bf61ff" width="40" height="40" />
                </button>
            )}
        </div>
    )
}

export default ScrollButton