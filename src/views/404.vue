<template>
<div style="height: 100vh;display: flex;align-items: center;justify-content: center">
    <a-result status="404" title="404" sub-title="This page could not be found">
        <template #extra>
            <a-button type="primary" @click="gotoNotFound">
                Back to Home
            </a-button>
            <!-- <span class="test">Test</span> -->
        </template>
    </a-result>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {}
    },
    methods: {
        gotoNotFound() {
            this.$router.replace('/');
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
.test {
    font-size: 1rem;
    width: 9.6rem;
}
</style>
