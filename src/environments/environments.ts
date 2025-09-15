export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',

// URLs
  baseUrl: 'http://localhost:4200',
  adminUrl: 'http://localhost:4200/admin',

// Configuración de la app
    appName: 'ATHENA BRAND',
    company: {
    name: 'ATHENA BRAND',
    tagline: 'MENOS RUIDO MAS ESENCIA',
    location: 'San Pedro, Antioquia, Colombia',


   // Paginación por defecto
  defaultPageSize: 12,
  maxPageSize: 50,

  // Carrito
  cartStorageKey: 'athena_cart',
  wishlistStorageKey: 'athena_wishlist',

  // Imágenes
  defaultProductImage: 'assets/images/no-product-image.jpg',
  imageUploadMaxSize: 10 * 1024 * 1024, // 10MB
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],

  // PSE Configuration
  pse: {
    merchantId: 'tu_merchant_id',
    testMode: true,
    currency: 'COP',
    country: 'CO'
  },

  // Información de la empresa
  company: {
    name: 'ATHENA BRAND',
    tagline: 'MENOS RUIDO MAS ESENCIA',
    subtitle: 'COLOMBIAN STORE SINCE 2025',
    location: 'San Pedro, Antioquia, Colombia',
    phone: '+57 300 123 4567',
    email: 'contacto@athenabrand.co',
    whatsapp: '+573001234567',
    instagram: '@athena.brand.co',
    facebook: 'AthenaBrandColombia'
  },

  // Configuración de envíos
  shipping: {
    freeThreshold: 150000, // Envío gratis desde $150,000
    localCost: 8000,       // $8,000 en San Pedro
    nationalCost: 15000,   // $15,000 resto del país
    estimatedDays: {
      local: '1-2 días',
      national: '3-5 días'
    }
  },

  // Configuración de búsqueda
  search: {
    minQueryLength: 2,
    maxSuggestions: 5,
    debounceTime: 300
  },

  // Features flags
  features: {
    wishlist: true,
    reviews: true,
    comparison: false,
    socialLogin: false,
    guestCheckout: true,
    multiCurrency: false,
    darkMode: true
  },

  // SEO
  seo: {
    defaultTitle: 'ATHENA BRAND - Moda Urbana y Deportiva',
    defaultDescription: 'Tienda de moda streetwear en San Pedro, Antioquia. Ropa urbana y deportiva con estilo único. Envíos a toda Colombia.',
    keywords: 'moda urbana, streetwear, ropa deportiva, San Pedro Antioquia, Colombia, athena brand'
  },

  // Categorías de productos
  categories: {
    hombre: 'HOMBRE',
    mujer: 'MUJER',
    deportivos: 'DEPORTIVOS',
    'hoodies-sacos': 'HODDIES Y SACOS',
    chaquetas: 'CHAQUETAS'
  },

  // Tallas disponibles
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],

  // Moneda y formato
  currency: {
    code: 'COP',
    symbol: '$',
    locale: 'es-CO'
  }
}
};













