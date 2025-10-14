import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string): [T, boolean] => {
  const [data, setData] = useState<T>([] as T)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!url) return

    const controller = new AbortController()
    const { signal } = controller

    setIsLoading(true)

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal })
        if (!response.ok) {
          throw new Error('Ошибка запроса')
        }
        const result = (await response.json()) as T
        setData(result)
      } catch (error) {
        if (signal.aborted) return
        console.log(error)
        setData([] as T)
      } finally {
        if (!signal.aborted) setIsLoading(false)
      }
    }

    fetchData()

    return () => {
      setData([] as T)
      setIsLoading(false)
      controller.abort()
    }
  }, [url])

  return [data, isLoading]
}
