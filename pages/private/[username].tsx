import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { ButtonAddPassword } from '~/src/components/button/ButtonAddPassword'
import { PasswordItem } from '~/src/components/password/PasswordItem'
import { DialogAddPassword } from '~/src/components/dialog/DialogAddPassword'

export default function Dashboard() {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <div>
      <div>
        <PasswordItem />
      </div>
      <div>
        <ButtonAddPassword handleToggle={() => setToggle((prevState) => !prevState)} />
        {toggle && <DialogAddPassword handleToggle={() => setToggle((prevState) => !prevState)} />}
      </div>
    </div>
  )
}
