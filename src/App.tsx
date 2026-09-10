import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThisDayPage } from './pages/ThisDay/ThisDayPage'
import { SincePage } from './pages/Since/SincePage'
import { ByDatePage } from './pages/ByDate/ByDatePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<ThisDayPage />} />
          <Route path='/' element={<ThisDayPage />} />
          <Route path='/since' element={<SincePage />} />
          <Route path='/bydate' element={<ByDatePage />} />
      </Routes>
    </BrowserRouter >
    </>
  )
}

export default App
