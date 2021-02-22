import React,{useState}from 'react'
import './styles.css'
import {Search} from '@material-ui/icons'
function Search1() {
      const [input,setInput] = useState('')
      return (
            <div className="search1">
                              <input 
                               value={input}
                               onChange={e=>setInput(e.target.value)}
                               className="search_input1"
                               placeholder="Qidirish..."/>
                               <div className="search_icon1">
                                <Search/>
                               <button className="search_button1">Qidirish</button>
                               </div> 
                        </div>
      )
}

export default Search1

