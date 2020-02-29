import React from 'react';
import { ContactFormWrapper } from './styles/ContactFormWrapper';

const ContactForm = () => (
    <ContactFormWrapper>


        <form name="contact" action="mailto:me@company.com" target="_new" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="field half first">
                <label htmlFor="name">Navn</label>
                <input type="text" id="name" name="name" placeholder="Fornavn, Etternavn" />
            </div>
            <div className="field half">
                <label htmlFor="email">E-post</label>
                <input type="email" id="email" name="email" placeholder="Din e-post" />
            </div>

            <div className="field">
                <label htmlFor="topic">Hva gjelder det?</label>
                <select id="topic" name="topic">
                    <option value="other">Andre ting</option>
                    <option value="where">Hvor kjøper dere klær?</option>
                    <option value="work">Kan jeg jobbe hos dere?</option>
                </select>
            </div>

            <div className="field">
                <label htmlFor="question">Ditt spørsmål</label>
                <textarea id="question" name="question" placeholder="Her kan du skrive ditt spørsmål til oss"></textarea>

            </div>
            <div className="actions">
                <input type="submit" value="SEND" className="special" />
      
            </div>
        </form>
    </ContactFormWrapper>
);

export default ContactForm;