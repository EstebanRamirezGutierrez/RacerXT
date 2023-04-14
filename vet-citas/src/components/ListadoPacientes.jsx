import Pacientes from "./Pacientes"


function ListadoPacientes() {
  return (
    <div className='w-1/2 lg:w-3/5'>
        <h2 className="text-white text-3xl text-center">Listado Vehiculos</h2>
        <p className="text-white text-xl mt-5 mb-10 text-center">Administra tus {''}
        <span className="text-indigo-600 font-bold">Vehiculos y Motos</span></p>
        <Pacientes />
        <div className="">
         <p>Nombre de la mascota: {''}
         <span>trosky</span>
         </p>

        </div>
    </div>
  )
}

export default ListadoPacientes