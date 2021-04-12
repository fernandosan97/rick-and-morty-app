import React from 'react';

const Hero = ({ handleSearch }) => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="hero__main">
                        <h3 className="subtitle">Do you know any character?</h3>
                        <input type="text" className="search__input" placeholder="Search here!" onChange={handleSearch} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;