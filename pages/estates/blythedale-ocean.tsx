import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Info from '../../components/Info'
import CTA2 from '../../components/CTA2'
import Reservations from '../../components/Reservations'
import Newsletter from '../../components/Newsletter'

function blythedaleOcean() {
    return (
        <>
            <Info />
            <Header />

            <div className="hero-section">
                <div className="hero-section-image">
                    <div className="hero-image blythedale-ocean"></div>
                </div>
                <div className="spacer-extra-extra-small"></div>
                <h1 className="heading-large text-white text-centered">
                    Blythedale Ocean
                </h1>
                <a href="#anchor" className="scroll-prompt w-inline-block">
                    <img src="https://uploads-ssl.webflow.com/5e3835079dd94bdbf2fb4c42/5e419a105fa71041bfd8e1cc_scroll-down.svg" alt="" className="basic-image" />
                </a>
            </div>

            <div className="section flex-centre padding-both-sides">
                <div className="spacer-large"></div>
                <h2 className="heading-medium-small text-centered">Experience modern local dishes and breathtaking views at our signature restaurant, Metsovo 1350m. Named after its altitude, Metsovo 1350m is a stand-alone attraction for both hotel guests and external visitors. The menu is carefully designed to reflect
                    the region’s great gastronomical tradition and is based on fresh, local ingredients with a modern yet modest flair. The wine cellar is stocked with all the prominent local wines of the Averoff Winery, a vast selection of Greek and international
                    wines and many specialised beverages.</h2>
                <div className="spacer-extra-small"></div>
                <div className="fact-and-notes text-centered no-side-padding"></div>
                <div className="spacer-small"></div>
                <a href="/" target="_blank" className="button w-inline-block">
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
                        <div className="button-text">Download &nbsp;menu</div>
                    </div>
                </a>
                <div className="spacer-large"></div>
            </div>

            <div className="large-image-slider normal-padding-both-sides">
                <div className="large-image-slider-black-bg w-dyn-list">
                    <div role="list" className="large-image-slider-inner w-dyn-items flickity-enabled is-draggable">
                        <div className="flickity-viewport">
                            <div className="flickity-slider">
                                <div role="listitem" className="large-image-slide w-dyn-item w-dyn-repeater-item is-selected left300">
                                    <div className="large-slider-image-outer">
                                        <div className="large-slider-image anchor-from-bottom scaled-up"></div>
                                    </div>
                                    <div className="large-slide-caption less-side-padding">
                                        <div className="large-slide-caption-image">
                                            <div className="large-slider-rule"></div>
                                            <h3 className="heading-medium text-white hide-after-nine">0</h3>
                                            <h3 className="heading-medium text-white gastronomy-number">1</h3>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="large-image-slide w-dyn-item w-dyn-repeater-item left100" aria-hidden="true">
                                    <div className="large-slider-image-outer" >
                                        <div className="large-slider-image anchor-from-bottom scaled-up"></div>
                                    </div>
                                    <div className="large-slide-caption less-side-padding">
                                        <div className="large-slide-caption-image">
                                            <div className="large-slider-rule"></div>
                                            <h3 className="heading-medium text-white hide-after-nine">0</h3>
                                            <h3 className="heading-medium text-white gastronomy-number">2</h3>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="large-image-slide w-dyn-item w-dyn-repeater-item left200" aria-hidden="true">
                                    <div className="large-slider-image-outer">
                                        <div className="large-slider-image anchor-from-bottom scaled-up"></div>
                                    </div>
                                    <div className="large-slide-caption less-side-padding">
                                        <div className="large-slide-caption-image">
                                            <div className="large-slider-rule"></div>
                                            <h3 className="heading-medium text-white hide-after-nine">0</h3>
                                            <h3 className="heading-medium text-white gastronomy-number">3</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer-large"></div>
            </div>

            <div className="gold-wrapper">
                <div className="section flex-centre padding-both-sides">
                    <div className="spacer-large"></div>
                    <h2 className="heading-medium text-centered">More gastronomy</h2>
                    <div className="spacer-extra-small"></div>
                    <div className="signposting-rule"></div>
                    <div className="spacer-medium"></div>
                </div>
                <div className="row-of-three w-dyn-list">
                    <div role="list" className="row-of-three-inner w-dyn-items w-row">
                        <div role="listitem" className="row-of-three-column w-dyn-item w-col w-col-6">
                            <a data-w-id="6e6564aa-9551-1a02-abb0-08702aba23e6" href="/gastronomy/the-lobby" className="link-block-tall layout2 shorter w-inline-block">
                                <div
                                    className="basic-image absolute-image cms-absolute-image"></div>
                                <div className="overlay-tint"></div>
                                <h3 className="heading-medium transition-text-colour padding-right-medium">The Lobby</h3>
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
                        <div role="listitem" className="row-of-three-column w-dyn-item w-col w-col-6">
                            <a href="/gastronomy/the-pines" className="link-block-tall layout2 shorter w-inline-block">
                                <div className="basic-image absolute-image cms-absolute-image"></div>
                                <div className="overlay-tint"></div>
                                <h3 className="heading-medium transition-text-colour padding-right-medium">The Pines</h3>
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
                <div className="spacer-medium"></div>
            </div>

            <CTA2 />
            <Reservations />
            <Newsletter />
            <Footer />
        </>
    )
}

export default blythedaleOcean