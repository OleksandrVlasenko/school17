import styled from "@emotion/styled";

export const NewsItemStyled = styled.li`
  background-color: #f2ffff;

  padding: 20px;

  @media (min-width: 768px) {
    padding: 32px;
  }

  @media (min-width: 1200px) {
    padding: 16px;
  }

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 50px;

  font-size: 32px;
  font-weight: 500;

  color: var(--primary-color);

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  margin-bottom: 50px;

  font-size: 18px;
  font-weight: 400;

  color: var(--main-text-color);
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const AdditionalInfoText = styled.p`
  font-size: 18px;
  font-weight: 400;

  color: var(--main-text-color);
`;
