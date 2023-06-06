<template>
    <select class="dropdown col btn btn-primary dropdown-toggle"
    v-model="key"
    @change="onChange($event)"
    >
        <option value="" selected disabled>Select a Group</option>
        <option
            v-for="(layer, index) in layerstree" 
            :value='index'
            :key="index"         
            >{{ layer.title }}</option>
    </select>
</template>

<script>
export default {
    name: 'Dropdown',
    props:["layerstree"],
    data() {
        return {
            key: ''
        }
    },
    methods: {
        onChange(event) {
            const groupID = event.target.value;
            this.$emit('set-group', groupID);
        }
    }
}
</script>

<style scoped>
.dropdown {
    margin-top: 10px;
    margin-bottom: 20px    
}
</style>