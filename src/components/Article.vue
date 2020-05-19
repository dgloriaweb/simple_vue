<template>
    <div>
        Article vue page 
        <p>{{ article.title }}</p>
    </div>
</template>

<script>
    export default {
  props: ['article'],
        
    }
</script>

<style lang="scss" scoped>

</style>