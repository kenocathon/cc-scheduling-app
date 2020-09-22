import React, { useEffect, useState } from 'react';
import { list } from '../auth/api-user';


export default function Users(){
  const [users, setUsers] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    list(signal).then((data) => {
      if (data && data.error){
        console.log(data.error)
      }else{
        setUsers(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

  
}