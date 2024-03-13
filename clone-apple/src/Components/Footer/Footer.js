import React, { Component } from 'react'
import flag from '../../Resources/images/icons/16.png'
import Footerlink from './Footerlink'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: {} 
    };
  }

  toggleSection = (sectionName) => {
    this.setState(prevState => ({
      isOpen: {
        ...prevState.isOpen,
        [sectionName]: !prevState.isOpen[sectionName] 
      }
    }));
  }

  render() {
    return (
      <footer className="footer-wrapper">
      <div className="container"> 
        <div className="upper-text-container">
          <p>1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and shipping not included. Additional Apple Card Monthly Installments terms are in the <a href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf" target="_blank"> Customer Agreement</a>. Additional iPhone Payments terms are <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/"> here</a>.</p>
          <p>2. Subscription required.<br/><br/>
          Magic Keyboard sold separately.<br/><br/>
          Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other <a href="https://www.apple.com/promo/">terms </a> apply.</p>
        </div>
        <div className="footer-links-wrapper row"> 
          <div className="links-wrapper-1 col-sm-12 col-md">
            <h3 onClick={() => this.toggleSection('shopAndLearn')}>Shop and Learn
            <span className="toggle-icon">{this.state.isOpen['shopAndLearn'] ? '' : ''}</span>
            </h3>
            <ul style={{ display: this.state.isOpen['shopAndLearn'] ? 'block' : 'none' }}>
              <Footerlink linkName='Mac' linkUrl='/#'/>
              <Footerlink linkName='iPad' linkUrl='/#'/>
              <Footerlink linkName='iPhone' linkUrl='/#'/>
              <Footerlink linkName='Watch' linkUrl='/#'/>
              <Footerlink linkName='TV' linkUrl='/#'/>
              <Footerlink linkName='Music' linkUrl='/#'/>
              <Footerlink linkName='AirPods' linkUrl='/#'/>
              <Footerlink linkName='HomePod' linkUrl='/#'/>
              <Footerlink linkName='iPod touch' linkUrl='/#'/>
              <Footerlink linkName='Accessories' linkUrl='/#'/>
              <Footerlink linkName='Gift Cards' linkUrl='/#'/>
            </ul>
          </div> 
          <div className="links-wrapper-2 col-sm-12 col-md">
            <h3 onClick={() => this.toggleSection('Services')}>Services
            <span className="toggle-icon">{this.state.isOpen['Services'] ? '' : ''}</span>
            </h3>
            <ul style={{ display: this.state.isOpen['Services'] ? 'block' : 'none' }}>
            <Footerlink linkName='Apple Music' linkUrl='/#'/>
            <Footerlink linkName='Apple News+' linkUrl='/#'/>
            <Footerlink linkName='Apple TV+' linkUrl='/#'/>
            <Footerlink linkName='Apple Arcade' linkUrl='/#'/>
            <Footerlink linkName='Apple Card' linkUrl='/#'/>
            <Footerlink linkName='iCloud' linkUrl='/#'/>
            </ul>
            <h3 onClick={() => this.toggleSection('Account')}>Account
            <span className="toggle-icon">{this.state.isOpen['Account'] ? '' : ''}</span>
            </h3>
            <ul style={{ display: this.state.isOpen['Account'] ? 'block' : 'none' }}>
            <Footerlink linkName='Manage Your Apple ID' linkUrl='/#'/>
            <Footerlink linkName='Apple Store Account' linkUrl='/#'/>
            <Footerlink linkName='iCloud.com' linkUrl='/#'/>
            </ul>					
          </div> 
          <div className="links-wrapper-3 col-sm-12 col-md">
            <h3 onClick={() => this.toggleSection('AppleStore')}>Apple Store
            <span className="toggle-icon">{this.state.isOpen['AppleStore'] ? '' : ''}</span>
            </h3>
            <ul  style={{ display: this.state.isOpen['AppleStore'] ? 'block' : 'none' }}>
            <Footerlink linkName='Find a Store' linkUrl='/#'/>
            <Footerlink linkName='Genius Bar' linkUrl='/#'/>
            <Footerlink linkName='Today at Apple' linkUrl='/#'/>
            <Footerlink linkName='Apple Camp' linkUrl='/#'/>
            <Footerlink linkName='Field Trip' linkUrl='/#'/>
            <Footerlink linkName='Apple Store App' linkUrl='/#'/>
            <Footerlink linkName='Refurbished and Clearance' linkUrl='/#'/>
            <Footerlink linkName='Financing' linkUrl='/#'/>
            <Footerlink linkName='Apple Trade In' linkUrl='/#'/>
            <Footerlink linkName='Order Status' linkUrl='/#'/>
            <Footerlink linkName='Shopping Help' linkUrl='/#'/>
            </ul>
          </div>  
          <div className="links-wrapper-4 col-sm-12 col-md">
            <h3 onClick={() => this.toggleSection('ForBusiness')}>For Business
            <span className="toggle-icon">{this.state.isOpen['ForBusiness'] ? '' : ''}</span>
            </h3>
            <ul  style={{ display: this.state.isOpen['ForBusiness'] ? 'block' : 'none' }}>
            <Footerlink linkName='Apple and Business' linkUrl='/#'/>
            <Footerlink linkName='Shop for Business' linkUrl='/#'/>
            </ul>		
            <h3 onClick={() => this.toggleSection('ForEducation')}>For Education
            <span className="toggle-icon">{this.state.isOpen['ForEducation'] ? '' : ''}</span>
            </h3>
            <ul style={{ display: this.state.isOpen['ForEducation'] ? 'block' : 'none' }}>
            <Footerlink linkName='Apple and Education' linkUrl='/#'/>
            <Footerlink linkName='Shop for College' linkUrl='/#'/>
            </ul>
            <h3 onClick={() => this.toggleSection('ForHealthcare')}>For Healthcare
            <span className="toggle-icon">{this.state.isOpen['ForHealthcare'] ? '' : ''}</span>
            </h3>
            <ul style={{ display: this.state.isOpen['ForHealthcare'] ? 'block' : 'none' }}>
            <Footerlink linkName='Manage Your Apple ID' linkUrl='/#'/>
            <Footerlink linkName='Apple Store Account' linkUrl='/#'/>
            <Footerlink linkName='iCloud.com' linkUrl='/#'/>
            </ul>	
            <h3 onClick={() => this.toggleSection('ForGovernment')}>For Government
            <span className="toggle-icon">{this.state.isOpen['ForGovernment'] ? '' : ''}</span>
            </h3>
            <ul style={{ display: this.state.isOpen['ForGovernment'] ? 'block' : 'none' }}>
              <li><a href="#">Apple and Education</a></li>
              <li><a href="#">Shop for College</a></li>
            </ul>
          </div> 
          <div className="links-wrapper-5 col-sm-12 col-md">
            <h3 onClick={() => this.toggleSection('AppleValues')}>Apple Values
            <span className="toggle-icon">{this.state.isOpen['AppleValues'] ? '' : ''}</span>
            </h3>
            <ul style={{ display: this.state.isOpen['AppleValues'] ? 'block' : 'none' }}>
            <Footerlink linkName='Find a Store' linkUrl='/#'/>
            <Footerlink linkName='Genius Bar' linkUrl='/#'/>
            <Footerlink linkName='Today at Apple' linkUrl='/#'/>
            <Footerlink linkName='Apple Camp' linkUrl='/#'/>
            <Footerlink linkName='Field Trip' linkUrl='/#'/>
            <Footerlink linkName='Apple Store App' linkUrl='/#'/>
            </ul>
            <h3 onClick={() => this.toggleSection('AboutApple')}>About Apple
            <span className="toggle-icon">{this.state.isOpen['AboutApple'] ? '' : ''}</span>
            </h3>
            <ul style={{ display: this.state.isOpen['AboutApple'] ? 'block' : 'none' }}>
            <Footerlink linkName='Find a Store' linkUrl='/#'/>
            <Footerlink linkName='Genius Bar' linkUrl='/#'/>
            <Footerlink linkName='Today at Apple' linkUrl='/#'/>
            <Footerlink linkName='Apple Camp' linkUrl='/#'/>
            <Footerlink linkName='Field Trip' linkUrl='/#'/>
            <Footerlink linkName='Apple Store App' linkUrl='/#'/>
            </ul>						
          </div> 
        </div>
        <div className="my-apple-wrapper"> 
          More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>
        <div className="copyright-wrapper row">
          <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
            Copyright &copy; 2020 Apple Inc. All rights reserved.
          </div>
          <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
            <ul>
            <Footerlink linkName='Privacy Policy' linkUrl='/#'/>
            <Footerlink linkName='Terms of Use' linkUrl='/#'/>
            <Footerlink linkName='Sales and Refunds' linkUrl='/#'/>
            <Footerlink linkName='Legal' linkUrl='/#'/>
            <Footerlink linkName='Site Map' linkUrl='/#'/>
            </ul>
          </div>
          <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
            <div className="flag-wrapper"><img src={flag}alt=''/></div> <div className="footer-country-name">United States</div> 
          </div>
        </div>
      </div>
    </footer> 
    )
  }
}
export default Footer