import Image from 'next/image'

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
          <div className="estate-logos-wrapper">
          <Image src="/images/estate-logos/blythedale-equestrian-logo-small.webp" width="170" height="130" alt="" className="footer-logo"/>
          <Image src="/images/estate-logos/blythedale-forest-logo-small.webp" width="170" height="130" alt="" className="footer-logo"/>
          <Image src="/images/estate-logos/blythedale-golf-logo-small.webp" width="170" height="130" alt="" className="footer-logo"/>
          <Image src="/images/estate-logos/blythedale-hills-logo-small.webp" width="170" height="130" alt="" className="footer-logo"/>
          <Image src="/images/estate-logos/blythedale-ocean-logo-small.webp" width="170" height="130" alt="" className="footer-logo"/>
          </div>
                <div className="spacer-small"></div>
                <div className="footer-columns w-row">
                    <div className="footer-column w-col w-col-3"><a href="#" aria-current="page" className="text-link slide-in" >Home</a>
                        <div className="spacer-extra-extra-small"></div><a href="#" className="text-link slide-in" >Our Story</a>
                        <div className="spacer-extra-extra-small"></div><a href="#" className="text-link slide-in" >The Setting</a>
                        <div className="spacer-extra-extra-small"></div><a href="#" className="text-link slide-in" >The Plan</a>
                        <div className="spacer-extra-extra-small"></div>
                    </div>
                    <div className="footer-column w-col w-col-3"><a href="#" className="text-link slide-in" >Blythedale Beach Resort</a>
                        <div className="spacer-extra-extra-small"></div><a href="#" className="text-link slide-in" >Blythedale Equestrian</a>
                        <div className="spacer-extra-extra-small"></div><a href="#" className="text-link slide-in" >Blythedale Forest</a>
                        <div className="spacer-extra-extra-small"></div><a href="#" className="text-link slide-in" >Blythedale Golf</a>
                        <div className="spacer-extra-extra-small"></div>
                    </div>
                    <div className="footer-column w-col w-col-3"><a href="#" className="text-link slide-in" >Register your interest</a>
                        <div className="spacer-extra-extra-small"></div><a href="#" className="text-link slide-in" >Estate Agent Registration</a>
                        <div className="spacer-extra-extra-small"></div><a href="#" className="text-link slide-in" >Service Providers</a>
                        <div className="spacer-extra-extra-small"></div><a href="#" className="text-link slide-in" >Book a site visit</a>
                        <div className="spacer-extra-extra-small"></div>
                    </div>
                    <div className="footer-column w-col w-col-3"><a href="#" className="text-link slide-in" >Getting here</a>
                        <div className="spacer-extra-extra-small"></div><a href="#" className="text-link slide-in" >Contact</a>
                        <div className="spacer-extra-extra-small"></div><a href="#" className="text-link slide-in" >FAQs</a>
                        <div className="spacer-extra-extra-small"></div><a href="#" target="_blank" rel="noopener noreferrer" className="text-link slide-in" >Privacy Policy</a>
                        <div className="spacer-extra-extra-small"></div>
                    </div>
                </div>
                <div className="spacer-small"></div>
                <div className="footer-small-print">
                    <div id="w-node-_553bb046-7494-0a43-b931-cff0f6f26bd0-f6f26b98" className="date-area">
                        <div className="small-print right-padding">©</div>
                        <div className="small-print right-padding w-embed w-script">
                            2022
                        </div>
                        <div className="small-print">Blythedale Coastal Estate. All rights reserved.</div>
                    </div>
                    <div id="w-node-b84cbda6-3544-9d10-6bd6-6805c3b3255a-f6f26b98" className="no-wrapper-footer-line">
                        <div className="small-print centre-on-mob"><a href="#" target="_blank" rel="noopener noreferrer" className="text-link">Brought to you by the eLan property group</a></div>
                    </div>
                    <div id="w-node-b84cbda6-3544-9d10-6bd6-6805c3b3255a-f6f26b98" className="no-wrapper-footer-line">
                        <div className="small-print centre-on-mob"><a href="#" target="_blank" rel="noopener noreferrer" className="text-link">Web development by Admakers Digital</a></div>
                    </div>
                    <div id="w-node-_1302a1a4-49f8-b46a-e4b2-dd278275423f-f6f26b98" className="hide-cookie"></div>
                    <div className="small-print centre-on-mob cookie-append">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="cookie-link">
                            <span className="cookie-english">
                                Privacy Policy
                            </span>
                        </a>
                    </div>
            </div>
            </div>
    </footer>
  )
}

export default Footer
