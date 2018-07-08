<template>
    <h1>msite</h1>  
</template>

<script>
import { cityGuess } from '@/api/getData'

export default {
    // msite 是由一个独立的项目组做的
    data() {
        return {
            geohash: ''
        }
    },
    async beforeMount() {
        if (this.$route.query.geohash) {
            this.geohash = this.$route.query.geohash
        } else {
            const data = await cityGuess()
            this.geohash = `${data.latitude}, ${data.longitude}`
            console.log(this.geohash)
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>

