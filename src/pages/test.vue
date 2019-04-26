<template>
  <div class="counts">
    <div class="banner">
      <img src="~img/banner_newyear.png">
    </div>
    <div class="total">

      <div class="game_user">— {{title}} —</div>
      <div class="num"
           ref="numHeight">
        <div class='slot'
             v-for='slot in slots'
             ref='slots'>
          <div class='slot__window'>
            <div class='slot__wrap'>
              <div class='slot__item'
                   v-for='opt in slot.items'>
                <img :src="opt.goodsIconUrl">
                <span class="isTitle">{{opt.prizeName}}</span>
              </div>
              <div class='slot__item slot__item--copy'>
                <img :src="slot.items[0].goodsIconUrl">
                <span class="isTitle">{{slot.items[0].prizeName}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <img src="https://ojlf2aayk.qnssl.com/onebtn.png" v-if="isLucky" class="luckybtn" @click="start"> -->
      <div class="touchbtn_start  point_touch"
           @click="start"></div>

      <div class="btn_group">

        <div class="add_btn">
          <div class="act_rule"
               @click="showdiv(1)">活动规则</div>
          <div class="luck_recond"
               @click="showdiv(2)">中奖记录</div>
        </div>
      </div>

    </div>

    <ruleComponent :itemsListName="itemsListName"
                   v-if="isShowRule"></ruleComponent>
    <codeComponent :itemsListCodeName="itemsListCodeName"
                   v-if="isShowCode"></codeComponent>
    <mt-popup v-model="popupVisible"
              :closeOnClickModal=false
              :modal=false>
      <div class="pop_box"
           @touchmove.prevent>
        <div class="tell_tit">
          <h1 class="pop-idea">用户登录</h1>
        </div>
        <div class="info-set">
          <div class="writer"><span>手机号：</span> <input v-model.trim="ruleForm.phone"
                   type="tel"
                   placeholder="请输入您的入手机号"
                   maxlength="11"
                   class="tel_writer"></div>
          <div class="writer"><span>随机码：</span>
            <input v-model.trim="ruleForm.code"
                   type="text"
                   placeholder="请输入随机码"
                   maxlength="5"
                   class="tel_writer">
            <img :src="createCode"
                 @click="imgClick"
                 class="print-code">
          </div>
          <div class="writer"><span>验证码：</span> <input v-model.trim="ruleForm.createCode"
                   type="tel"
                   placeholder="请输入验证码"
                   maxlength="4"
                   class="tel_writer">
            <div :style="btnImg"
                 @click="reginInto"
                 id="btn">{{reginValue}}</div>
          </div>
        </div>
        <div class="sure_btn"
             @click="buttomRegin">立即登录</div>
        <div class="close-btn"
             @click="popupVisible=false"><img src="~img/close.png"></div>
      </div>
    </mt-popup>
    <transition name="fade">
      <div class="isVodel"
           v-show="popupVisible"
           @touchmove.prevent>
      </div>
    </transition>

    <div class="isVodel"
         v-if="isShowRule"
         @touchmove.prevent></div>

    <div class="isVodel"
         v-if="isShowCode"
         @touchmove.prevent></div>

    <div class="popup"
         v-if="toast_control">
      <div class="popbg"></div>
      <div class="popbox">
        <div class="img"
             :class="{'img1':isImgTrue}"></div>
        <div class="words1">{{hasPrize.words1}}</div>
        <div class="words2">{{hasPrize.words2}}</div>
        <div class="words3"
             v-show="hasPrize.words3!=''">{{hasPrize.words3}}</div>
      </div>
      <div class="close"
           @click="toast_control=false"></div>
    </div>

  </div>
</template>
<script>
const next = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame || function (cb) {
    window.setTimeout(cb, 1000 / 60)
  }
import ruleComponent from "./rule.vue"
import codeComponent from "./code.vue"
import {
  initApi,
  loginApi,
  lotteryApi,
  awardApi,
  getCaptcha,
  sendCaptcha,
  registerApi,
  winning
} from "../api/api";
export default {
  data () {
    return {
      isButton: false,
      popupVisible: false,
      isShowRule: false,
      isShowCode: false,
      createCode: "",
      isImgTrue: false,
      ruleForm: {
        phone: '',
        code: '',
        createCode: "",
      },
      hasPrize: {},
      reginValue: "获取验证码",
      isCode: true, //验证码开关
      toast_control: false,
      itemsList: "",
      itemsListName: "",
      btnImg: {},
      title: '幸运老虎机',
      isLucky: true,
      interval: false,
      numone: 0,
      numtwo: 0,
      numthe: 0,
      textone: 24,
      texttwo: 27,
      textthe: 30,
      slots: [],
      objectItem: [],
      opts: null,
      startedAt: null,
      indexChoice: 0,
      winnum: 0,
      itemsListCodeName: [],
    }
  },
  components: {
    ruleComponent,
    codeComponent
  },
  methods: {
    winningMenu () {
      winning().then((res) => {
        if (res.httpCode = 200) {
          this.itemsListCodeName = res.data;
          this.isShowCode = true;
        }

      })
    },
    showdiv (index) {
      if (index == 1) {
        this.itemsListName = this.itemsList;
        this.isShowRule = true;

      } else {
        if (this.isButton) {
          this.popupVisible = true;
          return
        }
        this.winningMenu();

      }
    },
    loginMenu () {
      let paramsName = "";
      if (window.location.host.split(".")[0] != "192") {
        paramsName = window.location.host.split(".")[0];
      } else {
        paramsName = "m02bsfsk"
      }

      loginApi(paramsName).then((res) => {
        if (res.httpCode == 200) {
          window.localStorage.setItem("activity_lefeng", res.data.sign);
          this.initApiMenu();

        }
      })
    },
    initApiMenu () {
      initApi().then((res) => {
        this.ObjectAll = res.data;
        this.popupVisible = res.data.proRegister;
        this.isButton = res.data.proRegister;
        this.imgClick();

        res.data.marketingCampaign.terms.forEach((item, index) => {
          if (item.termType == 10) {
            this.itemsList = item.termVal;
          }
        })


        res.data.marketingCampaign.pictures.forEach((item) => {
          if (item.picType == "1000") {

            //document.body.style.backgroundImage = "url(" + item.picUrl + ")"
          } else if (item.picType == "1202") {
            //this.beganToDraw = "url(" + item.picUrl + ")"
          } else if (item.picType == "1200") {
            //this.beganToDrawImg = "url(" + item.picUrl + ")"
          }


        })

        res.data.marketingCampaign.prizes.forEach((item, index) => {

          this.objectItem.push({
            "prizeType": index + 1,
            "prizeName": item.prizeName,
            "goodsIconUrl": item.goodsInfo.goodsIconUrl,
            "goodsId": item.goodsId,
          })



        })



        for (var i = 0; i < 4; i++) {
          this.slots.push({
            title: i,
            items: this.objectItem,
          });

        }


        console.log(this.slots);
      })
    },
    buttomRegin () {

      if (this.ruleForm.phone != "" || this.ruleForm.phone) {
        if (/^1[34578]\d{9}$/.test(this.ruleForm.phone)) {
          console.log("手机号通过验证");
        } else {
          this.$toast("请输入正确的手机号")

          return false;
        }
      } else {
        this.$toast("请输入手机号")
        return false;
      }

      if (this.ruleForm.code == "") {
        this.$toast("请输入随机码")
        return false;
      }
      if (this.ruleForm.createCode == "") {
        this.$toast("请输入验证码")
        return false;
      }
      this.$indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      let params = {
        "phone": this.ruleForm.phone,
        "phoneCode": this.ruleForm.createCode,
      }

      registerApi(params).then((res) => {
        this.$indicator.close()
        if (res.httpCode == 200) {
          this.isButton = false;
          this.popupVisible = false;

        } else {
          this.$toast(res.retMsg)
        }
      }).catch((err) => {
        this.$indicator.close();
        this.$toast("接口异常");
      })
    },
    //验证码
    reginInto () {


      if (this.ruleForm.phone != "" || this.ruleForm.phone) {
        if (/^1[34578]\d{9}$/.test(this.ruleForm.phone)) {
          console.log("手机号通过验证");
        } else {
          this.$toast("请输入正确的手机号")

          return false;
        }
      } else {
        this.$toast("请输入手机号")
        return false;
      }

      if (this.ruleForm.code == "") {
        this.$toast("请输入随机码")
        return false;
      }

      if (!this.isCode) {
        return false;
      }
      this.sendCaptchaMenu(this.ruleForm.code);




    },
    //发送验证码
    sendCaptchaMenu (code) {
      let params = {
        "mobile": this.ruleForm.phone,
        "type": "sms_login",
        "captcha": code,
      }
      sendCaptcha(params).then((res) => {
        if (res.httpCode == 200) {
          this.btnImg = {
            "background": "#d3d4d6"
          }
          this.reginValue = "60秒"
          let isNum = 60
          this.isCode = false;
          var inteval = setInterval(() => {
            isNum--
            this.reginValue = isNum + "秒"
            if (isNum == 0) {
              clearInterval(inteval);
              this.isCode = true;
              this.reginValue = "获取验证码"
              this.btnImg = {
                "background": "#fc817e"
              }
            }

          }, 1000);
        } else {
          this.$toast(res.retMsg);
          this.isCode = true;
          this.reginValue = "获取验证码"
          this.btnImg = {
            "background": "#fc817e"
          }
          return false;
        }
      })
    },
    //随机码
    imgClick () {
      getCaptcha().then(res => {
        console.log(res);
        this.createCode = "data:image/png;base64," + res.data;
      });
      //$("#codeImg").attr("src","createCode?r="+Math.random())
    },
    startChou (index) {
      console.log(this.$refs.numHeight.offsetHeight);
      let heightN = this.$refs.numHeight.offsetHeight;

      if (this.opts) {
        return
      }
      this.opts = this.slots.map((data, i) => {
        const slot = this.$refs.slots[i]; // map(function(){})利用map便利slots的每一个选项组,最终得到return的返回值
        // const choice = Math.floor(Math.random() * data.items.length); // 随机生成一个[0,data.items.length]的整数(floor向下取整)
        const choice = index;
        console.log("choice", i, data.items[choice])
        const opts = {
          el: slot.querySelector('.slot__wrap'), //指向奖项元素的父级;
          finalPos: choice * heightN, // 180为每一个奖品滚动标签的高度;
          //        startOffset: 2000 + Math.random() * 500 + i * 500,// 影响转的圈数
          startOffset: 2000 + Math.random() * 500 + i * 500, // 影响转的圈数
          height: data.items.length * heightN,
          duration: 3000 + i * 700, // milliseconds
          isFinished: false,
        }
        return opts
      })
      //    console.log(this.opts);//这个时候this.opts已经和opts一模一样了
      next(this.animate); // 开启动画
    },
    start: function () {
      if (this.isButton) {
        this.popupVisible = true;
        return
      }


      lotteryApi().then((res) => {
        if (res.httpCode == 200) {
          this.objectItem.forEach((item, index) => {
            if (item.goodsId == res.data.goodsId) {

              this.winnum = index;
              this.startChou(this.winnum);
            }
          })
        } else {
          if (res.retCode == "10030001") {
            this.loginMenu();
          } else {
            this.$toast(res.retMsg)
          }
        }
      });


    },
    game_over (index) {
      let _this = this;
      _this.toast_control = true;
      var obj = {}
      if (index == 1) {
        this.isImgTrue = false;
        if (_this.objectItem[_this.winnum].prizeName == "谢谢参与") {
          obj = {
            type: 0,
            words1: '谢谢参与',
            words2: "不要气馁！",
            words3: '还有更多大奖等着你~'
          }
        } else {
          obj = {
            type: 1,
            words1: '恭喜您！',
            words2: "获得" + _this.objectItem[_this.winnum].prizeName,
            words3: ''
          }
        }
      } else {
        this.isImgTrue = true;
        obj = {
          type: 3,
          words1: '抱歉！',
          words2: '出现未知错误，请稍后再试',
          words3: ''
        }
      }

      _this.hasPrize = obj
    },
    //兑奖apo
    awardApiMenu () {
      let _this = this
      awardApi().then((res) => {
        if (res.httpCode == 200) {
          _this.game_over(1);
        } else {
          _this.game_over(2);
        }
      })
    },
    animate: function (timestamp) { // timestamp当前的方法持续的毫秒数
      if (this.startedAt == null) {
        this.startedAt = timestamp // 动画初始时间
      }
      const timeDiff = timestamp - this.startedAt //动画持续的时间
      this.opts.forEach(opt => {
        if (opt.isFinished) {
          return
        }
        const timeRemaining = Math.max(opt.duration - timeDiff, 0); // 总的持续时间 - 动画持续时间 = 剩下的时间,0表示结束
        const power = 3
        const offset = (Math.pow(timeRemaining, power) / Math.pow(opt.duration, power)) * opt.startOffset
        // Math.pow(timeRemaining, power)表示: timeRemaining 的3 次幂;
        // negative, such that slots move from top to bottom
        const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height)
        opt.el.style.transform = "translateY(" + pos + "px)"

        if (timeDiff > opt.duration) {
          //        console.log('finished', opt, pos, opt.finalPost)
          opt.isFinished = true
        }

      })

      if (this.opts.every(o => o.isFinished)) {
        this.opts = null
        this.startedAt = null
        this.awardApiMenu();
        //      console.log('finished')
      } else {
        next(this.animate)
      }
    }
  },
  mounted () {
    this.loginMenu();
  }
}
</script>
<style media="screen">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.mint-indicator {
  position: relative;
  z-index: 2000;
}
.mint-popup {
  z-index: 200 !important;
}
</style>
<style scoped>
.pop_box {
  border-radius: 0.08rem;
  position: relative;
  left: 0;
  width: 6.2rem;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  z-index: 400;
  padding-bottom: 0.35rem;
}
.isVodel {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
  z-index: 100;
}
.tell_tit {
  width: 100%;
  height: 1.44rem;

  background-size: 100% 100%;
}

