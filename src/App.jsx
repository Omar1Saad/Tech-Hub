import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import Learn from './pages/learn'
import Posts from './pages/posts'
import PostProvider from './context/postContext'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/posts' element= {
            <PostProvider>
              <Posts/>
            </PostProvider>
            }/>
          <Route path='/services' element= {<Services/>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/learn' element= {<Learn/>}/>
      </Routes>
    </>
  )
}

export default App
