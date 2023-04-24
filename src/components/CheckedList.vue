<template>
  <div class="list-of-urls">
    <ul v-for="li in mainList">
        <li class="li-item"><strong class="name">URL: </strong><a target="_blank" :href="li.url">{{li.url}}</a></li>
      <li class="li-item"><strong class="name">Author: </strong>{{li.author}}</li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "CheckedList",
  props: {
    mainList: {
      type: Array,
      required: true
    },
  },
}
</script>

<style lang="scss">
.list-of-urls {
  margin-left: 10px;
}

.li-item {
  text-align: center;
  color: yellow;
  padding-bottom: 10px;
}
ul li {
  list-style: none;
  
  a {
    cursor: pointer;
    text-decoration: none;
    color: yellow;
  }
}

.name {
  color: #FFFFFF;
}

@media (max-width: 950px) {
  .li-item {
    font-size: 14px;
  }
}

</style>