import {PopoverContent} from "@heroui/popover";
import {FocusScope} from "@react-aria/focus";
import {forwardRef} from "@heroui/system";
import {Menu, MenuProps} from "@heroui/menu";
import {ForwardedRef, ReactElement} from "react";

import {useDropdownContext} from "./dropdown-context";

interface Props<T extends object = object> extends Omit<MenuProps<T>, "menuProps"> {}

export type DropdownMenuProps<T extends object = object> = Props<T>;

const DropdownMenu = forwardRef(function DropdownMenu<T extends object>(
  props: DropdownMenuProps<T>,
  ref: ForwardedRef<HTMLUListElement>,
) {
  const {getMenuProps} = useDropdownContext();

  return (
    <PopoverContent>
      <FocusScope contain restoreFocus>
        <Menu {...getMenuProps<T>(props, ref)} />
      </FocusScope>
    </PopoverContent>
  );
}) as <T extends object>(props: DropdownMenuProps<T>) => ReactElement;

export default DropdownMenu;
