<template>
  <div class="col-md-6">
    <div class="card mb-3 border-0">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="require(`@/assets/images/${award.image}`)"
            :alt="award.title"
            class="img-fluid rounded-start"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor-placement="top-bottom"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5
              class="card-title"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor-placement="top-bottom"
            >
              {{ award.title }}
            </h5>
            <p
              class="card-text"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor-placement="top-bottom"
            >
              {{ award.description }}
            </p>
            <p
              class="card-text"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor-placement="top-bottom"
            >
              <small class="text-muted">{{ award.date }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleAward",
  props: ["award"],
};
</script>
<style>
.card-img-top {
  height: 300px;
  width: 212px;
  -moz-box-shadow-bottom: 4px 4px 4px black;
  -webkit-box-shadow-bottom: 4px 4px 4px black;
}
</style>
