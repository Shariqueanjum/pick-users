import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";

function App() {

 
 const userInfo=useSelector(store=>store.user.info);
 const dispatch=useDispatch();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [newUser , setNewUser]=useState("");
  const [isHover , setIsHover]=useState(false);
  const [filteredData , setFilteredData]=useState([...userInfo])

  //console.log(filteredData,"this is filterd data")
    
  const handleUserClick =(id)=>{
   
    const clickedUser = filteredData.find(user => user.id === id);
    //console.log(clickedUser,"this is clicked user")
    
    setSelectedUsers([...selectedUsers,clickedUser]);
     dispatch(removeUser(id));

     setFilteredData((prevFilteredData) => {
      const indexToRemove = prevFilteredData.findIndex(item => item.id === id);
      if (indexToRemove !== -1) {
        const newFilteredData = [...prevFilteredData];
        newFilteredData.splice(indexToRemove, 1);
        return newFilteredData;
      }
      return prevFilteredData;
    });
    
     setNewUser("");
  }

  const handleAddData=(id)=>{
    const indexToRemove=selectedUsers.findIndex(item=>item.id===id)
    const data=selectedUsers.splice(indexToRemove,1);
    //console.log(data);
    dispatch(addUser(...data));
    setFilteredData([...filteredData,...data])
    

  }

  const handleFilterData=(e)=>{
    
    setNewUser(e.target.value);
    const limitedData=(userInfo.filter((data)=>data.name.toLowerCase().includes(e.target.value)));
   // console.log(limitedData);
    setFilteredData(limitedData)
  }


  

  return (
    <div >
      <h1 className="text-5xl font-bold text-purple-700  ml-[30rem] mt-7">Pick Users</h1>
     
     <div className="mt-16 ml-[16rem] flex flex-row border-b-4 border-blue-600">

     <div className=" p-3  flex flex-row flex-wrap">

      {selectedUsers.map((info,index)=>(
        <div className=" m-1 flex flex-row items-center border border-gray-200 rounded-2xl bg-slate-300" key={index}>
        <img className="w-8"  src={info?.icon}/>
        <p className="p-1">{info?.name}</p>

        <button onClick={()=>handleAddData(info?.id)}
        className="p-1">❌</button>
        </div>
      ))}


     </div>

      <input 
      onFocus={()=>setIsHover(true)}
      value={newUser}
      placeholder="Add new user..."
      type="text" 
      onChange={(e)=>handleFilterData(e)}
      className=" p-3    focus:outline-none"/>

     </div>

{filteredData.length>0 && isHover &&
<ul className="ml-[24rem]  border border-black overflow-y-scroll w-[30%] h-60 rounded-xl" onFocus={()=>setIsHover(false)}>
  { filteredData.map((info,index) => (

      <li className=" p-3"   key={index}  onClick={()=>handleUserClick(info?.id)}>
        <div className="flex flex-row items-center">
        <img className="w-8" src={info?.icon} alt={info?.name} />
        <p className="text-sm font-bold text-black ">{info?.name}</p>
        <p className="text-sm font-medium ml-8">{info?.email}</p>
        </div>
      </li>


  )) }
</ul>

  }





    </div>
  );
}

export default App;
