import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import i18n from "./lang";
import "vant/lib/index.css";
import {
  Button,
  Cell,
  CellGroup,
  NavBar,
  Tabbar,
  TabbarItem,
  Icon,
  Form,
  Field,
  Toast,
  Dialog,
  Loading,
  PullRefresh,
  List,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Search,
  Badge,
  Grid,
  GridItem,
  Card,
  Tab,
  Tabs,
  Tag,
} from "vant";

const app = createApp(App);

// 注册 Vant 组件
const vantComponents = [
  Button,
  Cell,
  CellGroup,
  NavBar,
  Tabbar,
  TabbarItem,
  Icon,
  Form,
  Field,
  Toast,
  Dialog,
  Loading,
  PullRefresh,
  List,
  Swipe,
  SwipeItem,
  VanImage,
  Search,
  Badge,
  Grid,
  GridItem,
  Card,
  Tab,
  Tabs,
  Tag,
];

vantComponents.forEach((component) => {
  app.use(component);
});

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
