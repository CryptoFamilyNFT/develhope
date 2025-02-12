//import React from 'react';

const MouseClicker = () => {
    const handleButtonClick = (event) => {
        console.log(event.target.name);
    };

    const handleImageClick = (event) => {
        event.stopPropagation();
        console.log(event.target.src);
    };

    return (
        <div>
            <button name="one" onClick={handleButtonClick}>
                Button One
            </button>
            <button name="two" onClick={handleButtonClick}>
                <img 
                    src="https://www.nintendo.com/eu/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg"
                    style={{width: 100, height: 50}} 
                    alt="Button Two Image" 
                    onClick={handleImageClick} 
                />
            </button>
        </div>
    );
};

export default MouseClicker;