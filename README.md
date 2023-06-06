# g3w-client-plugin-switchlayers

This plugin gives flexible and rapid control on toggle (on/off) to groups of layers to the user. 

The switchlayers plugin is composed of a **dropdown** menu, a range **slider**, and a **label**. 

 - The **dropdown** menu controls the groups in the *Table of Content (TOC)*. Based on the selection of the group, it toggles on the selected group and the toggles off the rest. 
 - The **slider** controls the which layer should be displayed on the map by changing the value of the slider.
 - The **label** shows the name of the layer that displayed on the map.


## _Limitations_
This plugin is limited to control/display group of layers. The sample project directory can be like as follows:
```
 - group_01
  |---layer_01
  |---layer_02

 - group_02
  |---layer_01
  |---layer_02
  |---layer_03
```


This plugin is developed based on the sidebar plugin template that provided by [g3w-suite](https://github.com/g3w-suite/g3w-client-plugin-sidebar)

![g3w-switchlayers](https://github.com/shnmrt/g3w-client-plugin-switchlayers/assets/34002197/ca145a6a-b527-4c21-9fee-c8ce8a889885)
