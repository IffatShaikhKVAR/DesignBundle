// src/pages/ModalDemo.tsx
import React, { useState } from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import { Modal } from "../../../src/components";
import {AlertModal } from "../../../src/components";
import {FullScreenModal } from "../../../src/components";
import {StyledTabModal} from "../../../src/components";
import { Button, Box, Typography } from "@mui/material";

// Demo Wrapper to open modals interactively
const DemoWrapper = ({ children, renderModal }: { children: string; renderModal: (open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ textAlign: "center" }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        {children}
      </Button>
      {renderModal(open, setOpen)}
    </Box>
  );
};

// ========================================
// Modal Categories
// ========================================

const modalCategories: DemoCategory[] = [
  {
    title: "Alert & Confirmation Modals",
    description: "Basic feedback and confirmation dialogs.",
    items: [
      {
        id: "alert-modal",
        name: "AlertModal",
        component: (
          <DemoWrapper
            children="Show Alert"
            renderModal={(open, setOpen) => (
              <AlertModal
                open={open}
                title="Information"
                message="Your changes have been saved successfully!"
                type="success"
                onClose={() => setOpen(false)}
              />
            )}
          />
        ),
        description: "Displays an alert message for success, warning, info, or error.",
      },
      {
        id: "confirmation-modal",
        name: "ConfirmationModal",
        component: (
          <DemoWrapper
            children="Show Confirmation"
            renderModal={(open, setOpen) => (
              <Modal.ConfirmationModal
                open={open}
                title="Confirm Action"
                message="Do you want to proceed with this operation?"
                onClose={() => setOpen(false)}
                onConfirm={() => {
                  alert("Action confirmed!");
                  setOpen(false);
                }}
              />
            )}
          />
        ),
        description: "Used for user confirmation before an important action.",
      },
    ],
  },
  {
    title: "Form & Edit Modals",
    description: "Used for input, data editing, and form submission.",
    items: [
      {
        id: "form-modal",
        name: "FormModal",
        component: (
          <DemoWrapper
            children="Show Form Modal"
            renderModal={(open, setOpen) => (
              <Modal.FormModal
                open={open}
                title="Submit Form"
                onClose={() => setOpen(false)}
                onSubmit={async () => {
                  await new Promise((res) => setTimeout(res, 1000));
                  alert("Form Submitted!");
                  setOpen(false);
                }}
              >
                <Typography>Example form content goes here...</Typography>
              </Modal.FormModal>
            )}
          />
        ),
        description: "Displays a modal with a form and submission logic.",
      },
      {
        id: "edit-modal",
        name: "EditModal",
        component: (
          <DemoWrapper
            children="Show Edit Modal"
            renderModal={(open, setOpen) => (
              <Modal.EditModal
                open={open}
                onClose={() => setOpen(false)}
                onSubmit={() => {
                  alert("Changes saved!");
                  setOpen(false);
                }}
              >
                <Typography>Editing form fields...</Typography>
              </Modal.EditModal>
            )}
          />
        ),
        description: "For editing existing records with form fields.",
      },
    ],
  },
  {
    title: "Delete & Scrollable Modals",
    description: "For destructive or content-heavy operations.",
    items: [
      {
        id: "delete-modal",
        name: "DeleteModal",
        component: (
          <DemoWrapper
            children="Show Delete Modal"
            renderModal={(open, setOpen) => (
              <Modal.DeleteModal
                open={open}
                onClose={() => setOpen(false)}
                onConfirm={() => {
                  alert("Item deleted!");
                  setOpen(false);
                }}
              />
            )}
          />
        ),
        description: "Asks for delete confirmation with danger style.",
      },
     {
  id: "scrollable-modal",
  name: "ScrollableModal",
  component: (
    <DemoWrapper
      children="Show Scrollable Modal"
      renderModal={(open, setOpen) => (
        <Modal.ScrollableModal
          open={open}
          title="Scrollable Content"
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        >
          {/* ✅ Remove overflowY: 'auto' here */}
          <Box sx={{ height: 600 }}>
            {Array.from({ length: 30 }).map((_, i) => (
              <Typography key={i} sx={{ py: 1 }}>
                Item {i + 1}: Lorem ipsum dolor sit amet...
              </Typography>
            ))}
          </Box>
        </Modal.ScrollableModal>
      )}
    />
  ),
  description: "Useful for displaying long lists or detailed content.",
},

    ],
  },
  {
    title: "Tabbed & Full-Screen Modals",
    description: "Complex modals for large or sectioned content.",
    items: [
      {
        id: "tabs-modal",
        name: "TabsModal",
        component: (
          <DemoWrapper
            children="Show Tabs Modal"
            renderModal={(open, setOpen) => (
              <StyledTabModal.StyledTabsModal
                open={open}
                title="Tabbed Modal"
                onClose={() => setOpen(false)}
                onConfirm={() => alert("Confirmed!")}
                tabs={[
                  { label: "Info", content: <Typography>Tab 1 Content</Typography> },
                  { label: "Settings", content: <Typography>Tab 2 Content</Typography> },
                  { label: "Details", content: <Typography>Tab 3 Content</Typography> },
                ]}
              />
            )}
          />
        ),
        description: "Organizes modal content into multiple tabs.",
      },
      {
        id: "fullscreen-modal",
        name: "FullScreenModal",
        component: (
          <DemoWrapper
            children="Show Fullscreen Modal"
            renderModal={(open, setOpen) => (
              <FullScreenModal
                open={open}
                title="Full-Screen Modal"
                onClose={() => setOpen(false)}
                onSave={() => {
                  alert("Saved!");
                  setOpen(false);
                }}
              >
                <Typography variant="body1" sx={{ mb: 2 }}>
                  This is a full-screen modal, ideal for forms or dashboards.
                </Typography>
                <Typography variant="body2">
                  You can scroll, include large forms, or complex UI layouts inside this modal.
                </Typography>
              </FullScreenModal>
            )}
          />
        ),
        description: "Expands to full screen for large content or form workflows.",
      },
    ],
  },
];

// ========================================
// Modal Demo Component
// ========================================

const ModalDemo: React.FC = () => {
  return <ComponentDemo categories={modalCategories} packageName="design-bundle@latest" />;
};

export default ModalDemo;
