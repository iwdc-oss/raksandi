import React from 'react'
import Link from 'next/link'
import { LinkBase } from '~/src/components/link/LinkBase'
import { signOut, useSession } from 'next-auth/client'

export const MenuBase = (): JSX.Element => {
  const [session, loading] = useSession()
  return (
    <ul className='flex flex-col'>
      <Link href='/' passHref>
        <LinkBase>Home</LinkBase>
      </Link>
      <Link href='/dashboard' passHref>
        <LinkBase>Password Manager</LinkBase>
      </Link>
      {session && (
        <Link href='#' passHref>
          <LinkBase onClick={() => signOut()}>Logout</LinkBase>
        </Link>
      )}
    </ul>
  )
}
