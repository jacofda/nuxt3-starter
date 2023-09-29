import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'
import { Observer } from 'gsap/Observer'
  
export default defineNuxtPlugin(() => {
  gsap.registerPlugin(Observer, ScrollTrigger)

  if (process.client) {
    gsap.registerPlugin(Draggable)
  }

  // Animazione Menu Mobile
  const animationLeft = (id: string, mobileMenu: boolean) => {
    return gsap.to(id, 
        {
            duration: mobileMenu ? 0.3 : 0.15,
            transformOrigin: 'top left',
            scale: mobileMenu ? 1 : 0.5,
            opacity: mobileMenu ? 1 : 0,
        }
    );
  }

  return {
    provide: {
        animationLeft,
        gsap,
        Observer,
        ScrollTrigger,
        Draggable
    }
  }
})