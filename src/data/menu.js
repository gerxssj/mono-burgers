const menu = {
  hamburguesas: [
    {
      id: 1,
      nombre: "Carne",
      precio: 8,
      descripcion: "Hamburguesa de carne a la parrilla",
      imagen: "/images/carne.png",
      admiteToppings: true,
      toppingsPermitidos: [10, 11, 12],
    },

    {
      id: 2,
      nombre: "Pollo Deshilachado",
      precio: 6,
      descripcion: "Pollo deshilachado con cremas",
      imagen: "/images/pollo.png",
      admiteToppings: true,
      toppingsPermitidos: [10, 11, 12],
    },

    {
      id: 3,
      nombre: "Chorizo",
      precio: 8,
      descripcion: "Chorizo a la parrilla",
      imagen: "/images/chorizo.png",
      admiteToppings: true,
      toppingsPermitidos: [10, 11, 12],
    },
  ],

  otros: [
    {
      id: 4,
      nombre: "Salchipapa",
      precio: 8,
      descripcion: "Papas fritas con hot dog",
      imagen: "/images/salchipapa.png",
      admiteToppings: false,
      toppingsPermitidos: [],
    },

    {
      id: 5,
      nombre: "Combo Nuggets",
      precio: 8,
      descripcion: "5 nuggets con papas fritas",
      imagen: "/images/nuggets.png",
      admiteToppings: false,
      toppingsPermitidos: [],
    },
  ],

  bebidas: [
    {
      id: 6,
      nombre: "Coca Cola",
      precio: 4,
      descripcion: "Bebida helada",
      imagen: "/images/coca.png",
      admiteToppings: false,
      toppingsPermitidos: [],
    },

    {
      id: 7,
      nombre: "Inca Kola",
      precio: 4,
      descripcion: "Bebida helada",
      imagen: "/images/inca.png",
      admiteToppings: false,
      toppingsPermitidos: [],
    },

    {
      id: 8,
      nombre: "Sprite",
      precio: 3,
      descripcion: "Bebida helada",
      imagen: "/images/sprite.png",
      admiteToppings: false,
      toppingsPermitidos: [],
    },

    {
      id: 9,
      nombre: "Agua",
      precio: 2,
      descripcion: "Agua sin gas",
      imagen: "/images/agua.png",
      admiteToppings: false,
      toppingsPermitidos: [],
    },
  ],

  toppings: [
    {
      id: 10,
      nombre: "Queso",
      precio: 1.5,
      emoji: "🧀",
    },

    {
      id: 11,
      nombre: "Huevo",
      precio: 1.5,
      emoji: "🍳",
    },

    {
      id: 12,
      nombre: "Jamón",
      precio: 1.5,
      emoji: "🥓",
    },
  ],
};

export default menu;