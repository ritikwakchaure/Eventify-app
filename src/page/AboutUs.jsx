import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      
      <main className="container py-3 my-4">
       
        <section className="row align-items-center mb-4">
          <div>
            <h1 className="display-4 fw-bold mb-4">About <span className="text-danger">Eventify</span></h1>
            <p className="lead text-muted">
              Bringing people together through amazing events since 2024
            </p>
          </div>
        </section>

        <section className="py-4 mb-5">
          <h2 className="fw-bold mb-4 border-bottom pb-2">Our Story</h2>
          <div className="row">
            <div className="col-lg-8">
              <p className="fs-5">
                Eventify started when our founders noticed how hard it was to find and organize local meetups. 
                What began as a small project to connect tech enthusiasts in our hometown has grown into 
                a platform that helps communities worldwide discover and create unforgettable gatherings.
              </p>
              <p className="fs-5">
                From coding meetups to book clubs, food tastings to hiking groups, we've helped facilitate 
                over 10,000 events across 50+ cities. Our team is passionate about creating spaces where 
                people can share interests, learn new skills, and build meaningful connections.
              </p>
            </div>
          </div>
        </section>

        <section className="py-4 mb-5 bg-light rounded-4 p-4">
          <h2 className="fw-bold mb-4 border-bottom pb-2">What We Believe</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-3 h-100 bg-white rounded-3 shadow-sm">
                <h3 className="h5 text-danger fw-bold">👥 Community First</h3>
                <p>Real connections happen when people meet face-to-face. We build tools that make these moments easier to create.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 h-100 bg-white rounded-3 shadow-sm">
                <h3 className="h5 text-danger fw-bold">🌎 Local Focus</h3>
                <p>Every city has its own vibe. We help local organizers build communities that reflect what makes their area special.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 h-100 bg-white rounded-3 shadow-sm">
                <h3 className="h5 text-danger fw-bold">🎯 Purpose-Driven</h3>
                <p>Whether it's networking, learning, or just having fun - every event on Eventify brings people together with purpose.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 mb-5">
          <h2 className="fw-bold mb-4 border-bottom pb-2">Join the Movement</h2>
          <div className="row">
            <div className="col-lg-8">
              <p className="fs-5">
                Eventify is more than a platform - we're a community of organizers and attendees who believe in the power of bringing people together. 
              </p>
              <p className="fs-5">
                Whether you're looking to attend your first meetup or launch your own event series, we've got the tools and support to help you succeed. 
                Let's create something amazing together!
              </p>
           </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}