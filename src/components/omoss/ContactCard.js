import React from 'react';
import { ContactCardWrapper } from './styles/ContactCardWrapper';

const ContactCard = () => (
    <ContactCardWrapper className="contact_info">
            <h2>NY YORK VINTAGE</h2>
            <div className="address">
                Thorvald Meyers gate 50 <br />
                Oslo, Norway <br /><br />
                <a href="mailto:post@nyyork.no">post@nyyork.no</a> <br />
                +47 486 00 974 <br />
            </div>
    </ContactCardWrapper>
);

export default ContactCard;