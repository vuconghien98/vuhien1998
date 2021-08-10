<template>
    <div class="col-12 w-100">
        <!-- Title mở đầu -->
        <div class="row d-flex justify-content-between" style="border-bottom: 2px solid #f60">
            <div class="col-12 col-lg text-head">
                <a href="" class="position-relative">ĐIỆN THOẠI NỔI BẬT NHẤT</a>
            </div>
            <div class="list">
                <ul class="d-flex">
                    <li>Xiaomi</li>
                    <li>iPhone</li>
                    <li>Samsung</li>
                    <li>Oppo</li>
                    <li>Realme</li>
                    <li>Vsmart</li>
                    <li>Vivo</li>
                    <li>Asus</li>
                    <li>Huawei</li>
                    <li>Sony</li>
                    <li>Nokia</li>
                    <li>Hãng khác</li>
                    <li>Xem tất cả</li>
                </ul>
            </div>
        </div>
        <!-- Điện thoại -->
        <div class="row ">
            <div class="col-12 d-flex w-100 item-lag">
                <div
                    class="col-6 col-md-4 col-lg position-relative p-3 mb-3 item col"
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
                            class="mw-100 h-100 m-auto   position-absolute img-big"
                        />
                        <span class="position-absolute w-auto" style="z-index: 1;">
                            <img
                                src="/firewall_icon.svg"
                                alt=""
                                class="img-small"
                            />
                            {{ data.sale }}
                        </span>
                        <img :src="data.gift" 
                            v-if="data.gift !== ''" alt="" class="img-qua" />
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
    export default {  
        data(){
            return{
                datas: [
                {
                    img: 'homeDThoai/poco.png',
                    sale: '',
                    gift: '',
                    content: 'POCO X3 Pro 6G/128GB Chính Hãng',
                    oldPrince: '',
                    newPrince: '8.590.000đ',
                },
                {
                    img: 'homeDThoai/xiaomi.png',
                    sale: 'Giảm 1.000.000đ',
                    gift: 'hop-qua.svg',
                    content: 'Xiaomi Redmi Note 10s 8GB/128GB Chính Hãng DGW',
                    oldPrince: '6.490.000đ',
                    newPrince: '5.490.000đ',
                },
                {
                    img: 'homeDThoai/iphone-12.png',
                    sale: 'Giảm 5.700.000đ',
                    gift: 'hop-qua.svg',
                    content: 'iPhone 12 Pro Max 128GB Chính Hãng VN/A',
                    oldPrince: '33.990.000đ',
                    newPrince: '28.290.000đ',
                },
                {
                    img: 'homeDThoai/iphone-xr.png',
                    sale: 'Giảm 4.800.000đ',
                    gift: '',
                    content: 'iPhone XR 64Gb Chính Hãng VN/A (Phiên Bản Hộp Mới)',
                    oldPrince: '15.790.000đ',
                    newPrince: '10.990.000đ',
                },
                {
                    img: 'homeDThoai/realme.png',
                    sale: 'Giảm 800.000đ',
                    gift: 'hop-qua.svg',
                    content: 'Realme 8 8GB/128GB Chính Hãng',
                    oldPrince: '7.290.000đ',
                    newPrince: '6.490.000đ',
                },
            ],
            }
        }  
    }
</script>
<style scoped>
/* Title mở đầu */
    .text-head{
        position: relative;
        font-size: 16px;
        height: 48px;
        font-weight: 500;
        background: #f60;
        padding: 0 15px 0 10px;
    }
    .text-head:hover a{
        color: #12df3a;
    }
    .text-head::before{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 23px;
        right: -23px;
        content: "";
        background-color: inherit;
        transform: skew(23deg);
    }
    .text-head a {
        text-decoration: none;
        color: #fff;
        line-height: 48px;
    }
    .list ul{
        align-items: center;
        margin: 0;
        height: 100%;

    }
    .list ul li{
        font-size: 14px;
        font-weight: 500;
        list-style: none;
        padding: 0 8px 0 8px;
        display: inline-block;
    }   
    .list ul li:hover{
        cursor: pointer;
        color: #12df3a;
    }
    .list ul li:last-child{
        color: #12df3a;
    }
    .list ul li:last-child:hover{
        color: #f60;
        transition: ease-in .5s;
    }
    /*  */
/* Css sản phẩm */
@media (max-width: 991px){
  .item-lag{
    overflow: scroll hidden;
     overflow-x: scroll !important;
    }  
    .text-head{
        text-align: center;
    }
    .text-head::before{
        display: none;
    }
    .list{
     overflow: scroll hidden;
     overflow-x: scroll !important;   
    }
    .list ul{
        padding: 0;
    }
    .list > ul > li:last-child{
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
.text-sp:hover{
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
.item:hover::before{
    content: "";
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