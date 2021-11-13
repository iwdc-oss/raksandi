import { LayoutContainer } from '~/src/components/layout/LayoutContainer'
import { NavigationTop } from '~/src/components/navigation/NavigationTop'

type IProps = {
  children: React.ReactNode
}

export const LayoutRoot = ({ children }: IProps) => {
  return (
    <div className='bg-gray-200 min-h-screen'>
      {/* Header */}
      <div className='text-center'>
        <NavigationTop />
      </div>
      {/* Body */}
      <LayoutContainer>{children}</LayoutContainer>
    </div>
  )
}
