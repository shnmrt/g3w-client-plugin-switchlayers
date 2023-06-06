<template>
    <p>{{ layertitle }}</p>
</template>

<script>
export default {
    name: 'Layer',
    props:{
        layertitle: String
    }
}
</script>

<style scoped>
 p {
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 1.65rem;
    align-content: right ;
    align-self: center;
 }
</style>