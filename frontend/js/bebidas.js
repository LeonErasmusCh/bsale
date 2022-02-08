



window.onload = (event) => {
    console.log("page is fully loaded");
  
    // onLoad, traer todos los categorias
    function getCategories() {
      fetch("http://localhost:3000/products?category=4")
        .then((response) => {
          if (!response.ok) {
            throw Error("error");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const html = data.map((bebida) => {
              return `
              <div class="col-6 col-md-4 mt-2 ">
                <div class="card text-center">
                  <div class="card-body">
                    <p class="card-title text-center"><strong>${bebida.name}</strong></p>
                    <img src="${bebida.url_image}" class="card-img-top" alt="category image" >
                    <a href="#" class="btn btn-primary">comprar</a>
                  </div>
                </div>
              </div>`;
            })
            .join("");
          console.log(html);
  
          document
            .querySelector("#bebidas")
            .insertAdjacentHTML("afterbegin", html);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCategories();
  };
  