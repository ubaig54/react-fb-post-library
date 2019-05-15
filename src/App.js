import React from 'react';
import './App.css';
import Post from './component/Post';
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.jpg';
import image4 from './assets/images/image4.jpg';
import image5 from './assets/images/image5.jpg';

function App() {
  return (
    <div className="App">
      <Post createdBy={'Usama Baig'} avatar={'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/42402399_1007604686107698_8616916422662029312_n.jpg?_nc_cat=101&_nc_eui2=AeEs9D8oFnV1Yj5mjvTySv69fSeYM_onHUEb21ROYSL3ndxh5IdY3loZiU5_EGe0NbxytKDEo9beKPZHXNiXv9B4CjKFLP93eZigAZNnavCGZA&_nc_ht=scontent.fkhi1-1.fna&oh=c982df878c1c7e61caae995ef91501fc&oe=5D723CCA'} caption={'This is how it looks :)'} images={[image1, image2, image3, image4, image5]} />
      <Post createdBy={'Ali Ahmed'} avatar={'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/42402399_1007604686107698_8616916422662029312_n.jpg?_nc_cat=101&_nc_eui2=AeEs9D8oFnV1Yj5mjvTySv69fSeYM_onHUEb21ROYSL3ndxh5IdY3loZiU5_EGe0NbxytKDEo9beKPZHXNiXv9B4CjKFLP93eZigAZNnavCGZA&_nc_ht=scontent.fkhi1-1.fna&oh=c982df878c1c7e61caae995ef91501fc&oe=5D723CCA'} caption={'Hey ya'} images={[image4, image5, image1, image2, image3]} />
    </div>
  );
}

export default App;