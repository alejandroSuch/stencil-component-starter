/*! Built with http://stenciljs.com */
const{h,Context}=window.mycomponent;class MyComponent{render(){return h("div",{class:"my-component"},"Hello, World! I'm ",this.first," ",this.last)}static get is(){return"my-component"}static get encapsulation(){return"shadow"}static get properties(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"}}}static get style(){return"div.my-component[data-my-component]::after{content:' (DESKTOP VERSION)'}"}static get styleMode(){return"desktop"}}export{MyComponent};