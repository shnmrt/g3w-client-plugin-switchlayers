<template>
    <form>
        <div class="form-group">
            <input 
                type="range" 
                class="form-control-range"
                id="slider"
                min="1"
                :max="groupsize"
                v-model="sliderValue"
                @input="sliderEvent($event)"
                >
        </div>
    </form>
</template>

<script>

export default {
    name:'Slider',
    props:{
        groupsize : Number,
        slidercurrentValue: Number,
    },
    data: function() {
        return {
            sliderValue: 1
        }
    },
    methods: {
        sliderEvent: function() {
            console.log(this.sliderValue)
            this.$emit('slider-change',this.sliderValue)
        }
    }
}
</script>

<style scoped>
form{
    margin-left: 10px;
    margin-right: 10px;
}
</style>
