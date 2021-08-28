import React from 'react'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
  // OBTENER LOS PARÁMETROS QUE SE LE ENVÍAN POR LA URL
  const { username } = useParams()
  return (
    <div>
      <h1>ProfilePage: {username}</h1>
    </div>
  )
}

export default ProfilePage
