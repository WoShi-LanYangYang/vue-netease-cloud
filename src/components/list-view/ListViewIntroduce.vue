<template>
    <div class="introduce">
        <img :src="aaa.coverImgUrl" alt="">
        <div class="introduceR">
            <p class="name">{{aaa.name}}</p>
            <div class="author">
                <!--{{bbb.creator.avatarUrl}}-->
                <img style="width: 40px; height: 40px;border-radius: 50%;display: inline-block;float: left"
                     :src="aaa.creator.avatarUrl" alt="">&nbsp;
                <p class="nickname">{{aaa.creator.nickname}}</p>
            </div>
            <p class="description">{{aaa.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListViewIntroduce",
        props: ['aaa'],
    }
</script>

<style scoped lang="less">
    .introduce {
        padding: 15px;
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
                margin: 1.5vh 0;
                .nickname {
                    margin: 1vh 0;
                    font-size: 12px;
                    display: inline-block;
                    color: gray;
                }
            }

            .description {
                margin: 0;
                font-size: 12px;
                color: gray;
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

        }

    }
</style>