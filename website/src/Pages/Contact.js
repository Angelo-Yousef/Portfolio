import React from 'react';
import Sidenavbar from '../Components/Sidenavbar';
import '../global.css';

function Contact() {
  return (
    <div>
      <Sidenavbar />
      <div className="wrapper">
        <div className="contact-info">
          <div>
            <h1 className="huge-title">Telefonnummer</h1>
            <div className="text-box">
              <div className="text-wrapper">
                <div className="segment">
                  <div className="textbox">
                    <p>123456789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="huge-title">Mail</h1>
            <div className="text-box">
              <div className="text-wrapper">
                <div className="segment">
                  <div className="textbox">
                    <p>Loremipsum@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="huge-title">Sociala Medier</h1>
            <div className="text-box">
              <div className="text-wrapper">
                <div className="segment">
                  <div className="textbox">
                    <p>Linkedin: Lorem ipsum</p>
                    <p>Instagram: Lorem ipsum</p>
                    <p>Facebook: Lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h1 className="huge-title">Kontakta Mig</h1>
          <form>
            <div>
              <input
                placeholder="Namn"
                className="input-field"/>
            </div>

            <div>
              <input
                placeholder="E-post"
                className="input-field"/>
            </div>

            <div>
              <textarea
                placeholder="Ditt meddelande"
                className="textarea-field">
              </textarea>
            </div>

            <button 
              type="submit" 
              className="submit-button">
              Skicka
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
