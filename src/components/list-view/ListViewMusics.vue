<template>
    <div class="container">
        <div class="playMusic">
            <svg t="1651038834520" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="5904" width="20" height="20">
                <path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
                      p-id="5905" fill="#515151"></path>
                <path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
                      p-id="5906" fill="#515151"></path>
            </svg>
            播放全部
            <span>（共10首）</span>
            <button>+收藏（{{(aaa.subscribedCount/10000).toFixed(2)}}万）</button>
        </div>
        <ul>
            <li v-for="(item,index) in aaa.tracks">
                <div class="listNumber">
                    {{index+1}}
                </div>
                <div class="message">
                    <p class="name">{{item.name}}</p>
                    <p class="alName">{{item.al.name}}</p>
                </div>
                <div class="icon">
                    <svg t="1651065319225" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="2616" width="10" height="10">
                        <path d="M811.99 242c0 16.582-13.428 30-30 30H242.01c-16.572 0-30-13.418-30-30 0-16.563 13.428-30 30-30h539.98c16.573 0 30 13.438 30 30zM811.99 512c0 16.582-13.428 30-30 30H242.01c-16.572 0-30-13.418-30-30 0-16.563 13.428-30 30-30h539.98c16.573 0 30 13.438 30 30zM811.99 782c0 16.582-13.428 30-30 30H442.107c-16.572 0-30-13.418-30-30 0-16.563 13.428-30 30-30H781.99c16.573 0 30 13.438 30 30z"
                              fill="#333333" p-id="2617"></path>
                        <path d="M371.756 782c0 16.582-13.428 30-30 30H242.01c-16.572 0-30-13.418-30-30 0-16.563 13.428-30 30-30h99.746c16.572 0 30 13.438 30 30z"
                              fill="#37ABE7" p-id="2618"></path>
                    </svg>
                    <svg t="1651065242157" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1583" width="10" height="10">
                        <path d="M837.818182 93.090909c51.2 0 93.090909 41.890909 93.090909 93.090909v651.636364c0 51.2-41.890909 93.090909-93.090909 93.090909H186.181818c-51.2 0-93.090909-41.890909-93.090909-93.090909V186.181818c0-51.2 41.890909-93.090909 93.090909-93.090909h651.636364m0-93.090909H186.181818C83.781818 0 0 83.781818 0 186.181818v651.636364c0 102.4 83.781818 186.181818 186.181818 186.181818h651.636364c102.4 0 186.181818-83.781818 186.181818-186.181818V186.181818c0-102.4-83.781818-186.181818-186.181818-186.181818z"
                              fill="#1D2633" p-id="1584"></path>
                        <path d="M460.8 721.454545l230.4-162.90909c32.581818-23.272727 32.581818-72.145455 0-95.418182l-230.4-162.909091c-39.563636-27.927273-93.090909 0-93.090909 48.872727v325.818182c0 46.545455 53.527273 74.472727 93.090909 46.545454z"
                              fill="#176AFD" p-id="1585"></path>
                    </svg>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListViewMusics",
        props: ['aaa'],
    }
</script>

<style scoped lang="less">
    .container {
        width: 100%;
        border-radius: 20px 20px 0 0;

        .playMusic {
            height: 3vh;
            font-weight: bold;
            padding: 0 10px;
            margin-bottom: 20px;

            span {
                font-size: 12px;
                line-height: 16px;
                color: gray;
            }

            button {
                width: 110px;
                height: 5vh;
                margin-top: -10px;
                border-radius: 2.5vh;
                font-size: 12px;
                color: #fff;
                text-align: center;
                float: right;
                border: 0;
                outline: none;
                vertical-align: middle;
                background: orangered;
            }
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            li {
                width: 100%;
                height: 8vh;
                /*background: lightcoral;*/
                display: inline-block;

                .listNumber {
                    width: 5vw;
                    height: 8vh;
                    float: left;
                    padding: 0 2vw;
                    margin: 0;
                    /*background: orange;*/
                    line-height: 8vh;
                    color: gray;
                    display: inline-block;
                }

                .message {
                    width: 60vw;
                    height: 8vh;
                    padding: 0 2vw;
                    margin: 0;
                    /*background: #42b983;*/
                    display: inline-block;
                    /*
                                        inline-height:8vh*/

                    p {
                        /*display: inline-block;*/
                        margin: 0;
                        padding: 0;
                        display: -webkit-box; //弹性伸缩盒子
                        overflow: hidden;
                        text-overflow: ellipsis; //溢出省略号
                        white-space: nowrap; //溢出不换行
                        /*-webkit-line-clamp: 1;*/
                        /*-webkit-box-orient: vertical;*/
                        width: 100%;
                        height: 50%;
                    }

                    .name {
                        font-weight: bold;
                    }

                    .alName {
                        color: gray;
                    }
                }

                .icon{
                    height: 8vh;
                    float: right;
                    /*background: lightblue;*/
                    padding: 0 2vw;
                    margin: 0;
                    svg{
                        width: 5vw;/*
                        padding: 3vh 2vw;*/
                    }
                }
            }
        }
    }
</style>