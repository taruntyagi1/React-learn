import React,{useState} from 'react'

export default function TextForm() {

    const onHandle =()=>{
        let newtext = text.toUpperCase();
        
        setText(newtext)
        console.log(text)
    }
    const [text,setText] = useState('')

    const onchange =(e)=>{
        setText(e.target.value)
        console.log(e.target.value)

    }
    const clear =()=>{
        setText("")
    }

    

    
    return (
        
        <div className="text_form">
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Convert your text to uppercase</label>
                    <textarea className="form-control" value={text} onChange = {onchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className='btn btn-primary' onClick={onHandle}>Convert</button>
                    <button className='btn btn-primary' onClick={clear}>Clear text</button>
                </div>
            </div>


        </div>

    )
}
