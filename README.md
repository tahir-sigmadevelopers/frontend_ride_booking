# Ride Booking Mobile App

A React Native mobile application for connecting riders and customers for ride booking services.

![Ride Booking App](./src/assets/images/rider_logo.png)

## Overview

This ride booking application provides a platform for two types of users:
- **Riders**: Drivers who offer transportation services
- **Customers**: Users who book rides to their destinations

The app features a simple and intuitive UI with role-based access, allowing users to register as either riders or customers.

## Features

### Current Features
- Role selection screen (Rider or Customer)
- Phone number-based registration for both user types
- Responsive UI that works across different device sizes
- Simple state-based navigation

### Planned Features
- User profiles and history
- Real-time ride tracking


## Technology Stack

- **Framework**: React Native with Expo
- **UI Components**: Native components styled with StyleSheet
- **State Management**: React Hooks 
- **Navigation**: Custom state-based navigation
- **Assets**: Local images and custom styling

## Project Structure

```
frontend_ride_booking/
├── src/
│   ├── app/           # Expo Router files (not currently used)
│   ├── assets/
│   │   ├── fonts/     # Custom fonts
│   │   ├── icons/     # App icons
│   │   └── images/    # Images used in the app
│   ├── styles/        # Style definitions
│   ├── utils/         # Utility functions and constants
│   └── App.js         # Main application entry point
├── app.json           # Expo configuration
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm 
- Expo CLI
- Android Studio (for Android development) or Xcode (for iOS development)

### Installation

1. Clone the repository
```bash
git clone https://github.com/tahir-sigmadevelopers/frontend_ride_booking.git
cd frontend_ride_booking
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start

```

4. Run on a device or emulator
- Scan the QR code with the Expo Go app (Android) or Camera app (iOS)
- Press 'a' to run on Android emulator
- Press 'i' to run on iOS simulator

## Usage

1. Launch the app
2. Choose your role (Rider or Customer)
3. Enter your phone number to register
4. Follow the on-screen instructions

## Development

### Adding New Screens

To add a new screen:
1. Create a new component in the appropriate directory
2. Add a new state in the `App.js` file
3. Add navigation logic to switch to the new screen

### Styling

The app uses React Native's StyleSheet for styling. Common styles are defined in the styles directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Maintainer - Muhammad Tahir (MERN Stack Developer) - [tahirsultanofficial@gmail.com]

## Acknowledgments

- [Expo](https://expo.dev/) - For the development framework
- [React Native](https://reactnative.dev/) - For the mobile app framework
