import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-80 flex items-center justify-center">
      <ClipLoader color="#3B82F6" size={60} />
    </div>
  )
}

export default Loading