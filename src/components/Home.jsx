import useDatos from '../hooks/useDatos';

import {Link} from 'react-router-dom'

function Home() {

    const { vuelos } = useDatos()

    const vuelosNoRepetidos = [];

    // verificar si el vuelo actual no se encuentra en vuelosNoRepetidos - si no se encuentra lo pushea
    vuelos.forEach((vuelo) => {
        const noRepetido = !vuelosNoRepetidos.some((v) => v.origin === vuelo.origin && v.destination === vuelo.destination);

        if (noRepetido) {
            vuelosNoRepetidos.push(vuelo);
        }
    });

    return (
        <>
            <div className='mx-5'>
                <header className="text-amber-400 text-3xl lg:text-6xl sm:text-5xl font-bold text-center">
                    <h1>Bienvenido a Flybondi</h1>
                </header>

                <div className="grid max-w-xs mb-40 lg:mb-0 lg:max-w-4xl lg:grid-cols-3 sm:max-w-xl sm:grid-cols-2 mx-auto gap-4 mt-24">
                    {vuelosNoRepetidos.map((vuelo, i) => (
                        <article key={i} className="p-8 bg-amber-200 flex flex-col gap-2 rounded">
                            <p> Origen: <span className="font-bold"> {vuelo.origin} </span> </p>
                            <p> Destino: <span className="font-bold"> {vuelo.destination} </span> </p>
                            <Link 
                                to={`/${vuelo.origin}/${vuelo.destination}`} 
                                className="bg-amber-400 min-w-min  mt-6 font-bold py-2 px-4 rounded hover:bg-zinc-900 hover:text-amber-400 duration-500">
                                Ver Vuelos
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home