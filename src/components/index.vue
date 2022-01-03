<template>
<div :class="personInfoClass">
    <div class="main-table">
        <div class="nav-table">
            <span class="nav-name">Welcome!</span>
            <div class="nav-btn">
                <el-button @click="toLogin">Logout</el-button>
                <el-button @click="addRow">Add Student</el-button>
            </div>
        </div>
        <el-table :data="tableData" style="width: 100%" v-if="this.windowWidth > 500" empty-text="Data is loading">
            <el-table-column prop="student_id" label="Student ID" align="center">
            </el-table-column>
            <el-table-column prop="name" label="Name" align="center" sortable>
            </el-table-column>
            <el-table-column align="center" label="Profile">
                <template slot-scope="scope">
                    <img :size="50" :src="scope.row.avatar" style="width: 50px;height: 50px">
                </template>
            </el-table-column>
            <el-table-column align="center" label="Gender">
                <template slot-scope="scope">
                    <span v-if="scope.row.gender=='F'">Female</span>
                    <span v-if="scope.row.gender=='M'">Male</span>
                </template>
            </el-table-column>
            <el-table-column prop="course" align="center" label="Course">
            </el-table-column>
            <el-table-column prop="score" align="center" sortable label="Overcall Score">
            </el-table-column>
            <el-table-column fixed="right">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="warning">Select</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="nav-table" v-if="this.windowWidth < 500">
            <span class="nav-name">Sort By</span>
            <div class="nav-btn">
                <el-button @click="sortList('username')">UserName</el-button>
                <el-button @click="sortList('score')">Score</el-button>
            </div>
        </div>
        <div class="table-card" v-if="this.windowWidth < 500">
            <div v-for="(item, i) in tableData" :key="i">
                <a-card :title="item.name" class="card-item">
                    <el-button slot="extra" @click="handleClick(item)" type="warning">Select</el-button>
                    <div class="item">
                        <span class="item-name">Student ID:</span>
                        <span class="item-content">{{item.student_id}}</span>
                    </div>
                    <div class="item">
                        <span class="item-name">Name:</span>
                        <span class="item-content">{{item.name}}</span>
                    </div>
                    <div class="item">
                        <span class="item-name">Profile:</span>
                        <img :size="50" :src="item.avatar" style="width: 50px;height: 50px">
                    </div>
                    <div class="item">
                        <span class="item-name">Gender:</span>
                        <span class="item-content"> <span v-if="item.gender=='F'">Female</span>
                            <span v-if="item.gender=='M'">Male</span></span>
                    </div>
                    <div class="item">
                        <span class="item-name">Course:</span>
                        <span class="item-content">{{item.course}}</span>
                    </div>
                    <div class="item">
                        <span class="item-name">Score:</span>
                        <span class="item-content">{{item.score}}</span>
                    </div>
                </a-card>
            </div>
        </div>
        <el-dialog title="Add Student" :visible.sync="dialogVisible" :width="this.windowWidth > 500?'600px':'300px'" :before-close="handleClose">
            <div class="dialog-main">
                <div class="dialog-item">
                    <span class="dialog-span">username</span>
                    <el-input v-model="params.username" placeholder="Please enter username"></el-input>
                </div>
                <div class="dialog-item">
                    <span class="dialog-span">password</span>
                    <el-input placeholder="Please input a password" v-model="params.password" show-password></el-input>
                </div>
                <div class="dialog-item">
                    <span class="dialog-span">confirm password</span>
                    <el-input placeholder="Please input a password " v-model="confirmpassword" show-password></el-input>
                </div>
                <div class="dialog-item">
                    <span class="dialog-span">studentId</span>
                    <el-input v-model="params.student_id" placeholder="Please enter"></el-input>
                </div>
                <div class="dialog-item">
                    <span class="dialog-span">name</span>
                    <el-input v-model="params.name" placeholder="Please enter"></el-input>
                </div>
                <div class="dialog-item">
                    <span class="dialog-span">avatar</span>
                    <el-upload action="" :file-list="diaLogForm.imgBroadcastList" list-type="picture-card" :on-remove="handleRemove" :on-success="unloadSuccess" :class="{hide:unloadVisibel}" :on-change="beforeAvatarUpload" ref='upload' v-if="params.avatar==''">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <div v-if="params.avatar!=''" class="img-flot">
                        <i class="el-icon-delete flot" @click="onchengimg"></i>
                        <img class="img" :src="params.avatar" alt="">
                    </div>
                    <!-- <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="unloadSuccess" :on-remove="handleRemove" :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload> -->
                </div>
                <div class="dialog-item">
                    <span class="dialog-span">gender</span>
                    <el-select v-model="params.gender" placeholder="Please select">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialog-item">
                    <span class="dialog-span">phone</span>
                    <el-input v-model="params.phone" placeholder="Please enter"></el-input>
                </div>
                <div class="dialog-item">
                    <span class="dialog-span">email</span>
                    <el-input v-model="params.email" placeholder="Please enter"></el-input>
                </div>
                <div class="dialog-item">
                    <span class="dialog-span">academicYear</span>
                    <el-select v-model="params.academic_year" placeholder="Please select">
                        <el-option v-for="item in optionsAC" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialog-item">
                    <span class="dialog-span">department</span>
                    <el-select v-model="params.department" placeholder="Please select">
                        <el-option v-for="item in optionsDP" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialog-item">
                    <span class="dialog-span">course</span>
                    <el-select v-model="params.course" placeholder="Please select">
                        <el-option v-for="item in optionsCS" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">Cancel</el-button>
                <el-button type="primary" @click="submitAdd">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</div>
