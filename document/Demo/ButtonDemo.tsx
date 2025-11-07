import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Box,
  Paper,
  Button,
  Grid,
} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";

import {
  BlueLoginButton,
  PurpleLoginButton,
  OutlineLoginButton,
  PrimarySubmitButton,
  SuccessSubmitButton,
  WarningSubmitButton,
  OutlineSubmitButton,
  PinkRegisterButton,
  OutlineRegisterButton,
  GradientRegisterButton,
  CreateButton,
  EditButton,
  ExportExcelButton,
  DeleteButton,
  DownloadButton,
  EditIconButton,
  DeleteIconButton
} from "../../src/components";

// Type definitions
interface ButtonItem {
  id: string;
  name: string;
  component: React.ReactNode;
  importPath: string;
}

interface ButtonCategory {
  title: string;
  description: string;
  buttons: ButtonItem[];
}

// Installation guide component
const InstallationGuide: React.FC = () => (
  <Paper sx={{ p: 3, bgcolor: "background.paper", boxShadow: 2, mb: 4 }}>
    <Typography variant="h5" gutterBottom>
      📦 Using This Design Component Library
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      To use these buttons in any React project, install the design library from npm:
    </Typography>

    <Box
      component="pre"
      sx={{
        bgcolor: "#0d1117",
        color: "#c9d1d9",
        p: 2,
        borderRadius: 2,
        fontSize: 14,
        overflowX: "auto",
        mb: 2,
      }}
    >
      npm install design-bundle
    </Box>

    <Typography variant="body1" sx={{ mb: 2 }}>
      Then import and use any component by name. Click on any button below to see its import statement:
    </Typography>
  </Paper>
);

// Code block component
interface CodeBlockProps {
  code: string;
  onCopy?: () => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, onCopy }) => (
  <Box sx={{ position: "relative" }}>
    <Box
      component="pre"
      sx={{
        bgcolor: "#0d1117",
        color: "#c9d1d9",
        p: 2,
        borderRadius: 2,
        fontSize: 14,
        overflowX: "auto",
        pr: 5,
      }}
    >
      {code}
    </Box>
    {onCopy && (
      <Button
        size="small"
        startIcon={<FileCopyIcon />}
        onClick={onCopy}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          bgcolor: "rgba(255, 255, 255, 0.1)",
          color: "#c9d1d9",
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
        }}
      >
        Copy
      </Button>
    )}
  </Box>
);

// Button category component
interface ButtonCategoryComponentProps {
  category: ButtonCategory;
  selectedButtonId: string | null;
  onButtonClick: (buttonId: string) => void;
}

