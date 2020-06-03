<template>
    <div>
        <div class="container">

            <header>
                <h1>Vue Video Embed</h1>
                <h4>This is a component for Vue.js to utilize YouTube, Vimeo, DailyMotion, Coub iframe embed API easily.
                </h4>
            </header>

            <div class="form-group">
                <h2 class="text-center"><a href="https://morioh.com" title="Social Network for Developers">Social
                        Network for Developers</a></h2>
            </div>


            <div class="form-group">

                <video-embed :params="{autoplay: 1}" ref="youtube" src="https://www.youtube.com/watch?v=s4ObxcdXoFE&list=PLOtXQ1m0FkHBRg_6v8lJfX9AKKamgYrjC">
                </video-embed>


            </div>

            <div class="form-group">
                <button class="btn btn-primary" v-on:click="change">Change Url</button>
            </div>


            <div class="form-group">
                <video-embed src="https://vimeo.com/370293725"></video-embed>
            </div>

            <div class="form-group">
                <video-embed src="https://dai.ly/x7n7y06"></video-embed>
            </div>

            <div class="form-group">
                <video-embed src="https://coub.com/embed/22eztb"></video-embed>
            </div>



        </div>


        <footer>

            <p>
                <a class="social-icon" href="https://github.com/nasa8x/v-video-embed" target="_blank">
                    <i class="fa-3x fab fa-github-square"></i>
                </a>

            </p>

            <p>Developed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a><br>
                Made Love by Nasa8x<br>
                <strong>Donate</strong><br>
                <a href="http://vrl.to/ec5cfbae" target="_blank">
                    <img src="https://i.imgur.com/z0p6RvA.png"></a><a href="http://vrl.to/ec5cfbae" target="_blank"><img
                        src="https://i.imgur.com/bEUNBGz.png"></a>
            </p>


        </footer>

    </div>
</template>


<script>


    export default {

        methods: {

            change() {

                this.$refs.youtube.src = "https://www.youtube.com/watch?v=nqwQpXoSN7Q";

            }
        }

    }
</script>