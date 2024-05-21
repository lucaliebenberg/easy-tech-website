import React from 'react'
import { Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-8 my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column",  margin: "0 auto", gap: "32px" }}>
          <h2>Welcome to New Tech</h2>
          <p className="" style={{ textAlign: 'center', maxWidth: '48rem', fontSize: '1.2rem',  margin: "0 auto"}}>
          At New Tech, we're passionate about harnessing the power of technology to drive innovation and progress. Our mission is to provide cutting-edge solutions, expert insights, and top-notch products to help individuals and businesses thrive in a rapidly evolving digital landscape.
          </p>

          <h2>Our Story</h2>
          <p className="" style={{ textAlign: 'center', maxWidth: '48rem', fontSize: '1.2rem',  margin: "0 auto"}}>
          Founded in 2022 New Tech has grown into a trusted hub for all things tech. We're dedicated to staying at the forefront of technological advancements, ensuring our customers receive the best guidance and support possible.
          </p>
          
          <h2>Our Values</h2>
          <p className="" style={{ textAlign: 'center', maxWidth: '48rem', fontSize: '1.2rem',  margin: "0 auto"}}>
          <ul>
            <li>Innovation: We embrace the latest technologies and ideas to stay ahead of the curve.</li>
            <li>Excellence: We strive for exceptional quality in everything we do.</li>
            <li>Customer-centric: Your success is our top priority.</li>
            <li>Collaboration: We work together to achieve great things.</li>
          </ul>
          </p>

          <p style={{ textAlign: 'center', fontWeight: 'bold' , maxWidth: '48rem', fontSize: '1.2rem',  margin: "0 auto"}}>
          Join the New Tech community today and discover a world of possibilities!
          </p>



          {/* <div style={{ width: "auto", height: "auto", margin: "0 auto" }}>
            <img src={"/images/about-1.jpg"} alt="Africa wallpaper" width={"500"} style={{ borderRadius: "8px"}} />
          </div> */}

        </div>

        {/* ---- products start ---- */}
        {/* <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div> */}
        {/* ---- products end ---- */}

      </div>
    </>
  )
}

export default AboutPage