const ButtonCategoryComponent: React.FC<ButtonCategoryComponentProps> = ({
  category,
  selectedButtonId,
  onButtonClick,
}) => (
  <Card sx={{ width: "100%", boxShadow: 3, mb: 3 }}>
    <CardHeader title={category.title} />
    <Divider />
    <CardContent>
      <Typography variant="body2" sx={{ mb: 3 }}>
        {category.description}
      </Typography>

      {/* Button grid */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {category.buttons.map((btn) => (
          <Grid key={btn.id}>
            <Box
              onClick={() => onButtonClick(btn.id)}
              sx={{
                cursor: "pointer",
                p: 2,
                borderRadius: 2,
                border: selectedButtonId === btn.id ? "2px solid" : "1px solid",
                borderColor: selectedButtonId === btn.id ? "primary.main" : "divider",
                bgcolor: selectedButtonId === btn.id ? "action.selected" : "background.paper",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "action.hover",
                },
              }}
            >
              {btn.component}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Import code display */}
      {selectedButtonId && (
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            Import Code:
          </Typography>
          <CodeBlock
            code={`import { ${category.buttons.find((b) => b.id === selectedButtonId)?.name} } from "design-bundle";\n\n<${category.buttons.find((b) => b.id === selectedButtonId)?.name} />`}
            onCopy={() => {
              const importStatement = `import { ${category.buttons.find((b) => b.id === selectedButtonId)?.name} } from "design-bundle";`;
              navigator.clipboard.writeText(importStatement);
              alert("Copied to clipboard!");
            }}
          />
        </Box>
      )}
    </CardContent>
  </Card>
);

// Main component
const ButtonDemo: React.FC = () => {
  const [selectedButtonIds, setSelectedButtonIds] = useState<Record<string, string | null>>({});

  // Define button categories
  const categories: ButtonCategory[] = [
    {
      title: "Login Buttons",
      description: "Used for user authentication or login-related actions.",
      buttons: [
        {
          id: "blue-login",
          name: "BlueLoginButton",
          component: <BlueLoginButton />,
          importPath: "import { BlueLoginButton }",
        },
        {
          id: "purple-login",
          name: "PurpleLoginButton",
          component: <PurpleLoginButton />,
          importPath: "import { PurpleLoginButton }",
        },
        {
          id: "outline-login",
          name: "OutlineLoginButton",
          component: <OutlineLoginButton />,
          importPath: "import { OutlineLoginButton }",
        },
      ],
    },
    {
      title: "Submit Buttons",
      description: "Used to submit forms or send data to the backend.",
      buttons: [
        {
          id: "primary-submit",
          name: "PrimarySubmitButton",
          component: <PrimarySubmitButton />,
          importPath: "import { PrimarySubmitButton }",
        },
        {
          id: "success-submit",
          name: "SuccessSubmitButton",
          component: <SuccessSubmitButton />,
          importPath: "import { SuccessSubmitButton }",
        },
        {
          id: "warning-submit",
          name: "WarningSubmitButton",
          component: <WarningSubmitButton />,
          importPath: "import { WarningSubmitButton }",
        },
        {
          id: "outline-submit",
          name: "OutlineSubmitButton",
          component: <OutlineSubmitButton />,
          importPath: "import { OutlineSubmitButton }",
        },
      ],
    },
    {
      title: "Register Buttons",
      description: "Used for user registration or sign-up flows.",
      buttons: [
        {
          id: "pink-register",
          name: "PinkRegisterButton",
          component: <PinkRegisterButton />,
          importPath: "import { PinkRegisterButton }",
        },
        {
          id: "outline-register",
          name: "OutlineRegisterButton",
          component: <OutlineRegisterButton />,
          importPath: "import { OutlineRegisterButton }",
        },
        {
          id: "gradient-register",
          name: "GradientRegisterButton",
          component: <GradientRegisterButton />,
          importPath: "import { GradientRegisterButton }",
        },
      ],
    },
    {
      title: "Icon Buttons",
      description: "Used for common dashboard actions like create, export, download, etc.",
      buttons: [
        {
          id: "create",
          name: "CreateButton",
          component: <CreateButton />,
          importPath: "import { CreateButton }",
        },
        {
          id: "export-excel",
          name: "ExportExcelButton",
          component: <ExportExcelButton />,
          importPath: "import { ExportExcelButton }",
        },
        {
          id: "download",
          name: "DownloadButton",
          component: <DownloadButton />,
          importPath: "import { DownloadButton }",
        },
        {
          id: "edit",
          name: "EditButton",
          component: <EditButton />,
          importPath: "import { EditButton }",
        },
        {
          id: "delete",
          name: "DeleteButton",
          component: <DeleteButton />,
          importPath: "import { DeleteButton }",
        },
        {
          id: "IconEdit",
          name: "EditIconButton",
          component: <EditIconButton />,
          importPath: "import { EditIconButton }",
        },
        {
          id: "IconDelete",
          name: "DeleteIconButton",
          component: <DeleteIconButton />,
          importPath: "import { DeleteIconButton }",
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <InstallationGuide />

      {/* Render all button categories */}
      {categories.map((category) => (
        <ButtonCategoryComponent
          key={category.title}
          category={category}
          selectedButtonId={selectedButtonIds[category.title] || null}
          onButtonClick={(buttonId) => {
            setSelectedButtonIds((prev) => ({
              ...prev,
              [category.title]: prev[category.title] === buttonId ? null : buttonId,
            }));
          }}
        />
      ))}
    </Box>
  );
};

export default ButtonDemo;