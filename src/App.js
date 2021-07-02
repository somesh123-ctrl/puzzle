import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers"
import "./App.css";

function App() {
  const [imgUrl, setImgUrl] = useState("")

  useEffect(() => {
   
    setImgUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdWYJ4SZhMyM6Q0J_59Mi5Dsxces6LfYG3Q&usqp=CAU")

  }, [])

  const p1 = (e) => {
    setImgUrl("https://media.gettyimages.com/photos/portrait-of-shahrukh-khan-picture-id499342275?k=6&m=499342275&s=612x612&w=0&h=x4CsJ1la_kPuLMWgpcsEyco_1UrOmzriFslfzxJJ860=")
  
  }


  const p2 = (e) => {
    setImgUrl("https://www.dailyexcelsior.com/wp-content/uploads/2019/08/page7-2-1.jpg")
  
  }
  const p3 = (e) => {
    setImgUrl("https://www.pinkvilla.com/files/styles/gallery-section/public/ananya_panday_to_sara_ali_khan_8_bollywood_divas_who_aced_the_nose_ring_look_like_a_pro_mainimage.jpg?itok=y-DkFxXf")
  
  }
  const p4 = (e) => {
    setImgUrl("https://media1.popsugar-assets.com/files/thumbor/DXOp9jNWMAzvL2JU8RGSKMaRlOQ/100x186:2597x2683/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/19/645/n/1922398/1e6f7d0c5e4d4661be7a90.42323789_/i/millie-bobby-brown-16th-birthday-post-mental-health.jpg")
  
  }
  const p5 = (e) => {
    setImgUrl("https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/millie-bobby-brown-opens-up-about-dealing-with-anxiety-what-her-film-enola-holmes-taught-her-more.jpg?itok=88ziKa30")
  
  }
  const p6 = (e) => {
    setImgUrl("https://pyxis.nymag.com/v1/imgs/7ca/881/7f727ef8d29529b66c4b8866ce9fe3a605-01-thor-ragnarok.rsquare.w700.jpg")
  
  }


  return (
    <div className="App">
      <h1>React sliding puzzle</h1>
      <Board imgUrl={imgUrl} />
      <table>
     <th> <button onClick={p1} >1</button></th>

     <th> <button onClick={p2} >2</button></th>
     <th> <button onClick={p3} >3</button></th>
     <th><button onClick={p4} >4</button></th>
     <th> <button onClick={p5} >5</button></th>
     <th><button onClick={p6} >6</button></th>

     </table>


    </div>
  );
}

export default App;