export default [{
  id: 'button',
  name: 'Button',
  Component: () => Promise.resolve(require('./Button/README.mdx'))
}, {
  id: 'card',
  name: 'Card',
  Component: () => Promise.resolve(require('./Card/README.mdx'))
}]