.pop-idea {
  line-height: 1.44rem;
  font-size: 0.38rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
  background-color: #00aca6;
  background-image: url(~img/clold.png);
}

.info-set {
  text-align: center;
}

.writer {
  position: relative;
  width: 100%;
  border-bottom: 1px solid #989594;
  display: -ms-flexbox;
  display: flex;
  padding-top: 0.08rem;
  padding-bottom: 0.08rem;
}

.writer span {
  text-align: center;
  width: 1.5rem;
  color: #4d3932;
  font-size: 0.28rem;
  line-height: 0.8rem;
}

input[type="text"] {
  -webkit-appearance: none;
  background: none;
  outline: none;
}

.writer input {
  -ms-flex: 1;
  flex: 1;
  color: #5a5340;
  font-size: 0.26rem;
  line-height: 0.3rem;
  border: none;
}

.print-code {
  position: absolute;
  width: 1.39rem;
  height: 0.5rem;
  right: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  margin: 0;
  padding: 0;
  outline: none;
  font-family: Hiragino Sans GB, "sans-serif";
}

.writer span {
  text-align: center;
  width: 1.5rem;
  color: #4d3932;
  font-size: 0.28rem;
  line-height: 0.8rem;
}

#btn {
  position: absolute;
  width: 1.49rem;
  height: 0.6rem;
  line-height: 0.6rem;
  right: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0.45rem;
  text-align: center;
  color: #fff;
  background: #fc817e;
  font-size: 0.22rem;
}

.sure_btn {
  margin-top: 0.3rem;
  line-height: 0.65rem;
  width: 4.2rem;
  background: #fc817e;
  color: #fff;
  font-size: 0.26rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.45rem;
  border-bottom: 4px solid #dc625d;
  text-align: center;
}

.close-btn {
  font-size: 15px;
  margin: 0;
  padding: 0;
  outline: none;
  font-family: Hiragino Sans GB, "sans-serif";
  position: absolute;
  top: -0.19rem;
  right: -0.19rem;
}

.close-btn img {
  width: 0.42rem;
  height: 0.42rem;
}
</style>
<style lang='less' scoped>
</style>