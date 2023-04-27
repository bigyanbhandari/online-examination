import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.color};
  color:gray;
  padding: 20px;
  border-radius: 10px;
  margin-top:30px;

  display: flex;
  flex-direction: column;
  gap: 10px;
 
  width: ${(props) => props.width || '232px'};
  height: auto;
 

`;

const Card = ({ icon, label, count, color, pic, width, onClick }) => {
  console.log(pic, width)
  return (
    <Wrapper color={color} className="shadow-2xl" width={width} onClick={onClick}>
      <div className="flex w-full gap-2" >
       
        {icon}
        <h2 className="text-[20px]">{label}</h2>
      </div>
      <h1 className="text-[30px]">{count}</h1>
      <div>

      {pic}
      </div>
    </Wrapper>
  );
};

export default Card;
