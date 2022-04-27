<template>
    <!--<h1>listview</h1>-->
    <!--{{$route.query}}&lt;!&ndash;父组件MusicList传过来的参数&ndash;&gt;
    {{aaa}}-->
    <ListViewHeader/>
    <ListViewIntroduce :aaa="aaa"/>
    <ListViewIcon :aaa="aaa"/>
    <ListViewMusics :aaa="aaa"/>
    <ListViewPlayer/>
    <!--{{aaa.tracks}}-->

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
        components: {ListViewHeader, ListViewIntroduce, ListViewIcon, ListViewMusics, ListViewPlayer},
        data() {
            return {
                aaa: {
                    coverImgUrl: '',
                    name: '',
                    commentCount: '',
                    shareCount: '',
                    subscribedCount: '',
                    creator: {
                        avatarUrl: '',
                        nickname: '',
                        description: ''
                    },
                    tracks: [
                        /*{
                            name:'',
                            al:{name:'',}
                        },*/
                    ]
                }
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
                console.log(res.data.playlist)
                console.log(res.data.playlist.tracks[0])
                this.aaa.coverImgUrl = res.data.playlist.coverImgUrl//歌单头像
                this.aaa.name = res.data.playlist.name//歌单名字
                this.aaa.creator.avatarUrl = res.data.playlist.creator.avatarUrl//作者头像
                this.aaa.creator.nickname = res.data.playlist.creator.nickname//作者名字
                this.aaa.description = res.data.playlist.description//歌单描述
                this.aaa.commentCount = res.data.playlist.commentCount//评论数量
                this.aaa.shareCount = res.data.playlist.shareCount//分享数量
                this.aaa.subscribedCount = res.data.playlist.subscribedCount//订阅数量
                /*this.aaa.tracks[0].name = res.data.playlist.tracks[0].name//歌曲名
                this.aaa.tracks[0].al.name = res.data.playlist.tracks[0].al.name//歌曲介绍*/
                this.aaa.tracks = res.data.playlist.tracks
            }
        }
    }
</script>

<style scoped lang="less">
    html {
        /*background: url("{{this.aaa.coverImgUrl }}")*/
        background: lightcoral;
        width: 100vw;
        height: 100vh;
    }
</style>