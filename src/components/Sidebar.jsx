import {PencilLine } from '@phosphor-icons/react'
import styles from "./Sidebar.module.css"

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img  
      className={styles.cover} 
      src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/KarolineKS.png" />
        <strong>Karoline Stangherlin</strong>
        <span>Web Developer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}