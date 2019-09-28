import React from 'react';
import TopBar from './TopBar';
import Messenger from './Messenger';
import Modal from './Layout/Modal';
import Footer from './Footer';

function App() {
  const [showModal, setShowModal] = React.useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <div className="app">
      <Modal show={showModal} toggleModal={toggleModal} />
      <TopBar
        toggleModal={toggleModal}
        user={{ name: 'Alex' }}
        userPosition="right"
      />
      <Messenger toggleModal={toggleModal} />
      <Footer />
    </div>
  );
}

export default App;
