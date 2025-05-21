import styles from './CountryCard.module.css';

function CountryCard({ country, selected, onSelect }) {
  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ''}`}
      onClick={() => onSelect(country)}
    >
      <p>{country}</p>
    </div>
  );
}

export default CountryCard;

