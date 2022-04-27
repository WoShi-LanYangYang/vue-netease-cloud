<template>
    <div class="introduce">
        <img :src="bbb.coverImgUrl" alt="">
        <div class="introduceR">
            <p class="name">{{bbb.name}}</p>
            <div class="author">
                <!--{{bbb.creator.avatarUrl}}-->
                <img style="width: 40px; height: 40px;border-radius: 50%;display: inline-block;float: left"
                     :src="bbb.creator.avatarUrl" alt="">&nbsp;
                <p class="nickname">{{bbb.creator.nickname}}</p>
            </div>
            <p class="description">{{bbb.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListViewIntroduce",
        data() {
            return {
                bbb: []
            }
        },
        props: ['aaa'],
        created() {
                /*console.log(this.aaa.creator.avatarUrl)
            console.log(typeof this.aaa.creator)*/
            this.newAaa()
            console.log(this.bbb)

        },
        methods:{
            newAaa(){
                return this.bbb=this.aaa
            }
        }
    }
</script>

<style scoped lang="less">
    .introduce {
        padding: 30px 15px 20px 15px;

        img {
            width: 40vw;
        }

        .introduceR {
            float: right;
            width: 40vw;

            .name {
                margin: 0;
                font-weight: bold;
            }

            .author {
                margin: 15px 0;

                .nickname {
                    margin: 15px 0;
                    font-size: 12px;
                    display: inline-block;
                }
            }

            .description {
                margin: 0;
                font-size: 12px;
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

        }

    }
</style>