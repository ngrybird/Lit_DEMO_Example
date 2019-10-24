import { html, render } from 'lit-html';

/* lit-html: UI as a pure function of data */
const view = ({ content, title }) =>
  html`<h1>${title}</h1>${content}`;

/* Compose templates from other templates */
const title = 'View as a Pure Function of Data';
const content = html`
  <p>Composable templates are flexible and powerful. They let you define
  complex views from simple building blocks.</p>
  <p>Using composition, you can hide implementation details of your
  app. This makes your work easier to test, reason about, and debug.</p>`;

/* Everything up to now has been pure. By calling `render`,
 * we pull the trigger on the impure part of our app and
 * actually write our view to the screen. */
render(view({ content, title }), document.body);
