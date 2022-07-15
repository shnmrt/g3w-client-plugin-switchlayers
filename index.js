import pluginConfig from './config';
import Service from "./service";
import SidebarComponent from './components/sidebar.vue';
const {base, inherit} = g3wsdk.core.utils;
const {Plugin: BasePlugin} = g3wsdk.core.plugin;
const {GUI} = g3wsdk.gui;

const Plugin = function() {
  const {name, i18n} = pluginConfig;
  base(this, {
    name,
    i18n,
    service: Service
  });
  
  if (this.registerPlugin(this.config.gid)) {
    /**
     * Start to show loading plugin
     */
    this.setHookLoading({
      loading: true
    });
    
    this.service.once('ready', () => {
      //plugin registry
      if (!GUI.isready) GUI.once('ready', ()=> this.setupGui());
      else this.setupGui();
      /**
       * Stop to loading plugin
       */
      this.setHookLoading({
        loading: false
      });
      this.setReady(true);
    });
    
    //initialize service
    this.service.init(this.config);
  } 
  
  //setup plugin interface
  this.setupGui = function() {
    this.createSideBarComponent(SidebarComponent,
      {
        id: name,
        title: '<TITLE ON SIDEBARITEM>',
        open: false,
        collapsible: true,
        isolate: false,
        iconConfig: {
          color: '<COLOR OF ICON OD SIDEBAR ITEM>',
          icon:'<ICON CLASS>', // see vueappplugin,js font list 
        },
        mobile: true,
        events: {
          open: {
            when: 'before',
            cb:()=>{}
          }
        },
        sidebarOptions: {
          position: 0 // can be a number or a string 
        }
      });
  };
};

inherit(Plugin, BasePlugin);

new Plugin();

