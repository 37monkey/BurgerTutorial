import React from 'react';
import original from '../../assets/images/original.png';
import classes from './Logo.css';

const logo = (props) => (
	<div className={classes.Logo}>
		<img src={original} alt="React Burger" />
	</div>
);

export default logo;
