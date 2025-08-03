import './Popup.css';
import { FC } from 'react';

type PopupProps = {
  text: string;
};

const Popup: FC<PopupProps> = (props) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="progress"></div>
        {props.text}
      </div>
    </div>
  );
};

export default Popup;