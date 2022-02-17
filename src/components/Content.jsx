import React from 'react'
import { useContext } from 'react';
// import { createContext } from 'react'
import MyContext from '../context/MyContext'


const Content = () => {
    const {extra, data} = useContext(MyContext);
    const { results, loading, errors } = data

    if (loading) return <p>Loading....</p>
    if (errors) return <p>Error</p>

    const list = results.map((user) =>
    extra ? (
      <p key={user.id} className="extra">
        {user.name}
      </p>
    ) : (
      <p key={user.id}>{user.address.street}</p>
    ))
  return (
    <section>{list}</section>
  )
}

export default Content