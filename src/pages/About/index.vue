<template>About 页面</template>

<script setup lang="ts">
import axios from "axios";

axios.get("www.baidu.com").then((data) => {
  console.log(data);
});
</script>
