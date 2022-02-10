



window.onload = (event) => {
    console.log("page is fully loaded");
  
    // onLoad, traer todos los categorias
    function getCategories() {
      fetch("https://leonbsaleapi.herokuapp.com/products?category=7")
        .then((response) => {
          if (!response.ok) {
            throw Error("error");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const html = data
            .map((vodkas) => {
              return `
              <div class="col-6 col-md-4 mt-2 ">
                <div class="card text-center">
                  <div class="card-body" style="height:350px">
                    <p class="card-title text-center"><strong>${vodkas.name}</strong></p>
                    <img src="${vodkas.url_image}" class="card-img-top" alt="vodkas image" >
                    <a href="#" class="cardButton">comprar</a>
                    </div>
                </div>
              </div>`;
            })
            .join("");
          console.log(html);
  
          document
            .querySelector("#vodkas")
            .insertAdjacentHTML("afterbegin", html);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCategories();
  };
  