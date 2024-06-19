import { PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const CreateResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <div
        className="mt-12 px-12 py-36 bg-white/20 flex items-center justify-center rounded-xl shadow-md cursor-pointer hover:scale-105 duration-150 transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare className="w-7 h-7" />
      </div>
      <Dialog open={openDialog} onOpenChange={() => setOpenDialog(false)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-bold text-xl">
              Name of Resume
              <p className="font-light text-sm text-slate-600">
                Choose a name for your resume base on your skill
              </p>
            </DialogTitle>
            <DialogDescription>
              <Input
                type="text"
                placeholder="Ex. Fullstack Developer"
                className="mt-2"
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex justify-end gap-2 mt-4">
              <Button
                className="bg-red-500"
                type="button"
                onClick={() => setOpenDialog(false)}
              >
                Cancel
              </Button>
              <Button>Create</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default CreateResume;
