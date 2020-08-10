<template>
  <div class="row">
    <div v-for="item in items" :key="item.id" class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <a href="#" class="btn btn-primary">{{ item.btnTxt}}</a>
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
          title: "Title 2",
          btnTxt: "Action 2",
        },
        {
          id: 2,
          title: "Title 3",
          btnTxt: "Action 3",
        },
        {
          id: 3,
          title: "Title 4",
          btnTxt: "Action 4",
        },
      ],
    };
  },
};
</script>