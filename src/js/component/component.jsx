import React from "react";
import PropTypes from "prop-types";

const Component = props => {
	return <li>{props.Text}</li>;
};
Component.propTypes = {
	Text: PropTypes.string
};
export default Component;
