import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navigation = () => {
  const location = useLocation()

  const getLinkStyle = (path: string) => {
    return location.pathname === path
      ? 'bg-gray-600 px-2 py-1 rounded'
      : 'hover:bg-gray-600 px-2 py-1 rounded'
  }

  return (
    <div className="bg-gray-800 text-white p-4">
      <nav className="flex justify-around">
        <Link to="/home" className={getLinkStyle('/home')}>
          Home
        </Link>
        <Link to="/memo" className={getLinkStyle('/memo')}>
          Memo
        </Link>
        <Link to="/useCallback" className={getLinkStyle('/useCallback')}>
          UseCallback
        </Link>
        <Link to="/useMemo" className={getLinkStyle('/useMemo')}>
          UseMemo
        </Link>
      </nav>
    </div>
  )
}

export default Navigation
