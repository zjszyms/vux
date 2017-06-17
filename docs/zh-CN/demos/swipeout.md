---
nav: zh-CN
---


### Swipeout_COM

<img width="100" src="http://qr.topscan.com/api.php?text=https%3A%2F%2Fvux.li%2Fdemos%2Fv2%2F%23%2Fcomponent%2Fswipeout"/>

<a href="https://vux.li/demos/v2/#/component/swipeout" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：https://vux.li/demos/v2/#/component/swipeout</a>



---

#### 演示

 <div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
   <iframe src="https://vux.li/demos/v2/#/component/swipeout" width="375" height="667" border="0" frameborder="0"></iframe>
 </div>

#### demo 代码

<p class="tip">下面的$t是Demo的i18n使用的翻译函数，一般情况下可以直接使用字符串。另外，下面代码隐藏了i18n标签部分的代码。</p>

``` html
<template>
  <div>
  <div class="vux-1px-t">
    
    <swipeout>

      <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">{{$t('Yes')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">{{$t('Right')}}</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-t">
        {{$t('JavaScript is the best language')}}
        </div>
      </swipeout-item>

      <swipeout-item :threshold=".5" underlay-color="#ccc">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" background-color="#336DD6">{{$t('Fav')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934">{{$t('Delete')}}</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-tb">
        {{$t('threshold = 0.5')}}
        </div>
      </swipeout-item>

      <swipeout-item :disabled="disabled" ref="swipeoutItem" :right-menu-width="210" :sensitivity="15">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary" :width="70">{{$t('Fav')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="70">{{$t('Delete')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('ignore')" type="default" :width="70">{{$t('Ignore')}}</swipeout-button>
        </div>

        <div slot="left-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">{{$t('Fav')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">{{$t('Delete')}}</swipeout-button>
        </div>

        <div slot="content" class="demo-content vux-1px-b">
        {{$t('now ' + (disabled ? 'disabled' : 'enabled'))}}
        </div>
      </swipeout-item>

    </swipeout>
  </div>
    

    <div style="padding:15px;">
      <x-button @click.native="disabled = false" type="primary" :disabled="!disabled">{{ $t('set Enabled') }}</x-button>
      <x-button @click.native="disabled = true" type="warn" :disabled="disabled">{{ $t('set Disabled') }}</x-button>
      <x-button @click.native="$refs.swipeoutItem.open('left')" type="primary">{{ $t('open left menu') }}</x-button>
      <x-button @click.native="$refs.swipeoutItem.open('right')" type="primary">{{ $t('open right menu') }}</x-button>
      <x-button @click.native="$refs.swipeoutItem.close()" type="warn">{{ $t('close menu') }}</x-button>
    </div>
  </div>
</template>



<script>
import { Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'vux'

export default {
  components: {
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton
  },
  methods: {
    onButtonClick (type) {
      alert('on button click ' + type)
    },
    handleEvents (type) {
      console.log('event: ', type)
    }
  },
  data () {
    return {
      disabled: false
    }
  }
}
</script>

<style lang="less">
.demo-content {
  padding: 10px 10px;
}
</style>

```


#### Github Issue