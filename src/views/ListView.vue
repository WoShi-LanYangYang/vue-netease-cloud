<template>
    <!--<h1>listview</h1>-->
    <!--{{$route.query}}&lt;!&ndash;父组件MusicList传过来的参数&ndash;&gt;
    {{aaa}}-->
    <ListViewHeader/>
    <ListViewIntroduce :aaa="aaa"/>
    <ListViewIcon :aaa="aaa"/>
    <ListViewMusics/>
    <ListViewPlayer/>

</template>

<script>
    import {getPlayListDetail} from "@/api"
    import ListViewHeader from "@/components/list-view/ListViewHeader";
    import ListViewIntroduce from "@/components/list-view/ListViewIntroduce";
    import ListViewIcon from "@/components/list-view/ListViewIcon";
    import ListViewMusics from "@/components/list-view/ListViewMusics";
    import ListViewPlayer from "@/components/list-view/ListViewPlayer";

    export default {
        name: "ListView",
        components: {ListViewHeader,ListViewIntroduce,ListViewIcon,ListViewMusics,ListViewPlayer},
        data() {
            return {
                aaa: [],
            }
        },
        created() {
            this.getPlayListMusic()//调用getPlayListMusic()想后端要数据，去更新data
        },
        methods: {
            async getPlayListMusic() {
                //2.通过,使用this.$route.query 接收前组件传来的参数
                //3.根据参数id向后台查找，对应歌单里的歌曲等数据信息
                const res = await getPlayListDetail(this.$route.query.id)
                //要到数据，更新自己的data
                this.aaa = res.data.playlist
                /*console.log(res.data.playlist)*/
            }
        }
    }
</script>

<style scoped lang="less">
html{
    /*background: url("{{this.aaa.coverImgUrl }}")*/
}
</style>