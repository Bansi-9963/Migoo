import React, { useState } from 'react';
import Dialog from '../Component/Dialog';

const Form = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded"
        onClick={openDialog}
      >
        Open Dialog
      </button>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
};

export default Form;