export default function Error({title, message}){
    return(
        <div style={{backgroundColor: "#eb4336", color:"521814", display: "flex", flexDirection: "column", flex: 1, alignContent:"center", alignItems: "center", padding: 10, borderRadius: "4px"}}>
            <h3>{title}</h3>
            <p>{message}</p>
         
        </div>
    )
}