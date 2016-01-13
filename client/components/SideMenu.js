const Bemmer = require('bemmer');
const React = require('react');

const SideMenu = props => {
  const b = Bemmer.create('sideMenu', props.className);

  return (
    <section className={b()}>
      <ul className={b('__list')}>
        {props.items.map((item, i) => {
          return <__Item className={b('__list__item')} item={item} key={i} />;
        })}
      </ul>
    </section>
  );
};

const __Item = props => {
  const b = Bemmer.create(props.className);
  const onClick = () => {
    console.log('clicked');
  };

  return (
    <li className={b()} onClick={onClick}>
      aaa
    </li>
  );
};

SideMenu.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      text: React.PropTypes.string.isRequired,
    })
  ).isRequired,
};

module.exports = SideMenu;
