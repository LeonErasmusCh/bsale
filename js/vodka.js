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
          .map((vodka) => {
            let discountValue = (vodka.price * vodka.discount) / 100;
            let finalPrice = vodka.price - discountValue;
            return `
              <div class="col-6 col-md-4 col-lg-3 mt-2 ">
              <div class="card text-center " >
                <div class="card-body" style="height:350px">
                <p class="card-title text-center"><strong>${vodka.name}</strong></p>
                  <img src="${vodka.url_image}"  onerror="this.onerror=null;this.src='https://via.placeholder.com/212x212?text=imagen%20no%20disponible';"
                   class="card-img-top" alt="vodka image" >
                  <button type="button" class="btn cardButton">comprar</button>
                  <p class="price"> $ ${vodka.price} </p>
                  <p class="priceDiscount">descuento ${vodka.discount}% </p>
                  <p class="finalPrice">precio final $${finalPrice}</p>
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
