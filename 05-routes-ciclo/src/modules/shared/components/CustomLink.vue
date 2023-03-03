<template>
    <div>
        <a v-if="isExternal" 
            :href="link.to"
            target="_blank"
        >{{ link.name }}</a>
        <router-link 
            v-else
            :to="route"
            v-slot="{isActive}"
            ><a :class="isActive ? 'is-active' : 'normma-link'">{{ link.name }}</a> </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            link: {
                type: Object,
                required: true
            }
        },
        computed: {
            isExternal(){
                return this.link.to.startsWith('http')
            },
            route(){
                return this.link.id === undefined 
                ? {name: this.link.to} 
                : {name: this.link.to, params: {id: this.link.id}}
            }
        }
    }
</script>

<style scoped>
.is-active{
    color: #42b983;
}
.normma-link{
    color: #412b83;
}
</style>