/// <reference types="vite/client" />

//解决找不到vue模块问题
declare module "*.vue" {
    import type { DefineComponent } from "vue";
   
    const vueComponent: DefineComponent<{}, {}, any>;
   
    export default vueComponent;
  }

  declare module 'mitt' {
    import { Emitter } from 'mitt';
    type Events = {
      foo: string;
      bar?: number;
    };
    const mittComponent:Emitter<Events>
    export default mittComponent
  }

