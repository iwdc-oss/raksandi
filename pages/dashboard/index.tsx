import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { ButtonAddPassword } from '~/src/components/button/ButtonAddPassword'
import { PasswordItem } from '~/src/components/password/PasswordItem'
import { DialogAddPassword } from '~/src/components/dialog/DialogAddPassword'
import { useAppSelector } from '~/src/hooks/useReduxHooks'
import { useSession } from 'next-auth/client'
import { ButtonBase } from '~/src/components/button/ButtonBase'

export default function Dashboard() {
  const [toggle, setToggle] = useState<boolean>(false)
  const [session, loading] = useSession()
  const router = useRouter()
  const passwordList = useAppSelector((state) => state.password.passwordList)
  if (loading) {
    return <p className='text-center mt-36'>Loading...</p>
  }
  if (!session) {
    return (
      <div>
        <p className='text-center mt-24 text-lg italic'>
          You dont have access yet, please login first with a google account.
        </p>
        <div className='h-14 w-3/4 mx-auto mt-12'>
          <ButtonBase onClick={() => router.push('/')}>Back to Home</ButtonBase>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div>
        {passwordList.map((passwordValue) => (
          <PasswordItem key={passwordValue} value={passwordValue} />
        ))}
      </div>
      <div>
        <ButtonAddPassword handleToggle={() => setToggle((prevState) => !prevState)} />
        {toggle && <DialogAddPassword handleToggle={() => setToggle((prevState) => !prevState)} />}
      </div>
    </div>
  )
}
