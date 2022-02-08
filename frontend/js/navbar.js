
const navbar = ` <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <div class="container">
    <a class="navbar-brand" href="file:///C:/Users/56954/Desktop/ecommerce/frontend/src/index.html">Ecommerce</a>
    <button
      class="navbar-toggler float-end"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            filtrar productos
          </a>
          <ul
            class="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a
                class="dropdown-item"
                href="file:///C:/Users/56954/Desktop/ecommerce/frontend/src/energeticas.html#"
                >energeticas</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="file:///C:/Users/56954/Desktop/ecommerce/frontend/src/piscos.html#"
                >piscos</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="file:///C:/Users/56954/Desktop/ecommerce/frontend/src/rones.html#"
                >rones</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="file:///C:/Users/56954/Desktop/ecommerce/frontend/src/bebidas.html#"
                >bebidas</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="file:///C:/Users/56954/Desktop/ecommerce/frontend/src/snacks.html#"
                >snacks</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="file:///C:/Users/56954/Desktop/ecommerce/frontend/src/cervezas.html#"
                >cervezas</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="file:///C:/Users/56954/Desktop/ecommerce/frontend/src/vodka.html#"
                >vodka</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav>`



document.querySelector("#navbar").insertAdjacentHTML("afterbegin", navbar);


document.querySelector("head").innerHTML = ` 
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossorigin="anonymous"
/>
<link rel="stylesheet" href="../css/index.css" />
<title>ecommerce - tienda</title>`