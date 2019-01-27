import { Icon } from 'antd';
import React from 'react';
import styled from 'styled-components';

interface Props {
  href: string;
  icon: string;
}

const ButtonWrapper = styled.a`
  width: 40px;
  padding: 0;
  font-size: 18px;
  border-radius: 50%;
  height: 40px;
  line-height: 38px;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;

  &:hover,
  &:focus {
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Button = ({ href, icon }: Props) => (
  <ButtonWrapper href={href} target="_blank" rel="noopener noreferrer">
    <Icon type={icon} />
  </ButtonWrapper>
);

export default Button;
