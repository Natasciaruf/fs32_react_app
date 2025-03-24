import React from "react";
import Navbar from "./Components/Navbar";

function Dashboard(){
//prendo i dati dell'utente che ha fatto l'accesso dal local storage
const dataLocalStorage = localStorage.getItem("userData")
const user = JSON.parse(dataLocalStorage)


    return(
       <>
       <Navbar/>
         <h1>Dashboard</h1>
        <h3>Ciao {user.name} {user.surname}</h3>
        </>
       
    )
}



export default Dashboard;