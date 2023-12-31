import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
       <Sidebar />
       
        <main>
          <p>posts</p>
        </main>
      </div>
    </div>
  )
}

export default App
