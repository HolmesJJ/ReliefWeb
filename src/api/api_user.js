import * as API from "./";
export default {
    // 登录
    login: params => {
        return API.POST_JSON('/login.php', params)
    },
    // 新增用户
    addUser: params => {
        return API.POST_JSON('/add_student.php', params)
    },
    // 用户列表
    userList: params => {
        return API.GET('/list_students.php', params)
    },
    // 用户详情接口
    userDetail: params => {
        return API.GET('/student.php', params)
    }
}
