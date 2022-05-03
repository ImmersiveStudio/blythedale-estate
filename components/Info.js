import React , { useState, useEffect } from 'react';

function Info() {

    const [ active, setActive ] = useState(false);

    const navbarActive = () => {
      if (window.scrollY >= 100) {
        setActive(true);
      }
      else {
        setActive(false);
      }
    }
  
    useEffect(() => {
    window.addEventListener('scroll', navbarActive);
    });

  return (
    <div className={ active ? 'info active-info': 'info'}>
        <div target="_blank" className="top-bar w-inline-block">
            <div className="top-bar-columns w-row">
                <a href="#" className="link-style">
                    <div className="w-col w-col-4 w-col-small-4">
                        <div>Booking Request</div>
                    </div>
                </a>
                <a href="#" className="link-style">
                    <div className="top-bar-middle-column w-col w-col-4 w-col-small-4">
                        <div>Exclusive offers</div>
                    </div>
                </a>
                <a href="#" className="link-style">
                    <div className="w-col w-col-4 w-col-small-4">
                        <div>Reserve your spot</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Info