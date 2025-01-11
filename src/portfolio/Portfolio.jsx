import img1 from "../assets/p1.png";
import img2 from "../assets/p2.png";
import img3 from "../assets/p3.png";
function Portfolio() {
  return (
    <div>
       
      <div className="container   d-flex flex-column justify-content-center align-items-center  vh-100 gap-3">
        <h1 className="text-center porto">PORTFOLIO COMPONENT</h1>
        <div className="d-flex justify-content-center align-items-center gap-2">
            <div className="line-p"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line-p"></div>
          </div>
        <div className="row g-4  mt-2 nor">
          <div className="col-lg-4 col-md-6">
            <div className="inner position-relative">
              <img src={img1} alt="" />
              <div className="layer">
              <i className="fa-solid fa-plus fs-1"></i>
              </div>
            </div>
          </div>
        
        <div className="col-lg-4 col-md-6">
          <div className="inner position-relative">
            <img src={img2} alt="" />
            <div className="layer">
            <i className="fa-solid fa-plus fs-1"></i>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="inner position-relative">
            <img src={img3} alt="" />
            <div className="layer">
            <i className="fa-solid fa-plus fs-1"></i>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="inner position-relative">
            <img src={img1} alt="" />
            <div className="layer">
            <i className="fa-solid fa-plus fs-1"></i>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="inner position-relative">
            <img src={img2} alt="" />
            <div className="layer">
            <i className="fa-solid fa-plus fs-1"></i>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="inner position-relative ">
            <img src={img3} alt="" />
            <div className="layer">
            <i className="fa-solid fa-plus fs-1"></i>

            </div>
          </div>
        </div>
      </div>
    </div>	
    </div>
  );
}

export default Portfolio;
