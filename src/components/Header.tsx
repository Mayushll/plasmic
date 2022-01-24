import * as React from "react";
import {
  PlasmicHeader,
  DefaultHeaderProps
} from "./plasmic/copy_of_todo_mvc/PlasmicHeader";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import {useState} from "react";
import {createEntry, Entry} from "../model";

interface HeaderProps extends DefaultHeaderProps {
    children?: never;
    onAdd: (entry: Entry) => void;
}

function Header_({ onAdd, ...rest }: HeaderProps) {
    const [text, setText] = useState('');

  return (
      <PlasmicHeader
          {...rest}
          textbox={{
            value: text,
            onChange: (e) => setText(e.target.value),
            onKeyDown: (e) => {
              if (e.key === 'Enter') {
                onAdd(createEntry(text));
                setText('');
              }
            }
          }}
      />
  );
}

const Header = React.forwardRef(Header_);
export default Header;
