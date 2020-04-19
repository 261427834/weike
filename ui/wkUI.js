import Vue from 'vue'


import wkDropdown from "./components/wk-dropdown/wk-dropdown"
import wkMenu from "./components/wk-menu/wk-menu"

Vue.component("wk-dropdown", wkDropdown)
Vue.component("wk-menu", wkMenu)


//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import {
//     Dropdown,
//     DropdownMenu,
//     DropdownItem,
//     Menu,
//     Submenu,
//     MenuItem,
//     MenuItemGroup,
// } from  "element-ui"
//
// Vue.use(Dropdown)
// Vue.use(DropdownMenu)
// Vue.use(DropdownItem)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(MenuItemGroup)
