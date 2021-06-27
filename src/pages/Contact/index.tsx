import React, {useContext, useEffect} from 'react';
import ContactForm from "../../components/page/Contacts/components/ContactForm";
import ContactInfor from "../../components/page/Contacts/components/ContactInfor";
import Banner from "../../components/common/Banner";
import {ContactContext} from "../../contexts/ContactContext";

const Contact = () => {
    const {doGetSendEmail} = useContext(ContactContext);

    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <>
            <Banner
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
                title={'CONTACT'}
                content={'Contact'}
            />
            <section className="ftco-section contact-section">
                <div className="container">
                    <ContactForm doGetSendEmail={doGetSendEmail}/>
                    <ContactInfor/>
                </div>
            </section>
        </>
    );
}

export default Contact;
