import React from 'react';

const ContactInfor = () => {
    return (
        <div className="row d-flex mb-5 contact-info justify-content-center">
            <div className="col-md-8">
                <div className="row mb-5">
                    <div className="col-md-4 text-center py-4">
                        <div className="icon">
                            <span className="fa fa-map"/>
                        </div>
                        <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                    <div className="col-md-4 text-center border-height py-4">
                        <div className="icon">
                            <span className="fa fa-phone"/>
                        </div>
                        <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                    </div>
                    <div className="col-md-4 text-center py-4">
                        <div className="icon">
                            <span className="fa fa-paper-plane"/>
                        </div>
                        <p><span>Email:</span> <a
                            href="https://preview.colorlib.com/cdn-cgi/l/email-protection#50393e363f10293f2522233924357e333f3d"><span
                            className="__cf_email__"
                            data-cfemail="abc2c5cdc4ebd2c4ded9d8c2dfce85c8c4c6">[email&nbsp;protected]</span></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfor;
