import Link from "next/link";
import Layout from "../components/Layout";
import { skills, projects, publics } from "../profile";
const Index = () => (
  <Layout>
    
    <style jsx>{`
body {
  font-family: 'Ubuntu', sans-serif;
  padding: auto;
  margin: auto;
}

html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
.wave-container {
  position: relative;
  background: #09f;
  color: #fff;
  text-align: center;
  overflow: hidden;
}
.wave-container > svg {
  display: block;
}
.btnn {
  border-radius: 20px;
}
.c{
  border-radius: 20px;
}
.cp{
  border-radius: 20px;
}
.img{
  border-radius: 20px 20px 0px 0px;
}
.ic {
  transition: 0.5s;
}
.c:hover {
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
}

.c::before,
.c::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform 0.3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: "";
  pointer-events: none;
}
.c::before {
  transform-origin: left top;
}
.c:hover::after {
  transform-origin: right bottom;
}
.c:hover::before,
.c:hover::after,
.c:focus::before,
.c:focus::after {
  transform: scale3d(1, 1, 1);
}
.center {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.overflow {
    border-radius: 20px 20px 0px 0px;
    overflow: hidden;
  }
  
  .overflow .card-img-top {
    transform: scale(1);
    transition: all 0.2s ease-in-out;
  }
  
  .overflow .card-img-top:hover {
    transform: scale(1.8);
  }
  
  #nprogress .bar {
    background: #ff5367 !important;
  }
  
  #nprogress .spinner-icon {
    border-top-color: #ffbb00;
    border-left-color: #ffbb00;
  }
    `}</style>
    {/* Header*/}
    <div
      className="landing-header wave-container"
      style={{ background: "#252E3C" }}
    >
      <div className="container">
        <header className="row">
          <div className="col-md-12">
            <div
              className="card card-body"
              style={{ border: 0, background: "#252E3C" }}
            >
              <div className="row">
                <div className="col-md-4">
                  {publics.map(({header},i)=>(
                    <img key={i}
                    src={header}
                    alt="Victor Alvarado"
                    className="img-fluid"
                  />
                  ))}
                  
                </div>
                <div className="col-md-8">
                  <h1>
                    <strong>Hola, soy Victor Alvarado!</strong>
                  </h1>
                  <h3>Soy un desarrollador y programador</h3>
                  <Link href="/contact">
                    <a className="btn btn-primary btn-lg btnn">Contactar</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
      <path
        fill="#252E3C"
        d="M0,96L120,85.3C240,75,480,53,720,53.3C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
    {/* Habilidades */}
    <div className="container">
      <div className="row">
        <h1 className="text-center">
          <strong>Habilidades</strong>
        </h1>
        {skills.map(({ img, skill }, i) => (
          <div className="col-md-2 py-4" key={i}>
            <div className="card item-card card-block ic c">
              <h4 className="card-title text-center">
                <strong>{skill}</strong>
              </h4>
              <div className="center">
                <img key={img} src={img} width="50%" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row py-4">
        <h1 className="text-center">
          <strong>Proyectos</strong>
        </h1>
        <div className="col-md-12 py-4">
          <div className="car car-body bg-light">
            <div className="row">
                {projects.map(({title,description,img,url1,url2,boton1,boton2},i)=>(
                  <div className="col-md-4 py-4" key={i}>
                  <div className="card cp">
                    <div className="center overflow">
                      <img src={img} alt={title} className="img img-fluid card-img-top"/>
                    </div>
                    
                    <div className="card-body">
                      <h3>{title}</h3>
                      <p>{description}</p>
                          <a href={url1} className="btn btn-primary btnn" style={{display: `${boton1}`}}><i className="bi bi-arrow-up-right-square-fill"></i> Demo</a>
                          <a href={url2} className="btn btn-primary btnn" style={{display: `${boton2}`}}><i className="bi bi-github"></i> Github</a>
                      
                    </div>
                  </div>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Proyectos */}
  </Layout>
);
export default Index;
