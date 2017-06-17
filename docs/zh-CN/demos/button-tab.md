---
nav: zh-CN
---


### ButtonTab_COM

<img width="100" src="http://qr.topscan.com/api.php?text=https%3A%2F%2Fvux.li%2Fdemos%2Fv2%2F%23%2Fcomponent%2Fbutton-tab"/>

<a href="https://vux.li/demos/v2/#/component/button-tab" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：https://vux.li/demos/v2/#/component/button-tab</a>



---

#### 演示

 <div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
   <iframe src="https://vux.li/demos/v2/#/component/button-tab" width="375" height="667" border="0" frameborder="0"></iframe>
 </div>

#### demo 代码

<p class="tip">下面的$t是Demo的i18n使用的翻译函数，一般情况下可以直接使用字符串。另外，下面代码隐藏了i18n标签部分的代码。</p>

``` html
<template>
  <div>
    <div style="padding: 15px;">
      <button-tab>
        <button-tab-item>{{ $t('Today') }}</button-tab-item>
        <button-tab-item selected>{{ $t('This Week') }}</button-tab-item>
        <button-tab-item>{{ $t('This Month') }}</button-tab-item>
      </button-tab>      
      <br>
      <divider>{{ $t('Use v-model to set selected item') }}</divider>
      <br>
      <button-tab v-model="demo01">
        <button-tab-item @on-item-click="consoleIndex()">{{ $t('Articles') }}</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">{{ $t('Products') }}</button-tab-item>
      </button-tab>
      <br>
      <button-tab v-model="demo01">
        <button-tab-item>{{ $t('Articles sync') }}</button-tab-item>
        <button-tab-item>{{ $t('Products sync') }}</button-tab-item>
      </button-tab>
      <br>
      <divider>{{ $t('Red Dot') }}</divider>
      <br>
      <button-tab>
        <button-tab-item selected>{{ $t('All Messages') }}</button-tab-item>
        <button-tab-item><span class="vux-reddot-s">{{ $t('New Messages') }}</span></button-tab-item>
      </button-tab>
    </div>
  </div>
</template>



<script>
import { ButtonTab, ButtonTabItem, Divider } from 'vux'

export default {
  components: {
    ButtonTab,
    ButtonTabItem,
    Divider
  },
  methods: {
    consoleIndex () {
      console.log('click demo01', this.demo01)
    }
  },
  data () {
    return {
      demo01: 0
    }
  }
}
</script>

```


#### Github Issue