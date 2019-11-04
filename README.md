# Vue Video Embed component for Vue.js

This is a component for Vue.js to utilize YouTube, Vimeo, DailyMotion, Coub iframe embed API easily.

☞ [Vue JS - The Complete Guide (incl. Vue Router & Vuex)](http://on.codequs.com/e23cdae55c)

☞ [How to Create a Chrome Extension with Vue.js](https://morioh.com/p/0169fb660bae)

☞ [How To Build a Blog with Nest.js, MongoDB, and Vue.js](https://morioh.com/p/74ffc8a798bb)



### Demo

[Vue Video Embed](https://nasa8x.github.io/v-video-embed/dist/www)

### Install

```js
npm install v-video-embed
```

```js
yarn install v-video-embed
```

### Use CDN

```
<script src="https://unpkg.com/v-video-embed/dist/video-embed.min.js" type="text/javascript"></script>

```

```js
import Vue from 'vue'
import Embed from 'v-video-embed'

// global register
Vue.use(Embed);

```


### Youtube

```js
<video-embed src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>

# custom params

<video-embed :params="{autoplay: 1}" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>
```


```js

# vimeo
<video-embed src="https://vimeo.com/370293725"></video-embed>


# dailymotion
<video-embed src="https://dai.ly/x7n7y06"></video-embed>

# coub
<video-embed src="https://coub.com/embed/22eztb"></video-embed>

```

```html
<!-- 21:9 aspect ratio -->
 <video-embed css="embed-responsive-21by9" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>

 <!-- 16:9 aspect ratio: default -->
 <video-embed css="embed-responsive-16by9" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>

 <!-- 4:3 aspect ratio -->
 <video-embed css="embed-responsive-4by3" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>

 <!-- 1:1 aspect ratio -->
 <video-embed css="embed-responsive-1by1" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>

```

```html

<video-embed ref="youtube" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>

<button class="btn btn-primary" v-on:click="change">Change Url</button>


<script>


    export default {

        methods: {

            change() {

                this.$refs.youtube.src = "https://www.youtube.com/watch?v=nqwQpXoSN7Q";

            }
        }

    }
</script>

```