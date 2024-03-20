'use client' //might limit the changing of choose event but we'll see

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import React from 'react';


export default function ShowsDropdown() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Select Show"]));
  
    const selectedValue = React.useMemo(
      () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
      [selectedKeys]
    );
  
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button 
            variant="bordered" 
            className="py-3 bg-2 rounded-md text-white text-4xl font-semibold font-sans 
            after:-z-20 after:absolute after:h-1 after:w-2 after:bg-rose-800 after:translate-y-full 
            after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700
            after:duration-700 
            transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] 
            hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
          >
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu 
          aria-label="Drop down to select from list of shows"
          variant="bordered"
          disallowEmptySelection
          selectionMode="single" //might be complicated to do multiple for choose event updating
          selectedKeys={selectedKeys}
        >
          <DropdownItem key="JJK">Jujitsu Kaisen</DropdownItem>
          <DropdownItem key="AOT">Attack on Titan</DropdownItem>
          <DropdownItem key="OPM">One Punch Man</DropdownItem>
          <DropdownItem key="YNM">Your Name</DropdownItem>
          <DropdownItem key="MPSY">Mob Psyco 100</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }



// export default function ShowsDropdown() {
//   const items = [
//     {
//       key: "JJK",
//       label: "Jujitsu Kaisen",
//     },
//     {
//       key: "AOT",
//       label: "Attack on Titan",
//     },
//     {
//       key: "OPM",
//       label: "One Punch Man",
//     },
//     {
//       key: "YNM",
//       label: "Your Name",
//     },
//     {
//       key: "MPSY",
//       label: "Mob Psyco 100",
//     }
//   ];

//   return (
//     <Dropdown>
//       <DropdownTrigger>
//         <Button 
//           variant="bordered" 
//         >
//           Select Show
//         </Button>
//       </DropdownTrigger>
//       <DropdownMenu aria-label="Dynamic Actions" items={items}>
//         {items.map(item => (
//           <DropdownItem
//             key={item.key}
//             color={"default"}
//             className={""}
//           >
//             {item.label}
//           </DropdownItem>
//         ))}
//       </DropdownMenu>
//     </Dropdown>
//   );
// }