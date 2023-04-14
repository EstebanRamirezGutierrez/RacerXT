const Formulario = () => {
    return (
        <>
            <div className="md:w-1/2 lg:w-2/5">
                <h2 className="text-white text-3xl text-center">Seguimiento de Cotizaciones</h2>
        
                <p className="text-white text-lg mt-5 text-center mb-10">
                    Añade Compras y {""}
                    <span className="text-indigo-600 font-bold text-lg">Modificalos</span>
                </p>

                <form className="bg-white shadow-md rounded-lg py-10 px-5">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="Moto" className="block text-gray-600 uppercase font-bold">
                                Marca de Moto:
                            </label>
                            <input id="Moto" type="text" placeholder="Marca de la Moto" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="Comprador" className="block text-gray-600 uppercase font-bold">
                                Nombre del Comprador:
                            </label>
                            <input id="Comprador" type="text" placeholder="Nombre del Comprador" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-gray-600 uppercase font-bold">
                                Email Comprador:
                            </label>
                            <input id="email" type="email" placeholder="Email del Comprador" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                        </div>                       
                        <div className="mb-5">
                            <label htmlFor="Accesorios Adicionales" className="block text-gray-600 uppercase font-bold">
                                Accesorios Adicionales:
                            </label>
                            <textarea id="Accesorios Adicionales" className="border-2 w-full p-2 mt-2
                             placeholder-gray-400 rounded-md" placeholder="Describe los los accesorios"/>
                        </div>
                        <input type="submit" className="bg-indigo-600 w-full p-3 
                        text-white uppercase font-bold hover:bg-indigo-500 cursor-pointer transition-colors" />
                        
                        
                    
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario