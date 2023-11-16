import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        
        <div className="flex flex-col items-center text-2xl sm:text-3xl gap-32">
            <div className="mx-2 sm:mx-0 text-center mt-10">
                <h3 className="text-amber-400">Error 404</h3>
                <p className="text-amber-400">La ruta que buscas no existe</p>
            </div>
            <Link
                to='/'
                className='bg-amber-400 min-w-min max-w-max text-center border-2 font-bold py-2 px-4 rounded hover:bg-zinc-900 hover:text-amber-400 duration-500 text-xs sm:text-base'>
                Volver a Inicio
            </Link>
        </div>
    );
};

export default Error404;