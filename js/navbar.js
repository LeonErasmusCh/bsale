
const navbar = ` <nav class="navbar navbar-expand-lg navbar-dark fixed-top customNav">
<div class="container-fluid">
  <div class="container">
    <a class="navbar-brand" href="https://leonerasmusch.github.io/bsale/index.html">El Barril</a>
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
                href="https://leonerasmusch.github.io/bsale/energeticas.html#"
                >energetica</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://leonerasmusch.github.io/bsale/piscos.html#"
                >pisco</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://leonerasmusch.github.io/bsale/rones.html#"
                >ron</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://leonerasmusch.github.io/bsale/bebidas.html#"
                >bebida</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://leonerasmusch.github.io/bsale/snacks.html#"
                >snacks</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://leonerasmusch.github.io/bsale/cervezas.html#"
                >cerveza</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://leonerasmusch.github.io/bsale/vodka.html#"
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

// page links

document.querySelector("#navbar").insertAdjacentHTML("afterbegin", navbar);
document.querySelector("head").innerHTML = ` 
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossorigin="anonymous"
/>
<link rel="stylesheet" href="./css/index.css" />`

// dynamic page title
let pageTitle = document.getElementById("heading").textContent;
document.title = `El Barril - ${pageTitle}`