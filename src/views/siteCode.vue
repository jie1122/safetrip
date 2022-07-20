<template>
  <div class="flex-box">
    <div class="flex-header">
      <div class="container">
        <div class="mainBox">
          <div class="mainBox-top green"></div>
          <div class="mainBox-bottom green"></div>
        </div>
        <div class="cartoon">
          <div
            style="width: 100%; height: 100%; overflow: hidden; margin: 0 auto"
            ref="svgContainer"
          ></div>
        </div>
        <div class="area">
          {{ siteName }}
        </div>
        <div class="querylist-card">
          <div class="list">
            <div class="list-date">{{ date }}</div>
            <div class="list-time">
              <div class="time">
                <ul
                  class="numbers hoursFirst"
                  :style="{ top: -13.867 * hoursFirst + 'vw' }"
                >
                  <li>0</li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                </ul>
                <ul
                  class="numbers hoursLast"
                  :style="{ top: -13.867 * hoursLast + 'vw' }"
                >
                  <li>0</li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                </ul>
                <span class="icon">:</span>
                <ul
                  class="numbers minutesFirst"
                  :style="{ top: -13.867 * minutesFirst + 'vw' }"
                >
                  <li>0</li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                </ul>
                <ul
                  class="numbers minutesLast"
                  :style="{ top: -13.867 * minutesLast + 'vw' }"
                >
                  <li>0</li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                </ul>
                <span class="icon">:</span>
                <ul
                  class="numbers secondsFirst"
                  :style="{ top: -13.867 * secondsFirst + 'vw' }"
                >
                  <li>0</li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                </ul>
                <ul
                  class="numbers secondsLast"
                  :style="{ top: -13.867 * secondsLast + 'vw' }"
                >
                  <li>0</li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-content">
      <div class="base-wrapper">
        <div class="travalBox">
          <div class="travalBox-top">
            <div class="name">{{ showDetail ? name : halfName }}</div>
            <div class="card">
              {{ showDetail ? idCard : halfIdCard }}
              <img
                v-show="!showDetail"
                @click="showDetail = true"
                src="data:image/png;base64,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"
                class="eyeIcon"
              />
              <img
                v-show="showDetail"
                @click="showDetail = false"
                src="data:image/png;base64,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"
                class="eyeIcon"
              />
            </div>
          </div>
          <div class="travalBox-bottom">
            <div class="travalBox-left">
              <div class="top-info"><span>核酸检测结果</span></div>
              <div class="yin">
                <div class="hour">24</div>
                <div class="result">
                  <div class="result-top">小时内</div>
                  <div class="result-bottom">阴性</div>
                </div>
              </div>
            </div>
            <div class="travalBox-right">
              <div class="common-label">疫苗接种</div>
              <div><div class="span-blue">已接种 1 针剂</div></div>
            </div>
          </div>
        </div>

        <div></div>
        <!-- <audio loop="loop" id="mp3Btn" style="visibility: hidden;"><source src="[object AudioBufferSourceNode]"></audio> -->
      </div>
      <div class="button-group">
        <van-button plain type="primary" size="large" round="" @click="toTravel"
          >查看行程卡</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import lottie from 'lottie-web'
