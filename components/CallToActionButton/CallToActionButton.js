import { ButtonLink } from "components/ButtonLink";

export const CallToActionButton = ({
  buttonLabel,
  buttonDestination,
  buttonAlign = "left",
}) => {
  const alignMap = {
    left: "text-align",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className={alignMap[buttonAlign]}>
      <ButtonLink destination={buttonDestination} label={buttonLabel} />
    </div>
  );
};
