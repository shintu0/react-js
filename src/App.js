import React from 'react'
import './App.css';
import './styles/app-style.css'
import styles from './app.module.css'

export default function App() {
  return (
    <div className='App'>
      <h1>There are three main Styles</h1>
      <h1 style={{backgroundColor:'red',color:'teal'}} >Style 1</h1>
      <h1 className='change-bg' >Style 2</h1>
      <h1 className={styles.success} >Style 3</h1>
    </div>
  )
}
