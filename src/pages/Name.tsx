import React from 'react'
import {useHistory} from 'react-router-dom'

const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("nama" , e.target.value)
}

const urlChange = () => {
    const nama = localStorage.getItem('nama')
    if(typeof nama == "undefined" || nama == null || nama == "") {
        alert("must be insert nama")
    } else {
        window.location.href = "/"
    }
}

const handleCancel = () => {
    localStorage.removeItem("nama")
    window.location.reload()
}

const Nama: React.FC = () => {
    const history = useHistory();
    const [nama, setNama] = React.useState("")
    return (
      <div className="container nama-wrap">
        <div className="form-nama">
          <h4>Input Nama</h4>
          <p className="text-center">To process please enter your name on form input</p>
          <input onChange={onHandleChange} type="text" />
          <div className="button-nama">
            <p onClick={urlChange} className="text-primary">lanjutkan</p>
            <p onClick={handleCancel} className="text-primary">cancel</p>
          </div>
        </div>
      </div>
    );
}

export default Nama