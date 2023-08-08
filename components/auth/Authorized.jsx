import React from 'react'
import { useAuth } from '../../context/auth/AuthContext'
import { useRouter } from 'next/router';

const Authorized = ({children}) => {
    const {authUser, setAuthLayout} = useAuth();
    const router = useRouter();

    if(!authUser) {
        router.push('/login')
    }
  return (
    <div>Authorized</div>
  )
}

export default Authorized