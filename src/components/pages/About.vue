<template>
  <div class="about">
    <img v-bind:src="" />
    <markdown-text v-bind:textPass="textPass"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MarkdownText from '@/components/atoms/MarkdownText.vue';

@Component
export default class About extends Vue {
  private textPass = 'introduction/chandai.md';
}
</script>
