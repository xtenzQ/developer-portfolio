<template>
  <section
    class="vh-100 d-flex justify-content-center align-items-center"
    id="hero"
  >
    <div class="container py-5">
      <div class="row flex-lg-row-reverse align-items-center g-md-5 py-5">
        <div class="col-10 col-sm-7 col-lg-7">
          <!-- image credits https://www.shutterstock.com/image-vector/male-programmer-working-computer-office-wall-1662853342 -->
          <img
            alt="Bootstrap Themes"
            class="d-block mx-lg-auto img-fluid"
            loading="lazy"
            src="@/assets/images/header.png"
          />
        </div>
        <div class="col-lg-5">
          <h1
            class="display-5 fw-bold lh-1 mb-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
          >
            Welcome!
          </h1>
          <p
            class="lead mb-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="300"
          >
            Ny name is <b>Nikita Rusetskii</b> and I'm a
            <span class="word">software engineer</span>. My passion is building
            <span class="word">web applications</span> and
            <span class="word">designing websites</span> using modern
            frameworks. Also I'm doing research in
            <span class="word">machine learning</span> applied to renewable
            energy.
          </p>
          <div
            class="d-grid gap-2 d-md-flex justify-content-md-start"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
          >
            <a
              class="btn btn-primary text-white mr-md-2"
              href="https://linkedin.com/in/xtenzq"
              role="button"
              target="_blank"
              ><font-awesome-icon :icon="['fab', 'linkedin-in']" class="me-2" />
              Hire me!</a
            >
            <a
              class="btn btn-outline-secondary mr-md-2"
              href="mailto:rusetscky@outlook.com"
              role="button"
              target="_blank"
              ><font-awesome-icon
                :icon="['fa-regular', 'fa-file-lines']"
                class="me-2"
              />
              Contact me</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HeroSection",
};
</script>
<style lang="scss" scoped>
.word {
  position: relative;
}

.word:after {
  background-color: #ededed;
  content: " ";
  height: 40%;
  position: absolute;
  left: 0;
  top: 65%;
  width: 90%;
  z-index: -1;
}
</style>
