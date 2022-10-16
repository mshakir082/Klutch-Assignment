import React,{useState,useEffect} from 'react'
import Dashbord from './Dashbord';
import data from './matches.json'
import './navbar.css'
import { BsFilterLeft } from 'react-icons/bs';
const Navbar = () => {
  const [value,setData]=useState(data);
  const [season,setSeason]=useState(true);
  const [city,setCity]=useState(true);
  const [date,setDate]=useState(true);
  const [team1,setTeam1]=useState(true);
  const [team2,setTeam2]=useState(true);
  const [toss_winner,setTosswinner]=useState(true);
  const [toss_decision,setToss_decision]=useState(true);
  const [result,setResult]=useState(true);
  const [inputText,setInputText]=useState('');
  const [text,setText]=useState('');
  const [type,setType]=useState('');

const handleClick=(el)=>{
  if(el==="season"){
    setText(Number(inputText));
    setType(el);
    setSeason(!season);
  }
  else if(el==='city'){
    setText(inputText);
    setType(el);
    setCity(!city);
  } else if(el==='date'){
    setText(inputText);
    setType(el);
    setData(!date);
  }else if(el==='team1'){
    setText(inputText);
    setType(el);
    setTeam1(!team1);
  }else if(el==='team2'){
    setText(inputText);
    setType(el);
    setTeam2(!team2);
  }else if(el==='toss_winner'){
    setText(inputText);
    setType(el);
    setTosswinner(!toss_winner);
  }else if(el==='toss_decision'){
    setText(inputText);
    setType(el);
    setToss_decision(!toss_decision);
  }else if(el==='result'){
    setText(inputText);
    setType(el);
    setResult(!result);
  }
 
  
}
useEffect(()=>{
  
if(text!=='' && type==="season"){
   let newValue=data.filter((el)=>el.season===text);
    setData(newValue);
    setText('')
    }if(text!=='' && type==="city"){
      let newValue=data.filter((el)=>el.city===text);
      setData(newValue);
      setText('')
    }if(text!=='' && type==="date"){
      let newValue=data.filter((el)=>el.date===text);
      setData(newValue);
      setText('')
    }
    if(text!=='' && type==="team1"){
      let newValue=data.filter((el)=>el.team1===text);
      setData(newValue);
      setText('')
    }
    if(text!=='' && type==="team2"){
      let newValue=data.filter((el)=>el.team2===text);
      setData(newValue);
      setText('')
    }
    if(text!=='' && type==="toss_winner"){
      let newValue=data.filter((el)=>el.toss_winner===text);
      setData(newValue);
      setText('')
    }if(text!=='' && type==="toss_decision"){
      let newValue=data.filter((el)=>el.toss_decision===text);
      setData(newValue);
      setText('')
    }
    if(text!=='' && type==="result"){
      let newValue=data.filter((el)=>el.result===text);
      setData(newValue);
      setText('')
    }
 },[text,type])

  return (
    <section>
    <h1>IPL Dashboard</h1>
     <div class="tbl-header">
       <table cellpadding="0" cellspacing="0" border="0">
         <thead>
           <tr className='tr1'>
           <th>
           {season==true?<>
           <div className='flexDiv'>
           <div>season</div> 
           <div style={{fontSize:'20px',cursor:'pointer'}} onClick={()=>setSeason(!season)}><BsFilterLeft/></div>
           </div>
           </>
           :
           <>
           <div className="container" >
             <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
             <div className="buttonDiv">
              <button onClick={()=>setSeason(!season)}>X</button>
              <button onClick={()=>handleClick("season")}>apply</button>
             </div>
            </div>
           </>
          }
           </th>
           <th>
               
           {city==true?<>
           <div className='flexDiv'>
           <div>city</div> 
           <div style={{fontSize:'20px',cursor:'pointer'}} onClick={()=>setCity(!city)}><BsFilterLeft/></div>
           </div>
           </>
           :
           <>
           <div className="container" >
             <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
             <div className="buttonDiv">
              <button onClick={()=>setCity(!city)}>X</button>
              <button onClick={()=>handleClick('city')}>apply</button>
             </div>
            </div>
           </>}
               </th>
               <th>
               {date==true?<>
                <div className='flexDiv'>
                <div>date</div> 
                <div style={{fontSize:'20px',cursor:'pointer'}} onClick={()=>setDate(!date)}><BsFilterLeft/></div>
                </div>
                </>
                :
                <>
                <div className="container" >
                  <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
                  <div className="buttonDiv">
                    <button onClick={()=>setDate(!date)}>X</button>
                    <button onClick={()=>handleClick('date')}>apply</button>
                  </div>
                </div>
                </>}
               </th>
               <th>
               {team1==true?<>
                <div className='flexDiv'>
                <div>team1</div> 
                <div style={{fontSize:'20px',cursor:'pointer'}} onClick={()=>setTeam1(!team1)}><BsFilterLeft/></div>
                </div>
                </>
                :
                <>
                <div className="container" >
                  <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
                  <div className="buttonDiv">
                    <button onClick={()=>setTeam1(!team1)}>X</button>
                    <button onClick={()=>handleClick('team1')}>apply</button>
                  </div>
                </div>
                </>}
               </th>
               <th>
               {team2==true?<>
                <div className='flexDiv'>
                <div>team2</div> 
                <div style={{fontSize:'20px',cursor:'pointer'}} onClick={()=>setTeam2(!team2)}><BsFilterLeft/></div>
                </div>
                </>
                :
                <>
                <div className="container" >
                  <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
                  <div className="buttonDiv">
                    <button onClick={()=>setTeam2(!team2)}>X</button>
                    <button onClick={()=>handleClick('team2')}>apply</button>
                  </div>
                </div>
                </>}
               </th>
               <th>
               {toss_winner==true?<>
                <div className='flexDiv'>
                <div>toss_winner</div> 
                <div style={{fontSize:'20px',cursor:'pointer'}} onClick={()=>setTosswinner(!toss_winner)}><BsFilterLeft/></div>
                </div>
                </>
                :
                <>
                <div className="container" >
                  <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
                  <div className="buttonDiv">
                    <button onClick={()=>setTosswinner(!toss_winner)}>X</button>
                    <button onClick={()=>handleClick('toss_winner')}>apply</button>
                  </div>
                </div>
                </>}
               </th>
               <th>
               {toss_decision==true?<>
                <div className='flexDiv'>
                <div>toss_decision</div> 
                <div style={{fontSize:'20px',cursor:'pointer'}} onClick={()=>setToss_decision(!toss_decision)}><BsFilterLeft/></div>
                </div>
                </>
                :
                <>
                <div className="container" >
                  <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
                  <div className="buttonDiv">
                    <button onClick={()=>setToss_decision(!toss_decision)}>X</button>
                    <button onClick={()=>handleClick('toss_decision')}>apply</button>
                  </div>
                </div>
                </>}
               </th>
               <th>
               {result==true?<>
                <div className='flexDiv'>
                <div>result</div> 
                <div style={{fontSize:'20px',cursor:'pointer'}} onClick={()=>setResult(!result)}><BsFilterLeft/></div>
                </div>
                </>
                :
                <>
                <div className="container" >
                  <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
                  <div className="buttonDiv">
                    <button onClick={()=>setResult(!result)}>X</button>
                    <button onClick={()=>handleClick('result')}>apply</button>
                  </div>
                </div>
                </>}
               </th>
           </tr>
         </thead>
       </table>
     </div>
     <div class="tbl-content">
     <Dashbord value={value}/>
     </div>
   </section>
  )
}

export default Navbar
