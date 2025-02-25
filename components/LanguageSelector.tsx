"use client"
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowBigDown } from 'lucide-react';

const LanguageSelector = ({language,onSelect}:{language:string,onSelect:(language:string)=>void}) => {
  return (
    <div className=' py-1.5 text-xs px-2  bg-gray-200 text-gray-500 mt-3  rounded-md w-fit '>

     <DropdownMenu>
  <DropdownMenuTrigger className='flex items-center gap-x-0.5'>{language}<ArrowBigDown size={20}/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Languages</DropdownMenuLabel>
    <DropdownMenuSeparator />
    
    <DropdownMenuItem onClick={() => onSelect("javascript")}>typescript</DropdownMenuItem>
    <DropdownMenuItem onClick={() => onSelect("javascript")}>javascript</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  );
}

export default LanguageSelector;
