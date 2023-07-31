import { useFormik } from 'formik'
import React from 'react'
import { basicSchemas } from './schemas/schemas'

function Register() {

    const onSubmit = async (values, actions)=>{
        console.log(values)

        await new Promise ((resolve)=>{
            setTimeout(resolve, 500)
        })

        actions.resetForm()
    }

    const {values, errors,handleChange, isSubmitting, handleSubmit} = useFormik({
        initialValues:{
            nameandsurname:'',
            username:'',
            email:'',
            password:'',
        },
        validationSchema:basicSchemas,
        onSubmit
    })
  return (
    <>
        <div className='w-[450px] mx-auto justify-center items-center rounded-lg text-xl text-white'>
        <form className='mt-[30%]' onSubmit={handleSubmit}>
            <div className='text-2xl -ml-10'>
               <h1>Register</h1>
            </div>
            <div className='mt-4 mx-auto justify-center'>
                <label className='mb-3'>Name And Surname</label>
                <input type="text" id='nameandsurname' value={values.nameandsurname} onChange={handleChange} className={`${errors.nameandsurname ? 'border-red-600' :''} w-full border-black text-black text-base rounded-md p-1 border-2`} placeholder='Plase Enter Name And Surname' />
                {errors.nameandsurname && <p className='text-red-600 text-sm'>{errors.nameandsurname}</p>}
            </div>
            <div className='mt-4  mx-auto justify-center'>
                <label className='mb-3'>User Name</label>
                <input type="text" id='username' value={values.username} onChange={handleChange} className={`${errors.username ? 'border-red-600' :''} w-full border-black text-black text-base rounded-md p-1 border-2`} placeholder='Plase Enter User Name' />
                {errors.username && <p className='text-red-600 text-sm'>{errors.username}</p>}
            </div>
            <div className='mt-4  mx-auto justify-center'>
                <label className='mb-3'>Email</label>
                <input type="email" id='email' value={values.email} onChange={handleChange} className={`${errors.email ? 'border-red-600' :''} w-full border-black text-black text-base rounded-md p-1 border-2`} placeholder='Plase Enter Email' />
                {errors.email && <p className='text-red-600 text-sm'>{errors.email}</p>}
            </div>
            <div className='mt-5  mx-auto justify-center'>
                <label className='mb-3'>Password</label>
                <input type="password" id='password' value={values.password} onChange={handleChange} className={`${errors.password ? 'border-red-600' :''} w-full border-black text-black text-base rounded-md p-1 border-2`} placeholder='Plase Enter Password'/>
                {errors.password && <p className='text-red-600 text-sm'>{errors.password}</p>}
            </div>
            <div className='w-full mx-auto justify-center'>
                <button type='submit' disabled={isSubmitting} className='w-full mt-7 p-1 rounded-3xl bg-teal-950 hover:bg-teal-900 transition ease-in-out hover:scale-105 delay-150'>Register</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Register