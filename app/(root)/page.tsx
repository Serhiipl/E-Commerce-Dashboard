"use client";

import { Modal } from "@/components/Modal";
// import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <div className="p-5">
      {/* <UserButton afterSignOutUrl="/" /> */}
      <Modal title="test" description="ha ha ha " isOpen onClose={() => {}}>
        {" "}
        Children
      </Modal>
    </div>
  );
}
