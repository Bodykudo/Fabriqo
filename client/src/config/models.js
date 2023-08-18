export const models = [
  {
    path: 'shirt.glb',
    node: 'T_Shirt_male',
    isGroup: false,
    position: {
      intro: {
        large: [-0.4, 0, 5],
        medium: [-0.3, 0.1, 5],
        small: [-0.25, 0.2, 5.5],
      },
      customize: {
        large: [0, 0, 5],
        medium: [0, 0, 5],
        small: [0, 0, 5.5],
      },
    },
    logo: {
      position: [0, 0.04, 0.15],
      scale: 0.15,
    },
    texture: {
      position: [0, 0, 0],
      scale: 1,
    },
    shadow: {
      alpha: 0.25,
      scale: 10,
      position: [0, 0, -0.14],
      lights: [
        {
          amount: 4,
          radius: 9,
          intensity: 0.55,
          ambient: 0.25,
          position: [5, 5, -10],
        },
        {
          amount: 4,
          radius: 5,
          intensity: 0.25,
          ambient: 0.55,
          position: [-5, 5, -9],
        },
      ],
    },
  },

  {
    path: 'cowboy_hat.glb',
    node: 'hat_hat_0',
    isGroup: false,
    rotation: [-Math.PI / 3, 0, 0],
    position: {
      intro: {
        large: [-1.5, 0.8, 20],
        medium: [-1.5, 1, 25],
        small: [-2, 1.8, 40],
      },
      customize: {
        large: [0, 0, 30],
        medium: [0, 0, 40],
        small: [0, 0, 60],
      },
    },
    shadow: {
      alpha: 0.25,
      scale: 60,
      position: [0, 0, -0.5],
      lights: [
        {
          amount: 4,
          radius: 9,
          intensity: 0.75,
          ambient: 1,
          position: [5, 5, -10],
        },
      ],
    },
  },

  {
    path: 'polo.glb',
    node: 'Short_Sleeve_Polo_Cotton_Heavy_Canvas_FRONT_232020_0',
    isGroup: true,
    position: {
      intro: {
        large: [-25, 10, 400],
        medium: [-25, 20, 400],
        small: [-30, 35, 700],
      },
      customize: {
        large: [0, 0, 550],
        medium: [0, 0, 550],
        small: [0, 0, 750],
      },
    },
    logo: {
      position: [-7.5, 140, 10],
      scale: 15,
    },
    shadow: {
      alpha: 0.35,
      scale: 1000,
      position: [0, 0, 0],
      lights: [
        {
          amount: 4,
          radius: 9,
          intensity: 1,
          ambient: 1,
          position: [5, 5, -10],
        },
      ],
    },
  },

  {
    path: 'pants.glb',
    node: 'Pattern2D_1438298_FrontBack_FRONT_72833_0',
    isGroup: true,
    position: {
      intro: {
        large: [-35, 30, 400],
        medium: [-30, 35, 400],
        small: [-15, 40, 550],
      },
      customize: {
        large: [0, 0, 750],
        medium: [0, 0, 750],
        small: [0, 0, 800],
      },
    },
    logo: {
      position: [10, 100, 10],
      scale: 13,
    },
    texture: {
      position: [0, 65, 0],
      scale: 120,
    },
    exclude: ['Waist_Belt_FRONT_72838', 'Waist_Belt_FRONT_72838_0'],
    shadow: {
      alpha: 0.35,
      scale: 1000,
      position: [0, 0, 0],
      lights: [
        {
          amount: 4,
          radius: 50,
          intensity: 1,
          ambient: 1,
          position: [5, 0, 0],
        },
      ],
    },
  },

  {
    path: 'hoodie.glb',
    node: 'Object_2',
    isGroup: false,
    rotation: [Math.PI * 1.5, 0, 0],
    position: {
      intro: {
        large: [-35, 20, 400],
        medium: [-23, 25, 420],
        small: [-20, 30, 600],
      },
      customize: {
        large: [0, 0, 600],
        medium: [0, 0, 700],
        small: [0, 0, 850],
      },
    },
    logo: {
      position: [-7, -10, 150],
      rotation: [1, 0, 0],
      scale: 10,
    },
    texture: {
      position: [0, 25, 150],
      rotation: [1, 0, 0],
      scale: 110,
    },
    shadow: {
      alpha: 0.35,
      scale: 1000,
      position: [0, 0, 0],
      lights: [
        {
          amount: 4,
          radius: 50,
          intensity: 1,
          ambient: 1,
          position: [5, 0, 0],
        },
      ],
    },
  },

  {
    path: 'long_sleeve_t-_shirt.glb',
    node: 'Long_Sleeve_T-Shirt_Bahan_Dasar_FRONT_2657_0',
    isGroup: true,
    position: {
      intro: {
        large: [-35, 15, 400],
        medium: [-30, 20, 500],
        small: [-25, 25, 600],
      },
      customize: {
        large: [0, 0, 550],
        medium: [0, 0, 600],
        small: [0, 0, 800],
      },
    },
    logo: {
      position: [-5, 145, 10],
      scale: 13,
    },
    texture: {
      position: [0, 130, 35],
      scale: 80,
    },
    shadow: {
      alpha: 0.34,
      scale: 1000,
      position: [0, 0, 0],
      lights: [
        {
          amount: 4,
          radius: 50,
          intensity: 1,
          ambient: 1,
          position: [5, 0, 0],
        },
      ],
    },
  },
];
