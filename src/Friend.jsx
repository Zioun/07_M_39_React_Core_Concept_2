export default function Friend({friend}){
    const {name, email} = friend
    return(
        <div style={{border:'1px solid tomato', margin:'15px'}}>
            <h3>Name : {name}</h3>
            <h3>Email : {email}</h3>
        </div>
    )
}