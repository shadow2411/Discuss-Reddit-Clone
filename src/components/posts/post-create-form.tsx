"use client";
import { useFormState } from "react-dom";
import {
  Button,
  Input,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import FormButton from "../comman/form-button";
import * as actions from "@/actions";
interface PostCreateFormProps {
    slug: string
}
export default function PostCreateForm({slug}: PostCreateFormProps) {
  const [fromState, action] = useFormState(actions.createPost.bind(null,slug), {
    errors: {},
  });

    return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form
          action={action}
          className="flex flex-col gap-4 p-4 w-80"
        >
          <h3 className="text-lg">Create A Post</h3>
          <Input
            name="title"
            label="Title"
            labelPlacement="outside"
            placeholder="Title"
            isInvalid={!!fromState.errors.title}
            errorMessage={fromState.errors.title?.join(", ")}
          />
          <Textarea
            name="content"
            label="Content"
            labelPlacement="outside"
            placeholder="Content"
            isInvalid={!!fromState.errors.content}
            errorMessage={fromState.errors.content?.join(", ")}
          />
          {
            fromState.errors._form && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-red-500">
                {fromState.errors._form.join(", ")}
              </div>
            )
          }
          <FormButton>Create Post</FormButton>
        </form>
      </PopoverContent>
    </Popover>
  );
}
