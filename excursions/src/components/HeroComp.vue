<template>
  <div class="main-hero">
    <section class="hero is-fullheight header-image">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <header class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item"> Epic Excursions </a>
              <span class="navbar-burger" data-target="navbarMenuHeroC">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroC" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item"> Home </a>
                <a class="navbar-item"> Journal </a>
                <a class="navbar-item"> About </a>
                <a class="navbar-item"> Contact </a>
              </div>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">Title</p>
          <p class="subtitle">Subtitle</p>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li><a>Moraine Lake</a></li>
              <li><a>Autumn</a></li>
              <li><a>Place3</a></li>
              <li><a>Place4</a></li>
              <li><a>Place5</a></li>
              <li><a>Place6</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-image {
  background-image: url("@/assets/images/autumn.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}
</style>
