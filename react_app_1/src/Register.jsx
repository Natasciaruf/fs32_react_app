import React, { useState } from "react";
import { useNavigate } from "react-router";


function Register(){

let navigate = useNavigate()


 //handleSubmit viene utilizzato quando l'utente invia il form
 const handleSubmit = (event) => {
  event.preventDefault()

  //recupero userData dal localStorage che contiene tutti gli utenti registrati 
  const dataElement = localStorage.getItem("userData")
  const allUsers = JSON.parse(dataElement)

const newData =  {
name: event.target[0].value,
surname: event.target[1].value,
email: event.target[2].value,
password: event.target[3].value,
}



if(newData.name == null || newData.name == ""){
    alert("Inserisci il nome per poter continuare ")
    return 
} else if(newData.surname == null || newData.surname == ""){
  alert("Inserisce il cognome per poter continuare")
  return
} else if(newData.email == null || newData.email== ""){
alert("Inserisci l'email per continuare")
return
} else if(newData.password == null || newData.password == ""){
  alert("Inserisci la password per continuare")
  return
}

//verifico se l'email non è già presente tra gli utenti registrati, se si impedisco la registrazione

  allUsers.forEach((element)=> {
    if(element.email == newData.email){
    alert("email gia presente") 
    }
    })




//aggiungo il nuovo utente all'array di utenti
allUsers.push(newData)

localStorage.setItem("userSession", JSON.stringify(newData))

//in una app reale avrei inviato i dati al back-end tramite fetch, aspettando la risposta positiva o meno
const dataString= JSON.stringify(allUsers)
localStorage.setItem("userData", dataString)
// console.log(event.target[0].value)

alert("Registazione avvenuta con successo!")

// rimando l'utente alla Dashboard 
navigate("/dashboard")
 }


    return(

<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Registrati adesso!</h1>

      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
        ipsa culpa autem, at itaque nostrum!
      </p>
    </div>

    <form onSubmit={handleSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">

        <div>
        <label htmlFor="name" className="sr-only">Nome</label>
        <div className="relative">
          <input
            name="name"
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
            placeholder="Inserisci il tuo nome"
          />
        </div>
        </div>

        <div>
        <label htmlFor="surname" className="sr-only">Cognome</label>

        <div className="relative">
          <input
          name="surname"
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
            placeholder="Inserisci il tuo cognome"
          />
        </div>

        </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
          name="email"
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
            placeholder="Inserisci la tua email"
          />

        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
          name="password"
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
            placeholder="Inserisci password"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Hai già un account?
          <a className="underline" href="login">Accedi</a>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Registrati
        </button>
      </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src="https://media.gettyimages.com/id/1369227756/it/foto/ridacchiando-attraverso-il-centro-commerciale.jpg?s=612x612&w=gi&k=20&c=Kxrk3-ssq1uUlh9aDNPQV8s8-RLE2KNk6LBMEnnPtOg="
      className="absolute inset-0 h-full w-full object-cover"

    />
  </div>
</section>
    )
}

export default Register;