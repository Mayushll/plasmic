// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: thfgMRLdqoDfpJ3uRLRBfi
// Component: 7l0PKcXgZTC
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ToggleButton from "../../ToggleButton"; // plasmic-import: MdwZdGZHJ71/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: EmyFCAs1S4b/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_todo_mvc.module.css"; // plasmic-import: thfgMRLdqoDfpJ3uRLRBfi/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: 7l0PKcXgZTC/css

export type PlasmicFooter__VariantMembers = {
  state: "hasCompleted" | "singularLeft" | "empty";
};

export type PlasmicFooter__VariantsArgs = {
  state?: MultiChoiceArg<"hasCompleted" | "singularLeft" | "empty">;
};

type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>("state");

export type PlasmicFooter__ArgsType = {
  count?: React.ReactNode;
};

type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>("count");

export type PlasmicFooter__OverridesType = {
  footerContainer?: p.Flex<"div">;
  text?: p.Flex<"div">;
  allToggle?: p.Flex<typeof ToggleButton>;
  completedToggle?: p.Flex<typeof ToggleButton>;
  activeToggle?: p.Flex<typeof ToggleButton>;
  clearBtn?: p.Flex<"div">;
};

export interface DefaultFooterProps {
  count?: React.ReactNode;
  state?: MultiChoiceArg<"hasCompleted" | "singularLeft" | "empty">;
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <div
      data-plasmic-name={"footerContainer"}
      data-plasmic-override={overrides.footerContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        sty.footerContainer
      )}
    >
      {(
        hasVariant(variants, "state", "empty")
          ? false
          : hasVariant(variants, "state", "singularLeft")
          ? true
          : hasVariant(variants, "state", "hasCompleted")
          ? true
          : true
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__gkwB1, {
            [sty.freeBoxstate_empty__gkwB1VNKf]: hasVariant(
              variants,
              "state",
              "empty"
            ),
            [sty.freeBoxstate_hasCompleted__gkwB1JU3Sv]: hasVariant(
              variants,
              "state",
              "hasCompleted"
            ),
            [sty.freeBoxstate_singularLeft__gkwB1CM1G]: hasVariant(
              variants,
              "state",
              "singularLeft"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "2",
            value: args.count,
            className: classNames(sty.slotTargetCount, {
              [sty.slotTargetCountstate_hasCompleted]: hasVariant(
                variants,
                "state",
                "hasCompleted"
              ),
              [sty.slotTargetCountstate_singularLeft]: hasVariant(
                variants,
                "state",
                "singularLeft"
              )
            })
          })}

          {(hasVariant(variants, "state", "singularLeft") ? true : true) ? (
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text,
                {
                  [sty.textstate_empty]: hasVariant(variants, "state", "empty"),
                  [sty.textstate_hasCompleted]: hasVariant(
                    variants,
                    "state",
                    "hasCompleted"
                  ),
                  [sty.textstate_singularLeft]: hasVariant(
                    variants,
                    "state",
                    "singularLeft"
                  )
                }
              )}
            >
              {hasVariant(variants, "state", "singularLeft")
                ? " item left"
                : " items left"}
            </div>
          ) : null}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ks2Pw)}
      >
        <ToggleButton
          data-plasmic-name={"allToggle"}
          data-plasmic-override={overrides.allToggle}
          className={classNames("__wab_instance", sty.allToggle)}
          state={"selected" as const}
        >
          {"All"}
        </ToggleButton>

        <ToggleButton
          data-plasmic-name={"completedToggle"}
          data-plasmic-override={overrides.completedToggle}
          className={classNames("__wab_instance", sty.completedToggle)}
        >
          {hasVariant(globalVariants, "theme", "dark")
            ? "Completed"
            : "Completed"}
        </ToggleButton>

        <ToggleButton
          data-plasmic-name={"activeToggle"}
          data-plasmic-override={overrides.activeToggle}
          className={classNames("__wab_instance", sty.activeToggle)}
        >
          {"Active"}
        </ToggleButton>
      </p.Stack>

      {(hasVariant(variants, "state", "hasCompleted") ? true : false) ? (
        <div
          data-plasmic-name={"clearBtn"}
          data-plasmic-override={overrides.clearBtn}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.clearBtn,
            {
              [sty.clearBtnstate_hasCompleted]: hasVariant(
                variants,
                "state",
                "hasCompleted"
              )
            }
          )}
        >
          {"Clear completed"}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  footerContainer: [
    "footerContainer",
    "text",
    "allToggle",
    "completedToggle",
    "activeToggle",
    "clearBtn"
  ],
  text: ["text"],
  allToggle: ["allToggle"],
  completedToggle: ["completedToggle"],
  activeToggle: ["activeToggle"],
  clearBtn: ["clearBtn"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  footerContainer: "div";
  text: "div";
  allToggle: typeof ToggleButton;
  completedToggle: typeof ToggleButton;
  activeToggle: typeof ToggleButton;
  clearBtn: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footerContainer") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("footerContainer"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    allToggle: makeNodeComponent("allToggle"),
    completedToggle: makeNodeComponent("completedToggle"),
    activeToggle: makeNodeComponent("activeToggle"),
    clearBtn: makeNodeComponent("clearBtn"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
