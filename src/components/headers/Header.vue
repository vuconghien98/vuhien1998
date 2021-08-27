<template>
    <div>
        <div
            class="img-header text-center bg-danger"
            style="height: 50px; cursor: pointer"
        >
            <img src="/header/1.png" alt="" />
        </div>
        <div
            class="header"
            :class="{ classFix: scrollPosition > 50 }"
            style="background-color: #f60; height: 60px"
        >
            <div class="container-xl container-sm container header-container">
                <div class="row header-logo" style="height: 60px">
                    <div class="col-lg-3 m-auto header-icon">
                        <router-link tag="a" to="/">
                            <img src="/header/logo.svg" alt="" />
                        </router-link>
                    </div>
                    <div class="col-lg-4 m-auto d-flex header-search">
                        <div
                            class="w-25 rounded p-1 mr-2 text-center search-1"
                            style="
                                background: #ffa366;
                                color: #fff;
                                line-height: 16px;
                                min-width: 130px;
                            "
                        >
                            <small>Xem khu vực</small>
                            <div
                                class="position-relative"
                                style="line-height: 16px; cursor: pointer"
                                @click="active = !active"
                            >
                                <b class="d-block" style="font-size: 12px">
                                    <span>Hà Nội</span>
                                    <i
                                        class="fa fa-angle-down"
                                        aria-hidden="true"
                                    ></i>
                                </b>
                            </div>
                            <transition
                                appear
                                enter-active-class="animate__animated animate__flipInX"
                                leave-active-class="animate__animated animate__flipOutX"
                            >
                                <div
                                    class="position-absolute rounded p-2 w-75"
                                    style="
                                        display: block;
                                        background-color: #f5f6f9;
                                        left: 15px;
                                        top: 45px;
                                        z-index: 100;
                                    "
                                    v-if="active"
                                >
                                    <b
                                        class="d-block mb-2 font-weight-bolder"
                                        style="font-size: 14px; color: #343a40"
                                        >Chọn tỉnh thành để xem chính xác giá và
                                        khuyến mãi</b
                                    >
                                    <span>
                                        <input
                                            style="
                                                height: 38px;
                                                border: 1px solid
                                                    rgba(153, 153, 153, 0.5);
                                                border-radius: 5px;
                                            "
                                            class="input-group"
                                            type="text"
                                            placeholder="Nhập tỉnh thành để tìm nhanh"
                                        />
                                    </span>
                                    <div class="d-flex flex-wrap pt-2">
                                        <span
                                            class="adress mb-2"
                                            style="
                                                min-width: 50%;
                                                line-height: 16px;
                                                color: #343a40;
                                            "
                                            >Hà Nội</span
                                        >
                                        <span
                                            class="adress mb-2"
                                            style="
                                                min-width: 50%;
                                                line-height: 16px;
                                                color: #343a40;
                                            "
                                            >TP Hồ Chí Minh</span
                                        >
                                        <span
                                            class="adress mb-2"
                                            style="
                                                min-width: 50%;
                                                line-height: 16px;
                                                color: #343a40;
                                            "
                                            >Đà Nẵng</span
                                        >
                                        <span
                                            class="adress mb-2"
                                            style="
                                                min-width: 50%;
                                                line-height: 16px;
                                                color: #343a40;
                                            "
                                            >Cần Thơ</span
                                        >
                                        <span
                                            class="adress mb-2"
                                            style="
                                                min-width: 50%;
                                                line-height: 16px;
                                                color: #343a40;
                                            "
                                            >Thái Nguyên</span
                                        >
                                        <span
                                            class="adress mb-2"
                                            style="
                                                min-width: 50%;
                                                line-height: 16px;
                                                color: #343a40;
                                            "
                                            >Hải Dương</span
                                        >
                                        <span
                                            class="adress mb-2"
                                            style="
                                                min-width: 50%;
                                                line-height: 16px;
                                                color: #343a40;
                                            "
                                            >Hải Phòng</span
                                        >
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <div class="w-75 m-auto search-2">
                            <form
                                action=""
                                class="form-control pt-1 d-flex"
                                style="height: 40px"
                            >
                                <input
                                    type="text"
                                    class="form-control border-0"
                                    style="box-shadow: none; height: 30px"
                                    placeholder="Bạn cần tìm gì?"
                                />
                                <button class="btn p-0 btn_search">
                                    <i
                                        class="fas fa-search"
                                        style="
                                            font-size: 20px;
                                            color: #f60;
                                            cursor: pointer;
                                        "
                                    ></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-2 col-lg-5 m-auto d-flex cart1">
                        <div class="pr-2 header-hiden d-none d-lg-flex">
                            <i
                                class="far fa-newspaper pr-2"
                                style="
                                    color: #fff;
                                    font-size: 24px;
                                    cursor: pointer;
                                "
                            ></i>
                            <a
                                href="#"
                                class="text-decoration-none text-white"
                                style="line-height: 14px; font-size: 14px"
                            >
                                Tin tức
                                <b style="display: block">Hot news</b>
                            </a>
                        </div>
                        <div class="pl-1 pr-1 header-hiden d-none d-lg-flex">
                            <i
                                class="fas fa-phone-volume pr-1"
                                style="
                                    color: #fff;
                                    font-size: 24px;
                                    cursor: pointer;
                                    line-height: 40px;
                                "
                            ></i>
                            <a
                                href="#"
                                class="
                                    text-decoration-none text-white text-center
                                "
                                style="font-size: 14px"
                            >
                                <span>
                                    <span class="d-block">Gọi mua hàng:</span>
                                    0866411722
                                </span>
                            </a>
                        </div>
                        <div class="pl-1 pr-1 header-hiden d-none d-lg-flex">
                            <i
                                class="fas fa-map-marker-alt pr-1"
                                style="
                                    color: #fff;
                                    font-size: 24px;
                                    cursor: pointer;
                                    line-height: 40px;
                                "
                            ></i>
                            <a
                                href="#"
                                class="
                                    text-decoration-none text-white text-center
                                "
                                style="font-size: 14px"
                            >
                                <span>
                                    <span class="d-block">Tìm cửa hàng</span>
                                    gần bạn
                                </span>
                            </a>
                        </div>
                        <div
                            class="d-lg-flex pr-1 pl-1 cart"
                            @click="apper = !apper"
                        >
                            <i
                                class="fas fa-shopping-cart pr-1"
                                style="
                                    color: #fff;
                                    font-size: 20px;
                                    cursor: pointer;
                                    line-height: 40px;
                                "
                            ></i>
                            <a
                                class="
                                    text-decoration-none text-white text-center
                                    d-none d-lg-flex
                                "
                                style="font-size: 14px"
                            >
                                <span style="cursor: pointer">
                                    <span
                                        class="d-block rounded-circle ml-2"
                                        style="
                                            width: 20px;
                                            height: 20px;
                                            background-color: #ffa400;
                                        "
                                        >0</span
                                    >
                                    Giỏ hàng
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <transition
            appper
            enter-active-class="animate__animated animate__fadeInRight"
            leave-active-class="animate__animated animate__fadeOutRight"
        >
            <div class="market" v-if="apper">
                <div class="market-header">
                    <div class="d-flex justify-content-between">
                        <h3>GIỎ HÀNG</h3>
                        <div class="click" @click="apper = !apper">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                    <div class="content-no-item d-none">
                        <i class="fas fa-store-alt"></i>
                        <button type="button" class="btn btn-lg">
                            Tiếp tục mua hàng
                        </button>
                    </div>
                    <div class="">
                        <div class="content">
                            <a href="" class="linkk">
                                <img src="/homeDThoai/iphone-xr.png" alt="" />
                            </a>
                            <div class="information">
                              <div class="text">
                                iPhone 12 64GB Chính Hãng VN/A - Xanh Mint
                              </div>
                              <div class="price">
                                
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <div class="overlay" @click="apper = !apper" v-if="apper"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: false,
            scrollPosition: null,
            apper: false,
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
    },
}
</script>
<style scoped>
.classFix {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 5;
}
.adress:hover {
    color: #f60 !important;
    cursor: pointer;
}
.active {
    display: none;
}
.btn_search i:hover {
    color: #12df3a !important;
}
.apper {
    transform: translateX(100%);
    display: none;
}
.market {
    width: 25%;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: 100;
    transform: translateX(0);
}
.click {
    position: absolute;
    margin-left: 0;
    right: 15px;
    top: 18px;
    line-height: 0;
    border: none;
    cursor: pointer;
    transition: 0.4s ease-in-out, 0.4s ease-in-out;
}
.click i {
    font-size: 22px;
}
.click:hover {
    transform: translate(0%, 0%) rotate(360deg);
    color: #f60;
}
.market-header {
    padding: 10px;
}
.header-hiden {
    border-right: 1px solid rgba(255, 255, 255, 0.25);
    align-self: center;
}
.market .market-header h3 {
    font-size: 18px;
}
.content-no-item i {
    display: block;
    font-size: 150px;
    text-align: center;
    color: #999;
    margin-top: 50px;
    margin-bottom: 20px;
}
.content-no-item button {
    background: #f60;
    margin: 20px 15% 0 25%;
    color: #fff;
    font-size: 16px;
}
.content-no-item button:hover {
    background: #cc5200;
}
.overlay {
    position: fixed;
    /* display: none;  */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 6;
}
@media (max-width: 1200px) {
    .market {
        width: 35%;
    }
}

@media (max-width: 991px) {
    .img-header {
        display: none;
    }
    .header {
        min-height: 100px;
    }
    .header-container {
        min-height: 100px;
    }
    .header-logo {
        min-height: 100px;
    }
    .classFix {
        position: relative;
    }
    .header-icon {
        text-align: center;
        position: relative;
        margin-bottom: 2px;
    }
    .cart1 {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0;
        text-align: center;
        float: right;
    }
    .market {
        width: 50%;
    }
    @media (max-width: 575px) {
        .market {
            width: 75%;
        }
    }
}
</style>