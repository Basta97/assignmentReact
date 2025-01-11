import img from "../assets/homeImg.svg";

function Home() {
  return (
    <>
    
      <div>
        <div className="container-fluid d-flex flex-column justify-content-center home-sec align-items-center  vh-100 gap-3 text-white">

          <img className="imgHome" src={img} alt="image" />
          <h1>Start Framework </h1>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <div className="line"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
      
    </>
  );
}export default Home
