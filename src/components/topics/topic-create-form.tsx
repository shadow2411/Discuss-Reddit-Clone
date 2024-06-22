"use client";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import FormButton from "../comman/form-button";
export default function TopicCreateForm() {
  const [fromState, action] = useFormState(actions.createTopic, {
    errors: {},
  });
  return (
    <>
      <Popover placement="bottom">
        <PopoverTrigger>
          <Button color="primary">Create a topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <h3 className="text-lg">Create A Topic</h3>
              <Input
                name="name"
                label="Name"
                labelPlacement="outside"
                placeholder="Name"
                isInvalid={!!fromState.errors.name}
                errorMessage={fromState.errors.name?.join(", ")}
              />
              <Textarea
                name="description"
                label="Description"
                labelPlacement="outside"
                placeholder="Description"
                isInvalid={!!fromState.errors.description}
                errorMessage={fromState.errors.description?.join(", ")}
              />
              {fromState.errors._form && (
                <div className="p-2 bg-red-200 rounded">{fromState.errors._form.join(", ")}</div>
              )}

            </div>
            <FormButton>
                Save
            </FormButton>
          </form>
        </PopoverContent>
      </Popover>
    </>
  );
}
