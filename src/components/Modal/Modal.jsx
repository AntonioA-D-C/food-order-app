import { useRef, useEffect } from 'react';
import classes from './Modal.module.css';
import {createPortal} from 'react-dom'

function Modal({children, open, title, onClose}){
  const dialog = useRef()

  useEffect(()=>{
    if(open){
        dialog.current.showModal()
    } else{
      dialog.current.close();
    }
  }, [open])
return createPortal(
   
  <dialog ref={dialog}  className={classes.modalContainer} onClose={onClose}>
       <h3>{title}</h3>
        {children}
    </dialog> ,
 document.getElementById('modal')
);
}

export default Modal