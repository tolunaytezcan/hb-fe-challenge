import { memo } from 'react';

import './Button.scss';

const Button = memo(({ name, badge, icon, type, onClick, disable }) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`buttonContainer ${type || ''} ${icon && 'buttonIcon'}`}>
      <span>{name}</span>
      {icon && <img src={icon} alt="buttonIcon" />}
      {badge > 0 && <span className="quantityBadge">{badge}</span>}
    </button>
  );
});

export default Button;
