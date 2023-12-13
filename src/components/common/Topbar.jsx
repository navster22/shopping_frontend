import React from 'react'

export default function Topbar({setShowlogin}) {

  const setLogin = () => {
    let x = true
    console.log(x)
    setShowlogin(x)
  }

  return (
    <div className='topbar'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex flex-row-reverse">
                <button className='btn btn-success m-2' onClick={setLogin}>Login</button>
        </nav>
    </div>
  )
}
