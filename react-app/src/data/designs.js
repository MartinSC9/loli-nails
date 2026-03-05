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
import pink51 from '../assets/pink/51.png'
// Red
import red1 from '../assets/red/1.jpeg'
import red5 from '../assets/red/5.jpeg'
import red8 from '../assets/red/8.jpeg'
import red9 from '../assets/red/9.jpeg'
import red10 from '../assets/red/10.jpeg'
import red31 from '../assets/red/31.jpeg'
import red36 from '../assets/red/36.jpeg'
import red48 from '../assets/red/48.jpg'
import red50 from '../assets/red/50.jpg'
// White
import white4 from '../assets/white/4.jpeg'
import white12 from '../assets/white/12.jpeg'
import white14 from '../assets/white/14.jpeg'
import white15 from '../assets/white/15.jpeg'
import white21 from '../assets/white/21.jpeg'
import white22 from '../assets/white/22.jpeg'
import white23 from '../assets/white/23.jpeg'
import white29 from '../assets/white/29.jpeg'
import white39 from '../assets/white/39.jpg'
// Black
import black25 from '../assets/black/25.jpeg'
import black26 from '../assets/black/26.jpeg'
import black37 from '../assets/black/37.jpeg'
import black38 from '../assets/black/38.jpg'
// Subtle
import subtle15 from '../assets/subtle/15.jpeg'
import subtle21 from '../assets/subtle/21.jpeg'
import subtle22 from '../assets/subtle/22.jpeg'
// Creative
import creative6 from '../assets/creative/6.jpeg'
import creative26 from '../assets/creative/26.jpeg'
import creative36 from '../assets/creative/36.jpeg'
import creative38 from '../assets/creative/38.jpg'
import creative40 from '../assets/creative/40.jpg'
import creative51 from '../assets/creative/51.jpg'
// Blue
import blue27 from '../assets/blue/27.jpeg'
import blue41 from '../assets/blue/41.jpg'
// Orange
import orange8 from '../assets/orange/8.jpeg'
import orange9 from '../assets/orange/9.jpeg'
import orange42 from '../assets/orange/42.jpg'
import orange43 from '../assets/orange/43.jpg'
import orange44 from '../assets/orange/44.jpg'
// Violet
import violet4 from '../assets/violet/4.jpeg'
import violet46 from '../assets/violet/46.jpg'
// Yellow
import yellow13 from '../assets/yellow/13.jpeg'

