import React, { useState } from 'react';
import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, paciente, setPaciente, eliminarPaciente }) => {
  const [buscador, setBuscador] = useState(''); // Estado para el valor de búsqueda

  // Filtrar los pacientes basados en el valor de búsqueda
  const pacientesFiltrados = pacientes.filter((paciente) =>
    paciente.nombre.toLowerCase().includes(buscador.toLowerCase())
  );

  const handleBuscadorChange = (e) => {
    // Actualizar el estado de búsqueda cuando el usuario ingrese texto
    setBuscador(e.target.value);
  };

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {/* Resto de tu código */}
      <div className='mb-5 flex flex-col items-center'>
        <label htmlFor='buscador' className='block text-gray-700 font-bold uppercase text-center'>
          Buscar mascota
        </label>
        <input
          id='buscador'
          type='search'
          placeholder='Nombre de la Mascota'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md max-w-[300px]'
          value={buscador}
          onChange={handleBuscadorChange} // Manejar cambios en el valor de búsqueda
        />
      </div>

      {pacientesFiltrados.length > 0 ? (
        // Mostrar los pacientes filtrados
        <>
          {pacientesFiltrados.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        // Mostrar un mensaje si no hay resultados
        <>
          <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Agrega Pacientes{' '}
            <span className='text-indigo-600 font-bold'>para mostrar en pantalla</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
