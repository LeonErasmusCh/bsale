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
            let discountValue = (index.price * index.discount) / 100;
            let finalPrice = index.price - discountValue;
              return `
            <div class="col-6 col-md-4 col-lg-3 mt-2 ">
              <div class="card text-center " >
                <div class="card-body" style="height:350px">
                <p class="card-title text-center"><strong>${index.name}</strong></p>
                  <img src="${index.url_image}"  onerror="this.onerror=null;this.src='https://via.placeholder.com/212x212?text=imagen%20no%20disponible';"
                   class="card-img-top" alt="index image" >
                  <button type="button" class="btn cardButton">comprar</button>
                  <p class="price">precio $ ${index.price} </p>
                  <p class="priceDiscount">descuento ${index.discount}% </p>
                  <p class="finalPrice">precio final $${finalPrice}</p>
                </div>
              </div>
            </div>`;
          })
          .join("");
        //console.log(html);
        document.querySelector("#index").insertAdjacentHTML("afterbegin", html);

        /*         // calculate discount price
        const discountedPrice = data
          .map((newPrice) => {
            let discountValue = (newPrice.price * newPrice.discount) / 100;
            let finalPrice = newPrice.price - discountValue;
            return `<p id="discountedPrice">${finalPrice}</p>`;
          }).join("");
        document.getElementById("finalPrice").innerHTML = discountedPrice */
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCategories();
};
