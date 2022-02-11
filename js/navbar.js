
const navbar = ` <nav class="navbar navbar-expand-lg navbar-dark fixed-top customNav">
<div class="container-fluid">
  <div class="container ">
    <a class="navbar-brand" href="https://leonerasmusch.github.io/bsale/index.html"><span><i id="nav-basket" class="bi bi-basket-fill"></i></span>El Barril</a>
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
    <div class="collapse navbar-collapse float-end" id="navbarNavDropdown">
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
                href="https://leonerasmusch.github.io/bsale/energetica.html"
                >energetica</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://leonerasmusch.github.io/bsale/pisco.html"
                >pisco</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://leonerasmusch.github.io/bsale/ron.html"
                >ron</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://leonerasmusch.github.io/bsale/bebida.html"
                >bebida</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://leonerasmusch.github.io/bsale/snacks.html"
                >snacks</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://leonerasmusch.github.io/bsale/cerveza.html"
                >cerveza</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://leonerasmusch.github.io/bsale/vodka.html"
                >vodka</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav>
`

// page links

document.querySelector("#navbar").insertAdjacentHTML("afterbegin", navbar);
document.querySelector("head").innerHTML = ` 
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossorigin="anonymous"
/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
<link rel="stylesheet" href="./css/index.css" />
<link rel="icon" type="image/x-icon" href="./img/basket-fill.svg">
`

// dynamic page title
let pageTitle = document.getElementById("heading").textContent;
document.title = `El Barril - ${pageTitle}`

