<template>
    <div class="container">
        <div class="playMusic">
            播放全部
        </div>
        <ul class="musics">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListViewMusics"
    }
</script>

<style scoped lang="less">
    .container {
        width: 100%;
        background: lightgreen;
        border-radius: 20px 20px 0 0;
        .playMusic{
            padding: 10px 0;
            font-weight: bold;
        }
    }
</style>