</template>

<script>
import API from '../api/api_user'
export default {
    name: "index",
    data() {
        return {
            tableData: [],
            dialogVisible: false,
            options: [{
                value: 'M',
                label: 'Male'
            }, {
                value: 'F',
                label: 'Female'
            }],
            optionsAC: [{
                value: '1',
                label: 'Year 1'
            }, {
                value: '2',
                label: 'Year 2'
            }, {
                value: '3',
                label: 'Year 3'
            }, {
                value: '4',
                label: 'Year 4'
            }],
            optionsDP: [{
                value: 'Computing',
                label: 'Computing'
            }, {
                value: 'Engineering',
                label: 'Engineering'
            }, {
                value: 'Science',
                label: 'Science'
            }, {
                value: 'Economics',
                label: 'Economics'
            }, {
                value: 'Medicine',
                label: 'Medicine'
            }],
            optionsCS: [{
                value: 'Computer Science',
                label: 'Computer Science'
            }, {
                value: 'Information Systems',
                label: 'Information Systems'
            }, {
                value: 'Computer Engineering',
                label: 'Computer Engineering'
            }, {
                value: 'Business Analytics',
                label: 'Business Analytics'
            }, {
                value: 'Information Security',
                label: 'Information Security'
            }],
            params: {
                username: '',
                password: '',
                student_id: '',
                name: '',
                phone: '',
                email: '',
                gender: '',
                academic_year: '',
                department: '',
                course: '',
                avatar: '',
            },
            dialogImageUrl: '',
            dialogVisibleimg: false,
            unloadVisibel: false,
            confirmpassword: '',
            windowWidth: document.documentElement.clientWidth,
            width: '600px',
            flag: 'asc',
            diaLogForm: {
                imgBroadcastList: [], // 储存选中的图片列表
            }
        }
    },
    computed: {
        personInfoClass() {
            console.log(this.windowWidth)
            if (this.windowWidth > 500) {
                return "PersonInfo"
            } else {
                return "mobile_phone"
            }
        },
    },
    watch: {
        '$store.state.screenWidth': function (val) { // 监听屏幕宽度变化
            this.windowWidth = val;
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        handleClick(row) {
            this.$router.push({
                path: '/detail',
                query: {
                    id: row.id
                }
            })

        },
        onchengimg() {
            this.params.avatar = ''
        },
        beforeAvatarUpload(file) {
            const isJPG = file.raw.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error('The uploaded profile picture can only be in JPG format!');
            }
            if (!isLt2M) {
                this.$message.error('Uploaded profile picture size cannot exceed 2MB!');
            }
            this.getFile(file)

        },
        toLogin() {
            this.$router.push('/login')
        },
        addRow() {
            this.dialogVisible = true
        },
        handleRemove(file, fileList) {
            this.params.avatar = ''
            this.unloadVisibel = false;
        },
        unloadSuccess(res, file, filelist) {
            this.imageUrl = URL.createObjectURL(file.raw)
            this.getFile(file)
            this.unloadVisibel = filelist.length >= 1;
        },
        handleClose() {
            this.dialogVisible = false
            Object.assign(this.$data.params, this.$options.data().params)
            // this.$refs.upload.clearFiles()
            this.unloadVisibel = false;
        },
        submitAdd() {
            // id校验
            let pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{9}$/
            // phone校验
            let patternphone = /^[0-9]{8}$/
            // 邮箱验证
            const mailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
            // 验证有无空数据
            let flag = true
            let emptyname = ''
            let list = Object.keys(this.params)
            Object.values(this.params).forEach((item, index) => {
                if (!item) {
                    flag = false
                    emptyname = list[index]
                }
            })
            if (!flag) {
                this.$message.error(emptyname + ' Cannot be empty');
            } else if (!pattern.test(this.params.student_id)) {
                this.$message.error('Please enter 9 digits containing letters and numbers');
            } else if (this.params.password != this.confirmpassword || this.confirmpassword == '') {
                this.$message.error('The two passwords are different');
            } else if (!patternphone.test(this.params.phone)) {
                this.$message.error('Please enter an 8-digit number');
            } else if (!mailReg.test(this.params.email)) {
                this.$message.error('The mailbox entered is in the wrong format');
            } else {
                API.addUser(this.params).then(res => {
                    if (res.code == 0) {
                        this.$message.success('Add student success')
                        this.dialogVisible = false
                        Object.assign(this.$data.params, this.$options.data().params)
                        this.getList()
                    } else if (res.code == 1) {
                        this.$message.error('Student already exists ')
                    } else {
                        this.$message.error('Add student failed')
                    }
                })
            }
        },
        getBase64(file) {
            return new Promise(function (resolve, reject) {
                let reader = new FileReader();
                let imgResult = "";
                reader.readAsDataURL(file);
                reader.onload = function () {
                    imgResult = reader.result;
                };
                reader.onerror = function (error) {
                    reject(error);
                };
                reader.onloadend = function () {
                    resolve(imgResult);
                };
            });
        },
        getFile(file) {
            this.getBase64(file.raw).then(res => {
                this.params.avatar = res
            });
        },
        getList() {
            API.userList().then(res => {
                this.tableData = res

            })
        },
        sortList(data) {
            API.userList({
                sort: data,
                in: this.flag,
            }).then(res => {
                this.flag = 'desc'
                this.tableData = res
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.PersonInfo {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 80px;

    .main-table {
        width: 1400px;

        .nav-table {
            display: flex;
            align-items: center;
            margin-bottom: 40px;

            span {
                font-size: 28px;
                margin-right: 10px;
            }

            .nav-btn {
                .el-button {
                    font-size: 20px !important;
                    padding: 8px !important;
                }
            }
        }

        ::v-deep.el-table th.el-table__cell>.cell {
            font-size: 26px;
            padding: 0;
        }

        ::v-deep .el-table td.el-table__cell div {
            font-size: 20px;
        }

        .el-button--warning {
            font-size: 20px !important;
        }
    }

    ::v-deep.el-input {
        width: 220px !important;
    }

    ::v-deep.el-upload--picture-card {
        width: 100px;
        height: 100px;
        line-height: 100px;
    }

    ::v-deep.hide .el-upload--picture-card {
        display: none;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .img-flot {
        position: relative;

        .flot {
            position: absolute;
            right: 0;
        }

        .img {
            width: 100px;
            height: 100px;
        }
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    .dialog-main {
        width: 600px;
        margin: auto;
    }

    .dialog-item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .dialog-span {
        display: inline-block;
        width: 220px;
        text-align: right;
        margin-right: 10px;
    }
}
</style>