import animationData from '../utils/animationData.js'
import timeFormat from '../utils/timeFormat.js'
export default {
  data() {
    return {
      timer: null,
      date: '',
      hoursFirst: 1,
      hoursLast: 2,
      minutesFirst: 3,
      minutesLast: 4,
      secondsFirst: 5,
      secondsLast: 0,
      showDetail: false,

      siteName: '',
      name: '',
      idCard: '',
      halfName: '',
      halfIdCard: '',
    }
  },
  computed: {},
  created() {
    document.title = '河南省疫情防控场所码'
    let query = this.$route.query
    console.log(query)
    this.siteName = this.$route.query.siteName
    this.name = this.$route.query.name
    this.idCard = this.$route.query.idCard
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.svgContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    })
    this.infoSplit()
    clearInterval(this.timer)
    this.calcTime()
    this.timer = setInterval(this.calcTime, 1000)
  },
  methods: {
    calcTime() {
      let now = new Date()
      this.date = timeFormat.formatDate(now)
      let time = timeFormat.formatTime(now)
      this.hoursFirst = time[0]
      this.hoursLast = time[1]
      this.minutesFirst = time[3]
      this.minutesLast = time[4]
      this.secondsFirst = time[6]
      this.secondsLast = time[7]
    },
    infoSplit() {
      let nameArr = this.name.split('')
      nameArr[1] = '*'
      this.halfName = nameArr.join('')
      let str1 = this.idCard.slice(0, 6)
      let str2 = '**********'
      let str3 = this.idCard.slice(-4)
      this.halfIdCard = str1 + str2 + str3
    },
    toTravel() {
      window.location.href = 'https://xc.caict.ac.cn/?code=101&ad=1'
    },
  },
}
</script>
<style lang="scss" scoped>
.flex-box {
  width: 100%;
  height: 100%;
  background-color: #f5f6fa;
}
.flex-header {
  .container {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 260px;
    .mainBox {
      height: 220px;
      .green {
        background-color: #01b72f;
      }
      .mainBox-top {
        height: 160px;
      }
      .mainBox-bottom {
        height: 60px;
        border-bottom-right-radius: 60%;
        border-bottom-left-radius: 60%;
      }
    }
    .cartoon {
      height: 260px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 20px;
    }
    .area {
      position: absolute;
      width: 100%;
      top: 60px;
      font-size: 24px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #fff;
      line-height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .querylist-card {
      margin-top: -70px;
      width: 100%;
      padding: 0 20px;
      .list {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 105px;
        background: #fff;
        box-shadow: 0 1px 11px 0 hsl(0deg 0% 80% / 30%);
        border-radius: 4px;
        .list-date {
          height: 28px;
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #6c6c6c;
          line-height: 28px;
        }
        .list-time {
          color: #040404;
          font-size: 52px;
          font-weight: 700;
          width: 100%;
          height: auto;
          .time {
            height: 52px;
            width: 100%;
            font-family: PingFangSC-Bold;
            text-align: center;
            overflow: hidden;
            font-size: 52px;
            color: #000;
            letter-spacing: 7px;
            .icon {
              display: inline-block;
              height: 52px;
              line-height: 52px;
              width: 20px;
              vertical-align: top;
            }
            ul.numbers {
              list-style-type: none;
              padding: 0;
              position: relative;
              display: inline-block;
              transition: all 0.5s ease;
              margin: 0;
              background-color: #fff;
              border-radius: 5px;
              color: #422a2d;
              li {
                height: 52px;
                text-align: center;
                line-height: 52px;
                font-weight: 800;
              }
            }
            ul.numbers.secondsFirst,
            ul.numbers.secondsLast {
              color: #212121;
            }
          }
        }
      }
    }
  }
}

.flex-content {
  flex: 1;
  padding: 0 20px;
  .base-wrapper {
    position: relative;
    .travalBox {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 7px;
      padding: 10px;
      .travalBox-top {
        padding: 0 5px;
        border-bottom: 1px solid #f5f5f5;
        .name {
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #222;
        }
        .card {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #888;
          margin: 8px 0;
          display: flex;
          align-items: center;
          .eyeIcon {
            height: 16px;
            width: 16px;
            margin-left: 10px;
          }
        }
      }
      .travalBox-bottom {
        margin-top: 14px;
        align-items: center;
        min-height: 100px;
        height: auto;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 100%;
        .travalBox-left {
          height: 100%;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          color: #2ba6e4;
          padding: 10px 0;
          margin-right: 8px;
          background: linear-gradient(225deg, #92e97f, #31c564);
          .top-info {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #f4fff3;
          }  
          .yin {
              font-size: 16px;
              font-family: Source Han Sans CN;
              font-weight: 700;
              color: #f4fff3;
              display: grid;
              grid-template-columns: auto auto;
              grid-template-rows: 100%;
              .hour {
                  font-size: 54px;
                  font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 700;
                 padding: 0 2px;
              }
              .result {
                display: flex;
                flex-direction: column;
                .result-top {
                    padding-top: 11px;
                    text-align: center;
                }   
              .result-bottom {
                  font-size: 20px;
                  text-align: center;
                  padding-bottom: 11px;
              }                             
            }
          }                  
        }
        .travalBox-right {
          height: 100%;
          background: rgba(43, 165, 228, 0.05);
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          color: #2ba6e4;
          padding: 10px 0;
        }
        .common-label {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 700;
          color: #4d4d4d;
        }
        .span-blue {
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #3cbaf9;
          font-weight: 700;
        }
      }
    }
  }

  .button-group {
    margin: 16px 0;
    padding: 0 35px;
    .van-button--large {
      height: 44px;
    }
    .van-button--plain.van-button--primary {
      color: #07c160;
      border: 1px solid #07c160;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #2bc150;
    }
  }
}
</style>
