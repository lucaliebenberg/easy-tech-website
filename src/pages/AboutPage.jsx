import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-8 my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column",  margin: "0 auto", gap: "32px" }}>
          <p className="" style={{ textAlign: 'center', maxWidth: '48rem', fontSize: '1.2rem',  margin: "0 auto"}}>
          Easy Tech Life is dedicated to revolutionizing the electronic retail landscape across Africa by simplifying technology and making it more accessible to everyone. As a leading provider of electronics, Easy Tech Life aims to streamline the tech shopping experience, ensuring that cutting-edge gadgets and devices are within reach for individuals and communities throughout the continent. With a commitment to innovation and customer satisfaction, Easy Tech Life endeavors to empower Africans with the tools and knowledge to embrace technology and enhance their lives in meaningful ways.
          </p>
          <div style={{ width: "auto", height: "auto", margin: "0 auto" }}>
            <img src={"/images/about-1.jpg"} alt="Africa wallpaper" width={"500"} style={{ borderRadius: "8px"}} />
          </div>
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