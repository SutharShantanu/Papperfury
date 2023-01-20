import { Slidecss } from './Slidecss.jsx'

export const Smallslide = ({ image, para,icon }) => {
    return <Slidecss>
        <div>
            <img src={image} alt="" style={{borderRadius:"8px"}}/>
        </div>
        <div>
            <p style={{margin:"20px", color:"grey"}} >
                {para}
            </p>
        </div>
        <div>
            <img src={icon} alt="" style={{
                width: "30px", margin:"auto",}} />
        </div>
    </Slidecss>
}
