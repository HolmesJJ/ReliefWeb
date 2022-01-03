<template>
<div ref="ids" style="width:100%;height:100%"></div>
</template>

<script>
export default {
    name: "EchatsAPie",
    props: {
        data: {
            type: Object,
            default: () => {
                return {
                    data: [{
                            value: 1048,
                            name: 'happiness, '
                        },
                        {
                            value: 735,
                            name: 'sadness'
                        },
                        {
                            value: 580,
                            name: 'anger'
                        },
                        {
                            value: 484,
                            name: 'fear'
                        },
                        {
                            value: 300,
                            name: 'disgust'
                        }
                    ],
                    title: 'expressionEmotions'
                }
            }
        },
    },
    watch: {
        data() {
            console.log(1)
            this.drawEchats(this.data);
        },
        deep: true
    },
    mounted() {
        this.drawEchats(this.data);
    },
    methods: {
        drawEchats(data) {
            var myChart = this.$echarts.init(this.$refs.ids);
            var option = {
                color: ['#fac858', '#91cc75', '#5470c6', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4'],
                title: {
                    show: true,
                    text: data.title,
                    left: 'center'
                },
                // legend: {
                //     top: 'bottom'
                // },
                // toolbox: {
                //     show: true,
                //     feature: {
                //         mark: { show: true },
                //         dataView: { show: true, readOnly: false },
                //         restore: { show: true },
                //         saveAsImage: { show: true }
                //     }
                // },
                series: [{
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [30, 80],
                    // center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 2
                    },
                    label: {
                        formatter: '{b}:{c}'
                    },
                    labelLine: {
                        length: 2,
                        length2: 5,
                    },
                    data: data.data
                }]
            };
            myChart.setOption(option);
        }
    }
}
</script>

<style scoped></style>
