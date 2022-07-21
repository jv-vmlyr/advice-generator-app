import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import './App.css'

const queryClient = new QueryClient()

export default function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <Quote />
  </QueryClientProvider>
  );
  }
  function Quote() {
    const {isLoading, error, data} = useQuery(['data'], ()=> 
    fetch('https://api.adviceslip.com/advice').then(res =>
    res.json()
    )
  )

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h3>Advice Generator App</h3>
      <h1>{data.slip.advice}</h1>
    </div>
  )
}