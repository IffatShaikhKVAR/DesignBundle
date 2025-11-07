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

// ========================================
// Type Definitions
// ========================================

export interface DemoItem {
  id: string;
  name: string;
  component: React.ReactNode;
  description?: string;
}

export interface DemoCategory {
  title: string;
  description: string;
  items: DemoItem[];
}

export interface ComponentDemoProps {
  categories: DemoCategory[];
  packageName?: string;
}

// ========================================
// Installation Guide Component
// ========================================

interface InstallationGuideProps {
  packageName?: string;
}

const InstallationGuide: React.FC<InstallationGuideProps> = ({
  packageName = "design-bundle",
}) => (
  <Paper sx={{ p: 3, bgcolor: "background.paper", boxShadow: 2, mb: 4 }}>
    <Typography variant="h5" gutterBottom>
      📦 Using This Design Component Library
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      To use these components in any React project, install the design library from npm:
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
      npm install {packageName}
    </Box>

    <Typography variant="body1" sx={{ mb: 2 }}>
      Then import and use any component by name. Click on any component below to see its import
      statement:
    </Typography>
  </Paper>
);

// ========================================
// Code Block Component
// ========================================

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

// ========================================
// Category Component
// ========================================

interface CategoryComponentProps {
  category: DemoCategory;
  selectedItemId: string | null;
  onItemClick: (itemId: string) => void;
  packageName?: string;
}

const CategoryComponent: React.FC<CategoryComponentProps> = ({
  category,
  selectedItemId,
  onItemClick,
  packageName = "design-bundle",
}) => {
  const selectedItem = category.items.find((item) => item.id === selectedItemId);

  return (
    <Card sx={{ width: "100%", boxShadow: 3, mb: 3 }}>
      <CardHeader title={category.title} />
      <Divider />
      <CardContent>
        <Typography variant="body2" sx={{ mb: 3 }}>
          {category.description}
        </Typography>

        {/* Items Grid */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {category.items.map((item) => (
            <Grid  key={item.id} sx={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
              <Box
                onClick={() => onItemClick(item.id)}
                sx={{
                  cursor: "pointer",
                  p: 2,
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "100px",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "action.hover",
                  },
                }}
              >
                {item.component}
                {/* {item.description && (
                  <Typography
                    variant="caption"
                    sx={{ mt: 1, textAlign: "center", display: "block" }}
                  >
                    {item.description}
                  </Typography>
                )} */}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Import Code Display */}
        {selectedItem && (
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
              Import Code:
            </Typography>
            <CodeBlock
              code={`import { ${selectedItem.name} } from "${packageName}";\n\n<${selectedItem.name} />`}
              onCopy={() => {
                const importStatement = `import { ${selectedItem.name} } from "${packageName}";`;
                navigator.clipboard.writeText(importStatement);
                alert("Copied to clipboard!");
              }}
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

// ========================================
// Main Reusable Demo Component
// ========================================

export const ComponentDemo: React.FC<ComponentDemoProps> = ({
  categories,
  packageName = "design-bundle",
}) => {
  const [selectedItemIds, setSelectedItemIds] = useState<
    Record<string, string | null>
  >({});

  const handleItemClick = (categoryTitle: string, itemId: string) => {
    setSelectedItemIds((prev) => ({
      ...prev,
      [categoryTitle]:
        prev[categoryTitle] === itemId ? null : itemId,
    }));
  };

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
      <InstallationGuide packageName={packageName} />

      {/* Render all categories */}
      {categories.map((category) => (
        <CategoryComponent
          key={category.title}
          category={category}
          selectedItemId={selectedItemIds[category.title] || null}
          onItemClick={(itemId) =>
            handleItemClick(category.title, itemId)
          }
          packageName={packageName}
        />
      ))}
    </Box>
  );
};

export default ComponentDemo;