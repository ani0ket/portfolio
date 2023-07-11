export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: 300,
      distance: "0px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-title",
    animation: {
      delay: 300,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".animate-1",
    animation: {
      delay: 800,
      origin: "left",
    },
  },
  {
    element: ".animate-2",
    animation: {
      delay: 900,
      origin: "left",
    },
  },
  {
    element: ".animate-3",
    animation: {
      delay: 1000,
      origin: "left",
    },
  },
  {
    element: ".animate-4",
    animation: {
      delay: 1100,
      origin: "left",
    },
  },
  {
    element: ".animate-5",
    animation: {
      delay: 1200,
      origin: "left",
    },
  },
  {
    element: ".animate-6",
    animation: {
      delay: 1300,
      origin: "left",
    },
  },
  {
    element: ".animate-7",
    animation: {
      delay: 1400,
      origin: "left",
    },
  },
  {
    element: ".animate-8",
    animation: {
      delay: 1500,
      origin: "left",
    },
  },
  {
    element: ".animate-9",
    animation: {
      delay: 1600,
      origin: "left",
    },
  },
  {
    element: ".animate-10",
    animation: {
      delay: 1700,
      origin: "left",
    },
  },
  {
    element: ".hero-cta",
    animation: {
      delay: 600,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 600,
      origin: "bottom",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: 800,
      origin: "bottom",
    },
  },
];
