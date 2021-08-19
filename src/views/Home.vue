<template>
    <div style="background-color: #f5f6f9">
        <div class="container pb-3">
            <div class="row pt-2">
                <div class="col pr-2 pl-0 menu-link">
                    <ul class="list-group list-links">
                        <li class="list-group-item">
                            <a href="#" class="icon-link">
                                <i class="fas fa-mobile"></i>
                            </a>
                            <router-link tag="a" to="/dien-thoai">
                                Điện thoại
                            </router-link>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="icon-link">
                                <i class="fas fa-keyboard"></i>
                            </a>
                            <router-link tag="a" to="/phu-kien"
                                >Phụ kiện
                            </router-link>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="icon-link">
                                <i class="fas fa-tablet"></i>
                            </a>
                            <router-link tag="a" to="/tablet"
                                >Tablet
                            </router-link>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="icon-link">
                                <i class="fas fa-laptop"></i>
                            </a>
                            <router-link tag="a" to="/laptop"
                                >Laptop
                            </router-link>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="icon-link">
                                <i class="fas fa-headphones"></i>
                            </a>
                            <router-link tag="a" to="/am-thanh"
                                >Âm thanh
                            </router-link>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="icon-link">
                                <i class="fas fa-clock"></i>
                            </a>
                            <router-link tag="a" to="/smartwatch"
                                >Smartwatch
                            </router-link>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="icon-link">
                                <i class="fas fa-home"></i>
                            </a>
                            <router-link tag="a" to="/gia-dung"
                                >Gia dụng thông minh
                            </router-link>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="icon-link">
                                <i class="fab fa-instalod"></i>
                            </a>
                            <router-link tag="a" to="/xa-kho"
                                >Xả kho
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-7 p-0 sliderr">
                    <div class="slider_img d-flex">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div
                                    style="width: 100%"
                                    v-for="(v, i) in datas"
                                    :key="i"
                                    class="swiper-slide"
                                >
                                    <img v-bind:src="v.src" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="swiper-scrollbar"></div>
                    </div>
                    <button
                        class="namebtn"
                        v-for="(v, i) in datas"
                        :key="i"
                        :class="{ active: swiperIndex == i }"
                        @click="gotoSlider(i)"
                    >
                        {{ v.note }}
                    </button>
                </div>
                <div class="col-12 d-lg-none list-mobile">
                    <div class="boder d-flex">
                        <router-link class="link" tag="a" to="/dien-thoai">
                            <div class="icon">
                                <i class="fas fa-mobile"></i>
                            </div>
                            <div class="text">Điện thoại</div>
                        </router-link>
                        <router-link class="link" tag="a" to="/phu-kien">
                            <div class="icon">
                                <i class="fas fa-keyboard"></i>
                            </div>
                            <div class="text">Phụ kiện</div>
                        </router-link>
                        <router-link class="link" tag="a" to="/tablet">
                            <div class="icon">
                                <i class="fas fa-tablet"></i>
                            </div>
                            <div class="text">Tablet</div>
                        </router-link>
                        <router-link class="link" tag="a" to="/laptop">
                            <div class="icon">
                                <i class="fas fa-laptop"></i>
                            </div>
                            <div class="text">Laptop</div>
                        </router-link>
                        <router-link class="link" tag="a" to="/am-thanh">
                            <div class="icon">
                                <i class="fas fa-headphones"></i>
                            </div>
                            <div class="text">Âm thanh</div>
                        </router-link>
                        <router-link class="link" tag="a" to="/smartwatch">
                            <div class="icon">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div class="text">Smartwatch</div>
                        </router-link>
                        <router-link class="link" tag="a" to="/gia-dung">
                            <div class="icon">
                                <i class="fas fa-home"></i>
                            </div>
                            <div class="text">Gia dụng</div>
                        </router-link>
                        <router-link class="link" tag="a" to="/xa-kho">
                            <div class="icon">
                                <i class="fab fa-instalod"></i>
                            </div>
                            <div class="text">Xả kho</div>
                        </router-link>
                    </div>
                </div>
                <div class="col pr-0 pl-2 d-none d-lg-block">
                    <div
                        class="d-flex flex-column"
                        v-for="(v, i) in sliders"
                        :key="i"
                    >
                        <img :src="v.src" alt="" class="img-sliders" />
                    </div>
                </div>
            </div>
            <div class="row mt-2 d-flex new-content">
                <div class="col-12 col-lg d-lg-flex content-1">
                    <img src="/firewall_icon.svg" alt="" />
                    <a href="#" class="news">TIN KHUYẾN MÃI</a>
                </div>
                <div class="col-12 col-lg-10 d-flex content-2">
                    <div class="">
                        <marquee direction="”left”" scrollamount="10">
                            <a href="#" class="text-content">
                                64GB chỉ hơn 12 triệu - Nhanh tay ring ngay ưu
                                đãi đặc biệt</a
                            >
                            <a href="#" class="text-content">
                                64GB chỉ hơn 12 triệu - Nhanh tay ring ngay ưu
                                đãi đặc biệt</a
                            >
                        </marquee>
                    </div>
                </div>
            </div>
            <div class="row w-auto mt-3 mb-3 bg-white">
                <deal />
            </div>
            <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="d-flex">
                            <div class="banner">
                                <img
                                    src="/banner_1.jpg"
                                    alt=""
                                    class="image"
                                    style="width: 100%"
                                />
                                <div class="middle"></div>
                            </div>
                            <div class="banner">
                                <img
                                    src="/banner_2.jpg"
                                    alt=""
                                    class="image2"
                                    style="width: 100%"
                                />
                                <div class="middle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3 mb-3 bg-white">
                <phone-home />
            </div>
            <div class="row mt-3 mb-3 bg-white">
                <phu-kien-hot />
            </div>
            <div class="row mt-3 mb-3 bg-white">
                <dong-ho-hot />
            </div>
            <div class="row mt-3 mb-3 bg-white">
                <tablet-hot />
            </div>
            <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="banner3">
                            <img
                                src="/banner_3.jpg"
                                alt=""
                                style="width: 100%"
                            />
                            <div class="middle"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3 bg-white">
                <cong-nghe />
            </div>
        </div>
    </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import Deal from '../components/componentHome/deal.vue'
