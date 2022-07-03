// swift-tools-version: 5.6
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
  name: "Test-Driven-Development-By-Example",
  products: [
    // Products define the executables and libraries a package produces, and make them visible to other packages.
    .library(
      name: "Test-Driven-Development-By-Example",
      targets: ["Test-Driven-Development-By-Example"]
    ),
  ],
  targets: [
    .target(
      name: "Test-Driven-Development-By-Example",
      dependencies: []
    ),
    .testTarget(
      name: "Test-Driven-Development-By-ExampleTests",
      dependencies: ["Test-Driven-Development-By-Example"]
    ),
  ]
)