const designs = [
  // Creativo (3) - primero
  { id: 'creative-floral', name: 'Arte Floral', color: 'creative', subtitle: 'Diseño Artístico', price: '$18.000', duration: '2h 30min', description: 'Diseño floral artístico con colores vibrantes y detalles a mano alzada. Cada uña es una obra de arte única.', image: creative6 },
  { id: 'creative-abstract', name: 'Arte Abstracto', color: 'creative', subtitle: 'Formas & Colores', price: '$17.000', duration: '2h 15min', description: 'Diseño abstracto con formas y colores creativos. Para las que buscan algo único y diferente.', image: creative26 },
  { id: 'creative-mixed', name: 'Técnica Mixta', color: 'creative', subtitle: 'Combinación de Estilos', price: '$18.000', duration: '2h 30min', description: 'Combinación de técnicas: brillos, cromado y arte. Un diseño maximalista para las más creativas.', image: creative36 },
  { id: 'creative-french-strass', name: 'French Negra con Strass', color: 'creative', subtitle: 'Strass & Corazón', price: '$17.000', duration: '2h 15min', description: 'French negra cuadrada con corazón de strass y gemas brillantes. Elegancia dark con detalles que deslumbran.', image: creative38 },
  { id: 'creative-flores-3d', name: 'Flores 3D con Glitter', color: 'creative', subtitle: 'Flores & Volumen', price: '$19.000', duration: '2h 30min', description: 'Lila y rosa con flores 3D en relieve y glitter encapsulado. Diseño con volumen y textura espectacular.', image: creative40 },
  { id: 'creative-french-moño', name: 'French Azul con Moño', color: 'creative', subtitle: 'Moño & Glitter', price: '$17.000', duration: '2h 15min', description: 'French azul con moño accent y glitter en uña cuadrada. Un diseño coquette y original.', image: creative51 },

  // Sutil (3) - segundo
  { id: 'subtle-nude', name: 'Nude Natural', color: 'subtle', subtitle: 'Minimalista', price: '$9.000', duration: '1h', description: 'Nude natural con acabado glossy impecable. El look más limpio y elegante para el día a día.', image: subtle15 },
  { id: 'subtle-glazed', name: 'Nude Glazed', color: 'subtle', subtitle: 'Efecto Espejo', price: '$12.000', duration: '1h 30min', description: 'Nude con efecto glazed tornasolado. La tendencia viral que queda increíble en persona.', image: subtle21 },
  { id: 'subtle-soft', name: 'Nude Suave', color: 'subtle', subtitle: 'Suave & Delicado', price: '$9.000', duration: '1h', description: 'Tono nude suave y natural. Perfecto para quienes prefieren lo sutil y minimalista.', image: subtle22 },

  // Rosa (21)
  { id: 'pink-glitter-blush', name: 'Rosa con Brillos', color: 'pink', subtitle: 'Glitter Rosado', price: '$12.000', duration: '1h 30min', description: 'Base rosa pálido con uña accent de glitter rojo. Un toque de brillo para un look romántico y femenino.', image: pink2 },
  { id: 'pink-shimmer', name: 'Rosa Tornasol', color: 'pink', subtitle: 'Brillo Natural', price: '$10.000', duration: '1h 15min', description: 'Rosa shimmer con efecto tornasol sutil. Almendra corta perfecta para el día a día con un toque especial.', image: pink3 },
  { id: 'pink-tropical', name: 'Flor Tropical', color: 'pink', subtitle: 'Floral & Veraniego', price: '$16.000', duration: '2h', description: 'Diseño floral con french amarilla y rosa. Arte a mano alzada con perlas y detalles dorados. Ideal para verano.', image: pink6 },
  { id: 'pink-stars', name: 'Estrellas Rosas', color: 'pink', subtitle: 'Estrellas & Perlas', price: '$14.000', duration: '1h 45min', description: 'Rosa fucsia con detalles de estrellas doradas y perlas. Arte delicado con acabado brillante.', image: pink7 },
  { id: 'pink-glitter-short', name: 'Fucsia & Brillos', color: 'pink', subtitle: 'Cortas & Divertidas', price: '$10.000', duration: '1h', description: 'Fucsia sólido combinado con glitter rosado en uñas cortas. Perfecto para un look divertido y juvenil.', image: pink11 },
  { id: 'pink-french-classic', name: 'French Clásica', color: 'pink', subtitle: 'Elegancia Francesa', price: '$11.000', duration: '1h 30min', description: 'French clásica con punta blanca y base natural. Piedras de strass como detalle. Un clásico que nunca falla.', image: pink15 },
  { id: 'pink-baby-gems', name: 'Rosa Bebé con Gemas', color: 'pink', subtitle: 'Delicada & Brillante', price: '$12.000', duration: '1h 30min', description: 'Rosa bebé natural con pequeñas gemas y detalles dorados. Minimalismo elegante para las más delicadas.', image: pink16 },
  { id: 'pink-leopard', name: 'Animal Print', color: 'pink', subtitle: 'Estampado Animal', price: '$13.000', duration: '1h 45min', description: 'Base nude con estampado animal en las puntas. Un diseño original y trendy para las más atrevidas.', image: pink17 },
  { id: 'pink-tortoise', name: 'Puntas Carey', color: 'pink', subtitle: 'Carey Elegante', price: '$14.000', duration: '1h 45min', description: 'French de carey sobre base natural. Diseño elegante y sofisticado con onda retro.', image: pink18 },
  { id: 'pink-hot-glitter', name: 'Fucsia Brillante', color: 'pink', subtitle: 'Fucsia & Brillos', price: '$13.000', duration: '1h 30min', description: 'Fucsia vibrante con uña accent de glitter rosado. Almendra media con acabado ultra brillante.', image: pink19 },
  { id: 'pink-neon-french', name: 'French Rosa', color: 'pink', subtitle: 'French Moderna', price: '$14.000', duration: '1h 45min', description: 'French rosa neón con uña accent de glitter. Versión moderna y divertida del clásico francés.', image: pink20 },
  { id: 'pink-21', name: 'Rosa Suave', color: 'pink', subtitle: 'Natural & Femenino', price: '$10.000', duration: '1h 15min', description: 'Rosa suave y natural con acabado glossy. Perfecto para un look femenino y discreto.', image: pink21 },
  { id: 'pink-23', name: 'Almendra Rosada', color: 'pink', subtitle: 'Natural & Elegante', price: '$11.000', duration: '1h 15min', description: 'Tono blush en forma almendra con acabado impecable. Elegancia natural que combina con todo.', image: pink23 },
  { id: 'pink-24', name: 'Rosa Caramelo', color: 'pink', subtitle: 'Dulce & Divertido', price: '$12.000', duration: '1h 30min', description: 'Rosa caramelo vibrante con acabado brillante. Un color dulce y divertido que levanta el ánimo.', image: pink24 },
  { id: 'pink-28', name: 'Rosa Soñado', color: 'pink', subtitle: 'Delicado', price: '$11.000', duration: '1h 15min', description: 'Rosa soñado con tonos suaves y acabado perfecto. Ideal para las que aman lo delicado.', image: pink28 },
  { id: 'pink-30', name: 'Rosa Dorado', color: 'pink', subtitle: 'Metalizado Sutil', price: '$14.000', duration: '1h 45min', description: 'Tonos rosa dorado con efecto metalizado sutil. Sofisticación y tendencia en un solo diseño.', image: pink30 },
  { id: 'pink-32', name: 'Fucsia Total', color: 'pink', subtitle: 'Intenso & Vibrante', price: '$12.000', duration: '1h 30min', description: 'Fucsia intenso y pleno. Color vibrante con acabado glossy para las que aman el rosa fuerte.', image: pink32 },
  { id: 'pink-33', name: 'Flor de Cerezo', color: 'pink', subtitle: 'Diseño Floral', price: '$15.000', duration: '2h', description: 'Diseño inspirado en flores de cerezo con tonos rosados. Arte delicado y femenino.', image: pink33 },
  { id: 'pink-34', name: 'Marmolado Rosa', color: 'pink', subtitle: 'Efecto Mármol', price: '$14.000', duration: '1h 45min', description: 'Efecto marmolado en tonos rosados con detalles sutiles. Textura única y moderna.', image: pink34 },
  { id: 'pink-35', name: 'Frambuesa', color: 'pink', subtitle: 'Rosa Intenso', price: '$11.000', duration: '1h 15min', description: 'Tono frambuesa con acabado brillante. Un rosa intenso y elegante para destacar.', image: pink35 },
  { id: 'pink-36', name: 'Algodón de Azúcar', color: 'pink', subtitle: 'Suave & Dulce', price: '$10.000', duration: '1h', description: 'Rosa algodón de azúcar suave y dulce. Perfecto para un look tierno y juvenil.', image: pink36 },
  { id: 'pink-cromado-tornasol', name: 'Cromado Tornasol', color: 'pink', subtitle: 'Efecto Espejo', price: '$15.000', duration: '2h', description: 'Cromado tornasol con reflejos verde y rosa en almendra. Efecto espejo iridiscente que hipnotiza.', image: pink51 },

  // Rojo (7)
  { id: 'red-valentine', name: 'San Valentín', color: 'red', subtitle: 'Amor & Corazones', price: '$13.000', duration: '1h 45min', description: 'Rojo pasión con corazón accent sobre base nude. Diseño romántico perfecto para una fecha especial.', image: red1 },
  { id: 'red-cherry', name: 'French Cerezas', color: 'red', subtitle: 'Cerezas & French', price: '$15.000', duration: '2h', description: 'French roja con arte de cerezas a mano alzada. Diseño frutal, divertido y súper original.', image: red5 },
  { id: 'red-classic', name: 'Rojo Clásico', color: 'red', subtitle: 'Pasión Eterna', price: '$10.000', duration: '1h 15min', description: 'Rojo clásico puro con acabado ultra glossy. El color que nunca falla para cualquier ocasión.', image: red8 },
  { id: 'red-fire', name: 'Rojo Fuego', color: 'red', subtitle: 'Fuego & Intensidad', price: '$11.000', duration: '1h 15min', description: 'Rojo fuego intenso con brillo espejo. Uñas que irradian pasión y confianza.', image: red9 },
  { id: 'red-glam', name: 'Rojo Glamour', color: 'red', subtitle: 'Elegante & Audaz', price: '$12.000', duration: '1h 30min', description: 'Rojo glamoroso con acabado perfecto. Elegancia y actitud en cada uña.', image: red10 },
  { id: 'red-wine', name: 'Borgoña', color: 'red', subtitle: 'Tono Vino', price: '$12.000', duration: '1h 30min', description: 'Tono borgoña profundo como un buen vino. Sofisticado y perfecto para otoño-invierno.', image: red31 },
  { id: 'red-berry', name: 'Frutos Rojos', color: 'red', subtitle: 'Vibrante & Rico', price: '$11.000', duration: '1h 15min', description: 'Rojo vibrante con matices profundos. Un color rico y versátil para cualquier estilo.', image: red36 },
  { id: 'red-glitter-flor', name: 'Rojo con Brillos y Flor', color: 'red', subtitle: 'Brillos & Floral', price: '$14.000', duration: '1h 45min', description: 'Rojo con glitter y flor accent pintada a mano. Un diseño romántico que combina brillo y arte.', image: red48 },
  { id: 'red-corazones', name: 'Rojo con Corazones', color: 'red', subtitle: 'Corazones & Glitter', price: '$13.000', duration: '1h 45min', description: 'Rojo con glitter plateado y corazones accent. Perfecto para las románticas que aman los detalles.', image: red50 },

  // Blanco (8)
  { id: 'white-golden-border', name: 'Borde Dorado', color: 'white', subtitle: 'Dorado & Elegante', price: '$16.000', duration: '2h', description: 'Base glazed con borde dorado cromado en almendra. Efecto espejo lujoso y súper elegante.', image: white4 },
  { id: 'white-french-strass', name: 'French con Strass', color: 'white', subtitle: 'Clásica con Brillo', price: '$13.000', duration: '1h 45min', description: 'French clásica cuadrada con hilera de strass. El clásico francés elevado con cristales brillantes.', image: white12 },
  { id: 'white-pure', name: 'Blanco Puro', color: 'white', subtitle: 'Limpio & Fresco', price: '$10.000', duration: '1h 15min', description: 'Blanco puro con acabado impecable. Limpio, fresco y perfecto para cualquier temporada.', image: white14 },
  { id: 'white-pearl', name: 'Blanco Perla', color: 'white', subtitle: 'Brillo Perlado', price: '$12.000', duration: '1h 30min', description: 'Blanco perlado con reflejos iridiscentes. Brillo sutil que cambia con la luz.', image: white15 },
  { id: 'white-elegant', name: 'Blanco Elegante', color: 'white', subtitle: 'Elegancia Total', price: '$11.000', duration: '1h 15min', description: 'Blanco elegante con acabado satinado. Sofisticación pura para eventos especiales.', image: white21 },
  { id: 'white-snow', name: 'Blanco Nieve', color: 'white', subtitle: 'Simple & Impactante', price: '$10.000', duration: '1h', description: 'Blanco nieve brillante en forma cuadrada. Simple, limpio y siempre impactante.', image: white22 },
  { id: 'white-milky', name: 'Blanco Lechoso', color: 'white', subtitle: 'Semi-transparente', price: '$11.000', duration: '1h 15min', description: 'Tono blanco lechoso semi-transparente. Efecto natural y delicado que alarga los dedos.', image: white23 },
  { id: 'white-bridal', name: 'Diseño Novia', color: 'white', subtitle: 'Para Tu Día Especial', price: '$14.000', duration: '1h 45min', description: 'Diseño ideal para novias con blanco impecable y detalles sutiles. Tu día especial merece uñas perfectas.', image: white29 },
  { id: 'white-animal-print', name: 'French Animal Print', color: 'white', subtitle: 'Cebra & Natural', price: '$14.000', duration: '1h 45min', description: 'French con estampado cebra sobre base natural. Diseño original y trendy con toque salvaje.', image: white39 },

  // Negro (3)
  { id: 'black-galaxy', name: 'Galaxia', color: 'black', subtitle: 'Estrellas & Misterio', price: '$15.000', duration: '2h', description: 'Negro con efecto galaxia y destellos de estrellas plateadas. Misterioso y magnético como el cielo nocturno.', image: black25 },
  { id: 'black-dark', name: 'Luna Oscura', color: 'black', subtitle: 'Oscuro & Elegante', price: '$13.000', duration: '1h 30min', description: 'Negro profundo con acabado brillante. Elegancia oscura para las que aman el estilo dark.', image: black26 },
  { id: 'black-shimmer', name: 'Negro Brillante', color: 'black', subtitle: 'Brillo Nocturno', price: '$14.000', duration: '1h 45min', description: 'Negro con micro brillos que resplandecen con la luz. Misterio y sofisticación en cada movimiento.', image: black37 },
  { id: 'black-french-strass', name: 'French Negra Strass', color: 'black', subtitle: 'Strass & Corazón', price: '$16.000', duration: '2h', description: 'French negra cuadrada con corazón de strass y gemas. Oscura, elegante y llena de detalles brillantes.', image: black38 },

  // Azul (3)
  { id: 'blue-electric', name: 'Azul Eléctrico', color: 'blue', subtitle: 'Vibrante & Llamativo', price: '$14.000', duration: '1h 45min', description: 'Azul eléctrico intenso con efecto cromado en uña accent. Un color vibrante y llamativo que impacta.', image: blue27 },
  { id: 'blue-cromado', name: 'Azul Cromado', color: 'blue', subtitle: 'Holográfico', price: '$13.000', duration: '1h 30min', description: 'Azul holográfico cromado en uñas cortas redondeadas. Efecto espejo con reflejos que cambian con la luz.', image: blue41 },

  // Naranja (5)
  { id: 'orange-chrome', name: 'Naranja Cromado', color: 'orange', subtitle: 'Naranja & Dorado', price: '$15.000', duration: '2h', description: 'Naranja con detalles cromados dorados en 3D. Diseño artístico con volumen y brillo metalizado.', image: orange8 },
  { id: 'orange-sunset', name: 'Atardecer', color: 'orange', subtitle: 'Cálido & Otoñal', price: '$14.000', duration: '1h 45min', description: 'Tonos naranja cálidos como un atardecer. Calidez y estilo en cada detalle.', image: orange9 },
  { id: 'orange-mariposa', name: 'Naranja con Mariposa', color: 'orange', subtitle: 'Mariposa Accent', price: '$15.000', duration: '2h', description: 'Naranja vibrante con mariposa pintada a mano como accent. Diseño delicado y lleno de vida.', image: orange42 },
  { id: 'orange-flor', name: 'Naranja con Flor', color: 'orange', subtitle: 'Floral Accent', price: '$14.000', duration: '1h 45min', description: 'Naranja con flor accent pintada a mano. Un toque floral que le da calidez y frescura al diseño.', image: orange43 },
  { id: 'orange-glitter-flores', name: 'Naranja con Brillos y Flores', color: 'orange', subtitle: 'Brillos & Flores', price: '$16.000', duration: '2h', description: 'Naranja con glitter y flores pintadas a mano alzada. Diseño artístico cálido y lleno de detalles.', image: orange44 },

  // Violeta (2)
  { id: 'violet-aurora', name: 'Aurora Violeta', color: 'violet', subtitle: 'Aurora Boreal', price: '$15.000', duration: '2h', description: 'Violeta iridiscente con efecto aurora boreal. Colores que cambian con la luz para un look mágico.', image: violet4 },
  { id: 'violet-cromado', name: 'Violeta Cromado', color: 'violet', subtitle: 'Cromado Intenso', price: '$14.000', duration: '1h 45min', description: 'Violeta cromado intenso en almendra. Efecto espejo profundo con un color que hipnotiza.', image: violet46 },

  // Amarillo (1)
  { id: 'yellow-tropical', name: 'Amarillo Tropical', color: 'yellow', subtitle: 'Tropical & Floral', price: '$16.000', duration: '2h', description: 'Amarillo tropical con flores rosas a mano alzada y perlas doradas. Diseño veraniego lleno de vida.', image: yellow13 },
]

export default designs
