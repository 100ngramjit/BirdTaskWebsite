import { Header } from "./Header";
import "./css/HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="hero-section-div1">
      <img className="bg-img-icon1" alt="" src="bg-img@2x.png" />
      <img className="hero-waves-icon1" alt="" src="hero-waves1.svg" />
      <div className="partner-div1">
        <img className="rectangle-icon22" alt="" src="rectangle-11.svg" />
        <img className="company-logo-icon1" alt="" src="company-logo1.svg" />
        <div className="heading-div1">
          <p className="blank-line-p2">&nbsp;</p>
          <p className="trusted-by-leading1">
            Trusted by Leading Dapp Teams and Enterprises
          </p>
        </div>
      </div>
      <div className="button-explore-more1">
        <img className="rectangle-icon23" alt="" src="rectangle-215.svg" />
        <b className="explore-more-b11">Explore More</b>
      </div>
      <div className="hero-text-div1">
        <div className="merklabs-blockchain-developmen2">
          <p className="blank-line-p2">
            MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS
          </p>
          <p className="trusted-by-leading1">&nbsp;</p>
        </div>
      </div>
      <div className="box-div1">
        <div className="pk194-abi-div1">PK194-ABI</div>
        <div className="san-francisco-div1">San Francisco</div>
        <img className="package-icon1" alt="" src="package.svg" />
      </div>
      <img className="stepper-status-icon1" alt="" src="stepper-status.svg" />
      <img className="social-media-icon1" alt="" src="social-media-icon.svg" />
      <img className="bitcoin-logo-bg1" alt="" src="bitcoin-logo-bg1.svg" />
      <img className="bitcoin-logo-icon1" alt="" src="bitcoinlogo1.svg" />
      <img className="header-bg-icon1" alt="" src="headerbg1.svg" />
      <Header />
    </div>
  );
};
