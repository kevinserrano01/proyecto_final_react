import React from 'react'

export const Login = () => {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input type="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
    </>
  )
}
