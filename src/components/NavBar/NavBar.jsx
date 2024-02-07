import classes from './NavBar.module.css'
export default function NavBar({children}){
    return(
        <div className={classes.navBar}>
            {children}
        </div>
    )
}