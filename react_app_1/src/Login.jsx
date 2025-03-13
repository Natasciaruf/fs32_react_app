import React from "react"
import { useNavigate } from "react-router"

 function Login(){

    let navigate = useNavigate()

const handleSubmit = (event) => {
event.preventDefault()
//simulo una login controllando il local storage

const userData = localStorage.getItem("userData")
const parseData = JSON.parse(userData)


if(parseData.email == event.target[0].value){
    // rimando l'utente alla Dashboard 
    navigate("/dashboard")
}else{
alert("Email e password errati")
}



}
    return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Accedi!</h1>

      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
        ipsa culpa autem, at itaque nostrum!
      </p>
    </div>

    <form onSubmit={handleSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">

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
          Non hai un account?
          <a className="underline" href="Register">Registrati</a>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Login 
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



export default Login