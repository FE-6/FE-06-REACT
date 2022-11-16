import React from 'react'
import { useState } from "react";

export default function FormData() {
    const [state, setState] = useState("");
    const fileInput = React.createRef();
  
    const handleSubmit = (a) => {
      alert(`Hi ${state}`);
      a.preventDefault();
    alert(`Nama file: ${e.fileInput.current.files[0].name}`);
    };
  
    const handleChange = (e) => {
      setState(e.target.value);
    };
  
    return (
      <div>
        <h2>Add Berita</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                Judul Berita:
                <input type="text" value={state} onChange={handleChange} className="form-control"/>
                </label>
            </div>
            <div>
                <label>
                Name:
                <input type="text" value={state} onChange={handleChange} className="form-control"/>
                </label>
            </div>
            <div>
                <label>
                Judul Berita:
                <input type="text" value={state} onChange={handleChange} className="form-control"/>
                </label>
            </div>
            <div>
                <label>
                Gambar 
                <input type="file" ref={fileInput} style={{marginLeft: "5px"}} className="form-control"/>
                </label>
            </div>
          
        </form>
        <div className="mb-2">
            <input type="submit" value="Submit" className="btn btn-secondary" />
        </div>
        <div className="mb-2">
        <input type="submit" value="Back" className="btn btn-primary" />
        </div>
      </div>
    );
  }