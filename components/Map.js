
function Map() {
  return (
    <div className="half-and-half">
    <div className="half green-bg">
        <div className="heading-container full-wide">
            <div className="signposting slide-in">
                <div className="signposting-rule signposting-white"></div>
                <div className="detail">Our Location</div>
                <div className="signposting-rule signposting-white show-on-mobile"></div>
            </div>
            <div className="spacer-extra-small"></div>
            <h2 className="heading-large slide-in">Getting here</h2>
            <div className="spacer-extra-small"></div>
            <p className="padding-right-medium slide-in no-padding-and-centre-mob" >Blythedale Coastal Estate, KwaDukuza</p>
            <div className="spacer-extra-extra-small"></div>
            <p className="padding-right-medium slide-in no-padding-and-centre-mob" >
                Tel: <a href="tel:0329463244" className="text-link-white">(032) 946 3244</a> 
                <br/>Email: 
            <a href="mailto:info@blythedale.co.za" className="text-link-white">info@blythedale.co.za</a></p>
            <div className="spacer-small"></div>
        </div>
        <a href="" className="button white slide-in w-inline-block" >
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
                <div className="button-text">Getting here</div>
            </div>
        </a>
    </div>
    <div className="half map-tab">
        <div className="basic-image absolute-image location-image">
            <a href="" target="_blank" rel="noopener noreferrer" className="thess-block w-inline-block">
                   
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="athens-block w-inline-block">
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="ioan-block w-inline-block">

            </a>    
            <a href="" target="_blank" rel="noopener noreferrer" className="gf-block w-inline-block">
                <img src="/remove/5eaafc11fbbd83fa25c818fb_Asset 2.png" alt="" className="airpot"/>
            </a>
        </div>
    </div>
</div>
  )
}

export default Map