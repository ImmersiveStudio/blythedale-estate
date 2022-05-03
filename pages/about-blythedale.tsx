import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Info from '../components/Info'
import CTA from '../components/CTA'
import Reservations from '../components/Reservations'
import Newsletter from '../components/Newsletter'

function aboutBlythedale() {
    return (
        <>
            <Head>
                <title>Blythedale Coastal Estate</title>
                <meta property="og:title" content="Blythedale Coastal Estate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Info />
            <Header />

            <div className="hero-section">
                <div className="hero-section-image">
                    <div className="hero-image our-story-page"></div>
                </div>
                <div className="spacer-extra-extra-small"></div>
                <h1 className="heading-large text-white text-centered">
                    Breath-Taking Natural Surroundings
                </h1>
                <a href="#anchor" className="scroll-prompt w-inline-block">
                    <img src="https://uploads-ssl.webflow.com/5e3835079dd94bdbf2fb4c42/5e419a105fa71041bfd8e1cc_scroll-down.svg" alt="" className="basic-image" />
                </a>
            </div>

            <div className="section flex-centre padding-both-sides">
                <div className="spacer-large"></div>
                <h2 className="heading-medium text-centered">
                    Life, work and play, all merge seamlessly with each other as the facilities of the resort cater for a wide and eclectic range of tastes. Whether you enjoy bird watching, if you’re a golf enthusiast or simply enjoy relaxing on the beach and playing sport, you will find something to suit your taste here.<br />
                </h2>
                <div className="spacer-large"></div>
            </div>

            <div className="sticky-nav-area">
                <div className="sub-nav centre-on-tab"><a href="#1" className="sub-nav-link w--current">Blythedale Coastal Estate</a>
                    <div className="seperator"></div><a href="#2" className="sub-nav-link">A move towards KZN</a>
                    <div className="seperator"></div><a href="#3" className="sub-nav-link">Providing balance</a>
                    <div className="seperator"></div><a href="#4" className="sub-nav-link padding-right-on-mob">Investment oppurtunities</a></div>
                <div className="anchor-area">
                    <div id="1" className="anchor-null"></div>
                    <div className="section">
                        <div className="spacer-large"></div>
                        <div className="columns flex-stretch w-row">
                            <div className="column flex-vertical w-col w-col-6 w-col-small-6">
                                <div data-w-id="3e3bf811-1675-a8ec-b371-5e71fd898738" className="heading-container full-wide side-padding">
                                    <div className="signposting slide-in">
                                        <div data-w-id="3e3bf811-1675-a8ec-b371-5e71fd89873a" className="signposting-rule"></div>
                                        <div className="detail">The Estate</div>
                                        <div className="signposting-rule show-on-mobile"></div>
                                    </div>
                                    <div className="spacer-extra-small"></div>
                                    <h2 className="heading-medium slide-in">International architectural styles with a contemporary twist – set on the fringe of the north coast </h2>
                                    <div className="spacer-extra-small"></div>
                                    <p className="slide-in">
                                        Blythedale is located about an hour from the Durban CBD, just 10 minutes north of Ballito and a mere 25 minute drive from King Shaka International Airport. The estate is located roughly halfway between Durban and Richards Bay, two of the biggest trading hubs in Southern Africa.

                                        Partnering with the Zwelebantu Dube Community, Blythedale Coastal Estate is also a blueprint for inclusionary housing. There is a rhythm and beat for everyone, with five communities, each with their own distinctive character and aesthetic.
                                    </p>
                                    <div className="spacer-medium show-on-mob"></div>
                                </div>
                            </div>
                            <div className="column flex-vertical set-height-on-mob w-col w-col-6 w-col-small-6">
                                <div className="basic-image-outer">
                                    <div className="paralax-wrapper">
                                        <div className="basic-image the-hotel"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="anchor-area">
                    <div className="section">
                        <div className="spacer-large"></div>
                        <div className="columns flex-stretch flip w-row">
                            <div className="column flex-vertical w-col w-col-6">
                                <div className="heading-container full-wide side-padding-left">
                                    <div className="signposting slide-in">
                                        <div className="signposting-rule"></div>
                                        <div className="detail">The Shift</div>
                                        <div className="signposting-rule show-on-mobile"></div>
                                    </div>
                                    <div className="spacer-extra-small"></div>
                                    <h2 className="heading-medium slide-in">A move towards KZN’s North Coast</h2>
                                    <div className="spacer-extra-small"></div>
                                    <p className="slide-in">
                                        Over the last few years, there has been a gradual migration of people to the North Coast of KZN, due in particular to the fact that it is a property development hot-spot and that it is well situated and close in proximity to Ballito, national highways and the King Shaka International Airport.
                                        More than just another property development, Blythedale Coastal Estate offers a sense of community, delicately balanced with the privacy that you would require from a holistic, all-encompassing resort estate. More so, there is a harmony of understated elegance that goes hand in hand with the breath-taking natural surroundings within this North Coast getaway.
                                    </p>
                                    <div className="spacer-medium show-on-mob"></div>
                                </div>
                            </div>
                            <div className="column flex-vertical set-height-on-mob w-col w-col-6">
                                <div className="basic-image-outer">
                                    <div className="paralax-wrapper">
                                        <div className="basic-image the-people"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="spacer-large"></div>
                    </div>
                    <div className="breaker-image">
                        <div className="breaker-image-inner our-story-page"></div>
                    </div>
                    <div id="2" className="anchor-null"></div>
                </div>
                <div className="anchor-area">
                    <div className="section">
                        <div className="spacer-large"></div>
                        <div className="columns flex-stretch w-row">
                            <div className="column flex-vertical w-col w-col-6">
                                <div className="spacer-medium hide-on-mob"></div>
                                <div className="heading-container full-wide side-padding">
                                    <div className="signposting slide-in">
                                        <div className="signposting-rule"></div>
                                        <div className="detail">The Lifestyle</div>
                                        <div className="signposting-rule show-on-mobile"></div>
                                    </div>
                                    <div className="spacer-extra-small"></div>
                                    <h2 className="heading-medium slide-in">Providing the balance</h2>
                                    <div className="spacer-extra-small"></div>
                                    <p className="slide-in">Life, work and play, all merge seamlessly with each other as the facilities of the resort cater for a wide and eclectic range of tastes. Whether you enjoy bird watching, if you’re a golf enthusiast or simply enjoy relaxing on the beach and playing sport, you will find something to suit your taste here.

                                        Tastefully situated, Blythedale Coastal Estate is an entity that truly encompasses the balance between tranquillity and the convenience of mod-cons such like retail outlets. Situated only 20 minutes from Ballito and 60 minutes from Richards Bay, its lush sub-tropical vegetation and 3km of unspoilt beach frontage, mean that there is an even wider natural offering for those whose interests lean that way.

                                        The Blythedale Coastal Estate doesn’t just offer an array of amenities. It provides you with a unique opportunity to make a lifestyle statement by expressing your personality and ethos through smart and elegant property that is on the forefront of property development. </p>
                                </div>
                                <div className="spacer-medium"></div>
                            </div>
                            <div className="column flex-vertical set-height-on-mob w-col w-col-6">
                                <div className="basic-image-outer">
                                    <div className="paralax-wrapper">
                                        <div className="basic-image the-mark"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="3" className="anchor-null"></div>
                </div>
                <div className="anchor-area">
                    <div className="section">
                        <div className="spacer-large"></div>
                        <div className="columns flex-stretch flip w-row">
                            <div className="column flex-vertical w-col w-col-6">
                                <div className="spacer-medium hide-on-mob"></div>
                                <div className="heading-container full-wide side-padding-left">
                                    <div className="signposting slide-in">
                                        <div className="signposting-rule"></div>
                                        <div className="detail">The endeavor</div>
                                        <div className="signposting-rule show-on-mobile"></div>
                                    </div>
                                    <div className="spacer-extra-small"></div>
                                    <h2 className="heading-medium slide-in">Investment Opportunities within Blythedale Coastal Estate:</h2>
                                    <div className="spacer-extra-small"></div>
                                    <div className="slide-in">
                                        <ul>
                                            <li>Retirement Villages</li>
                                            <li>Sectional Title Homes</li>
                                            <li>Fractional Ownership</li>
                                            <li>Timeshare Units</li>
                                            <li>Prime Residential Freehold</li>
                                            <li>Apartments</li>
                                            <li>Affordable Housing</li>
                                            <li>World Class Water & Theme Park</li>
                                            <li>Various Hotel Offerings</li>
                                            <li>Professional Film Studios</li>
                                        </ul>
                                        <p>Whether you are looking for a timeshare unit, leisurely pursuits through our World Class Water and Theme Park or for an upmarket and place to call home you will find it here at the Blythedale Coastal Estate.</p>
                                    </div>
                                </div>
                                <div className="spacer-medium"></div>
                            </div>
                            <div className="column flex-vertical set-height-on-mob w-col w-col-6">
                                <div className="basic-image-outer">
                                    <div className="paralax-wrapper">
                                        <div className="basic-image the-endeavor"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="spacer-large"></div>
                    </div>
                    <div id="4" className="anchor-null"></div>
                </div>
            </div>

            <CTA />
            <Reservations />
            <Newsletter />
            <Footer />
        </>
    )
}

export default aboutBlythedale