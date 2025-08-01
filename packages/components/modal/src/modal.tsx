import type {ReactNode} from "react";
import type {UseModalProps} from "./use-modal";

import {AnimatePresence} from "framer-motion";
import {Overlay} from "@react-aria/overlays";
import {forwardRef} from "@heroui/system";

import {useModal} from "./use-modal";
import {ModalProvider} from "./modal-context";

export interface ModalProps extends UseModalProps {
  /**
   * The content of the modal. Usually the ModalContent
   */
  children: ReactNode;
}

const Modal = forwardRef<"div", ModalProps>((props, ref) => {
  const {children, ...otherProps} = props;
  const context = useModal({...otherProps, ref});

  const overlay = <Overlay portalContainer={context.portalContainer}>{children}</Overlay>;

  return (
    <ModalProvider value={context}>
      {context.disableAnimation && context.isOpen ? (
        overlay
      ) : (
        <AnimatePresence>{context.isOpen ? overlay : null}</AnimatePresence>
      )}
    </ModalProvider>
  );
});

Modal.displayName = "HeroUI.Modal";

export default Modal;
