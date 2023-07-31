import { useFormik } from 'formik'
import React from 'react'
import { basicSchemas } from './schemas/schemas'

function Login() {

    const onSubmit = async (values, actions)=>{
        console.log(values)

        await new Promise ((resolve)=>{
            setTimeout(resolve, 500)
        })

        actions.resetForm()
    }

    const {values, errors,handleChange, isSubmitting, handleSubmit} = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        validationSchema:basicSchemas,
        onSubmit
    })

  return (
    <>
    <div className='w-[450px] h-72 mx-auto justify-center items-center rounded-lg text-xl text-white'>
        <form className='mt-[30%]' onSubmit={handleSubmit}>
            <div className='text-2xl'>
                <h1>Login</h1>
            </div>
            <div className='mt-4 grid mx-auto justify-center'>
                <label className='mb-3'>Email</label>
                <input type="email" id='email' value={values.email} onChange={handleChange} className={`${errors.email ? 'border-red-600' : ''} w-96 text-base rounded-md text-black p-1 border-2 border-black`} placeholder='Plase Enter Email'/>
                {errors.email && <p className='text-red-600 text-sm'>{errors.email}</p>}
            </div>
            <div className='mt-5 grid mx-auto justify-center'>
                <label className='mb-3'>Password</label>
                <input type="password" id='password' value={values.password} onChange={handleChange} className={`${errors.password ? 'border-red-600' : ''} w-96 text-base rounded-md text-black p-1 border-2 border-black`} placeholder='Plase Ender Password'/>
                {errors.password && <p className='text-red-600 text-sm'>{errors.password}</p>}
            </div>
            <div className='grid mx-auto justify-center'>
            <button type='submit' disabled={isSubmitting} className='w-96 mt-7 p-1 rounded-3xl bg-teal-950 hover:bg-teal-900 transition ease-in-out hover:scale-105 delay-150' >Login</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login