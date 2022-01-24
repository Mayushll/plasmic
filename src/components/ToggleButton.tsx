import * as React from "react";
import {
  PlasmicToggleButton,
  DefaultToggleButtonProps
} from "./plasmic/copy_of_todo_mvc/PlasmicToggleButton";

interface ToggleButtonProps extends DefaultToggleButtonProps {
  onClick: () => void;
  selected: boolean;
}

function ToggleButton_({onClick, selected, state, ...rest}:ToggleButtonProps) {

  return (
      <PlasmicToggleButton
          {...rest}
          state={selected ? 'selected' : undefined}
          onClick={onClick}
      />
  );
}

const ToggleButton = React.forwardRef(ToggleButton_);
export default ToggleButton;
