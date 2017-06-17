---
nav: zh-CN
---


### Step_COM

<img width="100" src="http://qr.topscan.com/api.php?text=https%3A%2F%2Fvux.li%2Fdemos%2Fv2%2F%23%2Fcomponent%2Fstep"/>

<a href="https://vux.li/demos/v2/#/component/step" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：https://vux.li/demos/v2/#/component/step</a>



---

#### 演示

 <div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
   <iframe src="https://vux.li/demos/v2/#/component/step" width="375" height="667" border="0" frameborder="0"></iframe>
 </div>

#### demo 代码

<p class="tip">下面的$t是Demo的i18n使用的翻译函数，一般情况下可以直接使用字符串。另外，下面代码隐藏了i18n标签部分的代码。</p>

``` html
<template>
  <div style="width: 95%;margin: 0 auto;">
    <br>
    <div>
      <step v-model="step1" background-color='#fbf9fe'>
        <step-item :title="$t('step 1')" description="step 1"></step-item>
        <step-item :title="$t('step 2')" description="step 2"></step-item>
        <step-item :title="$t('step 3')" description="step 3"></step-item>
      </step>
    </div>
    <x-hr></x-hr>
    <div>
      <step v-model="step2" background-color='#fbf9fe' gutter="20px">
        <step-item :title="$t('done')"></step-item>
        <step-item :title="$t('processing')"></step-item>
        <step-item :title="$t('end')"></step-item>
      </step>
      <div class="btn_wrap">
        <x-button type="primary" @click.native="nextStep">{{ $t('next step') }}</x-button>
      </div>
    </div>
  </div>
</template>



<script>
import { Step, StepItem, XButton, XHr } from 'vux'

export default {
  components: {
    Step,
    StepItem,
    XButton,
    XHr
  },
  data () {
    return {
      step1: 1,
      step2: 0
    }
  },
  methods: {
    nextStep () {
      this.step2 ++
    }
  }
}
</script>

<style lang="less">
.btn_wrap {
  padding: 0 1rem;
  margin-top: 2rem;
}
</style>

```


#### Github Issue