import classes from './Input.module.css'
export default function Input({label, type,id, ...props}){
    return(
       
        <div className={classes.input}>
        <p>{label}</p>
        <input type={type} name= {id} required/>
        </div>
         
    )
}