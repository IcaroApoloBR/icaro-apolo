import React, { useEffect, useState } from 'react'
import { ArrowSquareUp } from "@phosphor-icons/react";

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
                    <ArrowSquareUp size={40} color="#bf61ff" weight="duotone" />
                </button>
            )}
        </div>
    )
}

export default ScrollButton