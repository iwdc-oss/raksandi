type IProps = {
  children: React.ReactNode
}

export const LayoutContainer = ({ children }: IProps) => {
  return <div className='bg-white max-w-xl mx-auto min-h-screen pt-7'>{children}</div>
}
