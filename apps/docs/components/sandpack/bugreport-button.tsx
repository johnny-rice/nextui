import React from "react";
import {usePathname} from "next/navigation";
import {Tooltip, Button} from "@heroui/react";
import {capitalize} from "@heroui/shared-utils";

import {BugIcon} from "@/components/icons";
import {ISSUE_REPORT_URL} from "@/libs/github/constants";

export const BugReportButton = () => {
  const pathname = usePathname();

  const componentTitle = capitalize(pathname?.split("/")?.at(-1) ?? "");

  const handlePress = () => {
    window.open(`${ISSUE_REPORT_URL}${componentTitle}`, "_blank");
  };

  return (
    <Tooltip
      className="text-xs px-2"
      closeDelay={0}
      content="Report a bug"
      placement="top"
      radius="md"
    >
      <Button isIconOnly size="sm" title="Report a bug" variant="light" onPress={handlePress}>
        <BugIcon className="text-white dark:text-zinc-500" height={16} width={16} />
      </Button>
    </Tooltip>
  );
};
