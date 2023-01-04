import { Link } from 'react-router-dom';

const CardPeople = ({ persons }) => {
  return (
    <ul className='cards-people'>
      {persons.slice(0, 15).map((person) => (
        <li className='card-people' key={person.id}>
          <div className='card-people__header'>
            <img
              className='card-people__img'
              src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
              alt={`Imagen de ${person.original_name} `}
            />
          </div>
          <div className='card-people__bottom'>
            <p className='card-people__cta'>
              <Link>{person.original_name}</Link>
            </p>
            <p className='card-people__character'>{person.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardPeople;
