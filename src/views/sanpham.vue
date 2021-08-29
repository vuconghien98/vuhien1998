<template>
  <div style="background-color: #f5f6f9">
    <div class="container">
      <div class="row pt-2 pb-2">
        <div class="link">
          <router-link tag="a" to="/">Trang chủ /
           </router-link>
          <span> {{ product.content }}</span>
        </div>
      </div>
      <div class="row pt-2 pb-2 details">
        <div class=" col-lg-12 mt-2 d-flex justify-content-between header">
          <p>{{ product.content}}</p>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div class=" col-lg-4 img">
          <a href="#" class="w-100 d-block mt-5">
            <img :src="product.img" alt="" class="w-100 m-auto">
            </a>
          <span>
            <i class="fas fa-thumbs-up"></i> Thích
          </span>
          <span>
            <i class="fab fa-facebook"></i> Chia sẻ
          </span>
        </div>
        <div class="col-lg-5 information">
          <span class="code">Mã sản phẩm : <span>{{ product.id }}</span> </span>
          <div class="price">
            <span class="new-prince">{{ product.newPrince}}</span>
            <span class="old-prince">Giá niêm yết: <del > {{ product.oldPrince}}</del></span>
          </div>
          <span class="sale"> <span>{{ product.sale}}</span> so với giá thị trường</span>
          <div class="select-color">
            <p>Màu sắc:</p>
            <button @click="selectColor" :class="{'active': isVal1}" type="button" value="1" class="btn btn-secondary mr-1" data-toggle="tooltip" data-placement="top" title="Đỏ" style="background: red"></button>
            <button @click="selectColor" :class="{'active': isVal2}" type="button" value="2" class="btn btn-secondary mr-1" data-toggle="tooltip" data-placement="top" title="Đen" style="background: #000"></button>
            <button @click="selectColor" :class="{'active': isVal3}" type="button" value="3" class="btn btn-secondary mr-1" data-toggle="tooltip" data-placement="top" title="Xanh" style="background: blue"></button>
            <button @click="selectColor" :class="{'active': isVal4}" type="button" value="4" class="btn btn-secondary  mr-1" data-toggle="tooltip" data-placement="top" title="Trắng" style="background: #fff"></button>
          </div>
          <div class="button mt-3 flex-column">
            <button class="btn-1">
              <h2>MUA NGAY</h2>
              <p>Giao tận nơi hoặc nhận tại cửa hàng</p>
            </button>
            <button class="btn-2">
              <h2>MUA NGAY</h2>
              <p>Giao tận nơi hoặc nhận tại cửa hàng</p>
            </button>
            <button class="btn-3">
              <h2>TRẢ GÓP QUA THẺ</h2>
              <p>Visa, Master, JCB</p>
            </button>
          </div>
          <span class="support">Gọi <a href="#">0866 411 722</a> để tư vấn mua hàng</span>
        </div>
        <div class="col-lg-3 address">
          <ul class="phone">
            <li>
              <i class="far fa-building"></i> Bán hàng online toàn quốc <a href="#"> 0855100001</a>
            </li>
            <li>
              <i class="far fa-building"></i> 119 Thái Thịnh Đống Đa Hà Nội <a href="#"> 0966119995</a>
            </li>
            <li>
              <i class="far fa-building"></i> 75 Quảng Oai Ba Vì Hà Nội <a href="#">0886007755</a>
            </li>
            <li>
              <i class="far fa-building"></i> 701 Lê Hồng Phong, Quận 10,HCM <a href="#">0971699701</a>
            </li>
            <li>
              <i class="far fa-building"></i> 58E Đường 3/2 TP Cần Thơ <a href="#">0911108855</a>
            </li>
            <li>
              <i class="far fa-building"></i> 65 Hàm Nghi, Đà Nẵng <a href="#">0899976655</a>
            </li>
            <li>
              <i class="far fa-building"></i> 12 Điện Biên Phủ Hải Phòng <a href="#"> 0916551212</a>
            </li>
            <li>
              <i class="far fa-building"></i> 35B Chợ Con, TP Hải Dương <a href="#">0899965566</a>
            </li>
            <li>
              <i class="far fa-building"></i> 467 Lương Ngọc Quyến Thái Nguyên <a href="#">0888338555</a>
            </li>
          </ul>
          <ul class="insurance">
            <li>Tình trạng: <span>Mới 100%, Nguyên Seal, Chưa Kích Hoạt, Đủ Bảo Hành</span></li>
            <li>Bộ sản phẩm chuẩn: <span>Thân máy, Cable, Sách hướng dẫn, Cây lấy sim</span></li>
            <li>Bảo hành: <span>12 tháng chính hãng</span></li>
          </ul>
          <div class="notification">
            <div>
              <img src="/bell.jpg" alt="">
              <span>Xem livestream lúc 20h tối thứ 6 hàng tuần trên kênh youtube dReviews - Nhận ngay tai nghe bluetooh miễn phí!</span>
            </div>
            <div>
              <img src="/car.jpg" alt=""> 
              <span>Đặt từ xa - Giao hàng tận nhà Gọi ngay 0855.100.001</span>
            </div>
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
      return{
        product: [],
        isVal1:false,
        isVal2:false,
        isVal3:false,
        isVal4:false,
      }
    },
    created() {
        axios.get('http://localhost:3000/alldatas/' + this.$route.params.id )
        .then((response) => {
            this.product = response.data
            console.log(this.product)
        })
        .catch(error => console.log(error))
    },
    methods: {
      selectColor(e) {
        if(e.target.value == 1){
          this.isVal1 = true
          this.isVal2 = false
          this.isVal3 = false
          this.isVal4 = false
          
        }else if(e.target.value == 2){
           this.isVal1 = false
          this.isVal2 = true
          this.isVal3 = false
          this.isVal4 = false
        }
        else if(e.target.value == 3){
          this.isVal1 = false
          this.isVal2 = false
          this.isVal3 = true
          this.isVal4 = false
        }
        else{
          this.isVal1 = false
          this.isVal2 = false
          this.isVal3 = false
          this.isVal4 = true
        }
      }
    }
}
</script>
<style scoped>
.active {
  border: 3px solid blueviolet !important;
}
.link a {
    text-decoration: none;
    font-size: 12px;
    color: #333;
}
.link a:hover {
    color: #f60;
}
.link span {
  font-size: 12px;
  color: #f60;
}
.details{
  background: #fff;
}
.details .header{
  border-bottom: 1px solid rgba(192, 192, 192, .5)
}
.details .header p {
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 600;
}
.details .header .star i {
  color: #ffbe00;
}
.details .img span{
  color: #fff;
  font-size: 12px;
  background: royalblue;
  border-radius: 5px;
  padding: 0 10px;
  margin: 5px;
  cursor: pointer;
}
.details .img span i {
  font-size: 12px;
}
.details .code {
  padding: 15px 0;
  display: block;
}
.details .code{
  font-size: 14px;
}
.details .code span {
  font-weight: 600;
  font-size: 16px;
}
.details .new-prince {
    font-size: 18px;
    font-weight: 500;
    color: #f60;
    padding-right: 15px;
}
.details .price .old-prince {
    margin-left: 5px;
    font-size: 12px;
    color: #000;
    font-weight: 400;
}
.details .price .old-prince del {
  font-weight: 600;
    font-size: 14px;
}
.details .select-color p{
  font-size: 14px;
  color: #000;
  font-weight: 600;
}
.details .select-color button {
  width: 30px;
  height: 30px;
}
.details .information .sale {
  color: #33b530;
  font-size: 14px;
}
.details .information .sale span {
  font-weight: 600;
}
.details .button button {
  height: 48px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #f60;
  color: #fff;
  outline: none;
  transition: all ease .4s;
}
.details .button button h2 {
  font-size: 16px;
  font-weight: 700;
  margin: 2px 0 0 0;
}
.details .button button p {
  font-size: 12px;
  margin: 0;
}
.details .button .btn-1{
  background: #f60;
}
.details .button .btn-1:hover {
  color: #f60;
  background: #fff;
}
.details .button .btn-2:hover,
.details .button .btn-3:hover{
  color: #f60;
}
.details .button .btn-2 {
  background: #e00;
}
.details .button .btn-3 {
  background: #23c017;
}
.details .support {
  text-align: center;
  display: block;
  font-size: 14px;
  margin-top: 30px;
}
.details .support a{
  font-weight: 600;
  color: #f60;
}
.details .support a:hover{
  color: #277cea;
  text-decoration: none;
}
.details .address {
  margin-top: 15px;
}
.details .address .phone {
  padding: 0;
}
.details .address .phone li {
  list-style: none;
  font-size: 12px;
  margin-bottom: 10px;
}
.details .address .phone li i {
  color: #f60;
}
.details .address .phone li a {
  font-weight: 600;
  color: #e67e22;
  text-decoration: none;
}
.details .address .insurance {
  padding: 0;
  border-bottom: 1px solid rgba(192, 192, 192, .5);
}
.details .address .insurance li {
  list-style: none;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 22px;
}
.details .address .insurance li span{
  font-weight: 400;
}
.details .address .notification {
  padding: 0;
}
.details .address .notification div{
  display: flex;
  margin-bottom: 10px;
}
.details .address .notification div img {
  width: 60px;
  height: 60px;
  border: 1px solid rgba(192, 192, 192, .5);
  border-radius: 5px;
  margin-right: 10px;
}
.details .address .notification div span {
  font-size: 12px;
}
</style>