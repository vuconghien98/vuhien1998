<template>
    <div id="appp">
        <header />
        <transition
            appear
            enter-active-class="animate__animated animate__fadeInDown"
            leave-active-class="animate__animated animate__fadeOutUp"
        >
            <div class="page-top" v-show="scY > 100" @click="toTop">
                <i class="fas fa-chevron-up icon-up"></i>
            </div>
        </transition>
        <router-view />
        <footer/>
    </div>
</template>

<script>
import Header from './components/headers/Header.vue'
import Footer from './components/footer/footer.vue'
export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            scTimer: 0,
            scY: 0,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll: function () {
            if (this.scTimer) return
            this.scTimer = setTimeout(() => {
                this.scY = window.scrollY
                clearTimeout(this.scTimer)
                this.scTimer = 0
            }, 100)
        },
        toTop: function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        },
    },
}
</script>

<style scoped>
#appp {
    position: relative;
}
.page-top {
    position: fixed;
    right: 50px;
    bottom: 200px;
    height: 35px;
    width: 35px;
    border-radius: 2px;
    background: #000;
    z-index: 50;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-out 0s;

}
.page-top:hover{
  background: #f60;
  border: 2px solid #d65600;
}
.icon-up {
    color: #fff;
    font-size: 18px;
}
</style>