"use client";
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar1Icon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";

const todos = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    checked: true,
  },
  { text: "Consectetur adipiscing elit. Nulla convallis.", checked: true },
  { text: "Sed do eiusmod tempor incididunt ut labore.", checked: true },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation.",
    checked: false,
  },
  { text: "Duis aute irure dolor in reprehenderit.", checked: false },
  { text: "Excepteur sint occaecat cupidatat non proident.", checked: false },
  { text: "Sunt in culpa qui officia deserunt mollit anim.", checked: true },
  {
    text: "Velit esse cillum dolore eu fugiat nulla pariatur.",
    checked: false,
  },
  {
    text: "Culpa qui officia deserunt mollit anim id est laborum.",
    checked: false,
  },
  { text: "Praesent commodo cursus magna, vel scelerisque.", checked: false },
  { text: "Etiam porta sem malesuada magna mollis euismod.", checked: true },
  { text: "Donec sed odio dui. Nulla vitae elit libero.", checked: true },
  { text: "Cras mattis consectetur purus sit amet fermentum.", checked: true },
  { text: "Aenean lacinia bibendum nulla sed consectetur.", checked: false },
];
function TodoList() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="mb-6 font-medium text-lg">ToDo List</h1>
      {/* CALENDAR */}
      <Popover open={open} onOpenChange={setOpen} className="">
        <PopoverTrigger asChild className="">
          <Button className={"w-full"}>
            <Calendar1Icon />
            {date ? format(date, "PPP") : "Pick a Date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={"p-0 w-auto "}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date)=>{
              setDate(date);
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="h-[400px] max-h-[400px] rounded-md border overflow-y-auto mt-4 p-4">
        <div className="flex flex-col gap-y-4">
          {todos.map((todo, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={`item-${index}`} checked={todo.checked} />
                <label
                  htmlFor={`item-${index}`}
                  className="text-sm text-muted-foreground"
                >
                  {todo.text}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default TodoList;
