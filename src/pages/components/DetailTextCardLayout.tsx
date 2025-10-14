type DetailTextCardProps = {
  name: string
  creationDate: string
  children: React.ReactNode
}

export const DetailTextCardLayout = ({
  name,
  creationDate,
  children,
}: DetailTextCardProps) => {
  return (
    <div className='flex flex-col items-center gap-4 w-150 mx-auto py-5 px-5 bg-[#192b3a] rounded-2xl shadow-xl/10'>
      <h1 className='text-4xl font-bold'>{name}</h1>
      <div className='flex flex-col items-center'>{children}</div>

      <div className='border-t pt-4 w-1/2'>
        <h3 className='text-lg font-semibold text-gray-700 mb-2'>Дата создания</h3>
        <p className='text-gray-600'>
          {new Date(creationDate).toLocaleString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </div>
  )
}
