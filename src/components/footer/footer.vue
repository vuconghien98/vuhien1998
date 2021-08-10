<template>
  <div class="footer pt-3">
    <div class="container d-flex">
      <div class="row list">
        <div class="col-12 col-lg-3 mr-auto contact-1">
        <div class="contact ">
          <div class="row contact-3">
            <h3>Thông tin liên hệ</h3>
          <ul>
            <li>
              <a href="#">Giới thiệu công ty</a>
            </li>
            <li>
              <a href="#">Hệ thống cửa hàng</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="#">Mail: vuvanhien3298@gmail.com</a>
            </li>
          </ul>
          </div>
        </div>
        <div class="contact">
          <div class="row contact-3">
            <h3>Hỗ trợ thanh toán</h3>
          <div class="d-flex flex-wrap icon">
            <img src="/footer/1.svg" alt="" class="img_footer">
            <img src="/footer/2.svg" alt="" class="img_footer">
            <img src="/footer/3.svg" alt="" class="img_footer">
            <img src="/footer/4.svg" alt="" class="img_footer">
            <img src="/footer/5.svg" alt="" class="img_footer">
            <img src="/footer/6.svg" alt="" class="img_footer">
          </div> 
          </div>
        </div>
        </div>
        <div class="col-12 d-lg-none text-center">
          <button class="button"
            @click="hiden = !hiden">Mở rộng chân trang</button>
        </div>
        <div class="col-12 col-lg-9 d-flex justify-content-around contact-1"
        v-if="hiden">
        <div class="div contac-3">
          <h3>Thông tin khác</h3>
          <ul>
            <li>
              <a href="#">Quy chế hoạt động</a>
            </li>
             <li>
              <a href="#">Chính sách bảo hành</a>
            </li>
             <li>
              <a href="#">Liên hệ hợp tác kinh doanh</a>
            </li>
             <li>
              <a href="#">Khách hàng Doanh nghiệp</a>
            </li>
             <li>
              <a href="#">Ưu đãi từ đối tác</a>
            </li>
             <li>
              <a href="#">Tuyển dụng</a>
            </li>
             <li>
              <a href="#">Trade-in thu cũ lên đời</a>
            </li> 
          </ul>
      </div>
      <div class="div contac-3">
          <h3>Hỗ trợ khách hàng</h3>
          <ul>
            <li>
              <a href="#">Mua hàng và thanh toán Online</a>
            </li>
             <li>
              <a href="#">Mua hàng trả góp online</a>
            </li>
             <li>
              <a href="#">Tra thông tin đơn hàng</a>
            </li>
             <li>
              <a href="#">Tra thông tin bảo hành</a>
            </li>
             <li>
              <a href="#">Trung tâm bảo hành chính hãng</a>
            </li>
             <li>
              <a href="#">Quy định về việc sao lưu dữ liệu</a>
            </li>
             <li>
              <a href="#">Dịch vụ bảo hành điện thoại</a>
            </li> 
          </ul>
      </div>
      <div class="div contac-3">
        <div class="row">
          <div class="col-12">
          <h3>Gọi tư vấn & khiếu nại</h3>
          <ul>
            <li>
              <span>Gọi mua hàng: <a href="#">0866 411 722</a> (8h00-22h00)</span>
            </li>
            <li>
              <span>Gọi khiếu nại: <a href="#">0866 411 722</a> (8h00-21h00)</span>
            </li>
            <li>
              <span>Gọi hợp tác kinh doanh: <a href="#">0866 411 722</a> (8h00-21h30)</span>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <h3>
            Kết nối với chúng tôi
          </h3>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-youtube"></i>
        </div>
        </div>
      </div>
        </div>
      </div>
    </div>
    <div style="background-color: #f5f6f9">
      <div class="container">
        <p class="mb-0">© Bản quyền thuộc về <span>Công Ty Cổ Phần Viễn Thông Di Động Thông Minh</span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      hiden: false
    }
  },
}
</script>
<style scoped>
@media (max-width: 991px){
  .contact-1{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .hiden{
    display: flex;
  }
  .button{
    font-size: 13px;
  }
  .contact-3{
    display: flex;
    flex-direction: column;
  }
  .contact .icon {
    flex-wrap: wrap;
  }
}

  h3{
    font-size: 14px;
    font-weight: 700;
  }
  ul{
    padding: 0;
  }
  li{
    list-style: none;
    padding-bottom: 8px;
  }
  li span{
    font-size: 14px;
    color: #000;
  }
  li>span>a{
    color: #12df3a;
    font-weight: 500;
  }
  li a{
    text-decoration: none;
    font-size: 14px;
    color: #000;   
  }
  li a:hover{
    color: #f60;
  }
  div img{
    padding: 5px 5px 5px 0;
  }
  div>i {
    padding: 5px;
    font-size: 24px;
    color: #f60;
    cursor: pointer;
  }
  p{
    font-size: 13px;
    text-align: center;
  }
  p>span {
    font-size: 13px;
    color: #000;
    font-weight: 700;
  }
</style>
