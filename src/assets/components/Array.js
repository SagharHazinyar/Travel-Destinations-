import beachImage from '../../assets/images/beach.png';
import mountainImage from '../../assets/images/mountain.png';
import cityImage from '../../assets/images/city.png';
const destinations = [
    {
        id:1,
      title: 'Beach',
      image: beachImage,
      description: {
        en: 'Enjoy the sun, sand, and surf at beautiful beach destinations. Relax under palm trees and experience breathtaking sunsets.',
        es: 'Disfruta del sol, arena y surf en hermosos destinos de playa. Relájate bajo palmeras y experimenta atardeceres impresionantes.',
      },
    },
    {
        id:2,
      title: 'Mountain',
      image: mountainImage,
      description: {
        en: "Embrace the tranquility and serenity of mountain getaways. Experience nature's beauty and go on adventurous hikes.",
        es: 'Abraza la tranquilidad y serenidad de las escapadas a la montaña. Experimenta la belleza de la naturaleza y realiza caminatas aventureras.',
      },
    },
    {
        id:3,
      title: 'City',
      image: cityImage,
      description: {
        en: 'Explore vibrant cities with bustling streets, rich history, and diverse cultures. Discover iconic landmarks and local cuisine.',
        es: 'Explora ciudades vibrantes con calles bulliciosas, rica historia y culturas diversas. Descubre monumentos icónicos y cocina local.',
      },
    },
  ];
  export default destinations;