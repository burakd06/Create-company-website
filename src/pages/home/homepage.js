import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="image-box">
        <img
          src="/images/homebg.jpg"
          alt="Background"
          className="home-image"
        />
        <div className="text-overlay">
          <p>Şirketinizi Kurun Büyütün ve Yönetin</p>
        </div>
        <p id="altaciklama">
          Hemen şimdi şirketinizi kurun, muhasebe ve vergi işlemlerinizi yönetin
        </p>
            <Link to="/login">
          <button className="start-button">Hemen Başlayın</button>
        </Link> 
      </div>

      <div className="bottom-box">
        <div className="icon-box iconleft">
          <Icon icon="material-symbols:receipt-outline" className="icon" />
          <p className="icon-text">Yönetim Paneli</p>
        </div>
        <div className="icon-box iconmiddle">
          <Icon icon="gridicons:create" className="icon" />
          <p className="icon-text">Şirket Kuruluşu</p>
        </div>
        <div className="icon-box iconright">
          <Icon icon="guidance:office" className="icon" />
          <p className="icon-text">Yönetim</p>
        </div>
      </div>

    </div>
  );
}
export default Home;
