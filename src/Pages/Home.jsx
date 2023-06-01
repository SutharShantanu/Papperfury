import React from 'react';
import Slider from "../Component/Slider";
import Data from "../Data";
import style from "./Style/style.css";
import { MultipleSlidesExample } from "../Component/Slidebar";

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
            <div className='deal'>
                <h2>What The Fry Deal</h2>
                <div className='deal_card'>
                    <div>
                        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_1.jpg" alt="" />
                        <h4>For ₹79 at 80% Off</h4>
                        <p>Cotton Hand Towel Set</p>
                    </div>
                    <div>
                        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_2.jpg" alt="" />
                        <h4>For ₹119 at 91% Off</h4>
                        <p>Classic Wall Clock</p>
                        <p></p>
                    </div>
                    <div>
                        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_3.jpg" alt="" />
                        <h4>For ₹349 at 65% Off</h4>
                        <p>Geometric Bedding</p>
                    </div>
                    <div>
                        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_4.jpg" alt="" />
                        <h4> For ₹129 at 86% Off</h4>
                        <p>Wall Shelf + Key Holder</p>
                    </div>
                </div>
            </div>
            <div className='stat21'>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner1x_1901.jpg" alt="" />
            </div>
            <div className='insta_card'>
                <h2>Inspire And Get Inspired</h2>
                <MultipleSlidesExample />
            </div>
            <div className='trend'>
                <h2>Trends In Furniture And Decor</h2>
                <div className='trend_card'>
                    <div>
                        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_1.jpg" alt="" />
                        <h4>Pantone Color Sofas</h4>
                        <p>Explore Starting ₹10393 <span>&#10140;</span></p>
                    </div>
                    <div>
                        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_2.jpg" alt="" />
                        <h4>Gentle Light Shelf Lamp</h4>
                        <p>Explore Starting ₹1999 <span>&#10140;</span></p>
                        <p></p>
                    </div>
                    <div>
                        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_3.jpg" alt="" />
                        <h4>Maximalist Pieces By Chumbak</h4>
                        <p>Explore Starting ₹4495 <span>&#10140;</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home