import phoneHome from '../components/componentHome/dienthoai.vue'
import PhuKienHot from '../components/componentHome/phukienhot.vue'
import DongHoHot from '../components/componentHome/donghohot.vue'
import TabletHot from '../components/componentHome/tablethot.vue'
import CongNghe from '../components/componentHome/congnghe.vue'

Swiper.use([Navigation, Pagination, Autoplay])
export default {
    components: {
        Deal,
        phoneHome,
        PhuKienHot,
        DongHoHot,
        TabletHot,
        CongNghe,
    },
    data() {
        return {
            swiper: null,
            swiperIndex: 0,
            datas: [
                {
                    src: 'slider_1.jpg',
                    note: 'Âm Thanh Hay Nhất Pin Tốt, Siêu Bền ',
                },
                { src: 'slider_2.jpg', note: 'iPad Giá Rẻ Đáng Mua Nhất ' },
                { src: 'slider_3.jpg', note: 'iPad Gen 8 Chỉ từ 8.xxxk' },
                { src: 'slider_4.jpg', note: 'Smart Watch Bán Chạy Nhất' },
                { src: 'slider_5.jpg', note: 'Chiến Game Mạnh Mẽ Cùng Poco' },
            ],
            sliders: [
                { src: 'slider_6.jpg' },
                { src: 'slider_7.jpg' },
                { src: 'slider_8.jpg' },
            ],
        }
    },
    methods: {
        gotoSlider(i) {
            this.swiper.slideToLoop(i)
        },
        channingSlide(i) {
            this.swiperIndex = i
        },
    },
    mounted() {
        this.swiper = new Swiper('.swiper-container', {
            autoplay: {
                delay: 5000,
            },
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })

        const channingSlideTemp = this.channingSlide

        this.swiper.on('slideChange', function (e) {
            let temp = e.realIndex
            // channingSlide(temp)
            // console.log(this,e)
            channingSlideTemp(temp)
        })
    },
}
</script>

