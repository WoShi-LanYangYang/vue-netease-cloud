<template>
    <nav class="header">
        <div class="headerL">
            <button @click="goBack">
                <svg t="1650955664414" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2149" width="20" height="20">
                    <path d="M249.344 497.664v29.696c0 14.848 11.776 26.624 26.624 26.624h692.224c14.848 0 26.624-11.776 26.624-26.624v-29.696c0-14.848-11.776-26.624-26.624-26.624H275.968c-14.848 0.512-26.624 12.288-26.624 26.624z"
                          p-id="2150"></path>
                    <path d="M146.944 530.944c-10.24-10.24-10.24-27.136 0-37.376l369.664-368.64c10.24-10.24 10.24-27.136 0-37.376l-21.504-21.504c-10.24-10.24-27.136-10.24-37.376 0L42.496 479.744c8.192-7.68 18.944-12.288 30.72-12.288-24.576 0-44.544 19.968-44.544 44.544s19.968 44.544 44.544 44.544c-12.288 0-23.04-4.608-31.232-12.8l414.208 414.208c10.24 10.24 27.136 10.24 37.376 0l21.504-21.504c10.24-10.24 10.24-27.136 0-37.376l-368.128-368.128z"
                          p-id="2151"></path>
                </svg>
            </button>
            歌单
        </div>
        <div class="headerR">
            <router-link to="/search">
                <svg t="1650613137824"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="4584"
                     width="20"
                     height="20">
                    <path d="M756.565333 697.258667c2.133333 1.493333 4.224 3.157333 6.101334 5.12l241.664 241.621333c16.256 16.256 16.512 43.52-0.128 60.16a42.453333 42.453333 0 0 1-60.202667 0.170667l-241.664-241.664a41.429333 41.429333 0 0 1-5.034667-6.101334A424.917333 424.917333 0 0 1 426.666667 853.333333C191.018667 853.333333 0 662.314667 0 426.666667S191.018667 0 426.666667 0s426.666667 191.018667 426.666666 426.666667c0 102.698667-36.266667 196.949333-96.768 270.592zM426.666667 768a341.333333 341.333333 0 1 0 0-682.666667 341.333333 341.333333 0 0 0 0 682.666667z"
                          fill="#3D3D3D" p-id="4585"></path>
                </svg>
            </router-link>
            <router-link to="/login">
                <svg t="1650612884350"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1" xmlns="http://www.w3.org/2000/svg"
                     p-id="3472"
                     width="20"
                     height="20">
                    <path d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z"
                          p-id="3473"></path>
                    <path d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z"
                          p-id="3474"></path>
                    <path d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z"
                          p-id="3475"></path>
                </svg>
            </router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "ListViewHeader",
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped lang="less">
    .header {
        width: 100%;
        background: #fff;
        margin-top: 8px;
        display: inline-block;
        .headerL {
            float: left;
            width: 25vw;
            line-height: 5vh;
            display: flex;
            justify-content: space-between;
            button{
                border: 0;
                outline: none;
                background: #fff;
                vertical-align: middle;
            }
        }
        .headerR {
            float: right;
            width: 25vw;
            line-height: 5vh;
            display: flex;
            justify-content: space-around;
        }
    }
</style>