<template>
  <div class="hello">
    <ul ref="wrap" class="wrapper">
      <div></div>
      <li v-for="item in userList" :key="">
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { getPersonInfo } from "@/utils/helloWorld.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      userList: []
    };
  },
  created() {},
  mounted() {
    getPersonInfo().then(
      res => {
        this.userList = res;
      },
      error => {
        console.log(error);
      }
    );
    this.$nextTick(() => {
      this.myScroll = new BScroll(this.$refs.wrap, {
        scrollY: true,
        pullDownRefresh: {
          threshold: 50,
          probeType: 3
        },
        pullUpLoad: {
          threshold: 744
        }
      });
    });
    let scroll = new BScroll('.wrapper', {
    pullUpLoad: true
  })
    scroll.on("pullingDown", () => {
      getPersonInfo().then(
      res => {
        this.userList = res;
      },
      error => {
        console.log(error);
      }
    );
      this.$nextTick(() => {
        scroll.refresh(); // DOM 结构发生变化后，重新初始化BScroll
      });
      scroll.finishPullDown(); // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
    });
    scroll.on("pullingUp", () => {
      this.$nextTick(() => {
        scroll.refresh(); // DOM 结构发生变化后，重新初始化BScroll
      });
      scroll.finishPullUp(); // 上拉加载动作完成后调用此方法告诉BScroll完成一次上拉动作
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li {
  list-style: none;
  margin-bottom: 30px;
}
</style>
