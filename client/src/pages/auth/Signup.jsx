import React from 'react'
import Button from '../../components/Button'
import {useFormik} from 'formik'
import validationSchema from './Validation'
import { fetchRegister } from '../../Api'
import './Signup.scss'

function Signup() {

  const formik = useFormik({
    initialValues: {
      avatar: "",
      role: "",
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    },
    validationSchema,
    onSubmit: async (values,bag) => {
      try {
        const registerResponse = await fetchRegister({name: values.name, avatar: values.avatar, role: values.role, email: values.email, password: values.password})
        console.log(registerResponse)
      }catch(e) {}
    }
  })
       

  return (
    <div className='signup'>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Avatar
          <input type="text"
           name='avatar' 
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.avatar}
           className={formik.touched.avatar && formik.errors.avatar ? 'error' : ''}
           />
        </label>
        <label>
          Name
          <input type="text"
           name='name' 
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.name}
           className={formik.touched.name && formik.errors.name ? 'error' : ''}
           />
        </label>
        <label>
          Role
          <input type="text"
           name='role' 
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.role}
           className={formik.touched.role && formik.errors.role ? 'error' : ''}
           />
        </label>
        <label>
          Email
          <input type="email"
           name='email' 
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.email}
           className={formik.touched.email && formik.errors.email ? 'error' : ''}
           />
        </label>
        <label>
          Password
          <input type="password"
           name='password' 
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.password}
           className={formik.touched.password && formik.errors.password ? 'error' : ''}
           />
        </label>
        <label>
          Password Confirm
          <input type="password" name='passwordConfirm'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordConfirm}
          className={formik.touched.passwordConfirm && formik.errors.passwordConfirm ? 'error' : 'green'}
          />
        </label>
        <Button>
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default Signup