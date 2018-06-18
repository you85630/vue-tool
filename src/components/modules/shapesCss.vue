<template>
  <div class="shapes-css">
    <div class="css-box" v-for="(li,index) in list" :key="index">
      <h2>{{li.title}}</h2>
      <div class="style-gap" :style="li.style"></div>
      <div class="style-box">
        <dl>
          <dt><span>.{{li.title}}</span>{</dt>
          <dd v-for="(i,val) in li.style" :key="val"><span>{{val}}:</span>{{i}};</dd>
          <dt>}</dt>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: 'square',
          style: {
            width: '100px',
            height: '100px',
            background: 'red'
          }
        },
        {
          title: 'rectangle',
          style: {
            width: '200px',
            height: '100px',
            background: 'red'
          }
        },
        {
          title: 'circle',
          style: {
            width: '100px',
            height: '100px',
            background: 'red',
            '-moz-border-radius': '50px',
            '-webkit-border-radius': '50px',
            'border-radius': '50px'
          }
        },
        {
          title: 'oval',
          style: {
            width: '200px',
            height: '100px',
            background: 'red',
            '-moz-border-radius': '100px/50px',
            '-webkit-border-radius': '100px/50px',
            'border-radius': '100px/50px'
          }
        },
        {
          title: 'triangle-up',
          style: {
            width: 0,
            height: 0,
            'border-left': '50px solid transparent',
            'border-right': '50px solid transparent',
            'border-bottom': '100px solid red'
          }
        },
        {
          title: 'triangle-down',
          style: {
            width: 0,
            height: 0,
            'border-left': '50px solid transparent',
            'border-right': '50px solid transparent',
            'border-top': '100px solid red'
          }
        },
        {
          title: 'triangle-left',
          style: {
            width: 0,
            height: 0,
            'border-top': '50px solid transparent',
            'border-right': '100px solid red',
            'border-bottom': '50px solid transparent'
          }
        },
        {
          title: 'triangle-right',
          style: {
            width: 0,
            height: 0,
            'border-top': '50px solid transparent',
            'border-left': '100px solid red',
            'border-bottom': '50px solid transparent'
          }
        },
        {
          title: 'triangle-topleft',
          style: {
            width: 0,
            height: 0,
            'border-top': '100px solid red',
            'border-right': '100px solid transparent'
          }
        },
        {
          title: 'triangle-topright',
          style: {
            width: 0,
            height: 0,
            'border-top': '100px solid red',
            'border-left': '100px solid transparent'
          }
        },
        {
          title: 'triangle-bottomleft',
          style: {
            width: 0,
            height: 0,
            'border-bottom': '100px solid red',
            'border-right': '100px solid transparent'
          }
        },
        {
          title: 'triangle-bottomright',
          style: {
            width: 0,
            height: 0,
            'border-bottom': '100px solid red',
            'border-left': '100px solid transparent'
          }
        },
        {
          title: 'trapezoid',
          style: {
            'border-bottom': '100px solid red',
            'border-left': '50px solid transparent',
            'border-right': '50px solid transparent',
            height: 0,
            width: '100px'
          }
        },
        {
          title: 'parallelogram',
          style: {
            width: '150px',
            height: '100px',
            '-webkit-transform': 'skew(20deg)',
            '-moz-transform': 'skew(20deg)',
            '-o-transform': 'skew(20deg)',
            background: 'red'
          }
        },
        {
          title: 'pacman',
          style: {
            width: '0px',
            height: '0px',
            'border-right': '60px solid transparent',
            'border-top': '60px solid red',
            'border-left': '60px solid red',
            'border-bottom': '60px solid red',
            'border-top-left-radius': '60px',
            'border-top-right-radius': '60px',
            'border-bottom-left-radius': '60px',
            'border-bottom-right-radius': '60px'
          }
        },
        {
          title: 'moon',
          style: {
            width: '80px',
            height: '80px',
            'border-radius': '50%',
            'box-shadow': '15px 15px 0 0 red'
          }
        },
        {
          title: 'cone',
          style: {
            width: 0,
            height: 0,
            'border-left': '70px solid transparent',
            'border-right': '70px solid transparent',
            'border-top': '100px solid red',
            '-moz-border-radius': '50%',
            '-webkit-border-radius': '50%',
            'border-radius': '50%'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.css-box {
  padding-bottom: 30px;
  h2 {
    position: relative;
    padding: 10px;
    background: rgba(0, 0, 0, 0.15);
    font-size: 16px;
  }
  .style-gap {
    margin: 10px 0;
  }
  .style-box {
    display: block;
    padding: 10px;
    background: #333;
    color: white;
    dl {
      dt,
      dd {
        font-size: 14px;
        line-height: 1.4;
        span {
          margin-right: 6px;
        }
      }
      dd {
        padding-left: 20px;
      }
    }
  }
}
</style>
