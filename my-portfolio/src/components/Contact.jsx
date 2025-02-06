import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Contact Me</h2>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-custom">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;