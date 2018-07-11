<template>
  <div class="word-count">
    <table>
      <tr>
        <td><p>文字输入：</p></td>
        <td>
          <textarea v-model="wordCount.text"></textarea>
        </td>
      </tr>
      <tr>
        <td><p>字数统计：</p></td>
        <td>
            <ul>
              <li>
                <p><span>中文:</span><span class="red">{{wordCount.cT}}</span></p>
                <p><span>英文:</span><span class="red">{{wordCount.eT}}</span></p>
                <p><span>数字:</span><span class="red">{{wordCount.nT}}</span></p>
              </li>
              <li><p>字符总数：共记<span class="red">{{wordCount.allT}}</span>个字符 (汉字算两个字符，数字、空格、英文字母算做一个字符)</p></li>
            </ul>
        </td>
      </tr>
    </table>
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
.word-count{
  table{
    tr{
      border: 1px solid #eee;
      td{
        padding: 10px;
        border-right: 1px solid #eee;
        p{
          font-size: 14px;
        }
        .red{
          color: #f00;
        }
        textarea{
          width: 100%;
          height: 100px;
          border: none;
          background-color: #fff;
          line-height: 1.4;
        }
        ul{
          li{
            display: flex;
            align-items: center;
            flex-direction: row;
            line-height: 1.4;
            p{
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
