<template>
<div :class="personInfoClass">
    <div class="datail-mian " v-if="visibel">
        <div class="main-car" v-if="this.windowWidth > 500">
            <i class="el-icon-back" @click="comBack"></i>
            <div class="main-left">
                <img :src="params.avatar" class="main-img">
            </div>
            <div class="main-mid">
                <div class="item">
                    <span class="item-name">Student ID:</span>
                    <span class="item-content">{{this.params.student_id}}</span>
                </div>
                <div class="item">
                    <span class="item-name">Name:</span>
                    <span class="item-content">{{this.params.name}}</span>
                </div>
                <div class="item">
                    <span class="item-name">Gender:</span>
                    <span v-if="this.params.gender=='M'" class="item-content">Famale</span>
                    <span v-else class="item-content">Male</span>
                </div>
                <div class="item">
                    <span class="item-name">Phone:</span>
                    <span class="item-content">{{this.params.phone}}</span>
                </div>
                <div class="item">
                    <span class="item-name">Email:</span>
                    <span class="item-content">{{this.params.email}}</span>
                </div>
                <div class="item">
                    <span class="item-name">AcademicYear:</span>
                    <span class="item-content">Year{{this.params.academicYear}}</span>
                </div>
                <div class="item">
                    <span class="item-name">Department:</span>
                    <span class="item-content">{{this.params.department}}</span>
                </div>
                <div class="item">
                    <span class="item-name">Course:</span>
                    <span class="item-content">{{this.params.course}}</span>
                </div>
            </div>
            <div class="mian-right">
                <echars-pie :data="datapie" v-if="datapie.value!=0" :fontSize="this.windowWidth < 500?'20':'60'"></echars-pie>
            </div>
        </div>
        <div class="phone-car" v-if="this.windowWidth < 500">
            <i class="el-icon-back" @click="comBack"></i>
            <a-card size="small" style="width: 300px">
                <div slot="title" href="#">
                    <img :src="params.avatar" class="main-img">
                </div>
                <div slot="extra" class="pie">
                    <echars-pie :data="datapie" v-if="datapie.value!=0" :fontSize="this.windowWidth < 500?'20':'60'"></echars-pie>
                </div>
                <div class="main-mid">
                    <div class="item">
                        <span class="item-name">Student ID:</span>
                        <span class="item-content">{{this.params.student_id}}</span>
                    </div>
                    <div class="item">
                        <span class="item-name">Name:</span>
                        <span class="item-content">{{this.params.name}}</span>
                    </div>
                    <div class="item">
                        <span class="item-name">Gender:</span>
                        <span v-if="this.params.gender=='M'" class="item-content">Famale</span>
                        <span v-else class="item-content">Male</span>
                    </div>
                    <div class="item">
                        <span class="item-name">Phone:</span>
                        <span class="item-content">{{this.params.phone}}</span>
                    </div>
                    <div class="item">
                        <span class="item-name">Email:</span>
                        <span class="item-content">{{this.params.email}}</span>
                    </div>
                    <div class="item">
                        <span class="item-name">AcademicYear:</span>
                        <span class="item-content">Year&nbsp;{{this.params.academicYear}}</span>
                    </div>
                    <div class="item">
                        <span class="item-name">Department:</span>
                        <span class="item-content">{{this.params.department}}</span>
                    </div>
                    <div class="item">
                        <span class="item-name">Course:</span>
                        <span class="item-content">{{this.params.course}}</span>
                    </div>
                </div>
            </a-card>
        </div>
        <div class="main-chars" v-if="this.heartRates.datax.length!=0">
            <div class="echars-line">
                <echars-line :data="heartRates" v-if="this.heartRates.datax.length!=0" :rotate="this.windowWidth < 500?-90:-25"></echars-line>
            </div>
            <div class="echars-line">
                <echars-line :data="sleepQualities" v-if="this.sleepQualities.datax.length!=0" :rotate="this.windowWidth < 500?-90:-25"></echars-line>
            </div>
            <div class="echars-line">
                <echars-line :data="expressionEmotionsLine" v-if="this.expressionEmotionsLine.datax.length!=0" :rotate="this.windowWidth < 500?-90:-25"></echars-line>
            </div>
            <div class="echars-pie">
                <div v-for="(item,index) in expressionEmotions" :key="index">
                    <div class="pie-item">
                        <echars-ple2 :data="item"></echars-ple2>
                    </div>
                </div>
            </div>
            <div class="echars-bar">
                <echars-bar :data="expression" v-if="this.expression.data.length!=0"></echars-bar>
            </div>
            <div class="echars-line">
                <echars-line :data="semanticEmotionsLine" v-if="this.semanticEmotionsLine.datax.length!=0" :rotate="this.windowWidth < 500?-90:-25"></echars-line>
            </div>
            <div class="echars-pie">
                <div v-for="(item) in semanticEmotions" :key="item.id">
                    <div class="pie-item">
                        <echars-ple2 :data="item"></echars-ple2>
                    </div>
                </div>
            </div>
            <div class="echars-bar">
                <echars-bar :data="semantic" v-if="this.semantic.data.length!=0"></echars-bar>
            </div>
            <div class="echars-line">
                <echars-line :data="stressesL" v-if="this.stressesL.datax.length!=0" :rotate="this.windowWidth < 500?-90:-25"></echars-line>
            </div>
            <div class="echars-pie">
                <div v-for="(item) in stressesEmotions" :key="item.id">
                    <div class="pie-item">
                        <echars-ple2 :data="item"></echars-ple2>
                    </div>
                </div>
            </div>
            <div class="echars-bar">
                <echars-bar :data="stresses" v-if="this.stresses.data.length!=0"></echars-bar>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import EcharsPie from './echars/EchartsPie.vue'
