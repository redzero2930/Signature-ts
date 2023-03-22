import './App.css';
import React,{useRef, useState} from "react"
import SignaturePad from 'react-signature-canvas'

function App() {

  const[imageURL, setImageURL] = useState<string | null>(null);
  const signPad = useRef<SignaturePad>(null);

  const clear = () => {
    signPad.current?.clear();
  }

  const save = () => {
    setImageURL(signPad.current?.getTrimmedCanvas().toDataURL("image/png") ?? null)
  }

  return(
    <div className='App'>
      <div  className='signature'>
        <SignaturePad
          canvasProps={{ width: 200, height: 100, className: 'sigCanvas' }}
          ref={signPad}
        />

        <button className='btn-clear' onClick={clear}>Clear</button>
        <button className='btn-save' onClick={save}>Save</button>
      </div>
      <br/>
      <br/>

      {
        imageURL ? (<img
          className='saveSignature'
          src={imageURL}
          alt='my signature'
          style={{width: 200, height: 100}}
          />) : null
        
      }
      
    </div>
  );
    
}

export default App;