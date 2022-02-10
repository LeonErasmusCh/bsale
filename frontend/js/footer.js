const footer = `<footer class="bg-dark text-center text-white mt-5">
<!-- Grid container -->
<div class="container p-4 pb-0">
  <!-- Section: Form -->
  <section class="">
    <form action="">
      <!--Grid row-->
      <div class="row d-flex justify-content-center">
        <!--Grid column-->
        <div class="col-auto">
          <p class="pt-2">
            <strong>Suscribete para recibir ofertas</strong>
          </p>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-5 col-12">
          <!-- Email input -->
          <div class="form-outline form-white mb-4">
          <label class="form-label mt-3" for="form5Example29">Correo electronico</label>
            <input type="email" id="form5Example29" class="form-control" />
          </div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-auto">
          <!-- Submit button -->
          <button type="submit" class="btn btn-outline-light mb-4">
            Suscribete
          </button>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </form>
  </section>
  <!-- Section: Form -->
</div>
<!-- Grid container -->

<!-- Copyright -->
<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
  © 2022 Copyright
  <a class="footerLink" href="https://www.bsale.cl/">bsale</a>
</div>
<!-- Copyright -->
</footer>`

document.querySelector("footer").innerHTML = footer