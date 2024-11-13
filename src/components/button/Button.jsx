import styles from './button.module.css';

const Button = ({ color, children }) => {
	const buttonStyles = `${styles.button} ${styles[color]}`;
	return <button className={buttonStyles}>{children}</button>;
};

export default Button;
