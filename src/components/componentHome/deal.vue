<template>
    <div class="w-100 col-12">
        <div class="row">
            <div class="w-100 deal-icon">
                <a href="#" class="img-link">
                    <img src="/deal/title_1.svg" alt="" />
                    <img src="/deal/title_2.gif" alt="" />
                    <img src="/deal/title_3.svg" alt="" />
                </a>
            </div>
        </div>  
        <div class="row">
            <div class="d-flex item-lag">
                <div
                    class="col-6 col-md-4 colLg2 position-relative p-3 mb-3 item col"
                    v-for="(data,i) in datas"
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
    data() {
        return {
            datas: [
                {
                    img: 'deal/airplus-lite.jpg',
                    sale: 'Giảm 300.000đ',
                    gift: 'hop-qua.svg',
                    content: 'Tai nghe Veger AirPlus Lite-Chính hãng',
                    oldPrince: '800.000đ',
                    newPrince: '399.000đ',
                },
                {
                    img: 'deal/tai-nghe.jpg',
                    sale: 'Giảm 401.000đ',
                    gift: 'hop-qua.svg',
                    content: 'Tai nghe Veger AirPlus Pro-Chính hãng',
                    oldPrince: '999.000đ',
                    newPrince: '699.000đ',
                },
                {
                    img: 'deal/ipad-air.png',
                    sale: 'Giảm 700.000đ',
                    gift: 'hop-qua.svg',
                    content: 'iPad 4 16GB 4G/Wifi Cũ',
                    oldPrince: '3.590.000đ',
                    newPrince: '2.890.000đ',
                },
                {
                    img: 'deal/poco-x3.png   ',
                    sale: 'Giảm 300.000đ',
                    gift: '',
                    content: 'POCO X3 Pro 6G/128GB Chính Hãng',
                    oldPrince: '6.190.000đ',
                    newPrince: '5.890.000đ',
                },
                {
                    img: 'deal/ipad1.png',
                    sale: 'Giảm 400.000đ',
                    gift: 'hop-qua.svg',
                    content: 'iPad Air 16Gb Cũ (4G + Wifi) Đẹp như mới',
                    oldPrince: '4.790.000đ',
                    newPrince: '4.390.000đ',
                },
            ],
        }
    },
}
</script>
<style scoped>
.deal-icon {
    height: 72px;
    padding: 10px;
}
.img-link {
    text-decoration: none;
}

/* Css sản phẩm */
@media (min-width: 992px) {
    .colLg2{
        flex: 0 0 20%;
        max-width: 20%;
    }
}
@media (max-width: 991px){
  .item-lag{
          overflow: scroll hidden;
     overflow-x: scroll !important;
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
/*  */
</style>