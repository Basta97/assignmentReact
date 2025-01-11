
function Contact() {
  return (
    <div>
   
      <div className="container vh-100 d-flex flex-column justify-content-center gap-3 ">
        <h1 className="text-center">conatct section</h1>
        <div className="d-flex justify-content-center align-items-center gap-2">
            <div className="line-p"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line-p"></div>
          </div>
           <form>
            <input type="text" placeholder="User Name" className="form-control w-100"  />
            <br />
            <input type="text" placeholder="User Age" className="form-control w-100" />
            <br />
            <input type="text" placeholder="User Email" className="form-control w-100" />
            <br />
            <input type="text" placeholder="User Password" className="form-control w-100" />
            <br />
            <button className="btn btn-outline-primary">Send Message</button>
           </form>


      </div>

    </div>
  );
}

export default Contact;
