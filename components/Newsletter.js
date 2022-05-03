import React from 'react'

function Newsletter() {
  return (
    <div className="subscribe">
                <div className="subscript-text">
                    <div className="heading-medium">Subscribe to our newsletter to stay up to date with exciting news and exclusive offers.</div>
                </div>
                <div className="spacer-extra-small show-on-tab"></div>
                <div className="newsletter w-clearfix w-form">
                    <form 
                    id="wf-form-Newsletter-subscription" 
                    name="wf-form-Newsletter-subscription" 
                    data-name="Newsletter subscription" 
                    method="get" 
                    aria-label="Newsletter subscription">
                    <input type="email" className="text-field w-input" maxLength="256" name="Email" data-name="Email" placeholder="Email address" id="Email-5" required="" />
                    <div className="small-print white">By signing up, you are agreeing to our Privacy Policy and Terms of Use. You can unsubscribe at any time.
                    </div>
                    <input type="submit" value="Subscribe" data-wait="Please wait..." className="submit-button w-button" />
                    </form>
                    <div className="sucess w-form-done"
                        tabIndex="-1" role="region" aria-label="Newsletter subscription success">
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="error w-form-fail" tabIndex="-1" role="region" aria-label="Newsletter subscription failure">
                        <div>Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
  )
}

export default Newsletter