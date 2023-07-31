import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const basicSchemas = yup.object().shape({
    nameandsurname:yup.string().required('plase Enter a Name and Surname').min(5,'Please enter a name with at least 5 digits').max(20,'Enter a name of up to 20 digits'),
    username:yup.string().required('plase Enter a UserName').min(3,'Please enter a usename with at least 3 digits').max(20,'Enter a username of up to 20 digits'),
    email:yup.string().email('Not valid. Please enter a valid value').required('Email is required'),
    password:yup.string().min(6,'Please enter a password with at least 6 digits').max(20,'Enter a password of up to 20 digits').matches(passwordRules,{message:'Plase enter an uppercase and lowercase'}).required('Plase enter a valid value'),
})