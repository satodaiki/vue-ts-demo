<template>
  <p class="markdown-text">
    {{ convertMarkdown }}
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class MarkdownText extends Vue {

  public markdown = require('markdown').markdown;

  public baseUrl: string = process.env.VUE_APP_BASE_URL;

  @Prop({
    validator(value) {
      const regex = RegExp('^.*\.txt$|^.*\.md$');
      return regex.test(value);
    },
  })
  public textPass!: string;

  get convertMarkdown() {

    let response = '';
    try {
      response = await axios.get(this.baseUrl + this.textPass);
    } catch (error) {
      throw error;
    }

    return response;
  }

}
</script>
