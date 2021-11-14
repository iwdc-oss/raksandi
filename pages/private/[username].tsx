import React from 'react'
import { useRouter } from 'next/router'
import { ButtonAddPassword } from '~/src/components/button/ButtonAddPassword'
import { PasswordItem } from '~/src/components/password/PasswordItem'

export default function Dashboard() {
  return (
    <div>
      <div>
        <PasswordItem />
      </div>
      <div>
        <ButtonAddPassword />
      </div>
    </div>
  )
}
