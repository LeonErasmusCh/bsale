// search logic
const list = document.getElementById("list");

let productArray = [];
// get input value
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value;
        console.log(value);
        productArray.push(value)
        //console.log(productArray)
        let find = productArray[productArray.length -1];
        //console.log("find",find)

        let btn = document.getElementById("searchBtn");
        btn.addEventListener("click", (event) => {
          console.log("fire");
          console.log("searchinput", searchInput)
          
        // fetch by name
            search();
        
         
        });    
        


        // fetch (search by name)

function search() {
    fetch("https://leonbsaleapi.herokuapp.com/product?name=" + find)
      .then((response) => {
        if (!response.ok) { 
          throw Error("error");
        }
        return response.json();
      })
      .then((data) => {
        const html = data
          .map((product) => {
            return `
              <div class="col-6 col-md-4 col-lg-3 mt-2 ">
              <div class="card text-center " >
                <div class="card-body" style="height:350px">
                <p class="card-title text-center"><strong>${product.name}</strong></p>
                  <img src="${product.url_image}"  onerror="this.onerror=null;this.src='https://via.placeholder.com/212x212?text=imagen%20no%20disponible';"
                   class="card-img-top" alt="energetica image" >
                  <button type="button" class="btn cardButton">comprar</button>
                  <p class="price"> $ ${product.price} </p>
                  <p class="priceDiscount">descuento ${product.discount}% </p>
                </div>
              </div>
            </div>`;
            
          })
          .join("");
        console.log(html);

          //Place search item in DOM
        document.querySelector("#searchPlacement").innerHTML=html;
        //Product Name from seach
        document.querySelector("#heading").innerHTML=`<h1 id='heading' class='text-center'>Resultado</h1> `;  
 
      })
      .catch((err) => {
        console.log(err);
      });
  }

    });


// only include SEARCH in index.html
function removeSearch(){
  let url = document.URL
  console.log(url)
  if(url.indexOf("ron") !== -1){
    document.getElementById("searchField").style.display = "none"; 
  } else if(url.indexOf("bebida") !== -1){
    document.getElementById("searchField").style.display = "none";
  } else if(url.indexOf("cerveza") !== -1){
    document.getElementById("searchField").style.display = "none";
  }else if(url.indexOf("energetica") !== -1){
    document.getElementById("searchField").style.display = "none";
  }else if(url.indexOf("snacks") !== -1){
    document.getElementById("searchField").style.display = "none";
  }else if(url.indexOf("vodka") !== -1){
    document.getElementById("searchField").style.display = "none";
  }else if(url.indexOf("pisco") !== -1){
    document.getElementById("searchField").style.display = "none";
  }else{
    console.log("only index.html has search capability for now")
  }
}
removeSearch();






 