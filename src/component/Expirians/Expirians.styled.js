import { styled } from 'styled-components';

export const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-top: 18px;
  padding-left: 28px;
  padding-bottom: 18px;
  padding-right: 28px;
  box-sizing: border-box;
  height: calc(100% - 42px);
  @media screen and (max-width: 999px) {
    padding-left: 27px;
    padding-right: 27px;
    height: auto;
  }
`;

export const Title = styled.p`
  color: #e99287;
  font-size: 14px;
  font-weight: 450;
  line-height: 1.7;
`;
export const Description = styled.div`
  font-size: 14px;
  font-weight: 450;
  line-height: 1.5;
`;

export const Position = styled.p`
  color: #c98bdf;
  font-size: 14px;
  font-weight: 450;
  line-height: 1.7;
`;

export const Place = styled.p`
  color: #d9d9d9;
  font-size: 14px;
  line-height: 1.5;
`;

export const DescriptionSpan = styled.span`
  color: #5565e8;
`;

export const DateTime = styled.span`
  color: #43d9ad;
  font-size: 14px;
  font-weight: 450;
  line-height: 1.7;
  //color:
`;

export const ExpList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 999px) {
    gap: 20px;
  }
`;
export const Item = styled.li``;
export const PositionList = styled.ul`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 999px) {
    display: block;
  }
`;

export const ItemPosition = styled.li`
  flex-basis: calc((70% - 30px));

  display: flex;
  flex-direction: column;
  gap: 7px;

  border-radius: 15px;
  border: 1px solid #1e2d3d;
  background: #011221;
  padding: 24px;

  &:nth-child(odd) {
    flex-basis: calc((30% - 30px));
    justify-content: center;
    @media screen and (max-width: 999px) {
      border-top: 1px solid #1e2d3d;
      border-bottom: none;
      border-radius: 15px 15px 0 0;
      padding: 15px;
    }
  }
  @media screen and (max-width: 999px) {
    border-top: none;
    border-radius: 0 0 15px 15px;
    padding: 10px 15px 15px;
  }
`;
