



window.onload = (event) => {
  console.log("page is fully loaded");

  // onLoad, traer todos los categorias
  function getCategories() {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw Error("error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const html = data
          .map((category) => {
            return `
            <div class="col-6 col-md-4 mt-2 ">
              <div class="card text-center">
                <div class="card-body">
                  <p class="card-title text-center"><strong>${category.name}</strong></p>
                  <img src="${category.url_image}" class="card-img-top" alt="category image" >
                  <a href="#" class="btn btn-primary">comprar</a>
                </div>
              </div>
            </div>`;
          })
          .join("");
        console.log(html);

        document
          .querySelector("#categories")
          .insertAdjacentHTML("afterbegin", html);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getCategories();
};
