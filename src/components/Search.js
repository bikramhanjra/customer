import { useState } from "react"

export default function Search({setSearch}) {
    const [input, setInput] = useState("")

    const handleChange = (e) =>{
        setInput(e.target.value)
        console.log(input)
    }

    const handleSearchBtn = () =>{
        setSearch(input)
    }
    
  return (
    <div>
        <form class="d-flex" role="search">
        <input value={input} onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={handleSearchBtn} class="btn btn-outline-dark">Search</button>
      </form>
    </div>
  )
}
