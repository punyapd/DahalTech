import React from 'react'
import Footer from './Footer'
function Contact() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container con_form">
        <div className="row">
          <div className="co-10 col-md-6 mx-auto">
             <div className="mb-3">
               <form action="">
                 <label className="form-label">Name</label>
                 <input type="text" name="" id="" className="form-control" />
                 <label className="form-label">Phone NO.</label>
                 <input type="number" name="" id="" className="form-control" />
                 <label className="form-label">Email Address</label>
                 <input type="email" name="email" id="email" className="form-control" />
                 <label className="form-label">Your Message</label>
                 <textarea name="text" id="" cols="30" rows="10" className='form-control'></textarea><br/>
                 <div className='text-center'><input type="submit" value="Submit"  className='btn btn-danger'/></div>
               </form>
             </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact