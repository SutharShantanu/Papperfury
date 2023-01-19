import React from 'react';
import Slider from "../Component/Slider";
import Data from "../Data";
import style from "./Style/style.css";

const Home = () => {
    return (
        <>

            <div className="top">
                <div className='sliding'>
                    <Slider start={Data.banner.start} />
                </div>
                <div className='stat20'>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/RHS-WEB_2x_1301_16-jan.jpg" alt="" />
                </div>
            </div>
            <div className='ads'>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner1x_2712.jpg" alt="" />
            </div>
            <div className='room'>
                <h2>Shop by Room</h2>
                <div className='room_card'>
                    <div>
                        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_1.jpg" alt="" />
                        <p>Shop Living Room <span>&#10140;</span></p>
                    </div>
                    <div>
                        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_2.jpg" alt="" />
                        <p>Shop Bedroom <span>&#10140;</span></p>
                    </div>
                    <div>
                        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_3.jpg" alt="" />
                        <p>Shop Dining Room <span>&#10140;</span></p>
                    </div>
                    <div>
                        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_4.jpg" alt="" />
                        <p>Shop Study Room <span>&#10140;</span></p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home