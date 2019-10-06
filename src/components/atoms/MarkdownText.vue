<template>
  <p class="markdown-text">
    {{ convertMarkdown }}
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MarkdownText extends Vue {

  @Prop({
    validator(value) {
      const regex = RegExp('^.*\.txt$|^.*\.md$');
      return regex.test(value);
    },
  })
  public textPass!: string;

  get convertMarkdown() {

    const markdown = require('markdown');
    const fs = require('fs');

    const markdownText = fs.readFileSync(this.textPass, 'utf8');
    return markdown.toHTML(markdownText);
  }

}
</script>
