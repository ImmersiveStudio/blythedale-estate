import React from 'react'

function RegisterButton() {
  return (
   <>
   <a href="/en-guest-safety-notice" className="button-secondary guest-safetly w-inline-block">
    <div className="button-secondary-text pix-size">Register Today</div>
    <div className="button-secondary-hover guest-padding">
        <div className="button-secondary-hover pix-size">Investment Club</div>
    </div>
    <div className="secondary-button-arrow">
        <div className="arrow-line arrow-line-white">
            <div className="arrow-head arrow-head-white"></div>
        </div>
    </div>
   </a>
   </>
  )
}

export default RegisterButton