<template>
  <div>
    <input type="text" placeholder="请选择" readonly :value="value" @click="showScoll">
    <div class="mbsc" v-show="show">
      <div class="mbsc-mask"></div>
      <div class="mbsc-fr">
        <div class="mbsc-btn flex flex-between after-line">
          <div @click="cancel()">取消</div>
          <div @click="ok()">确定</div>
        </div>
        <div class="mbsc-content flex flex-between">
          <div class="mbsc-line after-line before-line"></div>
          <mobi-scroll-part
            ref="part"
            :options="part.options"
            :value="part.value"
            :selection="part.selection"
            :index = "index"
            v-for="(part, index) in parts" @change-val="changeVal">
          </mobi-scroll-part>
          <mobi-scroll-part
            ref="part"
            :options="part.options"
            :value="part.value"
            :selection="part.selection"
            :index = "index"
            v-for="(part, index) in parts" @change-val="changeVal">
          </mobi-scroll-part>
          <mobi-scroll-part
            ref="part"
            :options="part.options"
            :value="part.value"
            :selection="part.selection"
            :index = "index"
            v-for="(part, index) in parts" @change-val="changeVal">
          </mobi-scroll-part>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import mobiScrollPart from './mobiScrollPart.vue'
  export default {
    name: 'vue-mobi-scroll',
    components: {
      mobiScrollPart
    },
    props: ['options'],
    data () {
      return {
        show: false,
        value: '',
        lastValue: '',
        parts: []
      }
    },
    methods: {
      ready () {
        this.parts = []
        for (let i = 0; i < 1; i++) {
          this.parts.push({
            options: {
              loop: this.options.loop,
              freeMode: true,
              label: ['', ''],
              height: {
                allH: 180,
                itemH: 34,
                startTrans: (180 - 34) / 2
              }
            },
            value: this.options.origin,
            selection: this.options.selections[i]
          })
        }
      },
      changeVal (val, index) {
        this.parts[index].value = val
      },
      setValue (newVal) {
        this.parts[0].value = newVal
        this.$refs.part[0].setValue(this.parts[0].value)
      },
      ok () {
        this.show = false
        this.value = 'gggg'
        this.$emit('set-val', this.value)
      },
      cancel () {
        this.show = false
        if(this.lastValue !== '') {
          this.setValue(this.lastValue)
        }
      },
      showScoll () {
        this.show = true
        this.lastValue = this.value
      }
    },
    mounted () {
      this.ready()
    }
  }
</script>
<style scoped>
  .flex {
    display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
    display: -moz-box; /* Firefox 17- */
    display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
    display: -moz-flex; /* Firefox 18+ */
    display: -ms-flexbox; /* IE 10 */
    display: flex; /* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
  }

  .flex-1 {
    flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    box-flex: 1;
    -ms-flex: 1;
  }

  .flex-between {
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -webkit--moz-box-pack: space-between;
    box-pack: space-between;
    justify-content: space-between;
  }

  .after-line:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    background: #e1e1e1;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
  }

  .before-line:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    background: #e1e1e1;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
  }

  .mbsc {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .mbsc-mask {
    background: rgba(0, 0, 0, .2);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .mbsc-fr {
    background: #fff;
    width: 100%;
    /*height: 270px;*/
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .mbsc-btn {
  }

  .mbsc-btn > div {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
  }

  .mbsc-content {
    height: 180px;
    overflow: hidden;
    margin: 10px;
  }
  .mbsc-line {
    position: absolute;
    top: 51%;
    /*margin-top: -17px;*/
    height: 34px;
    width: 100%;
    margin-left: -10px;
  }

  .mbsc-part-wrapper {
    text-align: center;
  }
  .mbsc-item {
    height: 34px;
    line-height: 34px;
    padding: 0 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #9d9d9d;
  }
  .mbsc-chosen {
    color: #000;
  }
  .mbsc-disable {
    opacity: .3;
  }
</style>
