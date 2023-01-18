<template>
  <view class="year-salary-page salary-form">
    <view class="flex-items-center salary-form-item">
      <view class="salary-form-item_label label-w">计税方式</view>
      <radio-group class="flex-items-center">
        <label class="mr-8 flex-items-center">
          <view>
            <radio value="1" :checked="type === 1" />
          </view>
          <view>单独计税</view>
        </label>
        <!-- <label class="flex-items-center">
          <view>
            <radio value="0" :checked="type === 2" />
          </view>
          <view>合并计税</view>
        </label> -->
      </radio-group>
    </view>
    <view class="salary-form-item">
      <view class="salary-form-item_label label-w">年终奖</view>
      <view class="salary-form-item_content">
        <input v-model="bonus" focus placeholder="请输入年终奖金额" />
      </view>
    </view>
    <view class="mt-20">
      <button type="primary" plain="true" @click="calcSingleBonus">计算</button>
    </view>
    <view class="bonus-result mt-30" v-if="showResult">
      <view>计算结果</view>
      <view class="salary-form-item">
        <view class="salary-form-item_label label-w leave-bonus">实发工资</view>
        <view class="leave-bonus">{{ currency(leaveBonus) }} 元</view>
      </view>
      <view class="salary-form-item">
        <view class="salary-form-item_label label-w">应缴税款</view>
        <view>{{ currency(tax) }}元</view>
      </view>
      <view class="salary-form-item">
        <view class="salary-form-item_label label-w">适用税率</view>
        <view>{{ rate(rateInfo.rate) }}</view>
      </view>
      <view class="salary-form-item">
        <view class="salary-form-item_label label-w">速算扣除数</view>
        <view>{{ rateInfo.decrease }}元</view>
      </view>
    </view>
  </view>
</template>

<script>
import "@/styles/index.scss";
import { currencyHandle, toRate } from "@/utils/format";
export default {
  data() {
    return {
      type: 1,
      singleRateMap: [
        {
          value: 5000,
          rate: 0,
          decrease: 0,
        },
        {
          value: 36000,
          rate: 0.03,
          decrease: 0,
        },
        {
          value: 144000,
          rate: 0.1,
          decrease: 2520,
        },
        {
          value: 300000,
          rate: 0.2,
          decrease: 16920,
        },
        {
          value: 420000,
          rate: 0.25,
          decrease: 31920,
        },
        {
          value: 660000,
          rate: 0.3,
          decrease: 52920,
        },
        {
          value: 960000,
          rate: 0.35,
          decrease: 85920,
        },
        {
          value: Number.MAX_VALUE,
          rate: 0.45,
          decrease: 181920,
        },
      ],
      bonus: "",
      leaveBonus: "",
      average: "",
      tax: "",
      rateInfo: {},
      showResult: false,
    };
  },
  methods: {
    calcSingleBonus() {
      this.showResult = false;
      let item = this.singleRateMap.find((it) => it.value >= this.bonus);
      if (!item) {
        item = this.singleRateMap[this.singleRateMap.length - 1];
      }
      this.rateInfo = item;

      this.tax = this.bonus * this.rateInfo.rate - this.rateInfo.decrease / 12;
      this.leaveBonus = this.bonus - this.tax;
      this.average = this.bonus / 12;
      this.showResult = true;
    },
    currency(value, currency = "", decimals = 2) {
      return currencyHandle(value, currency, decimals);
    },
    rate(value) {
      return toRate(value);
    },
  },
};
</script>

<style lang="less">
.label-w {
  width: 90px;
}

.mt-20 {
  margin-top: 20px;
}

.mt-30 {
  margin-top: 30px;
}

.leave-bonus {
  font-weight: 500;
}
</style>
