<template>
    <!-- <div id="<PLUGIN_ID>" class="treeview-menu slidercontainer">
        <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
    </div> -->
    <div id="<PLUGIN_ID>" class="treeview-menu slidercontainer">
        <div class="rows">
            <Dropdown :layerstree="layerstree"
            @set-group="setGroup"
            ></Dropdown>
            <Layer :layertitle="layertitle"></Layer>
        </div>
        <Slider 
        :groupsize="groupsize"
        :slidercurrentvalue="slidercurrentvalue"
        @slider-change="sliderChange"
        ></Slider>
    </div>
    
</template>

<script>
    import Service from '../service';
    import {name} from '../config/index';
    import Slider from './Slider.vue';
    import Dropdown from './Dropdown.vue';
    import Layer from "./Layer.vue";

    let layerStore = g3wsdk.core.project.ProjectsRegistry.getCurrentProject().getLayersStore()
    export default {
        name,
        data() {
            return {
                "layerstree": layerStore.state.layerstree[0].nodes,
                'slidercurrentvalue':1,
                'layertitle':'',
                'groupsize': 0,
                'groupid': '',
            };
        },
        components: {
            Slider,
            Dropdown,
            Layer,
        },
        methods:{
            updateGroupData: function (id) {
                this.groupid = String(id);
                this.groupsize = Number(this.layerstree[id].nodes.length);
                this.layerstree.forEach((elems,i) => this.layerstree[i].checked = (i == id));
                if (this.slidercurrentvalue > this.groupsize) {
                    this.slidercurrentvalue = this.groupsize;
                };
            },
            updateLayer: function() {
                this.layerstree[this.groupid].nodes.forEach(
                    (node,j) => this.layerstree[this.groupid].nodes[j].checked = (this.groupsize-this.slidercurrentvalue == j)
                )
            },
            updateTitle: function() {
                this.layertitle = this.layerstree[this.groupid].nodes[this.groupsize-this.slidercurrentvalue].title
            },
            setGroup: function(id) {
                this.updateGroupData(id);
                this.updateLayer();
                this.updateTitle();
            },
            sliderChange: function(slider_value) {
                this.slidercurrentvalue = Number(slider_value)
                this.updateLayer(); 
                this.updateTitle();
            },
        }
    }
</script>

<style scoped>
div {
    margin-left: 20px;
    margin-right: 20px;
}
.rows {
    display:flex;
    justify-content: space-between;    
}
</style>
