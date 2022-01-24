import * as React from "react";
import {
  PlasmicFooter,
  DefaultFooterProps
} from "./plasmic/copy_of_todo_mvc/PlasmicFooter";
import {ShowFilter} from "../model";

interface FooterProps extends DefaultFooterProps {
  children?: never;
  showFilter: ShowFilter;
  setShowFilter: (showFilter: ShowFilter) => void;
  onClear: () => void;
}

function Footer_(props: FooterProps) {
  const { showFilter, setShowFilter, onClear, ...rest } = props;
    return (
      <PlasmicFooter
          {...rest}
          allToggle={{
            selected: showFilter === 'all',
            onClick: () => {
              setShowFilter('all');
            }
          }}
          completedToggle={{
            selected: showFilter === 'completed',
            onClick: () => {
              setShowFilter('completed');
            }
          }}
          activeToggle={{
            selected: showFilter === 'active',
            onClick: () => {
              setShowFilter('active');
            }
          }}
          clearBtn={{
            onClick: onClear
          }}
      />
  )
}

const Footer = React.forwardRef(Footer_);
export default Footer;
