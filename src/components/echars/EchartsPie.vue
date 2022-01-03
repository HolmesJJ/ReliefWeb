<template>
<div ref="ids" style="width:100%;height:100%"></div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {
                return {
                    value: 0.42,
                }
            }
        },
        fontSize: {
            type: String,
            default: () => {
                return '60'
            }
        },
    },
    data() {
        return {
            colorArr: ['#62ff00', '#62ff00', '#62ff00', '#62ff00', '#62ff00', '#62ff00'],
        }
    },
    watch: {
        data() {
            this.colorchange()
            this.drawEchats(this.data.value);
        }
    },
    mounted() {
        this.colorchange()
        this.drawEchats(this.data.value);
    },
    methods: {
        colorchange() {
            let data = this.data.value
            if (data == 0) {
                this.colorArr = ['#56ff00', '#62ff00', '#62ff00', '#62ff00', '#62ff00', '#62ff00']
            } else if (data <= 0.1) {
                this.colorArr = ['#56ff00', '#72ff00', '#72ff00', '#acff00', '#acff00', '#acff00']
            } else if (data <= 0.3) {
                this.colorArr = ['#9aff00', '#b3ff00', '#c0ff00', '#d5ff00', '#d2ff00', '#f3ff00']
            } else if (data <= 0.5) {
                this.colorArr = ['#afff00', '#caff00', '#e2ff00', '#f7ff00', '#fffb00', '#fcff00']
            } else if (data <= 0.6) {
                this.colorArr = ['#9cff00', '#cdff00', '#deff00', '#f1ff00', '#fff100', '#ffb500']
            } else if (data <= 0.8) {
                this.colorArr = ['#f5ff00', '#f4ff00', '#ffb700', '#ff8900', '#ff5500', '#ff3000']
            } else if (data < 1) {
                this.colorArr = ['#ffdf00', '#ffab00', '#ff8b00', '#ff7400', '#ff5a00', '#ff4200']
            } else if (data == 1) {
                this.colorArr = ['#ff3200', '#ff3200', '#ff3200', '#ff3200', '#ff3200', '#ff3200']
            }
        },
        drawEchats(data) {
            var myChart = this.$echarts.init(this.$refs.ids);
            var option = {
                series: [{
                        type: 'liquidFill',
                        radius: '50%',
                        z: 6,
                        // center: ['25%', '50%'],
                        data: [0.8],
                        outline: { // 轮廓设置
                            show: false,
                        },
                        backgroundStyle: {
                            borderWidth: 1,
                            color: 'transparent',
                        },
                        outline: {
                            show: true,
                            itemStyle: {
                                borderWidth: 0,
                            },
                            borderDistance: 0,
                        },
                        label: {
                            normal: {
                                formatter: (data * 100).toFixed(0),
                                textStyle: {
                                    fontSize: this.fontSize,
                                    fontWeight: '400',
                                    color: '#a06a0a',
                                    textAlign: 'center',
                                    textBorderColor: 'rgba(0, 0, 0, 0)',
                                    textShadowColor: '#fff',
                                    textShadowBlur: '0',
                                    textShadowOffsetX: 0,
                                    textShadowOffsetY: 1,
                                },
                            }
                        },
                        itemStyle: {
                            normal: { // 颜色渐变
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [{
                                            offset: 1,
                                            color: this.colorArr[0]
                                        },
                                        {
                                            offset: 0.8,
                                            color: this.colorArr[1]
                                        },
                                        {
                                            offset: 0.6,
                                            color: this.colorArr[2]
                                        },
                                        {
                                            offset: 0.4,
                                            color: this.colorArr[3]
                                        },
                                        {
                                            offset: 0.1,
                                            color: this.colorArr[4]
                                        },
                                        {
                                            offset: 0,
                                            color: this.colorArr[5]
                                        },
                                    ]
                                )
                            }
                        },

                    }, {
                        name: '第二层白边',
                        type: 'pie',
                        z: 3,
                        radius: ['0%', '55%'],
                        // center: ['25%', '50%'],
                        hoverAnimation: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                            },
                        },
                        data: [{
                                value: 100,
                                itemStyle: {
                                    normal: {
                                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#fefefe',
                                            },
                                            {
                                                offset: 1,
                                                color: '#e7e8ea',
                                            },
                                        ]),
                                    },
                                },
                            },
                            {
                                value: 0,
                                itemStyle: {
                                    normal: {
                                        color: 'transparent',
                                    },
                                },
                            },
                        ],
                    },
                    {
                        name: '最外绿边',
                        type: 'pie',
                        z: 1,
                        radius: ['0%', '58%'],
                        // center: ['25%', '50%'],
                        hoverAnimation: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                            },
                        },
                        data: [{
                                value: 100,
                                itemStyle: {
                                    color: this.colorArr[0]
                                },
                            },
                            {
                                value: 0,
                                itemStyle: {
                                    normal: {
                                        color: 'transparent',
                                    },
                                },
                            },
                        ],
                    },
                ]
            };
            myChart.setOption(option);
        }
    }
};
</script>

<style scoped></style>
