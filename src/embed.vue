<template>

    <div class="embed-responsive" :class="[css]" v-if="valid">
        <iframe loading="lazy" sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
            class="embed-responsive-item" allowfullscreen :src="url"></iframe>
    </div>

</template>



<script>


    export default {
        props: {

            css: {
                type: String,
                default: 'embed-responsive-16by9'
            },

            src: { type: String },

            params: {
                type: Object
            },
        },

        data() {
            return {

                valid: false,
                url: '',

                videos: [
                    {
                        //reg: /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/i,
                        //reg: /^.*(?:(?:v|vi|be|videos|embed)\/(?!videoseries)|(?:v|ci)=)([\w-]{11})/i,
                        reg:/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/i,
                        url: 'https://www.youtube.com/embed/$5',
                        params: {
                            'picture-in-picture': 1,
                            accelerometer: 1,
                            gyroscope: 1

                        }


                    },
                    {
                        reg: /^.*vimeo.com\/(\d+)($|\/|\b)/i,
                        url: 'https://player.vimeo.com/video/$1',
                        params: {
                            title: 0,
                            byline: 0,
                            portrait: 0
                        },


                    },

                    {
                        reg: /^.*(?:\/video|dai.ly)\/([A-Za-z0-9]+)([^#\&\?]*).*/i,
                        url: 'https://www.dailymotion.com/embed/video/$1',
                        params: {
                            autoplay: 0
                        }
                    },

                    {
                        reg: /^.*coub.com\/(?:embed|view)\/([A-Za-z0-9]+)([^#\&\?]*).*/i,
                        url: 'https://coub.com/embed/$1',
                        params: {
                            autoplay: 0
                        }
                    },



                    // {
                    //     reg: /^.*twitch.tv\/videos\/(\d+)($|\/|\b)/i,
                    //     url: 'https://player.twitch.tv/?autoplay=false&video=v$1',
                    //     params: {
                    //         autoplay: false
                    //     },
                    //     callback: function () {
                    //         return 'https://player.twitch.tv/?video=v$1';
                    //     }

                    // }
                ],

            }
        },


        watch: {
            src(val) {

                this.parse();
            },
        },

        methods: {

            parse() {

                if (this.src) {

                    for (let i = 0; i < this.videos.length; i++) {
                        const v = this.videos[i];
                        var m = v.reg.exec(this.src);

                        if (m) {

                            var params = Object.assign({}, v.params, this.params);
                            var query = Object.keys(params).map(key => key + '=' + params[key]).join('&');
                            var and = v.url.indexOf('?') >= 0 ? '&' : '?';
                            this.url = this.src.replace(v.reg, v.url) + and + query;
                            this.valid = true;

                            // console.log(this.url);

                            return;
                        }

                    }

                }

                this.valid = false;
            },

        },

        mounted() {

            this.parse();

        }

    }

</script>