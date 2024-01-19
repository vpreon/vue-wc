<template>
    <div>
        <label for="">New Message</label>
        <input type="text" v-model="data.text">˝
        <button @click="triggerSubmit">submit</button>
        <div>
            <h1>messages</h1>
            <p v-for="(item, idx) in data.chat" :key="idx">
                {{ item }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const chat = "";

const data = reactive({
    chat: [],
    "text": ""
});

const triggerSubmit = ()=> {
    data.chat.push(data.text);
    data.text = ""
}

</script>