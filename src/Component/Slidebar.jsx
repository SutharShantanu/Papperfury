import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import { Smallslide } from "./Smallslide";

export const MultipleSlidesExample = () => {
    const properties = {
        duration: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        indicators: false,
        transitionDuration: 400,
        infinite: true,
    };

    return (
        <div>
            <div>
                <Slide {...properties}>
                    <div>
                        <Smallslide
                            image={
                                "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_295373551-1674215485.webp?w=400&func=cover&ci_url_encoded=1"
                            }
                            para={"@Artsy_Home"}
                            icon={"https://cdn-icons-png.flaticon.com/512/1384/1384063.png"}
                        />
                    </div>
                    <div>
                        <Smallslide
                            image={
                                "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_295373551-1674215485.webp?w=400&func=cover&ci_url_encoded=1"
                            }
                            para={"@Homei_Made"}
                            icon={"https://cdn-icons-png.flaticon.com/512/1384/1384063.png"}
                        />
                    </div>
                    <div>
                        <Smallslide
                            image={"https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_519368795-1674215485.jpg?w=400&func=cover&ci_url_encoded=1"}
                            para={"@Veena_rathi_interiors"}
                            icon={"https://cdn-icons-png.flaticon.com/512/1384/1384063.png"}
                        />
                    </div>
                    <div>
                        <Smallslide
                            image={
                                "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_938533732-1674157114.webp?w=400&func=cover&ci_url_encoded=1"
                            }
                            para={"@Art_craft_repeat"}
                            icon={"https://cdn-icons-png.flaticon.com/512/1384/1384063.png"}
                        />
                    </div>
                    <div>
                        <Smallslide
                            para={"@Yashvini"}
                            image={
                                "https://cdn.taggbox.com/v7/https%3A%2F%2Fcloud.taggbox.com%2Fmedia%2F2022%2F07%2F183375%2Fimage_452754194-1674215553.webp?w=400&func=cover&ci_url_encoded=1"
                            }
                            icon={"https://cdn-icons-png.flaticon.com/512/1384/1384063.png"}
                        />
                    </div>
                </Slide>
            </div>
        </div>
    );
};