<style scoped>
@media (max-width: 575px) {
    .sliderr button {
        display: none;
    }
    .content-1 {
        text-align: center;
    }
}
@media (max-width: 991px) {
    .list-links {
        display: none;
    }
    .sliderr img {
        width: inherit;
        height: inherit;
    }
    .list-mobile {
        width: 80px;
        padding: 0;
        overflow: scroll hidden;
        overflow-x: scroll !important;
    }
    .boder {
        flex-basis: unset;
        padding: 5px;
        width: auto;
        margin-bottom: 10px;
        border: none;
    }
    .link {
        display: block;
        text-align: center;
        padding-left: 10px;
        text-decoration: none;
    }
    .link .icon {
        border-radius: 50%;
        border: 1px solid #dee2e6;
        display: inline-flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        margin-bottom: 0;
    }
    .link .icon i {
        font-size: 40px;
        color: #f60;
    }
    .link .text {
        color: #000;
        font-size: 14px;
    }
}

.menu-link ul {
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.1);
}
.menu-link ul:hover {
    box-shadow: 4px 4px 4px rgba(128, 128, 128, 0.2);
}
.menu-link ul li {
    height: 40px;
    padding: 0 10px 0 10px;
    text-align: left;
    line-height: 40px;
    cursor: pointer;
}
.menu-link ul li a {
    color: #333;
    font-weight: 400;
}
.menu-link ul li:hover a {
    text-decoration: none;
    color: #f60;
    font-weight: 600;
}
.menu-link ul li:last-child {
    height: 80px;
}
.menu-link .icon-link {
    text-align: center;
    display: inline-block;
    width: 25px;
}
.menu-link .icon-right {
    float: right;
    font-size: 10px;
    line-height: 40px;
    color: rgba(32, 18, 56, 0.5);
}
.slider_img {
    height: 315px;
    width: 100%;
}
.namebtn {
    width: 20%;
    font-size: 12px;
    background: #fff;
    border-color: transparent rgba(255, 255, 255, 0.25) transparent transparent;
    font-weight: 400;
    outline: none;
}
.namebtn:hover {
    border-top: 3px solid #f60;
}
.active {
    border-top: 3px solid #f60;
    font-weight: 700;
}
.img-sliders {
    display: block;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
    position: relative;
    height: 113px;
    margin-bottom: 9px;
    cursor: pointer;
}
.new-content .content-1 {
    height: 32px;
    background: rgb(255, 51, 0);
    border-radius: 20px;
    text-align: center;
    font-weight: 600;
    align-items: center;
    padding-left: 30px;
    margin: 0 10px 0 0;
}
.new-content img {
    display: inline-flex;
    align-self: center;
    width: 16px;
    height: 16px;
    margin-right: 6px;
    cursor: pointer;
}
.new-content .news {
    text-decoration: none;
    color: #fff;
    font-size: 13px;
}
.new-content .news:hover {
    color: black;
}
.new-content .content-2 {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.new-content .content-2 .text-content {
    padding-right: 500px;
    text-decoration: none;
    color: #090809;
}
.new-content .content-2 .text-content:hover {
    color: #f60;
}
.banner {
    position: relative;
    width: 50%;
    opacity: 1;
}
.banner:hover {
    opacity: 0.8;
    cursor: pointer;
}
.banner3 {
    position: relative;
    width: 100%;
    opacity: 1;
}
.banner3:hover {
    opacity: 0.8;
    cursor: pointer;
}

.image {
    padding-right: 10px;
}
.image2 {
    padding-left: 10px;
}
.middle {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
}
.middle:hover {
    opacity: 1;
}
</style>
