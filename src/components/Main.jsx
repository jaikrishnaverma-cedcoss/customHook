import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

const Main = () => {
  const [state, setState] = useState({ url: 'https://jsonplaceholder.typicode.com/todos/1', payload: '', method: "GET" })

  const { data, extractDataFromApi } = useFetch()

  // UseEffect dependent on Method
  useEffect(() => {
    extractDataFromApi(state.url, state.payload, state.method)
  }, [state])

  // To Check json formate
  function isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  // form submit handler
  const submitted = (e) => {
    e.preventDefault();
    let payload = e.target.payload.value
    console.log(payload);
    if (isJsonString(e.target.payload.value) || e.target.payload.value == '')
      setState({ url: e.target.url.value, payload: payload, method: e.target.method.value })
    else
      alert("enter valid json string")
  }
  console.log(data)
  return (
    <>
      <form action="" className='col m2 w30' onSubmit={submitted}>
        
        <label htmlFor="">Api Url</label>
        <input type="text" className="m1 hm0 line brd full p1" name="url" id="" placeholder='Ex. https://jsonplaceholder.typicode.com/todos/1' />
        
        <label htmlFor="">JSON Payload</label>
        <textarea type="text" className="m1 hm0 line brd full p1" cols="30" rows="10" name="payload" id="" placeholder='Enter Payload in json Formate' />
        
        <label htmlFor="">Method</label>
        <select className="m1 hm0 brd line full p1" name="method">
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
       
        <button type="submit" href="#data" className=' m1 hm0 brd p1 dbg'>Submit</button>
        
        <p className=" p1">To Convert your data in json formate: <a target="_blank" href="https://jsonformatter.curiousconcept.com/#">Click Here</a></p>
     
      </form>

      <div className="col w70">
       
        <h2 className='m1'>Your Response:</h2>
        {(data !== null && data.errors != undefined) ? <h3 style={{ color: "red" }}>{JSON.stringify(data.errors.message)}</h3> : <h3></h3>}
       
        <p className="line p1 full lbg" id="data"><pre>{JSON.stringify(data, null, 4)}</pre></p>
      </div>

    </>
  )
}

export default Main