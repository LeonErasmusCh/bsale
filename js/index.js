window.onload = (event) => {
  console.log("page is fully loaded");

  // onLoad, traer todos los categorias
  function getCategories() {
    fetch("https://leonbsaleapi.herokuapp.com/")
      .then((response) => {
        if (!response.ok) {
          throw Error("error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const html = data
          .map((index) => {
            return `
            <div class="col-6 col-md-4 mt-2 ">
              <div class="card text-center " >
                <div class="card-body" style="height:450px">
                <p class="card-title text-center"><strong>${index.name}</strong></p>
                  <img src="${index.url_image}" class="card-img-top" alt="index image" >
                  <div clas="list-group list-group-flush">
                  <p id="price">precio $ ${index.price} </p>
                  <p id="discount">descuento ${index.discount}%<p>
                  </div>
                  <a href="#" class="cardButton">comprar</a>
                </div>
              </div>
            </div>`;
          })
          .join("");
        console.log(html);

        document.querySelector("#index").insertAdjacentHTML("afterbegin", html);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCategories();
};







