// components/FileInputs.tsx
import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Typography,
  LinearProgress,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// ============================================
// 1. FILE UPLOAD INPUT
// ============================================
export interface FileUploadInputProps {
  label?: string;
  accept?: string;
  maxSize?: number; // in MB
  onFileSelect?: (file: File) => void;
}

export const FileUploadInput: React.FC<FileUploadInputProps> = ({
  label = "Upload File",
  accept = ".pdf,.doc,.docx,.txt,.jpg,.png",
  maxSize = 10,
  onFileSelect,
}) => {
  const [fileName, setFileName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > maxSize) {
        setError(`File size exceeds ${maxSize}MB limit`);
        setFileName("");
        return;
      }
      setError("");
      setFileName(file.name);
      onFileSelect?.(file);
    }
  };

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        {label}
      </Typography>
      <Box
        onClick={() => fileInputRef.current?.click()}
        sx={{
          p: 2,
          border: "2px dashed #2575fc",
          borderRadius: 2,
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.3s",
          backgroundColor: "#f9f9ff",
          "&:hover": {
            backgroundColor: "#f0f0ff",
            borderColor: "#6a11cb",
          },
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 40, color: "#2575fc", mb: 1 }} />
        <Typography variant="body2" sx={{ mb: 1 }}>
          {fileName ? `✓ ${fileName}` : "Click to upload or drag and drop"}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {accept}
        </Typography>
      </Box>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {error && (
        <Typography variant="caption" color="error" sx={{ mt: 1, display: "block" }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

// ============================================
// 2. MULTIPLE FILES UPLOAD
// ============================================
export interface MultiFileUploadProps {
  label?: string;
  accept?: string;
  maxFiles?: number;
  onFilesSelect?: (files: File[]) => void;
}

export const MultiFileUploadInput: React.FC<MultiFileUploadProps> = ({
  label = "Upload Multiple Files",
  accept = ".pdf,.doc,.docx,.txt",
  maxFiles = 5,
  onFilesSelect,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    
    if (files.length + selectedFiles.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    setError("");
    const newFiles = [...files, ...selectedFiles];
    setFiles(newFiles);
    onFilesSelect?.(newFiles);
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onFilesSelect?.(newFiles);
  };

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        {label}
      </Typography>
      <Box
        onClick={() => fileInputRef.current?.click()}
        sx={{
          p: 2,
          border: "2px dashed #2575fc",
          borderRadius: 2,
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.3s",
          backgroundColor: "#f9f9ff",
          "&:hover": { backgroundColor: "#f0f0ff" },
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 40, color: "#2575fc", mb: 1 }} />
        <Typography variant="body2">
          Click to upload or drag and drop
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Max {maxFiles} files
        </Typography>
      </Box>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {files.length > 0 && (
        <List sx={{ mt: 2 }}>
          {files.map((file, index) => (
            <ListItem
              key={index}
              sx={{
                backgroundColor: "#f5f5f5",
                mb: 1,
                borderRadius: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <InsertDriveFileIcon sx={{ color: "#2575fc" }} />
                <ListItemText
                  primary={file.name}
                  secondary={`${(file.size / 1024).toFixed(2)} KB`}
                />
              </Box>
              <IconButton
                size="small"
                onClick={() => handleRemoveFile(index)}
                sx={{ color: "error.main" }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}

      {error && (
        <Typography variant="caption" color="error" sx={{ mt: 1, display: "block" }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

// ============================================
// 3. FILE DOWNLOAD INPUT
// ============================================
export interface FileDownloadInputProps {
  label?: string;
  fileName?: string;
  fileUrl?: string;
  onDownload?: () => void;
}

export const FileDownloadInput: React.FC<FileDownloadInputProps> = ({
  label = "Download File",
  fileName = "document.pdf",
  fileUrl = "#",
  onDownload,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      onDownload?.();
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        {label}
      </Typography>
      <Button
        variant="contained"
        startIcon={<FileDownloadIcon />}
        onClick={handleDownload}
        disabled={isDownloading}
        fullWidth
        sx={{ p: 1.5 }}
      >
        {isDownloading ? "Downloading..." : `Download ${fileName}`}
      </Button>
    </Box>
  );
};

// ============================================
// 4. FILE UPLOAD WITH PROGRESS
// ============================================
export interface FileUploadWithProgressProps {
  label?: string;
  onFileSelect?: (file: File) => void;
  onUploadProgress?: (progress: number) => void;
}

export const FileUploadWithProgressInput: React.FC<FileUploadWithProgressProps> = ({
  label = "Upload File with Progress",
  onFileSelect,
  onUploadProgress,
}) => {
  const [fileName, setFileName] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setIsUploading(true);
      onFileSelect?.(file);

      // Simulate upload progress
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 30;
        if (currentProgress > 100) currentProgress = 100;
        setProgress(currentProgress);
        onUploadProgress?.(currentProgress);

        if (currentProgress === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setProgress(0);
          }, 1000);
        }
      }, 500);
    }
  };

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        {label}
      </Typography>
      <Box
        onClick={() => !isUploading && fileInputRef.current?.click()}
        sx={{
          p: 2,
          border: "2px dashed #2575fc",
          borderRadius: 2,
          textAlign: "center",
          cursor: isUploading ? "default" : "pointer",
          backgroundColor: "#f9f9ff",
          opacity: isUploading ? 0.7 : 1,
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 40, color: "#2575fc", mb: 1 }} />
        <Typography variant="body2">
          {fileName ? `Uploading: ${fileName}` : "Click to upload"}
        </Typography>
      </Box>

      {isUploading && (
        <Box sx={{ mt: 2 }}>
          <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
          <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
            {Math.round(progress)}% uploaded
          </Typography>
        </Box>
      )}

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        disabled={isUploading}
      />
    </Box>
  );
};

// ============================================
// 5. DOCUMENT PICKER (Open PC Documents)
// ============================================
export interface DocumentPickerProps {
  label?: string;
  accept?: string;
  onDocumentSelect?: (file: File) => void;
}

export const DocumentPicker: React.FC<DocumentPickerProps> = ({
  label = "Select Document",
  accept = ".pdf,.doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx",
  onDocumentSelect,
}) => {
  const [selectedDoc, setSelectedDoc] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDocumentSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedDoc(file.name);
      onDocumentSelect?.(file);
    }
  };

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        {label}
      </Typography>
      <Button
        variant="outlined"
        onClick={() => fileInputRef.current?.click()}
        startIcon={<InsertDriveFileIcon />}
        fullWidth
        sx={{
          p: 1.5,
          justifyContent: "flex-start",
          color: selectedDoc ? "success.main" : "primary.main",
        }}
      >
        {selectedDoc ? (
          <>
            <CheckCircleIcon sx={{ mr: 1 }} />
            {selectedDoc}
          </>
        ) : (
          "Choose File"
        )}
      </Button>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleDocumentSelect}
        style={{ display: "none" }}
      />
    </Box>
  );
};

// ============================================
// 6. DRAG AND DROP FILE UPLOAD
// ============================================
export interface DragDropUploadProps {
  label?: string;
  onFileDrop?: (files: File[]) => void;
}

export const DragDropUpload: React.FC<DragDropUploadProps> = ({
  label = "Drag and Drop Files Here",
  onFileDrop,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
    onFileDrop?.(droppedFiles);
  };

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        {label}
      </Typography>
      <Box
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        sx={{
          p: 3,
          border: `3px dashed ${isDragging ? "#6a11cb" : "#2575fc"}`,
          borderRadius: 2,
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.3s",
          backgroundColor: isDragging ? "#f0f0ff" : "#f9f9ff",
          transform: isDragging ? "scale(1.02)" : "scale(1)",
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 50, color: isDragging ? "#6a11cb" : "#2575fc", mb: 1 }} />
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {isDragging ? "Drop files here" : "Drag files here or click to select"}
        </Typography>
      </Box>

      {files.length > 0 && (
        <Box sx={{ mt: 2 }}>
          {files.map((file, index) => (
            <Box
              key={index}
              sx={{
                p: 1,
                backgroundColor: "#f5f5f5",
                borderRadius: 1,
                mb: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <InsertDriveFileIcon sx={{ color: "#2575fc" }} />
              <Typography variant="body2">{file.name}</Typography>
            </Box>
          ))}
        </Box>
      )}

      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={(e) => {
          const selectedFiles = Array.from(e.target.files || []);
          setFiles(selectedFiles);
          onFileDrop?.(selectedFiles);
        }}
        style={{ display: "none" }}
      />
    </Box>
  );
};

export const fileInput = {
  FileUploadInput,
  MultiFileUploadInput,
  FileDownloadInput,
  FileUploadWithProgressInput,
  DocumentPicker,
  DragDropUpload,
};