function handelSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=searchInput.Value;
}


let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handelSearchSubmit);