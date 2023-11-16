import styled from "@emotion/styled";

const MainContainer = styled.div`
	padding-left: 20px;
	padding-right: 20px;

	margin-left: auto;
	margin-right: auto;

	width: 100%;

	@media (min-width: 320px) {
		width: 320px;
	}

	@media (min-width: 768px) {
		width: 768px;

		padding-left: 32px;
		padding-right: 32px;
	}

	@media (min-width: 1200px) {
		width: 1200px;

		padding-left: 16px;
		padding-right: 16px;
	}
`;

export { MainContainer };
