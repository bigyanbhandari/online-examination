import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.color};
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-top:30px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Card = ({ icon, label, count, color, pic }) => {
  console.log(pic)
  return (
    <Wrapper color={color}>
      <div className="flex w-full gap-2" >
       
        {icon}
        <h2 className="text-[25px]">{label}</h2>
      </div>
      <h1 className="text-[50px]">{count}</h1>
      <div>

      {pic}
      </div>
    </Wrapper>
  );
};

export default Card;
