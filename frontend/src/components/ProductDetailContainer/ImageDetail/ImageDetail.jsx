import '../ProductDetail.css'
import { useState } from 'react';
export default function ImageDetail({product}) {
    let src = product.thumbnail
    const [backgroundImage, setBackgroundImage] = useState([src])
    function pic1() {
        src = product.thumbnail
        const imgDetailChange = document.getElementById('imgDetail')
        imgDetailChange.src = src
        setBackgroundImage(src)
    }
    function pic2() {
        src = product.thumbnail
        const imgDetailChange = document.getElementById('imgDetail')
        imgDetailChange.src = src
        setBackgroundImage(src)
    }
    function pic3() {
        src = product.thumbnail
        const imgDetailChange = document.getElementById('imgDetail')
        imgDetailChange.src = src
        setBackgroundImage(src)
    }
    function pic4() {
        src = product.thumbnail
        const imgDetailChange = document.getElementById('imgDetail')
        imgDetailChange.src = src
        setBackgroundImage(src)
    }
    function pic5() {
        src = product.thumbnail
        const imgDetailChange = document.getElementById('imgDetail')
        imgDetailChange.src = src
        setBackgroundImage(src)
    }
    function pic6() {
        src = product.thumbnail
        const imgDetailChange = document.getElementById('imgDetail')
        imgDetailChange.src = src
        setBackgroundImage(src)
    }
    function pic7() {
        src = product.thumbnail
        const imgDetailChange = document.getElementById('imgDetail')
        imgDetailChange.src = src
        setBackgroundImage(src)
    }
    const magnifierHeight = 300
    const magnifieWidth = 300
    const zoomLevel = 1.5
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
    function mouseEnter(e) {
        const elem = e.currentTarget;
        const { width, height } = elem.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
    }
    function mouseMove(e) {
        const elem = e.currentTarget;
        const { top, left } = elem.getBoundingClientRect();
        const x = e.pageX - left - window.pageXOffset;
        const y = e.pageY - top - window.pageYOffset;
        setXY([x, y]);
    }
    function mouseLeave() {setShowMagnifier(false)}
    return (
        <div className='containerImageDetail'>
            <div className='imgMiniature'>
                <div className='containerImgMiniature'>
                    <img src={product.thumbnail} alt="" className='imgDetailMiniature mb-2' onMouseOver={pic1}/>
                    <img src={product.thumbnail} alt="" className='imgDetailMiniature mb-2' onMouseOver={pic2}/>
                    <img src={product.thumbnail} alt="" className='imgDetailMiniature mb-2' onMouseOver={pic3}/>
                    <img src={product.thumbnail} alt="" className='imgDetailMiniature mb-2' onMouseOver={pic4}/>
                    <img src={product.thumbnail} alt="" className='imgDetailMiniature mb-2' onMouseOver={pic5}/>
                    <img src={product.thumbnail} alt="" className='imgDetailMiniature mb-2' onMouseOver={pic6}/>
                    <img src={product.thumbnail} alt="" className='imgDetailMiniature mb-2' onMouseOver={pic7}/>
                </div>
            </div>
            <div className='imgMain'>
                <div className=''>
                    <img src={src} alt={product.title} className='imgDetail' onMouseEnter={mouseEnter} onMouseMove={mouseMove} 
                    onMouseLeave={mouseLeave} id='imgDetail'/>
                    <div 
                        style={{
                            display: showMagnifier ? "" : "none", 
                            position:"absolute",
                            pointerEvents:"none", 
                            height:`${magnifierHeight}px`, 
                            width:`${magnifieWidth}px`, 
                            top:`${y - magnifierHeight / 2}px`, 
                            left:`${x - magnifieWidth / 2}px`, 
                            opacity:"1", 
                            border:"1px solid lightgray",
                            backgroundColor:"white", 
                            backgroundImage: `url(${backgroundImage})`, 
                            backgroundRepeat:"no-repeat",
                            backgroundSize:`${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                            backgroundPositionX:`${-x * zoomLevel + magnifieWidth / 2}px`,
                            backgroundPositionY:`${-y * zoomLevel + magnifierHeight / 2}px`
                        }}>
                    </div>
                </div>
            </div>
        </div>
    );
}