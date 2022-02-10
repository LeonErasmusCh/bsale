



window.onload = (event) => {
    console.log("page is fully loaded");
  
    // onLoad, traer todos los categorias
    function getCategories() {
      fetch("https://leonbsaleapi.herokuapp.com/products?category=5")
        .then((response) => {
          if (!response.ok) {
            throw Error("error");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const html = data
            .map((snacks) => {
              return `
              <div class="col-6 col-md-4 mt-2 ">
                <div class="card text-center">
                  <div class="card-body" style="height:350px">
                    <p class="card-title text-center"><strong>${snacks.name}</strong></p>
                    <img src="${snacks.url_image}" class="card-img-top" alt="snacks image" >
                    <a href="#" class="cardButton">comprar</a>
                    </div>
                </div>
              </div>`;
            })
            .join("");
          console.log(html);
  
          document
            .querySelector("#snacks")
            .insertAdjacentHTML("afterbegin", html);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCategories();
  };
  