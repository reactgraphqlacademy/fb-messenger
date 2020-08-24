import React, { useState } from "react";
import Modal from "./Layout/Modal";

import Footer from "./Footer";
import TopBar from "./TopBar";
import Messenger from "./Messenger";

function App() {
  const [showModal, setShowModal] = useState();

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="app">
      <Modal show={showModal} toggleModal={toggleModal} />
      <TopBar toggleModal={toggleModal} />
      <Messenger />
      <Footer />
    </div>
  );
}

export default App;
