module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "moduleNameMapper": {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__test__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/src/__test__/styleMock.js',
  },
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  "setupFilesAfterEnv": [
    "<rootDir>/src/setuptests.ts"
  ]
}