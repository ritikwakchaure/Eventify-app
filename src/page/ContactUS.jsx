import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <Header />
      
      <main className="container py-5 my-4">
        {/* Page Header */}
        <section className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3">Contact <span className="text-danger">Eventify</span></h1>
          <p className="lead text-muted">We'd love to hear from you! Reach out with questions, feedback, or partnership inquiries.</p>
        </section>

        <div className="row justify-content-center">
          
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-lg-5">
                <h2 className="h4 fw-bold mb-4">Get in Touch</h2>
                
                <div className="d-flex mb-4">
                  <div className="me-3 text-primary">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="h6 fw-bold">Our Office</h3>
                    <p className="mb-0">123 Event Plaza, Suite 500<br />Vesu, Surat - 395003</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="me-3 text-primary">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="h6 fw-bold">Phone</h3>
                    <p className="mb-0">+1 (800) 123-4567<br />Mon-Fri, 9am-6pm IST</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="me-3 text-primary">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="h6 fw-bold">Email</h3>
                    <p className="mb-0">
                      <Link href="mailto:support@eventifyapp.com" className="text-decoration-none">
                        support@eventifyapp.com
                      </Link>
                      <br />
                      <Link href="mailto:partnerships@eventifyapp.com" className="text-decoration-none">
                        partnerships@eventifyapp.com
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="me-3 text-primary">
                    <FaClock size={24} />
                  </div>
                  <div>
                    <h3 className="h6 fw-bold">Social Media</h3>
                    <div className="d-flex gap-3 fs-3">
                      <Link href="#" className="text-decoration-none text-dark">
                        <FaFacebookSquare/>
                      </Link>
                      <Link href="#" className="text-decoration-none text-dark">
                       <FaSquareXTwitter/>
                      </Link>
                      <Link href="#" className="text-decoration-none text-dark">
                       <FaSquareInstagram/>
                      </Link>
                      <Link href="#" className="text-decoration-none text-dark">
                       <FaLinkedin/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </main>

      <Footer />
    </>
  );
}