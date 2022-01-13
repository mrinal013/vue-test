import { createRouter, createWebHashHistory  } from 'vue-router'
/* Topbar menus */
import Home from '../views/Home.vue'
import Showcase from '../views/top_menu_pages/Showcase.vue'
import Learn from '../views/top_menu_pages/Learn.vue'
import Themes from '../views/top_menu_pages/Themes.vue'
import Plugins from '../views/top_menu_pages/Plugins.vue'
import Mobile from '../views/top_menu_pages/Mobile.vue'
import Support from '../views/top_menu_pages/Support.vue'
import GetInvolved from '../views/top_menu_pages/GetInvolved.vue'
import About from '../views/top_menu_pages/About.vue'
import Blog from '../views/top_menu_pages/Blog.vue'
import Hosting from '../views/top_menu_pages/Hosting.vue'
/* Sidebar menus */
import Update from "../views/sidebar_menu_pages/Update";
import Add from "../views/sidebar_menu_pages/Add";
import Posts from "../views/sidebar_menu_pages/Posts";
import Categories from "../views/sidebar_menu_pages/Categories";
import Tags from "../views/sidebar_menu_pages/Tags";
import Media from "../views/sidebar_menu_pages/Media";
import Library from "../views/sidebar_menu_pages/Library";
import AddMedia from "../views/sidebar_menu_pages/AddMedia";
import Pages from "../views/sidebar_menu_pages/Pages";
import AddPage from "../views/sidebar_menu_pages/AddPage";
import Comments from "../views/sidebar_menu_pages/Comments";
import PluginsPage from "../views/sidebar_menu_pages/PluginsPage";
import Appearance from "../views/sidebar_menu_pages/Appearance";
import DashboardThemes from "../views/sidebar_menu_pages/Themes";
import Customize from "../views/sidebar_menu_pages/Customize";
import Widgets from "../views/sidebar_menu_pages/Widgets";
import Menus from "../views/sidebar_menu_pages/Menus";
import Header from "../views/sidebar_menu_pages/Header";
import Background from "../views/sidebar_menu_pages/Background";
import ThemeEditor from "../views/sidebar_menu_pages/ThemeEditor";
import Installed from "../views/sidebar_menu_pages/Installed";
import AddPlugin from "../views/sidebar_menu_pages/AddPlugin";
import Users from "../views/sidebar_menu_pages/Users";
import AddUser from "../views/sidebar_menu_pages/AddUser";
import Profile from "../views/sidebar_menu_pages/Profile";
import Tools from "../views/sidebar_menu_pages/Tools";
import Import from "../views/sidebar_menu_pages/Import";
import Export from "../views/sidebar_menu_pages/Export";
import SiteHealth from "../views/sidebar_menu_pages/SiteHealth";
import ExportPersonalData from "../views/sidebar_menu_pages/ExportPersonalData";
import ErasePersonalData from "../views/sidebar_menu_pages/ErasePersonalData";
import General from "../views/sidebar_menu_pages/General";
import Writting from "../views/sidebar_menu_pages/Writting";
import Reading from "../views/sidebar_menu_pages/Reading";
import Discussion from "../views/sidebar_menu_pages/Discussion";
import Permalinks from "../views/sidebar_menu_pages/Permalinks";
import Privacy from "../views/sidebar_menu_pages/Privacy";
import MediaSetting from "../views/sidebar_menu_pages/MediaSetting";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/update',
    name: 'Update',
    component: Update
  },
  {
    path: '/showcase',
    name: 'Showcase',
    component: Showcase
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn
  },
  {
    path: '/themes',
    name: 'Themes',
    component: Themes
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: Plugins
  },
  {
    path: '/mobile',
    name: 'Mobile',
    component: Mobile
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },
  {
    path: '/get-involved',
    name: 'GetInvolved',
    component: GetInvolved
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/hosting',
    name: 'Hosting',
    component: Hosting
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/media',
    name: 'Media',
    component: Media
  },
  {
    path: '/library',
    name: 'Library',
    component: Library
  },
  {
    path: '/add-media',
    name: 'AddMedia',
    component: AddMedia
  },
  {
    path: '/pages',
    name: 'Pages',
    component: Pages
  },
  {
    path: '/add-page',
    name: 'AddPage',
    component: AddPage
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments
  },
  {
    path: '/plugins-page',
    name: 'Plugins-page',
    component: PluginsPage
  },
  {
    path: '/appearance',
    name: 'Appearance',
    component: Appearance
  },
  {
    path: '/dashboard-themes',
    name: 'DashboardThemes',
    component: DashboardThemes
  },
  {
    path: '/customize',
    name: 'Customize',
    component: Customize
  },
  {
    path: '/widgets',
    name: 'Widgets',
    component: Widgets
  },
  {
    path: '/menus',
    name: 'Menus',
    component: Menus
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/background',
    name: 'Background',
    component: Background
  },
  {
    path: '/theme-editor',
    name: 'ThemeEditor',
    component: ThemeEditor
  },
  {
    path: '/installed',
    name: 'Installed',
    component: Installed
  },
  {
    path: '/add-plugin',
    name: 'AddPlugin',
    component: AddPlugin
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/import',
    name: 'Import',
    component: Import
  },
  {
    path: '/export',
    name: 'Export',
    component: Export
  },
  {
    path: '/site-health',
    name: 'SiteHealth',
    component: SiteHealth
  },
  {
    path: '/export-personal-data',
    name: 'ExportPersonalData',
    component: ExportPersonalData
  },
  {
    path: '/erase-personal-data',
    name: 'ErasePersonalData',
    component: ErasePersonalData
  },
  {
    path: '/general',
    name: 'General',
    component: General
  },
  {
    path: '/writting',
    name: 'Writting',
    component: Writting
  },
  {
    path: '/reading',
    name: 'Reading',
    component: Reading
  },
  {
    path: '/discussion',
    name: 'Discussion',
    component: Discussion
  },
  {
    path: '/media-setting',
    name: 'MediaSetting',
    component: MediaSetting
  },
  {
    path: '/permalinks',
    name: 'Permalinks',
    component: Permalinks
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Tags
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
