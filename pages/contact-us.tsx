import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Info from '../components/Info'
import CTA from '../components/CTA'
import Reservations from '../components/Reservations'
import Newsletter from '../components/Newsletter'

function contact() {
    return (
        <div>
            <Info />
            <Header />
            <div className="header-strip"></div>
            <div className="contact-section">
                <div className="contact-details">
                    <h1 className="heading-large">Contact us</h1>
                    <div className="spacer-extra-small"></div>
                    <div className="bold">Phone</div>
                    <div>
                        <a href="tel:" className="text-link">
                            XXX XXX XXXX
                        </a>
                    </div>
                    <div className="spacer-extra-extra-small"></div>
                    <div className="bold">Email</div>
                    <div>
                        <a href="mailto:info@info@blythedale.co.za" className="text-link">
                            info@blythedale.co.za
                        </a>
                    </div>
                    <div className="spacer-extra-extra-small"></div>
                    <div className="spacer-extra-extra-small"></div>
                    <div>
                        <a href="" target="_blank" className="text-link">
                            Blythedale Coastal Estate<br />
                            XXX XXX <br />
                            XXX XXX <br />
                            East Coast, Durban
                        </a>
                    </div>
                    <div className="spacer-small"></div>
                </div>
                <div className="contact-form">
                    <div className="spacer-extra-small"></div>
                    <div className="spacer-extra-small"></div>
                    <div className="form-block w-clearfix w-form">
                        <form data-name="Contact form" method="get" className="form" aria-label="Contact form">
                            <input type="text" className="field w-input" name="name" data-name="Name" placeholder="Full name" id="name" />
                            <input type="email" className="field w-input" name="Email" data-name="Email" placeholder="Email address" id="Email-4" />
                            <input type="tel" className="field w-input" name="Phone" data-name="Phone" placeholder="Phone number" id="Phone" />
                            <textarea placeholder="Message" id="Message" name="Message" data-name="Message" className="field tall w-input">
                            </textarea>
                            <input type="submit" value="Submit" data-wait="Please wait..." className="submit-button-contact-page w-button" />
                            <div className="spacer-extra-extra-small"></div>
                            <label className="w-checkbox checkbox-filed">
                                {/* <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox invert"></div> */}
                                <input type="checkbox" id="Agree to privacy policy" name="Agree-to-privacy-policy" data-name="Agree to privacy policy" />
                                <span className="small-print w-form-label">
                                    I agree to the Blythedale Coastal Estate
                                    <a href="/privacy-policy" target="_blank" className="text-link">
                                        Privacy Policy
                                    </a>.
                                </span>
                            </label>
                        </form>
                    </div>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default contact