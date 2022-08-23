<template>
  <section class="p-3 p-lg-5" id="projects">
    <div class="container">
      <h2 class="my-md-5 text-center mb-3">Projects</h2>
      <div class="row">
        <div class="col-12 col-lg-3 mb-3 mb-md-5">
          <input
            v-model="searchProject"
            class="form-control"
            id="name"
            name="name"
            type="search"
            required=""
            placeholder="Search Projects"
            aria-label="Name"
          />
        </div>
        <div class="col-12 col-lg-6 mb-3 mb-md-5"></div>
        <div class="col-12 col-lg-3 mb-3 mb-md-5">
          <project-filter @filter="selectedCategory = $event" />
        </div>
      </div>
      <div class="project-cards row">
        <single-project
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
    <!--///container-->
  </section>
</template>
<script>
import SingleProject from "./SingleProject.vue";
import ProjectFilter from "./ProjectFilter.vue";

export default {
  name: "ProjectsGrid",
  props: ["projects"],
  components: {
    ProjectFilter,
    SingleProject,
  },
  data: () => {
    return {
      selectedCategory: "",
      searchProject: "",
    };
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      if (this.selectedCategory) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
  },
  methods: {
    // Filter projects by category
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        console.log(category);
        return category.includes(this.selectedCategory);
      });
    },
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },
};
</script>
<style lang="scss">
.tags .tag {
  &:not(:last-child) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
}
.tag:not(body) {
  align-items: center;
  background-color: #f5f5f5;
  //border-radius: 4px
  color: #4a4a4a;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
}
.project-cards {
  .card-title {
    font-size: 1.125rem;

    a {
      color: #434e5e;
      text-decoration: none;
    }
  }
  .card-img-container {
    overflow: hidden;

    &:hover {
      .overlay-logo {
        -webkit-opacity: 0;
        -moz-opacity: 0;
        opacity: 0;
      }
      .overlay-content {
        margin-top: 0;
      }
    }
  }
  .card-img-overlay {
    color: #fff;
    transition: all 0.4s ease-in-out;

    &.overlay-logo {
      margin-top: 0;
      background: rgba(67, 78, 94, 0.6);

      .project-logo {
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        margin-top: -38px;
      }
    }
    &.overlay-content {
      margin-top: 600px;
      background: $primary;
      text-decoration: none;
    }
  }
}
@media (prefers-reduced-motion: reduce) {
  .project-cards .card-img-overlay {
    transition: none;
  }
}
</style>
