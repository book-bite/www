/** @type {import('ts-jest').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy' 
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest", 
    "^.+\\.[jt]sx?$": [
      "babel-jest",
      { presets: ["@babel/preset-env", "@babel/preset-react"] }
    ]  
  }
};
