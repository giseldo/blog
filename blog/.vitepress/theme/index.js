import DefaultTheme from 'vitepress/theme';
import './custom.css'
import 'viewerjs/dist/viewer.min.css';
import './custom.css'
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';
// componentes Vue
import Layout from './Layout.vue'
import SimpleNewsletter from './components/SimpleNewsletter.vue'
import Popup from './components/Popup.vue'
import { useNewsletterStore } from './store/NewsletterStore'
import { createPinia } from 'pinia'
const pinia = createPinia()

export default {
    Layout,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // Register global components, if you don't want to use it, you don't need to add it
        ctx.app.use(pinia)
        ctx.app.component('vImageViewer', vImageViewer);
        ctx.app.component('SimpleNewsletter', SimpleNewsletter);
        ctx.app.component('Popup', Popup)
    },
    setup() {
        // Get route
        const route = useRoute();
        // Using
        imageViewer(route);

        const store = useNewsletterStore()
    }
};