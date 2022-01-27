import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App);
app.config.globalProperties.router = router

///TODO: load dynamic comp here
const Add = require("./views/sidebar_menu_pages/Add").default;
const AddMedia = require("./views/sidebar_menu_pages/AddMedia").default;
const AddPage = require("./views/sidebar_menu_pages/AddPage").default;
const AddPlugin = require("./views/sidebar_menu_pages/AddPlugin").default;
const AddUser = require("./views/sidebar_menu_pages/AddUser").default;
const Appearance = require("./views/sidebar_menu_pages/Appearance").default;
const Background = require("./views/sidebar_menu_pages/Background").default;
const Categories = require("./views/sidebar_menu_pages/Categories").default;
const Comments = require("./views/sidebar_menu_pages/Comments").default;
const Customize = require("./views/sidebar_menu_pages/Customize").default;
const Discussion = require("./views/sidebar_menu_pages/Discussion").default;
const ErasePersonalData = require("./views/sidebar_menu_pages/ErasePersonalData").default;
const Export = require("./views/sidebar_menu_pages/Export").default;
const ExportPersonalData = require("./views/sidebar_menu_pages/ExportPersonalData").default;
const General = require("./views/sidebar_menu_pages/General").default;
const Header = require("./views/sidebar_menu_pages/Header").default;
const Import = require("./views/sidebar_menu_pages/Import").default;
const Installed = require("./views/sidebar_menu_pages/Installed").default;
const Library = require("./views/sidebar_menu_pages/Library").default;
const Media = require("./views/sidebar_menu_pages/Media").default;
const MediaSetting = require("./views/sidebar_menu_pages/MediaSetting").default;
const Menus = require("./views/sidebar_menu_pages/Menus").default;
const Pages = require("./views/sidebar_menu_pages/Pages").default;
const Permalinks = require("./views/sidebar_menu_pages/Permalinks").default;
const PluginsPage = require("./views/sidebar_menu_pages/PluginsPage").default;
const Posts = require("./views/sidebar_menu_pages/Posts").default;
const Privacy = require("./views/sidebar_menu_pages/Privacy").default;
const Profile = require("./views/sidebar_menu_pages/Profile").default;
const Reading = require("./views/sidebar_menu_pages/Reading").default;
const SiteHealth = require("./views/sidebar_menu_pages/SiteHealth").default;
const Tags = require("./views/sidebar_menu_pages/Tags").default;
const ThemeEditor = require("./views/sidebar_menu_pages/ThemeEditor").default;
const Themes = require("./views/sidebar_menu_pages/Themes").default;
const Tools = require("./views/sidebar_menu_pages/Tools").default;
const Update = require("./views/sidebar_menu_pages/Update").default;
const Users = require("./views/sidebar_menu_pages/Users").default;
const Widgets = require("./views/sidebar_menu_pages/Widgets").default;
const Writting = require("./views/sidebar_menu_pages/Writting").default;


const dynamicComp = [
    Add,
    AddMedia,
    AddPage,
    AddPlugin,
    AddUser,
    Appearance,
    Background,
    Categories,
    Comments,
    Customize,
    Discussion,
    ErasePersonalData,
    Export,
    ExportPersonalData,
    General,
    Header,
    Import,
    Installed,
    Library,
    Media,
    MediaSetting,
    Menus,
    Pages,
    Permalinks,
    PluginsPage,
    Posts,
    Privacy,
    Profile,
    Reading,
    SiteHealth,
    Tags,
    ThemeEditor,
    Themes,
    Tools,
    Update,
    Users,
    Widgets,
    Writting,
];
for(const comp of dynamicComp) {
    if (comp.registerRoutes) {
        comp.registerRoutes(router);
    }
}

app.use(router);
app.use(store)

app.mount('#app')
