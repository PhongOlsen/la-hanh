import React from 'react';
import ContactForm from "../../components/page/Contacts/components/ContactForm";
import ContactInfor from "../../components/page/Contacts/components/ContactInfor";
import Map from "../../components/page/Contacts/components/Map";
import Banner from "../../components/common/Banner";

const Contact = () => {
    return (
        <>
            <Banner
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
                title={'CONTACT'}
                content={'Contact'}
            />
            <section className="ftco-section contact-section">
                <div className="container">
                    <ContactForm/>
                    <ContactInfor/>
                    <Map/>
                </div>
            </section>
        </>
    );
}

export default Contact;
