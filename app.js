const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      isVisible: true,
      inputBackgroundColor: "",
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");