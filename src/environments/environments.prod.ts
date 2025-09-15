export const environment = {
  production: true,
  apiUrl: 'https://api.athenabrand.co/api',
  baseUrl: 'https://athenabrand.co',
  adminUrl: 'https://athenabrand.co/admin',


  // Resto de configuración igual pero con URLs de producción


  defaultPageSize: 12,
  maxPageSize: 50,

  cartStorageKey: 'athena_cart',
  wishlistStorageKey: 'athena_wishlist',

  defaultProductImage: 'assets/images/no-product-image.jpg',
  imageUploadMaxSize: 10 * 1024 * 1024,
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],

  pse: {
    merchantId: 'tu_merchant_id_prod',
    testMode: false, // ¡Cambiar a false en producción!
    currency: 'COP',
    country: 'CO'
  },

  appName: 'ATHENA BRAND',
  company: {
    name: 'ATHENA BRAND',
    tagline: 'MENOS RUIDO MAS ESENCIA',
    location: 'San Pedro, Antioquia, Colombia'
  },

  shipping: {
    freeThreshold: 150000,
    localCost: 8000,
    nationalCost: 15000,
    estimatedDays: {
      local: '1-2 días',
      national: '3-5 días'
    }
  },

  search: {
    minQueryLength: 2,
    maxSuggestions: 5,
    debounceTime: 300
  },

  features: {
    wishlist: true,
    reviews: true,
    comparison: false,
    socialLogin: false,
    guestCheckout: true,
    multiCurrency: false,
    darkMode: true
  },

  seo: {
    defaultTitle: 'ATHENA BRAND - Moda Urbana y Deportiva',
    defaultDescription: 'Tienda de moda streetwear en San Pedro, Antioquia. Ropa urbana y deportiva con estilo único. Envíos a toda Colombia.',
    keywords: 'moda urbana, streetwear, ropa deportiva, San Pedro Antioquia, Colombia, athena brand'
  },

  categories: {
    hombre: 'HOMBRE',
    mujer: 'MUJER',
    deportivos: 'DEPORTIVOS',
    'hoodies-sacos': 'HODDIES Y SACOS',
    chaquetas: 'CHAQUETAS'
  },

  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],

  currency: {
    code: 'COP',
    symbol: '$',
    locale: 'es-CO'
  }
};