import EcharsLine from './echars/EcharsLine.vue'
import EcharsPle2 from './echars/EchatsAPie.vue'
import EcharsBar from './echars/EcharsBar.vue'
import API from '../api/api_user'

export default {
    name: "Detail",
    components: {
        EcharsPie,
        EcharsLine,
        EcharsPle2,
        EcharsBar
    },
    data() {
        return {
            params: {
                student_id: '',
                name: '',
                gender: '',
                academicYear: '',
                department: '',
                course: '',
                avatar: '',
                email: '',
                phone: '',
            },
            visibel: false,
            datapie: {
                value: 0,
            },
            heartRates: {
                datax: [],
                datay: [],
                title: 'Heart Rates',
                emotion: [],
            },
            sleepQualities: {
                datax: [],
                datay: [],
                emotion: [],
                title: 'Sleep Qualities'
            },
            stresses: {
                data: [],
                title: 'Stresses'
            },
            expression: {
                data: [],
                title: 'Expression Emotions'
            },
            semantic: {
                data: [],
                title: 'Semantic Emotions'
            },
            stressesL: {
                datax: [],
                datay: [],
                emotion: [],
                title: 'Stresses'
            },
            expressionEmotionsLine: {
                datax: [],
                datay: [],
                emotion: [],
                title: 'Expression Emotions'
            },
            semanticEmotionsLine: {
                datax: [],
                datay: [],
                emotion: [],
                title: 'Semantic Emotions'
            },
            expressionEmotions: [],
            semanticEmotions: [],
            stressesEmotions: [],
            windowWidth: document.documentElement.clientWidth,

        }
    },
    computed: {
        personInfoClass() {
            console.log(this.windowWidth)
            if (this.windowWidth > 500) {
                return "PersonInfo"
            } else {
                return "mobile_phone_detail"
            }
        },
    },
    watch: {
        '$store.state.screenWidth': function (val) { //监听屏幕宽度变化
            this.windowWidth = val;
        }
    },
    mounted() {
        this.showList()
    },
    methods: {
        comBack() {
            //                this.imageT = 'data:image/png;base64,'+ res.data.img ;
            this.$router.push('/index')
        },
        showList() {
            API.userDetail({
                id: this.$route.query.id
            }).then(res => {
                console.log(res)
                this.datapie.value = res.score / 100
                console.log(this.datapie.value)
                this.params.avatar = res.avatar
                this.params.course = res.course
                this.params.department = res.department
                this.params.email = res.email
                this.params.gender = res.gender
                this.params.name = res.name
                this.params.phone = res.phone
                this.params.student_id = res.student_id
                this.params.academicYear = res.academic_year

                res.heart_rates.forEach(item => {
                    this.heartRates.datax.push(item.timestamp)
                    this.heartRates.datay.push(item.score)

                })
                res.sleep_qualities.forEach(item => {
                    this.sleepQualities.datax.push(item.timestamp)
                    this.sleepQualities.datay.push(item.score)
                })
                res.expressions.line.forEach(item => {
                    this.expressionEmotionsLine.datax.push(item.timestamp)
                    this.expressionEmotionsLine.datay.push(item.score)
                    this.expressionEmotionsLine.emotion.push(item.emotion)
                })
                res.semantemes.line.forEach(item => {
                    this.semanticEmotionsLine.datax.push(item.timestamp)
                    this.semanticEmotionsLine.datay.push(item.score)
                    this.semanticEmotionsLine.emotion.push(item.emotion)
                })
                res.stresses.line.forEach(item => {
                    this.stressesL.datax.push(item.timestamp)
                    this.stressesL.datay.push(item.score)
                    this.stressesL.emotion.push(item.type)
                })
                this.checkList(res.expressions.pies, 'expressionEmotions')
                this.checkList(res.semantemes.pies, 'semanticEmotions')
                this.checkList(res.stresses.pies, 'stressesEmotions')
                this.checkBar(res.stresses.bar, 'stressesEmotions')
                this.checkBar(res.semantemes.bar, 'semanticEmotions')
                this.checkBar(res.expressions.bar, 'expressionEmotions')
                this.visibel = true
            })
        },
        checkList(data, dataname) {
            for (let i = 0; i < data.length; i++) {
                let listArry = {
                    data: [],
                    title: ''
                }
                data[i].forEach(item => {
                    let list = {
                        name: '',
                        value: ''
                    }
                    if (dataname == 'stressesEmotions') {
                        list.name = item.type
                    } else {
                        list.name = item.emotion
                    }
                    list.value = item.count
                    listArry.data.push(list)
                })
                switch (i) {
                    case 0:
                        listArry.title = '10 days';
                        break;
                    case 1:
                        listArry.title = '30 days';
                        break;
                    case 2:
                        listArry.title = '60 days';
                        break;
                    case 3:
                        listArry.title = '90 days';
                        break;
                }
                if (dataname == 'expressionEmotions') {
                    this.expressionEmotions.push(listArry)
                } else if (dataname == 'semanticEmotions') {
                    this.semanticEmotions.push(listArry)
                } else if (dataname == 'stressesEmotions') {
                    this.stressesEmotions.push(listArry)
                }

            }
        },
        checkBar(data, dataname) {
            let arratlist = []
            data.forEach(item => {
                let list = []
                if (dataname == 'stressesEmotions') {
                    list.push(item.type)
                } else {
                    list.push(item.emotion)
                }
                list.push(parseInt(item.count))
                arratlist.push(list)
            })
            if (dataname == 'expressionEmotions') {
                this.expression.data = arratlist
            } else if (dataname == 'semanticEmotions') {
                this.semantic.data = arratlist
            } else if (dataname == 'stressesEmotions') {
                this.stresses.data = arratlist
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.PersonInfo {
    width: 100%;
    height: 100%;
    padding-top: 80px;
    display: flex;
    justify-content: center;

    .main-img {
        width: 200px;
        height: 200px;
    }

    .datail-mian {
        width: 1000px;
    }

    .main-car {
        position: relative;
        /* background-color: grey; */
        display: flex;
        height: 320px;
    }

    .main-left {
        padding-top: 40px;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color:gainsboro ; */
    }

    .main-mid {
        padding-top: 40px;
        width: 400px;
        /* background-color: silver; */
    }

    .mian-right {
        /* background-color: grey; */
    }

    .item {
        height: 40px;
        font-size: 20px;

        .item-name {
            width: 150px;
            display: inline-block;
            text-align: right;
            margin-right: 10px;
        }
    }

    .el-icon-back {
        position: absolute;
        left: 0;
        top: -20px;
        font-size: 28px;
    }

    .mian-right {
        width: 400px;
        height: 400px;
    }

    .main-chars {
        margin-top: 40px;
        padding-bottom: 50px;
        /* background-color: silver; */
    }

    .echars-line {
        margin-bottom: 40px;
        height: 300px;
    }

    .echars-pie {
        display: flex;
        position: relative;
        margin-top: 60px;
        flex-flow: row wrap;

        .pie-nav {
            position: absolute;
            left: 0;
            top: -50px;
            font-size: 20px;
            font-weight: 650;
            color: #333333;
        }
    }

    .pie-item {
        width: 250px;
        height: 300px;
    }

    .echars-bar {
        height: 500px;
    }
}
</style>
