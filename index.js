import pluginConfig from './config';
import Service from "./service";
import SidebarComponent from './components/sidebar.vue';
const {base, inherit} = g3wsdk.core.utils;
const {Plugin: BasePlugin} = g3wsdk.core.plugin;

const Plugin = function() {
  const {name, i18n} = pluginConfig;
  base(this, {
    name,
    i18n,
    service: Service
  });

  this.setHookLoading({
    loading: true
  });

  this.service.once('ready', () => {
    //plugin registry
    if (this.registerPlugin(this.config.gid)) {
      if (!GUI.isready) GUI.on('ready', this.setupGui.bind(this));
      else this.setupGui();
    }
    this.setHookLoading({
      loading: false
    });
        // get service api config
    const api = this.service.getApi();
    this.setApi(api);
    this.setReady(true);
  });

  //inizialize service
  this.service.init(this.config);

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
          icon:'<ICON CLASS>',
        },
        mobile: true,
        events: {
          open: {
            when: 'before',
            cb:()=>{}
          }
        },
        sidebarOptions: {
          position: 1
        }
      });
  };
};

inherit(Plugin, BasePlugin);

new Plugin();

