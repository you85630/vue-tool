<template>
  <div>
    <flex-box :value="flexBox"></flex-box>
  </div>
</template>

<script>
import flexBox from './../modules/flexBox'
export default {
  components: {
    flexBox
  },
  data () {
    return {
      flexBox: [
        {
          name: 'flex-direction',
          item: [
            {
              id: 1,
              show: false,
              name: 'row'
            },
            {
              id: 2,
              show: false,
              name: 'row-reverse'
            },
            {
              id: 3,
              show: false,
              name: 'column'
            },
            {
              id: 4,
              show: false,
              name: 'column-reverse'
            }
          ]
        }, {
          name: 'flex-wrap',
          item: [
            {
              id: 1,
              show: false,
              name: 'nowrap'
            },
            {
              id: 2,
              show: false,
              name: 'wrap'
            },
            {
              id: 3,
              show: false,
              name: 'wrap-reverse'
            }
          ]
        }, {
          name: 'justify-content',
          item: [
            {
              id: 1,
              show: false,
              name: 'flex-start'
            },
            {
              id: 2,
              show: false,
              name: 'flex-end'
            },
            {
              id: 3,
              show: false,
              name: 'center'
            },
            {
              id: 4,
              show: false,
              name: 'space-between'
            },
            {
              id: 5,
              show: false,
              name: 'space-around'
            }
          ]
        }, {
          name: 'align-items',
          item: [
            {
              id: 1,
              show: false,
              name: 'stretch'
            }, {
              id: 2,
              show: false,
              name: 'flex-start'
            },
            {
              id: 3,
              show: false,
              name: 'flex-end'
            },
            {
              id: 4,
              show: false,
              name: 'center'
            },
            {
              id: 5,
              show: false,
              name: 'baseline'
            }
          ]
        }, {
          name: 'align-content',
          item: [
            {
              id: 1,
              show: false,
              name: 'stretch'
            }, {
              id: 2,
              show: false,
              name: 'flex-start'
            },
            {
              id: 3,
              show: false,
              name: 'flex-end'
            },
            {
              id: 4,
              show: false,
              name: 'center'
            },
            {
              id: 5,
              show: false,
              name: 'space-between'
            },
            {
              id: 6,
              show: false,
              name: 'space-around'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
