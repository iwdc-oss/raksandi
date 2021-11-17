import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { ButtonAddPassword } from '~/src/components/button/ButtonAddPassword'
import { PasswordItem } from '~/src/components/password/PasswordItem'
import { DialogAddPassword } from '~/src/components/dialog/DialogAddPassword'
import { useAppSelector } from '~/src/hooks/useReduxHooks'

export default function Dashboard() {
  const [toggle, setToggle] = useState<boolean>(false)
  const passwordList = useAppSelector((state) => state.password.passwordList)
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
