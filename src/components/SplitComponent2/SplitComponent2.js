import React from "react";
import ImageBackground from "../../assets/crianca2.png";
import ImageButton from "../../assets/button-video.png";


const SplitComponent2 = () => {
    const handleImageClick = () => {
        // Substitua 'https://video-centro-integrar.com' com o link de redirecionamento desejado
        window.location.href = "https://video-centro-integrar.com";
      };

    return (
    <div className="right-section">
        <div className="background-image">
          <img src={ImageBackground} className="background" />
        </div>
        <div className="overlay-image" onClick={handleImageClick}>
          <img src={ImageButton} className="overlay" />
        </div>
      </div>
)

}

export default SplitComponent2;