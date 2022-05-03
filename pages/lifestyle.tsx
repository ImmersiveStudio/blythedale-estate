import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Info from '../components/Info'
import CTA from '../components/CTA'
import Reservations from '../components/Reservations'
import Newsletter from '../components/Newsletter'

function lifestyle() {
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
                    <div className="hero-image experiences"></div>
                </div>
                <div className="spacer-extra-extra-small"></div>
                <div>
                    <h1 data-w-id="c0358d8b-a06a-920f-16a4-080490940f74" className="heading-large text-white text-centered">Unforgettable experiences<br />tailored to you</h1>
                    <div className="spacer-extra-small"></div>
                </div>
                <a href="#anchor" className="scroll-prompt w-inline-block">
                    <img src="https://uploads-ssl.webflow.com/5e3835079dd94bdbf2fb4c42/5e419a105fa71041bfd8e1cc_scroll-down.svg" alt="" className="basic-image" />
                </a>
            </div>

            <div className="section flex-centre padding-both-sides">
                <div className="spacer-large"></div>
                <h2 className="heading-medium text-centered">All of our experiences are tailored to each individual guest – ensuring you’ll remember them for a lifetime. From skiing to wild truffle hunting, the surrounding landscape offers an array of activities for all four seasons.<br /></h2>
                <div className="spacer-extra-small"></div>
                <div className="button-wrapper">
                    <a href="/book-experience" className="button slide-in w-inline-block">
                        <div className="button-inner">
                            <div className="button-diamond">
                                <div className="button-diamond-inner">
                                    <div className="button-diamond-arrow-container">
                                        <div className="arrow-line">
                                            <div className="arrow-head"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="button-diamond-hovered">
                                    <div className="button-diamond-arrow-container">
                                        <div className="arrow-line arrow-line-white">
                                            <div className="arrow-head arrow-head-white"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-text">Book now</div>
                        </div>
                    </a>
                </div>
                <div className="spacer-small"></div>
            </div>

            <div className="sticky-nav-area overflow-hidden">
                <div className="experiences-spacer">
                    <div className="row-of-three w-dyn-list">
                        <div role="list" className="row-of-three-inner w-dyn-items w-row">
                            <div role="listitem" className="row-of-three-column w-dyn-item w-col w-col-4">
                                <a data-w-id="66bba622-8127-3987-a2d9-bc26b3ac5121" href="/experiences/dragon-stroll-hiking" className="link-block-tall layout2 w-inline-block">
                                    <div className="basic-image absolute-image experices-columns"></div>
                                    <div>
                                        <h3 className="heading-medium transition-text-colour">Dragon stroll hiking</h3>
                                        <div className="experience-small-text">Hiking</div>
                                    </div>
                                    <div className="button-diamond white hide-on-mobile">
                                        <div className="button-diamond-inner">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-diamond-hovered">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="row-of-three-column w-dyn-item w-col w-col-4">
                                <a data-w-id="66bba622-8127-3987-a2d9-bc26b3ac5121" href="/experiences/neigh-it-up-horseback-riding" className="link-block-tall layout2 w-inline-block">
                                    <div
                                        className="basic-image absolute-image experices-columns"></div>
                                    <div>
                                        <h3 className="heading-medium transition-text-colour">Neigh It Up</h3>
                                        <div className="experience-small-text">Horseback Riding</div>
                                    </div>
                                    <div className="button-diamond white hide-on-mobile">
                                        <div className="button-diamond-inner">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-diamond-hovered">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="row-of-three-column w-dyn-item w-col w-col-4">
                                <a data-w-id="66bba622-8127-3987-a2d9-bc26b3ac5121" href="/experiences/dragon-stroll-hiking" className="link-block-tall layout2 w-inline-block">
                                    <div className="basic-image absolute-image experices-columns"></div>
                                    <div>
                                        <h3 className="heading-medium transition-text-colour">Dragon stroll hiking</h3>
                                        <div className="experience-small-text">Hiking</div>
                                    </div>
                                    <div className="button-diamond white hide-on-mobile">
                                        <div className="button-diamond-inner">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-diamond-hovered">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="row-of-three-column w-dyn-item w-col w-col-4">
                                <a data-w-id="66bba622-8127-3987-a2d9-bc26b3ac5121" href="/experiences/daring-deos-canyoning" className="link-block-tall layout2 w-inline-block">
                                    <div
                                        className="basic-image absolute-image experices-columns"></div>
                                    <div>
                                        <h3 className="heading-medium transition-text-colour">Daring ‘Deos’</h3>
                                        <div className="experience-small-text">Canyoning</div>
                                    </div>
                                    <div className="button-diamond white hide-on-mobile">
                                        <div className="button-diamond-inner">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-diamond-hovered">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="row-of-three-column w-dyn-item w-col w-col-4">
                                <a data-w-id="66bba622-8127-3987-a2d9-bc26b3ac5121" href="/experiences/natural-high-e-mountain-bike-to-the-hidden-pond" className="link-block-tall layout2 w-inline-block">
                                    <div className="basic-image absolute-image experices-columns"></div>
                                    <div>
                                        <h3 className="heading-medium transition-text-colour">Natural High</h3>
                                        <div className="experience-small-text">E-mountain bike to the hidden pond</div>
                                    </div>
                                    <div className="button-diamond white hide-on-mobile">
                                        <div className="button-diamond-inner">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-diamond-hovered">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="row-of-three-column w-dyn-item w-col w-col-4">
                                <a data-w-id="66bba622-8127-3987-a2d9-bc26b3ac5121" href="/experiences/valia-calda-off-road-jeep" className="link-block-tall layout2 w-inline-block">
                                    <div className="basic-image absolute-image experices-columns"></div>
                                    <div>
                                        <h3 className="heading-medium transition-text-colour">Valia Calda</h3>
                                        <div className="experience-small-text">Off-road jeep</div>
                                    </div>
                                    <div className="button-diamond white hide-on-mobile">
                                        <div className="button-diamond-inner">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-diamond-hovered">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="row-of-three-column w-dyn-item w-col w-col-4">
                                <a data-w-id="66bba622-8127-3987-a2d9-bc26b3ac5121" href="/experiences/rare-but-true-wild-truffle-hunting" className="link-block-tall layout2 w-inline-block">
                                    <div
                                        className="basic-image absolute-image experices-columns"></div>
                                    <div>
                                        <h3 className="heading-medium transition-text-colour">Rare But True</h3>
                                        <div className="experience-small-text">Wild Truffle Hunting</div>
                                    </div>
                                    <div className="button-diamond white hide-on-mobile">
                                        <div className="button-diamond-inner">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-diamond-hovered">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="row-of-three-column w-dyn-item w-col w-col-4">
                                <a data-w-id="66bba622-8127-3987-a2d9-bc26b3ac5121" href="/experiences/altitude-wilderness-verliga" className="link-block-tall layout2 w-inline-block">
                                    <div
                                        className="basic-image absolute-image experices-columns"></div>
                                    <div>
                                        <h3 className="heading-medium transition-text-colour">Altitude Wilderness</h3>
                                        <div className="experience-small-text">Verliga</div>
                                    </div>
                                    <div className="button-diamond white hide-on-mobile">
                                        <div className="button-diamond-inner">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-diamond-hovered">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="row-of-three-column w-dyn-item w-col w-col-4">
                                <a data-w-id="66bba622-8127-3987-a2d9-bc26b3ac5121" href="/experiences/i-love-you-snow-much-cross-country-skiing" className="link-block-tall layout2 w-inline-block">
                                    <div className="basic-image absolute-image experices-columns"></div>
                                    <div>
                                        <h3 className="heading-medium transition-text-colour">I love you snow much</h3>
                                        <div className="experience-small-text">Cross country skiing</div>
                                    </div>
                                    <div className="button-diamond white hide-on-mobile">
                                        <div className="button-diamond-inner">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-diamond-hovered">
                                            <div className="button-diamond-arrow-container">
                                                <div className="arrow-line arrow-line-white">
                                                    <div className="arrow-head arrow-head-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer-medium"></div>
                <div id="experience-anchor" className="experience-anchor"></div>
            </div>

            <div className="section flex-centre cta-section-quote">
                <div className="spacer-medium"></div>
                <img src="https://uploads-ssl.webflow.com/5e3835079dd94bdbf2fb4c42/5e3af8cccfd30a488333732f_tree.svg" alt="" className="tree-icon slide-in" />
                <div className="spacer-extra-small"></div>
                <h2 className="heading-medium text-centered padding-both-sides slide-in is--reg-font">
                    This one thousand hector property development offers lifestyle living with 3.2km of unspoiled beaches, tranquil forests and a pristine river frontage.
                </h2>
                <div className="spacer-extra-small"></div>
                <p className="slide-in">Blythedale Coastal Estate</p>
                <div className="spacer-large"></div>
            </div>

            <div className="section flex-centre half-and-half-horizontal">
                <div className="dining-content-wrapper">
                    <div className="spacer-small hide-on-landscape"></div>
                    <div className="signpost-wrapper">
                        <div className="singpost-divider"></div>
                        <p className="detail">Dining</p>
                    </div>
                    <div className="spacer-extra-extra-small"></div>
                    <h2 className="heading-large text-left-mobile">A truly memorable dining experience</h2>
                    <div className="spacer-extra-extra-small"></div>
                    <p className="slide-in">Fall in love with food and drink in a whole new way when you add dining to your experience.</p>
                    <div className="spacer-small"></div>
                </div>
                <img src="https://uploads-ssl.webflow.com/5e3835079dd94bdbf2fb4c42/6230af2b3193fa419d723914_food-experience.jpg"
                    loading="lazy" alt="" className="half-and-half-img" />
            </div>

            <div className="section flex-centre cta-section-book-now">
                <div className="spacer-medium"></div>
                <div className="detail">Book the perfect experience</div>
                <div className="spacer-extra-extra-small"></div>
                <div className="cta-divider"></div>
                <div className="spacer-extra-small"></div>
                <h2 className="heading-large text-centered padding-both-sides-cta">There&apos;s an experience<br />for everyone</h2>
                <div className="spacer-extra-small"></div>
                <div className="div-block">
                    <p className="text-centered slide-in">Whatever you love, there&apos;s an experience with some magic to match. Get in touch to discover more about our range of experiences.</p>
                    <div className="spacer-extra-small"></div>
                </div>
                <div className="button-wrapper">
                    <a href="/book-experience" className="button slide-in w-inline-block">
                        <div className="button-inner text-white">
                            <div className="button-diamond white">
                                <div className="button-diamond-inner">
                                    <div className="button-diamond-arrow-container">
                                        <div className="arrow-line arrow-line-white">
                                            <div className="arrow-head arrow-head-white"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="button-diamond-hovered">
                                    <div className="button-diamond-arrow-container">
                                        <div className="arrow-line arrow-line-white">
                                            <div className="arrow-head arrow-head-white"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-text white">Book now</div>
                        </div>
                    </a>
                </div>
                <div className="spacer-large"></div>
            </div>

            <CTA />
            <Reservations />
            <Newsletter />
            <Footer />
        </>
    )
}

export default lifestyle