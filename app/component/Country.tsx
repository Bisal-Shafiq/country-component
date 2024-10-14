export default function Country (props : { name: string; population: number; capital: string }){
    console.log(props)

   
return (

    <>
    <h1>Country Name: {props.name}</h1>
    <h1>Country Population : {props.population}</h1>
    <h1>Capital : {props.capital}</h1>
    </>

);
}
