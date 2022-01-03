<template>
<div ref="ids" style="width:100%;height:100%"></div>
</template>

<script>
export default {
    name: "EchatsBar",
    props: {
        data: {
            type: Object,
            default: () => {
                return {
                    data: [],
                    value: 0.72,
                    title: '',
                }
            }
        },
    },
    watch: {
        data() {
            this.drawEchats(this.data);
        }
    },
    mounted() {
        console.log(this.data)
        this.drawEchats(this.data);
    },
    methods: {
        drawEchats(data) {
            var myChart = this.$echarts.init(this.$refs.ids);
            const DATA = data.data.sort((a, b) => a[1] - b[1]); // 正序排序
            let SUM = 0;
            DATA.map((item) => {
                // 总合，为计算百分比
                SUM += item[1];
            });
            var option = {
                // 数据集
                dataset: {
                    source: DATA,
                },
                // 浮标提示
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                    formatter: (params) => {
                        // 修改浮标展示
                        if (params[0].name !== '') {
                            return `${params[0].name}：${params[0].value[1]} (${
                                Math.round((params[0].value[1] / SUM) * 10000) / 100 + '%'
                                    })`;
                        }
                    },
                },
                // title 样式
                // title: {
                //     text: this.data.title,
                // },
                grid: {
                    containLabel: true,
                    left: '4%', // 距离左侧偏移量
                },
                xAxis: {
                    // show: false, // 是否开启 X 轴
                    name: '',
                },
                yAxis: {
                    type: 'category',
                    axisLabel: {
                        // Y 轴样式
                        show: true,
                        margin: 15,
                        textStyle: {
                            color: '#000000',
                        },
                    },
                    splitLine: {
                        // 是否展示 Y 轴辅助线
                        show: false,
                    },
                    axisTick: {
                        // 是否展示 Y 轴横线刻度
                        show: false,
                    },
                    axisLine: {
                        // 是否展示 Y 轴竖线
                        show: false,
                    },
                },
                series: [{
                    type: 'bar',
                    barWidth: 30, // 柱子宽度
                    itemStyle: {
                        // 柿子样式
                        normal: {
                            barBorderRadius: [0, 30, 30, 0],
                            color: function (params) {
                                var colorList = ['#fac858', '#91cc75', '#5470c6', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4'];
                                return colorList[params.dataIndex];
                            }
                        },

                    },
                    // 柱子后面跟随的数字
                    label: {
                        show: true,
                        position: 'right',
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: '#727272',
                        formatter: function (params, index) {
                            // 为计算百分比
                            return `${params.value[1]} (${Math.round((params.value[1] / SUM) * 10000) / 100 + '%'})`;
                        },
                    },
                }, ],
            };
            myChart.setOption(option);
        }
    }
}
</script>

<style scoped></style>
