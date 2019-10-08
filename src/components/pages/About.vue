<template>
  <div class="about">
    <markdown-text v-bind:textPass="textPass"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MarkdownText from '@/components/atoms/MarkdownText.vue';

@Component({
  components: {
    MarkdownText,
  },
})
export default class About extends Vue {
  private textPass = 'introduction/chandai.md';
}
</script>
