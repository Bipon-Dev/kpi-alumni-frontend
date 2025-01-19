# KPI Alumni Frontend

## Overview
This is the frontend application for the Khulna Polytechnic Institute Alumni Association platform. It facilitates networking, career growth, and collaboration among alumni.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Yarn](https://yarnpkg.com/)

### Installation Steps

#### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd kpi-alumni-frontend
```

#### Step 2: Install Dependencies
```bash
yarn install
```

#### Step 3: Start the Development Server
```bash
yarn dev
```
Access the application at: [http://localhost:3000](http://localhost:3000)

#### Step 4: Build the Project
```bash
yarn build
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For queries or suggestions, contact [Bipon Biswas](mailto:bipon770@gmail.com).


# Node Version Manager (nvm-windows)

## Overview
`nvm-windows` is a version management utility for Node.js on Windows. It allows you to easily switch between multiple Node.js versions.

## Installation

1. Download the latest `nvm-windows` installer from the [releases page](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.9).
2. Run the installer and follow the installation instructions.
3. Open a new Command Prompt or PowerShell window to start using `nvm-windows`.

## Usage

### List Installed Versions
To list all Node.js versions installed on your system:
```bash
nvm list
```

### Use a Specific Version
Switch to a specific Node.js version:
```bash
nvm use <version>
```
Example:
```bash
nvm use 20.17.0
```

### Install a New Version
Download and install a specific Node.js version:
```bash
nvm install <version>
```
Example:
```bash
nvm install 18.16.0
```

### Uninstall a Version
Remove an installed Node.js version:
```bash
nvm uninstall <version>
```
Example:
```bash
nvm uninstall 14.18.0
```

### Set a Default Version
Set a default Node.js version for all new terminal sessions:
```bash
nvm alias default <version>
```
Example:
```bash
nvm alias default 20.17.0
```

## Additional Resources
- [nvm-windows Documentation](https://github.com/coreybutler/nvm-windows)
- [Node.js Official Website](https://nodejs.org/)

### Reference
- [Node Version Manager](https://bipon770.gitbook.io/node-version-manager-nvm-windows)
