import styled from 'styled-components';

export const Container = styled.div`
  overflow: auto;

  padding: 28px;
  height: calc(100% - 42px);
  box-sizing: border-box;
  @media screen and (max-width: 1350px) {
    gap: 15px;
  }
`;

export const Title = styled.h4`
  color: #5565e8;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
`;
export const SecondTitle = styled.span`
  color: #607b96;
  font-size: 16px;
  font-weight: 700;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 20px;
  }
  @media screen and (max-width: 1350px) {
    gap: 15px;
  }
`;

export const Item = styled.li`
  flex-basis: calc((100% - (40px * 2)) / 3);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    flex-basis: 100%;
  }

  @media screen and (max-width: 1350px) {
    flex-basis: calc((100% - (40px)) / 2);
  }
`;
export const Body = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  border: 1px solid #1e2d3d;
  background: #011221;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  height: 145px;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;

export const TextBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  border-top: 1px solid #1e2d3d;
  padding: 32px 24px;
`;
export const Text = styled.p`
  color: #607b96;
  font-size: 18px;
  font-weight: 450;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const Link = styled.a`
  padding: 10px 14px;
  color: #fff;
  font-size: 14px;
  font-weight: 450;

  border-radius: 8px;
  background: #1c2b3a;
`;

export const Icon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  padding: 6px;
  border-radius: 0.25rem;
  background-color: #86e1f9;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SecondIcon = styled(Icon)`
  top: 54px;
`;

export const IconHtml = styled(Icon)`
  background-color: #ffa500;
`;

export const IconReact = styled(Icon)`
  background-color: #86e1f9;
`;

export const IconSass = styled(SecondIcon)`
  background-color: #cd6799;
`;

export const IconJs = styled(Icon)`
  background-color: #f0db4f;
`;
