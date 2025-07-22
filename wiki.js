
let searchInputEl = document.getElementById("searchInput");
let dynamicElement = document.getElementById("dynamicElement");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(data){
    let { description,link,title} = data;

    //create result-item
    let resultItemEl = document.createElement("div");
    dynamicElement.appendChild(resultItemEl);

    //create anchor element

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.textContent = title;
    titleEl.target="_blank";
    resultItemEl.appendChild(titleEl);

    //create breake
    let breakeEl1 = document.createElement("br");
    resultItemEl.appendChild(breakeEl1);

    //create anchor element 
    let linkEl = document.createElement("a");
    linkEl.textContent = link;
    linkEl.href =link;
    linkEl.target="_blank";
    linkEl.style.color="green";
    resultItemEl.appendChild(linkEl);

    // create break 2 
    let breakeEl2 = document.createElement("br");
    resultItemEl.appendChild(breakeEl2);

    //create description
    let descriptionEl = document.createElement("p");
    descriptionEl.textContent=description;
    resultItemEl.appendChild(descriptionEl);

}

function displayResult(result){
    spinnerEl.classList.toggle("d-none");
       for (let firsr_ob of result){

         createAndAppendSearchResult(firsr_ob);

       }

}


function wikiSearch(event){
    let inputData = searchInputEl.value;

    if(event.key === "Enter"){
        spinnerEl.classList.toggle("d-none");
        dynamicElement.textContent ="";

       let url = "https://apis.ccbp.in/wiki-search?search=" + inputData;
       let option={
        method:"GET"
       }

       fetch(url,option)
       .then(function(resoponse){
          return resoponse.json();
       })
       .then(function(jsonData){
            let { search_results } = jsonData;
            displayResult(search_results);
       });
    }
}

searchInputEl.addEventListener("keydown",wikiSearch);