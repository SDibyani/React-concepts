
// import React,{useState,useEffect} from 'react'

// function Searchbar() {
//   const [query,setQuery]= useState("");
//   const [debouncedQuery, setDebouncedQuery] = useState("");
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers]= useState([]);



//   //debouncing logic
//   useEffect(()=>{
//     const timer = setTimeout(()=>{
//         setDebouncedQuery(query);
//     },500);
//        return () => clearTimeout(timer);
//   },[query]);



//   //data fetching
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=> res.json())
//     .then((data)=>{
//         setUsers(data);
//         setFilteredUsers(data);
//     });
//   },[]);


//   //data filtering
//   useEffect(()=>{
//     const filtered = users.filter((user)=>
//      user.name.toLowerCase().includes(debouncedQuery.toLowerCase())
//     );
//     setFilteredUsers(filtered);
//   },[debouncedQuery, users]);


//   return (
//     <div>
        
//         <h1>Debouncing Implementation</h1>
//         <input
//          type="text"
//          placeholder='search...'
//          value={query}
//          onChange={(e)=> setQuery(e.target.value)}
//          className='border px-2 py-2 rounded-xl'
        
        
//         />


//         <table className='w-full'>
//             <thead className='bg-yellow-700'>
//                 <tr>
//                     <th >Name</th>
//                     <th >Email</th>
//                     <th >City</th>
                  
//                 </tr>
//             </thead>

//             <tbody>
//                 {filteredUsers.length >  0 ? (
//                     filteredUsers.map((user)=>(
//                         <tr key={user.id}>
//                         <td>{user.name}</td>
//                         <td>{user.email}</td>
//                         <td>{user.address.city}</td>
//                         </tr>
//                     ))
//                 ) :(
//                     <tr>
//                         <td>
//                             No users found
//                         </td>
//                     </tr>
//                 )}
//             </tbody>
//         </table>
       
//     </div>
//   )
// }

// export default Searchbar




// A structured React learning repository covering core concepts such as useState, useEffect, props, forms, debouncing, and API integration, with clean code examples and mini projects designed for interview preparation and practical understanding.







import React,{useState,useEffect} from 'react'

function Searchbar() {

   //without debounce
   const [query1,setQuery1] = useState("");
   const [filtered1, setFiltered1]= useState([]);


   //with debounce
   const [query2, setQuery2]= useState("");
   const [debouncedQuery, setDebouncedQuery] = useState("");
   const [filtered2, setFiltered2] = useState([]);

   const [users,setUsers]= useState([]);


   //fetch API once
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((data)=>{
        setUsers(data);
        setFiltered1(data);
        setFiltered2(data);
    });

   },[]);



   //without debouncing

   useEffect(()=>{
    console.log("without debounce:", query1);

    const result = users.filter((user)=>
      user.name.toLowerCase().includes(query1.toLowerCase())
    );
    setFiltered1(result);

   },[query1,users]);



   //debounce logic

   useEffect(()=>{
    const timer = setTimeout(()=>{
        setDebouncedQuery(query2);

    }, 500);

    return ()=> clearTimeout(timer);
   },[query2]);



   //with debouncing
   useEffect(()=>{
    console.log("with debouncing" , debouncedQuery);

    const result = users.filter((user)=>
    user.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setFiltered2(result);
   },[debouncedQuery,users]);





  return (
     <div className="p-6 grid md:grid-cols-2 gap-6">
      
      {/* WITHOUT DEBOUNCE */}
      <div>
        <h2 className="text-xl font-bold mb-2">Without Debouncing </h2>

        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded mb-4"
          value={query1}
          onChange={(e) => setQuery1(e.target.value)}
        />

        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            {filtered1.map((user) => (
              <tr key={user.id}>
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
              {/* WITH DEBOUNCE */}
      <div>
        <h2 className="text-xl font-bold mb-2">With Debouncing </h2>

        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded mb-4"
          value={query2}
          onChange={(e) => setQuery2(e.target.value)}
        />

        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            {filtered2.map((user) => (
              <tr key={user.id}>
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
  )
}

export default Searchbar