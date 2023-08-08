import React from 'react'
import Avatar from './Avatar'
import UserCard from './UserCard'

const UserCards = ({ users }: any) => {
    return (
        <div className='sm:grid sm:grid-cols-2 2xl:grid-cols-3  lg:gap-4 p-5'>
            {users.map((user: any) => <div key={user}>
                <UserCard user={user} />
            </div>)}
        </div>
    )
}

export default UserCards