import {Listbox, ListboxItem} from "@heroui/react";

export const ListboxWrapper = ({children}) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export default function App() {
  return (
    <ListboxWrapper>
      <Listbox
        aria-label="Example with disabled actions"
        disabledKeys={["edit", "delete"]}
        onAction={(key) => alert(key)}
      >
        <ListboxItem key="new">New file</ListboxItem>
        <ListboxItem key="copy">Copy link</ListboxItem>
        <ListboxItem key="edit">Edit file</ListboxItem>
        <ListboxItem key="delete" className="text-danger" color="danger">
          Delete file
        </ListboxItem>
      </Listbox>
    </ListboxWrapper>
  );
}
