<template>
    <div class="container">
      <div class="row pt-2 pb-2">
        <div class="link">
          <router-link tag="a" to="/">Trang chủ</router-link>
          <span>/</span>
          <router-link tag="a" to="`{datas.id}`">{{datas.content}}</router-link>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        datas: []
    },
    created() {
        axios.get('http://localhost:3000/').then((response) => {
            this.datas = response.data
            console.log(this.datas)
        })
    },
}
</script>