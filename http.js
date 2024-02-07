export async function fetchMenuData(){
    console.log("fetching")
    const response = await fetch("http://localhost:3000/meals");
    const resData = await response.json();
    if(!response.ok){
        const error= new Error("Failed to fetch places");
        throw error
    }
   
    return resData ;
}