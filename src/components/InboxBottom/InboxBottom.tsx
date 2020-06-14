import React, { useRef } from 'react';
import * as S from './style';
import plusSvg from '../../assets/icon/plus.svg';

interface Props { }

const InboxBottom: React.FC<Props> = () => {
  const completed = useRef(0);

  return (
    <S.InboxBottom>
      <S.InboxBottomCompleted>
        <span>COMPLETED</span>
        <S.InboxBottomCompletedNum>{completed.current}</S.InboxBottomCompletedNum>
      </S.InboxBottomCompleted>
      <S.InboxBottomPlus src={plusSvg} alt="plus" title="plus" />
    </S.InboxBottom>
  );
};

export default InboxBottom;
