const Bemmer = require('bemmer');
const React = require('react');
const { SideMenu } = require('./components');

const items = [
  { text: 'aaa' },
  { text: 'bbb' },
  { text: 'ccc' },
];

const Root = React.createClass({
  render() {
    const b = Bemmer.create('root');

    return (
      <section className={b()}>
        <SideMenu className={b('__sideMenu')} items={items} />

        {this.props.children}
      </section>
    );
  },
});

module.exports = Root;
