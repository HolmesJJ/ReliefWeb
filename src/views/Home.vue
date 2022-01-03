<template>
<div>
    <button @click="test" style="width: 200px;height: 100px"></button>
</div>
</template>

<script>
import API from '../api/api_user'

export default {
    data() {
        return {

        };
    },
    methods: {
        test() {
            API.login().then(res => {
                console.log(res)
            })
        }
    },
    mounted() {

    }
};
</script>
