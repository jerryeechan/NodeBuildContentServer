# Node Build Content Server

A simple Node.js server that serves static content files and provides an endpoint to trigger installation scripts.

## Description

This project consists of a dual-purpose server:

1. A static file server (port 8080) that serves content from a specified folder
2. A script execution server (port 3000) with an endpoint `/install_xbox` that triggers a bash script

## Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

## Usage

Start the server with:

```bash
npm start <content_folder_path> <install_bash_path>
```

Where:
- `<content_folder_path>`: Path to the folder containing static content files to be served
- `<install_bash_path>`: Path to the bash script to be executed when the installation endpoint is triggered

Example:
```bash
npm start ./public /path/to/install_script.sh
```

### Server Endpoints

1. Static Content Server:
   - URL: `http://localhost:8080`
   - Serves all files from the specified content folder

2. Script Execution Server:
   - URL: `http://localhost:3000/install_xbox`
   - Triggers the execution of the specified bash script when accessed

## Dependencies

- http-server: For serving static content
- shelljs: For executing shell commands

## Project Structure

```
.
├── index.js           # Main server file
├── package.json       # Project configuration and dependencies
└── public/            # Example folder for static content
    └── test.txt
```

## Parameters

The application accepts two command-line parameters:
- First parameter: Build content folder path
- Second parameter: Install bash file path

These parameters are described in the package.json and used in the index.js file.