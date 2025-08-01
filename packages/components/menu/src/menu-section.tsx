import type {Node} from "@react-types/shared";
import type {TreeState} from "@react-stately/tree";
import type {Key} from "react";
import type {MenuItemProps} from "./menu-item";
import type {MenuSectionBaseProps} from "./base/menu-section-base";

import {menuSection} from "@heroui/theme";
import {useMenuSection} from "@react-aria/menu";
import {useMemo} from "react";
import {forwardRef} from "@heroui/system";
import {clsx, mergeProps} from "@heroui/shared-utils";
import {Divider} from "@heroui/divider";

import MenuItem from "./menu-item";

export interface MenuSectionProps<T extends object = object> extends MenuSectionBaseProps {
  item: Node<T>;
  state: TreeState<T>;
  /**
   * The menu items variant.
   */
  variant?: MenuItemProps["variant"];
  /**
   * The menu items color.
   */
  color?: MenuItemProps["color"];
  /**
   * Whether to disable the items animation.
   * @default false
   */
  disableAnimation?: boolean;
  /**
   * Whether the menu should close when the menu item is selected.
   * @default true
   */
  closeOnSelect?: MenuItemProps["closeOnSelect"];
  /**
   * Callback fired when the menu item is selected.
   */
  onAction?: (key: Key) => void;
}

/**
 * @internal
 */
const MenuSection = forwardRef<"li", MenuSectionProps>(
  (
    {
      item,
      state,
      as,
      variant,
      color,
      disableAnimation,
      onAction,
      closeOnSelect,
      className,
      classNames,
      showDivider = false,
      hideSelectedIcon,
      dividerProps = {},
      itemClasses,
      // removed title from props to avoid browsers showing a tooltip on hover
      // the title props is already inside the rendered prop
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      title,
      ...otherProps
    },
    _,
  ) => {
    const Component = as || "li";

    const slots = useMemo(() => menuSection(), []);

    const baseStyles = clsx(classNames?.base, className);
    const dividerStyles = clsx(classNames?.divider, dividerProps?.className);

    const {itemProps, headingProps, groupProps} = useMenuSection({
      heading: item.rendered,
      "aria-label": item["aria-label"],
    });

    return (
      <Component
        data-slot="base"
        {...mergeProps(itemProps, otherProps)}
        className={slots.base({class: baseStyles})}
      >
        {item.rendered && (
          <span
            {...headingProps}
            className={slots.heading({class: classNames?.heading})}
            data-slot="heading"
          >
            {item.rendered}
          </span>
        )}
        <ul
          {...groupProps}
          className={slots.group({class: classNames?.group})}
          data-has-title={!!item.rendered}
          data-slot="group"
        >
          {[...item.childNodes].map((node) => {
            const {key: nodeKey, props: nodeProps} = node;

            let menuItem = (
              <MenuItem
                key={nodeKey}
                classNames={itemClasses}
                closeOnSelect={closeOnSelect}
                color={color}
                disableAnimation={disableAnimation}
                hideSelectedIcon={hideSelectedIcon}
                item={node}
                state={state}
                variant={variant}
                onAction={onAction}
                {...nodeProps}
              />
            );

            if (node.wrapper) {
              menuItem = node.wrapper(menuItem);
            }

            return menuItem;
          })}
          {showDivider && (
            <Divider
              as="li"
              className={slots.divider({
                class: dividerStyles,
              })}
              {...dividerProps}
            />
          )}
        </ul>
      </Component>
    );
  },
);

MenuSection.displayName = "HeroUI.MenuSection";

export default MenuSection;
