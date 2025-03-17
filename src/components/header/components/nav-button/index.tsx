import styles from './index.module.css';

type TProps = {
  onClick: () => void;
  isActive: boolean;
  label: string;
};

export const NavButton = ({ onClick, isActive, label }: TProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${styles.button} ${isActive && styles.button_active}`}
    >
      {label}
    </button>
  );
};
