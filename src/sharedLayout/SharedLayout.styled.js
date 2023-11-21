import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-right: auto;
	margin-left: auto;

	padding: 10px;

	width: 100%;

	border-bottom: 1px solid teal;

	background-color: var(--primary-color);
`;

const Navigation = styled.nav`
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
`;

const DropDownListContainer = styled.div`
	position: relative;

	color: var(--secondary-text-color);

	&:hover {
		color: var(--secondary-text-color-hover);

		&::before {
			content: "";
			position: absolute;

			display: block;
			width: 100%;

			border-top: 2px solid var(--secondary-text-color-hover);
		}
	}

	&:hover > ul {
		display: block;
	}
`;

const SubList = styled.ul`
	display: none;
	position: absolute;
	left: 0;
	/* top: -58 px; */

	background-color: var(--background-color);

	border-radius: 5px;

	z-index: 10;

	& li:hover::after {
		content: "";
		position: absolute;

		display: block;
		width: 100%;

		border-bottom: 2px solid var(--primary-color-transparent);
	}
`;

const LinkStyled = styled(NavLink)`
	display: block;
	padding: 10px;
`;
const SubLinkStyled = styled(NavLink)`
	display: block;
	padding: 5px;

	color: var(--primary-color);

	&:hover {
		color: var(--primary-color-transparent);
	}

	/* border-bottom: 1px solid teal;
	border-radius: 5px; */
`;

export {
	LinkStyled,
	SubLinkStyled,
	Navigation,
	DropDownListContainer,
	SubList,
	Header,
};
