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
  NameInput,
  EmailInput,
  PasswordInput,
  DateInput,
  NumberInput,
} from "../../src/components/Inputs/Inputs";

// -----------------------------
// Type definitions
// -----------------------------
interface InputItem {
  id: string;
  name: string;
  component: React.ReactNode;
  importPath: string;
}

interface InputCategory {
  title: string;
  description: string;
  inputs: InputItem[];
}

// -----------------------------
// Installation guide
// -----------------------------
const InstallationGuide: React.FC = () => (
  <Paper sx={{ p: 3, bgcolor: "background.paper", boxShadow: 2, mb: 4 }}>
    <Typography variant="h5" gutterBottom>
      📦 Using This Design Component Library
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      To use these input components in any React project, install the design library from npm:
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
      Then import and use any input component by name. Click on any field below to see its import
      statement:
    </Typography>
  </Paper>
);

// -----------------------------
// Code Block Component
// -----------------------------
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

// -----------------------------
// Input Category Component
// -----------------------------
interface InputCategoryComponentProps {
  category: InputCategory;
  selectedInputId: string | null;
  onInputClick: (inputId: string) => void;
}

const InputCategoryComponent: React.FC<InputCategoryComponentProps> = ({
  category,
  selectedInputId,
  onInputClick,
}) => (
  <Card sx={{ width: "100%", boxShadow: 3, mb: 3 }}>
    <CardHeader title={category.title} />
    <Divider />
    <CardContent>
      <Typography variant="body2" sx={{ mb: 3 }}>
        {category.description}
      </Typography>

      {/* Input grid */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {category.inputs.map((input) => (
          <Grid key={input.id} sx={{xs: 12, sm: 6, md: 4}}>
            <Box
              onClick={() => onInputClick(input.id)}
              sx={{
                cursor: "pointer",
                p: 2,
                borderRadius: 2,
                border: selectedInputId === input.id ? "2px solid" : "1px solid",
                borderColor: selectedInputId === input.id ? "primary.main" : "divider",
                bgcolor: selectedInputId === input.id ? "action.selected" : "background.paper",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "action.hover",
                },
              }}
            >
              {input.component}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Import code display */}
      {selectedInputId && (
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            Import Code:
          </Typography>
          <CodeBlock
            code={`import { ${category.inputs.find((i) => i.id === selectedInputId)?.name} } from "design-bundle";\n\n<${category.inputs.find((i) => i.id === selectedInputId)?.name} />`}
            onCopy={() => {
              const importStatement = `import { ${
                category.inputs.find((i) => i.id === selectedInputId)?.name
              } } from "design-bundle";`;
              navigator.clipboard.writeText(importStatement);
              alert("Copied to clipboard!");
            }}
          />
        </Box>
      )}
    </CardContent>
  </Card>
);

// -----------------------------
// Main Component
// -----------------------------
const InputDemo: React.FC = () => {
  const [selectedInputIds, setSelectedInputIds] = useState<Record<string, string | null>>({});

  // Define categories
  const categories: InputCategory[] = [
    {
      title: "Form Inputs",
      description: "Basic text, email, password, date, and number inputs used across forms.",
      inputs: [
        {
          id: "name-input",
          name: "NameInput",
          component: <NameInput />,
          importPath: "import { NameInput }",
        },
        {
          id: "email-input",
          name: "EmailInput",
          component: <EmailInput />,
          importPath: "import { EmailInput }",
        },
        {
          id: "password-input",
          name: "PasswordInput",
          component: <PasswordInput />,
          importPath: "import { PasswordInput }",
        },
        {
          id: "date-input",
          name: "DateInput",
          component: <DateInput />,
          importPath: "import { DateInput }",
        },
        {
          id: "number-input",
          name: "NumberInput",
          component: <NumberInput />,
          importPath: "import { NumberInput }",
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

      {/* Render all input categories */}
      {categories.map((category) => (
        <InputCategoryComponent
          key={category.title}
          category={category}
          selectedInputId={selectedInputIds[category.title] || null}
          onInputClick={(inputId) => {
            setSelectedInputIds((prev) => ({
              ...prev,
              [category.title]: prev[category.title] === inputId ? null : inputId,
            }));
          }}
        />
      ))}
    </Box>
  );
};

export default InputDemo;
