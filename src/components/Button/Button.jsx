 import classes from './Button.module.css';
export default function Button({children, type, onClick, color}){
    return(
        <button onClick={onClick} className={type=="submit" ? classes.button: classes["text-button"]} style={{color: color}}>
            {children}
        </button>
    )
}