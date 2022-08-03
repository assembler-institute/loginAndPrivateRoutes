import { Link } from 'react-router-dom';

const CharactersByHero = ({ real_name, characters}) => {
    return ( real_name === characters )
     ? <></>
     : <p>{ characters }</p>;
}


export const HeroCard = ({ id, superhero, publisher, real_name, first_appearance, characters }) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">      
                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img" alt={ superhero } />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ real_name }</p>
                            <CharactersByHero characters={ characters } real_name={ real_name } />
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                            <Link to={`/hero/${ id }`}>
                                Show more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
