'use client' //might limit the changing of choose event but we'll see
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import React from 'react';


export default function ShowsDropdown() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Select Show"]));  
    const selectedValue = React.useMemo(
      () => Array.from(selectedKeys).join(", ").replaceAll("_", " "), [selectedKeys]
    );

    const [selectedEvent, setSelectedEvent] = React.useState(new Set(["Select Event"]));
    const eventOptions = {
      'Jujutsu Kaisen': ['Hollow Purple', 'Malevolent Kitchen', 'Infinite Void'],
      'Attack on Titan': ['Armin\'s Titan Spawn', 'Rumbling'],
      'One Punch Man': ['To be implemented', 'There will be more'],
      'Your Name': ['Meteor'],
      'Mob Psyco 100': ['Big Broccoli']
    };
    
    return (
      <div className="flex flex-col justify-center items-center">
      <Dropdown>
        <DropdownTrigger>
          <Button 
            variant="bordered" 
            className="px-8 py-4 bg-[#444472] bg-opacity-80 text-[#f1f1f1] rounded-xl font-semibold"
          >
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu 
          aria-label="Drop down to select from list of shows"
          variant="flat"
          disallowEmptySelection
          selectionMode="single" //might be complicated to do multiple for choose event updating
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          className="bg-[#444472] rounded-xl"
          >
          <DropdownItem key="Jujutsu Kaisen" className="">Jujutsu Kaisen</DropdownItem>
          <DropdownItem key="Attack on Titan">Attack on Titan</DropdownItem>
          <DropdownItem key="One Punch Man">One Punch Man</DropdownItem>
          <DropdownItem key="Your Name">Your Name</DropdownItem>
          <DropdownItem key="Mob Psyco 100">Mob Psyco 100</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <div className='py-1'></div>

      <Dropdown>
        <DropdownTrigger>
          <Button 
            variant="bordered" 
            className="px-8 py-4 bg-[#444472] bg-opacity-80 text-[#f1f1f1] rounded-xl font-semibold"
          >
            {selectedEvent}
          </Button>
        </DropdownTrigger>
        <DropdownMenu 
          aria-label="Drop down to select from list of shows"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedEvent}
          onSelectionChange={setSelectedEvent}
          className="bg-[#444472] rounded-xl"
          >
          <DropdownItem key="Placeholder" className="">Placeholder</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    );
  }