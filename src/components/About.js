import React,{useState} from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle] =  useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    const myStyle = {
        color : props.mode === "dark"? "white":"#042743",
        backgroundColor : props.mode === "dark"? "rgb(26,74,104)":"white",
    }


  return (
    <div className="container" style={myStyle}>
        <h2 className='my-3'style={{color : props.mode === "dark"? "white":"#042743"}}>About Us</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
            <strong>Analyze your text </strong>
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}> Textutils gives you a way to analyze yoyr text uality and efficientntly, be it word count character or anything else.  </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
                <strong>Free to use </strong>
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze yoyr text uality and efficientntly, be it word count character or anything else.  
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
               <strong>Browswer Compatible</strong> 
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}> Textutils gives you a way to analyze yoyr text uality and efficientntly, be it word count character or anything else.  </div>
            </div>
        </div>
    </div>
</div>
  )
}
