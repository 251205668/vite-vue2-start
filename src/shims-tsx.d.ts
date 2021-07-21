import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

// See https://vuejs.org/v2/guide/typescript.html
declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    [key: string]: any;
  }
}
