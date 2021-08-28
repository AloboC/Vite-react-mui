import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

const CategoriesPage = () => {
  // LEER PARÁMETROS ENVIADOS DESDE UNA QUERY
  const location = useLocation()
  const history = useHistory()

  const qry = new URLSearchParams(location.search)
  const skip = parseInt(qry.get('skip')) || 0
  const limit = parseInt(qry.get('limit')) || 15

  const handleNext = () => {
    qry.set('skip', skip + limit)
    history.push({ search: qry.toString() })
  }

  return (
    <div>
      <h1>CategoriesPage</h1>
      <h3>{skip}</h3>
      <h3>{limit}</h3>

      <button onClick={handleNext}>next</button>
    </div>
  )
}

export default CategoriesPage
