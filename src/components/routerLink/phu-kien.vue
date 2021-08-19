<template>
    <div style="background-color: #f5f6f9">
        <div class="container">
            <div class="row pt-2 pb-2">
                <div class="link">
                    <router-link tag="a" to="/">Trang chủ</router-link>
                    <span>/</span>
                    <router-link tag="a" to="/dien-thoai"
                        >Phụ kiện</router-link
                    >
                </div>
            </div>
            <div class="row title">
                <h3>Phụ kiện</h3>
            </div>
            <div class="row" style="background-color: #fff;">
                    <div
                        class="
                            col-6 col-md-4
                            colLg2
                            position-relative
                            p-3
                            mb-3
                            item
                            col
                        "
                        v-for="(data, i) in datas"
                        :key="i"
                    >
                        <a
                            href="#"
                            class="
                                content-a
                                w-100
                                d-flex
                                align-items-center
                                mb-2
                                position-relative
                            "
                        >
                            <img
                                :src="data.img"
                                alt=""
                                class="
                                    mw-100
                                    h-100
                                    m-auto
                                    position-absolute
                                    img-big
                                "
                            />
                            <span
                                class="position-absolute w-auto"
                                style="z-index: 1"
                            >
                                <img
                                    src="/firewall_icon.svg"
                                    alt=""
                                    class="img-small"
                                />
                                {{ data.sale }}
                            </span>
                            <img
                                :src="data.gift"
                                v-if="data.gift !== ''"
                                alt=""
                                class="img-qua"
                            />
                        </a>
                        <a href="#" class="text-sp">{{ data.content }}</a>
                        <div class="prince position-relative mb-2">
                            <span class="new-prince">{{ data.newPrince }}</span>
                            <span class="old-prince">{{ data.oldPrince }}</span>
                        </div>
                        <div class="button">
                            <a href="" class="btn-a">Chi tiết</a>
                            <a href="" class="btn-b">Yêu thích</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            datas: [],
        }
    },
    created() {
        axios.get('http://localhost:3000/phukien').then((response) => {
            this.datas = response.data
            console.log(this.datas)
        })
    },
}
</script>


<style scoped>
.link a,
span {
    text-decoration: none;
    font-size: 12px;
    color: #333;
}
.link a:hover {
    color: #f60;
}
.title {
    background: #fff;
    margin-bottom: 15px;
    box-shadow: 2px 2px 2px rgba(51, 51, 51, 0.3);
}
.title h3 {
    font-size: 18px;
    padding: 10px 0 5px 10px;
}
/* Css sản phẩm */
@media (min-width: 992px) {
    .colLg2{
        flex: 0 0 20%;
        max-width: 20%;
    }
}
@media (max-width: 991px) {
    .text-head {
        text-align: center;
    }
    .text-head::before {
        display: none;
    }
    .list {
        overflow: scroll hidden;
        overflow-x: scroll !important;
    }
    .list ul {
        padding: 0;
    }
    .list > ul > li:last-child {
        display: none;
    }
}
.content-a {
    height: 216px;
}
.content-a span {
    bottom: 10px;
    left: 5px;
    background: #ff6801;
    border-radius: 40px;
    padding: 3px 5px;
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    display: flex;
    align-items: center;
}
.img-big {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.img-small {
    width: 17px;
    height: 17px;
    background: #cb1c22;
    border-radius: 50%;
    margin-right: 5px;
}
.img-qua {
    width: 35px;
    height: 35px;
    position: absolute;
    bottom: 5px;
    right: 5px;
}
.text-sp {
    font-size: 14px;
    color: #222;
    margin-bottom: 5px;
    text-align: left;
    line-height: 1.4rem;
    text-decoration: none;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    position: relative;
    min-height: 38.4px;
}
.text-sp:hover {
    color: #f60;
}
.new-prince {
    font-size: 14px;
    font-weight: 500;
    color: #f60;
}
.old-prince {
    margin-left: 5px;
    text-decoration: line-through;
    font-size: 11px;
    color: #716b6b;
}
.button {
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 100%;
    right: -1px;
    left: -1px;
    visibility: hidden;
}
.button .btn-a {
    text-decoration: none;
    background: #cb1c22;
    text-align: center;
    color: #fff;
    width: 40%;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 500;
    padding: 2px 0;
}
.button .btn-a:hover {
    background: #f60;
}
.button .btn-b {
    text-decoration: none;
    background: #99a2aa;
    text-align: center;
    color: #fff;
    width: 40%;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 500;
    padding: 2px 0;
}
.button .btn-b:hover {
    background: #6c757d;
}
.item:hover::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: calc(100% + 30px);
    border: 1px solid #dee2e6;
    background: #fff;
}
.item:hover .button {
    visibility: visible;
}
</style>