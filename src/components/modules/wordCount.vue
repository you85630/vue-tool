<template>
  <div class="word-count">
    <div class="count-box">
      <div class="text">
        <p class="name">文字输入：</p>
        <div class="textarea">
          <textarea v-model="wordCount.text"></textarea>
        </div>
      </div>
      <div class="text">
        <p class="name">字数统计：</p>
        <div class="show-count">
          <ul>
            <li>
              <p><span>中文:</span><span class="red">{{wordCount.cT}}</span></p>
              <p><span>英文:</span><span class="red">{{wordCount.eT}}</span></p>
              <p><span>数字:</span><span class="red">{{wordCount.nT}}</span></p>
            </li>
            <li>字符总数：共记<span class="red">{{wordCount.allT}}</span>个字符 (汉字算两个字符，数字、空格、英文字母算做一个字符)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      wordCount: {
        text: '', // 输入内容
        cT: 0, // 中文
        eT: 0, // 英文
        nT: 0, // 数字
        allT: 0 // 字符总数
      }
    }
  },
  watch: {
    'wordCount.text': 'changeText'
  },
  methods: {
    changeText (e) {
      // 字符总数
      let iTotal = 0
      let eTotal = 0
      let inum = 0

      for (let i = 0; i < e.length; i++) {
        let c = e.charAt(i)
        if (c.match(/[0-9]/)) {
          inum++
        }
        if (c.match(/[\u4e00-\u9fa5]/)) {
          iTotal++
        }
        // eslint-disable-next-line
        if (!c.match(/[^\x00-\xff]/)) {
          eTotal++
        }
      }
      // 字符总数
      this.wordCount.allT = e.replace(/[\u0391-\uFFE5]/g, 'aa').length
      // 中文
      this.wordCount.cT = iTotal
      // 英文
      this.wordCount.eT = eTotal
      // 数字
      this.wordCount.nT = inum
    }
  }
}
</script>

<style lang="scss" scoped>
.word-count {
}
.count-box {
  display: flex;
  flex-direction: column;
  background-color: #e5f0fb;
}
.text {
  display: flex;
  align-items: center;
  border-top: 1px solid #fff;
  .name {
    padding: 0 10px;
    font-size: 14px;
  }
  .textarea {
    padding: 10px;
    width: 100%;
    textarea {
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
      height: 100px;
      border: none;
      background-color: #fff;
      line-height: 1.4;
    }
  }
  .show-count {
    padding: 10px;
    li {
      display: flex;
      white-space: normal;
      font-size: 14px;
      p {
        margin-right: 20px;
        margin-bottom: 10px;
      }
      .red {
        margin: 0 4px;
        color: #f00;
      }
    }
  }
}
</style>
