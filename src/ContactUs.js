import "./css/ContactUs.css";

export const ContactUs = () => {
  return (
    <div className="contact-us-div1">
      <img className="rectangle-icon21" alt="" src="rectangle-561.svg" />
      <b className="send-messege-b1">Send Messege</b>
      <div className="page-header-div3">
        <b className="we-love-receiving-messages-fro1">
          We love receiving messages from you, we are waiting for it.
        </b>
        <div className="contact-div9">CONTACT</div>
        <div className="icon-list-div2">
          <img className="frame-icon6" alt="" src="frame-9.svg" />
          <div className="phone-div1">Phone</div>
          <b className="b4">+62 1234 8921</b>
        </div>
        <div className="icon-list-div3">
          <img className="frame-icon7" alt="" src="frame-10.svg" />
          <div className="email-div1">Email</div>
          <a
            className="supportmerklabstld1"
            href="mailto:support@collosal.tld"
            target="_blank"
          >
            support@MerkLabs.tld
          </a>
        </div>
      </div>
      <div className="horizontal-line-div7" />
      <div className="contact-form-div1">
        <div className="rectangle-div109" />
        <div className="field-div6">
          <div className="form-control-div3" />
          <div className="label-div3">Name</div>
        </div>
        <div className="field-div7">
          <div className="form-control-div3" />
          <div className="label-div4">Subject</div>
        </div>
        <div className="field-div8">
          <div className="rectangle-div110" />
          <div className="tell-us-your-problem1">Message</div>
        </div>
        <div className="field-div9">
          <div className="form-control-div3" />
          <div className="label-div5">Email</div>
        </div>
      </div>
    </div>
  );
};
