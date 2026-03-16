/* eslint-disable */
// vue-router ships .d.mts types which TypeScript 4.5 can't resolve via moduleResolution:node
// This re-declaration provides enough typing for our usage.
declare module "vue-router" {
  import type { App, Ref } from "vue";

  export type RouteRecordRaw = any;
  export type RouteLocationNormalized = any;
  export type NavigationGuardNext = (to?: any) => void;
  export type RouteLocationNormalizedLoaded = {
    name?: string | symbol | null;
    path: string;
    meta: Record<string, unknown>;
    params: Record<string, string | string[]>;
    query: Record<string, string | string[] | null>;
    hash: string;
    fullPath: string;
    matched: any[];
    redirectedFrom?: any;
  };

  export interface RouterOptions {
    history: any;
    routes: RouteRecordRaw[];
    scrollBehavior?: (...args: any[]) => any;
    [key: string]: any;
  }

  export interface Router {
    currentRoute: Ref<RouteLocationNormalizedLoaded>;
    beforeEach(guard: (to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => any): () => void;
    push(to: any): Promise<void>;
    replace(to: any): Promise<void>;
    install(app: App): void;
    [key: string]: any;
  }

  export function createRouter(options: RouterOptions): Router;
  export function createWebHistory(base?: string): any;
  export function createWebHashHistory(base?: string): any;
  export function useRouter(): Router;
  export function useRoute(): RouteLocationNormalizedLoaded;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
