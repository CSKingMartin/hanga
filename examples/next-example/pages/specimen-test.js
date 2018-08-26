import React from 'react'
import {
  Editor,
  Specimen,
  StatefulContext
} from 'hanga'

export default () =>
  <StatefulContext.Provider>
    <h1>Specimen Test</h1>

    <p>Aliqua tempor labore minim fugiat ipsum. Est nostrud culpa mollit duis proident nostrud proident deserunt sunt. Consequat esse tempor sunt fugiat cillum sint aute sit adipisicing irure nulla adipisicing ullamco ea. Duis tempor ea Lorem proident laborum est duis id consequat quis. Ea ullamco sunt excepteur in labore esse non mollit dolore nulla aute occaecat.</p>

    <h2>Static Specimen</h2>

    <Specimen>
      <button className="btn">This is a button</button>
    </Specimen>

    <h2>Dynamic Specimen with inline editors</h2>

    <Specimen Editors={() => (
      <Editor.Text
        name="buttonText"
        label="Button Text"
        defaultValue="This button text is editable"
      />
    )}>
      {
        ({ buttonText }) =>
          <button className="btn">{buttonText}</button>
      }
    </Specimen>

    <h2>Dynamic Specimen</h2>

    <Editor.Text
      name="buttonText"
      label="Button Text"
      defaultValue="This button text is editable"
    />

    <Specimen>
      {
        ({ buttonText }) =>
          <React.Fragment>
            <button>{buttonText}</button>
          </React.Fragment>
      }
    </Specimen>

    <h2>Really tall Specimen</h2>

    <Specimen>
      <p><button>This is a button</button></p>
      <p>Aliqua tempor labore minim fugiat ipsum. Est nostrud culpa mollit duis proident nostrud proident deserunt sunt. Consequat esse tempor sunt fugiat cillum sint aute sit adipisicing irure nulla adipisicing ullamco ea. Duis tempor ea Lorem proident laborum est duis id consequat quis. Ea ullamco sunt excepteur in labore esse non mollit dolore nulla aute occaecat.</p>
      <p>Duis eiusmod minim incididunt quis Lorem. Dolore aliquip dolore incididunt quis excepteur nostrud labore labore pariatur occaecat voluptate. Sit est labore cillum reprehenderit laboris excepteur nisi aliqua commodo in magna non ut. Ullamco anim sint incididunt eu non mollit deserunt commodo est anim.</p>
      <p>Aliqua minim non voluptate adipisicing amet velit dolor excepteur consequat sit tempor anim dolore ut. Magna quis dolor dolor aliqua eiusmod non officia proident velit. Eu nisi sunt sint tempor nulla nisi fugiat adipisicing ipsum aute Lorem deserunt incididunt aute.</p>
      <p>Elit magna ut non aliquip velit sit pariatur cillum occaecat labore Lorem. In deserunt proident culpa deserunt minim exercitation laboris tempor ex ea aliqua. Quis est eu elit ea. Proident sint laborum aliqua occaecat in laboris minim quis laboris anim minim quis ipsum anim. Voluptate sint incididunt fugiat ipsum qui cupidatat minim ullamco Lorem eiusmod sit. Cupidatat excepteur ullamco nulla proident minim reprehenderit.</p>
      <p>Ea incididunt velit velit laborum exercitation sint duis adipisicing velit veniam eiusmod reprehenderit in. Excepteur anim do dolor exercitation non consequat. Pariatur duis ullamco voluptate non est eiusmod enim eiusmod irure ex culpa duis. Amet fugiat non occaecat aliquip occaecat est non elit aliquip in.</p>
      <p>Nostrud eiusmod dolore irure ad adipisicing esse officia laboris. Pariatur magna ea proident velit nisi exercitation. Do nulla incididunt et ad nisi qui enim adipisicing non.</p>
      <p>Sint adipisicing laborum elit laborum reprehenderit cupidatat cillum amet voluptate est. Fugiat labore ipsum Lorem occaecat id anim do. Occaecat nisi est adipisicing ex nulla irure elit velit enim aliquip. Amet cillum magna sunt minim eu et amet mollit in culpa elit id velit.</p>
      <p>Nostrud occaecat ex cupidatat dolor minim cupidatat dolore. Eiusmod nisi fugiat cillum elit proident ullamco culpa eu. Cillum aute voluptate elit labore aliqua et. Cillum exercitation aliquip non non adipisicing commodo ad officia exercitation. Aliqua consectetur magna qui laboris esse incididunt excepteur eiusmod.</p>
      <p>Duis irure elit deserunt eu cillum sint sunt. Irure culpa elit tempor ullamco in cupidatat fugiat. Ullamco sint fugiat duis ullamco id sit Lorem proident dolore ad irure amet. Sit ad eu irure nostrud ex laboris consectetur labore ad labore aliqua. Do esse do do incididunt enim qui consectetur Lorem minim laborum Lorem mollit. Ad anim occaecat ullamco laborum ex eiusmod irure. Eiusmod excepteur adipisicing in laboris velit.</p>
      <p>Duis dolor velit duis Lorem duis excepteur non dolore ullamco incididunt. Mollit elit ad laborum Lorem sunt ipsum et incididunt eiusmod culpa excepteur sit voluptate veniam. Officia aliquip ullamco dolore voluptate non reprehenderit ea consectetur dolor duis ipsum elit in.</p>
      <p>Eiusmod id laborum officia est velit nostrud mollit commodo minim non laboris. Magna aliqua cupidatat dolor amet sint non ullamco pariatur do exercitation laboris. Excepteur et nulla sit tempor excepteur. Ut elit esse Lorem ipsum amet proident voluptate reprehenderit anim eiusmod occaecat nulla. Tempor voluptate cillum sint ad sunt laborum nisi.</p>
      <p>Elit pariatur irure pariatur fugiat qui sunt veniam enim elit exercitation labore esse. Veniam sint do consequat mollit cillum aute et voluptate quis sunt cupidatat esse sint. Consequat ipsum reprehenderit est commodo id esse pariatur cillum fugiat irure officia. Id labore adipisicing veniam qui aliqua laboris.</p>
      <p>Velit aliquip ad aliqua sunt proident ad occaecat enim. Elit minim dolor labore non quis exercitation aute qui deserunt adipisicing consequat laboris ullamco. Sit voluptate incididunt enim Lorem aliqua ex ut id.</p>
      <p>Sit aute occaecat et laboris enim veniam excepteur Lorem laboris duis ullamco duis culpa. Duis dolor officia aliquip aliqua non nulla sit aliquip velit nulla dolore proident laboris ullamco. Ipsum incididunt proident tempor nostrud esse qui exercitation aliqua elit enim officia nostrud ex. Sunt exercitation ad minim cillum quis est tempor nostrud Lorem et pariatur cillum. Id elit voluptate dolore nulla consequat eiusmod sunt nulla ex adipisicing. Dolore voluptate incididunt proident id est incididunt aute in non pariatur enim proident sit.</p>
      <p>Ullamco mollit cupidatat fugiat elit laboris proident. Et culpa reprehenderit nulla aute est ex labore amet amet. Aute esse mollit in exercitation commodo laborum ad velit. Dolor consequat enim magna enim eiusmod enim irure dolor exercitation dolore esse. Dolore voluptate eu et cupidatat laborum commodo duis consectetur dolore incididunt. Sit magna occaecat tempor nulla velit sit. Exercitation occaecat do pariatur proident veniam non labore sint fugiat.</p>
      <p>Nisi dolor deserunt incididunt consequat est ea commodo. Fugiat esse fugiat tempor aute irure deserunt. Duis ex adipisicing minim ipsum. Lorem elit id veniam pariatur fugiat irure. Ut culpa do ex ullamco incididunt ipsum in laboris incididunt.</p>
      <p>Tempor nulla officia commodo cillum tempor ullamco eu irure sint amet consequat. Esse laboris commodo ex proident elit eu aute reprehenderit mollit. Est Lorem mollit eiusmod cupidatat in ipsum enim. Ut magna irure irure culpa.</p>
    </Specimen>
  </StatefulContext.Provider>
