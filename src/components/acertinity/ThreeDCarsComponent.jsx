import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function ThreeDCardComponent({ children, className }) {
  return (
    <CardContainer className="">
      <CardBody className="">
        <CardItem className={className} translateZ="70">
          {children}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
