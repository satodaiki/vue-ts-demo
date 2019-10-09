<template>
  <div class="markdown-text" v-html="markdownText"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Axios from 'axios';

@Component
export default class MarkdownText extends Vue {

  public markdown = require('markdown').markdown;

  public baseUrl: string = process.env.VUE_APP_BASE_URL;

  public markdownText: string = '';

  @Prop({
    validator(value) {
      const regex = RegExp('^.*\.txt$|^.*\.md$');
      return regex.test(value);
    },
  })
  public textPass!: string;

  private mounted() {
    Axios.get(this.baseUrl + this.textPass)
      .then((response) => (
        this.markdownText = this.markdown.toHTML(response.data)
      ));
  }
}
</script>
