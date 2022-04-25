<template>
    <nav>
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
        <div>
            <router-link to="/profile">我的</router-link>
            <router-link to="/">发现</router-link>
            <router-link to="/yun-cun">云村</router-link>
            <router-link to="/video">视频</router-link>
        </div>
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
    </nav>
</template>

<script>
    export default {
        name: "HeaderCom"
    }
</script>

<style scoped
       lang="less">
    nav {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        div {
            width: 200px;
            display: flex;
            justify-content: space-between;

            a {
                color: #000;
                text-decoration: none;
            }
        }
    }

    .router-link-active {
        font-weight: 700;
        font-size: 15px;
    }

</style>