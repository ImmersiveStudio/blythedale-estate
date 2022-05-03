import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Info from '../components/Info'
import CTA2 from '../components/CTA2'
import Reservations from '../components/Reservations'
import Newsletter from '../components/Newsletter'

function blythedaleestate() {
    return (
        <div>
            <Info />
            <Header />

            <div className="hero-section">
                <div className="hero-section-image">
                    <div className="hero-image gastronomy-page"></div>
                </div>
                <div className="spacer-extra-extra-small"></div>
                <h1 className="heading-large text-white text-centered">
                    Gastronomy
                </h1>
                <a href="#anchor" className="scroll-prompt w-inline-block">
                    <img src="https://uploads-ssl.webflow.com/5e3835079dd94bdbf2fb4c42/5e419a105fa71041bfd8e1cc_scroll-down.svg" alt="" className="basic-image" />
                </a>
            </div>

            <div className="section flex-centre padding-both-sides">
                <div className="spacer-large"></div>
                <h2 className="heading-medium text-centered">Experience modern local dishes, refined <br />
                    beverages and breathtaking views from our beautiful restaurant, lounge and lobby. <br />
                </h2>
                <div className="spacer-large"></div>
            </div>

            <div className="sticky-nav-area">
                <div className="sub-nav centre-on-tab centre-on-mob">
                    <div className="sub-nav-dynamic w-dyn-list">
                        <div role="list" className="sub-nav-dynamic-collection w-dyn-items">
                            <div role="listitem" className="sub-nav-dynamic-item w-dyn-item">
                                <div className="html-tab w-embed"><a href="#metsovo-1350m" className="sub-nav-link">Blythedale Beach</a></div>
                                <div className="seperator"></div>
                            </div>
                            <div role="listitem" className="sub-nav-dynamic-item w-dyn-item">
                                <div className="html-tab w-embed"><a href="#the-pines" className="sub-nav-link">Blythedale Equestrian</a></div>
                                <div className="seperator"></div>
                            </div>
                            <div role="listitem" className="sub-nav-dynamic-item w-dyn-item">
                                <div className="html-tab w-embed"><a href="#the-lobby" className="sub-nav-link">Blythedale Forest</a></div>
                                <div className="seperator"></div>
                            </div>
                            <div role="listitem" className="sub-nav-dynamic-item w-dyn-item">
                                <div className="html-tab w-embed"><a href="#metsovo-1350m" className="sub-nav-link">Blythedale Golf</a></div>
                                <div className="seperator"></div>
                            </div>
                            <div role="listitem" className="sub-nav-dynamic-item w-dyn-item">
                                <div className="html-tab w-embed"><a href="#the-pines" className="sub-nav-link">Blythedale Hills</a></div>
                                <div className="seperator"></div>
                            </div>
                            <div role="listitem" className="sub-nav-dynamic-item w-dyn-item">
                                <div className="html-tab w-embed"><a href="#the-lobby" className="sub-nav-link">Blythedale Ocean</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondary-page-collection w-dyn-list">
                    <div role="list" className="w-dyn-items">
                        <div role="listitem" className="secondary-page-collection-item w-dyn-item">
                            <div className="anchor-area">
                                <div id="1" className="anchor-null">
                                    <div className="anchor-html-embed w-embed">
                                        <div className="anchor-div-embed" id="metsovo-1350m"></div>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="spacer-large hide-on-mob"></div>
                                    <div className="column-wrap flip-on-mob">
                                        <a data-w-id="174c54a2-f876-c932-e481-ecd5e14e79b1" href="/estates/blythedale-beach" className="overlap-link-image w-inline-block">
                                            <div className="basic-image">
                                                <div data-w-id="b73f64e6-72a3-9517-9827-c255ab6fff8b"
                                                    className="breaker-image-inner"></div>
                                            </div>
                                        </a>
                                        <div className="columns flex-stretch minus-top-on-mobile w-row">
                                            <div className="column flex-vertical w-col w-col-5 w-col-medium-6">
                                                <div className="spacer-medium hide-on-mob"></div>
                                                <div className="heading-container-overlap" >
                                                    <div className="signposting slide-in">
                                                        <div className="signposting-rule"></div>
                                                        <div className="detail zero">0</div>
                                                        <div className="detail dynamic-number" >1</div>
                                                        <div className="signposting-rule show-on-mobile"></div>
                                                    </div>
                                                    <div className="spacer-extra-small"></div>
                                                    <h2 className="heading-medium slide-in">Blythedale Beach</h2>
                                                    <div className="spacer-extra-small"></div>
                                                    <p className="slide-in">Experience modern local dishes and breathtaking views at our signature restaurant, Metsovo 1350m, where the menu is created by executive consultant chef Gikas Xenakis.</p>
                                                    <div className="spacer-extra-small"></div>
                                                    <a href="/estates/blythedale-beach" className="button slide-in w-inline-block">
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
                                                            <div className="button-text">Discover more</div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="spacer-medium"></div>
                                            </div>
                                            <div className="column pointer-events-none w-col w-col-7 w-col-medium-6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className="secondary-page-collection-item w-dyn-item">
                            <div className="anchor-area">
                                <div id="1" className="anchor-null">
                                    <div className="anchor-html-embed w-embed">
                                        <div className="anchor-div-embed" id="the-pines"></div>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="spacer-large hide-on-mob"></div>
                                    <div className="column-wrap flip-on-mob">
                                        <a data-w-id="174c54a2-f876-c932-e481-ecd5e14e79b1" href="/estates/blythedale-equestrian" className="overlap-link-image w-inline-block absolute-top-left">
                                            <div className="basic-image">
                                                <div data-w-id="b73f64e6-72a3-9517-9827-c255ab6fff8b"
                                                    className="breaker-image-inner"></div>
                                            </div>
                                        </a>
                                        <div className="columns flex-stretch minus-top-on-mobile w-row flip">
                                            <div className="column flex-vertical w-col w-col-5 w-col-medium-6">
                                                <div className="spacer-medium hide-on-mob"></div>
                                                <div className="heading-container-overlap">
                                                    <div className="signposting slide-in">
                                                        <div className="signposting-rule"></div>
                                                        <div className="detail zero" >0</div>
                                                        <div className="detail dynamic-number">2</div>
                                                        <div className="signposting-rule show-on-mobile"></div>
                                                    </div>
                                                    <div className="spacer-extra-small"></div>
                                                    <h2 className="heading-medium slide-in">Blythedale Equestrian</h2>
                                                    <div className="spacer-extra-small"></div>
                                                    <p className="slide-in">The Pines private lounge and bar, operating only on request for private use, is an outstanding space centered around two distinctive fireplaces. </p>
                                                    <div className="spacer-extra-small"></div>
                                                    <a href="/estates/blythedale-equestrian" className="button slide-in w-inline-block">
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
                                                            <div className="button-text">Discover more</div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="spacer-medium"></div>
                                            </div>
                                            <div className="column pointer-events-none w-col w-col-7 w-col-medium-6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className="secondary-page-collection-item w-dyn-item">
                            <div className="anchor-area">
                                <div id="1" className="anchor-null">
                                    <div className="anchor-html-embed w-embed">
                                        <div className="anchor-div-embed" id="the-lobby"></div>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="spacer-large hide-on-mob"></div>
                                    <div className="column-wrap flip-on-mob">
                                        <a data-w-id="174c54a2-f876-c932-e481-ecd5e14e79b1" href="/estates/blythedale-forest" className="overlap-link-image w-inline-block">
                                            <div className="basic-image">
                                                <div data-w-id="b73f64e6-72a3-9517-9827-c255ab6fff8b"
                                                    className="breaker-image-inner"></div>
                                            </div>
                                        </a>
                                        <div className="columns flex-stretch minus-top-on-mobile w-row">
                                            <div className="column flex-vertical w-col w-col-5 w-col-medium-6">
                                                <div className="spacer-medium hide-on-mob"></div>
                                                <div className="heading-container-overlap">
                                                    <div className="signposting slide-in">
                                                        <div className="signposting-rule"></div>
                                                        <div className="detail zero" >0</div>
                                                        <div className="detail dynamic-number">3</div>
                                                        <div className="signposting-rule show-on-mobile"></div>
                                                    </div>
                                                    <div className="spacer-extra-small"></div>
                                                    <h2 className="heading-medium slide-in">Blythedale Forest</h2>
                                                    <div className="spacer-extra-small"></div>
                                                    <p className="slide-in">Light meals, snacks and beverages are served throughout the day in this inviting space.</p>
                                                    <div className="spacer-extra-small"></div>
                                                    <a href="/estates/blythedale-forest" className="button slide-in w-inline-block">
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
                                                            <div className="button-text">Discover more</div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="spacer-medium"></div>
                                            </div>
                                            <div className="column pointer-events-none w-col w-col-7 w-col-medium-6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className="secondary-page-collection-item w-dyn-item">
                            <div className="anchor-area">
                                <div id="1" className="anchor-null">
                                    <div className="anchor-html-embed w-embed">
                                        <div className="anchor-div-embed" id="the-pines"></div>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="spacer-large hide-on-mob"></div>
                                    <div className="column-wrap flip-on-mob">
                                        <a data-w-id="174c54a2-f876-c932-e481-ecd5e14e79b1" href="/estates/blythedale-golf" className="overlap-link-image w-inline-block absolute-top-left">
                                            <div className="basic-image">
                                                <div data-w-id="b73f64e6-72a3-9517-9827-c255ab6fff8b"
                                                    className="breaker-image-inner"></div>
                                            </div>
                                        </a>
                                        <div className="columns flex-stretch minus-top-on-mobile w-row flip">
                                            <div className="column flex-vertical w-col w-col-5 w-col-medium-6">
                                                <div className="spacer-medium hide-on-mob"></div>
                                                <div className="heading-container-overlap">
                                                    <div className="signposting slide-in">
                                                        <div className="signposting-rule"></div>
                                                        <div className="detail zero" >0</div>
                                                        <div className="detail dynamic-number">4</div>
                                                        <div className="signposting-rule show-on-mobile"></div>
                                                    </div>
                                                    <div className="spacer-extra-small"></div>
                                                    <h2 className="heading-medium slide-in">Blythedale Golf</h2>
                                                    <div className="spacer-extra-small"></div>
                                                    <p className="slide-in">The Pines private lounge and bar, operating only on request for private use, is an outstanding space centered around two distinctive fireplaces. </p>
                                                    <div className="spacer-extra-small"></div>
                                                    <a href="/estates/blythedale-golf" className="button slide-in w-inline-block">
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
                                                            <div className="button-text">Discover more</div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="spacer-medium"></div>
                                            </div>
                                            <div className="column pointer-events-none w-col w-col-7 w-col-medium-6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className="secondary-page-collection-item w-dyn-item">
                            <div className="anchor-area">
                                <div id="1" className="anchor-null">
                                    <div className="anchor-html-embed w-embed">
                                        <div className="anchor-div-embed" id="the-lobby"></div>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="spacer-large hide-on-mob"></div>
                                    <div className="column-wrap flip-on-mob">
                                        <a data-w-id="174c54a2-f876-c932-e481-ecd5e14e79b1" href="/estates/blythedale-hills" className="overlap-link-image w-inline-block">
                                            <div className="basic-image">
                                                <div data-w-id="b73f64e6-72a3-9517-9827-c255ab6fff8b"
                                                    className="breaker-image-inner"></div>
                                            </div>
                                        </a>
                                        <div className="columns flex-stretch minus-top-on-mobile w-row">
                                            <div className="column flex-vertical w-col w-col-5 w-col-medium-6">
                                                <div className="spacer-medium hide-on-mob"></div>
                                                <div className="heading-container-overlap">
                                                    <div className="signposting slide-in">
                                                        <div className="signposting-rule"></div>
                                                        <div className="detail zero" >0</div>
                                                        <div className="detail dynamic-number">5</div>
                                                        <div className="signposting-rule show-on-mobile"></div>
                                                    </div>
                                                    <div className="spacer-extra-small"></div>
                                                    <h2 className="heading-medium slide-in">Blythedale Hills</h2>
                                                    <div className="spacer-extra-small"></div>
                                                    <p className="slide-in">Light meals, snacks and beverages are served throughout the day in this inviting space.</p>
                                                    <div className="spacer-extra-small"></div>
                                                    <a href="/estates/blythedale-hills" className="button slide-in w-inline-block">
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
                                                            <div className="button-text">Discover more</div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="spacer-medium"></div>
                                            </div>
                                            <div className="column pointer-events-none w-col w-col-7 w-col-medium-6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className="secondary-page-collection-item w-dyn-item">
                            <div className="anchor-area">
                                <div id="1" className="anchor-null">
                                    <div className="anchor-html-embed w-embed">
                                        <div className="anchor-div-embed" id="the-pines"></div>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="spacer-large hide-on-mob"></div>
                                    <div className="column-wrap flip-on-mob">
                                        <a data-w-id="174c54a2-f876-c932-e481-ecd5e14e79b1" href="/estates/blythedale-ocean" className="overlap-link-image w-inline-block absolute-top-left">
                                            <div className="basic-image">
                                                <div data-w-id="b73f64e6-72a3-9517-9827-c255ab6fff8b"
                                                    className="breaker-image-inner"></div>
                                            </div>
                                        </a>
                                        <div className="columns flex-stretch minus-top-on-mobile w-row flip">
                                            <div className="column flex-vertical w-col w-col-5 w-col-medium-6">
                                                <div className="spacer-medium hide-on-mob"></div>
                                                <div className="heading-container-overlap">
                                                    <div className="signposting slide-in">
                                                        <div className="signposting-rule"></div>
                                                        <div className="detail zero" >0</div>
                                                        <div className="detail dynamic-number">6</div>
                                                        <div className="signposting-rule show-on-mobile"></div>
                                                    </div>
                                                    <div className="spacer-extra-small"></div>
                                                    <h2 className="heading-medium slide-in">Blythedale Ocean</h2>
                                                    <div className="spacer-extra-small"></div>
                                                    <p className="slide-in">The Pines private lounge and bar, operating only on request for private use, is an outstanding space centered around two distinctive fireplaces. </p>
                                                    <div className="spacer-extra-small"></div>
                                                    <a href="/estates/blythedale-ocean" className="button slide-in w-inline-block">
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
                                                            <div className="button-text">Discover more</div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="spacer-medium"></div>
                                            </div>
                                            <div className="column pointer-events-none w-col w-col-7 w-col-medium-6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer-large hide-on-mob"></div>
                <div className="spacer-extra-small show-on-mob"></div>
            </div>

            <CTA2 />
            <Reservations />
            <Newsletter />
            <Footer />

        </div>
    )
}

export default blythedaleestate