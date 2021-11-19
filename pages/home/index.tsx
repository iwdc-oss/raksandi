import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { ButtonAddPassword } from '~/src/components/button/ButtonAddPassword'
import { PasswordItem } from '~/src/components/password/PasswordItem'
import { DialogAddPassword } from '~/src/components/dialog/DialogAddPassword'
import { useAppSelector } from '~/src/hooks/useReduxHooks'
import { useSession } from 'next-auth/client'

export default function Dashboard() {
  const [toggle, setToggle] = useState<boolean>(false)
  const [session, loading] = useSession()
  const passwordList = useAppSelector((state) => state.password.passwordList)
  if (loading) {
    return <p className='text-center mt-36'>Loading...</p>
  }
  if (!session) {
    return <p className='text-center mt-36'>You dont have access yet, please login first with a google account.</p>
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
