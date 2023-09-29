declare module '#app' {
  interface NuxtApp {
    $animationLeft(id: string, isMobileMenu: boolean): any;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $animationLeft(id: string, isMobileMenu: boolean): any;
  }
}

export {};
