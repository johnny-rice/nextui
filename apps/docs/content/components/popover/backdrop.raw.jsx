import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@heroui/react";

export default function App() {
  const backdrops = ["opaque", "blur", "transparent"];

  const content = (
    <PopoverContent className="w-[240px]">
      {(titleProps) => (
        <div className="px-1 py-2 w-full">
          <p className="text-small font-bold text-foreground" {...titleProps}>
            Dimensions
          </p>
          <div className="mt-2 flex flex-col gap-2 w-full">
            <Input defaultValue="100%" label="Width" size="sm" variant="bordered" />
            <Input defaultValue="300px" label="Max. width" size="sm" variant="bordered" />
            <Input defaultValue="24px" label="Height" size="sm" variant="bordered" />
            <Input defaultValue="30px" label="Max. height" size="sm" variant="bordered" />
          </div>
        </div>
      )}
    </PopoverContent>
  );

  return (
    <div className="flex flex-wrap gap-4">
      {backdrops.map((backdrop) => (
        <Popover key={backdrop} showArrow backdrop={backdrop} offset={10} placement="bottom">
          <PopoverTrigger>
            <Button className="capitalize" color="warning" variant="flat">
              {backdrop}
            </Button>
          </PopoverTrigger>
          {content}
        </Popover>
      ))}
    </div>
  );
}
