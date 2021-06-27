import React from 'react';
import { useForm } from "react-hook-form";

const ContactForm = ({doGetSendEmail}: any) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        doGetSendEmail(data);
    }
    return (
        <div className="row block-9 justify-content-center mb-5">
            <div className="col-md-8 mb-md-5">
                <h2 className="text-center">If you got any questions <br/>please do not hesitate to send us a
                    message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-5 contact-form">
                    <div className="form-group">
                        <input type="text" className="form-control" {...register("name")} placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" {...register("email")} placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" {...register("subject")} placeholder="Subject"/>
                    </div>
                    <div className="form-group">
                                <textarea cols={30} rows={7} className="form-control" {...register("message")} placeholder="Message"
                                          defaultValue={""}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
