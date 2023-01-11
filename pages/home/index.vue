<template>
	<view class="salary-content">
		<view class="salary-form">
			<view class="salary-form-item">
				<view class="salary-form-item_label">所属地区</view>
				<view>
					<picker :value="cityIndex" :range="cityList" @change="bindPickerChange">
						<view>{{cityList[cityIndex]}}</view>
					</picker>
				</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label">税前基本工资</view>
				<view>
					<input v-model="salary" focus placeholder="请输入税前工资" />
				</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label">是否缴纳社保</view>
				<radio-group @change="e =>onRadioChange('paySocial', e)" class="salary-form-item_pay_social">
					<label class="mr-8 flex-items-center">
						<view>
							<radio value="1" :checked="paySocial === 1" />
						</view>
						<view>是</view>
					</label>
					<label class="flex-items-center">
						<view>
							<radio value="0" :checked="paySocial === 0" />
						</view>
						<view>否</view>
					</label>
				</radio-group>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label">社保缴纳基数</view>
				<view class="salary-form-item_content">
					<picker :value="socialBaseIndex" :range="socialBaseList" @change="bindPickerChange">
						<view>{{socialBaseList[socialBaseIndex]}}</view>
					</picker>
				</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label">社保基数</view>
				<view class="salary-form-item_content">
					<input v-model="salary" focus placeholder="请输入自定义社保缴纳基数" />
				</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label">公积金缴纳基数</view>
				<view class="salary-form-item_content">
					<picker :value="fundIndex" :range="socialBaseList" @change="bindPickerChange">
						<view>{{socialBaseList[fundIndex]}}</view>
					</picker>
				</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label">公积金基数</view>
				<view class="salary-form-item_content">
					<input v-model="fund" focus placeholder="请输入自定义公积金基数" />
				</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label">公积金缴纳比例</view>
				<view class="salary-form-item_content">
					<input v-model="fundRatio" focus placeholder="请输入自定义公积金基数" />
					<view>%</view>
				</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label">包含专项扣除</view>
				<radio-group @change="e => onRadioChange('hasDeduct',e)" class="salary-form-item_pay_social">
					<label class="mr-8 flex-items-center">
						<view>
							<radio value="1" :checked="hasDeduct === 1" />
						</view>
						<view>包含</view>
					</label>
					<label class="flex-items-center">
						<view>
							<radio value="0" :checked="hasDeduct === 0" />
						</view>
						<view>不包含</view>
					</label>
				</radio-group>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label">子女教育扣除</view>
				<view class="salary-form-item_content">
					<picker :value="childrenDeductIndex" range-key="label" :range="CHILDREN_DEDUCT"
						@change="bindPickerChange">
						<view>{{CHILDREN_DEDUCT[childrenDeductIndex].label}}</view>
					</picker>
				</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label">继续教育扣除</view>
				<view class="salary-form-item_content">
					<picker :value="eduDeductIndex" range-key="label" :range="EDU_DEDUCT" @change="bindPickerChange">
						<view>{{EDU_DEDUCT[eduDeductIndex].label}}</view>
					</picker>
				</view>
			</view>
			<view class="salary-form-item">
				<view class="salary-form-item_label">赡养老人扣除</view>
				<view class="salary-form-item_content">
					<picker :value="eduDeductIndex" range-key="label" :range="EDU_DEDUCT" @change="bindPickerChange">
						<view>{{EDU_DEDUCT[eduDeductIndex].label}}</view>
					</picker>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import '@/styles/index.scss'
	import {
		CHILDREN_DEDUCT,
		EDU_DEDUCT,
		PARENT_DEDUCT,
		PARENT_DEDUCT_OPTIONS,
		BUY_HOUSE_DEDUCT,
		RETENT_HOUSE_DEDUCT,
		BABY_DEDUCT
	} from '@/consts/index'

	export default {
		data() {
			return {
				title: 'Hello2',
				cityList: ['中国', '美国', '巴西', '日本'],
				socialBaseList: ['按照工资', '按照最低标准', '自定义'],
				cityIndex: 0,
				socialBaseIndex: 0,
				fundIndex: 0, // 公积金缴纳选项
				salary: '', // 社保缴纳值
				fund: '', // 公积金缴纳值
				fundRatio: 7, // 公积金缴纳比例
				paySocial: 1, // 是否缴纳社保
				hasDeduct: 1, // 是否有专项扣除
				childrenDeductIndex: 0,
				eduDeductIndex: 0,
				parentDeductIndex: 0,
				parentDeductSelectIndex: 0,
				buyHouseIndex: 0,
				retentHouseIndex: 0,
				babyIndex: 0,
				CHILDREN_DEDUCT,
				EDU_DEDUCT,
				PARENT_DEDUCT,
				PARENT_DEDUCT_OPTIONS,
				BUY_HOUSE_DEDUCT,
				RETENT_HOUSE_DEDUCT,
				BABY_DEDUCT
			}
		},
		onLoad() {

		},
		methods: {
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.cityIndex = e.detail.value
			},
			onRadioChange(key, e) {
				this[key] = e.detail.value
				console.log('是否缴纳社保', this.paySocial, typeof this.paySocial)
			}
		},
		components: {

		}
	}
</script>

<style lang="scss">
	.salary-content {
		.salary-form {
			padding: 10px;

			&-item {
				padding: 12px 0;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #E3E5E7;

				&_label {
					flex-shrink: 0;
					width: 130px;
					color: $uni-text-color-grey;
					font-size: 16px;
					line-height: 22px;
					margin: 0 5px 0 0;
				}

				&_content {
					flex: 1;
					display: flex;

					input {
						flex: 1;
					}
				}

				&_pay_social {
					display: flex;
				}
			}
		}
	}
</style>
