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
              <div><div class="span-blue">已接种 2 针剂</div></div>
            </div>
          </div>
        </div>

        <div></div>
        <!-- <audio loop="loop" id="mp3Btn" style="visibility: hidden;"><source src="[object AudioBufferSourceNode]"></audio> -->
      </div>
      <div class="button-group">
        <div id="launch-btn" >

          <button class="btn" @click="toTravel">查看行程卡</button> </div>
      </div>
      <div class="trave-wrapper">
        <div class="bottom-card-wrapper">
          <div data-v-1f61d2dc="" class="btnsItem">
            <div data-v-1f61d2dc="" class="item"
              onclick="location.href='https://virus-cabin.z.digitalcnzz.com/covidBackZZ/#/reg?param=37967DFFF2E75DBB3CBCDFE6306436DA027110C3CBD7B8405746E565C60968E0BB69D38F8ED7588E5F09A8DDCA1AD4E6E997DE5C3C2EF95817AB3F0378E16E73B55925EC4A508606C1A8CD83399574639DEF473022784D0D567BEDA3C28353118B1F7CE3335BDBDF217BCC59202D7DFBCA11DEA45BD7917A6F0603D81BB1133225B0BA7282EF412A29938697F521E6105636438436210E634fgSSFDSDF224242'"
            >
              <img data-v-1f61d2dc="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABeCAMAAAByzjhiAAAAflBMVEUAAAAR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwR0cwl1DvEAAAAKXRSTlMAYNBwwDAkQBiwIPAPTvygO9odC6kr6btam2gTjoV8XTMH9ePItpRIYzOF2YYAAAISSURBVGje7drbjqJAFIXh1aANKiBHz9raHmbW+7/gdFdAYJqiKmhdOFPf3U7Mb4IxbELhm7fLJxL5/oial9CJm/NtOZJYrkNA8EfslQco+Z8kZ/59XLLXZSo+daaCkwHCSoyrcgoSKpx9ADmVdoDwJqa3clpTaQJkVIuCjv42oloGnxrCjn5IDT6m1LDp6G+oYYp3anA7+q7t277t277t277t2/5r9lNq+Ojor6ghxZYajh39MTVsgQWVEnT04VBpobdHhp19L9K7rjv1r1sVxRij9Fv1BQcIocMeFw93E5Jz3B2vEaWikYdKGnsSsY+m0P3VmrNiLFEEsKzHFbljSl4ApxnNmZ2Q0qTUeD+LaE6UAWFCU5IQlvW4QH6by2T3R33eiHLRMsZd3rq/x7d5ZR2i6fTmCh6+HNgvcu/B1n6yitiwR61eeQLgY+h+dWZT5KM2Yskfvh9mbIs7+8P324BtXmdfcz8f3Nd8vvjP+jlLWzP96Xwi7GGkX3uhfvzc/o8/fvrsvsumOZ7dRzgZVa4uIKzc2qYY2pdz2HQw3GdmuO+/Wj8x1o+9Lzsa68/4zfb/nX4xFjJD/bzavk5G+nWwqMbh75d7++O+fkoN4fB+RrVoO7yPK5XWeKCfLqiQBO3zFd39RNLH1GGvpd86H/Lp/70/vEP2GLSAEK7lx1Runux8y2YxE6qrt/9xhS5j/AE5+m++jR+RigAAAABJRU5ErkJggg==" class="img">
              <div data-v-1f61d2dc="" class="text"> 核酸检测码 </div>
            </div>
          </div>
          <div data-v-1f61d2dc="" class="btnsItem">
            <div data-v-1f61d2dc="" class="item" 
              onclick="location.href='https://i2.hnzwfw.gov.cn/fever-treatment/#/backTownList'"
            >
              <img data-v-1f61d2dc="" src="data:image/png;base64,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" class="img">
              <div data-v-1f61d2dc="" class="text">  来豫报备  </div>
            </div>
          </div>
          <div data-v-1f61d2dc="" class="btnsItem">
            <div data-v-1f61d2dc="" class="item"
              onclick="location.href='https://hscjd.jianguan.henan.gov.cn/hsinfo/hspoint.html'"            
            >
              <img data-v-1f61d2dc="" src="data:image/png;base64,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" class="img">
              <div data-v-1f61d2dc="" class="text">  采样点查询  </div>
            </div>
          </div>
          <div data-v-1f61d2dc="" class="btnsItem">
            <div data-v-1f61d2dc="" class="item">
              <img data-v-1f61d2dc="" src="data:image/png;base64,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" class="img">
              <div data-v-1f61d2dc="" class="text">  出行服务  </div>
            </div>
          </div>
          
        </div>
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
          font-size: 18px;
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
    #launch-btn {
      color: #07c160;
      border-radius: 9999;
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {padding: 12px; background-color: #fff; font-size: 16px; color: #07c160; border-radius: 29999px; width: 100%; height: 100%; border: 1px solid #07c160; display: flex; align-items: center; justify-content: center;}    
    }
  }
  .trave-wrapper {
    margin: 16px 0;
    .bottom-card-wrapper{
      margin-top: 16px;
      display: flex;
      width: 100%;
      flex-flow: row wrap;
      background: #fff;
      border-radius: 7px;
      padding: 14px 0 18px;      
    }
    .btnsItem{
      display: inline-block;
      flex: 1;
      .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;    
        .img{
          width: 33px;
          height: 33px;   
        }    
        .text{
          margin-top: 7px;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 700;
          color: #4d4d4d;          
        }
      }
    }
  }
}
</style>
