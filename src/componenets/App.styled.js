import styled from "@emotion/styled";

const MainContainer = styled.main`
	margin-left: auto;
	margin-right: auto;

	width: 100%;

	@media (min-width: 320px) {
		width: 320px;
	}

	@media (min-width: 768px) {
		width: 768px;
	}

	@media (min-width: 1200px) {
		width: 1200px;
	}
`;

export { MainContainer };
