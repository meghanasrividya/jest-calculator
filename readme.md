# Jest Calculator

This is a simple calculator project that demonstrates the use of basic arithmetic operations and unit testing with Jest. The project includes functions for addition, subtraction, multiplication, and division, along with corresponding test cases.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, you need to clone the repository and install the necessary dependencies.

```bash
# Clone the repository
git clone https://github.com/meghanasrividya/jest-calculator.git

# Navigate to the project directory
cd jest-calculator

# Install dependencies
npm install
```

## Usage

You can use the calculator functions by requiring the `calculator.js` module in your project. Below is an example of how to use the functions:

```javascript
const { add, subtract, multiply, divide } = require('./calculator');

console.log('Addition of 2 and 3:', add(2, 3));          // 5
console.log('Subtraction of 5 from 10:', subtract(10, 5)); // 5
console.log('Multiplication of 2 and 5:', multiply(2, 5)); // 10
console.log('Division of 6 by 2:', divide(6, 2));          // 3
```

## Testing

This project uses Jest for unit testing. To run the tests, use the following command:

```bash
npm test
```

The test cases for the calculator functions are defined in the `calculator.test.js` file. The tests cover various scenarios, including edge cases like division by zero.

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
```` ▋
