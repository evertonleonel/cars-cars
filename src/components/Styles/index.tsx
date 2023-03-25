import styled from 'styled-components';

export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const BodyIntro = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const BodyMain = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const MediumText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
`;

export const Caption = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;

export const SmallText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 130%;
`;
