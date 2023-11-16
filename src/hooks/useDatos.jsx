import dbFligths from '../../db.json'
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const useDatos = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const { origen, destino } = useParams(); 
    const [vuelos, setVuelos] = useState([]);
    const [vueloOrigenDestino, setVueloOrigenDestino] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [ordenarPorPrecio, setordenarPorPrecio] = useState(query.get('order') || 'default')
    const [page, setPage] = useState(parseInt(query.get('page') || '1', 10))
    const [isActive, setIsActive] = useState('default')

    useEffect(() => {
        const consultarapi = () => {
            setVuelos(dbFligths.flights)
        }
        consultarapi()
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const vuelosFiltrados = vuelos.filter(vuelo => vuelo.origin === origen && vuelo.destination === destino);

            setVueloOrigenDestino(vuelosFiltrados);
            setIsLoading(false);
        }, 200);

        return () => clearTimeout(timeout);
    }, [vuelos, origen, destino]);

    const copiaVuelos = [...vueloOrigenDestino].sort((a, b) => {
        if (ordenarPorPrecio === 'menor') {
            return a.price - b.price
        } else if (ordenarPorPrecio === 'mayor') {
            return b.price - a.price
        }

        return 0
    })

    const vuelosPorPagina = 10
    let indiceInicial = (page - 1) * vuelosPorPagina
    let indiceFinal = indiceInicial + vuelosPorPagina
    const vuelosTotal = copiaVuelos.slice(indiceInicial, indiceFinal)

    const handleChangePage = (e, value) => {
        setPage(value)
    }

    const handleChangeTipe = (tipoParam) => {
        setordenarPorPrecio(tipoParam)
        setIsActive(tipoParam)
    }

    return {
        vuelos,
        vueloOrigenDestino,
        isLoading,
        vuelosTotal,
        handleChangePage,
        handleChangeTipe,
        isActive,
        vuelosPorPagina,
        page,
        ordenarPorPrecio,
        origen,
        destino
    };
}

export default useDatos;