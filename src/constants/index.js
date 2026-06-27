import { Lightformer } from "@react-three/drei";
import { pingpong } from "three/src/math/MathUtils.js";
import { label } from "three/tsl"


// export const asset_server_base_url = "";
export const asset_server_base_url = "https://cdn.jsdelivr.net/gh/Tatwadarshi/portfolio_assets_server/"

export const words = [
  {text: 'Ideas', imgPath: '/images/words/idea.svg'},
  {text: 'Designs', imgPath: '/images/words/design.png'},
  {text: 'Systems', imgPath: '/images/words/system.png'},
  {text: 'Prototypes', imgPath: '/images/words/prototype.png'},
]

export const counterItems = [
  {value: 5, suffix: "+", label: "Years of Experience"},
  {value: 10, suffix: "+", label: "Satisfied Clientes"},
  {value: 30, suffix: "+", label: "Completed Projects"},
  {value: 90, suffix: "%", label: "Cliente Retention Rate"},
];

export const navLinks = [
  {name: "Work", href: "#work"},
  {name: "Experience", href: "#experience"},
  {name: "Skills", href: "#skills"},
  {name: "Testimonials", href: "#testimonials"},
  // {name: "Blogs", href: "/blogs"},
]

