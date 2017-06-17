---
nav: zh-CN
---


### XTextarea_COM

<img width="100" src="http://qr.topscan.com/api.php?text=https%3A%2F%2Fvux.li%2Fdemos%2Fv2%2F%23%2Fcomponent%2Fx-textarea"/>

<a href="https://vux.li/demos/v2/#/component/x-textarea" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：https://vux.li/demos/v2/#/component/x-textarea</a>



---

#### 演示

 <div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
   <iframe src="https://vux.li/demos/v2/#/component/x-textarea" width="375" height="667" border="0" frameborder="0"></iframe>
 </div>

#### demo 代码

<p class="tip">下面的$t是Demo的i18n使用的翻译函数，一般情况下可以直接使用字符串。另外，下面代码隐藏了i18n标签部分的代码。</p>

``` html
<template>
  <div>
    <group>
      <x-textarea :max="20" :placeholder="$t('placeholder')" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
    </group>
    <group :title="$t('used with input')">
      <x-input :placeholder="$t('title')"></x-input>
      <x-textarea :max="200" name="description" :placeholder="$t('placeholder')"></x-textarea>
    </group>
    <group :title="$t('hide counter')">
      <x-textarea :max="200" name="detail" :placeholder="$t('placeholder')" :show-counter="false"></x-textarea>
    </group>
    <group :title="$t('autosize')">
      <x-textarea :placeholder="$t('Type something')" :show-counter="false" :rows="1" autosize></x-textarea>
      <x-textarea :title="$t('title')" :placeholder="$t('Type something')" :show-counter="false" :rows="1" autosize></x-textarea>
    </group>
    <group :title="$t('set height=200')">
      <x-textarea :title="$t('title')" :max="200" :placeholder="$t('placeholder')" :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
    </group>
  </div>
</template>



<script>
import { XTextarea, Group, XInput } from 'vux'

export default {
  components: {
    XTextarea,
    Group,
    XInput
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
    }
  }
}
</script>

```


#### Github Issue