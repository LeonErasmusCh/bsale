

window.onload = (event) => {
    console.log("page is fully loaded");
  
    // onLoad, traer todos los categorias
    function getCategories() {
      fetch("https://leonbsaleapi.herokuapp.com/products?category=1")
        .then((response) => {
          if (!response.ok) {
            throw Error("error");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const html = data
            .map((energetica) => {
              let discountValue = (energetica.price * energetica.discount) / 100;
            let finalPrice = energetica.price - discountValue;
              return `
              <div class="col-6 col-md-4 col-lg-3 mt-2 ">
              <div class="card text-center " >
                <div class="card-body" style="height:350px">
                <p class="card-title text-center"><strong>${energetica.name}</strong></p>
                  <img src="${energetica.url_image}"  onerror="this.onerror=null;this.src='https://via.placeholder.com/212x212?text=imagen%20no%20disponible';"
                   class="card-img-top" alt="energetica image" >
                  <button type="button" class="btn cardButton">comprar</button>
                  <p class="price"> $ ${energetica.price} </p>
                  <p class="priceDiscount">descuento ${energetica.discount}% </p>
                  <p class="finalPrice">precio final $${finalPrice}</p>
                </div>
              </div>
            </div>`;
            })
            .join("");
          console.log(html);
  
          document
            .querySelector("#energeticas")
            .insertAdjacentHTML("afterbegin", html);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCategories();
  };
  