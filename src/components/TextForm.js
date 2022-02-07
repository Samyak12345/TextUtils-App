import React,{ useState } from "react";


export default function TextForm(props) {

  const handleUpClick = () =>{
    //  console.log("Upper Case was Clicked." + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("All the text has been converted to uppercase", "sucess");
  }

  const handleDownClick= () =>{
    let sol = text.toLowerCase();
    setText(sol);
    props.showAlert("All the text has been converted to lowercase", "sucess");
  }

  const handleClearClick= () =>{
    let sol = "";
    setText(sol);
    props.showAlert("All the text has been removed", "sucess");
  }

  const handleCopyClick= () =>{
    // var sol = document.getElementById("textBox");
    // sol.select();
    navigator.clipboard.writeText(text);
    props.showAlert("All the text has been copied", "sucess");
  }

  const handleExtraSpaces= () =>{
    let sol = text.split(/[ ]+/);
    setText(sol.join(" "));
    props.showAlert("All the extra spaces has been removed", "sucess");
  }

  const handleOnChange = (event) =>{
    //console.log("On change");
    setText(event.target.value);
 }
 




  const[text, setText] = useState("");
  return (
     
      <>
       <div className="container" style = {{color: props.mode==='dark'?'white':'black' }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="textBox" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'#13466e':'white' ,color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
        </div>
        <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleDownClick}>Convert to Lowercase</button>
        <button disabled = {text.length === 0}  className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear</button>
        <button disabled = {text.length === 0}  className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy</button>
        <button disabled = {text.length === 0}  className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black' }}>
           <h2>Your Text Summary</h2> 
           <p>{text.split(/\s+/).filter((element)=> {return element.length !==0}).length} words and {text.length} characters</p>
           <p>you will going to take{0.008*text.split(" ").filter((element)=> {return element.length !==0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text in textbox to preview"}</p>
        </div>
      </>
  )
}
