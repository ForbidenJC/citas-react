
import {useState, useEffect} from 'react'
import Error from './Error';

export const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('Canino');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [tratamiento, setTratamiento] = useState('');
    const [buscardor, Setbuscardor] = useState('')

    const [error, setError] = useState(false)

    

    useEffect(()=>{
        if((Object.keys(paciente).length>0)){
            setNombre(paciente.nombre)
            setTipo(paciente.tipo)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setTratamiento(paciente.tratamiento)
            Setbuscardor(paciente.Setbuscardor)

        }
       
    },[paciente])
    

    

    const generarId=()=>{
        const random = Math.random().toString(36).substring(2)
        const fecha= Date.now().toString(36)
        return random+fecha
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        
        //validacion de formulario
        if(nombre === '' || tipo === '' ||propietario === '' || email === '' || fecha === '' || sintomas === '' || tratamiento === ''){
            console.log('hay al menos un campo vacio');
            setError(true)
            return;
        }
        //Regresa el error a False para eliminar la alerta.
        setError(false)
        //Objeto Paciente
        const ObjetoPaciente={
            nombre, 
            tipo,
            propietario, 
            email, 
            fecha, 
            sintomas, 
            tratamiento,
            buscardor
           
        }

        //SE PUEDE AGREGAR EL IF AL HOOK SI ESTA FUERA DEL RETURN 
        //EDITANDO EL REGISTRO
        if(paciente.id){
           //EDITANDO Registro
            ObjetoPaciente.id = paciente.id
          const pacientesActualizados = pacientes.map(pacienteState=>pacienteState.id === paciente.id? ObjetoPaciente: pacienteState)
          setPacientes(pacientesActualizados)
          setPaciente({})
        } else{
            //NUEVO Registro
            ObjetoPaciente.id = generarId()
            setPacientes([...pacientes, ObjetoPaciente])
        }
        

        

        //Reiniciar el formulario
        setNombre('')
        setTipo('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setTratamiento('')
        Setbuscardor('')
        
    }
    

  return (
    <div className='md:w-1/2 lg:w-2/5 mb-10'>
        <h2 className='font-black text-3xl text-center'>
         Seguimiento Pacientes
        </h2>
        <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y {''} 
        <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form className='bg-white shadow-md rounded-lg py-10 px-5 mx-5' onSubmit={handleSubmit} >
            {error && <Error><p>Todos los Campos son Obligatorios</p></Error>}
            <div className='mb-5'>
                <label htmlFor='mascota' className='block text-gray-700 font-bold uppercase'>Nombre Mascota</label>
                <input id='mascota' type="text" placeholder='Nombre de la Mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={nombre} onChange={ (e) => setNombre(e.target.value)} 
                />
            </div>
            <div className='mb-5 '>
                    <label htmlFor='tipo' className='block text-gray-700 font-bold uppercase'>Tipo de Mascota</label>
                    <select   id='tipo' className='w-[100%] p-1 bg-gray-100' value={tipo} onChange={(e) => setTipo(Array.from(e.target.selectedOptions, option => option.value))}>
                        <option value='canino'>Canino</option>
                        <option value='felino'>Felino</option>
                        <option value='bovino'>Bovino</option>
                        <option value='porcino'>Porcino</option>
                        <option value='otro'>Otro</option>
                    </select>
                </div>
            <div className='mb-5'>
                <label htmlFor='propietario' className='block text-gray-700 font-bold uppercase'>Nombre Propietario</label>
                <input id='propietario' type="text" placeholder='Nombre del Propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={propietario} onChange={ (e) => setPropietario(e.target.value)}/>
            </div>
            <div className='mb-5'>
                <label htmlFor='email' className='block text-gray-700 font-bold uppercase'>Email</label>
                <input id='email' type="email" placeholder='Email Contacto Propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={email} onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div className='mb-5'>
                <label htmlFor='alta' className='block text-gray-700 font-bold uppercase'>Alta</label>
                <input id='alta' type="date" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={fecha} onChange={ (e) => setFecha(e.target.value)}/>
            </div>
            <div className='mb-5'>
                <label htmlFor='sintomas' className='block text-gray-700 font-bold uppercase'>Sintomas</label>
                <textarea name="" id="sintomas" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Describe los Sintomas' value={sintomas} onChange={ (e) => setSintomas(e.target.value)}></textarea>
            </div>
            <div className='mb-5'>
                <label htmlFor='tratamiento' className='block text-gray-700 font-bold uppercase'>Tratamiento</label>
                <textarea name="" id="tratamiento" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Describe los Sintomas' value={tratamiento} onChange={ (e) => setTratamiento(e.target.value)}></textarea>
            </div>
            <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors' value={paciente.id? 'Guardar Cambios' : 'Agregar Paciente'} />
        </form>
        </div>
  )
}

export default Formulario