
import Embed from './embed.vue';

var VideoEmbed = {
    install: function (Vue) {
        if (Vue.__embed_installed) {
            return;
        }

        Vue.__embed_installed = true;

        Vue.component('video-embed', Embed);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(VideoEmbed);
}

export default VideoEmbed;