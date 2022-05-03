import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Info from '../components/Info'
import CTA2 from '../components/CTA2'
import Reservations from '../components/Reservations'
import Newsletter from '../components/Newsletter'
import Map from '../components/Map'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import RegisterButton from '../components/RegisterButton'
import Aos from 'aos'
import "aos/dist/aos.css";

export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in',
            delay: 100,
        });
    }, [])

    return (
        <div>
            <Head>
                <title>Blythedale Coastal Estate</title>
                <meta property="og:title" content="Blythedale Coastal Estate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Info />
            <Header />

            {/* HERO SECTION */}
            <div data-scroll-section className="hero-section">
                <div className="hero-section-image">
                    {/* <div className="hero-image facilities-page">
                    </div> */}
                    <div className="hero-video w-background-video w-background-video-atom">
                        <video autoPlay muted loop>
                            <source src="/remove/videovideo.mp4" />
                        </video>
                    </div>
                </div>

                <div data-scroll data-scroll-speed="1" className="heading-large text-white text-centered side-padding-on-mob z-index uppercase">
                    Take Living <br />
                    To Another Level
                </div>
                <div className="spacer-small">
                </div>

                {/* <div className="half-width">
                    <a href="" target="_blank" className="button-secondary two w-inline-block">
                        <div data-scroll data-scroll-speed="5" className="button-secondary-text uppercase">Register your spot</div>
                        <div className="button-secondary-hover">
                            <div className="button-secondary-text-hover">

                            </div>
                        </div>
                        <div className="secondary-button-arrow">
                            <div className="arrow-line arrow-line-white"><div className="arrow-head arrow-head-white"></div></div>
                        </div>
                    </a>
                </div> */}
                <RegisterButton />
            </div>
            {/* HERO SECTION END */}

            {/* INTRO SECTION */}
            <div className="section flex-centre">
                <div className="spacer-large"></div>
                <h2 data-aos="fade-up" className="heading-medium text-centered padding-both-sides no-padding-on-mobile">
                    Just 45 minutes away from the hustle and bustle of the Durban CBD lies a hidden treasure of a resort, one that is redefining the landscape of resort-living as we know it.
                </h2>
                <div className="spacer-extra-small"></div>
                <div className="spacer-extra-extra-small"></div>
                <div className="w-layout-grid award_logos-grid">
                    <img src="/images/estate-logos/blythedale-equestrian-logo-small.webp" loading="lazy" alt="" className="awards-new badge" />
                    <img src="/images/estate-logos/blythedale-forest-logo-small.webp" loading="lazy" alt="" className="awards-new badge" />
                    <img src="/images/estate-logos/blythedale-golf-logo-small.webp" loading="lazy" alt="" className="awards-new badge" />
                    <img src="/images/estate-logos/blythedale-hills-logo-small.webp" loading="lazy" alt="" className="awards-new badge" />
                    <img src="/images/estate-logos/blythedale-ocean-logo-small.webp" loading="lazy" alt="" className="awards-new badge" />
                </div>
            </div>
            {/* INTRO SECTION END */}

            {/* ABOUT SECTION */}
            <div className="section">
                <div className="spacer-large"></div>
                <div className="columns flex-stretch w-row">
                    <div className="column w-col w-col-6 w-col-small-small-stack">
                        <div className="heading-container full-wide">
                            <div data-aos="fade-right">
                                <div className="signposting slide-in" >
                                    <div className="signposting-rule"></div>
                                    <div className="detail">Take living to another level</div>
                                    <div className="signposting-rule show-on-mobile"></div>
                                </div>
                                <div className="spacer-extra-small"></div>
                                <h2 className="heading-large slide-in">
                                    Experience <br />serenity inspired <br />by the land
                                </h2>
                            </div>
                            <div className="spacer-extra-small"></div>
                            <div data-aos="fade-up" className="padding-right-medium slide-in no-padding-and-centre-mob">
                                Life, work and play, all merge seamlessly with each other as the facilities of the resort cater for a wide and eclectic range of tastes.
                                Whether you enjoy bird watching, if you’re a golf enthusiast or simply enjoy relaxing on the beach and playing sport, you will find something to suit your taste here.
                            </div>
                            <div className="spacer-extra-small"></div>
                            <Link href="/about-blythedale">
                                <a className="button slide-in w-inline-block">
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
                                        <div className="button-text">About Blythedale</div>
                                    </div>
                                </a>
                            </Link>
                        </div>

                    </div>
                    <div className="column flex-vertical w-col w-col-6 w-col-small-small-stack">
                        <div className="location-image-paralax"></div>
                        <div className="basic-image home-setting full-wide-on-mobile"></div>
                        <div className="basic-image-outer"></div>
                    </div>
                </div>
                <div className="spacer-medium hide-on-mob"></div>
            </div>
            {/* ABOUT SECTION END */}

            {/* SLIDER SECTION */}
            <div className="section flex-centre-on-mob">
                <div className="backgorund-colour-1"></div>
                <div className="spacer-large"></div>
                <div className="spacer-large show-on-mob-land"></div>
                <div className="heading-container full-wide-on-mob">
                    <div data-aos="fade-right" className="signposting slide-in" >
                        <div className="signposting-rule" ></div>
                        <div className="detail" >Providing the balance</div>
                        <div className="signposting-rule show-on-mobile"></div>
                    </div>
                    <div className="spacer-extra-small"></div>
                    <h2 className="heading-large slide-in" >Wake up inspired</h2>
                    <div className="spacer-extra-small"></div>
                    <p data-aos="fade-up" className="padding-right-inbetween slide-in no-pad-on-mob centre-on-mob">
                        Tastefully situated, Blythedale Coastal Estate is an entity that truly encompasses
                        the balance between tranquillity and the convenience of mod-cons such like retail outlets.
                        Situated only 20 minutes from Ballito and 60 minutes from Richards Bay, its lush sub-tropical
                        vegetation and 3km of unspoilt beach frontage, mean that there is an even wider natural offering
                        for those whose interests lean that way.
                    </p>
                </div>
                <div className="spacer-small"></div>
                <a href="#" className="button bottom-right slide-in hide-on-mob w-inline-block">
                    <div className="button-inner">
                        <div className="button-diamond">
                            <div className="button-diamond-inner" >
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
                        <div className="button-text">The estates</div>
                    </div>
                </a>
            </div>
            <div className="slider-row-outer">
                <div className="slider-drag-container w-dyn-list">
                    <div role="list" className="slider-drag w-dyn-items flickity-enabled is-draggable">
                        <div className="flickity-viewport fw">
                            <div className="flickity-slider fs">
                                <div role="listitem" className="slider-drag-item w-dyn-item is-selected pal">
                                    <a href="#" className="slider-drag-inner w-inline-block">
                                        <div className="slider-numbering">
                                            <div className="slider-number-rule show-line-on-mob" ></div>
                                            <div className="slider-number-zero">0</div>
                                            <div className="slider-number">1</div>
                                            <div className="slider-number-rule" ></div>
                                        </div>
                                        <div className="spacer-extra-extra-small"></div>
                                        <div className="slider-row-image-outer">
                                            <div className="slider-row-image"></div>
                                        </div>
                                        <div className="slider-row-text-area">
                                            <div className="spacer-extra-extra-small"></div>
                                            <h3 className="heading-medium padding-right-large less-pad-on-tab">Blythedale Beach</h3>
                                            <div className="spacer-extra-extra-extra-small show-on-mob"></div>
                                            <div className="spacer-extra-extra-small hide-on-mob"></div>
                                            {/* <div className="suite-stats">
                                                Picture a flawless resort atmosphere, where the entertainment is tailor-made for your enjoyment. Blythedale Beach Resort will comprise of a vast selection of hospitality, tourism and resort facilities, including an informative tour desk and adventure centre. The Blythedale Beach Resort shall cater for all, offering timeshare, fractional ownership, sectional title and whole ownership units.
                                            </div> */}
                                        </div>
                                        <div className="spacer-medium show-on-mob"></div>
                                    </a>
                                </div>
                                <div role="listitem" className="slider-drag-item w-dyn-item li1" aria-hidden="true">
                                    <a href="#" className="slider-drag-inner w-inline-block">
                                        <div className="slider-numbering">
                                            <div className="slider-number-rule show-line-on-mob" ></div>
                                            <div className="slider-number-zero">0</div>
                                            <div className="slider-number">2</div>
                                            <div className="slider-number-rule" ></div>
                                        </div>
                                        <div className="spacer-extra-extra-small"></div>
                                        <div className="slider-row-image-outer">
                                            <div className="slider-row-image2"></div>
                                        </div>
                                        <div className="slider-row-text-area">
                                            <div className="spacer-extra-extra-small"></div>
                                            <h3 className="heading-medium padding-right-large less-pad-on-tab white-space">Blythedale Golf</h3>
                                            <div className="spacer-extra-extra-extra-small show-on-mob"></div>
                                            <div className="spacer-extra-extra-small hide-on-mob"></div>
                                            {/* <div className="suite-stats">
                                                Blythedale Golf boasts two- and three-bedroom lifestyle apartments overlooking an 18-hole Championship Golf Course. These luxury sectional title properties form part of six Mediterranean style villages set on hilltops surrounding the course and boasting stunning balcony views of the valley and nearby dams.
                                            </div> */}
                                        </div>
                                        <div className="spacer-medium show-on-mob"></div>
                                    </a>
                                </div>
                                <div role="listitem" className="slider-drag-item w-dyn-item li2" aria-hidden="true">
                                    <a href="#" className="slider-drag-inner w-inline-block">
                                        <div className="slider-numbering">
                                            <div className="slider-number-rule show-line-on-mob" ></div>
                                            <div className="slider-number-zero">0</div>
                                            <div className="slider-number">3</div>
                                            <div className="slider-number-rule" ></div>
                                        </div>
                                        <div className="spacer-extra-extra-small"></div>
                                        <div className="slider-row-image-outer">
                                            <div className="slider-row-image3"></div>
                                        </div>
                                        <div className="slider-row-text-area">
                                            <div className="spacer-extra-extra-small"></div>
                                            <h3 className="heading-medium padding-right-large less-pad-on-tab">Blythedale Forest</h3>
                                            <div className="spacer-extra-extra-extra-small show-on-mob"></div>
                                            <div className="spacer-extra-extra-small hide-on-mob"></div>
                                            {/* <div className="suite-stats">
                                               
                                            </div> */}
                                        </div>
                                        <div className="spacer-medium show-on-mob"></div>
                                    </a>
                                </div>
                                <div role="listitem" className="slider-drag-item w-dyn-item li3" aria-hidden="true">
                                    <a href="#" className="slider-drag-inner w-inline-block">
                                        <div className="slider-numbering">
                                            <div className="slider-number-rule show-line-on-mob" ></div>
                                            <div className="slider-number-zero">0</div>
                                            <div className="slider-number">4</div>
                                            <div className="slider-number-rule" ></div>
                                        </div>
                                        <div className="spacer-extra-extra-small"></div>
                                        <div className="slider-row-image-outer">
                                            <div className="slider-row-image4"></div>
                                        </div>
                                        <div className="slider-row-text-area">
                                            <div className="spacer-extra-extra-small"></div>
                                            <h3 className="heading-medium padding-right-large less-pad-on-tab">Blythedale Equestrian</h3>
                                            <div className="spacer-extra-extra-extra-small show-on-mob"></div>
                                            <div className="spacer-extra-extra-small hide-on-mob"></div>
                                            {/* <div className="suite-stats">
                                                
                                            </div> */}
                                        </div>
                                        <div className="spacer-medium show-on-mob"></div>
                                    </a>
                                </div>
                                <div role="listitem" className="slider-drag-item w-dyn-item li4" aria-hidden="true">
                                    <a href="#" className="slider-drag-inner w-inline-block">
                                        <div className="slider-numbering">
                                            <div className="slider-number-rule show-line-on-mob" ></div>
                                            <div className="slider-number-zero">0</div>
                                            <div className="slider-number">5</div>
                                            <div className="slider-number-rule" ></div>
                                        </div>
                                        <div className="spacer-extra-extra-small"></div>
                                        <div className="slider-row-image-outer">
                                            <div className="slider-row-image5"></div>
                                        </div>
                                        <div className="slider-row-text-area">
                                            <div className="spacer-extra-extra-small"></div>
                                            <h3 className="heading-medium padding-right-large less-pad-on-tab">Blythedale Hills</h3>
                                            <div className="spacer-extra-extra-extra-small show-on-mob"></div>
                                            <div className="spacer-extra-extra-small hide-on-mob"></div>
                                            {/* <div className="suite-stats">
                                                
                                            </div> */}
                                        </div>
                                        <div className="spacer-medium show-on-mob"></div>
                                    </a>
                                </div>
                                <div role="listitem" className="slider-drag-item w-dyn-item li5" aria-hidden="true">
                                    <a href="#" className="slider-drag-inner w-inline-block">
                                        <div className="slider-numbering">
                                            <div className="slider-number-rule show-line-on-mob" ></div>
                                            <div className="slider-number-zero">0</div>
                                            <div className="slider-number">6</div>
                                            <div className="slider-number-rule" ></div>
                                        </div>
                                        <div className="spacer-extra-extra-small"></div>
                                        <div className="slider-row-image-outer">
                                            <div className="slider-row-image6"></div>
                                        </div>
                                        <div className="slider-row-text-area">
                                            <div className="spacer-extra-extra-small"></div>
                                            <h3 className="heading-medium padding-right-large less-pad-on-tab">Blythedale Beach</h3>
                                            <div className="spacer-extra-extra-extra-small show-on-mob"></div>
                                            <div className="spacer-extra-extra-small hide-on-mob"></div>
                                            {/* <div className="suite-stats">
                                               
                                            </div> */}
                                        </div>
                                        <div className="spacer-medium show-on-mob"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SLIDER SECTION END */}

            {/* ECO-GREEN */}
            <div className="section">
                <div className="spacer-large hide-on-mob"></div>
                <div className="spacer-extra-small show-on-mob"></div>
                <div className="columns w-row">
                    <div className="column w-col w-col-6">
                        <div className="heading-container full-wide">
                            <div className="signposting slide-in">
                                <div className="signposting-rule"></div>
                                <div className="detail">80% off Grid</div>
                                <div className="signposting-rule show-on-mobile"></div>
                            </div>
                            <div className="spacer-extra-small"></div>
                            <h2 className="heading-large slide-in">Africa’s first  <br />Eco-Smart Estate</h2>
                            <div className="spacer-extra-small"></div>
                        </div>
                    </div>
                    <div className="column w-col w-col-6 flex-column">
                        <div className="spacer-small hide-on-mob"></div>
                        <p className="slide-in side-pad-on-mob no-padding-centre-mob">
                            Some of the most important features that will make Blythedale a connected, eco-smart city, are fibre to the home (FTTH) and estate-wide 5G Wi-Fi. This lightning-fast internet connectivity will pair with Blythedale’s Holistic Estate App, which has been designed for mobile.
                        </p>
                        <div className="spacer-extra-small hide-on-mob"></div>
                        <a href="#" className="button slide-in hide-on-mobile w-inline-block">
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
                                <div className="button-text">Gastronomy</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="spacer-medium"></div>
            </div>
            {/*  ECO-GREEN (END) */}

            {/* ENDING */}
            <div className="large-image-slider expand-on-mob">
                <div className="large-image-slider-black-bg override no-bg-on-mob w-dyn-list">
                    <div role="list" className="large-image-slider-inner no-drag-on-mob w-dyn-items flickity-enabled is-draggable" >
                        <div className="flickity-viewport" >
                            <div className="flickity-slider">
                                <div role="listitem" className="large-image-slide set-height-on-mob w-dyn-item is-selected p1" >
                                    <a href="https://www.grand-forest.gr/gastronomy/metsovo-1350m" className="large-image-slider-link w-inline-block">
                                        <div className="large-slider-image-outer" >
                                            <div className="large-slider-image anchor-from-bottom scaled-up no-slide-on-mob p1-image"></div>
                                        </div>
                                        <div className="large-slide-caption centre-on-mob">
                                            <div className="large-slide-caption-image centre-on-mob">
                                                <h3 className="heading-medium text-white hide-on-mob">0</h3>
                                                <h3 className="heading-medium text-white gastronomy-number hide-on-mob">1</h3>
                                                <div className="large-slider-rule"></div>
                                                <h3 className="heading-medium text-white">BlythedaleHills</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div role="listitem" className="large-image-slide set-height-on-mob w-dyn-item p2" aria-hidden="true">
                                    <a href="https://www.grand-forest.gr/gastronomy/the-pines" className="large-image-slider-link w-inline-block">
                                        <div className="large-slider-image-outer" >
                                            <div className="large-slider-image anchor-from-bottom scaled-up no-slide-on-mob p2-image"></div>
                                        </div>
                                        <div className="large-slide-caption centre-on-mob">
                                            <div className="large-slide-caption-image centre-on-mob">
                                                <h3 className="heading-medium text-white hide-on-mob">0</h3>
                                                <h3 className="heading-medium text-white gastronomy-number hide-on-mob">2</h3>
                                                <div className="large-slider-rule"></div>
                                                <h3 className="heading-medium text-white">The Pines</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div role="listitem" className="large-image-slide set-height-on-mob w-dyn-item p3" aria-hidden="true">
                                    <a href="https://www.grand-forest.gr/gastronomy/the-lobby" className="large-image-slider-link w-inline-block">
                                        <div className="large-slider-image-outer" >
                                            <div className="large-slider-image anchor-from-bottom scaled-up no-slide-on-mob p3-image"></div>
                                        </div>
                                        <div className="large-slide-caption centre-on-mob">
                                            <div className="large-slide-caption-image centre-on-mob">
                                                <h3 className="heading-medium text-white hide-on-mob">0</h3>
                                                <h3 className="heading-medium text-white gastronomy-number hide-on-mob">3</h3>
                                                <div className="large-slider-rule"></div>
                                                <h3 className="heading-medium text-white">The Lobby</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer-medium show-on-mob"></div>
            </div>
            <div className="section no-padding">
                <div className="experiences-background"></div>
                <div className="experiences-null-scroll-in"></div>
                <div className="experience-null-scroll-away"></div>
                <div className="spacer-medium hide-on-mob"></div>
                <div className="spacer-large show-on-mob"></div>
                <div className="columns vert-on-mob-land w-row">
                    <div className="column sticky-padding sticky full-wide-on-mob w-col w-col-6 w-col-small-small-stack bg-blend">
                        <div className="heading-container full-wide">
                            <div className="signposting slide-in" >
                                <div className="signposting-rule" ></div>
                                <div className="detail">Experiences</div>
                                <div className="signposting-rule show-on-mobile"></div>
                            </div>
                            <div className="spacer-extra-small"></div>
                            <h2 className="heading-large slide-in" >Unforgettable <br />experiences <br /></h2>
                            <div className="spacer-extra-small"></div>
                            <p className="padding-right-medium slide-in no-padding-on-mobile" >Awaken your adventurous side with experiences you&apos;ll remember for a lifetime. </p>
                            <div className="spacer-extra-small"></div>
                            <div className="button-wrapper is--left-align-desktop">
                                <a href="https://www.grand-forest.gr/experiences" className="button slide-in w-inline-block" >
                                    <div className="button-inner">
                                        <div className="button-diamond">
                                            <div className="button-diamond-inner" >
                                                <div className="button-diamond-arrow-container">
                                                    <div className="arrow-line">
                                                        <div className="arrow-head"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button-diamond-hovered" >
                                                <div className="button-diamond-arrow-container">
                                                    <div className="arrow-line arrow-line-white">
                                                        <div className="arrow-head arrow-head-white"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-text">Discover more</div>
                                    </div>
                                </a>
                                <div className="button-spacer"></div>

                            </div>
                            <div className="spacer-medium"></div>
                        </div>
                    </div>
                    <div className="column w-col w-col-6 w-col-small-small-stack bg-blend">
                        <div className="row-of-1 w-dyn-list">
                            <div role="list" className="experiences-homepage-collection w-dyn-items">
                                <div role="listitem" className="collection-item w-dyn-item">
                                    <a href="https://www.grand-forest.gr/experiences/lake-it-easy-e-bike-sup" className="row-of-one-link-block w-inline-block">
                                        <div className="row-of-one-image-container">
                                            <div data-w-id="77d37ac8-ef69-a91d-f013-d6aa5093d3ce" className="row-of-one-image-inner absolute" >
                                                <div className="basic-image cms-image cms1"></div>
                                            </div>
                                        </div>
                                        <div className="spacer-extra-extra-small"></div>
                                        <div className="spacer-extra-extra-small hide-on-mob"></div>
                                        <h3 className="heading-medium padding-right-medium slide-in no-padding-on-mob experience-small-padding" >Lake It Easy</h3>
                                        <div className="spacer-extra-extra-small"></div>
                                        <p className="padding-right-medium slide-in no-padding-on-mobile" >Discover the gorgeous lake of Aoos springs with the mountain tops of Pindos unfolding around you, accompanied by Lefteris Fafalis, winter Olympics athlete and real resource person of the surrounding mountains.</p>
                                        <div
                                            className="spacer-medium"></div>
                                    </a>
                                </div>
                                <div role="listitem" className="collection-item w-dyn-item">
                                    <a href="https://www.grand-forest.gr/experiences/rare-but-true-wild-truffle-hunting" className="row-of-one-link-block w-inline-block">
                                        <div className="row-of-one-image-container">
                                            <div data-w-id="77d37ac8-ef69-a91d-f013-d6aa5093d3ce" className="row-of-one-image-inner absolute" >
                                                <div className="basic-image cms-image cms2"></div>
                                            </div>
                                        </div>
                                        <div className="spacer-extra-extra-small"></div>
                                        <div className="spacer-extra-extra-small hide-on-mob"></div>
                                        <h3 className="heading-medium padding-right-medium slide-in no-padding-on-mob experience-small-padding" >Rare But True</h3>
                                        <div className="spacer-extra-extra-small"></div>
                                        <p className="padding-right-medium slide-in no-padding-on-mobile" >Meet Katerina Nola, the female “Indiana Jones” of Greece. Katerina&apos;s dogs are skillfully trained to sniff out precious truffles.</p>
                                        <div className="spacer-medium"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="spacer-extra-small show-on-mob"></div>
                    </div>
                </div>
            </div>
            <div className="spa-section">
                <div className="spacer-medium hide-on-mob"></div>
                <div className="spa-inner">
                    <div className="spacer-large show-on-mob"></div>
                    <div data-w-id="ff108b6a-8f0d-af56-f59b-cee90b4bf1ff" className="spa-image-paralax"></div>
                    <div className="spa-background">
                        <div data-w-id="9877b10d-4ba9-420b-afba-fe0567b6887f" className="spa-background-image" ></div>
                    </div>
                    <div className="heading-container wider-on-mob full-wide-on-mob">
                        <div className="signposting slide-in" >
                            <div className="signposting-rule signposting-white" ></div>
                            <div className="detail" >The Fontus Spa</div>
                            <div className="signposting-rule signposting-white show-on-mobile" ></div>
                        </div>
                        <div className="spacer-extra-small"></div>
                        <h2 className="heading-large slide-in" >Tranquility beyond compare</h2>
                        <div className="spacer-extra-small"></div>
                        <p className="padding-right-large slide-in no-pad-on-mob centre-on-mob" >Introducing the Fountus Spa, where wellness is generously offered in an elegant environment. All treatments have been carefully crafted by the renowned “Germaine de Capuccini”.</p>
                        <div className="spacer-extra-small"></div>
                        <a href="https://www.grand-forest.gr/the-fontus-spa" className="button white slide-in w-inline-block" >
                            <div className="button-inner">
                                <div className="button-diamond white">
                                    <div className="button-diamond-inner" >
                                        <div className="button-diamond-arrow-container">
                                            <div className="arrow-line arrow-line-white">
                                                <div className="arrow-head arrow-head-white"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-diamond-hovered" >
                                        <div className="button-diamond-arrow-container">
                                            <div className="arrow-line arrow-line-white">
                                                <div className="arrow-head arrow-head-white"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="button-text" >The Fontus Spa</div>
                            </div>
                        </a>
                    </div>
                    <div className="spacer-medium show-on-mob"></div>
                </div>
            </div>
            <div className="section">
                <div className="spacer-large hide-on-mob"></div>
                <div className="spacer-large hide-on-mob"></div>

                <div className="backgorund-colour-2"></div>
                <div className="spacer-large"></div>
                <div className="columns w-row">
                    <div className="column w-col w-col-6">
                        <div className="heading-container full-wide">
                            <div className="signposting slide-in" >
                                <div className="signposting-rule"></div>
                                <div className="detail" >Private Functions</div>
                                <div className="signposting-rule show-on-mobile"></div>
                            </div>
                            <div className="spacer-extra-small"></div>
                            <h2 className="heading-large slide-in" >Occasions to remember</h2>
                        </div>
                    </div>
                    <div className="column w-col w-col-6 flex-column">
                        <div className="spacer-small"></div>
                        <p className="slide-in" >Grand Forest Metsovo offers multi-functional, high capacity rooms equipped with state of the art audiovisual equipment. Perfect for all business meetings, weddings, banquets and social events.</p>
                        <div className="spacer-extra-small"></div>
                        <a href="https://www.grand-forest.gr/private-functions" className="button slide-in w-inline-block" >
                            <div className="button-inner">
                                <div className="button-diamond">
                                    <div className="button-diamond-inner" >
                                        <div className="button-diamond-arrow-container">
                                            <div className="arrow-line">
                                                <div className="arrow-head"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-diamond-hovered" >
                                        <div className="button-diamond-arrow-container">
                                            <div className="arrow-line arrow-line-white">
                                                <div className="arrow-head arrow-head-white"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="button-text" >Private functions</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="spacer-medium"></div>
            </div>
            <CTA2 />
            <div className="section flex-centre">
                <div className="spacer-large">
                </div>
                <img src="" alt="" className="tree-icon slide-in" />
                <div className="spacer-extra-small">

                </div>
                <h2 className="heading-medium text-centered padding-both-sides slide-in" >
                    This one thousand hector property development offers lifestyle living with 3.2km of unspoiled beaches, tranquil forests and a pristine river frontage.
                </h2>
                <div className="spacer-extra-small"></div>
                <p className="slide-in">Blythedale Coastal Estate</p>
                <div className="spacer-large"></div>
            </div>
            {/* ENDING (END) */}
            <Map />
            <Reservations />
            <Newsletter />
            <Footer />
        </div >
    )
}
