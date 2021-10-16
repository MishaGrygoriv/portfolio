<template>
  <svg>
    <path
      id="p"
      d="M0,200 Q80,100 600,200 V150 H0 V50"
      transform="translate(0 300)"
    />
    <rect
      id="dummyRect"
      x="0"
      y="0"
      height="450"
      width="600"
      fill="transparent"
    />
    <animate
      xlink:href="#p"
      attributeName="d"
      to="M0,50 Q80,100 600,50 V150 H0 V50"
      fill="freeze"
      begin="dummyRect.mouseover"
      end="dummyRect.mouseout"
      dur="0.1s"
      id="bounce1"
    />
    <animate
      xlink:href="#p"
      attributeName="d"
      to="M0,50 Q80,0 600,50 V150 H0 V50"
      fill="freeze"
      begin="bounce1.end"
      end="dummyRect.mouseout"
      dur="0.15s"
      id="bounce2"
    />
    <animate
      xlink:href="#p"
      attributeName="d"
      to="M0,50 Q80,80 600,50 V150 H0 V50"
      fill="freeze"
      begin="bounce2.end"
      end="dummyRect.mouseout"
      dur="0.15s"
      id="bounce3"
    />
    <animate
      xlink:href="#p"
      attributeName="d"
      to="M0,50 Q80,45 600,50 V150 H0 V50"
      fill="freeze"
      begin="bounce3.end"
      end="dummyRect.mouseout"
      dur="0.1s"
      id="bounce4"
    />
    <animate
      xlink:href="#p"
      attributeName="d"
      to="M0,50 Q80,50 600,50 V150 H0 V50"
      fill="freeze"
      begin="bounce4.end"
      end="dummyRect.mouseout"
      dur="0.05s"
      id="bounce5"
    />
    <animate
      xlink:href="#p"
      attributeName="d"
      to="M0,200 Q80,100 600,200 V150 H0 V50"
      fill="freeze"
      begin="dummyRect.mouseout"
      dur="0.15s"
      id="bounceOut"
    />
  </svg>
</template>