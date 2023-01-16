<template>
	<view class="year-salary-page salary-form">
		<view class="flex-items-center salary-form-item">
			<view class="salary-form-item_label label-w">计税方式</view>
			<radio-group @change="e =>onRadioChange('type', e)" class="flex-items-center">
				<label class="mr-8 flex-items-center">
					<view>
						<radio value="1" :checked="type === 1" />
					</view>
					<view>单独计税</view>
				</label>
				<label class="flex-items-center">
					<view>
						<radio value="0" :checked="type === 0" />
					</view>
					<view>合并计税</view>
				</label>
			</radio-group>
		</view>
		<view class="salary-form-item">
			<view class="salary-form-item_label label-w">年终奖</view>
			<view class="salary-form-item_content">
				<input v-model="bonus" focus placeholder="请输入年终奖金额" />
			</view>
		</view>
		<view class="mt-20">
			<button type="primary" plain="true">计算</button>
		</view>
		<view class="bonus-result mt-30">
			<view>计算结果</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label label-w">应缴税款</view>
				<view>12000元</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label label-w">实发工资</view>
				<view>12000元</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label label-w">平均每月</view>
				<view>12000元</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label label-w">适用税率</view>
				<view>12000元</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label label-w">速算扣除数</view>
				<view>12000元</view>
			</view>
		</view>
	</view>
</template>

<script>
	import '@/styles/index.scss'

	export default {
		data() {
			return {
				type: 0,
				singleRateMap: [{
					value: 3000,
					rate: 0.03,
					decrease: 0
				}],
				bonus: ''
			}
		},
		methods: {
			calcSingleBonus() {

			}
		}
	}
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
</style>
