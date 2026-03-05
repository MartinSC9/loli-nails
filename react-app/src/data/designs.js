// Pink
import pink2 from '../assets/pink/2.jpeg'
import pink3 from '../assets/pink/3.jpeg'
import pink6 from '../assets/pink/6.jpeg'
import pink7 from '../assets/pink/7.jpeg'
import pink11 from '../assets/pink/11.jpeg'
import pink15 from '../assets/pink/15.jpeg'
import pink16 from '../assets/pink/16.jpeg'
import pink17 from '../assets/pink/17.jpeg'
import pink18 from '../assets/pink/18.jpeg'
import pink19 from '../assets/pink/19.jpeg'
import pink20 from '../assets/pink/20.jpeg'
import pink21 from '../assets/pink/21.jpeg'
import pink23 from '../assets/pink/23.jpeg'
import pink24 from '../assets/pink/24.jpeg'
import pink28 from '../assets/pink/28.jpeg'
import pink30 from '../assets/pink/30.jpeg'
import pink32 from '../assets/pink/32.jpeg'
import pink33 from '../assets/pink/33.jpeg'
import pink34 from '../assets/pink/34.jpeg'
import pink35 from '../assets/pink/35.jpeg'
import pink36 from '../assets/pink/36.jpeg'
// Red
import red1 from '../assets/red/1.jpeg'
import red5 from '../assets/red/5.jpeg'
import red8 from '../assets/red/8.jpeg'
import red9 from '../assets/red/9.jpeg'
import red10 from '../assets/red/10.jpeg'
import red31 from '../assets/red/31.jpeg'
import red36 from '../assets/red/36.jpeg'
// White
import white4 from '../assets/white/4.jpeg'
import white12 from '../assets/white/12.jpeg'
import white14 from '../assets/white/14.jpeg'
import white15 from '../assets/white/15.jpeg'
import white21 from '../assets/white/21.jpeg'
import white22 from '../assets/white/22.jpeg'
import white23 from '../assets/white/23.jpeg'
import white29 from '../assets/white/29.jpeg'
// Black
import black25 from '../assets/black/25.jpeg'
import black26 from '../assets/black/26.jpeg'
import black37 from '../assets/black/37.jpeg'
// Subtle
import subtle15 from '../assets/subtle/15.jpeg'
import subtle21 from '../assets/subtle/21.jpeg'
import subtle22 from '../assets/subtle/22.jpeg'
// Creative
import creative6 from '../assets/creative/6.jpeg'
import creative26 from '../assets/creative/26.jpeg'
import creative36 from '../assets/creative/36.jpeg'
// Blue
import blue27 from '../assets/blue/27.jpeg'
// Orange
import orange8 from '../assets/orange/8.jpeg'
import orange9 from '../assets/orange/9.jpeg'
// Violet
import violet4 from '../assets/violet/4.jpeg'
// Yellow
import yellow13 from '../assets/yellow/13.jpeg'

