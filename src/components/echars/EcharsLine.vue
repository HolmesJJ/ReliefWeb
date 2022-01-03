<template>
<div ref="ids" style="width:100%;height:100%"></div>
</template>

<script>
export default {
    name: "EcharsLine",
    props: {
        data: {
            type: Object,
            default: () => {
                return {
                    datax: [],
                    datay: [],
                    title: '',
                }
            }
        },
        rotate: {
            type: Number(),
            default: () => {
                return -25
            }
        }
    },
    watch: {
        data() {
            this.drawEchats(this.data);
        }
    },
    mounted() {
        this.drawEchats(this.data);
    },
    methods: {
        drawEchats(data) {
            var myChart = this.$echarts.init(this.$refs.ids);
            let pointData = []
            // { value : 80, xAxis: 0, yAxis: 80 },
            console.log(data)
            if (data.emotion.length != 0) {
                data.emotion.forEach((item, index) => {
                    let list = {
                        value: '',
                        xAxis: 0,
                        yAxis: 80
                    }
                    list.value = item
                    list.xAxis = index
                    list.yAxis = parseInt(data.datay[index])
                    pointData.push(list)
                })
            }
            var option = {
                color: ['#5470c6'],
                title: {
                    text: data.title,
                    top: -5,
                },
                tooltip: {
                    trigger: 'axis'
                },
                // legend: {
                //     data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
                // },
                grid: {
                    top: 80,
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                xAxis: {
                    type: 'category',
                    // boundaryGap: false,
                    data: data.datax,
                    axisLabel: {
                        interval: 0,
                        rotate: this.rotate,
                        fontSize: 10,
                    }
                },
                yAxis: {
                    type: 'value',

                },
                series: [{
                    name: '',
                    type: 'line',
                    stack: 'Total',
                    data: data.datay,
                    markPoint: {
                        data: pointData
                    }

                }, ]
            };
            myChart.setOption(option);
        },
    }
}
</script>

<style scoped></style>
