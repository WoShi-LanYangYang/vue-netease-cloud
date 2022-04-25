<template>
    <div class="swiper-container swiper-home">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="item in imgs" :key="item.id">
                <img :src="item.pic"
                     alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.min.css'
    import Swiper from 'swiper'

    export default {//vue实例
        name: "SwiperCom",
        data() {
            return {
                imgs: [
                    //这个用法不标准，网页上的图片不应该是前端本地的图，应该是来自后端
                    {pic:require('../../assets/img/swiper1.jpg'),id:0},
                    {pic:require('../../assets/img/swiper2.jpg'),id:1},
                    {pic:require('../../assets/img/swiper3.png'),id:2},
                ]
            }
        },
        created() {
            //通过axios向后端要数据，其中包括swiper中的图片路径，把图片路径修改this.imgs
        },
        mounted() {
            //以下代码，要操作dom
            /*created,项目创建后
            mounted,挂载之后（vue实例挂载到真实dom对象上），当vue实例挂载dom之后，在实例中才有真实dom存在*/
            var mySwiper = new Swiper('.swiper-container', {//引号里面可以用id名，class名，都可以，只要能找到对应的container
                loop: true,
                autoplay: true
            })
        }
    }
</script>

<style scoped>
.swiper-slide{
    width:100%
}
</style>