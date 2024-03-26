import './App.css'
import Dashboard from './yoga/pages/Dashboard'

function App() {

  return (
    <>
      <>   
        <div className='flex flex-col gap-8 px-10'>
          <div className='flex justify-center items-center pt-5'>
            <div className='text-3xl font-raleway'><span className='font-medium'>Ai</span><span className='font-black'>Yog</span></div>
          </div>
          <Dashboard/>
        </div>
      </>
    </>
  )
}

export default App
