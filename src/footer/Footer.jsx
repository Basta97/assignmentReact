function Footer() {
  return (
    <div>
      <footer className="container-fluid d-flex  justify-content-center  align-item-center flex-wrap">
        <div className="d-flex justify-content-center align-items-center flex-column p-5">
          <h2>Location</h2>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column p-5">
          <h2>AROUND THE WEB</h2>
          <div className="d-flex gap-2">
            <i className="fab circle-b fa-facebook-f"></i>
            <i className="fab circle-b fa-twitter"></i>
            <i className="fab circle-b fa-linkedin-in"></i>
            <i className="fab circle-b fa-instagram"></i>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column p-5">
          <h2>AROUND THE WEB</h2>
          <div className="d-flex gap-2">
            <p>
            Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>
        
      </footer>
      <div className="text-center p-3 footer-c">
            <p className="text-white">Copyright © Your Website 2021</p>
        </div>
    </div>
  );
}

export default Footer;
