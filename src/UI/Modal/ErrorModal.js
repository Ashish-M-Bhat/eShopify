import reactDom from "react-dom";
import Card from "./Card";
import ErrorModalCssModule from "./ErrorModal.module.css";

const Overlay = (props) => {
  return (
    <Card className={`${ErrorModalCssModule.modal}`}>
      <header className={ErrorModalCssModule.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={ErrorModalCssModule.content}>
        <p>{props.message}</p>
      </div>
      <footer className={ErrorModalCssModule.actions}>
        <button onClick={props.closeErrorModal}>Okay :(</button>
      </footer>
    </Card>
  );
};

const Backdrop = (props) => {
  return (
    <div
      className={ErrorModalCssModule.backdrop}
      onClick={props.closeErrorModal}
    ></div>
  );
};
const ErrorModal = (props) => {
  return (
    <div>
      {reactDom.createPortal(
        <Backdrop closeErrorModal={props.closeErrorModal} />, document.getElementById('BackdropModal')
      )}
      {reactDom.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          closeErrorModal={props.closeErrorModal}
        />, document.getElementById('ErrorModal')
      )}
    </div>
  );
};

export default ErrorModal;
