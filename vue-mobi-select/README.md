```javascript
import {VueMobiScroll} from './index'
export default {
  components: {
    VueMobiScroll
  }
}
```
``` javascript
<vue-mobi-scroll :options="selectOptions"></vue-mobi-scroll>
```

```javascript
export default {
    data () {
      return {
        selectOptions: {
          loop: false,// need loop ? true : false
          origin: '请选择',// origin
          selections: [ // name is what you can see, do you want it can be selected？ if yes, disabled: true, if no, disabled: false
            [{name: '请选择', disabled: true},
            {name: '3', disabled: false},
            {name: '4', disabled: false},
            {name: '6',disabled: false},
            {name: '8', disabled: false}]
          ]
        }
      }
    }
  }
```

