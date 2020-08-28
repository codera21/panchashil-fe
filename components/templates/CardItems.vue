<template>
  <div class="container my-3">
    <div class="row">
      <div v-for="item in items" :key="item.id" class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <a href="#" class="btn btn-primary theme-button w-100">{{ item.btnTxt}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          title: "कोरोना अप्डेट",
          btnTxt: "कोभिड-१९ समाचार",
        },
        {
          id: 1,
          title: "जम्मा संक्रमित (नेपाल)",
          btnTxt: "कोभिड-१९ समाचार",
        },
        {
          id: 2,
          title: "निको भएको",
          btnTxt: "कोभिड-१९ समाचार",
        },
        {
          id: 3,
          title: " मृत्यु",
          btnTxt: "कोभिड-१९ समाचार",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .card{
    background:#1688CA;
    &-title{
      font-size: 22px;
      color:white;
    }
    }
  a{
    font-size: 14px;
    background:white;
    color:#1688CA;
  }

</style>