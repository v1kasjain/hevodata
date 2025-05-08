import Card from './Card';

const CardList = ({
  cards,
  activeIndex,
  progress,
  onCardClick,
  CIRC
}) => (
  <ul
    className="flex flex-col gap-6"
    itemScope
    itemType="https://schema.org/ItemList"
  >
    {cards.map((c, i) => (
      <li key={i} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
        <meta itemProp="position" content={i + 1} />
        <Card
          idx={i}
          title={c.title}
          icon={c.icon}
          isActive={i === activeIndex}
          onClick={() => onCardClick(i)}
          progress={progress}
          CIRC={CIRC}
        />
      </li>
    ))}
  </ul>
);

export default CardList; 