import './assets/main.css'

import { createApp, defineCustomElement } from 'vue'
import Chat from './components/chat-window.ce.vue'

const element = defineCustomElement(Chat);

customElements.define('chat-window', element)
