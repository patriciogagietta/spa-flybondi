import { useEffect } from 'react';
import useDatos from '../hooks/useDatos';

import { Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@mui/material';

function Vuelos() {
    const { vueloOrigenDestino, isLoading, vuelosTotal, ordenarPorPrecio, page, handleChangePage, handleChangeTipe, isActive, vuelosPorPagina, origen, destino } = useDatos()

    const button = (tipo) =>{
        return isActive === tipo ? 'bg-zinc-900 text-amber-400' : 'bg-amber-400 hover:bg-zinc-900 hover:text-amber-400'
    } 

    if (isLoading) {
        return <div className='text-white text-center mt-40'> Loading... </div>
    }

    return (
        <>
            <h2 className='text-amber-400 sm:text-4xl text-2xl font-bold text-center mt-6'>
                Vuelos de {origen} a {destino}
            </h2>

            <div className='flex flex-col md:flex-row justify-center items-center mt-10 gap-6'>
                <div>
                    <p className='text-amber-400'> ORDENAR POR PRECIO: </p>
                </div>
                <div className='flex flex-col sm:flex-row gap-6'>
                    <button onClick={() => { handleChangeTipe('default') }} className={`min-w-min max-w-max text-center border-2 font-bold py-2 px-4 rounded duration-500 text-sm ${button('default')}`}> Mas Recientes </button>
                    <button onClick={() => { handleChangeTipe('menor') }} className={`min-w-min max-w-max text-center border-2 font-bold py-2 px-4 rounded duration-500 text-sm ${button('menor')}`}> Menor a Mayor </button>
                    <button onClick={() => { handleChangeTipe('mayor') }} className={`min-w-min max-w-max text-center border-2 font-bold py-2 px-4 rounded duration-500 text-sm ${button('mayor')}`}> Mayor a Menor </button>
                </div>
            </div>

            <div className='mx-5 text-xs sm:text-base md:max-w-2xl md:mx-auto mt-10 flex flex-col gap-9 mb-16 overflow-x-auto'> 
                <table className='border border-amber-400 text-white'>
                    <thead>
                        <tr>
                            <th> Origen </th>
                            <th> Destino </th>
                            <th> Precio </th>
                            <th> Fecha </th>
                            <th> Disponibilidad </th>
                        </tr>
                    </thead>
                    <tbody>
                        {vuelosTotal.map((vuelo, i) => (
                            <tr key={i} className='text-center border-t border-amber-400'>
                                <td className='p-2 sm:p-4'> {vuelo.origin}</td>
                                <td className='p-2 sm:p-4'> {vuelo.destination}</td>
                                <td className='p-2 sm:p-4'> ${vuelo.price}</td>
                                <td className='p-2 sm:p-4'> {vuelo.data}</td>
                                <td className='p-2 sm:p-4'> {vuelo.availability} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination
                page={page}
                count={Math.ceil(vueloOrigenDestino.length / vuelosPorPagina)}
                variant="outlined"
                color="primary"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    '& .MuiPaginationItem-root': { color: 'yellow', }
                }}
                onChange={handleChangePage}
                renderItem={(item) => (
                    <PaginationItem
                        component={Link}
                        to={`/${origen}/${destino}${item.page === 1 ? '' : `?page=${item.page}`}`}
                        {...item}
                    />
                )}
            />
            <div className='mb-40 flex justify-center mt-14'>
            <Link
                to='/'
                className='bg-amber-400 min-w-min max-w-max text-center border-2 font-bold py-2 px-4 rounded hover:bg-zinc-900 hover:text-amber-400 duration-500'>
                Volver a Inicio
            </Link>
            </div>
        </>
    );
}

export default Vuelos