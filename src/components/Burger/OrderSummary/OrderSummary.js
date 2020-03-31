import React from 'react';
import Button from '../../Ui/Button/Button';
const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
			</li>
		);
	});

	return (
		<React.Fragment>
			<h3>Your Order</h3>
			<p>A burger with the following:</p>
			<ul>{ingredientSummary}</ul>
			<p>
				<strong>Total Price: £{props.price.toFixed(2)}</strong>
			</p>
			<p>Continue to checkout</p>
			<Button btnType="Danger" clicked={props.puchaseCancelled}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
		</React.Fragment>
	);
};

export default orderSummary;
