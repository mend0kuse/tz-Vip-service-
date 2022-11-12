import React, { FC } from 'react'
import './Button.scss'

interface ButtonProps {
	onClick?: (e: React.FormEvent) => void;
	children: React.ReactNode;
	[x: string]: any;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
	const rootClass = ['my-btn']

	if (props.className) {
		rootClass.push(props.className)
	}

	return (
		<button {...props} className={rootClass.join(' ')}>{children}</button>
	)
}

export default Button