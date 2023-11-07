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
`;

const Navigation = styled.nav`
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
`;

const DropDownListContainer = styled.div`
	position: relative;

	&:hover > ul {
		display: block;
	}
`;

const SubList = styled.ul`
	display: none;
	position: absolute;
	left: 0;
	/* top: -58 px; */

	background-color: beige;

	border-radius: 5px;

	z-index: 10;
`;

const LinkStyled = styled(NavLink)`
	display: block;
	padding: 10px;

	border: 1px solid teal;
	border-radius: 5px;
`;
const SubLinkStyled = styled(NavLink)`
	display: block;
	padding: 5px;

	border-bottom: 1px solid teal;
	border-radius: 5px;
`;

export {
	LinkStyled,
	SubLinkStyled,
	Navigation,
	DropDownListContainer,
	SubList,
	Header,
};
