<template>
  <div class="home">
    123
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { request } from "../config/http.js";
export default {
  name: "Home",
  created() {
    request({
      url: "TelecomServices/numberInquiry",
      method: 'post',
      data: {            
          salesId: "00000000AFDD480EDF572DBBE053AA1410ACE80E",
          provinceCode: "600101",
          cityCode: "8440100",
        }
    }).then(res=> {
      console.log(res)
    })
  },
};
</script>
<style scope lang="less">
  .home {
    width: 375px;
    font-size: 16px;
    background-color: yellow;
  }
</style>
