// URI: https://restcountries.com/v3.1/name/kenya

//using the fetch method in js---- fetch is assynchronous --promises
 
async function  getCountryData(country) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)// http resp 
    const ourData = await response.json()

    console.log(ourData);//
   // console.log(response);
   buildUI(ourData)


}


const form = document.querySelector("form")

form.addEventListener("submit", (event)=>{
    event.preventDefault()//stop the form from initiating a http request 
    const country = document.getElementById("search-word").value
    getCountryData(country)
})

//build UI function
const countryDiv = document.querySelector(".country")
function buildUI(data) {
    if (country.status == 404){
        countryDiv.innerHTML =  `<p style= "color: orangered"> country not found </P>`
    }else{
        county = country[0]     
    }
}