const designs = [
  // Pink (21)
  { id: 'pink-glitter-blush', name: 'Glitter Blush', color: 'pink', subtitle: 'Rosa con Glitter', price: '$12.000', duration: '1h 30min', description: 'Base rosa pálido con uña accent de glitter rojo. Un toque de brillo para un look romántico y femenino.', image: pink2 },
  { id: 'pink-shimmer', name: 'Pink Shimmer', color: 'pink', subtitle: 'Brillo Natural', price: '$10.000', duration: '1h 15min', description: 'Rosa shimmer con efecto tornasol sutil. Almendra corta perfecta para el día a día con un toque especial.', image: pink3 },
  { id: 'pink-tropical', name: 'Tropical Bloom', color: 'pink', subtitle: 'Floral & Veraniego', price: '$16.000', duration: '2h', description: 'Diseño floral con french amarilla y rosa. Arte a mano alzada con perlas y detalles dorados. Ideal para verano.', image: pink6 },
  { id: 'pink-stars', name: 'Pink Stars', color: 'pink', subtitle: 'Estrellas & Perlas', price: '$14.000', duration: '1h 45min', description: 'Rosa fucsia con detalles de estrellas doradas y perlas. Nail art delicado con acabado brillante.', image: pink7 },
  { id: 'pink-glitter-short', name: 'Pink & Glitter', color: 'pink', subtitle: 'Cortas & Divertidas', price: '$10.000', duration: '1h', description: 'Fucsia sólido combinado con glitter rosado en uñas cortas. Perfecto para un look divertido y juvenil.', image: pink11 },
  { id: 'pink-french-classic', name: 'French Clásica', color: 'pink', subtitle: 'Elegancia Francesa', price: '$11.000', duration: '1h 30min', description: 'French clásica con punta blanca y base natural. Piedras de strass como detalle. Un clásico que nunca falla.', image: pink15 },
  { id: 'pink-baby-gems', name: 'Baby Pink Gems', color: 'pink', subtitle: 'Delicada & Brillante', price: '$12.000', duration: '1h 30min', description: 'Rosa bebé natural con pequeñas gemas y detalles dorados. Minimalismo elegante para las más delicadas.', image: pink16 },
  { id: 'pink-leopard', name: 'Leopard Print', color: 'pink', subtitle: 'Animal Print', price: '$13.000', duration: '1h 45min', description: 'Base nude con estampado animal en las puntas. Un diseño original y trendy para las más atrevidas.', image: pink17 },
  { id: 'pink-tortoise', name: 'Tortoise Tips', color: 'pink', subtitle: 'Carey Chic', price: '$14.000', duration: '1h 45min', description: 'French de carey (tortoise shell) sobre base natural. Diseño elegante y sofisticado con onda retro.', image: pink18 },
  { id: 'pink-hot-glitter', name: 'Hot Pink Glitter', color: 'pink', subtitle: 'Fucsia & Brillos', price: '$13.000', duration: '1h 30min', description: 'Fucsia vibrante con uña accent de glitter rosado. Almendra media con acabado ultra brillante.', image: pink19 },
  { id: 'pink-neon-french', name: 'Neon French', color: 'pink', subtitle: 'French Moderna', price: '$14.000', duration: '1h 45min', description: 'French rosa neón con uña accent de glitter. Versión moderna y divertida del clásico francés.', image: pink20 },
  { id: 'pink-21', name: 'Soft Rose', color: 'pink', subtitle: 'Rosa Suave', price: '$10.000', duration: '1h 15min', description: 'Rosa suave y natural con acabado glossy. Perfecto para un look femenino y discreto.', image: pink21 },
  { id: 'pink-23', name: 'Blush Almendra', color: 'pink', subtitle: 'Natural & Elegante', price: '$11.000', duration: '1h 15min', description: 'Tono blush en forma almendra con acabado impecable. Elegancia natural que combina con todo.', image: pink23 },
  { id: 'pink-24', name: 'Rosa Candy', color: 'pink', subtitle: 'Dulce & Fun', price: '$12.000', duration: '1h 30min', description: 'Rosa candy vibrante con acabado brillante. Un color dulce y divertido que levanta el ánimo.', image: pink24 },
  { id: 'pink-28', name: 'Pink Dream', color: 'pink', subtitle: 'Soñado', price: '$11.000', duration: '1h 15min', description: 'Rosa soñado con tonos suaves y acabado perfecto. Ideal para las que aman lo delicado.', image: pink28 },
  { id: 'pink-30', name: 'Rose Gold', color: 'pink', subtitle: 'Dorado Rosado', price: '$14.000', duration: '1h 45min', description: 'Tonos rose gold con efecto metalizado sutil. Sofisticación y tendencia en un solo diseño.', image: pink30 },
  { id: 'pink-32', name: 'Barbie Pink', color: 'pink', subtitle: 'Fucsia Total', price: '$12.000', duration: '1h 30min', description: 'Fucsia intenso estilo Barbie. Color pleno con acabado glossy para las que aman el rosa fuerte.', image: pink32 },
  { id: 'pink-33', name: 'Cherry Blossom', color: 'pink', subtitle: 'Flor de Cerezo', price: '$15.000', duration: '2h', description: 'Diseño inspirado en flores de cerezo con tonos rosados. Arte delicado y femenino.', image: pink33 },
  { id: 'pink-34', name: 'Pink Marble', color: 'pink', subtitle: 'Marmolado Rosa', price: '$14.000', duration: '1h 45min', description: 'Efecto marmolado en tonos rosados con detalles sutiles. Textura única y moderna.', image: pink34 },
  { id: 'pink-35', name: 'Raspberry', color: 'pink', subtitle: 'Frambuesa', price: '$11.000', duration: '1h 15min', description: 'Tono frambuesa con acabado brillante. Un rosa intenso y elegante para destacar.', image: pink35 },
  { id: 'pink-36', name: 'Cotton Candy', color: 'pink', subtitle: 'Algodón de Azúcar', price: '$10.000', duration: '1h', description: 'Rosa algodón de azúcar suave y dulce. Perfecto para un look tierno y juvenil.', image: pink36 },

  // Red (7)
  { id: 'red-valentine', name: 'San Valentín', color: 'red', subtitle: 'Amor & Corazones', price: '$13.000', duration: '1h 45min', description: 'Rojo pasión con corazón accent sobre base nude. Diseño romántico perfecto para una fecha especial.', image: red1 },
  { id: 'red-cherry', name: 'Cherry French', color: 'red', subtitle: 'Cerezas & French', price: '$15.000', duration: '2h', description: 'French roja con arte de cerezas a mano alzada. Diseño frutal, divertido y súper original.', image: red5 },
  { id: 'red-classic', name: 'Rojo Clásico', color: 'red', subtitle: 'Pasión Eterna', price: '$10.000', duration: '1h 15min', description: 'Rojo clásico puro con acabado ultra glossy. El color que nunca falla para cualquier ocasión.', image: red8 },
  { id: 'red-fire', name: 'Red Fire', color: 'red', subtitle: 'Fuego & Intensidad', price: '$11.000', duration: '1h 15min', description: 'Rojo fuego intenso con brillo espejo. Uñas que irradian pasión y confianza.', image: red9 },
  { id: 'red-glam', name: 'Red Glam', color: 'red', subtitle: 'Glamour Rojo', price: '$12.000', duration: '1h 30min', description: 'Rojo glamoroso con acabado perfecto. Elegancia y actitud en cada uña.', image: red10 },
  { id: 'red-wine', name: 'Red Wine', color: 'red', subtitle: 'Borgoña', price: '$12.000', duration: '1h 30min', description: 'Tono borgoña profundo como un buen vino. Sofisticado y perfecto para otoño-invierno.', image: red31 },
  { id: 'red-berry', name: 'Berry Red', color: 'red', subtitle: 'Frutos Rojos', price: '$11.000', duration: '1h 15min', description: 'Rojo berry vibrante con matices profundos. Un color rico y versátil para cualquier estilo.', image: red36 },

  // White (8)
  { id: 'white-golden-border', name: 'Golden Border', color: 'white', subtitle: 'Borde Dorado', price: '$16.000', duration: '2h', description: 'Base glazed con borde dorado cromado en almendra. Efecto espejo lujoso y súper elegante.', image: white4 },
  { id: 'white-french-strass', name: 'French & Strass', color: 'white', subtitle: 'Clásica con Brillo', price: '$13.000', duration: '1h 45min', description: 'French clásica cuadrada con hilera de strass. El clásico francés elevado con cristales brillantes.', image: white12 },
  { id: 'white-pure', name: 'Pure White', color: 'white', subtitle: 'Blanco Puro', price: '$10.000', duration: '1h 15min', description: 'Blanco puro con acabado impecable. Limpio, fresco y perfecto para cualquier temporada.', image: white14 },
  { id: 'white-pearl', name: 'Pearl White', color: 'white', subtitle: 'Perla', price: '$12.000', duration: '1h 30min', description: 'Blanco perlado con reflejos iridiscentes. Brillo sutil que cambia con la luz.', image: white15 },
  { id: 'white-elegant', name: 'White Elegant', color: 'white', subtitle: 'Elegancia Total', price: '$11.000', duration: '1h 15min', description: 'Blanco elegante con acabado satinado. Sofisticación pura para eventos especiales.', image: white21 },
  { id: 'white-snow', name: 'Snow White', color: 'white', subtitle: 'Nieve', price: '$10.000', duration: '1h', description: 'Blanco nieve brillante en forma cuadrada. Simple, limpio y siempre impactante.', image: white22 },
  { id: 'white-milky', name: 'Milky White', color: 'white', subtitle: 'Blanco Lechoso', price: '$11.000', duration: '1h 15min', description: 'Tono blanco lechoso semi-transparente. Efecto natural y delicado que alarga los dedos.', image: white23 },
  { id: 'white-bridal', name: 'Bridal', color: 'white', subtitle: 'Novia', price: '$14.000', duration: '1h 45min', description: 'Diseño ideal para novias con blanco impecable y detalles sutiles. Tu día especial merece uñas perfectas.', image: white29 },

  // Black (3)
  { id: 'black-galaxy', name: 'Galaxy Black', color: 'black', subtitle: 'Galaxia & Estrellas', price: '$15.000', duration: '2h', description: 'Negro con efecto galaxia y destellos de estrellas plateadas. Misterioso y magnético como el cielo nocturno.', image: black25 },
  { id: 'black-dark', name: 'Dark Moon', color: 'black', subtitle: 'Oscuro & Elegante', price: '$13.000', duration: '1h 30min', description: 'Negro profundo con acabado brillante. Elegancia oscura para las que aman el estilo dark.', image: black26 },
  { id: 'black-shimmer', name: 'Black Shimmer', color: 'black', subtitle: 'Negro Brillante', price: '$14.000', duration: '1h 45min', description: 'Negro con micro shimmer que brilla con la luz. Misterio y sofisticación en cada movimiento.', image: black37 },

  // Subtle (3)
  { id: 'subtle-nude', name: 'Nude Natural', color: 'subtle', subtitle: 'Minimalista', price: '$9.000', duration: '1h', description: 'Nude natural con acabado glossy impecable. El look más limpio y elegante para el día a día.', image: subtle15 },
  { id: 'subtle-glazed', name: 'Glazed Nude', color: 'subtle', subtitle: 'Efecto Glazed', price: '$12.000', duration: '1h 30min', description: 'Nude con efecto glazed tornasolado. La tendencia viral que queda increíble en persona.', image: subtle21 },
  { id: 'subtle-soft', name: 'Soft Nude', color: 'subtle', subtitle: 'Suave & Delicado', price: '$9.000', duration: '1h', description: 'Tono nude suave y natural. Perfecto para quienes prefieren lo sutil y minimalista.', image: subtle22 },

  // Creative (3)
  { id: 'creative-floral', name: 'Floral Art', color: 'creative', subtitle: 'Arte Floral', price: '$18.000', duration: '2h 30min', description: 'Diseño floral artístico con colores vibrantes y detalles a mano alzada. Cada uña es una obra de arte única.', image: creative6 },
  { id: 'creative-abstract', name: 'Abstract Art', color: 'creative', subtitle: 'Arte Abstracto', price: '$17.000', duration: '2h 15min', description: 'Diseño abstracto con formas y colores creativos. Para las que buscan algo único y diferente.', image: creative26 },
  { id: 'creative-mixed', name: 'Mixed Media', color: 'creative', subtitle: 'Técnica Mixta', price: '$18.000', duration: '2h 30min', description: 'Combinación de técnicas: glitter, chrome y nail art. Un diseño maximalista para las más creativas.', image: creative36 },

  // Blue (1)
  { id: 'blue-electric', name: 'Electric Blue', color: 'blue', subtitle: 'Azul Eléctrico', price: '$14.000', duration: '1h 45min', description: 'Azul eléctrico intenso con efecto chrome en uña accent. Un color vibrante y llamativo que impacta.', image: blue27 },

  // Orange (2)
  { id: 'orange-chrome', name: 'Orange Chrome', color: 'orange', subtitle: 'Naranja & Dorado', price: '$15.000', duration: '2h', description: 'Naranja con detalles chrome dorados en 3D. Diseño artístico con volumen y brillo metalizado.', image: orange8 },
  { id: 'orange-sunset', name: 'Sunset', color: 'orange', subtitle: 'Atardecer', price: '$14.000', duration: '1h 45min', description: 'Tonos naranja cálidos como un atardecer. Calidez y estilo en cada detalle.', image: orange9 },

  // Violet (1)
  { id: 'violet-aurora', name: 'Aurora Violet', color: 'violet', subtitle: 'Aurora Boreal', price: '$15.000', duration: '2h', description: 'Violeta iridiscente con efecto aurora boreal. Colores que cambian con la luz para un look mágico.', image: violet4 },

  // Yellow (1)
  { id: 'yellow-tropical', name: 'Tropical Yellow', color: 'yellow', subtitle: 'Tropical & Floral', price: '$16.000', duration: '2h', description: 'Amarillo tropical con flores rosas a mano alzada y perlas doradas. Diseño veraniego lleno de vida.', image: yellow13 },
]

export default designs
